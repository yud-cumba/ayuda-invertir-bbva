<template>
  <div>
    <v-app-bar height="60" color="white" class="pa-0 elevation-0" prominent>
      <v-btn @click="$router.go(-1)" class="caption secondary--text ml-1" icon>
        <v-icon>mdi-chevron-left</v-icon><small>atrás</small>
      </v-btn>
      <v-spacer></v-spacer>
      <h6 class="mt-3 font-weight-regular">BBVA</h6>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon
        class="primary--text"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer light v-model="drawer" absolute right temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="blue--text text--blue"
        >
          <v-list-item to="/profile">
            <v-list-item-title>Ir por mis sueños <v-icon>mdi-party-popper</v-icon></v-list-item-title>
          </v-list-item>

          <v-list-item to="/copiers">
            <v-list-item-title >Copy Investor</v-list-item-title>
          </v-list-item>

          <v-list-item to="/portfolio">
            <v-list-item-title>Inversión Automica</v-list-item-title>
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

<style lang="scss" scoped></style>
