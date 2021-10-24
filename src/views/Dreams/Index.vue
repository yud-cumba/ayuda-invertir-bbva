<template>
    <div>
        <CardLearn/>
         <v-row class="justify-center my-3">
        <v-col>
            <CardDream v-for="dream in dreams" :dream="dream" :key="dream.id"/>
        </v-col>
        <v-btn  class="secondary pa-5 white text-capitalize rounded-lg"
            dark
            @click="$router.push({ name: 'Profile'})"
                small>Ir por mis sueños <v-icon>mdi-party-popper</v-icon></v-btn>
        </v-row>
    </div>
</template>

<script>
import CardLearn from '@/components/CardLearn.vue';
import CardDream from './CardDream.vue';

export default {
  components: { CardLearn, CardDream },
  data: () => ({
    dreams: [
      {
        id: 'dream001',
        name: 'Yuditd',
        title: 'Viaje a Nueva Zelanda',
        detail: '“Cumplí mi sueño invirtiendo en fondos mutos”',
        time: 12,
        img: 'travel',
      },
      {
        id: 'dream002',
        name: 'Juan',
        title: 'Ayude a contruir mi casa',
        detail: '“Uno de mis sueños siempre fue ayudar a mis padres no hay nada que me haga más feliz ”',
        time: 24,
        img: 'house',
      },
      {
        id: 'dream003',
        name: 'Cristian',
        title: 'Vacaciones',
        detail: '“No me preocupo por organizar mis vacaciones es como si se programaran solas ”',
        time: 12,
        img: 'happy',
      },
      {
        id: 'dream001',
        name: 'Sandra',
        title: 'Mi crecimiento profesional',
        detail: '“Mi maestria está pagada gracias a las inversiones”',
        time: 12,
        img: 'profesional',
      },
    ],
  }),
  created() {
    this.$store.commit('SET_LAYOUT', 'main-layout');
  },
};
</script>

<style lang="scss" scoped>

</style>
