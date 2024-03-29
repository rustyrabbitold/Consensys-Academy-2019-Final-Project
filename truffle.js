/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() {
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>')
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */

module.exports = {
//  compilers: {
//   solc: {
//     version: "0.4.25"
//   }
// },

  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      host: "127.0.0.1",
      port: 8545,
      from: "0x158b7d90cb978b7cabe5103aabcda1eb021b5516",
      network_id: "*" ,
      gas: 4612388
    }

  }
};
