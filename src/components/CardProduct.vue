 <template>
  <v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
        <v-list-item-avatar
        tile
        size="80"
        color="grey"
      ></v-list-item-avatar>
      <v-list-item-content>
        <div class="text-overline mb-4">
          {{product.name}}
        </div>
        <v-list-item-title class="text-h5 mb-1">
          Headline 5
        </v-list-item-title>
        <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
