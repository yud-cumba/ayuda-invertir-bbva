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
      <v-select
        class="mt-2 mb-0 py-1 rounded-lg text"
        :items="items"
        :value="items[0]"
        color="indigo darken-2"
        solo
        dense
        outlined
      ></v-select>
      <v-text-field
        class="my-1 py-0 rounded-lg text"
        label="Solo"
        placeholder="Placeholder"
        color="indigo"
        solo
        dense
        outlined
        prepend-inner-icon="mdi-magnify"
      ></v-text-field>
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
    header: ['Coins', 'Noticias'],
    items: ['Todos', 'Fondos', 'Criptos', 'Fondos', 'Acciones'],
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
