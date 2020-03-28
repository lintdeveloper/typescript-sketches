function error(): never {
    throw new Error('error!');
}

function fail() {
    return error()
}