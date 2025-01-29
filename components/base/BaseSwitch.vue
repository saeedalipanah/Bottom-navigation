<template>
  <div class="switch-container">
    <label :for="id" class="switch-label">
      <input
        type="checkbox"
        :id="id"
        v-model="isChecked"
        class="switch-input"
        @change="emits('on-change')"
      />
      <span class="switch-slider">
        <span class="icon checked" v-if="isChecked">
          <i :class="`bx bx-${checkedIcon}`"></i>
        </span>
        <span class="icon unchecked" v-else>
          <i :class="`bx bx-${unCheckedIcon}`"></i>
        </span>
      </span>
    </label>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  id: {
    type: String,
    default: "switch-id",
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
  checkedIcon: {
    type: String,
    required: false,
  },
  unCheckedIcon: {
    type: String,
    required: false,
  },
});
const emits = defineEmits(["update:model-value", "on-change"]);

const isChecked = computed({
  get() {
    return props.modelValue;
  },
  set(newValue) {
    emits("update:model-value", newValue);
  },
});
</script>

<style lang="scss">
.switch-container {
  display: inline-block;
}

.switch-label {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 30px;
}

.switch-input {
  opacity: 0;
  width: 0;
  height: 0;
}

.switch-slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: 0.4s;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5px;

  .icon {
    font-size: 18px;
    transition: 0.4s;
    margin-top: 2px;
    &.unchecked {
      margin-left: auto;
      color: var(--text-muted-color);
    }
    &.checked {
      color: var(--text-color);
      margin-right: auto;
    }
  }
}

.switch-slider:before {
  position: absolute;
  content: "";
  height: 22px;
  width: 22px;
  border-radius: 50%;
  left: 4px;
  bottom: 4px;
  background-color: var(--primary-color);
  transition: 0.4s;
}

.switch-input:checked + .switch-slider {
  background-color: var(--text-muted-color);
}

.switch-input:checked + .switch-slider:before {
  transform: translateX(30px);
}

.switch-input:checked + .switch-slider .icon {
  display: block;
}

.switch-input:not(:checked) + .switch-slider .icon {
  display: block;
}

.switch-input:not(:checked) + .switch-slider {
  background-color: var(--text-color);
}
</style>
