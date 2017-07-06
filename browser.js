const tests = require('./tests.json');

for (let i = 0; i < tests.length; i++) {
    const { id, v, url } = tests[i];
    describe(`Test ${id} ${v} on ${url}`, () => {
        it('shows content', () => {
            // Widget init code goes here...
            return Promise.resolve();
        });
    });
}