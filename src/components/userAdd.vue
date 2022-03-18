<template>
  <div>
      <div> {{ inputAdd }}</div> 
    <input type="text" placeholder="Ekle" v-model="inputAdd" />
    <button @click="additems">Ekle</button>

  </div>
</template>


<script>
export default {
  data() {
    return {
      inputAdd: "",
    };
  },
  methods: {
    additems() {
      const Onlist = {
        id: new Date().getTime(),
        title: this.inputAdd,
        type: "Mobilya",
      };

    //  this.$store.commit("NewItems", Onlist);
      this.$store.dispatch("NewItems", Onlist);

      // this.$store.state.itemList.push({
      //   id: 55,
      //   title: "Odun",
      //   type: "Mobilya",
      // });
    },
  },
};
</script>