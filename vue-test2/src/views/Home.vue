<template>
  <div class="home">
    <button class="btn" @click="createNewMeal()">Add new</button>
    <Table
      @editIem="updateMeal"
      @deleteMeal="deleteMealModal"
      :items="getMeal"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import CreateNewMealModal from "@/components/ModalCRUD/CreateMeal/index.vue";
import UpdateMealModal from "@/components/ModalCRUD/EditMeal/index.vue";
import DeleteMealModal from "@/components/ModalCRUD/DeleteMeal/index.vue";

import Table from "@/components/Table/index.vue";

export default {
  components: {
    Table,
  },
  name: "Home",
  data() {
    return {
      meals: [],
    };
  },
  computed: {
    getMeal() {
      return this.$store.state.meals;
    },
  },
  methods: {
    createNewMeal() {
      this.$modal.show(CreateNewMealModal, {}, { width: 300, height: "auto" });
    },
    updateMeal(item) {
      this.$modal.show(
        UpdateMealModal,
        { item: item },
        { width: 300, height: "auto" },
        { "before-close": () => {} }
      );
    },
    deleteMealModal(mealName) {
      this.$modal.show(
        DeleteMealModal,
        {
          name: mealName,
          afterSuccess: () => this.$store.dispatch("deleteMeal", mealName),
        },
        { width: 300, height: "auto" }
      );
    },
  },
};
</script>

<style scoped>
.btn {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-decoration: none;
  display: block;
  font-size: 16px;
  margin-left: auto;
  margin-bottom: 20px;
  cursor: pointer;
}
</style>
