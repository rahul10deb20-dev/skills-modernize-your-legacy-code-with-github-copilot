// accounting.test.js
const { runMenu, getBalance, creditAccount, debitAccount } = require('./index');

describe('Student Account System', () => {
  beforeEach(() => {
    // Reset balance before each test
    global.accountBalance = 1000.00;
  });

  test('TC01: View initial balance', () => {
    expect(getBalance()).toBe(1000.00);
  });

  test('TC02: Credit account with valid amount', () => {
    creditAccount(100.00);
    expect(getBalance()).toBe(1100.00);
  });

  test('TC03: Debit account with sufficient funds', () => {
    debitAccount(200.00);
    expect(getBalance()).toBe(800.00);
  });

  test('TC04: Debit account with insufficient funds', () => {
    const result = debitAccount(2000.00);
    expect(result).toBe('Insufficient funds');
    expect(getBalance()).toBe(1000.00);
  });

  test('TC05: Invalid menu choice', () => {
    const result = runMenu(5);
    expect(result).toBe('Invalid choice');
  });

  test('TC06: Exit application', () => {
    const result = runMenu(4);
    expect(result).toBe('Exit');
  });

  test('TC07: Multiple credits and debits', () => {
    creditAccount(50.00);
    debitAccount(25.00);
    creditAccount(75.00);
    debitAccount(100.00);
    expect(getBalance()).toBe(1000.00);
  });
});
