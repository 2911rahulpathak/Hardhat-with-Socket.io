const { expect } = require("chai");

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), "ether");
};

describe("Dappcord", () => {
  let deployer, user;

  let dappcord;

  const NAME = "Dappcord";
  const SYMBOL = "DC";
  //before each of the test examples it will run & will not repeated the code DRY
  beforeEach(async () => {
    [deployer, user] = await ethers.getSigners(); //return all the addresses that are connected to hardhat

    const Dappcord = await ethers.getContractFactory("Dappcord");
    dappcord = await Dappcord.deploy(NAME, SYMBOL);
  });

  describe("Deployment", () => {
    it("Sets the name", async () => {
      let result = await dappcord.name();
      expect(result).to.equal(NAME);
    });

    it("Sets the Symbol", async () => {
      //Fetch the symbol
      result = await dappcord.symbol();
      //check the symbol
      expect(result).to.equal(SYMBOL);
    });
    it("Sets the owner", async () => {
      const result = await dappcord.owner();
      expect(result).to.equal(deployer.address);
    });
  });
});
