/*eslint-disable no-console */
/*eslint-disable func-style */
//eslint-disable-next-line func-style
//eslint-disable-next-line require-jsdoc
//eslint-disable-next-line func-style
//eslint-disable-next-line require-jsdoc
function auth (req, res, next) {
    console.log('Authenticating... ');
    next();
}

module.exports = auth;