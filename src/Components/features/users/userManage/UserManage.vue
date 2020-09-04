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
    async submit() {
      await this.$store.dispatch("updateOrInsertUser", {
        _id: this.$route.params._id, //
      });
      this.$router.push({
        name: "userList",
        params: { page: this.$route.params.page },
      });
    },
  },
};
</script>

<style>
</style>