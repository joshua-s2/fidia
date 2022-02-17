<template>
  <div class="button px-5 px-md-0">
    <v-card outlined>
      <div class="d-flex align-center justify-space-between my-0 pt-0">
        <v-card-title>{{ cardTitle }} </v-card-title>
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </div>
      <v-card-text class="mt-0 py-0 mb-2">
        <v-row align="center">
          <v-col cols="7">
            <div class="text--h2 secondary--text">
              {{ cardValue }}
            </div>
            <div class="text--subtitle-2 secondary--text">
              <span :class="`${iconColor}--text`">
                <v-icon :color="iconColor">mdi-{{ icon }}</v-icon>
                {{ percentageText }}</span
              >
              vs last month
            </div>
          </v-col>
          <v-col cols="5">
            <img :src="cardImage" width="100%" />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "Card",
  props: {
    cardTitle: "",
    cardValue: "",
    percentageText: "",
    icon: "",
    iconColor: "",
    cardImage: "",
  },
};
</script>
