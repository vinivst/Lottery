//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Lottery {
    address payable[] public players;
    address payable public owner;

    event WinnerPicked(uint _prize, address _winnerAddress);
    event NewPlayer(address _address);

    constructor() {
        owner = payable(msg.sender);
    }

    function buyTickets() public payable {
        require(msg.value == 0.1 ether, "You must send exactly 0.1 ether to buy a ticket");
        players.push(payable (msg.sender));
        emit NewPlayer(msg.sender);
    }

    receive() external payable {
        buyTickets();
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "You are not allowed to perform this action");
        _;
    }
    
    function raffle(uint seed) public onlyOwner returns(address) {
        uint len = players.length;
        require(len >= 3, "No miminum entries reached");
        uint randomBigNumber = uint(keccak256(abi.encodePacked(block.timestamp, block.difficulty, seed)));
        uint id = randomBigNumber % len;
		address payable winner = players[id];
        owner.transfer((address(this).balance) * 10 / 100);
        emit WinnerPicked(address(this).balance, winner);
        winner.transfer(address(this).balance);
        players = new address payable[](0);
        return winner;
    }
    function getContractBalance() public view returns(uint) {
        return address(this).balance;
    }

    function getPlayers() public view returns(address payable[] memory) {
        return players;
    }
}