'use client'
import React, { useEffect } from 'react'
import { useAppStore } from '../hooks/useAppStore'
import { useMetaMask } from '../hooks/useMetaMask'

export const TokenManager = () => {
  const appStore = useAppStore((state) => state)
  const {
    tokenName,
    tokenSymbol,
    fetchTokenName,
    fetchTokenSymbol,
    signerAddress,
    contractAddress,
    setSignerAddress,
    contractLoaded,
    totalSupply,
    fetchTotalSupply,
    numTokensToMint,
    setNumTokensToMint,
    mint,
    decimals,
    fetchDecimals,
    transferAddress,
    setTransferAddress,
    numTokensToTransfer,
    setNumTokensToTransfer,
    transfer,
    balanceOfAddress,
    setBalanceOfAddress,
    balanceOf,
    balance,
  } = appStore

  useMetaMask()

  console.log('appStore', appStore)

  useEffect(() => {
    if (contractLoaded) {
      window.mySigner.getAddress().then((address) => {
        setSignerAddress(address)
      })
    } else {
      return undefined
    }
  }, [contractLoaded])

  useEffect(() => {
    if (contractLoaded && signerAddress) {
      fetchTotalSupply()
      fetchTokenName()
      fetchTokenSymbol()
      fetchDecimals()
    } else {
      return undefined
    }
  }, [contractLoaded, signerAddress])

  return (
    <>
      {contractLoaded && signerAddress ? (
        <>
          <section className="border border-slate-200 border-solid rounded-sm p-5 my-5 bg-slate-50">
            <h1 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Connected To <b>{tokenName}</b> Contract <b>{contractAddress}</b>{' '}
              and MetaMask
            </h1>
            <h3 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Token Name : {tokenName}
            </h3>
            <h3 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Token Symbol : {tokenSymbol}
            </h3>
            <h3 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Total Supply: {totalSupply}
            </h3>
            <h3 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Decimals: {decimals}
            </h3>
            <h3 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Signer Address : {signerAddress}
            </h3>
          </section>
          <section className="border border-slate-200 border-solid rounded-sm p-5 my-5 bg-slate-50">
            <div className="grid gap-6 mb-6 ">
              <div>
                <label
                  htmlFor="mint"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Number of Tokens to Mint
                </label>
                <input
                  type="number"
                  id="mint"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                  defaultValue={numTokensToMint}
                  onChange={(evt) => setNumTokensToMint(evt)}
                />
              </div>
              <button
                type="submit"
                disabled={numTokensToMint > 0 ? false : true}
                onClick={() => mint(signerAddress, numTokensToMint)}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:opacity-50"
              >
                Mint
              </button>
            </div>
          </section>

          <section className="border border-slate-200 border-solid rounded-sm p-5 my-5 bg-slate-50">
            <div className="grid gap-6 mb-6 ">
              <div>
                <label
                  htmlFor="transfer"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  NUMBER OF TOKENS TO TRANSFER
                </label>
                <input
                  type="number"
                  id="transfer"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                  defaultValue={numTokensToTransfer}
                  onChange={(evt) => setNumTokensToTransfer(evt)}
                />
                <label
                  htmlFor="transfer"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  RECIEVER ADDRESS
                </label>
                <input
                  type="text"
                  id="address"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                  defaultValue={transferAddress}
                  onChange={(evt) => setTransferAddress(evt)}
                />
              </div>
              <button
                type="submit"
                // disabled={transferAddress === undefined ? true : false}
                onClick={() => transfer(transferAddress, numTokensToTransfer)}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:opacity-50"
              >
                Transfer
              </button>
            </div>
          </section>
          <section className="border border-slate-200 border-solid rounded-sm p-5 my-5 bg-slate-50">
            <div className="grid gap-6 mb-6 ">
              <div>
                <div>Address: {balanceOfAddress && balanceOfAddress}</div>
                <div>Balance: {balance && balance}</div>
              </div>
              <div>
                <label
                  htmlFor="balanceOfAddress"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Balance Of Address
                </label>
                <input
                  type="text"
                  id="balanceOfAddress"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                  defaultValue={balanceOfAddress}
                  onChange={(evt) => setBalanceOfAddress(evt)}
                />
              </div>
              <button
                type="submit"
                disabled={balanceOfAddress === undefined ? true : false}
                onClick={() => balanceOf(balanceOfAddress)}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:opacity-50"
              >
                Get Balance of Address
              </button>
            </div>
          </section>
        </>
      ) : (
        <div>Not Conntected....</div>
      )}
    </>
  )
}