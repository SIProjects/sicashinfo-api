module.exports = app => {
  const {INTEGER, CHAR, BLOB} = app.Sequelize

  let SRC20 = app.model.define('src20', {
    contractAddress: {
      type: CHAR(20).BINARY,
      primaryKey: true
    },
    name: {
      type: BLOB,
      get() {
        let name = this.getDataValue('name')
        return name == null ? null : name.toString()
      },
      set(name) {
        this.setDataValue('name', Buffer.from(name))
      }
    },
    symbol: {
      type: BLOB,
      get() {
        let symbol = this.getDataValue('symbol')
        return symbol == null ? null : symbol.toString()
      },
      set(symbol) {
        this.setDataValue('symbol', Buffer.from(symbol))
      }
    },
    decimals: INTEGER(3).UNSIGNED,
    totalSupply: {
      type: CHAR(32).BINARY,
      get() {
        let totalSupply = this.getDataValue('totalSupply')
        return totalSupply == null ? null : BigInt(`0x${totalSupply.toString('hex')}`)
      },
      set(totalSupply) {
        this.setDataValue(
          'totalSupply',
          Buffer.from(totalSupply.toString(16).padStart(64, '0'), 'hex')
        )
      }
    },
    version: {
      type: BLOB,
      allowNull: true,
      get() {
        let version = this.getDataValue('version')
        return version == null ? null : version.toString()
      },
      set(version) {
        this.setDataValue('version', Buffer.from(version))
      }
    }
  }, {freezeTableName: true, underscored: true, timestamps: false})

  SRC20.associate = () => {
    const {EvmReceiptLog: EVMReceiptLog, Contract} = app.model
    EVMReceiptLog.belongsTo(SRC20, {as: 'src20', foreignKey: 'address', sourceKey: 'contractAddress'})
    SRC20.hasMany(EVMReceiptLog, {as: 'logs', foreignKey: 'address', sourceKey: 'contractAddress'})
    Contract.hasOne(SRC20, {as: 'src20', foreignKey: 'contractAddress'})
    SRC20.belongsTo(Contract, {as: 'contract', foreignKey: 'contractAddress'})
  }

  return SRC20
}
