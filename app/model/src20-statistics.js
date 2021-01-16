module.exports = app => {
  const {INTEGER, CHAR} = app.Sequelize

  let SRC20Statistics = app.model.define('src20_statistics', {
    contractAddress: {
      type: CHAR(20).BINARY,
      primaryKey: true
    },
    holders: INTEGER.UNSIGNED,
    transactions: INTEGER.UNSIGNED
  }, {freezeTableName: true, underscored: true, timestamps: false})

  SRC20Statistics.associate = () => {
    const {Src20: SRC20} = app.model
    SRC20Statistics.belongsTo(SRC20, {as: 'src20', foreignKey: 'contractAddress'})
    SRC20.hasOne(SRC20Statistics, {as: 'statistics', foreignKey: 'contractAddress'})
  }

  return SRC20Statistics
}
