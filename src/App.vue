<template>
  <v-container fluid>
    <v-row>
      <v-col md="3">
        <app-navbar></app-navbar>
      </v-col>
      <v-col>
        <!-- <p>{{$route.params.token}}</p> -->
        <router-view></router-view>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Nav from "./Components/shared/Navigator";
export default {
  components: {
    appNavbar: Nav,
  },
};
</script>

<style>
html,
body {
  height: 100%;
}
.container,
.row {
  height: 100%;
}
</style>
