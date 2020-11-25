import {getArguments, runScript} from "./";

jest.setTimeout(30 * 1000);

describe('executor.ts', () => {
    describe('#getArguments', () => {
        it('should return "-p" flag for python inline script', () => {
            expect(getArguments({language: "python", scriptString: "some-script"})).toStrictEqual(["-c", "some-script"])
        });

        it('should return script path', () => {
            expect(getArguments({language: "python", scriptFile: "some-script.py"})).toStrictEqual(["some-script.py"])
        });

        it('should return "-c" flag for node inline script', () => {
            expect(getArguments({language: "node", scriptString: "some-script"})).toStrictEqual(["-p", "some-script"])
        });

        it('should return script path for node', () => {
            expect(getArguments({language: "node", scriptFile: "some-script.js"})).toStrictEqual(["some-script.js"])
        });
    });

    describe('#runScript', () => {
        describe('python', () => {
            it('should return a value from stdout from file', async () => {
                const res = await runScript({language: "python", scriptFile: "tests/isolated.py"});
                expect(res).toEqual("{result: [1,2,3]}")
            });

            it('should throw after 5 sec', async () => {
                await expect(runScript({
                    language: "python",
                    scriptFile: "tests/timeout.py"
                }, 5 * 1000)).rejects.toEqual("process has timed out")
            });
        });

        describe('javascript', () => {
            it('should return a value from stdout from file', async () => {
                const res = await runScript({language: "node", scriptFile: "tests/isolated.js"}, 1000 * 10);
                expect(res).toEqual("{\"result\":[1,2,3]}")
            });

            it('should throw because of timeout after 2 sec', async () => {
                await expect(runScript({
                    language: "node",
                    scriptFile: "tests/isolated.js"
                }, 2 * 1000)).rejects.toEqual("process has timed out")
            });
        });
    });
});
