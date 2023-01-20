// import '@nomiclabs/hardhat-ethers'
const { ethers } = require('hardhat')
const { expect } = require('chai')

describe('Ilios token name and symbol', function () {
  it('should say ILO', async function () {
    const IliosToken = await ethers.getContractFactory('IliosToken')
    const ilios = await IliosToken.deploy()
    await ilios.deployed()

    expect(await ilios.name()).to.equal('Ilios')
    expect(await ilios.symbol()).to.equal('ILO')
  })
})
