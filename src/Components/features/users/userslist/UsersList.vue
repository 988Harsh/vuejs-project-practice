<template>
  <v-container>
    <v-row>
      <router-link tag="v-col" :to="{name:'userAdd',params:{isEditing:false}}">
        <v-btn class="mx-2" dark color="indigo">
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
      </router-link>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Name</th>
                <th class="text-left">Age</th>
                <th class="text-left">Email</th>
                <th class="text-left">Edit</th>
                <th class="text-left">Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in users" :key="user._id">
                <td>{{ user.name }}</td>
                <td>{{ user.age }}</td>
                <td>{{ user.email }}</td>
                <td>
                  <v-btn @click="editUser(user._id)">
                    <v-icon left>mdi-pencil</v-icon>
                  </v-btn>
                </td>
                <td>
                  <v-btn @click="deleteUser(user._id)" class="mx-2" color="cyan">
                    <v-icon dark>mdi-delete</v-icon>
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <div class="text-center">
          <v-pagination
            v-if="pages>1"
            v-model="page"
            :length="pages"
            @input.prevent="next"
            :total-visible="7"
            prev-icon="mdi-menu-left"
            next-icon="mdi-menu-right"
          ></v-pagination>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { deleteUser, getUser } from "../services/user.service";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      pager: {},
      pageOfItems: [],
    };
  },
  computed: {
    users: {
      get() {
        return this.$store.state.users;
      },
      set() {
        this.$store.dispatch("loadUsers", { page: pagination.page });
      },
    },
    count: {
      get() {
        return this.$store.state.itemCount;
      },
      set(val) {
        this.$store.dispatch("loadUsers", { page: pagination.page });
      },
    },
    page: {
      get() {
        return this.$route.params.page ? parseInt(this.$route.params.page) : 1;
      },
      set(val) {
        val = val === 0 ? 1 : val;
        this.$store.dispatch("loadUsers", { page: val });
      },
    },
    pages: {
      get() {
        return Math.ceil(this.count / 3);
      },
    },
  },

  async created() {
    this.$store.dispatch("loadUsers", { page: this.$route.params.page });
  },

  methods: {
    async editUser(_id) {
      await this.$store.dispatch("fetchUser", { _id });
      this.$router.push({
        name: "userEdit",
        params: { _id: _id, isEditing: true },
      });
    },

    async deleteUser(_id) {
      const res = await deleteUser(_id);
      this.$store.dispatch("loadUsers", { page: this.page });
    },

    next() {
      this.$store.dispatch("loadUsers", { page: this.page });
    },
  },
};
</script>

<style scoped>
</style>