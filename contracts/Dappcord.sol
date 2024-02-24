//SPDX-License-Identifier:MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Dappcord is ERC721 {
    //Code here
    //This contract acts as a Non-Fungible Token Contract that acts as permissions to view our Discord Server
    //How NFTS should work etc -> using ERC721 standard
    address public owner; //address we want to set it when the contract is put on the blockchain

    constructor(
        string memory _name,
        string memory _symbol
    ) ERC721(_name, _symbol) {
        //we just wanna pass name & symbol to the contract that we are inheriting from
        owner = msg.sender; //calling the function -> the deployer address
    }
}

//We need to recieve money for the minted NFT right so we gonna use a state variable
