# ETH Smart Contract Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

# BIG INT CONVERSION

https://docs.ethers.org/v5/api/utils/bignumber/#BigNumber--BigNumber--methods--conversion

# ETH address generator

https://vanity-eth.tk/

# CALCULATE GAS

When trying to estimate Gas, run the same transaction on a local or test node.
Then do the following.

GO TO: https://etherscan.io/tx/0x8f65e820080dc90841e6618347e23ceef0e7d9dd16bc3bd968ad597f7afa07a7
Transaction Details > Gas Limit & Usage by Txn COPY VALUE
GO TO: https://etherscan.io/gastracker
COPY VALUE Value GWEI

Gas Limit & Usage by Txn \* Value GWEI = GWEI TOTAL

GO TO: https://eth-converter.com/

Paste GWEI TOTAL in Gwei field.
This will return you the amount in Ether to execute the transaction. From here you can convert the Ether to dollars.

# SOME COMMANDS

```shell
git init
yarn init -y
yarn add -D hardhat
yarn add -D @nomiclabs/hardhat-ethers ethers @nomiclabs/hardhat-waffle ethereum-waffle chai

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

4. ERRORS WHEN EXECUTING LOCALLY - When working in development MetaMask(Settings > Advanced), resetting account is necessary, otherwise NONCE does not add up.
