const convert = require('../index');

describe('Convert data', () => {
  it('should convert Dms to D', () => {
    let test = convert.dms_to_d(20, 10, 10, 'W');

    expect(test).toBeGreaterThan(-30);
  });

  it('Should convert lat', () => {});
});
