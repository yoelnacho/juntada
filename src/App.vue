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

      <v-avatar
        class="hidden-sm-and-down"
        color="primary darken-1 shrink"
        size="32"
      ><span class="white--text text-h8">IA</span></v-avatar>
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
                <h3>Title</h3>
                <p v-for="i in dates" :key="i">{{i}}</p>
                <v-date-picker
                  locale="es-es"
                  full-width
                  v-model="dates"
                  multiple
                  landscape
                ></v-date-picker>
              </v-card>
            </v-sheet>
          </v-col>

          <v-col
            cols="12"
            md="4"
          >
            <h4 class="mb-4">Quienes votaron?</h4>
            <v-card>
              <v-list-item
                v-for="item in items"
                :key="item.title"
              >
                <v-list-item-icon>
                  <v-icon
                    v-if="item.icon"
                    color="primary"
                  >
                    mdi-check
                  </v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title v-text="item.title"></v-list-item-title>
                </v-list-item-content>

                <v-list-item-avatar>
                  <v-img :src="item.avatar"></v-img>
                </v-list-item-avatar>
              </v-list-item>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    name: 'App',
    data: () => ({
      links: [
        'Inicio',
        'Gastos',
        'Amigos',
      ],
      dates: ['2021-11-28', '2021-11-20'],
      picker: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      items: [
        { icon: true, title: 'Jason Oner', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
        { title: 'Travis Howard', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
        { title: 'Ali Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
        { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' },
      ],
    }),
  }
</script>