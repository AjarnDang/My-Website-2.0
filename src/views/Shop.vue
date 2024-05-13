<template>
  <v-container class="my-16">
    <h2 class="mb-0">Products</h2>
    <p class="mb-10">The best assets for you</p>

    <div>
      <v-carousel v-model="model" hide-delimiters>
        <v-carousel-item v-for="(color, i) in colors" :key="color">
          <v-sheet :color="color" height="100%" tile>
            <v-row class="fill-height rounded" align="end" justify="center">
              <div class="text-h2 p-5">Featured Product {{ i + 1 }}</div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </div>

  </v-container>
</template>

<script>
export default {
    data () {
      return {
        colors: [
          'primary',
          'secondary',
          'yellow darken-2',
          'red',
          'orange',
        ],
        model: 0,
      }
    },
};
</script>

<style></style>
