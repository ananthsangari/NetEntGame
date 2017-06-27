/**
 * Starting point of UI, ties modules together through dependency injections
 */

var Model = require('./model.service'),
    Http = require('./http.service'),
    Renderer = require('./renderer.service'),
    Controller = require('./controller.service');


var model = new Model(),
    http = new Http(),
    controller = new Controller({
        button: '[data-roll-button]'
    }),
    renderer = new Renderer({
        content: '[data-content]',
        resultText: '[data-result-text]',
        images: ['[data-image-1]', '[data-image-2]', '[data-image-3]'],
        buttonImage: '[data-button-image]',
        bonusArea: '[data-bonus]'
    });

http.model = model;
model.renderer = renderer;
model.http = http;
controller.http = http;
controller.renderer = renderer;


renderer.reset();
