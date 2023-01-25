# ETH Smart Contract Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

# BIG INT CONVERSION

https://docs.ethers.org/v5/api/utils/bignumber/#BigNumber--BigNumber--methods--conversion

# ETH address generator

https://vanity-eth.tk/

# SOME COMMANDS

```shell
git init
yarn init -y
yarn add -D hardhat
yarn add -D @nomiclabs/hardhat-ethers ethers @nomiclabs/hardhat-waffle ethereum-waffle chai

// TYPESCRIPT
yarn add -D ts-node typescript
yarn add -D chai @types/node @types/mocha @types/chai
// TYPESCRIPT

npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```

# RUNNING CONTRACT AND APP

1. COMPILE CONTRACT
   root> npx hardhat compile

2. SET UP TEST NETWORK

   root> npx hardhat node

   - (Creates a local ethereum network on your local computer)

   root> npx hardhat run scripts/deploy-ilios.js --network localhost

   - Deploy contract to local network

3. RUN WEB APP
   web-app> npm start

4. ERRORS WHEN EXECUTING - When working in development MetaMask(Settings > Advanced), resetting account is necessary, otherwise NONCE does not add up.
