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

    deleteNote: function(id) {
      var self = this;
      self.store.find('note', id).then(function(note){
        note.deleteRecord();
        note.save();
        self.flashMessage('success', 'Congratulations! Your note has been deleted.');
      });
    },

    deleted: function() {
      var _this = this;

      this.get('note').save().then(function() {
        _this.formDeleted();
      });
    },
    formDeleted: function() {
      this.flashMessage('success', 'Congratulations! Your changes have been saved');
    }
  }
});
