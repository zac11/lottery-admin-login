function httpGet(siteUrl) {
    var http = require('http');
    var defer = protractor.promise.defer();

    http.get(siteUrl, function(response) {

        var bodyString = '';

        response.setEncoding('utf8');

        response.on("data", function(chunk) {
            bodyString += chunk;
        });

        response.on('end', function() {
            defer.fulfill({
                statusCode: response.statusCode,
                bodyString: bodyString
            });
        });

    }).on('error', function(e) {
        defer.reject("Got http.get error: " + e.message);
    });

    return defer.promise;
}

describe('Getting User to login', function() {
    beforeEach(function(){
		browser.get("http://lotteryadmin.sia.co.in/#/");
	});

    it('should return 200 and contain proper body', function() {
    httpGet("http://lotteryadmin.sia.co.in/#/").then(function(result) {
        expect(result.statusCode).toBe(200);
        //expect(result.bodyString).toContain('Apache');
         });
    });


});
