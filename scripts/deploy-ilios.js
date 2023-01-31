const { ethers } = require('hardhat')

async function deploy() {
  const [deployer] = await ethers.getSigners()
  console.log('Deploying contracts with the account:', deployer.address)
  console.log('Account balance:', (await deployer.getBalance()).toString())
  const IliosToken = await ethers.getContractFactory('IliosToken')
  const ilios = await IliosToken.deploy()
  await ilios.deployed()

  return ilios
}

async function getTokenInfo(ilios) {
  console.log('Token Name ' + (await ilios.name()))
  console.log('Token Symbol ' + (await ilios.symbol()))
  console.log('Token Address ' + ilios.address)
}

deploy().then(getTokenInfo)
