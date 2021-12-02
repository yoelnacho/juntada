import Vue from 'vue';
import Vuex from 'vuex';
import meetingApi from '@/api/meetingApi'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isLoading: true,
        currentUser: {},
        proposed: [], //'2021-11-28', '2021-11-21'
        // voted: [
        //   {
        //     id: '0005',
        //     checked: true,
        //     name: 'Nachito',
        //     avatar: 'https://en.gravatar.com/userimage/416096/5a2cd248216bd3a382835779257ce8cc.jpg'
        //   }
        // ],
        myVote: [],
        voted: [],
        users: [
          {
            id: '0001',
            checked: true,
            name: 'Jason Oner',
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg'
          },
          {
            id: '0002',
            checked: false,
            name: 'Travis Howard',
            avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg'
          },
          {
            id: '0003',
            checked: false,
            name: 'Ali Connors',
            avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg'
          },
          {
            id: '0004',
            checked: true,
            name: 'Cindy Baker',
            avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg'
          },
          {
            id: '0005',
            checked: true,
            name: 'Nachito',
            avatar: 'https://en.gravatar.com/userimage/416096/5a2cd248216bd3a382835779257ce8cc.jpg'
          }
        ]
    },
    mutations: {
      SET_CURRENT_USER(state, payload) {
        const {...user} = Object.values(payload)
        state.currentUser = user[0]
        //console.log(state.user.id)
      },
      SET_PROPOSED(state, payload) {
        const {...date} = Object.keys(payload)
        state.proposed = date
        //console.log(payload)
      },
      UPDATE_PROPOSED(state, payload) {
        state.proposed = payload
      },
      LOAD_VOTED(state, payload) {
        state.voted = payload
      },
      SET_VOTE(state, payload) {
        const send = {
          dates: payload,
          ...state.user
        }
        
        state.myVote = payload
        state.voted.push(send)
      }
    },
    actions: {
      async loadUser({ commit }) {
        try {
            const { data } = await meetingApi.get('/users.json')

            commit('SET_CURRENT_USER', data);
        } catch (error) {
            commit('SET_CURRENT_USER', {});
        }
      },
      async loadProposed({ commit }) {
        try {
            const { data } = await meetingApi.get('/proposed.json')

            commit('SET_PROPOSED', data);
        } catch (error) {
            commit('SET_PROPOSED', []);
        }
      },
      async loadVoted({ commit }) {
        try {
            const { data } = await meetingApi.get('/voted.json')

            commit('LOAD_VOTED', data);
        } catch (error) {
            commit('LOAD_VOTED', []);
        }
      },
      setVote({ commit } , data) {
        commit('SET_VOTE', data)
      },
      proposedUpdate({commit}, data) {
        commit('UPDATE_PROPOSED', data)
      }
    },
    getters: {
      // After login
      currentUser(state) {
        return state.user = state.users[4];
      },
      // make a filter
      votedList(state) {
        return state.voted;
      }
  }
});