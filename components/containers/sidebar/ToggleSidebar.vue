<template>
  <BaseButton class="toggle-sidebar-btn" @click="emits('click')"
    ><i :class="`bx bx-chevron-${isSidebarExpanded ? 'right' : 'left'}`"></i
  ></BaseButton>
</template>

<script setup lang="ts">
defineProps({
  isSidebarExpanded: {
    type: Boolean,
    default: false,
  },
});
const emits = defineEmits(["click"]);
</script>
<style scoped lang="scss">
.toggle-sidebar-btn {
  position: absolute;
  bottom: 10%;
  left: -1px;
  font-size: 2rem;
  @include md {
    display: none;
  }
  i {
    color: var(--primary-color);
    border-width: 3px 3px 3px 0;
    border-style: solid;
    border-color: var(--text-muted-color);
    margin-top: 5px;
    border-radius: 0 5px 5px 0;
  }
}
</style>
