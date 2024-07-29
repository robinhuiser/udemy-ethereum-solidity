# Ethereum and Solidity: The Complete Developer's Guide

My Course notes and exercises for [this](https://www.udemy.com/course/ethereum-and-solidity-the-complete-developers-guide) Udemy course.

Must see: 
* https://andersbrownworth.com/blockchain/
* https://iancoleman.io/bip39/

~~~bash
# set node version to LTS
$ nvm use 20
Now using node v20.11.1 (npm v10.2.4)

# check
$ node --version
v20.11.1
~~~

Due to some very recent breaking changes in web3, we will need to install the ganache library instead of ganache-cli and make a small change to our imports.

So, the updated install command is:

~~~bash
$ npm install mocha ganache web3
~~~

Next, when adding the imports to your inbox.test.js file the web3 and ganache-cli imports must be changed from this:

~~~js
const Web3 = require('web3');
const ganache = require('ganache-cli')
~~~

to this:

~~~js
const { Web3 } = require('web3');
const ganache = require('ganache');
~~~
