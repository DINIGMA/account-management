<template>
  <v-form ref="formRef" v-model="valid" lazy-validation>
    <v-row class="mb-3">
      <v-col cols="2">
        <v-text-field
          label="Метка"
          v-model="labelString"
          density="compact"
          :rules="labelRules"
          @blur="validateAndSave"
        ></v-text-field>
      </v-col>
      <v-col cols="2"
        ><v-select
          label="Тип"
          v-model="local.type"
          :items="types"
          density="compact"
          @update:model-value="validateAndSave"
        ></v-select
      ></v-col>
      <v-col :cols="local.type === 'Локальная' ? 3 : 6">
        <v-text-field
          label="Логин"
          density="compact"
          v-model="local.login"
          :rules="loginRules"
          @blur="validateAndSave"
          required
        ></v-text-field
      ></v-col>
      <v-col cols="3" v-if="local.type === 'Локальная'"
        ><v-text-field
          label="Пароль"
          density="compact"
          v-model="local.password"
          type="password"
          :rules="passwordRules"
          @blur="validateAndSave"
        ></v-text-field
      ></v-col>
      <v-col cols="2"
        ><v-icon
          size="36"
          class="delete-icon cursor-pointer"
          @click="$emit('remove', local.id)"
        >
          mdi-delete-empty-outline
        </v-icon></v-col
      >
    </v-row>
  </v-form>
</template>

<script setup lang="ts">
import { type Account, type LabelTag } from "@/types/account";

const props = defineProps<{
  account: Account;
}>();

const emit = defineEmits(["remove", "update"]);

const local = ref<Account>(JSON.parse(JSON.stringify(props.account)));

const formRef = ref();
const valid = ref(false);

const labelString = ref(
  local.value.label.map((l: LabelTag) => l.text).join(";")
);

const types = ["LDAP", "Локальная"];

const labelRules = ref([
  (v: string) => !v || v.length <= 50 || "Максимум 50 символов",
]);

const loginRules = ref([
  (v: string) => !!v || "Введите логин",
  (v: string) => (v && v.length <= 100) || "Слишком длинный логин",
]);

const passwordRules = [
  (v: string) => {
    if (local.value.type !== "Локальная") return true;
    return !!v || "Введите пароль";
  },
  (v: string) => {
    if (local.value.type !== "Локальная") return true;
    return v.length <= 100 || "Максимум 100 символов";
  },
];

const validateAndSave = async () => {
  await formRef.value.validate();
  if (valid.value) {
    local.value.label = labelString.value
      .split(";")
      .map((tag) => ({ text: tag.trim() }))
      .filter((tag) => tag.text.length > 0);
    if (local.value.type === "LDAP") {
      local.value.password = null;
    }
    emit("update", local.value);
  }
};
</script>

<style scoped lang="scss">
.delete-icon {
  margin-left: 10px;
  transition: all 0.5s;
  &:hover {
    opacity: 0.7;
  }
}
</style>

<!-- Доделать валидацию, чтобы не было сохранения при LDAP -->
