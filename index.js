module.exports = function (options) {
    var contentType;
    options = options || {};
    options.contentType = options.contentType || 'application/x-www-form-urlencoded';
    
    if (options.charset) {
        options.contentType += ';charset=' + options.charset;
    }

    return function(req, res, next) {
        if (!req.headers['content-type'] || !req.headers['content-type'].match(options.contentType)) {
            req.headers['content-type'] = options.contentType;
        }

        next();
    };
};
