/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    // NEXT_PUBLIC_HTTPS: 'http://localhost:8545',
    // NEXT_PUBLIC_WEBSOCKET: '',
    // NEXT_CONTRACT_ADDRESS: '0x5fbdb2315678afecb367f032d93f642f64180aa3', // LOCAL CONTRACT
  },
}

module.exports = nextConfig
