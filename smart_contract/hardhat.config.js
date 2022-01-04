require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/bhy-qh5UzCzKMiIfqufkIGje2yF7QH2f',
      accounts: ['6a2e2b8fe953d7214ea9a3adcafd57ff50d051eccbf90bd2db1ca2568f774318']
    }
  }
}
