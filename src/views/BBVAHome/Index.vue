<template>
    <div>
        <Resume/>
    </div>
</template>

<script>
import Resume from './Resume.vue';

export default {
  components: { Resume },
  created() {
    this.$store.commit('SET_LAYOUT', 'bbva-layout');
  },
};
</script>

<style lang="scss" scoped>

</style>
