<template>
  <div class="nav__two px-0 px-md-15">
    <v-app-bar outlined class="primary" elevation="0">
      <v-row class="align-center">
        <v-col cols="7" class="">
          <div class="d-flex">
            <div :key="links.id" v-for="links in bottomNav">
              <v-btn class="Gray700--text" :class="links.class" text>{{
                links.linkText
              }}</v-btn>
            </div>
          </div>
        </v-col>

        <v-col cols="5" align="top" class="d-flex justify-start">
          <div class="justify-end">
            <v-text-field
              outlined
              dense
              single-line
              hide-details
              label="Search"
              color="accent"
              class="search-field d-non"
              prepend-inner-icon="mdi-magnify"
            />
          </div>
        </v-col>
      </v-row>

      <!-- <v-row class="align-center justify-end align-end"> </v-row> -->
    </v-app-bar>
  </div>
</template>
<script>
export default {
  name: "NavTwo",
  data() {
    return {
      bottomNav: [
        {
          linkText: "Overview",
          class: "active",
        },
        {
          linkText: "Notifications",
        },
        {
          linkText: "Analytics",
        },
        {
          linkText: "Saved reports",
        },
        {
          linkText: "Trade history",
        },
        {
          linkText: "User reports",
        },
      ],
    };
  },
};
</script>
