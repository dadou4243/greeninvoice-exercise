import Vue from 'vue';
import Vuex from 'vuex';
import UserApi from '../services/api/User';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notes: [],
    showModal: false,
    selectedNoteData: {},
    filteredNotes: []
  },
  mutations: {
    showModal(state) {
      state.showModal = true;
    },
    closeModal(state) {
      state.showModal = false;
    },
    getNotes(state, payload) {
      state.notes = payload;
    },
    setSelectedNoteData(state, payload) {
      state.selectedNoteData = payload;
    },
    setFilteredNotes(state, payload) {
      state.filteredNotes = payload;
    }
  },
  actions: {
    showModal({ commit }) {
      commit('showModal');
    },
    closeModal({ commit }) {
      commit('closeModal');
    },
    // Get the list of notes from the API
    getNotes({ commit }) {
      UserApi.getNotes().then(result => {
        commit('getNotes', result.data);
        // Initialize the filtered notes value
        commit('setFilteredNotes', result.data);
      });
    },
    // Filter the notes based on the search text input value
    setFilteredNotes({ commit, state }, author) {
      const filteredNotes = state.notes.filter(note => {
        return note.author.toLowerCase().startsWith(author.toLowerCase());
      });
      commit('setFilteredNotes', filteredNotes);
    },
    // Get the selected note data from the API
    getSelectedNoteData({ commit }, noteID) {
      UserApi.getNoteData(noteID).then(result => {
        commit('setSelectedNoteData', result.data);
      });
    },
    // Save the edited note to the API if changes have been made
    saveNoteData({ dispatch, state }, noteData) {
      // Get the value of the note before change
      const initialNoteData = state.notes.find(note => {
        return note.id === noteData.id;
      });
      // Check if the editable field of the note has been changed
      if (noteData.body !== initialNoteData.body) {
        // Patch the new note data
        UserApi.saveNoteData(noteData).then(result => {
          if (result.status === 200) {
            dispatch('getNotes');
          }
        });
      }
    }
  },
  getters: {
    notes: state => {
      return state.notes;
    },
    showModal: state => {
      return state.showModal;
    },
    selectedNoteData: state => {
      return state.selectedNoteData;
    },
    filteredNotes: state => {
      return state.filteredNotes;
    },
    authors: state => {
      return state.notes.map(note => {
        return note.author;
      });
    }
  }
});
