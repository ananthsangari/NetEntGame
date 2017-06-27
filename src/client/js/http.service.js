module.exports = HttpService;

/**
 * UI service for handling http requests
 * @returns {HttpService}
 * @constructor
 */
function HttpService() {
    if (!(this instanceof HttpService)) {
        return new HttpService();
    }
    
    var ctx = this,
        reqN = 0;
    
    this.model = null;

    this.getNewValues = function () {
        var request = new XMLHttpRequest();
        request.onreadystatechange = function() {
            
            if (request.readyState === 4 && request.status === 200) {
                var data = JSON.parse(request.responseText);
                ctx.model.updateModel(data);
                
            } else if (request.readyState === 4 && request.status !== 200) {
                console.log(`Status ${request.status}: ${request.responseText}`);
            }
            
        };
        request.open("GET", '/api/roll?reqN=' + reqN++, true);
        request.send(null);
    };


}
