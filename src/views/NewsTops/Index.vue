<template>
    <div>
        <CardWithButton/>
        NEWS
    </div>
</template>

<script>
import CardWithButton from '@/components/CardWithButton.vue';

export default {
  name: 'NewsTops',
  created() {
    this.$store.commit('SET_LAYOUT', 'main-layout');
  },
  components: {
    CardWithButton,
  },
};
</script>

<style lang="scss" scoped>

</style>
