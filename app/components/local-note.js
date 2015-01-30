import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'article',
  classNames: ['note'],

  actions: {
    deleteNote: function(note) {
      this.sendAction('deleteNote', note);
    }
  }
});
