var test = require('tape');

test("Ledger", function (t) {
 	var DT = require('../');

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

	t.deepEquals(
		ledger.balances(),
		{
			'200': 200,
			'400': 0,
			'700': 0,
			'800': -200,
		}
	);

  t.end();
});
