<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="white"
      flat
    >
      <v-avatar
        :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"
        size="32"
      ></v-avatar>

      <v-tabs
        centered
        class="ml-n9"
        color="grey darken-1"
      >
        <v-tab
          v-for="link in links"
          :key="link"
        >
          {{ link }}
        </v-tab>
      </v-tabs>

      <current-user :current-user="currentUser" />
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="12" md="8">
            <v-sheet rounded="lg">
              <v-card>
                <p v-for="i in myVote.dates" :key="i">{{i}}</p>
                <calendar />
              </v-card>
            </v-sheet>
          </v-col>

          <v-col cols="12" md="4">
            <voted-list />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
// eslint-disable-next-line
import { mapState, mapGetters, mapActions } from 'vuex'
import CurrentUser from './components/CurrentUser.vue'
import VotedList from './components/VotedList.vue'
import Calendar from './components/Calendar.vue'

export default {
  name: 'App',
  components: {
    VotedList,
    CurrentUser,
    Calendar
  },
  data: () => ({
    links: [
      'Inicio',
      'Gastos',
      'Amigos',
    ]
  }),
  created() {
    this.getCurrentUser()
  },
  computed: {
    ...mapState(['myVote']),
    ...mapGetters(['currentUser'])
  },
  methods: {
    ...mapActions({
      getCurrentUser: 'loadUser'
    })
  }
}
</script>