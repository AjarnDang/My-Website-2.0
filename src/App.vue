<template>
  <v-app>
    <nav class="navbar navbar-expand-lg bg-text shadow-sm">
      <div class="container-fluid">
        <a class="navbar-brand" href="/"
          ><img src="./assets/img/logo.png" width="50px" alt=""
        /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a href="/" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
              <a href="/Works" class="nav-link">Works</a>
            </li>
            <!-- <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li> -->
            <li class="nav-item">
              <a href="/profile" class="nav-link">About me</a>
            </li>
            <li class="nav-item">
              <a
                href="https://viki-iota.vercel.app/"
                target="_blank"
                class="nav-link"
                >Valorant Store
                <i class="fa-solid fa-arrow-up-right-from-square ml-2"></i
              ></a>
            </li>
          </ul>
          <div class="d-flex">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a href="/contact" class="nav-link btn btn-outline-primary"
                  >Contact me</a
                >
              </li>
              <!-- <li class="nav-item">
                <a href="/support" class="nav-link btn btn-primary ml-lg-2 ml-md-2 mt-md-0 mt-2">Support me</a>
              </li> -->
            </ul>
          </div>
        </div>
      </div>
    </nav>

    <v-main>
      <router-view />
    </v-main>

    <footer class="pt-10 border-top">
      <div class="container">
        <div class="d-flex pt-8 pb-10 justify-content-between flex-wrap">
          <div class="mb-3">
            <p>WORKS</p>
            <a href="/works" class="nav-link"> Coding </a>
            <a href="/works" class="nav-link"> UX / UI Design </a>
            <a href="/works" class="nav-link"> Graphic Design </a>
          </div>
          <div class="mb-3">
            <p>ABOUT ME</p>
            <a href="/profile" class="nav-link"> About me </a>
            <a
              href="https://www.canva.com/design/DAF7pgel6sY/z15YcMNeyOScFbvzsahY2w/view"
              target="_blank"
              class="nav-link"
            >
              Resume
            </a>
            <a
              href="https://www.canva.com/design/DAF_eA3VojU/cHtkVH1YOjMbjPsMhOmVFQ/view"
              target="_blank"
              class="nav-link"
            >
              Portfolio
            </a>
            <a
              href="https://www.canva.com/design/DAGDJmYdoWM/s_DqVCQfUnYLBc1cAdqqnA/view"
              target="_blank"
              class="nav-link"
            >
              Presentation
            </a>
          </div>
          <div class="mb-3">
            <p>CONTACT ME</p>
            <!-- <a href="mailto:torntan.j@gmail.com" class="nav-link">
              <i class="fa-solid fa-envelope"
                ><span class="ml-2">torntan.j@gmail.com</span></i
              >
            </a> -->
            <a href="mailto:torntan.j@gmail.com" class="nav-link"
              >torntan.j@gmail.com</a
            >
            <!-- <span class="nav-link"
              ><i class="fa-solid fa-phone"
                ><span class="ml-2">+66 063 386 4998</span></i
              ></span
            > -->
            <span class="nav-link">+66 063 386 4998</span>
          </div>
          <div class="mb-3">
            <p>SOCIALS</p>
            <div class="d-flex align-center">
              <a
                href="https://www.twitch.tv/banny3633"
                target="_blank"
                class="nav-link d-inline"
              >
                <i class="fa-brands fa-twitch fa-2xl mr-3"></i>
              </a>
              <a
                href="https://www.instagram.com/brandthron44/"
                target="_blank"
                class="nav-link d-inline"
              >
                <i class="fa-brands fa-instagram fa-2xl mr-3"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/thornthan-jomtharak-b10403279/"
                target="_blank"
                class="nav-link d-inline"
              >
                <i class="fa-brands fa-linkedin fa-2xl mr-3"></i>
              </a>
              <a
                href="https://www.youtube.com/channel/UC8T4F0fNvCg7nKxSbnPKBSg"
                target="_blank"
                class="nav-link d-inline"
              >
                <i class="fa-brands fa-youtube fa-2xl mr-3"></i>
              </a>
              <a
                href="https://www.tiktok.com/@banny3633"
                target="_blank"
                class="nav-link d-inline"
              >
                <i class="fa-brands fa-tiktok fa-2xl mr-3"></i>
              </a>
              <a
                href="https://www.behance.net/torntanjomthar"
                target="_blank"
                class="nav-link d-inline"
              >
                <i class="fa-brands fa-behance fa-2xl"></i>
              </a>
            </div>
            <p class="mt-5 mb-3">Get in touch with me at your finger tips.</p>
            <v-btn class="btn btn-primary px-5" href="/contact">Contact</v-btn>
          </div>
        </div>
        <hr />
        <div
          class="text-secondary d-flex justify-content-center align-items-center flex-wrap mt-8 mb-5"
        >
          Copyright © {{ currentDate() }}. Thornthan Jomtharak.
        </div>
      </div>
    </footer>
  </v-app>
</template>

<script>
// let year = new Date().getFullYear()
import Vue from "vue";
import VueMeta from "vue-meta";

Vue.use(VueMeta);

export default {
  name: "App",

  metaInfo: {
    title: "Banny",
    link: [{ rel: "icon", href: "/img/logo.png" }],
  },

  methods: {
    currentDate() {
      const current = new Date();
      const date = `${current.getFullYear()}`;
      return date;
    },
  },
};
</script>

<style>
nav li:hover,
nav li.router-link-active,
nav li.router-link-exact-active {
  background-color: #3e3e3e;
  border-radius: 0.5rem;
  cursor: pointer;
}

.v-application ul,
.v-application ol {
  padding-left: 0;
}
</style>
