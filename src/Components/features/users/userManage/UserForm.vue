<template>
  <form @submit.prevent="submit">
    <v-container>
      <v-row>
        <normals @sendName="user.name=$event" @sendAge="user.age=$event"></normals>
        <credentials @sendEmail="user.email=$event" @sendPassword="user.password=$event"></credentials>
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
  data() {
    return {
      user: {},
    };
  },
  computed: {
    ...mapState(["isEditing"]),
  },
  methods: {
    async submit($event) {
      this.$emit("onSubmit", this.user);
    },
  },
};
</script>

<style>
</style>