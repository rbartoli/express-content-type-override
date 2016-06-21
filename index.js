module.exports = function (options) {
    var o = options || {};
    o.contentType = o.contentType || 'application/x-www-form-urlencoded';
    
    if (o.charset) {
        o.contentType += ';charset=' + o.charset;
    }

    return function(req, res, next) {
        if (!req.headers['content-type'] || !req.headers['content-type'].match(o.contentType)) {
            req.headers['content-type'] = o.contentType;
        }

        next();
    };
};
