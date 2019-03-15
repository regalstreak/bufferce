<template>
  <v-app>
    <v-navigation-drawer
      app
      floating
      :key="drawerStore"
      v-model="drawerStore"
      v-if="drawerStore"
      permanent
    >
      <v-select
        class="pa-4"
        style="width: 300px"
        v-model="e7"
        :items="labs"
        label="Lab"
        single-line
        solo
      ></v-select>

      <v-card :key="i" @click="setSystemUrl(i)" v-for="i in 5" class="white--text ma-3 labPcCard">
        <v-layout>
          <v-flex xs5>
            <div
              class="text-xs-center ml-4 mt-4"
              style="border-radius: 50px; background-color: #002374; width: 50px; height: 50px"
            >
              <h3 class="pt-2">{{i}}</h3>
            </div>
          </v-flex>
          <v-flex xs7>
            <v-card-title primary-title>
              <div>
                <div class="headline">Lab PC #{{i}}</div>
                <div>Foster the People</div>
                <div>(2014)</div>
              </div>
            </v-card-title>
          </v-flex>
        </v-layout>
        <v-divider light></v-divider>
      </v-card>
    </v-navigation-drawer>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    e7: [],
    labs: ["515", "516", "517", "518", "519"],
    items: [
      { title: "Home", icon: "dashboard" },
      { title: "About", icon: "question_answer" }
    ]
  }),
  computed: {
    drawerStore: {
      get() {
        return this.$store.state.drawerStore;
      },
      set(newValue) {
        return this.$store.commit("setDrawer", newValue);
      }
    }
  },
  methods: {
    setSystemUrl(i) {
      this.$router.push("/dashboard/system/" + i);
    }
  },
  created() {
    console.log(this.drawerStore);
  },
  props: {
    source: String
  }
};
</script>

<style scoped>
.labPcCard {
  /* background: #01ffd9;
  background: -webkit-linear-gradient(top left, #01ffd9, #01509e);
  background: -moz-linear-gradient(top left, #01ffd9, #01509e);
  background: linear-gradient(top left, #01ffd9, #01509e); */

  border-radius: 18px;

  background-image: linear-gradient(
    to right top,
    #0031a1,
    #0339b0,
    #0642bf,
    #074bcf,
    #0654df,
    #0063e8,
    #0071ef,
    #007ff6,
    #0091ee,
    #009bd6,
    #00a1b7,
    #00a49a
  );
}
</style>
