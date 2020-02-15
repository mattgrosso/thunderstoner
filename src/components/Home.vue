<template>
  <div class="preference-form">
    <p>Make some choices.</p>
    <input v-model="config.input" type="text">
    <button @click="generateSet">Generate Set</button>
  </div>
</template>

<script>
  const component = {
   data () {
     return {
       config: {
         input: ""
       }
     };
   },
    methods: {
      generateSet () {
        console.log("this.config: ", this.config);
        this.$emit("generate-set", this.config);
      }
    }
  };

  export default component;
</script>

<style lang="scss" scoped>

</style>
