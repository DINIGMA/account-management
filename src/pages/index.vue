<template>
  <AccountForm />
</template>

<script lang="ts" setup>
import { useAccountStore } from "../stores/accountStore";

const accountStore = useAccountStore();

onMounted(() => {
  accountStore.loadFromLocalStorage();
});
</script>
