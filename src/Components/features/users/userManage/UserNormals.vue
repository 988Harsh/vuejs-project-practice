<template>
  <div class="col-md-4">
    <v-col cols="12" md="9">
      <v-text-field
        name="name"
        :value="user.name"
        @input="user.name = $event"
        :counter="30"
        label="name"
        required
      ></v-text-field>
    </v-col>

    <v-col cols="12" md="3">
      <v-text-field
        name="age"
        :value="user.age"
        @input="user.age = $event"
        :counter="3"
        label="Age"
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

  //seperate Validation for name and age.
};
</script>

<style>
</style>