<template>
  <v-form @submit.prevent="submit">
    <v-container>
      <v-row>
        <v-col cols="12" md="3">
          <v-text-field name="name" v-model="user.name" :counter="30" label="name" required></v-text-field>
        </v-col>

        <v-col cols="12" md="1">
          <v-text-field name="age" v-model="user.age" :counter="3" label="Age" required></v-text-field>
        </v-col>

        <v-col cols="12" md="5">
          <v-text-field name="email" v-model="user.email" label="E-mail" required></v-text-field>
        </v-col>

        <v-col cols="12" md="3">
          <v-text-field
            type="password"
            name="password"
            v-model="user.password"
            label="Password"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <div class="text-center">
        <v-btn type="submit" class="ma-2" tile outlined color="success">
          <v-icon left>mdi-plus</v-icon>Save!
        </v-btn>
      </div>
    </v-container>
  </v-form>
</template>

<script>
import { addUser } from "./services/user.service";
export default {
  data() {
    return {
      valid: false,
      user: {},
      //   nameRules: [
      //     (v) => !!v || "Name is required",
      //     (v) => v.length <= 30 || "Name must be less than 30 characters",
      //   ],
      //   ageRules: [
      //     (v) => !!v || "Age is required",
      //     (v) => v.length <= 3 || "Age must be less than 3 characters",
      //   ],
      //   emailRules: [
      //     (v) => !!v || "E-mail is required",
      //     (v) => /.+@.+/.test(v) || "E-mail must be valid",
      //   ],
    };
  },
  methods: {
    async submit($event) {
      const res = await addUser(this.user);
      console.log(res);
      this.$router.push({ path: "/users" });
    },
  },
};
</script>

<style>
</style>