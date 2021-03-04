# Blockchain API

- [Blockchain API](#Blockchain-API)
  - [Blockchain Information](#Blockchain-Information)
  - [Supply](#Supply)
  - [Total Max Supply](#Total-Max-Supply)


## Blockchain Information

**Request**
```
GET /info
```

**Response**
```json
{
  "height":165800,
  "supply":1434750000,
  "circulatingSupply":1434750000,
  "netStakeWeight":34580232869248940,
  "feeRate":0.004,
  "dgpInfo": {
    "maxBlockSize":2000000,
    "minGasPrice":40,
    "blockGasLimit":40000000}
    }
}
```


## Supply

**Request**
```
GET /supply
```

**Response**
```json
1434783000
```


## Total Max Supply

**Request**
```
GET /total-max-supply
```

**Response**
```json
42000000000
```
