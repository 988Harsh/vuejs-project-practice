<template>
  <div class="col-md-8">
    <v-col cols="12" md="5">
      <v-text-field name="email" :value="user.email" @input="sendEmail" label="E-mail" required></v-text-field>
    </v-col>

    <v-col cols="12" md="3">
      <v-text-field
        type="password"
        name="password"
        :value="user.password"
        @input="sendPassword"
        label="Password"
        required
      ></v-text-field>
    </v-col>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    sendEmail($event) {
      this.$emit("sendEmail", $event);
    },
    sendPassword($event) {
      this.$emit("sendPassword", $event);
    },
  },
  //separate validation for email and password!
};
</script>

<style>
</style>