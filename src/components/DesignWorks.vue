<template>
    <div>
      <v-col
        cols="12"
        class="mb-3 px-0 rounded-lg"
        v-for="(item, index) in project"
        :key="index"
      >
        <v-card class="mx-auto bg-text" max-width="100%" outlined>
          <v-list-item three-line>
  
            <v-list-item-content>
              <div class="text-overline mb-4">{{ item.no }}</div>
  
              <v-list-item-title class="text-h5 mb-2">
                {{ item.name }}
              </v-list-item-title>
  
              <v-list-item-subtitle class="text-white">
                {{ item.desc}}
              </v-list-item-subtitle>
  
              <v-list-item-subtitle class="text-secondary mt-2">
               {{ item.created}}
              </v-list-item-subtitle>
  
            </v-list-item-content>
  
            <v-list-item-avatar tile size="80" class="rounded-lg">
              <v-img :src="item.img"></v-img>
            </v-list-item-avatar>
          </v-list-item>
  
          <v-card-actions>
            <v-btn  v-if="item.showLink" :href="item.link" target="_blank" rounded-lg text class="bg-primary ml-2 mb-2 px-4 d-flex align-items-center"
              >SEE MORE <i class="fa-solid fa-arrow-up-right-from-square ml-2 text-dark"></i></v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </div>
  </template>
  
  <script>
  export default {
    name: "Works",
  
    data() {
      return {
        project: [
          {
            no: "PROJECT #1",
            name: "CU E-Reciept",
            desc: "The Sport Center of Chulalongkorn University. E-Reciept (Electronic Recipe) web application for internal uses and normal part for formal user including Registeration, Sport application, billing, etc.",
            img: "https://www.wearefreemovers.com/wp-content/uploads/2020/10/Chulalongkorn-University-Bangkok-logo.png",
            link: "#",
            created: "Feb, 2024",
            showLink: false,
          },
          {
            no: "PROJECT #2",
            name: "Toyota - IDM (Identity Management)",
            desc: "A web application for setting up master data of back office systems of Toyota.",
            img: "https://yt3.googleusercontent.com/krD7oV9daygsFuSZD0jd4tSKx64cw55ZUUiZmK_9Ui3U7cSk05gvSxg0cqdErsqe-ITAXiCY=s900-c-k-c0x00ffffff-no-rj",
            link: "#",
            created: "Nov, 2023",
            showLink: false,
          },
          {
            no: "PROJECT #3",
            name: "Faculty of Science, Khon Kaen University | Alumni",
            desc: "A college final project web application designed for alumni and students ofp Faculty of Science Khon Kaen University with the purpose of collecting data for future data analysis There are also a variety of features such as posting news, events, Hall of Fame, profile updates, and other management systems using HTML5, CSS3, PHP, MySQL and Bootstrap 5",
            img: "https://sc.kku.ac.th/wp-content/uploads/2024/01/SCKKULO.png",
            link: "https://github.com/AjarnDang/Alumni-SCI-KKU",
            created: "Oct, 2021",
            showLink: true,
          },
          {
            no: "PROJECT #4",
            name: "Zenith Comp - System Admin",
            desc: "A simple web application for multi-purpose use for organization",
            img: "https://media.licdn.com/dms/image/D562DAQEnCmPSoo6C1w/profile-treasury-image-shrink_800_800/0/1712050021597?e=1716462000&v=beta&t=f3B01WaRUr29EQIlwgZ2eOvhFRUTKkDjivbaSv0OeI0",
            link: "https://www.figma.com/design/8WZruoyufKbnP4n4ak4f01/ZenithComp---SystemAdmin?node-id=0%3A1&t=BhVUpUycViXJCuaL-1",
            created: "Dec, 2022",
            showLink: true,
          },
          {
            no: "PROJECT #5",
            name: "MSC DSG (Metrosystems's Digital Solution Group)",
            desc: "Design new website page of Metro Systems Corporation Plc. Digital Solutions Group. the original website is 'https://www.metrosystems.co.th/business-units/dsg/'",
            img: "https://t3.ftcdn.net/jpg/01/29/66/24/360_F_129662425_PfXxvFN1ZcbtieCioXacM0uckB1vS4jh.jpg",
            link: "https://www.figma.com/design/bH2nDF2Su4xQn4VZGUqTGo/Metrosystems-DSG?node-id=1%3A4&t=Vn4CoOtG4WKBoLKi-1",
            created: "Apr, 2024",
            showLink: true,
          },
          {
            no: "PROJECT #6",
            name: "CP E-Learning (College of Computing E-Learning)",
            desc: "A Website about Valorant game using Vue.js framework version 2, Vuetify and Valorant-API for Mock up data which also can link to my 'My-Website-2.0' repository",
            img: "https://t3.ftcdn.net/jpg/01/29/66/24/360_F_129662425_PfXxvFN1ZcbtieCioXacM0uckB1vS4jh.jpg",
            link: "https://www.figma.com/design/KcyAxbgfARmS4G95icdwwY/CP's-E-Learning?node-id=1%3A16&t=MIIgwlJBZn56QBdl-1",
            created: "Oct, 2022",
            showLink: true,
          },
        ],
      };
    },
  };
  </script>
  
  <style></style>
  