<template>
  <div class="preference-form">
    <p>Make some choices.</p>
    <input v-model="config.heroes" type="text">
    <button @click="generateSet">Generate Set</button>
  </div>
</template>

<script>
  const component = {
   data () {
     return {
       config: {
         heroes: ""
       }
     };
   },
    methods: {
      generateSet () {
        this.$emit("generate-set", this.config);
      }
    }
  };

  export default component;
</script>

<style lang="scss" scoped>

</style>
