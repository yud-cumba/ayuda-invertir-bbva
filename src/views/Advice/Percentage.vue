<template>
    <div>
<v-range-slider
    class="ml-3"
    v-model="range"
            :max="max"
            :min="min"
            hide-details
>
     <template v-slot:append>
              <p class="range-p ">{{`${range[1]} %`}}</p>
            </template>
            </v-range-slider>
             <p class="text-center text">€{{percentage}}.00</p>
    </div>
</template>

<script>
export default {
  data() {
    return {
      min: 0,
      max: 50,
      range: [0, 50],
      ammount: 12785,
    };
  },
  computed: {
    percentage() {
      return Math.round(this.ammount * this.range[1] * 0.01);
    },
  },
};
</script>

<style lang="scss" scoped>
.range-p{
    width: 50px;
}
.text {
  font-family: 'Euclid Circular A';
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
  color: #1C1939;
}
</style>
