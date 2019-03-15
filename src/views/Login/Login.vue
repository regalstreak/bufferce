<template>
  <v-layout align-center row>
    <v-flex xs6 class="loginImageFlex">
      <v-img
        class="loginImage"
        style="height: 100vh"
        :src="require('../../assets/server_scale.png')"
      ></v-img>
    </v-flex>
    <v-flex xs6 class="loginInterface">
      <v-layout column align-center>
        <v-flex>
          <font class="font-weight-thin display-1" style="color: #01509E">login to bufferce</font>
          <br>
          <br>
        </v-flex>
        <v-flex class="loginTextField" style="width: 300px">
          <v-text-field solo label="username" class="loginTextField"></v-text-field>
        </v-flex>
        <v-flex>
          <v-text-field
            solo
            label="password"
            type="password"
            class="loginTextField"
            style="width: 300px"
          >Password</v-text-field>
        </v-flex>
        <v-flex>
          <v-btn large round to="/dashboard" class="loginButton white--text ma-2" color="#01509E">
            <div style="padding-right: 100px;padding-left: 100px;">
              <font style="text-transform: lowercase;">login</font>
            </div>
          </v-btn>
        </v-flex>
        <v-flex>
          <v-btn large round to="/signup" color="#FFFFFF">
            <div style="padding-right: 100px;padding-left: 100px;">
              <font style="text-transform: lowercase;">signup</font>
            </div>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
export default {};
</script>

<style scoped>
.loginImage {
  justify-content: center;
}

.loginButton {
  background: #01ffd9;
  background: -webkit-linear-gradient(top left, #01ffd9, #01509e);
  background: -moz-linear-gradient(top left, #01ffd9, #01509e);
  background: linear-gradient(top left, #01ffd9, #01509e);
}

.loginTextField {
  border-radius: 100px;
}
</style>
