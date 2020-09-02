<template>
  <v-form @submit.prevent="submit">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field name="name" v-model="user.name" :counter="30" label="name" required></v-text-field>
        </v-col>

        <v-col cols="12" md="2">
          <v-text-field name="age" v-model="user.age" :counter="3" label="Age" required></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field name="email" v-model="user.email" label="E-mail" required></v-text-field>
        </v-col>
      </v-row>
      <div class="text-center">
        <v-btn type="submit" class="ma-2" tile outlined color="success">
          <v-icon left>mdi-pencil</v-icon>Save!
        </v-btn>
      </div>
    </v-container>
  </v-form>
</template>


<script>
import { getUser, updateUser } from "./services/user.service";
export default {
  data() {
    return {
      user: null,
    };
  },
  async created() {
    this.user = await getUser(this.$route.params._id);
  },
  methods: {
    async submit($event) {
      let user = {
        name: $event.target["name"].value,
        age: $event.target["age"].value,
        email: $event.target["email"].value,
      };
      console.log(user);
      const res = await updateUser(this.$route.params._id, user);
      console.log(res);
      this.$router.push({ path: "/users" });
    },
  },
};
</script>

<style>
</style>