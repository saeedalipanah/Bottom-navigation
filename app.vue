<template>
  <main class="main" :style="setSidebarVariables">
    <Sidebar v-model:sidebar-width="sidebarWidth">
      <NavigationItems />
    </Sidebar>
    <NuxtPage />
  </main>
</template>
<script setup lang="ts">
import { ThemesStore } from "~/store";
import { themeE } from "./types/themes";
import Sidebar from "./components/containers/sidebar/Sidebar.vue";
import NavigationItems from "./components/containers/sidebar/NavigationItems.vue";

const sidebarWidth = ref(16);
const setSidebarVariables = computed(() => ({
  "--sidebar-width": sidebarWidth.value + "rem",
}));
const themeStore = ThemesStore();
onBeforeMount(() => {
  const savedTheme = localStorage.getItem("theme");
  themeStore.setTheme((savedTheme as themeE) ?? themeE.Light);
});
</script>
