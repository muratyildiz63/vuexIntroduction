<template>
  <div class="container">
    <userAdd />
    <userList />
  </div>
</template>

<script>
import userAdd from "@/components/userAdd";
import userList from "@/components/userList";
export default {
  components: {
    userAdd,
    userList,
  },
  name: "App",
  created() {
    // console.log(this.$store.state.person);
    // console.log(this.$store.getters._woodItems);
    // console.log(this.$store.getters._activeUsers);
  },
};
</script>

