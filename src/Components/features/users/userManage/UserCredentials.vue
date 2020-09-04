<template>
  <div class="col-md-8">
    <v-col cols="12" md="5">
      <v-text-field
        name="email"
        :value="user.email"
        @input="user.email = $event"
        label="E-mail"
        required
      ></v-text-field>
    </v-col>

    <v-col cols="12" md="3">
      <v-text-field
        type="password"
        name="password"
        :value="user.password"
        @input="user.password = $event"
        label="Password"
        required
      ></v-text-field>
    </v-col>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    ...mapMutations(["setUserName", "setUserAge"]),
  },
  //separate validation for email and password!
};
</script>

<style>
</style>