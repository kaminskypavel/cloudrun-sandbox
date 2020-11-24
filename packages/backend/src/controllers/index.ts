import {transformSync} from "@babel/core";

export const transpileToES5 = (script: string) => transformSync(script, {});
export const wrapCode = (script: string) => `function __function() { ${script} }; (()=> { __function()})`

export const evaluateCode = (script: string) => {
    // const wrappedScript = wrapCode(script);
    const wrappedScript = script;
    const es5Code = transpileToES5(wrappedScript)?.code || "";
    return eval(es5Code)
}
