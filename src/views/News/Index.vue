<template>
    <div>
        <CardLearn/>
        <TopsNews/>
    </div>
</template>

<script>
import CardLearn from '@/components/CardLearn.vue';
import TopsNews from './TopNews.vue';

export default {
  name: 'News',
  created() {
    this.$store.commit('SET_LAYOUT', 'main-layout');
  },
  components: {
    CardLearn,
    TopsNews,
  },
};
</script>

<style lang="scss" scoped>

</style>
