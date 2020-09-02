<template>
  <user-form :userVal="user" :isEditing="$route.params.isEditing" @submit="submit"></user-form>
</template>

<script>
import { getUser, addUser, updateUser } from "../services/user.service";
import Userform from "./UserForm";
export default {
  data() {
    return {
      user: {},
    };
  },
  components: {
    userForm: Userform,
  },
  async created() {
    if (this.$route.params.isEditing)
      this.user = await getUser(this.$route.params._id);
  },
  methods: {
    async submit($event) {
      if (this.$route.params.isEditing) {
        const res = await updateUser(this.$route.params._id, $event);
      } else {
        const res = await addUser($event);
      }
      this.$router.push({ path: "/users" });
    },
  },
};
</script>

<style>
</style>