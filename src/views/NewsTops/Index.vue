<template>
    <div>
        <CardWithButton/>
        <Tops/>
    </div>
</template>

<script>
import CardWithButton from '@/components/CardWithButton.vue';
import Tops from './Tops.vue';

export default {
  name: 'NewsTops',
  created() {
    this.$store.commit('SET_LAYOUT', 'main-layout');
  },
  components: {
    CardWithButton,
    Tops,
  },
};
</script>

<style lang="scss" scoped>

</style>
