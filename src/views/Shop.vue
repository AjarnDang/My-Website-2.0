<template>
  <div>
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
              <p>
                Exclusive Bunble including Phantom, Frenzy, Odin, Judge and
                Blade (Melee)
              </p>
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
              <p>
                Exclusive Bunble including Phantom, Sheriff, Spectre, Bulldog
                and Melee
              </p>
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
              <p>
                Exclusive Bunble including Valdal, Sheriff, Stinger, Bucky and
                Blade (Melee)
              </p>
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
              <p>
                Premium Bunble including Valdal, Ghost, Operator, Ares and Wand
                (Melee)
              </p>
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
              <p>
                Premium Bunble including Valdal, Classic, Operator, Spectre and
                Dagger (Melee)
              </p>
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

      <div class="d-flex justify-content-center my-16">
        <!-- <v-sheet class="my-5 bg-transparent shadow-none">
          <v-chip-group> -->
        <a
          v-for="tag in tags"
          :key="tag"
          :href="tag.tagLink"
          class="weapons text-center mx-2 px-5"
        >
          <v-img :src="tag.tagImage" width="200" height="auto"></v-img>
          {{ tag.tagName }}
        </a>
        <!-- </v-chip-group>
        </v-sheet> -->
      </div>

      <NewArrival class="mt-16" />

      <div class="my-16">
        <div class="d-flex justify-content-between align-center">
          <h2 class="mb-0">Get you favorite skins</h2>
          <a href="/allproduct" class="text-decoration-none text-white">
            View all <i class="fa-solid fa-arrow-right ml-1"></i>
          </a>
        </div>
        <v-row dense class="mt-5">
          <v-col v-for="card in Weapon" :key="card.title" :cols="card.flex">
            
              <v-card>
                <a :href="card.tagLink" class="text-decoration-none text-white">
                <v-img
                  :src="card.src"
                  class="white--text align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="400px"
                >
                  <v-card-title v-text="card.title"></v-card-title>
                </v-img>
              </a>
              </v-card>
            
          </v-col>
        </v-row>
      </div>

      <div class="my-16">
        <div class="d-flex justify-content-between align-center">
          <h2 class="mb-0">Premium Bundles</h2>
          <a href="/allproduct" class="text-decoration-none text-white">
            View all <i class="fa-solid fa-arrow-right ml-1"></i>
          </a>
        </div>
        <v-row dense class="mt-5">
          <v-col v-for="card in Bundle" :key="card.title" :cols="card.flex">
            <v-card>
              <v-img
                :src="card.src"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="400px"
              >
                <!-- <v-card-title v-text="card.title"></v-card-title> -->
              </v-img>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
import NewArrival from "../components/NewArrival.vue";

export default {
  components: {
    NewArrival,
  },

  data() {
    return {
      Weapon: [
        {
          title: "Vandal",
          tagLink: "/vandal",
          src: "https://img.4gamers.com.tw/ckfinder-th/image2/auto/2022-05/raze%204.10%20valorant-220527-155155.jpg?versionId=NO7CzAwI.EYhoCPKVVffAYCB8QBWLAJM",
          flex: 4,
        },
        {
          title: "Phantom",
          tagLink: "/phantom",
          src: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fecfc769-eca8-495b-baba-ca4f58048dc7/dfmblxv-2042017b-7178-4bc2-92e5-448e9d826995.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ZlY2ZjNzY5LWVjYTgtNDk1Yi1iYWJhLWNhNGY1ODA0OGRjN1wvZGZtYmx4di0yMDQyMDE3Yi03MTc4LTRiYzItOTJlNS00NDhlOWQ4MjY5OTUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.vGdFhxjL8Dek1Z96AXz9RepTyR7t5LfTDCJGOe-EqVo",
          flex: 4,
        },
        {
          title: "Operator",
          tagLink: "/operator",
          src: "https://assets.gamearena.gg/wp-content/uploads/2023/10/26132843/Cypher-mirando.jpg",
          flex: 4,
        },
      ],
      Bundle: [
        {
          title: "Vandal",
          tagLink: "/vandal",
          src: "https://news.codashop.com/ph/wp-content/uploads/sites/5/2023/08/Champions-2023-Bundle.jpg",
          flex: 12,
        },
        {
          title: "Phantom",
          tagLink: "/vandal",
          src: "https://staticg.sportskeeda.com/editor/2022/08/59f9b-16593284270850-1920.jpg",
          flex: 6,
        },
        {
          title: "Operator",
          tagLink: "/vandal",
          src: "https://cdn.vcgamers.com/news/wp-content/uploads/2023/01/Bundle-Baru-Valorant.png",
          flex: 6,
        },
      ],

      tags: [
        {
          tagName: "Vandal",
          tagLink: "/vandal",
          tagImage:
            "https://vgraphs.com/images/weapons/valorant-vandal-profile-icon.png",
        },
        {
          tagName: "Phantom",
          tagLink: "/phantom",
          tagImage:
            "https://vgraphs.com/images/weapons/valorant-phantom-profile-icon.png",
        },
        {
          tagName: "Odin",
          tagLink: "/odin",
          tagImage:
            "https://vgraphs.com/images/weapons/valorant-odin-profile-icon.png",
        },
        {
          tagName: "Operator",
          tagLink: "/operator",
          tagImage:
            "https://vgraphs.com/images/weapons/valorant-operator-profile-icon.png",
        },
      ],
    };
  },
};
</script>

<style>
.carousel {
  border-radius: 1rem !important;
}

.v-application .elevation-8 {
  box-shadow: none !important;
}

.theme--dark.v-sheet {
  background: transparent !important;
  box-shadow: none !important;
}

.theme--light.v-chip:not(.v-chip--active) {
  background-color: #ff4655;
}

.v-chip .v-chip__content {
  color: #212121 !important;
}

.weapons {
  text-decoration: none;
  color: #eeeeee !important;
  transition: 0.3s;
  border-radius: 1rem;
  padding-bottom: 2rem;
}

.weapons:hover {
  background-color: #ff4655;
  color: #212121 !important;
}
</style>
