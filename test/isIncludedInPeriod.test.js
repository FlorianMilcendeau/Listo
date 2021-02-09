const isIncludedInPeriod = require('../isIncludedInPeriod');
const extention = require('./jest.extends');

// custom test extension.
expect.extend(extention);

describe('Is included in period', () => {
  it('should be an function', () => {
    expect(isIncludedInPeriod).toBeFunction();
  });

  it('should take one parameter', () => {
    expect(isIncludedInPeriod).toHaveLength(1);
  });

  it('should return an boolean', () => {
    expect(
      isIncludedInPeriod({
        startLeaveDay: '2021-01-25',
        endLeaveDay: '2021-02-15',
      })
    ).toBeBoolean();
  });

  it('should be included in the period', () => {
    expect(
      isIncludedInPeriod({
        startLeaveDay: '2021-02-28',
        endLeaveDay: '2021-03-05',
      })
    ).toBeTruthy();

    expect(
      isIncludedInPeriod({
        startLeaveDay: '2021-01-31',
        endLeaveDay: '2021-03-01',
      })
    ).toBeTruthy();

    expect(
      isIncludedInPeriod({
        startLeaveDay: '2021-01-01',
        endLeaveDay: '2021-02-28',
      })
    ).toBeTruthy();

    expect(
      isIncludedInPeriod({
        startLeaveDay: '2021-01-25',
        endLeaveDay: '2021-02-01',
      })
    ).toBeTruthy();
  });

  it('should not be included in the period', () => {
    expect(
      isIncludedInPeriod({
        startLeaveDay: '2021-03-01',
        endLeaveDay: '2021-03-28',
      })
    ).toBeFalsy();

    expect(
      isIncludedInPeriod({
        startLeaveDay: '2021-01-25',
        endLeaveDay: '2021-01-31',
      })
    ).toBeFalsy();
  });
});
