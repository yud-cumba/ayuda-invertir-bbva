<template>
  <div class="d-flex flex-column align-center justify-center">
    <v-img width="200" src="@/assets/saving.jpeg"></v-img>
    <span class="text-center mt-2">Tus ahorros son:</span>
    <h1 class="text-center">$12,785</h1>
    <p class="mx-2 text-center font-weight-bold">Te contamos de nuestros tipos de inversiones</p>
    <div class="container">
      <v-card v-for="type in types" :key="type.title"
      width="200" class="elevation-0 mx-3 d-flex flex-column align-center justify-center" height="200">
      <h5>{{type.title}}</h5>
        <v-img width="130" max-height="130" src="@/assets/saving.jpeg" class="rounded-lg"></v-img>
        <h5>Tu ahorro: {{type.save}}</h5>
        <h5 class="teal--text"> Ganancias: {{type.gain}}</h5>
        <h5> Tiempo {{type.time}} meses</h5>
      </v-card>
    </div>
<Previous/>
  </div>
</template>

<script>
import Previous from './Previous.vue';

export default {
  created() {
    this.$store.commit('SET_LAYOUT', 'main-layout');
  },
  data: () => ({
    types: [
      {
        title: 'Conservador',
        img: '',
        save: 12000,
        gain: 789.6,
        time: 3,
      },
      {
        title: 'Moderado',
        img: '',
        save: 12000,
        gain: 789.6,
        time: 3,
      },
      {
        title: 'Avanzado',
        img: '',
        save: 12000,
        gain: 789.6,
        time: 3,
      },
    ],
  }),
  components: {
    Previous,
  },
};
</script>

<style lang="scss" scoped>
.labels{
}
.container {
    display: flex;
    overflow-x: auto;
}
.container::-webkit-scrollbar {
    display: none;
}
</style>
