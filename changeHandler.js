// COINS:
// [p]enny
// [n]ickel
// [d]ime
// [q]uarter
var coinTypes = {
  'p': 1,
  'n': 5,
  'd': 10,
  'q': 25
};

var coinsNames = ['q', 'd', 'n', 'p'];

module.exports = {
  getAmount: function(type) {
    if(!coinTypes.hasOwnProperty(type)){
      throw new Error('Unrecognized coin ' + type);
    }
    return coinTypes[type];
  },

  convertToChange: function(amount) {
    var change = [];
    for(var i in coinsNames){
      var coinType = coinsNames[i];
      var coinValue = coinTypes[coinType];

      while(amount >= coinValue){
        change.push(coinType);
        amount -= coinValue;
      }
    }
    return change;
  }
};
