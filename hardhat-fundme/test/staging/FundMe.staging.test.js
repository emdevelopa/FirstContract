const { assert } = require("chai");
const { deployments, ethers, getNamedAccounts, network } = require("hardhat");
const { developmentChains } = require("../../helper-hardhat-config");

developmentChains.includes(network.name)
  ? describe.skip
    : describe("FundMe", async function () {
      this.timeout(120000)
      let fundMe;
      let deployer;
      let sendValue = ethers.parseEther("1");

      beforeEach(async function () {
        deployer = (await getNamedAccounts()).deployer;
        const contracts = await deployments.fixture(["all"]);

        const fundMeAddress = contracts["FundMe"].address; 
        fundMe = await ethers.getContractAt("FundMe", deployer);
      });

      it("allows people to withdraw funds", async function () {
        await fundMe.fundme({ value: sendValue });
          await fundMe.withdraw();
        //   tx.wait(1)
        const endingBalance = await fundMe.provider.getBalance(
          fundMe.getAddress()
        );
        assert.equal(endingBalance.toString(), "0");
      });
    });
