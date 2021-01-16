module.exports = app => {
  const {CHAR} = app.Sequelize

  let SRC721Token = app.model.define('src721_token', {
    contractAddress: {
      type: CHAR(20).BINARY,
      primaryKey: true
    },
    tokenId: {
      type: CHAR(32).BINARY,
      primaryKey: true
    },
    holder: CHAR(20).BINARY
  }, {freezeTableName: true, underscored: true, timestamps: false})

  SRC721Token.associate = () => {
    const {Contract} = app.model
    Contract.hasMany(SRC721Token, {as: 'src721Tokens', foreignKey: 'contractAddress'})
    SRC721Token.belongsTo(Contract, {as: 'contract', foreignKey: 'contractAddress'})
  }

  return SRC721Token
}
