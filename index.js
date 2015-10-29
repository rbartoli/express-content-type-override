/**
 *
 * @package     express-content-type-override
 * @category    Express Middleware
 * @version     1.0.0
 * @copyright   Copyright (c) 2015. All rights reserved.
 * @license     MIT
 * @author      Riccardo Bartoli <info@rblab.com>
 *
 */

module.exports = function ( options ) {
    var contentType;
    options = options || {};
    contentType = options.contentType || 'application/x-www-form-urlencoded';
    if (options.charset) {
        contentType += ';charset=' + options.charset;
    }

    return function( req, res, next ) {
        if ( !req.headers['content-type'] || !req.headers['content-type'].match( contentType ) ) {
            // Set the content-type header manually
            req.headers['content-type'] = contentType;
        }

        next();
    };
};
