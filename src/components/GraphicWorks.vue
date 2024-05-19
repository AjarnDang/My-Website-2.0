<template>
  <div class="masonry-container">
    <div class="panel" v-for="(item, index) in images" :key="index">
      <div
        class="panel-wrapper"
        type="button"
        :data-bs-toggle="'modal'"
        :data-bs-target="'#modal-image' + index"
      >
        <div class="panel-overlay">
          <div class="panel-text">
            <div class="panel-title">{{ item.caption }}</div>
            <div class="panel-tags">
              <span class="tag-icon">
                <img
                  class="tag-icon-img"
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/375042/tag-icon.svg"
                  alt=""
                />
              </span>
              <span class="tags-list ml-2">{{ item.tag }}</span>
            </div>
          </div>
          <img
            class="panel-gradient"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/375042/base-gradient.png"
            alt=""
          />
          <img
            class="panel-vingette"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/375042/darken-gradient.png"
            alt=""
          />
        </div>
        <img class="panel-img" :src="item.img" alt="" />
      </div>

      <!-- Modal -->
      <div
        class="modal fade"
        :id="'modal-image' + index"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-xl">
          <div class="modal-content bg-text">
            <div class="modal-body">
              <v-row>
                <v-col lg="7" md="7" sm="6" cols="12">
                  <img :src="item.img" width="100%" height="auto" class="rounded-lg" />
                </v-col>

                <v-col lg="5" md="5" sm="6" cols="12">
                  <div class="d-flex justify-content-between align-start">
                    <h1>
                      {{ item.caption }}
                    </h1>
                    <button
                      type="button"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ><i class="fa-solid fa-xmark fa-xl text-white"></i></button>
                  </div>
                </v-col>
              </v-row>
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
          caption: "ขั้นตอนการยืม Labtop สำหรับนักศึกษาคณะวิทยาศาสตร์ มหาวิทยาลัยขอนแก่น",
        },
        {
          img: "https://scontent.fkkc2-1.fna.fbcdn.net/v/t39.30808-6/442418700_968559517970637_6123935461626819227_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=h6E6khtpfwwQ7kNvgFgfyRu&_nc_ht=scontent.fkkc2-1.fna&oh=00_AYAhh7t22Sa9ItXAu5x79Ld0xhF3d_3ZEygEC3qmmsCkXg&oe=664F8A54",
          tag: "Infographic",
          caption: "ช่องทางการติดต่อกลุ่มภาระงานด้านพัฒนานักศึกษา คณะวิทยาศาสตร์ มหาวิทยาลัยขอนแก่น",
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
      ],
    };
  },
};
</script>

<style>
.clear-fix {
  clear: both;
}

.masonry-container {
  width: 80vw;
  position: relative;
  margin: 0 auto;
  margin-top: 12px;
}

.panel {
  position: relative;
  display: inline-block;
  width: calc((80vw - 60px) / 3);
  height: calc((80vw - 60px) / 3);
  margin-left: 20px;
  margin-bottom: 20px;
  cursor: pointer;
  box-shadow: 0px 8px 32px 0px rgba(0, 0, 0, 0.3);
  transition: all 0.2s ease-out;
}

.panel:hover {
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.55);
  transition: all 0.2s ease-out;
}

.panel:nth-child(11n + 1) {
  margin-left: 0;
}

.panel:nth-child(11n + 4) {
  margin-left: 0;
  width: calc(((80vw - 20px) / 3) * 2);
  height: calc((80vw - 60px) / 3);
}

.panel:nth-child(11n + 6) {
  margin-left: 0;
  float: left;
  width: calc((80vw - 60px) / 3);
  height: calc(((80vw - 20px) / 3) * 2 - 8px);
}

.panel:nth-child(11n + 6) > .panel-wrapper > .panel-img {
  transform: translateX(-25%);
}

.panel:nth-child(11n + 7) {
  margin-left: 27px;
  width: calc(((80vw - 20px) / 3) * 2);
}

.panel:nth-child(11n + 8) {
  margin-left: 27px;
}

.panel:nth-child(11n + 9) {
  float: none;
}

.panel:nth-child(11n + 10) {
  margin-left: 0;
  width: calc((80vw - 30px) / 2);
}

.panel:nth-child(11n + 11) {
  width: calc((80vw - 30px) / 2);
}

.panel-wrapper {
  position: relative;
  display: inline-block;
  width: 100%;
  height: 100%;
  overflow: hidden !important;
}

.panel-overlay {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 2;
  opacity: 0;
  transition: all 0.3s ease-out;
}

.panel-overlay:hover {
  opacity: 1;
  transition: all 0.3s ease-out;
}

.panel-text {
  position: absolute;
  width: 80%;
  height: 60px;
  margin: 0 auto;
  left: 25px;
  bottom: 0;
  z-index: 10;
}

.panel-title {
  font-size: 1em;
  font-weight: 300;
  letter-spacing: 0;
  color: #fff;
}

.panel-tags {
  padding-top: 2px;
}

.tag-icon-img {
  display: inline-block;
  width: 10px;
  height: auto;
  transform: translateY(2px);
}

.tags-list {
  font-size: 0.55em;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #fff;
}

.panel-gradient {
  position: absolute;
  width: 100%;
  height: 65%;
  bottom: 0;
  opacity: 0.65;
  z-index: 5;
}

.panel-vingette {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  opacity: 0.5;
}

.panel-img {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  margin: 0 auto;
  min-width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 100% 0%;
}
</style>
