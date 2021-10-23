<template>
    <div>
       <v-row class="d-flex justify-space-around py-4">
          <h1 class="text-top">Top Noticias</h1>
           <!-- <v-img src="../../assets/icon-upgrade.svg" width="10px" alt="icon-upgrade" /> -->
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
color: black;
}
</style>
