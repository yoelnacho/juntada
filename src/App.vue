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
          <v-col
            cols="12"
            md="8"
          >
            <v-sheet
              min-height="70vh"
              rounded="lg"
            >
              <v-card>
                <h3>{{isLoading}} - {{ $store.state.user.id }}</h3>
                <v-btn
                  @click="getCurrentUser()"
                  elevation="2"
                >Load Users</v-btn>

                <p v-for="i in selected" :key="i">{{i}}</p>
                <v-date-picker
                  locale="es-es"
                  full-width
                  v-model="dates"
                  multiple
                  landscape
                  :allowed-dates="allowedDates"
                  :events="allowedDates"
                ></v-date-picker>
                <v-btn
                  @click="update()"
                  elevation="2"
                >Votar</v-btn>
              </v-card>
            </v-sheet>
          </v-col>

          <v-col
            cols="12"
            md="4"
          >
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

export default {
  name: 'App',
  components: {
    VotedList,
    CurrentUser
  },
  data: () => ({
    links: [
      'Inicio',
      'Gastos',
      'Amigos',
    ],
    dates: [],
    picker: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)
  }),
  created() {
    this.getCurrentUser()
    this.loadProposed()
  },
  computed: {
    ...mapState(['isLoading', 'selected', 'proposed']),
    ...mapGetters(['currentUser'])
  },
  methods: {
    ...mapActions({
      getCurrentUser: 'loadUser',
      updateProposed: 'selected',
      loadProposed: 'loadProposed'
    }),
    update() {
      this.updateProposed(this.dates)
    },
    allowedDates(val) {
      const el = Object.values(this.proposed)

      return el.indexOf(val) !== -1
    }
  }
}
</script>