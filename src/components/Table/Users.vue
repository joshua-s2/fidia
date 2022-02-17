<template>
  <v-data-table
    :headers="headers"
    :items="companies"
    :single-select="singleSelect"
    v-model="selected"
    item-key="name"
    show-select
    sort-by="calories"
    class="elevation-1"
    :search="search"
  >
    <template v-slot:item.company="{ item }">
      <v-row class="align-center">
        <v-col cols="3">
          <img :src="item.logo" height="40" alt="" />
        </v-col>
        <div class="d-block align-center">
          <div>
            {{ item.company }}
          </div>
          <a class="Gray500--text">{{ item.companyUrl }}</a>
        </div>
      </v-row>
    </template>
    <template v-slot:item.license="{ item }">
      <v-col cols="12">
        <v-progress-linear
          rounded
          background-opacity="0.3"
          :background-color="`${item.valueColor}`"
          :color="`${item.valueBg}`"
          height="8"
          :value="item.value"
        ></v-progress-linear>
      </v-col>
    </template>
    <template v-slot:item.status="{ item }">
      <v-chip :color="`${item.statusColor} ${item.statusText}`">
        {{ item.status }}
      </v-chip>
    </template>
    <template v-slot:item.user="{ item }">
      <img :src="item.user" height="40" alt="" class="my-2" />
    </template>
    <template v-slot:top>
      <v-dialog v-model="dialogDelete" max-width="500px">
        <v-card>
          <v-card-title class="text-h5"
            >Are you sure you want to delete this item?</v-card-title
          >
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="closeDelete"
              >Cancel</v-btn
            >
            <v-btn color="blue darken-1" text @click="deleteItemConfirm"
              >OK</v-btn
            >
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </template>
    <template v-slot:item.actions="{ item }">
      <a>
        <img @click="deleteItem(item)" src="/images/delete-icon.svg" alt="" />
      </a>
      <a>
        <img @click="editItem(item)" src="/images/edit-icon.svg" alt="" />
      </a>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize"> Reset </v-btn>
    </template>
  </v-data-table>
</template>
<script>
export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    singleSelect: false,
    selected: [],
    search: "",
    headers: [
      { text: "Company", value: "company" },
      { text: "License use", value: "license", sortable: false },
      { text: "Status", value: "status", sortable: false },
      { text: "Users", value: "user", sortable: false },
      { text: "About", value: "about", sortable: false },
      { value: "actions", sortable: false },
    ],
    companies: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      company: 0,
      companyUrl: "",
      fat: 0,
      carbs: 0,
      protein: 0,
    },
    defaultItem: {
      name: "",
      company: "",
      companyUrl: "",
      fat: 0,
      carbs: 0,
      protein: 0,
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.companies = [
        {
          company: "Catalog",
          companyUrl: "catalogapp.io",
          logo: "/images/catalog-logo.svg",
          status: "Customer",
          user: "/images/users1.svg",
          about: "Content curating app",
          statusColor: "lightGreen",
          statusText: "darkGreen--text",
          value: "78",
          valueColor: "Purple600",
          valueBg: "Purple50",
        },
        {
          company: "Circooles",
          companyUrl: "getcirooles.com",
          logo: "/images/circloes-logo.svg",
          status: "Churned",
          user: "/images/users2.svg",
          about: "Design software",
          value: "78",
        },
        {
          company: "Command+R",
          companyUrl: "cmdr.ai",
          logo: "/images/commandR-logo.svg",
          status: "Customer",
          user: "/images/users3.svg",
          about: "Data prediction",
          statusColor: "lightGreen",
          statusText: "darkGreen--text",
          value: "78",
        },
        {
          company: "Hourglass",
          companyUrl: "hourglass.app",
          logo: "/images/hour-logo.svg",
          status: "Customer",
          user: "/images/users8.svg",
          about: "Productivity app",
          statusColor: "lightGreen",
          statusText: "darkGreen--text",
          value: "78",
        },
        {
          company: "Layers",
          companyUrl: "getlayers.io",
          logo: "/images/layers-logo.svg",
          status: "Churned",
          user: "/images/users3.svg",
          about: "Web app integrations",
          value: "78",
        },
        {
          company: "Quotient",
          companyUrl: "getlayers.io",
          logo: "/images/quotient-logo.svg",
          status: "Customer",
          user: "/images/users4.svg",
          about: "Sales CRM",
          statusColor: "lightGreen",
          statusText: "darkGreen--text",
          value: "78",
        },
        {
          company: "Sisyphus",
          companyUrl: "sisyphus.com",
          logo: "/images/sisyphus-logo.svg",
          status: "Customer",
          user: "/images/users5.svg",
          about: "Automation and workflow",
          statusColor: "lightGreen",
          statusText: "darkGreen--text",
        },
      ];
    },

    editItem(item) {
      this.editedIndex = this.companies.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.companies.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.companies.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.companies[this.editedIndex], this.editedItem);
      } else {
        this.companies.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>
