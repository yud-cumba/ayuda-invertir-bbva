<template>
  <div>
    <v-img width="300px" src="../../assets/saving.jpeg"></v-img>
    <span>Tus ahorros son:</span>
    <h1>$12,785</h1>
    <template>
      <v-tab-item>
        <v-card>
          <v-toolbar flat color="primary" dark>
            <v-toolbar-title>Te contamos de nuestros tipos de inversiones</v-toolbar-title>
          </v-toolbar>
          <v-tabs vertical>
            <v-tab>
              Conservador
            </v-tab>
            <v-tab>
              Moderado
            </v-tab>
            <v-tab>
              Avanzado
            </v-tab>
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <template>
                    <v-card class="mx-auto my-12" max-width="300">
                      <v-img
                        height="250"
                        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                      ></v-img>
                      <v-card-text>
                        <v-row align="center" class="mx-0">
                          <div class="my-4 text-subtitle-1">
                            Tu ahorro
                            <span>12000</span>
                          </div>
                          <div class="grey--text ms-4">
                            Ganancia
                            <span>789.6</span>
                          </div>
                        </v-row>

                        <div class="my-4 text-subtitle-1">
                          Tiempo
                          <span>3 meses</span>
                        </div>
                      </v-card-text>
                    </v-card>
                  </template>
                                  </v-card-text></v-card
              ></v-tab-item
            ></v-tabs
          ></v-card
        ></v-tab-item
      ></template
    >
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.text-card{
  position: absolute;
    width: 300px;
    height: 18px;
    left: 37px;
    top: 374px;
    font-family: "Euclid Circular A";
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
}
</style>
