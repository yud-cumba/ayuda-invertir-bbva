<template>
         <v-bottom-navigation
        app
        value="value"
        height="50"
        class="d-flex justify-space-around align-center"
      >
        <v-row class="d-flex">
          <v-col
            v-for="(view, index) in views"
            :key="view.title"
            color="white"
            class="text-center d-flex flex-column justify-center align-center"
            @click="
            selected = index,
              $router.push(view.name)
            "
          >
            <v-icon class="icon rounded-circle pa-2" color="secondary">{{
              view.icon
            }}</v-icon>
          </v-col>
        </v-row>
      </v-bottom-navigation>
</template>

<script>
export default {
  data: () => ({
    value: 1,
    views: [
      {
        icon: 'mdi-home',
        name: '/BBVAHome',
      },
      {
        icon: 'mdi-piggy-bank',
        name: '/ahorros',
      },
      {
        icon: 'mdi-plus-circle',
        name: '/add',
      },
      {
        icon: 'mdi-bullhorn',
        name: '/notifications',
      },
      {
        icon: 'mdi-star-circle',
        name: '/favorites',
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>

</style>
