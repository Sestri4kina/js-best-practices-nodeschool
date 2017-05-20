var balance = 0;

module.exports = {
  getBalance: function(){
    return balance;
  },
  increaseBalance: function(amount){
    balance += amount;
  },
  canAfford: function(amount){
    return amount <= balance;
  },

  decreaseBalance: function(amount){
    if(!this.canAfford(amount)){
      throw new Error('Insufficient balance');
    }
    balance -= amount;
  },
  isValidAmount: function(amount){
    if(!amount){
      return false;
    } else {
      return true;
    }
  }
};
