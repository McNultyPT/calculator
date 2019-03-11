module.exports = {
    add,
};

function add(args) {
    const values = Array.isArray(args) ? args : Array.from(arguments);

    return values.reduce((sum, value) => {
        return sum + value;
    }, 0)
}

// function add() {
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }
//     return sum;
// }