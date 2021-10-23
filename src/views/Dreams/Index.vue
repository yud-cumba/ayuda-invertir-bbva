<template>
    <div>
        <CardLearn/>
    </div>
</template>

<script>
import CardLearn from '@/components/CardLearn.vue';

export default {
  components: { CardLearn },
  created() {
    this.$store.commit('SET_LAYOUT', 'main-layout');
  },
};
</script>

<style lang="scss" scoped>

</style>
