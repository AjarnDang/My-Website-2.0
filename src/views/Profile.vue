<template>
  <v-container>
    <v-row>
      <v-col lg="7" md="7" sm="6" cols="12">
        <v-card
          :disabled="loading"
          :loading="loading"
          class="mx-auto my-12 bg-text"
          max-width="100%"
        >
          <v-img height="300" src="../assets/img/me.jpg" cover></v-img>

          <v-card-item>
            <v-card-title>Thornthan Jomtharak</v-card-title>
            <v-card-text class="pb-0 text-secondary">
              <div class="text-subtitle-1 text-secondary">
                $ • Frontend Developer, UX/UI Designer
              </div>
            </v-card-text>
            <v-card-subtitle>
              <span class="me-1"
                >Hi, my name is Thornthan Jomtharak. My nickname is Brand. I
                graduated from Khon Kaen University, Information Technology
                Major, College of Computing. Specialize in Frontend Development
                and Design.</span
              >
            </v-card-subtitle>
          </v-card-item>

          <v-divider class="mx-4 mb-1"></v-divider>

          <v-card-item>
            <v-card-text>
                   
              <div class="text-secondary">
                <div class="mb-3">
                  <h6 class="mb-0">Software Engineer</h6>
                  <p class="mb-0 text-secondary">
                    INET (Internet Thailand PCL)
                  </p>
                  <p class="text-secondary">May 2024 - Present</p>
                </div>
                <div class="mb-3">
                  <h6 class="mb-0">UX / UI Designer</h6>
                  <p class="mb-0 text-secondary">Zenith Comp Co,. LTd.</p>
                  <p class="text-secondary">Nov 2023 - Apr 2024</p>
                </div>
                <div class="mb-3">
                  <h6 class="mb-0">Developer</h6>
                  <p class="mb-0 text-secondary">AXONS Corporate</p>
                  <p class="text-secondary">Jun 2023 - Oct 2023</p>
                </div>
                <div class="mb-3">
                  <h6 class="mb-0">Developer (Internship)</h6>
                  <p class="mb-0 text-secondary">Zenith Comp Co,. LTd.</p>
                  <p class="text-secondary">Nov 2022 - Mar 2024</p>
                </div>
              </div>
            </v-card-text>
          </v-card-item>

          <v-divider class="mx-4 mb-1"></v-divider>

          <v-card-title>Tonight's availability</v-card-title>

          <div class="px-4 mb-2">
            <v-chip-group
              v-model="selection"
              selected-class="bg-deep-purple-lighten-2"
            >
              <v-chip>5:30PM</v-chip>

              <v-chip>7:30PM</v-chip>

              <v-chip>8:00PM</v-chip>

              <v-chip>9:00PM</v-chip>
            </v-chip-group>
          </div>

          <v-card-actions>
            <v-btn
              color="deep-purple-lighten-2"
              text="Reserve"
              block
              border
              @click="reserve"
            ></v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col lg="5" md="5" sm="6" cols="12"> </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
  data: () => ({
      messages: [
        {
          from: 'Software Engineer',
          message: `INET (Internet Thailand PCL)`,
          time: 'May 2024 - Present',
          color: 'deep-purple-lighten-1',
        },
        {
          from: 'John Doe',
          message: 'Yeah, sure. Does 1:00pm work?',
          time: '10:37am',
          color: 'green',
        },
        {
          from: 'You',
          message: 'Did you still want to grab lunch today?',
          time: '9:47am',
          color: 'deep-purple-lighten-1',
        },
        {
          from: 'You',
          message: 'Did you still want to grab lunch today?',
          time: '9:47am',
          color: 'deep-purple-lighten-1',
        },
      ],
    }),
};
</script>

<style></style>
