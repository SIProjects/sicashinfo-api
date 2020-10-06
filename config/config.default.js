const path = require('path')
const Redis = require('ioredis')

const redisConfig = {
  host: 'localhost',
  port: 6379,
  password: 'foobared',
  db: 0
}

exports.keys = 'sicashinfo-api'

exports.security = {
  csrf: {enable: false}
}

exports.middleware = ['ratelimit']

exports.cors = {
    origin: '*'  // Access-Control-Allow-Origin: *
}

exports.redis = {
  client: redisConfig
}

exports.ratelimit = {
  db: new Redis(redisConfig),
  headers: {
    remaining: 'Rate-Limit-Remaining',
    reset: 'Rate-Limit-Reset',
    total: 'Rate-Limit-Total',
  },
  disableHeader: false,
  errorMessage: 'Rate Limit Exceeded',
  duration: 10 * 60 * 1000,
  max: 10 * 60
}

exports.io = {
  redis: {
    ...redisConfig,
    key: 'sicashinfo-api-socket.io'
  },
  namespace: {
    '/': {connectionMiddleware: ['connection']}
  }
}

exports.sequelize = {
  dialect: 'mysql',
  database: 'sicash_testnet',
  host: 'localhost',
  port: 3306,
  username: 'sicash',
  password: 'sicash123'
}

exports.sicash = {
  chain: 'testnet'
}

exports.sicashinfo = {
  path: path.resolve('..', 'sicashinfo'),
  port: 3001,
  rpc: {
    protocol: 'http',
    host: 'localhost',
    port: 18332,
    user: 'user',
    password: 'password'
  }
}

exports.cmcAPIKey = null
