<template>
  <table class="table">
    <tr>
      <th>No</th>
      <th>Meal</th>
      <th>Count</th>
      <th></th>
    </tr>
    <template v-if="items.length > 0">
      <tr v-for="(item, idx) in items" :key="idx">
        <td>{{ idx + 1 }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.count }}</td>
        <td>
          <button @click="edit(item)">Edit</button> |
          <button @click="deleteMeal(item.name)">Delete</button>
        </td>
      </tr>
    </template>
  </table>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
    },
  },
  methods: {
    edit(item) {
      this.$emit("editIem", item);
    },
    deleteMeal(name) {
      this.$emit("deleteMeal", name);
    },
  },
};
</script>

<style scoped lang="scss">
@import "./styles/style.scss";
</style>
