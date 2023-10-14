require("@nomicfoundation/hardhat-toolbox");
// require("@nomicfoundation/hardhat-ethers");
require("@nomiclabs/hardhat-ethers"); 
require("./tasks/block-number")
require("hardhat-gas-reporter")
require("solidity-coverage");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */

const SEPOLIA_URL = process.env.RPC_URL || "https://eth-sepolia";
const PRIVATE_KEY = process.env.PRIVATE_KEY || "0xkey"
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "key";

const LOCAL_URL = process.env.LOCAL_URL || "http://127.0.0.1:8545/";
const COINMARKETCAP_API = process.env.COINMARKETCAP_API || "key";
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    sepolia: {
      url: SEPOLIA_URL,
      accounts: [PRIVATE_KEY],
      chainId: 11155111,
    },
    localhost: {
      url: LOCAL_URL,
      // accounts: [LOCAL_PRIVATE_KEY],
      chainId:31337
    },
  },
  solidity: "0.8.19",
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  gasReporter: {
    enabled: true,
    outputFile: "gas-report.txt",
    currency: "USD",
    noColors: true,
    coinmarketcap: COINMARKETCAP_API,
    token:"MATIC"
  
  }
};
