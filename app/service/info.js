const {Service} = require('egg')

class InfoService extends Service {
  async getInfo() {
    let height = this.app.blockchainInfo.tip.height
    let stakeWeight = JSON.parse(await this.app.redis.hget(this.app.name, 'stakeweight')) || 0
    let feeRate = JSON.parse(await this.app.redis.hget(this.app.name, 'feerate')).find(item => item.blocks === 10).feeRate || 0.004
    let dgpInfo = JSON.parse(await this.app.redis.hget(this.app.name, 'dgpinfo')) || {}
    return {
      height,
      supply: this.getTotalSupply(),
      ...this.app.chain.name === 'mainnet' ? {circulatingSupply: this.getCirculatingSupply()} : {},
      netStakeWeight: Math.round(stakeWeight),
      feeRate,
      dgpInfo
    }
  }

  getTotalSupply() {
    let height = this.app.blockchainInfo.tip.height
    if (height <= this.app.chain.lastPoWBlockHeight) {
      return height * 108150000
    } else {
      let supply = this.app.chain.lastPoWBlockHeight * 108150000
      let reward = 8250
      let interval = 2628000
      let stakeHeight = height - this.app.chain.lastPoWBlockHeight
      let halvings = 0
      while (halvings < 64 && stakeHeight > interval) {
        supply += interval * reward / (1 << halvings++)
        stakeHeight -= interval
      }
      supply += stakeHeight * reward / (1 << halvings)
      return supply
    }
  }

  getTotalMaxSupply() {
    return (108150000 * this.app.chain.lastPoWBlockHeight) + 2628000 * 8250 * (1 - 1 / 2 ** 64) / (1 - 1 / 2)
  }

  getCirculatingSupply() {
    let height = this.app.blockchainInfo.tip.height
    let totalSupply = this.getTotalSupply(height)
    if (this.app.chain.name === 'mainnet') {
      return totalSupply
    } else {
      return totalSupply
    }
  }

  async getStakeWeight() {
    const {Header} = this.ctx.model
    const {gte: $gte} = this.app.Sequelize.Op
    let height = await Header.aggregate('height', 'max', {transaction: this.ctx.state.transaction})
    let list = await Header.findAll({
      where: {height: {[$gte]: height - 500}},
      attributes: ['timestamp', 'bits'],
      order: [['height', 'ASC']],
      transaction: this.ctx.state.transaction
    })
    let interval = list[list.length - 1].timestamp - list[0].timestamp
    let sum = list.slice(1)
      .map(x => x.difficulty)
      .reduce((x, y) => x + y)
    return sum * 2 ** 32 * 16 / interval
  }

  async getFeeRates() {
    let client = new this.app.sicashinfo.rpc(this.app.config.sicashinfo.rpc)
    let results = await Promise.all([2, 4, 6, 10, 12, 24].map(blocks => client.estimatesmartfee(blocks)))
    return [
      {blocks: 2, feeRate: results[0].feerate || 0.004},
      {blocks: 4, feeRate: results[1].feerate || 0.004},
      {blocks: 6, feeRate: results[2].feerate || 0.004},
      {blocks: 10, feeRate: results[3].feerate || 0.004},
      {blocks: 12, feeRate: results[4].feerate || 0.004},
      {blocks: 24, feeRate: results[5].feerate || 0.004}
    ]
  }

  async getDGPInfo() {
    let client = new this.app.sicashinfo.rpc(this.app.config.sicashinfo.rpc)
    let info = await client.getdgpinfo()
    return {
      maxBlockSize: info.maxblocksize,
      minGasPrice: info.mingasprice,
      blockGasLimit: info.blockgaslimit
    }
  }
}

module.exports = InfoService
