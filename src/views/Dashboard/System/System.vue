<template>
  <v-container>
    <v-layout column>
      <v-flex class="ma-3">
        <v-card :key="pcNumber">
          <v-card-title>
            <h1>Lab PC Number {{ pcNumber }}</h1>
          </v-card-title>

          <font>
            <h2 class="px-3">Status: Online</h2>
          </font>
        </v-card>
      </v-flex>
      <v-flex class="ma-3">
        <v-card>
          <v-card-title>
            <h1>RAM Usage</h1>
          </v-card-title>

          <div class="px-3">
            <h3>Total RAM: 4 GiB</h3>
            <h3>Used RAM : 2 GiB</h3>

            <br>
          </div>

          <v-card-actions>
            <v-progress-linear color="blue" height="20" value="75"></v-progress-linear>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex>
        <v-card class="ma-3">
          <v-card-title>
            <h1>Hard Disk Space</h1>
          </v-card-title>

          <div class="px-3">
            <h3>Total Disk Space: 400 GiB</h3>
            <h3>Used Disk Space : 200 GiB</h3>

            <br>
          </div>

          <v-card-actions>
            <v-progress-linear color="blue" height="20" value="40"></v-progress-linear>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex>
        <v-card class="ma-3">
          <v-card-title>
            <h1>Actions</h1>
          </v-card-title>
          <v-layout>
            <v-flex>
              <v-card color="error" class="white--text pa-3 ma-3 systemCard shutdown">Shutdown</v-card>
            </v-flex>
            <v-flex>
              <v-card color="error" class="white--text pa-3 ma-3 systemCard restart">Restart</v-card>
            </v-flex>
            <v-flex>
              <v-card color="blue" class="white--text pa-3 ma-3 systemCard screenshot">Screenshot</v-card>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    pcNumber() {
      return window.location.pathname;
    }
  }
};
</script>

<style scoped>
.systemCard {
  border-radius: 18px;
}
.screenshot {
  background-image: linear-gradient(
    to right top,
    #093705,
    #1d600f,
    #378c15,
    #56bb17,
    #7aeb12
  );
}

.shutdown {
  background-image: linear-gradient(
    to left bottom,
    #920303,
    #aa2d05,
    #c14b07,
    #d7670b,
    #eb8312
  );
}

.restart {
  background-image: linear-gradient(
    to right top,
    #740065,
    #83007b,
    #900094,
    #9b00ae,
    #a400cb,
    #ab17d7,
    #b325e3,
    #ba31ef,
    #c546ec,
    #ce58e9,
    #d569e7,
    #dc79e5
  );
}
</style>
