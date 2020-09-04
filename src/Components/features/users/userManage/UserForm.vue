<template>
  <form @submit.prevent="submit">
    <v-container>
      <v-row>
        <normals></normals>
        <credentials></credentials>
      </v-row>
      <div class="text-center">
        <v-btn type="submit" class="ma-2" tile outlined color="success">
          <v-icon left>{{isEditing? 'mdi-pencil':'mdi-plus'}}</v-icon>
        </v-btn>
      </div>
    </v-container>
  </form>
</template>

<script>
import normalVals from "./UserNormals";
import userCreds from "./UserCredentials";
import { mapState } from "vuex";
export default {
  components: {
    normals: normalVals,
    credentials: userCreds,
  },
  computed: {
    ...mapState(["isEditing"]),
  },
  methods: {
    async submit() {
      this.$emit("onSubmit");
    },
  },
};
</script>

<style>
</style>