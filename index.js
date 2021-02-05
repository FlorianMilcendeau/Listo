const assert = require('assert');

/**
 * Fonction pour déterminer si une absence est incluse dans une période.
 *
 * Format: YYYY-MM-DD
 *
 * @param {string} absence - absence est la date du jour de congé que prend un employé
 * @return {boolean}
 */
const isIncludedInPeriod = (absence) => {
  if (typeof absence !== 'string') {
    throw new TypeError('Wrong type given, expected string');
  }

  const leaveDay = new Date(absence).getTime();
  const month = new Date().getMonth(); // Mois en cours.
  const year = new Date().getFullYear(); // Année en cours.
  const startDate = new Date(year, month, 1, 1).getTime(); // Date de début du mois en cours
  const lastDate = new Date(year, month + 1, 1, 1).getTime(); // Date de fin du mois en cours

  // Si l'absence est inclus dans le mois en cours.
  if (leaveDay >= startDate && leaveDay < lastDate) {
    return true;
  }

  return false;
};

assert.strictEqual(typeof isIncludedInPeriod, 'function');
assert.strictEqual(typeof isIncludedInPeriod('2021-02-04'), 'boolean');
assert.ok(isIncludedInPeriod('2021-03-01') === false);
assert.ok(isIncludedInPeriod('2021-01-31') === false);
assert.ok(isIncludedInPeriod('2021-02-25'));
assert.ok(isIncludedInPeriod('2021-02-01'));
assert.ok(isIncludedInPeriod('2021-02-28'));
