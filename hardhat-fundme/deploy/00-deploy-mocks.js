const { network } = require("hardhat");

const {
  developmentChain,
  DECIMALS,
  INIITIAL_ANSWER,
} = require("../helper-hardhat-config");

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId;

  if (chainId == 31337) {
    log("Local network detected! Deploying mocks...");

    await deploy("MockV3Aggregator", {
      contract: "MockV3Aggregator",
      from: deployer,
        log: true,
        args: [DECIMALS,INIITIAL_ANSWER]
    });
      
      log("Mocks Deployed! Hurray")
      console.log("------------------------------------------------");
  }
};

module.exports.tags = ["all", "mocks"]