const { assert } = require("chai");
const { ethers } = require("hardhat");

describe("simpleStorage", function () {
  let SimpleStorageFact, simpleStorage;
  beforeEach(async function () {
    SimpleStorageFact = await ethers.getContractFactory("SimpleStorage");
    simpleStorage = await SimpleStorageFact.deploy();
  });
  it("it should start with a favourite number of zero", async function () {
    const currentValue = await simpleStorage.retrieve();
    const expVal = "0"

    assert.equal(currentValue.toString(),expVal )
  });

  it("should store a new favourite number",async function () {
    const Value = "9";
    const txRes = await simpleStorage.store(Value);
    await txRes.wait(1)

    const updatedValue = await simpleStorage.retrieve()
    console.log("value is now:", updatedValue);

    assert.equal(updatedValue.toString(), Value)
  })
});
