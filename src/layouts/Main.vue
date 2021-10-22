<template>
  <div id="app">
    <v-app id="inspire">
      <v-card class="mx-auto overflow-hidden" height="100%" width="100%">
        <v-app-bar height="60" color="white" prominent>
          <v-btn class="caption secondary--text" icon>
            <v-icon>mdi-chevron-left</v-icon><small>atrás</small>
          </v-btn>
          <v-spacer></v-spacer>
          <h6 class="mt-3 font-weight-regular">Titulo</h6>
          <v-spacer></v-spacer>
          <v-app-bar-nav-icon class="secondary--text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" absolute right temporary>
          <v-list nav dense>
            <v-list-item-group
              v-model="group"
              active-class="deep-purple--text text--accent-4"
            >
              <v-list-item>
                <v-list-item-title>Foo</v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>Bar</v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>Fizz</v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>Buzz</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-card>
    </v-app>
  </div>
</template>
<script>
export default {
  data() {
    return {
      drawer: false,
      group: null,
    }
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
