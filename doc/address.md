# Address API

- [Address API](#address-api)
  - [Address Information](#address-information)
  - [Address Balance](#address-balance)
  - [Address Transactions](#address-transactions)
  - [Address Basic Transactions](#address-basic-transactions)
  - [Address Contract Transactions](#address-contract-transactions)
  - [Address SRC20 Token Transactions](#address-src20-token-transactions)
  - [Address UTXO List](#address-utxo-list)
  - [Address Balance History](#address-balance-history)
  - [Address SRC20 Balance History](#address-src20-balance-history)


## Address Information

**Request URL**
```
GET /address/:address
```

**Request**
```
GET /address/SSM3dVVXtGinAXPt5kWq2SmR6J6pBQ1Nb2/
```

**Response**
```json
{
  "balance":"5917438741282096",
  "totalReceived":"22408200720624096",
  "totalSent":"16490761979342000",
  "unconfirmed":"0",
  "staking":"0",
  "mature":"5917438741282096",
  "src20Balances":[],
  "src721Balances":[],
  "ranking":9,
  "transactionCount":19529,
  "blocksMined":19498
  }
```


## Address Balance

**Request URL**
```
GET /address/:address/balance
GET /address/:address/balance/:category
GET /address/:address/balance/total-received
GET /address/:address/balance/total-sent
GET /address/:address/balance/unconfirmed
GET /address/:address/balance/staking
GET /address/:address/balance/mature
```

**Request**
```
GET /address/SSM3dVVXtGinAXPt5kWq2SmR6J6pBQ1Nb2/balance
GET /address/SSM3dVVXtGinAXPt5kWq2SmR6J6pBQ1Nb2/balance/total-received
GET /address/SSM3dVVXtGinAXPt5kWq2SmR6J6pBQ1Nb2/balance/total-sent
GET /address/SSM3dVVXtGinAXPt5kWq2SmR6J6pBQ1Nb2/balance/unconfirmed
GET /address/SSM3dVVXtGinAXPt5kWq2SmR6J6pBQ1Nb2/balance/staking
GET /address/SSM3dVVXtGinAXPt5kWq2SmR6J6pBQ1Nb2/balance/mature
```

**Response**
```
5917438741282096
22408200720624096
16490761979342000
0
0
5917438741282096
```


## Address Transactions
Returns all transaction ids the address related to.

**Request URL**
```
GET /address/:address/txs
```

**Request Parameters**
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Default</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td colspan="3">
              <a href="https://github.com/SIProjects/sicashinfo-api/blob/master/README.md#Pagination-Parameters">
                Pagination Parameters
              </a>
            </td>
        </tr>
        <tr>
            <td colspan="3">
              <a href="https://github.com/SIProjects/sicashinfo-api/blob/master/README.md#Block--Timestamp-Filter-Parameters">
                Block / Timestamp Filter Parameters
              </a>
            </td>
        </tr>
        <tr>
            <td>
              <code>reversed</code>
            </td>
            <td>
              <code>true</code>
            </td>
            <td>Return records reversed</td>
        </tr>
    </tbody>
</table>

**Request**
```
GET /address/SSM3dVVXtGinAXPt5kWq2SmR6J6pBQ1Nb2/txs?limit=10&offset=0&reversed=false
```

**Response**
```json
{
  "totalCount":19529,
  "transactions":[
  "a9e9a850b48d1d3c5099ef4c2724096693bf23ef496a34627bfb1dc44c8e33fa",
  "0100d433a681fabecd40bb00c702c5a760a980399b22a7297737510acf81d843",
  "847d185b2fbcff6b5ac4d8a2f6cd9c0babe2f0d9823241e1689b4ec9391ce2af",
  "f0e487dd62eb7ce0f0e5c5ffa4664fdd9a641f860b3eca48bdbcb5d751afeac7",
  "4fbd1483ab9636da29a069bab9a9ac98de81dd5f9a936b7bd50d9c7cff9b68e4",
  "aecd668c13622693df930a397d4fea2f528c0d6cccbe34217637ca5a7e5362ea",
  "bd3a154fa4c35a468c33f3e2d2375f7179b10ef18eaf57ece69d0e521f85e479",
  "99c4f863d6af65c7e4b3b2007e8d5a473b4da56550e2e5a634714b8363b568b4",
  "1bb7b192b620ef8b74d76801b5ab9bd4c8be5d05a258871148e72b965420c8c8",
  "172a0f4824a84478414b6f928fa4ac693d85c04aba2af33fb192a803188b407c"
  ]
}
```


## Address Basic Transactions
Returns all transactions the address changes it's SICASH balance.

**Request URL**
```
GET /address/:address/basic-txs
```

**Request Parameters**
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Default</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td colspan="3">
              <a href="https://github.com/SIProjects/sicashinfo-api/blob/master/README.md#Pagination-Parameters">
                Pagination Parameters
              </a>
            </td>
        </tr>
        <tr>
            <td colspan="3">
              <a href="https://github.com/SIProjects/sicashinfo-api/blob/master/README.md#Block--Timestamp-Filter-Parameters">
                Block / Timestamp Filter Parameters
              </a>
            </td>
        </tr>
        <tr>
            <td>
              <code>reversed</code>
            </td>
            <td>
              <code>true</code>
            </td>
            <td>Return records reversed</td>
        </tr>
    </tbody>
</table>

**Request**
```
GET /address/SSM3dVVXtGinAXPt5kWq2SmR6J6pBQ1Nb2/basic-txs?limit=5&offset=0&fromBlock=90000&toBlock=100000
```

**Response**
```json
{
  "totalCount":0,
  "transactions":[]
}
```


## Address Contract Transactions
Returns all transactions the address calls a contract.

**Request URL**
```
GET /address/:address/contract-txs
GET /address/:address/contract-txs/:contract
```

**Request Parameters**
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Default</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td colspan="3">
              <a href="https://github.com/SIProjects/sicashinfo-api/blob/master/README.md#Pagination-Parameters">
                Pagination Parameters
              </a>
            </td>
        </tr>
        <tr>
            <td colspan="3">
              <a href="https://github.com/SIProjects/sicashinfo-api/blob/master/README.md#Block--Timestamp-Filter-Parameters">
                Block / Timestamp Filter Parameters
              </a>
            </td>
        </tr>
        <tr>
            <td>
              <code>reversed</code>
            </td>
            <td>
              <code>true</code>
            </td>
            <td>Return records reversed</td>
        </tr>
    </tbody>
</table>

**Request #1**
```
GET /address/SSM3dVVXtGinAXPt5kWq2SmR6J6pBQ1Nb2/contract-txs/
```

**Response #1**
```json
{
  "totalCount":0,
  "transactions":[]
  }
```

**Request #2**
```
GET /address/SSM3dVVXtGinAXPt5kWq2SmR6J6pBQ1Nb2/contract-txs?limit=3&offset=10&fromBlock=160000&toBlock=170000
```

**Response #2**
```json
{
  "totalCount":0,
  "transactions":[]
  }
```


## Address SRC20 Token Transactions

**Request URL**
```
GET /address/:address/src20-txs/:tokenAddress
```

**Request Parameters**
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Default</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td colspan="3">
              <a href="https://github.com/SIProjects/sicashinfo-api/blob/master/README.md#Pagination-Parameters">
                Pagination Parameters
              </a>
            </td>
        </tr>
        <tr>
            <td colspan="3">
              <a href="https://github.com/SIProjects/sicashinfo-api/blob/master/README.md#Block--Timestamp-Filter-Parameters">
                Block / Timestamp Filter Parameters
              </a>
            </td>
        </tr>
        <tr>
            <td>
              <code>reversed</code>
            </td>
            <td>
              <code>true</code>
            </td>
            <td>Return records reversed</td>
        </tr>
    </tbody>
</table>

**Request**
```
GET /address/SSM3dVVXtGinAXPt5kWq2SmR6J6pBQ1Nb2/src20-txs/fe59cbc1704e89a698571413a81f0de9d8f00c69
```

**Response**
```json
{
  "totalCount":0,
  "transactions":[]
  }
```


## Address UTXO List

**Request URL**
```
GET /address/:address/utxo
```

**Request**
```
/address/SSM3dVVXtGinAXPt5kWq2SmR6J6pBQ1Nb2/utxo
```

**Response**
```json
[
  {"transactionId":"f6133bb41dc0c6ac2986a19624530315783a98453f1f30ef64042655ee095ef9",
  "outputIndex":1,
  "scriptPubKey":"21022f4fc04beb8344ae8fb13fd81aa408d3c763556971e2aacad0c7b4d76522c720ac",
  "address":"SSM3dVVXtGinAXPt5kWq2SmR6J6pBQ1Nb2",
  "value":"1481625000000",
  "isStake":true,
  "blockHeight":5007,
  "confirmations":160817
  },
  {
  "transactionId":"ef30a8755048573576ca5987a8e153a2631572e69f4301fda92c0d433f31c9ff",
  "outputIndex":1,
  "scriptPubKey":"21022f4fc04beb8344ae8fb13fd81aa408d3c763556971e2aacad0c7b4d76522c720ac",
  "address":"SSM3dVVXtGinAXPt5kWq2SmR6J6pBQ1Nb2",
  "value":"1481625000000",
  "isStake":true,
  "blockHeight":5059,
  "confirmations":160765
  },
  {
  "transactionId":"b77f31fecfe5c1d79b6045858c292c53a6b360f97e3d8077a47ace906dc863d3",
  "outputIndex":1,
  "scriptPubKey":"21022f4fc04beb8344ae8fb13fd81aa408d3c763556971e2aacad0c7b4d76522c720ac",
  "address":"SSM3dVVXtGinAXPt5kWq2SmR6J6pBQ1Nb2",
  "value":"1481625000000",
  "isStake":true,
  "blockHeight":5083,
  "confirmations":160741
  },
  {
  "transactionId":"be459d8ce4184d60ef1ac9f2d98f8f9b40b7a3a634f586acdab3bed78682794d",
  "outputIndex":1,
  "scriptPubKey":"21022f4fc04beb8344ae8fb13fd81aa408d3c763556971e2aacad0c7b4d76522c720ac",
  "address":"SSM3dVVXtGinAXPt5kWq2SmR6J6pBQ1Nb2",
  "value":"1481625000000",
  "isStake":true,
  "blockHeight":5093,
  "confirmations":160731
  },
  {
  "transactionId":"d934030f60262dcb38404de8a5cf185047cebdaa808edc29d8d6b01e3e021d1a",
  "outputIndex":2,
  "scriptPubKey":"21022f4fc04beb8344ae8fb13fd81aa408d3c763556971e2aacad0c7b4d76522c720ac",
  "address":"SSM3dVVXtGinAXPt5kWq2SmR6J6pBQ1Nb2",
  "value":"1481625000000",
  "isStake":true,
  "blockHeight":5146,
  "confirmations":160678
  },
  {
  "transactionId":"2add74d5833c29b3fa12a8af900610a5b3681e8577dd0296d08e4011dd4fba3a",
  "outputIndex":1,
  "scriptPubKey":"21022f4fc04beb8344ae8fb13fd81aa408d3c763556971e2aacad0c7b4d76522c720ac",
  "address":"SSM3dVVXtGinAXPt5kWq2SmR6J6pBQ1Nb2",
  "value":"1481625000000",
  "isStake":true,
  "blockHeight":5208,
  "confirmations":160616
  },
  {
  "transactionId":"abf241007095379a0a67118489169ec0a99450ca0125a5b8c55c9a5e3fb87fa6",
  "outputIndex":2,
  "scriptPubKey":"21022f4fc04beb8344ae8fb13fd81aa408d3c763556971e2aacad0c7b4d76522c720ac",
  "address":"SSM3dVVXtGinAXPt5kWq2SmR6J6pBQ1Nb2",
  "value":"1481625000000",
  "isStake":true,
  "blockHeight":5238,
  "confirmations":160586
  },
  {
  "transactionId":"a4850d59dece50f79500b2181de1ae1bfe4daaa74f4c596f02995f0276f53846",
  "outputIndex":1,
  "scriptPubKey":"21022f4fc04beb8344ae8fb13fd81aa408d3c763556971e2aacad0c7b4d76522c720ac",
  "address":"SSM3dVVXtGinAXPt5kWq2SmR6J6pBQ1Nb2",
  "value":"1481625000000",
  "isStake":true,
  "blockHeight":5301,
  "confirmations":160523
  },
  {
  "transactionId":"d0277341f5eae941d247c0f9542349f585847c0723ea2146a562594df75c40fd",
  "outputIndex":1,
  "scriptPubKey":"21022f4fc04beb8344ae8fb13fd81aa408d3c763556971e2aacad0c7b4d76522c720ac",
  "address":"SSM3dVVXtGinAXPt5kWq2SmR6J6pBQ1Nb2",
  "value":"1481625000000",
  "isStake":true,
  "blockHeight":5361,
  "confirmations":160463
  },
  {
  "transactionId":"53a36cf2d573780227103413f231532fa061c179726c31b2bd175e7bc92fefbf",
  "outputIndex":1,
  "scriptPubKey":"21022f4fc04beb8344ae8fb13fd81aa408d3c763556971e2aacad0c7b4d76522c720ac",
  "address":"SSM3dVVXtGinAXPt5kWq2SmR6J6pBQ1Nb2",
  "value":"1481625000000",
  "isStake":true,
  "blockHeight":5377,
  "confirmations":160447
  },
  {
  "transactionId":"09076e946f7aac8cfd6cd511da620f476e523af4e4919287dfef60597c5f9c12",
  "outputIndex":1,
  "scriptPubKey":"21022f4fc04beb8344ae8fb13fd81aa408d3c763556971e2aacad0c7b4d76522c720ac",
  "address":"SSM3dVVXtGinAXPt5kWq2SmR6J6pBQ1Nb2",
  "value":"1481625000000",
  "isStake":true,
  "blockHeight":5403,
  "confirmations":160421
  },
  {
  "transactionId":"b19325661ce3cbed9b0097ca43a708dd6b15d2b8f1b9626c7529316acd40c102",
  "outputIndex":1,
  "scriptPubKey":"21022f4fc04beb8344ae8fb13fd81aa408d3c763556971e2aacad0c7b4d76522c720ac",
  "address":"SSM3dVVXtGinAXPt5kWq2SmR6J6pBQ1Nb2",
  "value":"1481625000000",
  "isStake":true,
  "blockHeight":5426,
  "confirmations":160398
  },
  {
  "transactionId":"0a844f5595028aa5569671eaf7acf8eae48bc988fd1e03daaa70d908b3cff838",
  "outputIndex":1,
  "scriptPubKey":"21022f4fc04beb8344ae8fb13fd81aa408d3c763556971e2aacad0c7b4d76522c720ac",
  "address":"SSM3dVVXtGinAXPt5kWq2SmR6J6pBQ1Nb2",
  "value":"1481625000000",
  "isStake":true,
  "blockHeight":5437,
  "confirmations":160387
  },
  {
  "transactionId":"bece9c1d7c82d011a0547dad40629650ba8dfbaa71c85e6ec6ead9efb1b13264",
  "outputIndex":2,
  "scriptPubKey":"21022f4fc04beb8344ae8fb13fd81aa408d3c763556971e2aacad0c7b4d76522c720ac",
  "address":"SSM3dVVXtGinAXPt5kWq2SmR6J6pBQ1Nb2",
  "value":"1481625000000",
  "isStake":true,
  "blockHeight":5479,
  "confirmations":160345
  },
  {
    "transactionId": "d2be50b6b5b31da4ee5e0a68f2ec15f2310e442b49486bca6db15a2f706c2c1e",
    "outputIndex": 1,
    "scriptPubKey": "21036f2f1ad6d7edc0a65c6dc1a817cafcd6c0884177bdc95531ade77ceb287d793eac",
    "value": "32410000000",
    "isStake": true,
    "blockHeight": 391823,
    "confirmations": 15483
  },
  {
    "transactionId": "d2be50b6b5b31da4ee5e0a68f2ec15f2310e442b49486bca6db15a2f706c2c1e",
    "outputIndex": 2,
    "scriptPubKey": "21036f2f1ad6d7edc0a65c6dc1a817cafcd6c0884177bdc95531ade77ceb287d793eac",
    "value": "32410000000",
    "isStake": true,
    "blockHeight": 391823,
    "confirmations": 15483
  },
  {
    "transactionId": "cf14a7e947fc4804c250d87f3371b4103c978411caac71dcce6e2f164f1d28da",
    "outputIndex": 0,
    "scriptPubKey": "76a9143757f6e354b86ff00e4ea2c4670631da4a77118e88ac",
    "value": "27300000000",
    "isStake": false,
    "blockHeight": 400963,
    "confirmations": 6343
  },
  {
    "transactionId": "56552f57c051bf4a0d3b08b499ad94a80370f7d0061dcdea0395cd2dd1044b19",
    "outputIndex": 1,
    "scriptPubKey": "21036f2f1ad6d7edc0a65c6dc1a817cafcd6c0884177bdc95531ade77ceb287d793eac",
    "value": "12874000000",
    "isStake": true,
    "blockHeight": 407212,
    "confirmations": 94
  },
  {
    "transactionId": "56552f57c051bf4a0d3b08b499ad94a80370f7d0061dcdea0395cd2dd1044b19",
    "outputIndex": 2,
    "scriptPubKey": "21036f2f1ad6d7edc0a65c6dc1a817cafcd6c0884177bdc95531ade77ceb287d793eac",
    "value": "12874455770",
    "isStake": true,
    "blockHeight": 407212,
    "confirmations": 94
  }
]
```


## Address Balance History

**Request URL**
```
GET /address/:address/balance-history
```

**Request Parameters**
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Default</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td colspan="3">
              <a href="https://github.com/SIProjects/sicashinfo-api/blob/master/README.md#Pagination-Parameters">
                Pagination Parameters
              </a>
            </td>
        </tr>
        <tr>
            <td>
              <code>reversed</code>
            </td>
            <td>
              <code>true</code>
            </td>
            <td>Return records reversed</td>
        </tr>
    </tbody>
</table>

**Request**
```
GET /address/SSM3dVVXtGinAXPt5kWq2SmR6J6pBQ1Nb2/balance-history?limit=5&offset=0
```

**Response**
```json
{
   "totalCount":19529,
   "transactions": [
   {
    "id":"b27b97c1488abc556f655be0eeaefba3d7623ea5fc44cdbe3810a88f75d7cbb5",
    "blockHash":"6515b6cdcd6bc3ea09537bf1b2cb30ca7bf14b86db64eb4bf26a3244dd4f1da0",
    "blockHeight":123284,
    "timestamp":1612364320,
    "amount":"-500000028060000",
    "balance":"5917438741282096"
    },
    {
    "id":"2c0f89408ae0c0bd9b5a10afb2953a11f7fe3a39c4118ca91e9db822a0d79d39",
    "blockHash":"52bf50ae2049590c780be9ffdbc448beaf5b61093959db548a1d458631285b0b",
    "blockHeight":82085,"timestamp":1609928864,"amount":"800250000000","balance":"6417438769342096"
    },
    {
    "id":"477501b777d27cf7a8675822a18652250fcef4cf835626807bf9159e739f3df3",
    "blockHash":"bd0831fdf40caa57833a775a3812921f9104869883c27c75aaa68b9a92f8f993",
    "blockHeight":82077,
    "timestamp":1609928528,
    "amount":"800250000000",
    "balance":"6416638519342096"
    },
    {
    "id":"86536b727053a8ff4dd9a57e7cc9497132118f40abd1d08088b0514a46d4fffa",
    "blockHash":"0ad9f94d00f89e443da65c196b2b0648c458bf77b48043b8837366cfa81802ed",
    "blockHeight":82075,
    "timestamp":1609928224,
    "amount":"800250000000",
    "balance":"6415838269342096"
    },
    {
    "id":"7189a0114d83873d7e29d67547b7330df3d6f2486a02886528758dd17b0e5458",
    "blockHash":"c386581c07ba502e186a1f82fb26d159d3adac6c6b67a3459a037ed16f1bd655",
    "blockHeight":82062,
    "timestamp":1609927552,
    "amount":"800250000000",
    "balance":"6415038019342096"
    }
   ]
  }
```


## Address SRC20 Balance History

**Request URL**
```
GET /address/:address/src20-balance-history
GET /address/:address/src20-balance-history/:token
```

**Request Parameters**
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Default</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td colspan="3">
              <a href="https://github.com/SIProjects/sicashinfo-api/blob/master/README.md#Pagination-Parameters">
                Pagination Parameters
              </a>
            </td>
        </tr>
        <tr>
            <td>
              <code>reversed</code>
            </td>
            <td>
              <code>true</code>
            </td>
            <td>Return records reversed</td>
        </tr>
    </tbody>
</table>

**Request #1**
```
GET /address/SSM3dVVXtGinAXPt5kWq2SmR6J6pBQ1Nb2/src20-balance-history?limit=5&offset=0
```

**Response #1**
```json

{
  "totalCount":0,
  "transactions": [ ]
}

```

**Request #2**
```
GET /address/SSM3dVVXtGinAXPt5kWq2SmR6J6pBQ1Nb2/src20-balance-history/fe59cbc1704e89a698571413a81f0de9d8f00c69
```

**Response #2**
```json
{
  "totalCount":0,
  "transactions": [ ]
}

```
