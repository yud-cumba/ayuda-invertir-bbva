<template>
  <div id="app">
    <v-app id="inspire">
      <v-card class="mx-auto overflow-hidden" height="100%" width="100%">
        <NavBarBBVA/>
        <v-container class="pa-0" fluid>
          <router-view></router-view>
        </v-container>
        <BottomNav />
      </v-card>
    </v-app>
  </div>
</template>
<script>
import NavBarBBVA from '@/components/NavBBVA.vue';
import BottomNav from '../components/BottomNav.vue';

export default {
  components: { NavBarBBVA, BottomNav },
};
</script>
