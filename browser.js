const tests = require('./tests.json');

for (let { id, v, url } of tests) {
    describe(`Test ${id} ${v} on ${url}`, () => {
        it('shows content', () => {
            // Widget init code goes here...
            return Promise.resolve();
        });
    });
}