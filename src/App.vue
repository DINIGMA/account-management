<template>
  <v-app>
    <v-layout>
      <!-- Header -->
      <AppHeader></AppHeader>
      <!-- Основной контент -->
      <v-main>
        <router-view></router-view>
      </v-main>
    </v-layout>
  </v-app>
</template>

<script lang="ts" setup>
//
</script>

<style>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
