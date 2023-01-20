import { create } from 'zustand'
import abi from '../abi/IliosToken'

export const useAppStore = create((set) => ({
  decimals: undefined,
  fetchDecimals: async () => {
    const decimals = await window.myContract.decimals()
    console.log('decimals', decimals)
    set({ decimals })
  },
  tokenName: undefined,
  tokenSymbol: undefined,
  contractAddress: '0x5fbdb2315678afecb367f032d93f642f64180aa3',
  contractLoaded: false,
  setContractLoaded: () => set({ contractLoaded: true }),
  abi: abi,
  connected: false,
  signerAddress: undefined,
  setSignerAddress: (signerAddress) => set({ signerAddress }),
  ready: false,
  totalSupply: undefined,
  fetchTotalSupply: async () => {
    const totalSupply = await window.myContract.totalSupply()
    console.log('totalSupply', totalSupply)
    set({ totalSupply: totalSupply.toNumber() })
  },
  fetchTokenName: async () => {
    const tokenName = await window.myContract.name()
    set({ tokenName })
  },
  fetchTokenSymbol: async () => {
    const tokenSymbol = await window.myContract.symbol()
    set({ tokenSymbol })
  },
  numTokensToMint: 0,
  setNumTokensToMint: (evt) => set({ numTokensToMint: evt.target.value }),
  mint: async (signerAddress, numTokensToMint) => {
    console.log('MINT', signerAddress, numTokensToMint)
    // Never returns
    await window.myContract.mint(signerAddress, numTokensToMint)

    set({ numTokensToMint: 0 })
  },
  transferAddress: undefined,
  setTransferAddress: (evt) => set({ transferAddress: evt.target.value }),
  numTokensToTransfer: undefined,
  setNumTokensToTransfer: (evt) =>
    set({ numTokensToTransfer: evt.target.value }),
  transfer: async (transferAddress, numTokensToTransfer) => {
    console.log('TRANSFER', transferAddress, numTokensToTransfer)
    // Never returns
    await window.myContract.transfer(transferAddress, numTokensToTransfer)

    set({ transferAddress: undefined, numTokensToTransfer: undefined })
  },
  balanceOfAddress: undefined,
  setBalanceOfAddress: (evt) => set({ balanceOfAddress: evt.target.value }),
  balance: undefined,
  balanceOf: async (balanceOfAddress) => {
    console.log('BALANCE OF', balanceOfAddress)
    // Never returns
    const response = await window.myContract.balanceOf(balanceOfAddress)
    console.log('BALANCE OF response', response)
    set({ balance: response.toNumber() })
  },
}))
