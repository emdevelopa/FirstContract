// SPDX-License-Identifier: MIT

pragma solidity ^0.8.8;
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

library priceConverter {
    // Address: 0x694AA1769357215DE4FAC081bf1f309aDC325306
    function getPrice(AggregatorV3Interface priceFeed) internal view returns (uint256) {
        // AggregatorV3Interface priceFeed = AggregatorV3Interface(
        //     0x694AA1769357215DE4FAC081bf1f309aDC325306
        // );
        

        (, int256 answer, , , ) = priceFeed.latestRoundData();

        return uint256(answer * 1e10);
    }

    function getConvertionRate(
        uint256 ethAmmount, AggregatorV3Interface priceFeed
    ) internal view returns (uint256) {
        uint256 ethPrice = getPrice(priceFeed);

        uint256 ethAmountInUSD = (ethPrice * ethAmmount) / 1e18;
        return ethAmountInUSD;
    }
}
