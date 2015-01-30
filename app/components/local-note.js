import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'article',
  classNames: ['note'],

  actions: {
    deleteNote: function(id) {
      this.sendAction('deleteNote', id);
    }
  }
});
