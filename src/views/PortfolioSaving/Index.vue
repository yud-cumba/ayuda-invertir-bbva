<template>
  <div>
    <Saving />
    <v-row class=" d-flex text-center align-center my-5">
      <v-col>
        <h5>Tú ganancia será</h5>
        <h5>Periodo de tiempo</h5>
      </v-col>
      <v-col>
        <h5 class="teal--text">€ 230</h5>
        <small>3 meses</small>
      </v-col>
    </v-row>
    <v-row class="mx-1" v-for="i in 5" :key="i">
    <v-card
      class="mx-auto rounded-lg pa-0 my-2"
      min-width="100%"
      height="70px"
  >
    <v-list-item>
      <v-list-item-avatar
        class="mt-"
        tile
        size="35"
      >
      <v-img src="@/assets/logo-bbva.jpg"></v-img>
      </v-list-item-avatar>
      <v-list-item-content class="text my-1 py-1">
      <v-row class="d-flex text-center align-center my-0 py-1">
        <v-col class="py-0 my-0">
          <h5 class="caption secondary--text">Fondos mutuos</h5>
          <small class="grey--text">{{i+2}} meses</small>
        </v-col>
        <v-col class="py-0 my-0">
          <small class="caption">% de ganancia</small>
          <h5 class="teal--text">{{i}}.25%</h5>
        </v-col>
    </v-row>
      </v-list-item-content>
    </v-list-item>
    </v-card>
    </v-row>
      <v-row class="d-flex justify-center my-8">
    <v-btn
      color="secondary"
      width="82%"
      @click="
      $router.push({
        name: '',
      })"
      >
      Invertir ahora
    </v-btn>
  </v-row>
  </div>
</template>

<script>
import Saving from '@/components/Saving.vue';

export default {
  components: {
    Saving,
  },
  created() {
    this.$store.commit('SET_LAYOUT', 'main-layout');
  },
};
</script>

<style lang="scss" scoped>

</style>
