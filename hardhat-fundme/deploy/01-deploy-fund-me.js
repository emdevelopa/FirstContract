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
// ,lkmk
//   });




module.exports.default = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();
    const chainId = network.config.chainId
    let ethUsdPriceFeedAddress
    if (chainId == 31337) {
        const ethUsdAggregator = await deployments.get("MockV3Aggregator");
        ethUsdPriceFeedAddress = ethUsdAggregator.address
    } else {
        ethUsdPriceFeedAddress =
          networkConfig[chainId]["ethUsdPriceFeed"];
    }

    const fundme = await deploy("FundMe", {
        from: deployer,
        args: [ethUsdPriceFeedAddress],
        log:true 
    })
}

module.exports.tags = ["all", "fundme"]