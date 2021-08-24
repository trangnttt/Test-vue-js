<template>
  <div>
    <modal
      title="Delete meal"
      button-name="Delete"
      :onSubmit="onDeleteSuccess"
      :closeModal="closeModal"
    >
      <p>Are you want to delete "{{ item }}" width the count is .</p>
    </modal>
  </div>
</template>

<script>
import Modal from "@/components/Modal/index.vue";

export default {
  name: "DeleteMeal",
  components: {
    Modal,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    item: {
      type: Object,
      required: true,
    },
    afterSuccess: {
      type: Function,
      required: true,
    },
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
    onDeleteSuccess() {
      this.afterSuccess();
      this.closeModal();
    },
  },
};
</script>
