function createMultiplyTable(start, end) {
    if (!isValid(start, end)) {
        return null;
    }
    return generateMultiplyAll(start, end)
}

function isValid(start, end) {
    return start < end && start >= 1 && end <= 1000
}

function generateMultiplyAll(start, end) {
    let table = ''
    for (let i = start; i <= end; i++) {
        table += generateOneLineMultiplication(start, i)
        if (i !== end) {
            table += '\n'
        }
    }
    return table
}

function generateOneLineMultiplication(lineStart, lineEnd) {
    let expressions = []
    for (let i = lineStart; i <= lineEnd; i++) {
        expressions.push(generateOneExpression(i, lineEnd))
    }
    return expressions.join('\t')
}

function generateOneExpression(multiplicand, multiplier) {
    return `${multiplicand}*${multiplier}=${multiplier * multiplicand}`
}

module.exports = {
    createMultiplyTable,
};

