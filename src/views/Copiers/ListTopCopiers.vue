<template>
  <div class="mt-5 mx-0 px-0 container">
    <v-col class="mr-3 px-0 py-1 px-0" v-for="copybanker in copybankers.slice(0, 4)" :key="copybanker.userId">
      <CardTopCopier :copier="copybanker" />
    </v-col>
  </div>
</template>

<script>
import CardTopCopier from '@/components/CardTopCopier.vue';
import copybankers from '@/mocks/copy_banking.json';

export default {
  data() {
    return {
      copybankers,
    };
  },
  components: {
    CardTopCopier,
  },
};
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    overflow-x: auto;
}
.container::-webkit-scrollbar {
    display: none;
}
</style>
