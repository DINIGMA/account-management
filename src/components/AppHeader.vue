<template>
  <v-app-bar app :height="100">
    <v-app-bar-title>
      <router-link to="/" class="logo text-primary">SaaSoft Test</router-link>
    </v-app-bar-title>

    <v-spacer></v-spacer>

    <!-- Темная тема -->
    <v-btn icon @click="toggleTheme">
      <v-icon>{{ isDark ? "mdi-weather-sunny" : "mdi-weather-night" }}</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script setup lang="ts">
import { useTheme } from "vuetify";

const theme = useTheme();

const isDark = computed(() => theme.global.current.value.dark);

const toggleTheme = () => {
  theme.global.name.value = isDark.value ? "light" : "dark";
  localStorage.setItem("theme", isDark.value ? "dark" : "light");
};
</script>

<style scoped lang="scss">
.logo {
  font-size: x-large;
  text-decoration: none;

  &:active {
    opacity: 0.7;
  }
}
</style>
