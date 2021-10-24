 <template>
  <v-card
    class="mx-auto rounded-lg py-5"
    max-width="100%"
    height="75px"
  >
    <v-list-item three-line>
      <v-checkbox
        v-model="checkbox"
        dense
      ></v-checkbox>
      <v-list-item-avatar
        class="mt-5"
        tile
        size="30"
      >
      <v-img :src="require(`@/assets/icons/${product.img}.svg`)"></v-img>
      </v-list-item-avatar>
      <v-list-item-content class="text mt-2 px-3">
        <p class="secondary--text font-weight-bold my-0 py-0">
          {{product.name}}
        </p>
        <div class="my-0 py-0">
          <small class="secondary--text my-0 py-0">{{product.description}}</small>
          <small
            :class="[product.profit < 0 ? 'red--text' : 'teal--text', 'secondary--text my-0 py-0 mx-2']"
          >{{product.profit}}%</small>
        </div>
      </v-list-item-content>
      <v-btn @click="$router.push({ name: 'PortfolioSaving' });" class="mb-2"  color="secondary">Ver</v-btn>
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
  data() {
    return {
      checkbox: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.text {
  height: 60px !important;
}
</style>
