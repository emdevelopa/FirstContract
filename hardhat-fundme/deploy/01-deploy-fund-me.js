// // import
// const { ethers } = require("hardhat");
// // main fucntion
// async function main() {}
// // calling of main function

const { network } = require("hardhat");
const { networkConfig } = require("../helper-hardhat-config")
const {Verify} = require("../utils/verify")

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

    const args = [ethUsdPriceFeedAddress];

    const fundme = await deploy("FundMe", {
        from: deployer,
        args: args,
        log: true,
        waitConfirmations: network.config.blockConfirmations || 1,
    })

    console.log(fundme.address);
    if (chainId != 31337 && process.env.ETHERSCAN_API_KEY) {
        await Verify(fundme.address,args)
    }
    log("------------------------------------------------")
}

module.exports.tags = ["all", "fundme"]