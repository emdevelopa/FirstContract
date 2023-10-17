const { deployments, ethers, getNamedAccounts } = require("hardhat");
const { assert, expect } = require("chai");

describe("FundMe", async function () {
  let fundMe;
  let deployer;
  let mockV3Aggregator;
  beforeEach(async function () {
    deployer = (await getNamedAccounts()).deployer;
    const contracts = await deployments.fixture(["all"]);

    // const signer = await ethers.getSigner(deployer);
    const fundMeAddress = contracts["FundMe"].address;
    fundMe = await ethers.getContractAt("FundMe", fundMeAddress);
    mockV3Aggregator = contracts["MockV3Aggregator"];
  });

  describe("constructor", async function () {
    it("sets the aggregator addresses correctly", async function () {
      const response = await fundMe.priceFeed();
      assert.equal(response, mockV3Aggregator.address);
    });
  });
    
    describe("fundme", function () {
        // https://ethereum-waffle.readthedocs.io/en/latest/matchers.html
        // could also do assert.fail
        it("Fails if you don't send enough ETH", async () => {
            await expect(fundMe.fundme()).to.be.revertedWith(
                "You need to spend more ETH!"
            )
        })
    })
});
