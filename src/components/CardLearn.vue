<template>
          <v-card
            class="primary white--text pa-2 rounded-lg card"
          >
            <v-card-title class="white--text ma-0 py-0 px-3">
              {{title}}
            </v-card-title>

            <v-card-subtitle class="white--text ma-0 py-0 px-3">
             {{detail}}</v-card-subtitle>

            <v-card-actions>
              <v-btn  class="secondary text-capitalize rounded-lg" width="130"
            dark
            @click="$router.push({ name: 'Copiers' });"
                small>{{btnText}}</v-btn>
            </v-card-actions>
          </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Aprender de los expertos',
    },
    detail: {
      type: String,
      default: 'En BBVA aprendemos y crecemos contigo ven a conocer con nosotros.',
    },
    btnText: {
      type: String,
      default: 'Conocer',
    },
    action: {
      type: Function,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  border: 2px solid #3771B2;
}
</style>
