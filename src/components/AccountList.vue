<template>
  <!-- Заголовок -->
  <v-row class="mb-2 text-subtitle-1 font-weight-medium">
    <v-col cols="2">
      Метка
      <v-tooltip location="top">
        <template #activator="{ props }">
          <v-icon v-bind="props" color="info" size="18">mdi-help-circle</v-icon>
        </template>
        Введите в поле метки через знак <strong>;</strong> Например (Значение 1;
        Значение 2;)
      </v-tooltip>
    </v-col>
    <v-col cols="2">
      Тип
      <v-tooltip location="top">
        <template #activator="{ props }">
          <v-icon v-bind="props" color="info" size="18">mdi-help-circle</v-icon>
        </template>
        Выберите LDAP или Локальная
      </v-tooltip>
    </v-col>
    <v-col cols="3">Логин</v-col>
    <v-col cols="3">Пароль</v-col>
    <v-col cols="2">Удалить</v-col>
  </v-row>

  <!-- Список записей -->
  <AccountItem
    v-for="account in accounts"
    :key="account.id"
    :account="account"
    @remove="accountStore.deleteRecord"
  />
</template>

<script setup lang="ts">
import { useAccountStore } from "@/stores/accountStore";

const accountStore = useAccountStore();

const { accounts } = storeToRefs(accountStore);
</script>

<style></style>
