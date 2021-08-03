require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arch outer sugar warrior ridge remember mistake hover deputy bottom small'; 
let testAccounts = [
"0xbcaca847a4a49d7f8a76d75a85929f3dfd97c2e26dc8e93c308f38e3e5d67e0e",
"0x78bb5e2511862666dd805f8ffe085cec3e58d7a865f8cb3cd4d63018c3137b6b",
"0x54ae0a34dae23f5b22b21c75d50aad1f9f00aee9f283e9ba59c87b995df985b6",
"0x1a36c05ca233b38315d5fc31c1f72a9a236589a27c0d2453d5126fb689b993e5",
"0x93223dca6ac77c9dd41c8dc1b0b707349914053beca1368636cdf618c55482d6",
"0x1e33b9d3912f5802cce4b8059061e2d1c5d9cc5a164053f6a452dcf6f0677adb",
"0x72df3a54a516e292f488b1dc14c03f3cde1bafed6f11698d7479c7dfa2da166c",
"0x5ca0542fab5da4a8434946dd7c63a6f0f9b9f0bc2604649c8a97865df8d7ff06",
"0x40d2f42e07a0b844f38428e94b54c1f10d3108364af4b7bf3b2851895dcc8988",
"0x969db1205dc554187736346ff388ad9bfd8018edcc813d4d7f7d4d8d642222c4"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


