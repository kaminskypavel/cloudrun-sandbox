// a script that sleeps for 5 seconds and then return result

const sum = (a, b) => a + b;

const func = () => {
    const a = 0;
    return [sum(a, 1), sum(a, 2), sum(a, 3)];
}

const result = {result: func()}

setTimeout(() => console.log(JSON.stringify(result)), 5 * 1000)

