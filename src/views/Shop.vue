<template>
  <v-container class="my-16">
    <div
      id="carouselExampleAutoplaying"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="https://www.dexerto.com/cdn-image/wp-content/uploads/2024/03/02/Sovereign-2-0-bundle-VALORANT.jpg?width=3840&quality=75&format=auto"
            class="d-block w-100 carousel-image-2"
            alt="img-features"
          />
          <div class="carousel-caption d-none d-md-block">
            <h2>SOUVERIEGN 2.0</h2>
            <p>Exclusive Bunble including Phantom, Frenzy, Odin, Judge and Blade (Melee)</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://www.dexerto.com/cdn-cgi/image/width=3840,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2022/01/07/Protocol_Bundle_1920x1080.jpg"
            class="d-block w-100 carousel-image-2"
            alt="img-features"
          />
          <div class="carousel-caption d-none d-md-block">
            <h2>PROTOCOL 781-A</h2>
            <p>Exclusive Bunble including Phantom, Sheriff, Spectre, Bulldog and Melee</p>
          </div> 
        </div>
        <div class="carousel-item">
          <img
            src="https://www.lapakgaming.com/blog/id-id/wp-content/uploads/2023/12/Valorant-Overdrive.webp"
            class="d-block w-100 carousel-image-2"
            alt="img-features"
          />
          <div class="carousel-caption d-none d-md-block">
            <h2>OVERDRIVE</h2>
            <p>Exclusive Bunble including Valdal, Sheriff, Stinger, Bucky and Blade (Melee)</p>
          </div> 
        </div>
        <div class="carousel-item">
          <img
            src="https://win.gg/_next/image/?url=https%3A%2F%2Fapi.win.gg%2Fwp-content%2Fuploads%2F2023%2F10%2FF9fPwQmXgAEIpuS-1024x576.jpeg&w=1920&q=75"
            class="d-block w-100 carousel-image-2"
            alt="img-features"
          />
          <div class="carousel-caption d-none d-md-block">
            <h2>VALIANT HERO</h2>
            <p>Premium Bunble including Valdal, Ghost, Operator, Ares and Wand (Melee)</p>
          </div> 
        </div>
        <div class="carousel-item">
          <img
            src="https://www.dexerto.com/cdn-cgi/image/width=3840,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2021/04/16/Forsaken_Bundle_1920x1080.jpeg"
            class="d-block w-100 carousel-image-2"
            alt="img-features"
          />
          <div class="carousel-caption d-none d-md-block">
            <h2>Forsaken</h2>
            <p>Premium Bunble including Valdal, Classic, Operator, Spectre and Dagger (Melee)</p>
          </div> 
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <h2 class="mb-0 mt-10">New Arrivals</h2>
    <p class="mb-10">The best assets for you</p>

  </v-container>
</template>

<script>
export default {
  data() {
    return {
      colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
      model: 0,
    };
  },
};
</script>

<style>
.carousel {
  border-radius: 1rem !important;
}
</style>
