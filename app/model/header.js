module.exports = app => {
  const {INTEGER, CHAR, BLOB} = app.Sequelize

  let Header = app.model.define('header', {
    hash: {
      type: CHAR(32).BINARY,
      unique: true
    },
    height: {
      type: INTEGER.UNSIGNED,
      primaryKey: true
    },
    version: INTEGER,
    prevHash: {
      type: CHAR(32).BINARY,
      defaultValue: Buffer.alloc(32)
    },
    merkleRoot: CHAR(32).BINARY,
    timestamp: INTEGER.UNSIGNED,
    bits: INTEGER.UNSIGNED,
    nonce: INTEGER.UNSIGNED,
    hashStateRoot: CHAR(32).BINARY,
    hashUTXORoot: {type: CHAR(32).BINARY, field: 'hash_utxo_root'},
    stakePrevTxId: {type: CHAR(32).BINARY, field: 'stake_prev_transaction_id'},
    stakeOutputIndex: INTEGER.UNSIGNED,
    signature: BLOB,
    chainwork: {
      type: CHAR(32).BINARY,
      get() {
        return BigInt(`0x${this.getDataValue('chainwork').toString('hex')}`)
      },
      set(value) {
        return this.setDataValue(
          'chainwork',
          Buffer.from(value.toString(16).padStart(64, '0'), 'hex')
        )
      }
    }
  }, {
    freezeTableName: true, underscored: true, timestamps: false,
    getterMethods: {
      difficulty() {
        function getTargetDifficulty(bits) {
          return (bits & 0xffffff) * 2 ** ((bits >>> 24) - 3 << 3)
        }
        return getTargetDifficulty(0x1d00ffff) / getTargetDifficulty(this.bits)
      }
    }
  })

  Header.prototype.isProofOfStake = function isProofOfStake() {
    return Buffer.compare(this.stake_prev_transaction_id, Buffer.alloc(32)) !== 0
      && this.stake_output_index !== 0xffffffff
  }

  return Header
}
