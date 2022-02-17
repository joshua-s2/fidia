<template>
  <div>
    <Header class="mb-8" />
    <v-row class="my-md-5 px-md-5">
      <v-col cols="12" md="4" v-for="items in cardData" :key="items.id">
        <CardsActivity
          :cardTitle="items.cardTitle"
          :cardValue="items.cardValue"
          :percentageText="items.percentageText"
          :icon="items.icon"
          :iconColor="items.iconColor"
          :cardImage="items.cardImage"
      /></v-col>
    </v-row>
    <!-- <v-row>
      <v-col cols="6">
        <v-text-field
          v-model="search"
          prepend-icon="mdi-magnify"
          label="Search"
          class="secondary--text"
          hide-details
        ></v-text-field>
      </v-col>
    </v-row> -->
    <TableUsers class="mx-5 my-6" />
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      cardData: [
        {
          cardTitle: "Total customers",
          cardValue: "2,420",
          percentageText: "40%",
          icon: "arrow-up",
          iconColor: "success",
          cardImage: "/images/upward-chart.svg",
        },
        {
          cardTitle: "Members",
          cardValue: "1,210",
          percentageText: "10%",
          icon: "arrow-down",
          iconColor: "error",
          cardImage: "/images/downward-chart.svg",
        },
        {
          cardTitle: "Active now",
          cardValue: "316",
          percentageText: "20%",
          icon: "arrow-up",
          iconColor: "success",
          cardImage: "/images/upward-chart.svg",
        },
      ],
    };
  },
};
</script>
