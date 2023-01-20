import { useEffect } from 'react'
import { ethers } from 'ethers'
import { useAppStore } from './useAppStore'

export const useMetaMask = () => {
  const appStore = useAppStore()
  const { contractAddress, abi, setContractLoaded } = appStore
  useEffect(() => {
    function getEth() {
      const eth = window.ethereum
      if (!eth) {
        throw new Error('Get metamask')
      }
      return eth
    }

    async function hasAccounts() {
      const eth = getEth()
      const accounts = await eth.request({ method: 'eth_accounts' })

      return accounts && accounts.length
    }

    async function requestAccounts() {
      const eth = getEth()
      const accounts = await eth.request({ method: 'eth_requestAccounts' })

      return accounts && accounts.length
    }

    async function run() {
      if (!(await hasAccounts()) && !(await requestAccounts())) {
        throw new Error('No hasAccounts and No requestAccounts')
      }
      const provider = new ethers.providers.Web3Provider(getEth())
      const signer = provider.getSigner()

      // At this step, we have access to METAMASK
      // Call contract from the browser
      const contract = new ethers.Contract(
        // Contract Address
        contractAddress,
        // Contract interface
        abi,
        //Signer Provider(METAMASK)
        signer,
      )
      console.log('contract', contract)
      window.mySigner = signer
      window.myContract = contract
      if (window.myContract) {
        setContractLoaded()
      }
    }

    run()
  }, [])

  return null
}
