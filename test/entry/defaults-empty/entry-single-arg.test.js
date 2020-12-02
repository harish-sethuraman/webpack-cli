'use strict';

const { run } = require('../../utils/test-utils');

describe('single entry flag empty project', () => {
    it('sets default entry, compiles but throw missing module error', () => {
        const { exitCode, stderr, stdout } = run(__dirname);

        expect(exitCode).toBe(1);
        expect(stderr).toContain('Compilation starting...');
        expect(stderr).toContain('Compilation finished');
        expect(stdout).toContain(`not found: Error: Can't resolve`);
    });
});
