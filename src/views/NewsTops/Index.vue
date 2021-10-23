<template>
    <div>
        <CardLearn/>
        <Tops/>
        <News/>
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
  components: {
    CardLearn,
    Tops,
    News,
  },
};
</script>

<style lang="scss" scoped>

</style>
