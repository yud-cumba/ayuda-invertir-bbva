<template>
  <div>
    <v-col class="mx-0 px-0" v-for="copybanker in copybankers" :key="copybanker.copy_bankingId">
      <CardCopiersDetails :copier="copybanker" />
    </v-col>
  </div>
</template>

<script>
import CardCopiersDetails from './CardCopiersDetails.vue';
import copybankers from '@/mocks/copy_banking.json';

export default {
  data() {
    return {
      copybankers,
    };
  },
  components: {
    CardCopiersDetails,
  },
};
</script>

<style lang="scss" scoped></style>
