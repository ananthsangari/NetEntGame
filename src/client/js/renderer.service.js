module.exports = RendererService;

/**
 * UI service for rendering dynamic UI
 * @param selectors
 * @returns {RendererService}
 * @constructor
 */
function RendererService(selectors) {
    if (!(this instanceof RendererService)) {
        return new RendererService();
    }
    
    var IMAGES = {
        button: require('../images/button.png'),
        image0: require('../images/Symbol_0.png'),
        image1: require('../images/Symbol_1.png'),
        image2: require('../images/Symbol_2.png'),
        image3: require('../images/Symbol_3.png'),
        image4: require('../images/Symbol_4.png'),
        image5: require('../images/Symbol_5.png')
    };
    
    var $content = document.querySelector(selectors.content),
        $text = document.querySelector(selectors.resultText),
        $images = selectors.images.map( sel => document.querySelector(sel) ),
        $buttonImage = document.querySelector(selectors.buttonImage),
        $bonus = document.querySelector(selectors.bonusArea);


    this.render = function (newModel) {
        $images.forEach( img => img.classList.remove('hidden'));        
        newModel.values.forEach( (val, i) => $images[i].src = IMAGES[`image${val}`]);

        $text.innerText = newModel.text;

        toggleClass($bonus, !newModel.isBonusAllowed, 'hidden');
        
        if (!newModel.isBonusAllowed) {
            this.toggleLoadingState(false);
        }
        
    };
    
    this.reset = function () {
        $images.forEach( img => img.classList.add('hidden'));
        $bonus.classList.add('hidden');
        $buttonImage.src = IMAGES.button;
        this.toggleLoadingState(false);
    };
    
    this.toggleLoadingState = function (flag) {
        toggleClass($content, flag, 'loading');
    };

    function toggleClass(el, flag, className) {
        el.classList[flag? 'add' : 'remove'](className);
    }

}
