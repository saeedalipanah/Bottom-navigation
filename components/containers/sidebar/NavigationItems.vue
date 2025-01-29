<template>
  <div class="sidebar-content">
    <ul class="nav-items">
      <li
        v-for="(navigationItem, i) in navigationItems"
        :key="i"
        style="width: 100%"
      >
        <NavigationItem :item="navigationItem" />
      </li>
    </ul>
    <div>
      <ToggleTheme />
    </div>
  </div>
</template>
<script setup lang="ts">
import NavigationItem from "~/components/containers/sidebar/NavigationItem.vue";
import ToggleTheme from "~/components/common/ToggleTheme.vue";
const navigationItems = [
  { name: "Home", icon: "home" },
  { name: "Profile", icon: "user" },
  { name: "Cart", icon: "cart" },
  { name: "Wallet", icon: "wallet" },
  { name: "Search", icon: "search" },
];
</script>
<style lang="scss">
.sidebar-content {
  margin-top: 4rem;
  @include md {
    margin-top: 0;
    width: 100%;
  }
}
.nav-items {
  @include md {
    display: flex;
    width: 100%;
  }
}
</style>
