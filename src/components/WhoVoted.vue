<template>
  <div class="c-who-voted">
    <h4 class="mb-4">Quienes votaron?</h4>

    <v-card v-if="votedList">
      <v-list-item
        v-for="voted in votedList"
        :key="voted.id"
      >
        <v-list-item-icon>
          <v-icon
            v-if="voted.checked"
            color="primary"
          >
            mdi-check
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title v-text="voted.name"></v-list-item-title>
        </v-list-item-content>

        <v-list-item-avatar>
          <v-img :src="voted.avatar"></v-img>
        </v-list-item-avatar>
      </v-list-item>
    </v-card>
    <v-card v-else>
      <h5>Nadie ha votado aún!</h5>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'WhoVoted',
  data: () => ({
    //
  }),
  computed: {
    ...mapGetters(['votedList'])
  }
}
</script>
