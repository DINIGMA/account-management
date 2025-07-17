import { defineStore } from "pinia";
import { type Account } from "@/types/account";

export const useAccountStore = defineStore("accountStore", () => {
  const accounts = ref<Account[]>([
    {
      id: 1,
      label: [{ text: "XXXXX11111" }, { text: "XXXXX22222" }],
      type: "Локальная",
      login: "Alex",
      password: "123456789",
    },
  ]);

  const createNewRecord = () => {
    const newId = Date.now() + Math.floor(Math.random() * 1000);
    accounts.value.push({
      id: newId,
      label: [],
      type: "Локальная",
      login: "",
      password: "",
    });
  };

  const deleteRecord = (id: number) => {
    accounts.value = accounts.value.filter((account) => account.id != id);
  };

  return {
    accounts,
    createNewRecord,
    deleteRecord,
  };
});
