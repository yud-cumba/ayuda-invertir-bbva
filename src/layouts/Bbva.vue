<template>
  <div id="app">
    <v-app id="inspire">
      <v-main >
        <NavBarBbvaBbva/>
        <div>
            <router-view></router-view>
        </div>
    </v-main>
    </v-app>
  </div>
</template>

<script>
import NavBarBbvaBbva from '@/components/NavBarBbva.vue';

export default {
  components: { NavBarBbvaBbva },
};
</script>
