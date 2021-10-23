<template>
    <v-container>
      <v-row dense>
        <v-col
          v-for="(item, i) in items"
          :key="i"
          cols="12"
        >
          <v-card
            :color="item.color"
            dark
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="text-card"
                  v-text="item.title"
                ></v-card-title>

                <v-card-subtitle v-text="item.artist"></v-card-subtitle>
              </div>

              <v-avatar
                class="ma-5"
                size="68"
                tile
              >
                <v-img :src="item.src"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        color: '#ffff',
        src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
        title: 'Solana have jumped by 40% over the last two days despite increased threat of hackers.',
        artist: 'Foster the People',
      },
      {
        color: '#ffff',
        src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
        title: 'On August 18: Major stories on Bitcoin, cryptocurrency bill and investing',
        artist: 'Ellie Goulding',
      },
      {
        color: '#ffff',
        src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
        title: 'Tougher Rules Are Coming For Bitcoin And Other Crypto. Here is What To Know',
        artist: 'Foster the People',
      },
      {
        color: '#ffff',
        src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
        title: 'Ethereum 2.0 Staking Contract Now Holds the Most Ether',
        artist: 'Ellie Goulding',
        // src: '../assets/new-one.png',
        sizes: '192x192',
        type: 'image/png',
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.text-card {
  font-family: 'Euclid Circular A';
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 20px;
/* or 143% */
color: #0B1724
}

</style>
