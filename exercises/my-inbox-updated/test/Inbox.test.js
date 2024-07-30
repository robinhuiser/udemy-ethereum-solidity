const assert = require('assert');
const ganache = require('ganache');
const { Web3 } = require('web3');
const web3 = new Web3(ganache.provider());
const { abi, evm } = require('../compile');

const INITIAL_MESSAGE = 'Hi there!';

let accounts;
let inbox;

beforeEach(async () => {
  // get a list of all accounts
  accounts = await web3.eth.getAccounts();

  // use one of those accounts to deploy 
  // the contract
  inbox = await new web3.eth.Contract(abi)        // there is a contract with this interface (ABI)
    .deploy({ data: evm.bytecode.object, arguments: [INITIAL_MESSAGE] })           // want to deploy a new copy (incl constructor args) 
    .send({ from: accounts[0], gas: '1000000' });                    // creates the transaction and sends this to eth
});

describe('Inbox', () => {
  it('deploys a contract', () => {
    assert.ok(inbox.options.address);
  });

  it('has a default message', async () => {
    assert.equal(await inbox.methods.getMessage().call(), INITIAL_MESSAGE);
  });

  it('can change the message', async () => {
    const NEW_MESSAGE = 'Bye world!';
    await inbox.methods.setMessage(NEW_MESSAGE).send({ from: accounts[0] });
    assert.equal(await inbox.methods.getMessage().call(), NEW_MESSAGE);
  });
});
