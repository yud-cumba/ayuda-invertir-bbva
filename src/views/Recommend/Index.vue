<template>
  <div>
    <CardLearn />
    <v-row class="d-flex text-center justify-center">
      <v-avatar
        class="mx-5 mt-5"
        size="200"
        tile
      >
      <v-img  src="../../assets/img/recommend.png"></v-img>
      </v-avatar>
    </v-row>
    <v-row class="d-flex text-center justify-center mx-6">
      <h3>Para minimizar tus riegos te recomendamos a los Copy Investor</h3>
    </v-row>
    <v-row class="d-flex my-5 text-center font-weight-thin justify-center mx-6">
      <h5>Ellos son los mejores inversionistas que generan grandes ganancias</h5>
    </v-row>
     <v-row class="d-flex my-10 text-center font-weight-thin justify-center mx-6">
       <v-btn @click="$router.push({ name: 'Copiers'})" class="my-10" color="secondary">Ver</v-btn>
    </v-row>
</div>
</template>

<script>
import CardLearn from "@/components/CardLearn.vue";

export default {
  components: { CardLearn },
  created() {
    this.$store.commit("SET_LAYOUT", "main-layout");
  },
};
</script>

<style lang="scss" scoped></style>
