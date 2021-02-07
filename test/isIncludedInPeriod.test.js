const isIncludedInPeriod = require('../isIncludedInPeriod');
const extention = require('./jest.extends');

// custom test extension.
expect.extend(extention);

describe('Is included in period', () => {
  it('should be an function', () => {
    expect(isIncludedInPeriod).toBeFunction();
  });

  it('should return an boolean', () => {
    expect(isIncludedInPeriod('2021-02-15')).toBeBoolean();
  });

  it('should be included in the period', () => {
    expect(isIncludedInPeriod('2021-02-01')).toBeTruthy();
    expect(isIncludedInPeriod('2021-02-28')).toBeTruthy();
    expect(isIncludedInPeriod('2021-02-25')).toBeTruthy();
  });

  it('should not be included in the period', () => {
    expect(isIncludedInPeriod('2021-03-01')).toBeFalsy();
    expect(isIncludedInPeriod('2021-01-31')).toBeFalsy();
  });

  it('should return an error, wrong type', () => {
    expect(() => isIncludedInPeriod('06-02-2021')).toThrowError();
    expect(() => isIncludedInPeriod(12)).toThrowError();
    expect(() => isIncludedInPeriod({})).toThrowError();
    expect(() => isIncludedInPeriod([])).toThrowError();
  });

  it('should return an error, string is empty', () => {
    expect(() => isIncludedInPeriod('')).toThrowError();
  });

  it('should return an error, wrong format', () => {
    expect(() => isIncludedInPeriod('06-02-2021')).toThrowError();
  });
});
