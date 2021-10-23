 <template>
  <v-card
    class="mx-auto rounded-lg"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
        <v-list-item-avatar
        tile
        size="30"
      >
      <v-img :src="require(`@/assets/icons/${product.img}.svg`)"></v-img>
      </v-list-item-avatar>
      <v-list-item-content>
        <div class="secondary--text font-weight-bold">
          {{product.name}}
        </div>
        <v-list-item-subtitle class="secondary--text">{{product.description}}</v-list-item-subtitle>
      </v-list-item-content>
      <v-btn color="secondary pa-4"> BUY</v-btn>
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
