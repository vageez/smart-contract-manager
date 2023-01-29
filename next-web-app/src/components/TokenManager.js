/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React, { useEffect } from 'react'
import { useAppStore } from '../hooks/useAppStore'
import { useMetaMask } from '../hooks/useMetaMask'
import { useEventListener } from '../hooks/useEventListener'

export const TokenManager = () => {
  console.log(process.env.NEXT_PUBLIC_HTTPS)
  console.log(process.env.NEXT_PUBLIC_WEBSOCKET)
  console.log(process.env.APIKEY)
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
    roles,
    getRoles,
    grantRoleAddress,
    grantRoleRole,
    setGrantRoleAddress,
    grantRole,
    setGrantRoleRole,
    getAllRolesHexs,
    addressRoles,
    setAddressRoles,
    rolesForAddress,
    getRolesForAddress,
    pause,
    unpause,
    paused,
    isPaused,
  } = appStore

  useMetaMask()
  useEventListener()

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
    console.log(process.env)
    if (contractLoaded && signerAddress) {
      getAllRolesHexs()
      fetchTotalSupply()
      fetchTokenName()
      fetchTokenSymbol()
      fetchDecimals()
      paused()
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
                  <b>{signerAddress}</b> has the following Roles
                </label>
                <ul>
                  <li>
                    MINTER: <b>{roles.MINTER ? 'TRUE' : 'FALSE'}</b>
                  </li>
                  <li>
                    DEFAULT_ADMIN_ROLE:{' '}
                    <b>{roles.DEFAULT_ADMIN_ROLE ? 'TRUE' : 'FALSE'}</b>
                  </li>
                  <li>
                    PAUSER_ROLE: <b>{roles.PAUSER_ROLE ? 'TRUE' : 'FALSE'}</b>
                  </li>
                </ul>
              </div>
              <button
                type="submit"
                onClick={() => getRoles()}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:opacity-50"
              >
                Check Roles
              </button>
            </div>
          </section>
          <section className="border border-slate-200 border-solid rounded-sm p-5 my-5 bg-slate-50">
            <div className="grid gap-6 mb-6">
              <div>
                <div>Status : {isPaused ? 'PAUSED' : 'ACTIVE'}</div>
              </div>
              {isPaused ? (
                <button
                  type="submit"
                  disabled={false}
                  onClick={() => unpause()}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:opacity-50"
                >
                  Un-Pause Token
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={false}
                  onClick={() => pause()}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:opacity-50"
                >
                  Pause Token
                </button>
              )}
            </div>
          </section>
          <section className="border border-slate-200 border-solid rounded-sm p-5 my-5 bg-slate-50">
            <div className="grid gap-6 mb-6">
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
                  value={numTokensToMint}
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
                  value={numTokensToTransfer}
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
                  value={transferAddress}
                  onChange={(evt) => setTransferAddress(evt)}
                />
              </div>
              <button
                type="submit"
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
                  value={balanceOfAddress}
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
          <section className="border border-slate-200 border-solid rounded-sm p-5 my-5 bg-slate-50">
            <div className="grid gap-6 mb-6 ">
              <div>
                <label
                  htmlFor="grantRoleAddress"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Grant Role to Address
                </label>
                <select onChange={(e) => setGrantRoleRole(e.target.value)}>
                  {grantRoleRole.map((role) => (
                    <option
                      key={role.id}
                      selected={role.selected}
                      value={role.value}
                    >
                      {role.id}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  id="grantRoleAddress"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                  value={grantRoleAddress}
                  onChange={(evt) => setGrantRoleAddress(evt)}
                />
              </div>
              <button
                type="submit"
                disabled={grantRoleAddress === undefined ? true : false}
                onClick={() => grantRole(grantRoleAddress)}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:opacity-50"
              >
                Grant Role
              </button>
            </div>
          </section>
          <section className="border border-slate-200 border-solid rounded-sm p-5 my-5 bg-slate-50">
            <div className="grid gap-6 mb-6 ">
              <div>
                <label
                  htmlFor="mint"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Check Address Roles
                </label>
                <ul>
                  <li>
                    MINTER: <b>{rolesForAddress.MINTER ? 'TRUE' : 'FALSE'}</b>
                  </li>
                  <li>
                    DEFAULT_ADMIN_ROLE:{' '}
                    <b>
                      {rolesForAddress.DEFAULT_ADMIN_ROLE ? 'TRUE' : 'FALSE'}
                    </b>
                  </li>
                  <li>
                    PAUSER_ROLE:{' '}
                    <b>{rolesForAddress.PAUSER_ROLE ? 'TRUE' : 'FALSE'}</b>
                  </li>
                </ul>
                <label
                  htmlFor="mint"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                  value={addressRoles}
                  onChange={(evt) => setAddressRoles(evt)}
                />
              </div>
              <button
                type="submit"
                onClick={() => getRolesForAddress()}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:opacity-50"
              >
                Check Roles
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
