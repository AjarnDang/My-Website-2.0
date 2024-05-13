<template>
  <v-container class="my-16">
    <h2 class="mb-0">Quality works</h2>
    <p class="mb-10">Since 2022 - Present</p>

    <v-tabs dark class="rounded">
      <v-tab>
        Projects
      </v-tab>
      <v-tab>
        Small Projects
      </v-tab>
      <!-- <v-tab>
        Option 3
      </v-tab> -->

      <v-tab-item class="mt-3">
        <v-col
          cols="12"
          class="mb-3 px-0 rounded"
          v-for="(item, index) in project"
          :key="index"
        >
          <v-card class="mx-auto bg-text" max-width="100%" outlined>
            <v-list-item three-line>
              <v-list-item-content>
                <div class="text-overline mb-4">{{ item.no }}</div>
                <v-list-item-title class="text-h5 mb-1">
                  {{ item.name }}
                </v-list-item-title>
                <v-list-item-subtitle class="text-white">{{
                  item.desc
                }}</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-avatar tile size="80" class="rounded">
                <v-img :src="item.img"></v-img>
              </v-list-item-avatar>
            </v-list-item>

            <v-card-actions>
              <v-btn rounded text class="text-white bg-primary ml-2 mb-2 px-4"
                >SEE MORE</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-tab-item>

      <v-tab-item class="mt-3">
     
          <v-card-text class="mb-3 py-5 rounded">
            <v-col cols="12" class="bg-text">
                <h5 class="mb-0">Calculator</h5>
                <p>Rules : input number range 1 - 100.</p>
              <v-text-field
                dark
                name="name"
                label="Enter Number"
                id="name"
                v-model="name"
                class="text-white"
              ></v-text-field>
              <v-btn rounded class="text-white bg-primary ml-2 mb-2 px-4" @click="callAlertParam(name)">ENTER</v-btn>
            </v-col>
          </v-card-text>
      
      </v-tab-item>
    </v-tabs>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      project: [
        {
          no: "PROJECT #1",
          name: "CU E-Reciept",
          desc: "The Sport Center of Chulalongkorn University. E-Reciept (Electronic Recipe) web application for internal uses and normal part for formal user including Registeration, Sport application, billing, etc.",
          img: "https://www.wearefreemovers.com/wp-content/uploads/2020/10/Chulalongkorn-University-Bangkok-logo.png",
        },
        {
          no: "PROJECT #2",
          name: "Toyota - IDM (Identity Management)",
          desc: "A web application for setting up master data of back office systems of Toyota.",
          img: "https://yt3.googleusercontent.com/krD7oV9daygsFuSZD0jd4tSKx64cw55ZUUiZmK_9Ui3U7cSk05gvSxg0cqdErsqe-ITAXiCY=s900-c-k-c0x00ffffff-no-rj",
        },
        {
          no: "PROJECT #3",
          name: "Faculty of Science, Khon Kaen University | Alumni",
          desc: "A college final project web application designed for alumni and students ofp Faculty of Science Khon Kaen University with the purpose of collecting data for future data analysis There are also a variety of features such as posting news, events, Hall of Fame, profile updates, and other management systems using HTML5, CSS3, PHP, MySQL and Bootstrap 5",
          img: "https://sc.kku.ac.th/wp-content/uploads/2024/01/SCKKULO.png",
        },
        {
          no: "PROJECT #4",
          name: "The Super App IoT - Metro Systems Corporation",
          desc: "A Website for announcement to promote products of the Metro Systems Corporation 's IoT team using WordPress",
          img: "https://media.licdn.com/dms/image/C510BAQEfycgxJ52BIg/company-logo_200_200/0/1630633255719/metro_systems_corporation_public_company_limited_logo?e=2147483647&v=beta&t=3xTsTe7Yxd7tlmXzbSKaHqFiL8KM7Eg69QoSpA3IoDs",
        },
      ],
    };
  },

  methods: {
    callAlert() {
      alert("โฮ่ง");
    },
    callAlertParam(item) {
      if (item >= 80 && item <= 100) {
        alert("A");
      } else if (item >= 70 && item <= 79) {
        alert("B");
      } else if (item >= 60 && item <= 69) {
        alert("C");
      } else if (item >= 50 && item <= 59) {
        alert("D");
      } else if (item >= 0 && item <= 49) {
        alert("F");
      } else {
        alert("กรอกเลขตั้งแต่ 0-100 เท่านั้นจ้าพี่");
      }
    },
  },
};
</script>

<style>
.theme--light.v-tabs-items {
  background: transparent !important;
}

.theme--dark.v-tabs > .v-tabs-bar,
.theme--light.v-tabs > .v-tabs-bar {
  background: transparent !important;
}
</style>
