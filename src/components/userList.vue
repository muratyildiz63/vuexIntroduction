<template>
  <div>
    <table border="1">
      <tr v-for="p in woodItems" :key="p.id" class="box">
        <td>{{ p.id }}</td>
        <td>{{ p.title }}</td>
        <td>{{ p.type }}</td>
      </tr>
    </table>
  
  </div>
</template>


<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      woodItems: "_woodItems",
      activeUsers: "_activeUsers",
    }),

    // ...mapGetters(["_woodItems","_activeUsers"])
  },
};
</script>