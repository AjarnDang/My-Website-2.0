<template>
  <v-container class="my-16">
    <h1>Simple Page</h1>
    <h2 v-if="show">{{ name }}</h2>
    <v-btn color="success" class="mr-3" @click="show = !show">switch</v-btn>
    <v-btn color="success" @click="callAlert()">alert</v-btn>
    <v-row class="mt-3">
      <v-col cols="3" v-for="(item, index) in catlist" :key="index">
        <v-card width="350" class="bg-text">
          <v-img :src="item.img"></v-img>
          <v-card-title primary-title>
            <span>{{ item.name }}</span>
          </v-card-title>
          <v-card-text>
            <v-btn color="info" @click="callAlertParam(item.name)">info</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" class="bg-white">
        <v-text-field
          name="name"
          label="name"
          id="name"
          v-model="name"
          class="text-white"
        ></v-text-field>
        <v-btn color="info" @click="callAlertParam(name)">info</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      name: "Thornthan Jomtharak",
      show: false,
      catlist: [
        {
          name: "แมวยืน",
          img: "https://www.catster.com/wp-content/uploads/2023/12/orange-cat-2.jpg",
        },
        {
          name: "แมวอ้วน",
          img: "https://images.squarespace-cdn.com/content/v1/5452d441e4b0c188b51fef1a/1615326524828-L9E7WA6LUTNYBJTFW3FU/male-orange-tabby-cat.jpg?format=500w",
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
        } else if (item >= 70 && item <=79) {
            alert("B")
        } else if (item >= 60 && item <=69) {
            alert("C")
        } else if (item >= 50 && item <=59) {
            alert("D")
        } else if (item >= 0 && item <= 49) {
            alert("F")
        } else {
            alert("กรอกเลขตั้งแต่ 0-100 เท่านั้นจ้าพี่")
        }
    },
  },
};
</script>

<style></style>
