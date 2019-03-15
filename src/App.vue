<template>
  <v-app>
    <v-navigation-drawer app floating :key="drawerStore" v-model="drawerStore" v-if="drawerStore" mini-variant permanent>
      <v-list class="pt-0">
        <v-list-tile v-for="item in items" :key="item.title">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "App",
  data: () => ({
    items: [
      { title: "Home", icon: "dashboard" },
      { title: "About", icon: "question_answer" }
    ]
  }),
  computed: {
    ...mapState([
      'drawerStore'
    ])
  },
  created(){
    console.log(this.drawerStore)
  },
  props: {
    source: String
  }
};
</script>
