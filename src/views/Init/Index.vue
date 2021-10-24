<template>
    <div>
        <CardLearn/>
        <v-col class="d-flex flex-column justify-center align-center">
            <v-img :src="require(`@/assets/img/${items[selected].img}.png`)" class="mt-10"/>
            <p class="px-7 mt-5 text-center ">
                {{items[selected].text}}
                </p>
                <v-row class="mt-2 mb-6">
                    <v-btn v-for="(item, i) in items" :key="item.img" fab :class="`${i === selected ? 'secondary' : 'grey'} mx-1`"
                    @click="selected = i">
                    </v-btn>
                </v-row>
            <v-btn  class="secondary pa-4 white text-capitalize rounded-lg"
            dark
            @click="$router.push({ name: 'Dreams'})"
                small>Sueños cumplidos</v-btn>
                <v-btn text color="grey" class="mt-2 text-caption text-capitalize">Ver acciones de Inverisón</v-btn>
        </v-col>
    </div>
</template>

<script>
import CardLearn from '../../components/CardLearn.vue';

export default {
  created() {
    this.$store.commit('SET_LAYOUT', 'main-layout');
  },
  data: () => ({
    selected: 0,
    items: [
      {
        img: 'goal',
        text: 'Omaira, sabias que otros clientes han logrado sus vacaciones soñadas invirtiendo su dinero.',
      },
      {
        img: 'goal1',
        text: 'Omaira, sabias que otros clientes han logrado construir sus viviendas invirtiendo su dinero.',
      },
      {
        img: 'goal2',
        text: 'Omaira, ¿Estás lista para tu próximo viaje?, invirtiendo con nosotros el momento llegará mas rapido de lo que crees',
      },
    ],
  }),
  components: { CardLearn },

};
</script>

<style lang="scss" scoped>
.v-image{
    width: 60vw;
    height: 60vw;
}
.v-btn--fab{
    width: 17px;
    height: 17px;
}
</style>
