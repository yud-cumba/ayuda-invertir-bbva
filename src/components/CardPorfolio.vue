 <template>
  <v-card
    class="mx-auto rounded-lg py-0"
    max-width="100%"
    height="75px"
  >
    <v-list-item three-line>
      <v-list-item-avatar
        class="mt-5"
        tile
        size="35"
      >
      <v-img src="@/assets/logo-bbva.jpg"></v-img>
      </v-list-item-avatar>
      <v-list-item-content class="text mt-2 px-3">
        <p class="secondary--text font-weight-bold my-0 py-0">
          {{product.name}}
        </p>
        <div class="my-0 py-0">
          <small class="black--text my-0 py-0">{{product.time}} meses</small>
        </div>
      </v-list-item-content>
      <v-btn class="mb-2"  color="secondary">Ver</v-btn>
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
