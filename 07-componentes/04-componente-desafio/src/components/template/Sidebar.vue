<template>
  <v-navigation-drawer app>
    <SidebarHeader />

    <v-divider></v-divider>

    <v-list dense class="pt-0">
      <v-list-item v-for="item in itensMenu" :key="item.titulo">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.titulo }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import SidebarHeader from "./SidebarHeader.vue";

export default {
  components: {
    SidebarHeader,
  },
  data() {
    return {
      itensMenu: [
        { titulo: "Início", icon: "mdi-view-dashboard" },
        { titulo: "Sobre", icon: "mdi-forum" },
      ],
    };
  },
};
</script>
