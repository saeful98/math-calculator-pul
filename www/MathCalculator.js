var exec = require('cordova/exec');

exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'MathCalculator', 'coolMethod', [arg0]);
};

//Custom Function
module.exports.add = function (arg0, success, error) {
    exec(success, error, 'MathCalculator', 'add', [arg0]);
}

module.exports.mul = function (arg0, success, error) {
    exec(success, error, 'MathCalculator', 'mul', [arg0]);
}