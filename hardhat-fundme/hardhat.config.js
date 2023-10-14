require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  solhint: {
    // Directory with your Solidity files
    files: "contracts",
  },
};
