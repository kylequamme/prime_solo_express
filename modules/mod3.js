//Import modules
var mod1 = require('./mod1.js');
var mod2 = require('./mod2.js');

module.exports = {
  toUSD: function(){
    return mod2(mod1(100, 1000000))},
  text: 'Account balance: \n'
}
