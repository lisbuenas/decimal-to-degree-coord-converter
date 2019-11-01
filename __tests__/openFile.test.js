const convert = require('../index');

describe('Open file', () => {
    it('should open file', () => {
        let test = convert.readFile();
        expect(test.length).toBeGreaterThan(0);
    });

    it('Should get line data', () => {
        pending();
    });

    it('Should extract dms to convert (only dms data)', () => {
        pending();
    });

    it('Should store converted data (with the appended and prepended data)', () => {
        pending();
    });
});

