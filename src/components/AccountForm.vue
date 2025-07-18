<template>
  <v-container>
    <div class="d-flex align-center ga-4 flex-wrap mb-10">
      <h2>Учетные записи</h2>
      <v-btn @click="accountStore.createNewRecord">Добавить запись</v-btn>
    </div>
    <AccountList></AccountList>
  </v-container>
</template>

<script setup lang="ts">
import { useAccountStore } from "../stores/accountStore";

const accountStore = useAccountStore();
</script>

<style scoped></style>
