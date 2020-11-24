import {runScript} from "./";

(() => {
    // runScript({language: "python", scriptString: 'print "1"'})
    runScript({language: "node", scriptString: 'console.log(123)'})
})();
