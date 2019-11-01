const convert = require('../index');

describe('Open file', () => {
    it('should open file', () => {
        let test = convert.readFile();

        expect(test.length).toBeGreaterThan(0);
    });

    it('Should get line data', () => {
        pending();
    });

    it('Should extract dms to convert', () => {
        pending();
    });

    it('Should store converted data', () => {
        pending();
    });
});

