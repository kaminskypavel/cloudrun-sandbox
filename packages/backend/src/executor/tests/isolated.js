const sum = (a, b) => a + b;

const func = () => {
    const a = 0;
    return [sum(a, 1), sum(a, 2), sum(a, 3)];
}

const result = {result: func()}

process.stdout.write(JSON.stringify(result));
