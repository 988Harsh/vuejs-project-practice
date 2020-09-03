<template>
  <user-form @onSubmit="submit"></user-form>
</template>

<script>
import Userform from "./UserForm";
export default {
  components: {
    userForm: Userform,
  },
  methods: {
    async submit($event) {
      await this.$store.dispatch("updateOrInsertUser", {
        user: $event,
        _id: this.$store.state.user._id, //
      });
      this.$router.push({ path: "/users" });
    },
  },
};
</script>

<style>
</style>