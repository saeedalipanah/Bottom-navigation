<template>
  <nav class="sidebar">
    <slot name="header"></slot>
    <slot name="default" />
    <slot name="footer">
      <ToggleSidebar :is-sidebar-expanded="isExpanded" @click="toggleSidebar" />
    </slot>
  </nav>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import ToggleSidebar from "~/components/containers/sidebar/ToggleSidebar.vue";

const emits = defineEmits(["update:sidebar-width"]);
const props = defineProps({
  sidebarWidth: {
    type: Number,
    default: 14,
  },
});

const syncSidebarWidth = computed({
  get() {
    return props.sidebarWidth;
  },
  set(newValue) {
    emits("update:sidebar-width", newValue);
  },
});

const isExpanded = ref(true);
const toggleSidebar = () => {
  isExpanded.value = !isExpanded.value;
  isExpanded.value
    ? (syncSidebarWidth.value = 16)
    : (syncSidebarWidth.value = 4.1);
};
provide(
  "is-sidebar-expanded",
  computed(() => isExpanded.value)
);
</script>

<style scoped lang="scss">
.sidebar {
  position: fixed;
  right: 0;
  top: 0;
  width: var(--sidebar-width);
  height: 100vh;
  background-color: var(--background-lighten-color);
  padding: 0.5rem;
  box-shadow: -2px 0 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.2s ease;
  border-radius: 50px 0 0 50px;
  @include md {
    top: auto;
    bottom: 0;
    right: 0;
    width: 100%;
    padding: 0;
    height: auto;
    display: flex;
    justify-content: center;
    box-shadow: 0 -2px 6px rgba(0, 0, 0, 0.1);
    border-radius: 50px 50px 0 0;
  }
}
</style>
