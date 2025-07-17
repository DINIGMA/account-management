<template>
  <v-app-bar app :height="100">
    <!-- Логотип -->
    <v-app-bar-title>
      <router-link to="/" class="logo text-default d-flex align-sm-center ga-1"
        >Account Management
        <v-icon>{{ "mdi-account-wrench-outline" }}</v-icon></router-link
      >
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

// Функция смены темы
const toggleTheme = () => {
  const newTheme = isDark.value ? "light" : "dark";
  theme.toggle();
  localStorage.setItem("theme", newTheme);
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
