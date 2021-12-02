<template>
  <v-avatar
    class="hidden-sm-and-down"
    color="primary darken-1 shrink"
    size="32"
  >
    <v-img v-if="currentUser" :src="currentUser.avatar"></v-img>
    <span v-else class="white--text text-h8">IA</span>
  </v-avatar>
</template>

<script>
export default {
  name: 'CurrentUSer',
  props: {
    currentUser: {
      type: Object,
      required: false,
      default: null
    }
  },
  data: () => ({
    // currentUser
  }),
}
</script>