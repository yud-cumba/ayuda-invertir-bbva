<template>
    <div class="fondo view d-flex flex-column align-center">
        <v-row class="justify-center my-1">
            <v-img src="https://www.bbva.pe/content/dam/public-web/global/images/logos/logo_bbva_blanco.svg"
            class="mt-7"
            max-width="70" max-height="20">
            </v-img>
        </v-row>
            <v-col
      >
     <v-text-field label="NIF, NIE, ID Card or Passport"
     dark
            filled
            dense>
        </v-text-field>
        <v-text-field label="Contraseña"
        dark
            filled
            dense>
        </v-text-field>
        <v-row class="justify-end">
             <v-btn text color="white" class="text-capitalize"> Olvidaste tu contraseña?</v-btn>

        </v-row>
            </v-col>
            <v-col class="d-flex flex-column align-center ">
             <v-btn outlined color="white" width="200" class="py-2 text-capitalize" @click="login"> Iniciar sesión</v-btn>
            <v-btn outlined color="white" width="200" class=" py-2 mt-3 text-capitalize"> Crear contraseña</v-btn>
             <v-btn text color="white" class="px-9 py-2 mt-3 text-capitalize"> Volverse usuario</v-btn>
            </v-col>
    </div>
</template>

<script>
export default {
  created() {
    this.$store.commit('SET_LAYOUT', 'login-layout');
  },
  methods: {
    login() {
      this.$router.push({
        name: 'BBVAHome',
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.view{
    width: 100vw;
    height:100%;
}
.fondo {
  background-color: #004481;
}
/* .v-col{
    height: 70vh;
} */
</style>
