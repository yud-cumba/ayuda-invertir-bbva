<template>
    <div>
       <v-row class="d-flex mx-1 mt-1 mb-0 pa-0">
         <v-col><h1 class="text-top mx-2">Top Noticias</h1></v-col>
        </v-row>
         <CardNews />
    </div>
</template>

<script>
import CardNews from '@/components/CardNews.vue';

export default {
  name: 'News',
  created() {
    this.$store.commit('SET_LAYOUT', 'main-layout');
  },
  components: {
    CardNews,
  },
};
</script>

<style lang="scss" scoped>
.text-top {
font-family: 'Euclid Circular A';
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 20px;
color: #0B1724;
}
</style>
