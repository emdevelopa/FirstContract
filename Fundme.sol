// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

import "./priceConverter.sol";

contract FundMe{

    using priceConverter for uint256;

    uint256 public minUSD = 50;

    function fundme() public payable {

        require(msg.value.getConvertionRate() >= minUSD, "Send more than 1 eth");
    }

   
}

