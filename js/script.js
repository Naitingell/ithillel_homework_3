function BankAccount(balance) {
  let balance1 = balance;

  this.deposit = function (amount) {
    if (amount > 0) {
      balance1 += amount;
    }
    return balance1;
  };

  this.withdraw = function (amount) {
    if (amount > 0 && balance1 >= amount) {
      balance1 -= amount;
    }
    return balance1;
  };
  this.getBalance = function () {
    return balance1;
  };
}

const audit = new BankAccount(1000);

console.log(audit.deposit(400));
console.log(audit.withdraw(1100));
console.log(audit.getBalance());
