// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v3.4.0-solc-0.7/contracts/token/ERC20/ERC20.sol";

contract GDGYeditepeToken is ERC20 {

    constructor () ERC20("Yeditepe Token", "YTT") {
        _mint(msg.sender, 1000000 * (10 ** uint256(decimals())));
    }
}