var assert = require('assert');
var request = require('supertest');

var contentTypeOverride = require('..');

function createServer(contentType, charset) {
    var express = require('express');
    var server = express();

    server.use('/', contentTypeOverride({
        contentType: contentType,
        charset: charset
    }));

    server.post('/', function(req, res) {
        res.set('Content-Type', req.headers['content-type']);
        res.status(200).send({});
    });

    return server;
}

describe('contentTypeOverride()', function() {
    var server;

    it('should default to {}', function(done) {
        server = createServer();
        request(server)
            .post('/')
            .expect(200, '{}', done);
    });

    it('should set the content-type header to x-www-form-urlencoded', function(done) {
        server = createServer('application/x-www-form-urlencoded');
        request(server)
            .post('/')
            .expect('Content-Type', /x-www-form-urlencoded/)
            .expect(200, '{}', done);
    });

    it('should set the content-type header to application/json', function(done) {
        server = createServer('application/json');
        request(server)
            .post('/')
            .expect('Content-Type', /json/)
            .expect(200, '{}', done);
    });

    it('should set the content-type header to text/plain', function(done) {
        server = createServer('text/plain');
        request(server)
            .post('/')
            .expect('Content-Type', /plain/)
            .expect(200, '{}', done);
    });

    it('should be able to set a charset', function(done) {
        server = createServer('application/json', 'utf-8');
        request(server)
            .post('/')
            .expect('Content-Type', /json/)
            .expect('Content-Type', /utf-8/)
            .expect(200, '{}', done);
    });
});
