<template>
  <div class="mt-12 d-flex px-5">
    <v-row>
      <v-col cols="12" md="8">
        <div class="text-h4 text-md-h3 secondary--text">
          Welcome back, Olivia
        </div>

        <div class="text-subtitle-1 Gray500--text">
          Track, manage and forecast your customers and orders.
        </div>
      </v-col>
      <v-col cols="12" md="4">
        <div class="d-flex justify-md-end">
          <v-btn depressed outlined text class="Gray700--text button mx-1">
            <img src="/images/upload-cloud.svg" class="mx-1" />
            Import</v-btn
          >
          <v-btn depressed class="button white--text mx-1" color="purpleColor">
            <v-icon left>mdi-plus </v-icon>Add</v-btn
          >
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "Header",
};
</script>
