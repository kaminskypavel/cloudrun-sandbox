import {getArguments, killChild} from "./";

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
});
