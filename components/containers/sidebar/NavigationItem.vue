<template>
  <NuxtLink
    :to="{ name: item.name }"
    :class="`navigation-item ${isSidebarExpanded ? 'expanded' : 'closed'}`"
    @click="selectNavItem"
  >
    <i :class="`nav-item-icon bx bx-${item.icon}`"></i>
    <span class="nav-item-text">{{ item.name }}</span>
  </NuxtLink>
</template>
<script setup lang="ts">
import type { PropType } from "vue";
const isSidebarExpanded = inject("is-sidebar-expanded");
const props = defineProps({
  item: {
    type: Object as PropType<any>,
    required: true,
  },
});
const selectNavItem = () => {
  console.log("selected name:", props.item.name);
};
</script>
<style scoped lang="scss">
.navigation-item {
  background-color: var(--background-color);
  color: var(--text-muted-color);
  margin: 0.8rem 0;
  padding: 0.8rem 0.5rem 0.8rem 0.8rem;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease;
  .nav-item-icon {
    font-size: 2rem;
    margin-inline-end: 2rem;
  }
  @include md {
    width: 100%;
    flex-direction: column;
    align-items: center;
    border-radius: 0;
    background-color: transparent;
    margin-bottom: 1px;
    padding-bottom: 1.5rem;
    border-bottom: 0.6rem solid transparent;
    .nav-item-icon {
      margin: 0;
    }
  }

  &.router-link-active,
  &.router-link-exact-active {
    color: var(--primary-color);
    border-right: 6px solid var(--primary-color);
    &.closed {
      border-right: unset;
    }
    @include md {
      border: none;
      box-shadow: none;
      background-color: transparent;
      font-weight: bolder;
      border-bottom: 0.6rem solid var(--primary-color);
      color: var(--primary-color);
    }
  }
}
</style>
