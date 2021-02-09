/**
 * Fonction pour déterminer si une absence est incluse dans une période.
 *
 * Format de date: YYYY-MM-DD
 *
 * @param {object} absence - absence est un objet qui prend la date d'un début et fin de congé que prend un employé
 * @param {string} absence.startLeaveDay - Début de congé d'un employé.
 * @param {string} absence.endLeaveDay - Fin de congé d'un employé.
 * @return {boolean} true|false
 */
const isIncludedInPeriod = (absence) => {
  if (typeof absence !== 'object') {
    throw new TypeError('Wrong type given, expected object');
  }

  const { startLeaveDay, endLeaveDay } = absence;

  if (!startLeaveDay || !endLeaveDay) {
    throw new Error(
      'Wrong object format, properties expected: startLeaveDay and endLeaveDay'
    );
  }

  const formatDate = new RegExp(/^(\d{4})-(\d{2})-(\d{2})$/);

  // Vérification du format de la date.
  if (!formatDate.test(startLeaveDay) || !formatDate.test(endLeaveDay)) {
    throw new Error('Wrong format, expected YYYY-MM-DD');
  }

  const startLeave = new Date(startLeaveDay).getTime(); // Début de congé.
  const endLeave = new Date(endLeaveDay).getTime(); // Fin de congé.

  // Si une date rentré n'éxiste pas.
  if (isNaN(startLeave) || isNaN(endLeave)) {
    throw new Error('Error: Date(s) does not conform');
  }

  // Vérification si une date de début est bien inferieur à la date de fin de congé.
  if (startLeave >= endLeave) {
    throw new Error('Error: the start date must be less than to the end date');
  }

  const month = new Date().getMonth(); // Mois en cours.
  const year = new Date().getFullYear(); // Année en cours.
  const startDate = new Date(year, month, 1, 1).getTime(); // Date de début du mois en cours
  const lastDate = new Date(year, month + 1, 1, 1).getTime(); // Date de fin du mois en cours

  // Si une période d'abscence est inclus dans le mois en cours.
  if (
    (startLeave >= startDate && startLeave < lastDate) ||
    (endLeave >= startDate && endLeave < lastDate) ||
    (startLeave < startDate && endLeave >= lastDate)
  ) {
    return true;
  }

  return false;
};

module.exports = isIncludedInPeriod;
