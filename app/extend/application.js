const path = require('path')

const CHAIN = Symbol('sicash.chain')

module.exports = {
  get chain() {
    this[CHAIN] = this[CHAIN] || this.sicashinfo.lib.Chain.get(this.config.sicash.chain)
    return this[CHAIN]
  },
  get sicashinfo() {
    return {
      lib: require(path.resolve(this.config.sicashinfo.path, 'lib')),
      rpc: require(path.resolve(this.config.sicashinfo.path, 'rpc'))
    }
  }
}
