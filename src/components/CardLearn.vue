<template>
          <v-card
            class="primary white--text pa-2 rounded-lg "
          >
            <v-card-title class="white--text ma-0 py-0 px-3">
              Aprender de los expertos
            </v-card-title>

            <v-card-subtitle class="white--text ma-0 py-0 px-3">
              En BBVA aprendemos y crecemos contigo ven a conocer con nosotros</v-card-subtitle>

            <v-card-actions>
              <v-btn  class="secondary text-capitalize" width="200"
            dark
            @click="$router.push({ name: 'Dreams'})"
                small>Conocer</v-btn>
            </v-card-actions>
          </v-card>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>

</style>
