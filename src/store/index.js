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
      setUser(state, payload) {
        const {...user} = Object.values(payload)
        state.user = user[0]
        //console.log(state.user.id)
      },
      setProposed(state, payload) {
        const {...date} = Object.keys(payload)
        state.proposed = date
        //console.log(payload)
      },
      selected(state, payload) {
        state.selected = payload
      },
      proposedUpdate(state, payload) {
        state.proposed = payload
      }
    },
    actions: {
      async loadUser({ commit }) {
        try {
            const { data } = await meetingApi.get('/users.json')

            commit('setUser', data);
        } catch (error) {
            commit('setUser', {});
        }
      },
      async loadProposed({ commit }) {
        try {
            const { data } = await meetingApi.get('/proposed.json')

            commit('setProposed', data);
        } catch (error) {
            commit('setProposed', []);
        }
      },
      proposedUpdate({commit}, data) {
        commit('proposedUpdate', data)
      },
      selected({commit}, data) {
        commit('selected', data)
      }
    },
    getters: {
      currentUser(state) {
        const user = state.voted[4];
        
        return state.user = user;
      }
  }
});