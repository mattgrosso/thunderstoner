<template>
  <div class="set-view">
    <p>This is a set view.</p>
    <button @click="generateSet">Generate</button>
  </div>
</template>

<script>
  import { cards } from "../assets/cards.js";

  const component = {
    props: {
      config: Object
    },
    data () {
      return {
        set: {
          monsters: [],
          heroes: [],
          villages: []
        }
      };
    },
    mounted: function () {
      this.generateSet();
    },
    methods: {
      generateSet () {
        console.log("this.randomSeedCard(cards): ", this.randomSeedCard(cards));
      },
      randomSeedCard (branch) {
        if (Array.isArray(branch)) {
          return this.randomSeedCard(this.randomValue(branch));
        } else if (branch.title) {
          return branch;
        } else {
          const subBranch = branch[this.randomKey(branch)]
          return this.randomSeedCard(subBranch);
        }
      },
      randomKey (object) {
        return this.randomValue(Object.keys(object));
      },
      randomValue (array) {
        return array[Math.floor(Math.random() * array.length)];
      },
      close () {
        this.$emit('close');
      }
    }
  };

  export default component;
</script>

<style lang="scss" scoped>

</style>
