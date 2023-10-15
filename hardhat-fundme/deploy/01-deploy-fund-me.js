// // import
// const { ethers } = require("hardhat");
// // main fucntion
// async function main() {}
// // calling of main function

const { network } = require("hardhat");
const {networkConfig} = require("../helper-hardhat-config")

// main()
//   .then(() => process.exit(1))
//   .catch((err) => {
//     console.log(err);
//     process.exit(0);
//   });




module.exports.default = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();
    const chainId = network.config.chainId

    const ethUsdPriceFeedAddress = networkConfig[chainId]["ethUsdPriceFeed"];

    const fundme = await deploy("FundMe", {
        from: deployer,
        args: [],
        log:true 
    })
}