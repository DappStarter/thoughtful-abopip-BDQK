require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drop tail solution mansion creek stick mad gesture beach swing spy'; 
let testAccounts = [
"0xb446f94f9874cec6e41086886131a5fe6ef93a0618a9aacb6e956981461e2c67",
"0x30aab4221fbfc4c8598db0b315993863b11275dfb77eaf40445aa6df65538c79",
"0x0570eb087cec7749182fd69338d29caf67c406f1c231db2a7397f554365c69c6",
"0x00572783fe9979a44b96e94a153e1df1c261c0c00cd833397b75a273b5cd79ec",
"0x3e17f059e857bd5c514c1086567be14964c8e0e905beeb97d04b0bbba9dcd004",
"0x135d43108b5d54bde24c4a78ea59fe588281f60e984d2b8cbb8921e0f6983288",
"0xe6b7d03faa0609b81110ccf9d92f4f7f2ce6ed0c8aa9465bdf92ce4f50a5de4b",
"0xb032685bd6516ad36090a8d714024c4da91ec6e7668db3f03a7acce020d96324",
"0x0bb2dc4e0b76ddf598828f600f6227b86b537c1aeecf5c83d797508b79d29a62",
"0xaa9ffd9a6e62b3b7b7991085f07f7c32fff6b8d0ac99f9e1b7604d8404c3b986"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

