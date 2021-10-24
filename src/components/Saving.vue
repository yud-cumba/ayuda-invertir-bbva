<template>
    <div  class="d-flex flex-column align-center justify-center">
        <v-img width="200" src="@/assets/saving.jpeg"></v-img>
        <span class="text-center mt-2">Tus ahorros son:</span>
        <h1 class="text-center">${{ammount}}</h1>
    </div>
</template>

<script>
export default {
  data: () => ({
    ammount: 12785.00,
  }),
};
</script>

<style lang="scss" scoped>

</style>
