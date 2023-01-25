require('@nomicfoundation/hardhat-toolbox')
require('@nomiclabs/hardhat-ganache')

const PUBLIC_WEBSOCKET = 'wss://goerli.infura.io/ws/v3/'
const MAINNET_WEBSOCKET = 'wss://goerli.infura.io/ws/v3/'

const GOERLI_HTTPS = 'https://goerli.infura.io/v3/'
const INFURA_APIKEY = '0f58dac5beff4cae9b340339d9ec033c'
const GOERLI_CONTRACT_ADDRESS = '0x6ca69103eBFf66949df9C994116F09Af350Ed875' // ILIOS

const MAINNET_HTTPS = 'https://goerli.infura.io/v3/'
const METAMASK_GOERLI_PK =
  '7fb7192a139d1d4a409ae5810d6f880862a47b6ea10e4453cf65933c96e3814c'

const METAMASK_MAINNET_PK =
  '7fb7192a139d1d4a409ae5810d6f880862a47b6ea10e4453cf65933c96e3814c'

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.8.17',
  networks: {
    hardhat: {
      chainId: 1337,
    },
    goerli: {
      url: `${GOERLI_HTTPS}${INFURA_APIKEY}`,
      accounts: [METAMASK_GOERLI_PK],
    },
    mainnet: {
      url: `${MAINNET_HTTPS}${INFURA_APIKEY}`,
      accounts: [METAMASK_MAINNET_PK],
    },
  },
}
