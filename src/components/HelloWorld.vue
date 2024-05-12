<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-12">
          <h1>
            Hello, my name is
            <h1 class="text-primary d-inline">Thornthan</h1>
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it.
          </p>
          <div class="my-4">
            <button class="btn btn-primary px-5 py-3">Explore more</button>
            <button
              class="btn btn-transparent text-white d-inline-flex align-items-center py-3 mx-2"
            >
              <i class="fa-solid fa-star fa-lg mx-2"></i>
              Features Product
            </button>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12">
          <img
            src="https://playvalorant.com/static/agents-group-31d7ce5a3637e45d8b25d2fd03159e6c.png"
            alt="Hero Image"
            width="100%"
          />
        </div>
      </div>

      <div
        id="carouselExampleAutoplaying"
        class="carousel slide my-16"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt91603120633fede7/662fd91e58ce889b32c32e2b/8-3-Kickoff-Thumbnail-16x9-Textless-V1.jpg?auto=webp&disable=upscale&height=504" class="d-block w-100 carousel-image" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt91603120633fede7/662fd91e58ce889b32c32e2b/8-3-Kickoff-Thumbnail-16x9-Textless-V1.jpg?auto=webp&disable=upscale&height=504" class="d-block w-100 carousel-image" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt91603120633fede7/662fd91e58ce889b32c32e2b/8-3-Kickoff-Thumbnail-16x9-Textless-V1.jpg?auto=webp&disable=upscale&height=504" class="d-block w-100 carousel-image" alt="..." />
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
    </div>

    <div class="container py-5 my-16">
      <div class="text-center pb-4 mt-5">
        <h6>WHY CHOOSE US</h6>
        <h1>
          <h1 class="text-primary d-inline">Creativity</h1>
          is no limit
        </h1>
        <p>With our various content of Ideas, Styles and Community.</p>
      </div>
      <div class="row my-5">
        <div class="col-lg-3 col-md-6 col-sm-6 col-12 pb-4">
          <i
            class="fa-solid fa-certificate fa-2xl mb-4 rotate text-primary"
          ></i>
          <h3>Best Quality</h3>
          <p>
            Download scroll-stopping images of the highest quality to make
            professional designs.
          </p>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 col-12 pb-4">
          <i
            class="fa-solid fa-hourglass-half fa-2xl mb-4 rotate text-primary"
          ></i>
          <h3>Ready to use</h3>
          <p>
            From thousands of ready-to-publish images to our online editor, we
            work to get your project ready double-quick.
          </p>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 col-12 pb-4">
          <i
            class="fa-solid fa-box-open fa-2xl start-end mb-4 text-primary"
          ></i>
          <h3>Fresh content</h3>
          <p>
            Our library is updated on a daily basis so you can find the newest
            and trendiest photos and designs.
          </p>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 col-12 pb-4">
          <i class="fa-regular fa-compass fa-2xl mb-4 rotate text-primary"></i>
          <h3>Discover best practice</h3>
          <p>
            Guaranteed search results: there’s an image and style for every
            project you might think of.
          </p>
        </div>
      </div>
    </div>

    <div class="py-5 bg-text">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-lg-7 col-md-6 col-sm-12 mb-4">
            <p>Get paid from your ideas</p>
            <h2>Sell your content at your fingertips</h2>
            <button class="btn btn-primary mt-3">Learn more</button>
          </div>
          <div class="col-lg-5 col-md-6 col-sm-12 mb-4">
            <img
              src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt34e30d5669e7309c/653add3080274d040a37d656/ISO_KeyArt_Final.png"
              class="w-100"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
};
</script>
