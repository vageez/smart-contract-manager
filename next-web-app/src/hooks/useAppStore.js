import { create } from 'zustand'
import abi from '../abi/IliosToken'

const log = (config) => (set, get, api) =>
  config(
    (...args) => {
      console.log('log applying', args)
      set(...args)
      //set({ change: get().change + 1 })
      console.log('log new state', get())
    },
    get,
    api,
  )

export const useAppStore = create(
  log((set, get) => ({
    change: 1,
    decimals: undefined,
    fetchDecimals: async () => {
      const decimals = await window.myContract.decimals()
      console.log('decimals', decimals)
      set({ decimals })
    },
    tokenName: undefined,
    tokenSymbol: undefined,
    //contractAddress: '0x6ca69103eBFf66949df9C994116F09Af350Ed875', // GOERLI
    contractAddress: '0x5fbdb2315678afecb367f032d93f642f64180aa3', // LOCAL NODE
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
      // const txr = await tx.wait()
      // console.log('txr', txr)
      set({ numTokensToMint: 0 })
    },
    transferAddress: undefined,
    numTokensToTransfer: undefined,
    setTransferAddress: (evt) => set({ transferAddress: evt.target.value }),
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
      // Never returns
      const response = await window.myContract.balanceOf(balanceOfAddress)
      console.log('BALANCE OF response', response)
      set({ balance: response.toNumber() })
    },
    roles: {
      MINTER: undefined,
      DEFAULT_ADMIN_ROLE: undefined,
      PAUSER_ROLE: undefined,
    },
    addressRoles: undefined,
    setAddressRoles: (evt) => set({ addressRoles: evt.target.value }),
    rolesForAddress: {
      MINTER: undefined,
      DEFAULT_ADMIN_ROLE: undefined,
      PAUSER_ROLE: undefined,
    },
    getRolesForAddress: async () => {
      // const minterRole = await window.myContract.MINTER_ROLE()
      // const defaultAdminRole = await window.myContract.DEFAULT_ADMIN_ROLE()
      // const pauserRole = await window.myContract.PAUSER_ROLE()
      const hasMinterRole = await window.myContract.hasRole(
        get().MINTER_ROLE,
        get().addressRoles,
      )
      const hasDefaultAdminRole = await window.myContract.hasRole(
        get().DEFAULT_ADMIN_ROLE,
        get().addressRoles,
      )
      const hasPauserRole = await window.myContract.hasRole(
        get().PAUSER_ROLE,
        get().addressRoles,
      )
      set({
        rolesForAddress: {
          MINTER: hasMinterRole,
          DEFAULT_ADMIN_ROLE: hasDefaultAdminRole,
          PAUSER_ROLE: hasPauserRole,
        },
      })
    },
    getRoles: async () => {
      // const minterRole = await window.myContract.MINTER_ROLE()
      // const defaultAdminRole = await window.myContract.DEFAULT_ADMIN_ROLE()
      // const pauserRole = await window.myContract.PAUSER_ROLE()
      const hasMinterRole = await window.myContract.hasRole(
        get().MINTER_ROLE,
        get().signerAddress,
      )
      const hasDefaultAdminRole = await window.myContract.hasRole(
        get().DEFAULT_ADMIN_ROLE,
        get().signerAddress,
      )
      const hasPauserRole = await window.myContract.hasRole(
        get().PAUSER_ROLE,
        get().signerAddress,
      )
      set({
        roles: {
          MINTER: hasMinterRole,
          DEFAULT_ADMIN_ROLE: hasDefaultAdminRole,
          PAUSER_ROLE: hasPauserRole,
        },
      })
    },
    grantRoleAddress: undefined,
    grantRoleRole: [
      { id: 'MINTER_ROLE', selected: false, value: undefined },
      { id: 'PAUSER_ROLE', selected: false, value: undefined },
      { id: 'DEFAULT_ADMIN_ROLE', selected: true, value: undefined },
    ],
    setGrantRoleRole: (value) =>
      set((prevState) => ({
        grantRoleRole: prevState.grantRoleRole.map((role) => ({
          ...role,
          selected: role.value === value,
        })),
      })),
    MINTER_ROLE: undefined,
    PAUSER_ROLE: undefined,
    DEFAULT_ADMIN_ROLE: undefined,
    getAllRolesHexs: async () => {
      const minterRole = await window.myContract.MINTER_ROLE()

      const pauserRole = await window.myContract.PAUSER_ROLE()

      const defaultAdminRole = await window.myContract.DEFAULT_ADMIN_ROLE()

      const map = {
        MINTER_ROLE: minterRole,
        PAUSER_ROLE: pauserRole,
        DEFAULT_ADMIN_ROLE: defaultAdminRole,
      }

      set((prevState) => ({
        MINTER_ROLE: minterRole,
        PAUSER_ROLE: pauserRole,
        DEFAULT_ADMIN_ROLE: defaultAdminRole,
        grantRoleRole: prevState.grantRoleRole.map((role) => ({
          ...role,
          value: map[role.id],
        })),
      }))
      get().getRoles()
    },
    setGrantRoleAddress: (evt) => set({ grantRoleAddress: evt.target.value }),
    grantRole: async () => {
      const role = get().grantRoleRole.reduce(
        (a, c) => (a = c.selected ? c.value : a),
        undefined,
      )

      if (role) {
        const response = await window.myContract.grantRole(
          role,
          get().grantRoleAddress,
        )
        // Apply TOAST to see JSON response
        return response
      }
    },
    isPaused: undefined,
    unpause: async () => {
      const response = window.myContract.unpause()
      return response
    },
    paused: async () => {
      const isPaused = await window.myContract.paused()
      set({ isPaused })
      return isPaused
    },
    pause: async () => {
      const response = window.myContract.pause()
      return response
    },
    unSetToast: () => set({ data: undefined, visible: false }),
    setToast: (data) => set({ data, visible: true }),
    toast: { data: undefined, visible: false },
  })),
)
