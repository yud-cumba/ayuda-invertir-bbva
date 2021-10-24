<template>
  <div class="my-8">
    <v-row class="d-flex flex-wrap justify-center">
    <CardSection v-for="section in sections" :section="section" :key="section.title"/>
     </v-row>
</div>
</template>

<script>
import CardSection from './CardSection.vue';

export default {
  components: { CardSection },
  created() {
    this.$store.commit('SET_LAYOUT', 'main-layout');
  },
  data: () => ({
    sections: [
      {
        title: 'Te recomendamos a los Copy Investor',
        description: 'Ellos son los mejores inversionistas que generan grandes ganancias',
        img: 'recommend',
        go: 'Copiers',
      },
      {
        title: 'Inversión Automática',
        description: 'Minimizamos tus riesgos y te aseguramos ganancías, programa tus inversiones y olvidate de lo demas',
        img: 'auto',
        go: 'Loading',
      },
    ],
  }),
};
</script>

<style lang="scss" scoped></style>
