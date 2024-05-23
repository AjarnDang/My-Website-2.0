<template>
  <div>
    <div :class="imgBgClass"></div>
    <div class="container">
      <div
        class="card-image d-lg-flex justify-content-md-center align-items-center"
      >
        <v-img class="c-image" src="../assets/img/me.jpg" cover> </v-img>
        <div class="ml-5 mt-5 d-lg-inline d-md-inline d-sm-none d-none">
          <h2 class="mb-0">Thornthan Jomtharak</h2>
          <p>Frontend Developer, UX/UI Designer</p>
        </div>
      </div>

      <v-card
        :disabled="loading"
        :loading="loading"
        class="mx-auto mt-16 mb-12 bg-text"
      >
        <v-row>
          <v-col lg="5" md="5" sm="6" cols="12">
            <v-card-item>
              <v-card-subtitle>
                <span
                  >Hi, my name is Thornthan Jomtharak. My nickname is Brand.
                  Comes from Bangkok, Thailand. I graduated from
                  <a
                    href="https://khonkaenuniversity.in.th/"
                    class="text-primary"
                    target="_blank"
                    >Khon Kaen University</a
                  >,
                  <a
                    href="https://computing.kku.ac.th/content/branch/37"
                    class="text-primary"
                    target="_blank"
                  >
                    Information Technology Major </a
                  >,
                  <a
                    href="https://computing.kku.ac.th/index"
                    class="text-primary"
                    target="_blank"
                  >
                    College of Computing </a
                  >. Specialize in Frontend Development and UX / UI Design and
                  Graphic Design.</span
                >
                <CardSocial />
              </v-card-subtitle>
            </v-card-item>
          </v-col>
          <v-col lg="7" md="7" sm="6" cols="12">
            <v-card-text>
              <h6 class="text-white mb-5">Experiences</h6>
              <v-timeline align-top dense dark>
                <v-timeline-item
                  v-for="tag in experiences"
                  :key="tag"
                  :color="tag.color"
                  small
                >
                  <div>
                    <div class="font-weight-normal">
                      <strong>{{ tag.role }}</strong>
                    </div>
                    <a
                      :href="tag.link"
                      target="_blank"
                      class="mb-0 text-secondary text-decoration-none"
                    >
                      {{ tag.company }}
                      <i
                        class="fa-solid fa-arrow-up-right-from-square text-secondary fa-xs ml-1"
                      ></i>
                    </a>
                    <div>{{ tag.startDate }} - {{ tag.endDate }}</div>
                  </div>
                </v-timeline-item>
              </v-timeline>
            </v-card-text>

            <v-divider class="mx-4 mb-1 mt-0"></v-divider>

            <v-card-text>
              <h6 class="text-white mb-5">Programming Skills</h6>
              <v-chip-group column class="mb-2">
                <v-chip
                  class="skills mr-2 mb-2 text-white"
                  color="secondary"
                  v-for="tag in skills"
                  :key="tag"
                >
                  {{ tag }}</v-chip
                >
              </v-chip-group>

              <h6 class="text-white my-5">Tools & Utilities</h6>
              <v-chip-group column class="mb-2">
                <v-chip
                  class="tools mr-2 mb-2 text-white"
                  color="secondary"
                  v-for="tag in tools"
                  :key="tag"
                >
                  {{ tag }}</v-chip
                >
              </v-chip-group>

              <h6 class="text-white my-5">Strengths</h6>
              <v-chip-group column class="mb-2">
                <v-chip
                  class="tools mr-2 mb-2 text-white"
                  color="secondary"
                  v-for="tag in strengths"
                  :key="tag"
                >
                  {{ tag }}</v-chip
                >
              </v-chip-group>
            </v-card-text>

            <v-divider class="mx-4 mb-1 mt-0"></v-divider>

            <v-card-text>
              <div class="d-flex flex-wrap gap-3">
                <a
                  href="https://www.canva.com/design/DAF7pgel6sY/z15YcMNeyOScFbvzsahY2w/view"
                  class="btn btn-primary p-2 d-inline-flex align-center"
                  target="_blank"
                >
                  <div>
                    <i class="fa-solid fa-file-pdf fa-2xl text-dark"></i>
                    <h6 class="mt-5 text-dark text-file">Resume</h6>
                  </div>
                </a>
                <a
                  href="https://www.canva.com/design/DAF_eA3VojU/cHtkVH1YOjMbjPsMhOmVFQ/view"
                  class="btn btn-primary p-2 d-inline-flex align-center"
                  target="_blank"
                >
                  <div>
                    <i class="fa-solid fa-file-pdf fa-2xl text-dark"></i>
                    <h6 class="mt-5 text-dark text-file">Portfilio</h6>
                  </div>
                </a>
                <a
                  href="https://www.canva.com/design/DAGDJmYdoWM/s_DqVCQfUnYLBc1cAdqqnA/view"
                  class="btn btn-primary p-2 d-inline-flex align-center"
                  target="_blank"
                >
                  <div>
                    <i class="fa-solid fa-file-pdf fa-2xl text-dark"></i>
                    <h6 class="mt-5 text-dark text-file">UX/UI Presentation</h6>
                  </div>
                </a>
              </div>
            </v-card-text>
          </v-col>
        </v-row>
      </v-card>
    </div>
  </div>
</template>

<script>
import CardSocial from "../components/CardSocial.vue";
import {
  skills,
  tools,
  strengths,
  experiences,
} from "@/components/ProfileData";

export default {
  components: {
    CardSocial,
  },
  data() {
    return {
      images: [
        "https://wallpapers.com/images/hd/chamber-valorant-1920-x-1080-wallpaper-7sgbhq3hq14fp3r6.jpg",
        "https://wallpaper.forfun.com/fetch/7d/7db1f396ee37c0ca9a12a4693de5be3b.jpeg",
        "https://cdn.wallpapersafari.com/90/10/Y1c0Nu.png",
        "https://images8.alphacoders.com/120/1202648.jpg",
      ],
      skills,
      tools,
      strengths,
      experiences,
    };
  },
  computed: {
    randomImage() {
      const randomIndex = Math.floor(Math.random() * this.images.length);
      return this.images[randomIndex];
    },
    imgBgClass() {
      return {
        "img-bg": true,
        "random-bg": true,
      };
    },
  },
  mounted() {
    this.setRandomBackgroundImage();
  },
  methods: {
    setRandomBackgroundImage() {
      const randomIndex = Math.floor(Math.random() * this.images.length);
      const selectedImage = this.images[randomIndex];
      document.querySelector(
        ".img-bg"
      ).style.backgroundImage = `url(${selectedImage})`;
    },
  },
  watch: {
    images: "setRandomBackgroundImage",
  },
};
</script>

<style scoped>
.img-bg {
  height: 320px;
  width: 100%;
  object-fit: cover;
  object-position: 0% 0%;
  position: relative;
  opacity: 0.3;
}

.card-image {
  position: absolute;
  top: 4.5rem;
  z-index: 1000;
}

.c-image {
  height: 300px;
  width: 300px;
  border-radius: 50%;
  border: 2px solid #6d6767;
}
.v-chip .v-chip__content {
  color: #eeeeee;
}

.text-file {
  width: 120px;
}
</style>
