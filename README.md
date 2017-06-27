
Link to Heroku https://sheltered-dusk-80472.herokuapp.com/

## Overview
The assignment is to build a small, full stack javascript application. The application is a simple game
which can display a random outcome generated on the server.
Requirements

#### General

- The application must work in major desktop and mobile devices (please state which devices/
browsers the application has been tested on)
- The general principles by which the application will be evaluated are maintainability, testability and
reusability.
- Unit Tests are not mandatory but encouraged; the key is that the code is testable.

#### Client

- Not external libraries or framework can be used
- ES6 is not mandatory but encouraged
- The user must be able to trigger a request for outcome to the server
- The outcome must be displayed to the user using the provided graphical resources (Symbol_0.png,
Symbol_1.png,…)
- The type of win must be displayed to the user (No Win, Small Win, Big Win)
- A bonus feature must be implemented. If the server returns bonus, the client must first display any
win to the user, then trigger an additional request without any user input (this must also be indicated
to the user in some form)

#### Server

- Server must be a Node.js application
- Server must be written in ES6
- Server must be able to serve needed resources to client.
- Server must be able to receive requests from client and return an outcome (three random integers
between 0-5).
- There must be three types of outcomes: No Win, Small Win, Big Win. Two equal integers constitutes a
Small Win. Three equal integers constitutes a Big Win.
- Server must randomly (in addition to the outcome) return if bonus feature should be triggered or not.


## How To Run
To make a fresh start use command (Windows-tested)
`npm run default`
Otherwise use two commands
`npm install` and  `npm run server`

#### Other tasks (after npm install) are:
`npm run webpack`

`npm run server`


#### Tested devices:
- Chrome, Firefox, IE 11 (should work up to IE8 with es5-shim thanks to webpack and babel)
- Android 5 (Moto X2, Lenovo Yoga Tab 2, HTC One)
- iOS 10.2 (IPhone 7)


Server tested on Node v.6.9.2 LTS
# NetEntGame
