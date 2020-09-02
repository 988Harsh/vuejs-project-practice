<template>
  <form @submit.prevent="submit">
    <v-container>
      <v-row>
        <normals :name="isEditing?user.name:''" :age="isEditing?user.age:0"></normals>
        <credentials :email="isEditing?user.email:''" :password="isEditing?user.password:''"></credentials>
      </v-row>
      <div class="text-center">
        <v-btn type="submit" class="ma-2" tile outlined color="success">
          <v-icon v-if="$route.params.isEditing" left>mdi-pencil</v-icon>
          <v-icon v-else left>mdi-plus</v-icon>Save!
        </v-btn>
      </div>
    </v-container>
  </form>
</template>

<script>
import { getUser, updateUser, addUser } from "../services/user.service";
import normalVals from "./UserNormals";
import userCreds from "./UserCredentials";
export default {
  components: {
    normals: normalVals,
    credentials: userCreds,
  },
  props: ["userVal", "isEditing"],
  data() {
    return {};
  },
  computed: {
    user: {
      get() {
        return { ...this.userVal };
      },
    },
  },
  methods: {
    async submit($event) {
      let user = {
        name: $event.target["name"].value,
        age: $event.target["age"].value,
        email: $event.target["email"].value,
        password: $event.target["password"].value,
      };

      this.$emit("submit", user);
    },
  },
};
</script>

<style>
</style>