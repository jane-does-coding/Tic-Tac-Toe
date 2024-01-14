<template>
  <nuxt-link to="/" class="flex text-black items-center p-3 w-min hover:bg-gray-200 text-xl gap-4 transition duration-300 rounded-full dark:hover:bg-dim-200 dark:text-white">
    <div class="w-7 h-7 text-dark">
      <slot name="icon"></slot>
    </div>

    <div :class="textClasses" class="hidden xl:block">
      <slot name="name" ></slot>
    </div>
  </nuxt-link>
</template>

<script>
import { defineProps, computed } from 'vue';

export default {
  props: {
    active: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const textClasses = computed(() => (props.active ? 'font-bold' : 'font-normal'));

    return {
      textClasses
    };
  }
};
</script>
