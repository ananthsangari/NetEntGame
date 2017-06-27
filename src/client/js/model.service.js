module.exports = ModelService;

/**
 * UI model service for handling server data
 * @returns {ModelService}
 * @constructor
 */
function ModelService() {
    if (!(this instanceof ModelService)) {
        return new ModelService();
    }

    var ctx = this;
    
    this.renderer = null;
    this.service = null;
    
    this.model = null;

    this.updateModel = function (newModel) {
        this.model = newModel;
        
        if (this.model.isBonusAllowed) {
            setTimeout(_ => ctx.http.getNewValues(), 5000);
        }
        
        this.renderer.render(this.model);
    };

}
