<template>
  <div class="d-flex flex-column align-center justify-center">
    <v-img width="200" src="@/assets/saving.jpeg"></v-img>
    <span class="text-center mt-2">Tus ahorros son:</span>
    <h1 class="text-center">$12,785</h1>
    <p class="mx-2 text-center font-weight-bold">Te contamos de nuestros tipos de inversiones</p>
    <div class="container">
      <v-card
        flat
       class="flat mx-2 d-flex flex-column align-center justify-center" height="200" width="300"
      >
      <br><br><br><br><br>
        <h5>Tu Ahorro</h5>
        <h5>Ganancia</h5>
        <h5>Tiempo</h5>
     </v-card>
      <v-card v-for="type in types" :key="type.title"
      width="150" class="elevation-0 mx-4 d-flex flex-column align-center justify-center" height="200">
      <h4>{{type.title}}</h4>
        <v-img width="100" max-height="100" src="@/assets/conservative-profile.png" class="rounded-lg"></v-img>
        <h4>{{type.save}}</h4>
        <h4 class="teal--text">{{type.gain}}</h4>
        <h4> {{type.time}} meses</h4>
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
        src: '@/assets/conservative-profile.png',
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
.container {
    display: flex;
    overflow-x: auto;
}
.container::-webkit-scrollbar {
    display: none;
}
</style>
