var ITEMS_TO_BONUS_TEXT = {
    3: 'No Win',
    2: 'Small Win',
    1: 'Large Win'
};

/**
 * This is a main logic service,
 * it's calculating output for user and bonus chance
 */
class Service {

    getRoll() {
        var values = [this.getRandomInt(), this.getRandomInt(), this.getRandomInt()];
        
        return {
            values: values,
            isBonusAllowed: this.getRandomInt() === 1,
            text: this.getWinText(values)
        };
    }

    getRandomInt(min = 0, max = 6) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    getWinText(values) {
        var keysCount = new Set(values).size,
            result = ITEMS_TO_BONUS_TEXT[keysCount] || '';
        
        return result;
    }
    
}

module.exports = Service;
