const path = require("path");

module.exports = {
    // TODO load custom loader/resolver in order to target src instead of dist and remove source prop from package.json
    resolve: {
        mainFields: ['browser', 'module', 'main','source']
    },
};
