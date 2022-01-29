// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract DevToken is ERC20{
    constructor(uint256 totalSupply) ERC20("DUDES", "DUD"){
        _mint(msg.sender, totalSupply);
    }
}