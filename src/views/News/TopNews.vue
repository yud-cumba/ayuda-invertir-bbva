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
  data: () => ({
  }),
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
