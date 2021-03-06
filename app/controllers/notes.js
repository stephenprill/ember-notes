import Ember from "ember";

export default Ember.ArrayController.extend({
  actions: {
    newNote: function() {
      var body = this.get('noteCopy'),
          title = this.get('noteTitle');
      if (body) {
        var note = this.store.createRecord('note', { body: body, title: title });
        this.set('noteCopy', '');
        this.set('noteTitle', '');
        note.save();
      }
      // this.set('noteCopy', '');
      // this.set('noteTitle', '');
    },

    deleteNote: function(note) {
        var self = this;
        note.deleteRecord();
        note.save();
        self.flashMessage('success', 'Congratulations! Your note has been deleted.');
    },

    deleted: function() {
      this.get('note').save().then(function() {
        this.formDeleted();
      });
    },
  }
});
