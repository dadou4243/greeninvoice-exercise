import axios from 'axios';

export default {
  // Get all the notes
  getNotes() {
    return axios.get('notes').then(response => {
      return response;
    });
  },
  // Get a specific note information
  getNoteData(noteID) {
    return axios.get(`notes/${noteID}`).then(response => {
      return response;
    });
  },
  saveNoteData(noteData) {
    return axios
      .patch(`notes/${noteData.id}`, { note: noteData.body })
      .then(response => {
        return response;
      });
  }
};
