/*eslint-disable no-console */
/*eslint-disable func-style */
//eslint-disable-next-line func-style
//eslint-disable-next-line require-jsdoc
//eslint-disable-next-line func-style
//eslint-disable-next-line require-jsdoc
function log (req, res, next) {
    console.log('Logging.. ');
    next();
}

module.exports = log;