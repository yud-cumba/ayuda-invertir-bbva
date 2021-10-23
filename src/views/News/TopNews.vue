<template>
    <div>
      <v-row justify="space-around">
          <h4 class="my-3">Top Noticias</h4>
              <v-img src="../../assets/icon-upgrade.svg" width="30px" alt="icon-upgrade" />
        <CardNews />
      </v-row>
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
