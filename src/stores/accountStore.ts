import { defineStore } from "pinia";
import { type Account } from "../types/account";

export const useAccountStore = defineStore("accountStore", () => {
  const accounts = ref<Account[]>([]);

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
    saveToLocalStorage();
  };

  const updateRecord = (newAccount: Account) => {
    const index = accounts.value.findIndex(
      (account) => account.id === newAccount.id
    );
    if (index !== -1) {
      accounts.value[index] = { ...newAccount };
      saveToLocalStorage();
    }
  };

  const saveToLocalStorage = () => {
    const validAccounts = accounts.value.filter((acc) => !isEmptyRecord(acc));
    localStorage.setItem("accounts", JSON.stringify(validAccounts));
  };

  const loadFromLocalStorage = (): void => {
    const saved = localStorage.getItem("accounts");
    if (saved) {
      try {
        accounts.value = JSON.parse(saved);
      } catch (e) {
        console.error("Ошибка при загрузке из localStorage", e);
      }
    }
  };

  const isEmptyRecord = (account: Account): boolean => {
    const isLabelEmpty = account.label.length === 0;
    const isLoginEmpty = !account.login.trim();
    const isPasswordEmpty =
      account.type === "Локальная" && !account.password?.trim();

    return isLabelEmpty && isLoginEmpty && isPasswordEmpty;
  };

  return {
    accounts,
    createNewRecord,
    deleteRecord,
    updateRecord,
    loadFromLocalStorage,
  };
});
