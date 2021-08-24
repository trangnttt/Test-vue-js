<template>
  <div>
    <modal
      title="Add new"
      button-name="Add"
      :closeModal="closeModal"
      :onSubmit="onSubmit"
    >
      <p>Input the meal name will count</p>
      <input
        class="ip-text"
        type="text"
        placeholder="Meal name"
        v-model="mealName"
      />
      <span class="is-error">{{ error }}</span>
    </modal>
  </div>
</template>

<script>
import Modal from "@/components/Modal/index.vue";
import { getAll } from "@/services/Meal.js";

export default {
  name: "CreatePost",
  components: {
    Modal,
  },
  data() {
    return {
      mealName: "",
      error: "",
    };
  },
  computed: {
    getMeal() {
      return this.$store.state.meals;
    },

    getExistMeal() {
      const existMeal = this.$store.state.meals;
      return existMeal.some((o) => o.name === this.mealName);
    },
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
    onSubmit() {
      if (this.mealName != "" && !this.getExistMeal) {
        getAll(this.mealName)
          .then((res) => {
            const { meals } = res.data;
            this.meals = meals;
            this.$store.dispatch("addMeal", {
              name: this.mealName,
              count: meals.length,
            });
          })
          .catch(() => {
            this.error = "Meal name is not in database !!!";
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
