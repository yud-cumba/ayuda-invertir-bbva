<template>
  <div class="mt-5">
    <v-col class="mx-0 px-0 py-1" v-for="copybanker in copybankers.slice(4, 9)" :key="copybanker.userId">
      <CardCopier :copier="copybanker" />
    </v-col>
  </div>
</template>

<script>
import CardCopier from '@/components/CardCopier.vue';
import copybankers from '@/mocks/copy_banking.json';

export default {
  data() {
    return {
      copybankers,
    };
  },
  components: {
    CardCopier,
  },
};
</script>

<style lang="scss" scoped></style>
