<template>
  <div class="d-flex flex-column align-center justify-center">
    <Saving/>
    <p class="mx-2 text-center font-weight-bold">Te contamos de nuestros tipos de inversiones</p>
    <div class="container">
      <v-card
        flat
       class="flat mx-2 d-flex flex-column align-center justify-center" height="200" width="300"
      >
      <br><br><br><br><br>
        <small>Ahorro</small>
        <small>Ganancia</small>
        <small>Tiempo</small>
     </v-card>
      <v-card v-for="type in types" :key="type.title"
      width="150" class="elevation-0 mx-4 d-flex flex-column align-center justify-center" height="200">
      <h4>{{type.title}}</h4>
        <v-img width="80" max-height="80" :src="require(`@/assets/${type.img}.png`)" class="rounded-lg"></v-img>
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
import Saving from '@/components/Saving.vue';

export default {
  created() {
    this.$store.commit('SET_LAYOUT', 'main-layout');
  },
  data: () => ({
    types: [
      {
        title: 'Conservador',
        img: 'profile-conservative',
        save: 12000,
        gain: 789.6,
        time: 3,
      },
      {
        title: 'Moderado',
        img: 'profile-moderate',
        save: 12000,
        gain: 789.6,
        time: 3,
      },
      {
        title: 'Avanzado',
        img: 'profile-advance',
        save: 12000,
        gain: 789.6,
        time: 3,
      },
    ],
  }),
  components: {
    Previous,
    Saving,
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
