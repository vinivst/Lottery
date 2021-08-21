const { expectRevert } = require('@openzeppelin/test-helpers');
const { web3 } = require('@openzeppelin/test-helpers/src/setup');
require('dotenv').config({ path: '../.env' });
const Lottery = artifacts.require('Lottery');

contract('Lottery Test', async (accounts) => {
  beforeEach(async () => {
    this.lottery = await Lottery.new();
  });

  it('Should be possible to buy a ticket', async () => {
    await this.lottery.buyTickets({
      from: accounts[0],
      value: web3.utils.toWei('0.1', 'ether'),
    });
    let players = await this.lottery.getPlayers();
    let player = players[0];
    assert(accounts[0] === player, "Wasn't possible to buy a ticket");
  });

  it('Reward pool should increment after a new player entry', async () => {
    let balanceBefore = web3.utils.toBN(
      await this.lottery.getContractBalance()
    );
    await this.lottery.buyTickets({
      from: accounts[0],
      value: web3.utils.toWei('0.1', 'ether'),
    });
    let balanceAfter = web3.utils.toBN(await this.lottery.getContractBalance());
    assert(
      balanceAfter.sub(balanceBefore).toString() ===
        web3.utils.toWei('0.1', 'ether'),
      "Reward pool didn't increased"
    );
  });

  it('Only owner can raffle', async () => {
    await this.lottery.buyTickets({
      from: accounts[0],
      value: web3.utils.toWei('0.1', 'ether'),
    });
    await this.lottery.buyTickets({
      from: accounts[1],
      value: web3.utils.toWei('0.1', 'ether'),
    });
    await this.lottery.buyTickets({
      from: accounts[2],
      value: web3.utils.toWei('0.1', 'ether'),
    });
    await expectRevert(
      this.lottery.raffle(123, {
        from: accounts[1],
      }),
      'You are not allowed to perform this action'
    );
  });

  it('Owner must get 10% administration fee', async () => {
    await this.lottery.buyTickets({
      from: accounts[0],
      value: web3.utils.toWei('0.1', 'ether'),
    });
    await this.lottery.buyTickets({
      from: accounts[1],
      value: web3.utils.toWei('0.1', 'ether'),
    });
    await this.lottery.buyTickets({
      from: accounts[2],
      value: web3.utils.toWei('0.1', 'ether'),
    });
    let balanceBefore = web3.utils.toBN(await web3.eth.getBalance(accounts[0]));
    await this.lottery.raffle('123', { from: accounts[0] });
    let balanceAfter = web3.utils.toBN(await web3.eth.getBalance(accounts[0]));
    assert(
      balanceAfter.sub(balanceBefore).toString() >=
        web3.utils.toWei('0.025', 'ether'),
      'Administration fee not paid'
    );
  });
});
