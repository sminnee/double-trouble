Double Trouble
==============

Simple double-entry bookkeeping system written in JavaScript. Not recommended for use by anyone.

Installation
------------

```
npm install --save double-trouble
```


Usage
-----

```js
DT = require('double-trouble');

ledger = DT.createLedger({
  '200': 'Revenue',
  '400': 'Cost',
  '700': 'Accounts Receivable',
  '800': 'Bank Account',
});

ledger.journal(
	'Invoice Created',
	[
	  { 'account': '200', 'amount': 200 },
	  { 'account': '700', 'amount': -200 }
	]
);

ledger.journal(
	'Invoice Paid',
	[
	  { 'account': '700', 'amount': 200 },
	  { 'account': '800', 'amount': -200 }
	]
);

// returns { '200': 200, '400': 0, '700': 0, '800': -200 }
console.log(ledger.balances());

```