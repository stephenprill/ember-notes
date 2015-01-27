# Notes

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM) and [Bower](http://bower.io/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

  ______
NOTES FROM REVIEW FROM YESTERDAY

don't {{#each}} always go with {{#each note in model}}

export default Ember.Route.extend({
  model: function() {
    return this.store.find('note');
  }
  });

  model is a 'hook'
  think of it as data and has nothing to do with actual model/model for notes

  return this.store.find('note');
  return [
    {body: 'foo'},
    {body: 'baz'},
    {body: 'bar'},
  ]
  saying same thing


  ember g model note (singular)

re: the model above text
import something from ember data, call it DS
import note from 'note'; and ref'in note file

var Note = DS model body: DS.attr  

export default Note; - here is thing people get when they import this file
says the same thing but explained

best case one thing from the model re: exporting


click event listener when you click on save note and have nothing setup in the controller

ember g -help to see what you can do

ember g controller note

finds and runs it and ember does that part for us re the alert example ref'n actions in notes controller

this.get ('inputText') goes off a reactive variable off the notes controller

next local storage adapter which means it's storing it in the browser

localStorage.setItem

cookies have max size and local storage
ls can't send over network cookies can

restart the server per install

ember g adapter application

don't want a REST adapter

import DS from "ember-data";

export default DS.LSAdapter.extend({});

  change to LS

controller

  var note = this.store.createRecord('note', { body: body, title: title });


  need the key as well as 'note' in this case

  in rails you need a screen refresh to get in going

  this.set('noteCopy', '');


  this.set('inPutText' to a blank string '')
  so setting value so the text actually resets
  get that shit from Ember to fuck with it

  $E.set('inputText', and then whatever you want assign)
set this key to this value

_methods are private
set/get methods w/ fucntion value

proto (what object inherits from )

trim takes out left and right spaces

methods 
