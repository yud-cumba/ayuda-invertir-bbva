<template>
  <div>
    <v-app-bar height="60" color= "#072146" class="fondo pa-0 elevation-0" prominent fixed>
      <v-btn @click="$router.go(-1)" class="caption white--text ml-1" icon>
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <h6 class="mt-3 font-weight-regular white--text">Mi Día a día</h6>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon
        class="white--text"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute right temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="primary--text text--white"
        >
          <v-list-item to="/profile" class="primary--text">
            <v-list-item-title class="primary--text">Ir por mis sueños <v-icon>mdi-party-popper</v-icon></v-list-item-title>
          </v-list-item>

          <v-list-item to="/copiers">
            <v-list-item-title >Copy Investor</v-list-item-title>
          </v-list-item>

          <v-list-item to="/portfolio">
            <v-list-item-title>Inversión Automática</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
  }),
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.fondo {
  background-color: #004481;
}
</style>
