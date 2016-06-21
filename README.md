# Express Content-Type Override Middleware

[![Npm package version](https://img.shields.io/npm/v/express-content-type-override.svg?style=flat-square)](https://www.npmjs.com/package/express-content-type-override)
[![Travis](https://img.shields.io/travis/rbartoli/express-content-type-override.svg?style=flat-square)](https://travis-ci.org/rbartoli/express-content-type-override)
[![Npm dependencies](https://david-dm.org/rbartoli/express-content-type-override.svg)](https://www.npmjs.com/package/express-content-type-override)
[![Npm total dowloads](https://img.shields.io/npm/dt/express-content-type-override.svg?style=flat-square)](https://www.npmjs.com/package/express-content-type-override)
[![License](https://img.shields.io/github/license/rbartoli/express-content-type-override.svg?style=flat-square)](/LICENSE)

An Express middleware to override the `content-type` header of the request.

## Installation

```bash
$ npm install --save express-content-type-override
```

## Usage

```javascript
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var registrationController = require('./controllers/registrationController');
var options = {
    contentType: 'application/x-www-form-urlencoded',
    charset: 'utf-8'
};

server.use('/registration', contentTypeOverride(options));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({
    extended: true
}));

app.post('/registration', registrationController.index);

app.listen(3000);
```

## Options
#### `options.contentType`
Specify the `content-type` mime-type you'd like to use. Defaults to `application/x-www-form-urlencoded`.

#### `options.charset`
If you need to specify charset as part of `content-type`. No default, will not be part of `content-type` if not set.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
