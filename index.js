var _ = require('lodash');

module.exports = {
	createLedger: function(accounts) {
		var _accounts = accounts;
		var _balances = _.mapValues(accounts, () => 0);

		return {
			journal: function (description, changes) {
				journalBalance = _.reduce(changes, (sum, change) => sum + change.amount, 0);
				if (journalBalance != 0) {
					throw 'Journal doesn\'t balance';
				}
				
				_.forEach(changes, function (change) {
					_balances[change.account] += change.amount;
				});

				return true;
			},

			balances: function() {
				return _balances;
			}
		}
	}
}