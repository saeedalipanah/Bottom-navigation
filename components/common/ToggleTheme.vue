<template>
  <BaseSwitch
    v-model="isDarkTheme"
    class="toggle-btn"
    checked-icon="sun"
    un-checked-icon="moon"
    @on-change="onToggle"
  />
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import { ThemesStore } from "~/store";
import { themeE } from "~/types/themes";
const store = ThemesStore();
const isDarkTheme = ref<boolean>(false);
const onToggle = () => {
  store.toggleTheme(isDarkTheme.value);
};
onMounted(() => {
  isDarkTheme.value = store.currentTheme === themeE.Dark;
});
</script>
<style scoped lang="scss">
.toggle-btn {
  position: fixed;
  left: 1rem;
  top: 1rem;
}
</style>
