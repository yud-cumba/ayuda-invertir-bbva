<template>
  <div id="app">
    <v-app id="inspire">
      <v-card class="mx-auto overflow-hidden" height="100%" width="100%">
        <NavBar/>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-card>
    </v-app>
  </div>
</template>
<script>
import NavBar from '../components/NavBar.vue';

export default {
  components: { NavBar },
  data() {
    return {
      drawer: false,
      group: null,
    };
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
