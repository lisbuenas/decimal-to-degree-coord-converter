const convert = require('../index');

describe('Open file', () => {
    it('should open file', () => {
        // pending();
        let test = convert.readFile();

        expect(test.length).toBeGreaterThan(0);
    });

});

