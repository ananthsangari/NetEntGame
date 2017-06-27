module.exports = ControllerService;

/**
 * UI service for handling user controls
 * @param selectors
 * @returns {ControllerService}
 * @constructor
 */
function ControllerService(selectors) {
    if (!(this instanceof ControllerService)) {
        return new ControllerService();
    }

    var ctx = this,
        $button = document.querySelector(selectors.button);

    this.http = null;
    this.renderer = null; 

    $button.addEventListener('click', (event) => {
        event.preventDefault();

        ctx.renderer.toggleLoadingState(true);
        
        ctx.http.getNewValues();
    });


}
