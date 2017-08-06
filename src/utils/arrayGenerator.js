
function arrayGenerator(length) {
    return Array.apply(null, { length: length }).map(Number.call, Number)
}

export default arrayGenerator;