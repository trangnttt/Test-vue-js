<template>
  <div>
    <modal
      title="Edit meal"
      button-name="Update"
      :onSubmit="onSubmit"
      :closeModal="closeModal"
    >
      <input class="ip-text" type="text" v-model="item.name" />
      <span class="is-error">{{ error }}</span>
      <p>This count is {{ item.count }}.</p>
    </modal>
  </div>
</template>

<script>
import Modal from "@/components/Modal/index.vue";
import { getAll } from "@/services/Meal.js";
export default {
  name: "EditMeal",
  components: {
    Modal,
  },
  data() {
    return {
      error: "",
    };
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
    onSubmit() {
      if (this.item.name) {
        getAll(this.item.name)
          .then((res) => {
            const { meals } = res.data;
            this.meals = meals;
            if (this.meals) {
              this.$store.dispatch("updateMeal", {
                name: this.item.name,
                count: this.meals.length,
              });
            } else {
              this.error = "Meal name is not in database !!!";
            }
          })
          .finally(() => {
            if (this.meals) {
              this.closeModal();
            }
          });
      } else {
        this.error = "Meal name is required !!!";
      }
    },
  },
};
</script>
