<template>
  <div class="c-calendar">
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
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Calendar',
  data: ()=> ({
    dates: [],
  }),
  created() {
    this.loadProposed()
  },
  computed: {
    ...mapState(['proposed', 'user'])
  },
  methods: {
    ...mapActions({
      setVote: 'setVote',
      loadProposed: 'loadProposed'
    }),
    update() {
      this.setVote(this.dates)
    },
    allowedDates(val) {
      const el = Object.values(this.proposed)

      return el.indexOf(val) !== -1
    }
  }
}
</script>
