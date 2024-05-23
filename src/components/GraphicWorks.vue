<template>
  <div>
    <div class="row">
      <div
        class="col-lg-3 col-md-4 col-sm-6 col-6"
        v-for="(item, index) in images"
        :key="index"
      >
        <div
          class="image-container"
          type="button"
          :data-bs-toggle="'modal'"
          :data-bs-target="'#modalImage' + index"
        >
          <img class="image-gallery rounded-lg" :src="item.img" alt="" />
          <!-- <div class="image-name">
            <div class="text">
              {{ item.caption }}
            </div>
          </div> -->
        </div>

        <!-- Modal -->
        <div
          class="modal fade"
          :id="'modalImage' + index"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered modal-xl">
            <div class="modal-content bg-text">
              <div class="modal-body">
                <div class="row">
                  <div class="col-lg-7 col-md-7 col-sm-6 col-12">
                    <img
                      :src="item.img"
                      width="100%"
                      height="auto"
                      class="rounded-lg"
                    />
                  </div>

                  <div class="col-lg-5 col-md-5 col-sm-6 col-12">
                    <div class="d-flex justify-content-between align-start">
                      <h1>{{ item.caption }}</h1>
                      <button
                        type="button"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        <i class="fa-solid fa-xmark fa-2xl"></i>
                      </button>
                    </div>
                    <div>
                      <v-chip-group active-class="primary--text" column dark>
                        <v-chip>
                          {{ item.tag }}
                        </v-chip>
                        <v-chip>
                          {{ item.tool }}
                        </v-chip>
                      </v-chip-group>
                      <p class="mt-3">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Doloribus, dolore accusantium perspiciatis eum
                        dicta doloremque dignissimos, fuga quaerat facere
                        explicabo excepturi est provident quis! Voluptas a
                        architecto sint nulla temporibus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { images } from "./Data";

export default {
  name: "Works",

  data() {
    return {
      images, // Use the imported images array
    };
  },
};
</script>

<style>
.image-gallery {
  width: 100%;
  min-height: 200px;
  height: 400px;
  object-fit: cover;
  object-position: 0% 0%;
  transition: 0.5s ease;
  backface-visibility: hidden;
  opacity: 1;
}

@media only screen and (max-width: 964px) {
  .image-gallery {
    height: 250px;
  }
}
</style>
