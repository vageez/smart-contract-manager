const { ethers } = require('hardhat')

async function deploy() {
  const IliosToken = await ethers.getContractFactory('IliosToken')
  const ilios = await IliosToken.deploy()
  await ilios.deployed()

  return ilios
}

async function getSymbol(ilios) {
  console.log('Get Token Symbol' + (await ilios.symbol()))
}

deploy().then(getSymbol)
