<template>
    <div>
        <v-col>
          <h1 class="text-top">Top Noticias</h1>
          <v-img src="../../assets/icon-upgrade.svg" width="50px" alt="icon-upgrade" />
        <CardNews />
      </v-col>
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

</style>
