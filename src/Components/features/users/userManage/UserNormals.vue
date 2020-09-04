<template>
  <div class="col-md-4">
    <v-col cols="12" md="9">
      <v-text-field name="name" v-model="user.name" :counter="30" label="name" required></v-text-field>
    </v-col>

    <v-col cols="12" md="3">
      <v-text-field name="age" v-model="user.age" :counter="3" label="Age" required></v-text-field>
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
    ...mapMutations(["UPDATE_USER"]),
  },
  //seperate Validation for name and age.
};
</script>

<style>
</style>