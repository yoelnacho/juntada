import Vue from 'vue';
import Vuex from 'vuex';
import meetingApi from '@/api/meetingApi'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isLoading: true,
        user: {},
        baseURL: 'https://juntada-5c86c-default-rtdb.firebaseio.com',
        proposed: ['2021-11-28', '2021-11-21'], //'2021-11-28', '2021-11-21'
        selected: [],
        voted: [
          {
            id: '0005',
            checked: true,
            name: 'Nachito',
            avatar: 'https://en.gravatar.com/userimage/416096/5a2cd248216bd3a382835779257ce8cc.jpg'
          }
        ],
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
      SET_USER(state, payload) {
        const {...user} = Object.values(payload)
        state.user = user[0]
        //console.log(state.user.id)
      },
      SET_PROPOSED(state, payload) {
        const {...date} = Object.keys(payload)
        state.proposed = date
        //console.log(payload)
      },
      SELECTED(state, payload) {
        state.selected = payload
      },
      PROPOSED_UPDATE(state, payload) {
        state.proposed = payload
      },
      VOTED_LOAD(state, payload) {
        state.voted = payload
      }
    },
    actions: {
      async loadUser({ commit }) {
        try {
            const { data } = await meetingApi.get('/users.json')

            commit('SET_USER', data);
        } catch (error) {
            commit('SET_USER', {});
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

            commit('VOTED_LOAD', data);
        } catch (error) {
            commit('VOTED_LOAD', []);
        }
      },
      proposedUpdate({commit}, data) {
        commit('PROPOSED_UPDATE', data)
      },
      selected({commit}, data) {
        commit('SELECTED', data)
      }
    },
    getters: {
      currentUser(state) {
        return state.user = state.users[4];
      },
      votedList(state) {
        
        return state.voted;
      }
  }
});