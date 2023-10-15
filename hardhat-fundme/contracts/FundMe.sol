// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;


import "./PriceConverter.sol";

contract FundMe {
    using priceConverter for uint256;

    uint256 public minUSD = 50 * 1e18;

    address[] public funders;

    mapping(address => uint256) public addressToAmountFund;

    address public owner;

    AggregatorV3Interface public priceFeed;

    constructor(address priceFeedAddress) {
        owner = msg.sender;

        priceFeed = AggregatorV3Interface(
            priceFeedAddress 
        );
    }

    function fundme() public payable {
        require(
            msg.value.getConvertionRate(priceFeed) >= minUSD,
            "Send more than 1 eth"
        );
        funders.push(msg.sender);
        addressToAmountFund[msg.sender] += msg.value;
    }

    function withdraw() public onlyOwner {
        for (
            uint256 funderIndex = 0;
            funderIndex < funders.length;
            funderIndex++
        ) {
            address funder = funders[funderIndex];
            addressToAmountFund[funder] = 0;
        }

        funders = new address[](0);
        (bool callSuccess, ) = payable(msg.sender).call{
            value: address(this).balance
        }("");

        require(callSuccess, "Call failed");
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "The sender is not the owner");
        _;
    }

    receive() external payable {
        fundme();
    }

    fallback() external payable {
        fundme();
    }
}
