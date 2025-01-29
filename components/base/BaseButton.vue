<template>
  <button
    :type="type"
    :disabled="loading"
    class="base-button"
    @click="emit('click')"
  >
    <template v-if="loading"> Loading... </template>
    <template v-else>
      <slot>{{ content }}</slot>
    </template>
  </button>
</template>

<script setup lang="ts">
import type { PropType } from "vue";

defineProps({
  content: { type: String, default: "button-name" },
  type: {
    type: String as PropType<"button" | "submit" | "reset">,
    default: "button",
  },
  loading: { type: Boolean, default: false },
});

const emit = defineEmits(["click"]);
</script>
<style scoped lang="scss">
.base-button {
  cursor: pointer;
  background: none;
  border: none;
  outline: none;
  box-shadow: none;
}
</style>
