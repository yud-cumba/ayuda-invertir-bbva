<template>
  <div>
  <CardLearn/>
  <v-tabs
      v-model="tab"
      class="mt-4 rounded-lg"
      background-color="primary"
      dark
      grow
    >
      <v-tab
        v-for="item in header"
        :key="item"
      >
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
      >
      <Tops class="mt-2"/>
      </v-tab-item>
      <v-tab-item
      > <News/>
      </v-tab-item>
    </v-tabs-items>
    </div>
</template>

<script>
import CardLearn from '@/components/CardLearn.vue';
import Tops from './Tops.vue';
import News from './News.vue';

export default {
  name: 'NewsTops',
  created() {
    this.$store.commit('SET_LAYOUT', 'main-layout');
  },
  data: () => ({
    tab: null,
    header: ['Top productos', 'Noticias'],
  }),
  components: {
    CardLearn,
    Tops,
    News,
  },
};
</script>

<style lang="scss" scoped>
.text {
  height: 50px;
}
</style>
