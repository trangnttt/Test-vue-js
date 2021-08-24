<template>
  <div class="modal">
    <div class="modal__header" @click="closeModal">
      <h3 class="modal__title">{{ title }}</h3>
      <span class="modal__btn-close">&times;</span>
    </div>
    <div class="modal__content">
      <slot />
    </div>
    <div class="modal__footer">
      <button class="modal__btn" @click="onSubmit">{{ buttonName }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    title: {
      type: String,
      default: "Modal",
    },
    buttonName: {
      type: String,
      default: "Button",
    },
    closeModal: {
      type: Function,
    },
    onSubmit: {
      type: Function,
    },
  },
};
</script>

<style scoped lang="scss">
@import "./styles/style.scss";
</style>
