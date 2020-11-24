import {runScript} from "./";

(async () => {
    let res = null;

    /*                                    PYTHON                                      */
    // res = await runScript({language: "python", scriptFile :"tests/isolated.py"})
    // console.log("result yes-->", res);

    //this will timeout
    // res = await runScript({language: "python", scriptFile :"tests/timeout.py"})
    // console.log("result -->", res);


    /*                                    JAVASCRIPT                                  */
    res = await runScript({language: "node", scriptFile: "tests/isolated.js"}, 10 * 1000)
    console.log("result yes-->", res);

    //this will timeout
    res = await runScript({language: "node", scriptFile: "tests/isolated.js"}, 2 * 1000)
    console.log("result  -->", res);

})();
