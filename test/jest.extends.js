const extention = {
  toBeBoolean(received) {
    if (typeof received === 'boolean') {
      return {
        message: () => `${received} is a boolean`,
        pass: true,
      };
    }

    return {
      message: () => 'Wrong type, expected  boolean',
      pass: false,
    };
  },
  toBeFunction(received) {
    if (typeof received === 'function') {
      return {
        message: () => `${received} is a function`,
        pass: true,
      };
    }

    return {
      message: () => 'Wrong type, expected function',
      pass: false,
    };
  },
};

module.exports = extention;
