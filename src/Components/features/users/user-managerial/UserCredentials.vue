<template>
  <div class="col-md-8">
    <v-col cols="12" md="5">
      <v-text-field name="email" v-model="email" label="E-mail" required></v-text-field>
    </v-col>

    <v-col cols="12" md="3">
      <v-text-field type="password" name="password" v-model="password" label="Password" required></v-text-field>
    </v-col>
  </div>
</template>

<script>
export default {
  props: ["email", "password"],

  //separate validation for email and password!
};
</script>

<style>
</style>