<template>
    <v-container>
      <v-row dense>
        <v-col
          v-for="(item, i) in items"
          :key="i"
          cols="12"
        >
          <v-card
            class="mx-auto rounded-lg card ma-1" max-width="325"
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="text-card"
                  v-text="item.title"
                ></v-card-title>

                <v-card-subtitle v-text="item.artist" class="text-footer"></v-card-subtitle>
              </div>

              <v-avatar
                class="ma-5"
                size="68"
                tile
              >
                <v-img cover :src="`${require(`@/assets/${item.img}.png`)}`"></v-img>
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
        img: 'notice1',
        title: 'Solana ha crecido 40% en los últimos dos días a pesar de la amenaza de piratas informáticos.',
        artist: 'DeFi - Ahora',
      },
      {
        img: 'notice2',
        title: 'Este 18 de Octubre: Grandes noticias sobre Bitcoin, criptomonedas e inversiones.',
        artist: 'Decrypt - hace 37 min',
      },
      {
        img: 'notice3',
        title: 'Vienen reglas más estrictas para Bitcoin y otras criptomonedas. Esto es lo que debes saber.',
        artist: 'Crpto Law - hace 37 min',
      },
      {
        img: 'notice4',
        title: 'El contrato de participación de Ethereum 2.0 ahora tiene la mayor cantidad de éter.',
        artist: 'Decrypt - hace 37 min',
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
  color: #0B1724
}
.card {
  border: 2px solid #3771B2;
}
.text-footer {
  font-family: Euclid Circular A;
font-style: normal;
font-weight: normal;
font-size: 10px;
line-height: 13px;
/* identical to box height */
color: #0B1724;

}

</style>
