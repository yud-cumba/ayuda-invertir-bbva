<template>
    <div>
        <CardLearn/>
        <v-col>
            <CardDream v-for="dream in dreams" :dream="dream" :key="dream.id"/>
        </v-col>
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
        detail: 'Cumplí mi sueño invirtiendo en fondos mutos',
        time: 12,
      },
      {
        id: 'dream002',
        name: 'Yuditd',
        title: 'Viaje a Nueva Zelanda',
        detail: 'Cumplí mi sueño invirtiendo en fondos mutos',
        time: 12,
      },
      {
        id: 'dream003',
        name: 'Yuditd',
        title: 'Viaje a Nueva Zelanda',
        detail: 'Cumplí mi sueño invirtiendo en fondos mutos',
        time: 12,
      },
      {
        id: 'dream001',
        name: 'Yuditd',
        title: 'Viaje a Nueva Zelanda',
        detail: 'Cumplí mi sueño invirtiendo en fondos mutos',
        time: 12,
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
