<template>
  <div>
    <div class="row">
      <div
        class="col-lg-3 col-md-4 col-sm-6 col-12"
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
                      ><i class="fa-solid fa-xmark fa-2xl"></i></button>
                    </div>
                    <div>
                      <span class="tags-list">{{ item.tag }}</span>
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
export default {
  name: "Works",

  data() {
    return {
      images: [
        {
          // img: require("../assets/img/graphic-design/HCI-POSTER.jpg"),
          img: "https://scontent.fkkc2-1.fna.fbcdn.net/v/t39.30808-6/442475115_968559804637275_2356297070795984890_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=yPCXoM-537IQ7kNvgFETnNR&_nc_ht=scontent.fkkc2-1.fna&oh=00_AYAcV86ffoELeRnu4WzBDVq6Od7GPT6FYQZ0rAKExcj5yg&oe=664FA204",
          tag: "Poster",
          caption: "ปฐมนิเทศนักศึกษาใหม่ 2563",
        },
        {
          img: "https://scontent.fkkc2-1.fna.fbcdn.net/v/t39.30808-6/436310845_968559591303963_6587085750367269063_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=9d1OudmzQgcQ7kNvgFgD5UV&_nc_oc=Adi-T3NTLwu360p2NnOS375y2AUyDGvFfNNoi-5Of_5U4Bk4tcNVCJ7_VF6kMUChd3jUjZL1bpBD__tkT0Uy5Eiu&_nc_ht=scontent.fkkc2-1.fna&oh=00_AYAw7ZFepE8D1TPAp98uFBEK49THDnMapb5OjtYNT5TO5w&oe=664FA172",
          tag: "Poster",
          caption: "ม็อป 'ขอนแก่น ลุยเผด็จการ' 2565",
        },
        {
          img: "https://scontent.fkkc2-1.fna.fbcdn.net/v/t39.30808-6/440942000_968559534637302_5333241471775100104_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=BNM9I6ye3aEQ7kNvgGRAE3M&_nc_ht=scontent.fkkc2-1.fna&oh=00_AYC4g3VTmDAawaUtQrm3zW9wIDL3G0XCV_gV978bmO_oCQ&oe=664F9F5C",
          tag: "Infographic",
          caption: "เจาะเทรนด์ Industrial IOT - Metro System Corporation Plc.",
        },
        {
          img: "https://scontent.fkkc2-1.fna.fbcdn.net/v/t39.30808-6/442498499_968559537970635_5720635124765594967_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=_9kdtF2jiGUQ7kNvgFA4FHF&_nc_ht=scontent.fkkc2-1.fna&oh=00_AYClxn6F6iSYOUGFH7v98iT3Ne2Hfe7dPBPQxQrlgHyC1g&oe=664FA804",
          tag: "Infographic",
          caption:
            "ขั้นตอนการยืม Labtop สำหรับนักศึกษาคณะวิทยาศาสตร์ มหาวิทยาลัยขอนแก่น",
        },
        {
          img: "https://scontent.fkkc2-1.fna.fbcdn.net/v/t39.30808-6/442418700_968559517970637_6123935461626819227_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=h6E6khtpfwwQ7kNvgFgfyRu&_nc_ht=scontent.fkkc2-1.fna&oh=00_AYAhh7t22Sa9ItXAu5x79Ld0xhF3d_3ZEygEC3qmmsCkXg&oe=664F8A54",
          tag: "Infographic",
          caption:
            "ช่องทางการติดต่อกลุ่มภาระงานด้านพัฒนานักศึกษา คณะวิทยาศาสตร์ มหาวิทยาลัยขอนแก่น",
        },
        {
          img: "https://scontent.fkkc2-1.fna.fbcdn.net/v/t39.30808-6/442424192_968559674637288_488088773518588233_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=J-8IO7O6k_gQ7kNvgFyDgD-&_nc_ht=scontent.fkkc2-1.fna&oh=00_AYBL2XbseH6yuwLOGvnVaoza67gLAglESRH3yvyYW6Rtxw&oe=664FA0E8",
          tag: "Infographic",
          caption: "ตู้ปันสุข พี่น้องวิทยา ปี 2563",
        },
        {
          img: "https://scontent.fkkc2-1.fna.fbcdn.net/v/t39.30808-6/441511286_968559647970624_5513047512399792035_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ewCWJsgJ1ukQ7kNvgETEGEP&_nc_oc=AdhUkeLoXbI_jKKvdET0bu27qEcxlE0qAB8ldsai7DEaXetFnA2Bjaeb5mlpawjnbwEX4ZpINxF6s1zXeM7NsdRu&_nc_ht=scontent.fkkc2-1.fna&oh=00_AYB5XX1VayLDUP7DL6xmxAcF71pErbmL8UXFJVDCQMJ72g&oe=664F91AD",
          tag: "Infographic",
          caption: "งานบริการนักศึกษา คณะวิทยาศาสตร์ มหาวิทยาลัยขอนแก่น",
        },
        {
          img: "https://scontent.fkkc2-1.fna.fbcdn.net/v/t39.30808-6/442488803_968559701303952_2609404179626489488_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=LEcDU-04e-oQ7kNvgG6guQK&_nc_ht=scontent.fkkc2-1.fna&oh=00_AYDByKmBasPc8dmjxskbP2RQhfXNKv6y9gpT9O98e9bMiA&oe=664FA8C7",
          tag: "Infographic",
          caption: "ประกาศรับสมัครทุนการศึกษา ประเภท ข ปี 2564",
        },
        {
          img: "https://scontent.fkkc2-1.fna.fbcdn.net/v/t39.30808-6/440942153_968559607970628_4416913583799075763_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Rq2H5_jafY4Q7kNvgF_UumK&_nc_ht=scontent.fkkc2-1.fna&oh=00_AYC2SoZtUj8futuyM-Z3cds3czJed9NkteCv1wNYxV29Aw&oe=664F8CB1",
          tag: "Infographic",
          caption: "ทุนสำหรับนักศึกษา ประเภท ก/ข ปี 2564",
        },
        {
          img: "https://scontent.fkkc2-1.fna.fbcdn.net/v/t39.30808-6/441450714_968559827970606_5320683557936217444_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=kGfWGux3lMoQ7kNvgEl2jlz&_nc_ht=scontent.fkkc2-1.fna&oh=00_AYCHL05u7DbSj6ZEu0KcbSSIdPvdAQ7Gvc_3UQnLwcm5JQ&oe=664FB706",
          tag: "Poster",
          caption: "ปฐมนิเทศนักศึกษาใหม่ 2563",
        },
        {
          img: "https://scontent.fkkc2-1.fna.fbcdn.net/v/t39.30808-6/436241217_968559557970633_2249042295054010353_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=J_piKD8II_EQ7kNvgHtc3p5&_nc_ht=scontent.fkkc2-1.fna&oh=00_AYCnEuWdmMfl0jP7IK4RIka7ssnAv-gEnkgqN0TZIhsUZA&oe=664FB3D3",
          tag: "Infographic",
          caption: "ขั้นตอนการสมัครทุน ก/ข คณะวิทยาศาสตร์ มหาวิทยาลัยขอนแก่น",
        },
        {
          img: "https://scontent.fkkc3-1.fna.fbcdn.net/v/t39.30808-6/436000887_968764787950110_9003556959217990973_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=HWf-RvuEb2wQ7kNvgGceRVI&_nc_oc=AdiXfndV_gY4rsENphzYpu1eDkaZyDaNprjqQjtutTyjJlYWc7uRjuznI_fFwcETJ5o&_nc_ht=scontent.fkkc3-1.fna&oh=00_AYAVKjBOOHbYeNHieYJyTJEfnJonAiynLckeGlVpQckzGg&oe=664FFCBE",
          tag: "Infographic",
          caption: "FRESHMAN 2020 01 - FACULTY OF SCIENCE, KKU",
        },
        {
          img: "https://scontent.fkkc3-1.fna.fbcdn.net/v/t39.30808-6/436235522_968764951283427_4601286628691528258_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=5FAxvRcciE8Q7kNvgENP5bf&_nc_ht=scontent.fkkc3-1.fna&oh=00_AYD5TcMFdz-E0yI_sS3QfkBoUmMrHZhzqRSb2P7ZEu-1uA&oe=664FE961",
          tag: "Infographic",
          caption: "FRESHMAN 2020 02 - FACULTY OF SCIENCE, KKU",
        },
        {
          img: "https://scontent.fkkc3-1.fna.fbcdn.net/v/t39.30808-6/440955542_968764947950094_6436859115764390219_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=BlFGuVFsuagQ7kNvgExUTXQ&_nc_ht=scontent.fkkc3-1.fna&oh=00_AYBEFYwBXfn1r0pRTJx0ftNjjrtyXPVQB93t_gA0QwYIJQ&oe=664FE98A",
          tag: "Infographic",
          caption: "FRESHMAN 2020 03 - FACULTY OF SCIENCE, KKU",
        },
        {
          img: "https://scontent.fkkc3-1.fna.fbcdn.net/v/t39.30808-6/441315962_968764944616761_8202123070746718037_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=y7PKkCrqor8Q7kNvgGSf37Q&_nc_ht=scontent.fkkc3-1.fna&oh=00_AYDMYxAz7xGVWt6ONgQRZe6o2N6kGxXN3mXDFwNIxN9THA&oe=664FE467",
          tag: "Infographic",
          caption: "FRESHMAN 2020 04 - FACULTY OF SCIENCE, KKU",
        },
      ],
    };
  },
};
</script>

<style>
.image-gallery {
  width: 100%;
  height: 400px;
  object-fit: cover;
  object-position: 0% 0%;
  transition: .5s ease;
  backface-visibility: hidden;
  opacity: 1;
}
</style>
