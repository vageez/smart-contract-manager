/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { useEffect, useState } from 'react'
import { useAppStore } from './useAppStore'
import { ethers } from 'ethers'

export const useEventListener = () => {
  const [txs, setTxs] = useState()
  const appStore = useAppStore()
  const { contractAddress, abi, contractLoaded } = appStore
  console.log(
    'useEvent',
    process.env.NEXT_PUBLIC_HTTPS,
    process.env.NEXT_PUBLIC_APIKEY,
  )
  const provider = new ethers.providers.JsonRpcBatchProvider(
    process.env.NEXT_PUBLIC_HTTPS,
  )
  const contract = new ethers.Contract(contractAddress, abi, provider)

  const handleTransfer = (from, to, value) => {
    console.log('handleTransfer', from, to, value)
  }
  const handlePause = (address) => {
    console.log('handlePause', address)
  }

  useEffect(() => {
    if (!contractLoaded) return undefined
    contract.on(window.myContract.filters.Transfer(), handleTransfer)
    contract.on(window.myContract.filters.Paused(), handlePause)

    return () => {
      // Must clean up
      contract.removeAllListeners('Transfer')
      contract.removeAllListeners('Paused')
    }
  }, [contractLoaded])

  return undefined
}
