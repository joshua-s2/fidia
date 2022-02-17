<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      class="d-flex d-sm-none"
      right
    >
      <v-list v-for="(links, i) in navLinks" :key="i" router exact>
        <v-btn text class="text-capitalize">{{ links.linkText }}</v-btn>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      color="primary"
      elevate-on-scroll
      class="px-0 px-md-15"
      :clipped-left="clipped"
      fixed
      app
    >
      <v-container class="d-flex justify-space-between align-center">
        <div class="d-flex align-center">
          <img src="/images/Logo.svg" />
          <div
            :key="links.id"
            v-for="links in navLinks"
            class="d-none d-md-flex d--none"
          >
            <v-btn class="Gray700--text" text :class="links.class">{{
              links.linkText
            }}</v-btn>
          </div>
        </div>

        <v-spacer />
        <div class="d-none d-md-flex align-center justify-endn">
          <v-btn outlined text class="Gray700--text button mx-4">
            <v-icon left>mdi-lightning-bolt-outline</v-icon>Upgrade now</v-btn
          >
          <div class="mx-4 d-none d-md-flex">
            <v-btn text icon left><v-icon>mdi-cog-outline</v-icon></v-btn>
            <v-btn text icon left><v-icon> mdi-bell-outline</v-icon></v-btn>
          </div>
          <v-avatar class="d-none d-md-flex">
            <img src="/images/admin-avatar.svg" alt="avatar" />
          </v-avatar>
        </div>
      </v-container>

      <v-btn icon @click.stop="drawer = !drawer" class="d-flex d-sm-none">
        <img src="/images/menu-icon.svg" />
      </v-btn>
    </v-app-bar>

    <v-main>
      <NavTwo class="d-none d-md-flex" />
      <hr class="nav__two" />
      <Nuxt class="px-0 px-md-15" />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      navLinks: [
        {
          linkText: "Home",
        },
        {
          linkText: "Dashboard",
          class: "active",
        },
        {
          linkText: "Projects",
        },
        {
          linkText: "Tasks",
        },
        {
          linkText: "Reporting",
        },
        {
          linkText: "Users",
        },
      ],

      miniVariant: false,
      right: true,
      rightDrawer: false,
    };
  },
};
</script>
