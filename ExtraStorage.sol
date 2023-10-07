// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

import "contracts/SimpleStorage.sol";

contract ExtStorage is SimpleContract{

    function store(uint256 _favNum) public override {
        favNum = _favNum + 5;
    }

}