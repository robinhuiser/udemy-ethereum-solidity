// Sepolia
// const RPC_ENDPOINT_URL= 'https://sepolia.infura.io/v3/be453cbc43354831a60b7b4c725c8105';

// Local besu
const RPC_ENDPOINT_URL= 'https://eth.localtest.me:44300/json-rpc';


const HDWalletProvider = require('@truffle/hdwallet-provider');
const { Web3 } = require('web3');
const { abi, evm } = require('./compile');

const provider = new HDWalletProvider(
  'runway monster fetch coach zone render raw level random recycle deliver talk',
  RPC_ENDPOINT_URL
);

const web3 = new Web3(provider);

// just to be able to use async
const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(abi)
    .deploy({ data: evm.bytecode.object, arguments: ['Hi there!']})
    .send({ gas: '1000000', from: accounts[0] });
  console.log('Contract deployed to', result.options.address);

  // to prevent the deployment from hanging
  provider.engine.stop();
}

deploy();