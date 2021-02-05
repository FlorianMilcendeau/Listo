const assert = require('assert');

/**
 * Fonction pour déterminer si une absence est incluse dans une période.
 *
 * Format: YYYY/MM/DD
 *
 * @param {string} absence - absence est la date du jour de congé que prend un employé
 * @return {boolean}
 */
const isInclusDansPeriode = (absence) => {
  if (typeof absence !== 'string') {
    throw new TypeError('Wrong type given, expected string');
  }

  const startLeave = new Date(absence).getTime();
  const month = new Date().getMonth(); // Mois en cours.
  const year = new Date().getFullYear(); // Année en cours.
  const startDate = new Date(year, month, 1, 1).getTime(); // Date de début du mois en cours

  const lastDay = new Date(year, month + 1, 1, 1).getTime(); // Date de fin du mois en cours

  // Si l'absence est inclus dans le mois en cours.
  if (startLeave >= startDate && startLeave < lastDay) {
    return true;
  }

  return false;
};

assert.strictEqual(typeof isInclusDansPeriode, 'function');
assert.strictEqual(typeof isInclusDansPeriode('2021-02-04'), 'boolean');
assert.ok(isInclusDansPeriode('2021-03-01') === false);
assert.ok(isInclusDansPeriode('2021-01-31') === false);
assert.ok(isInclusDansPeriode('2021-02-25'));
assert.ok(isInclusDansPeriode('2021-02-01'));
assert.ok(isInclusDansPeriode('2021-02-28'));
