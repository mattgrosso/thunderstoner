<template>
  <div class="set-view">
    <p>This is a set view.</p>
    <button @click="generateSet({ heroes: 5, villages: 13, monsterValue: 10, thunderstoneBearers: 3 })">
      Generate
    </button>
  </div>
</template>

<script>
  import { cards } from "../assets/cards.js";
  // TODO: Instead of total monster levels, maybe we do total monster health.
  // TODO: Also, what about total cost of villages and/or heroes?
  // TODO: For that matter, what about total gold value vs total gold cost? That could be a good metric.

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
      this.generateSet({
        heroes: 5,
        villages: 13,
        monsterValue: 10,
        thunderstoneBearers: 3
      });
    },
    methods: {
      generateSet (config) {
        const set = {
          heroes: [],
          villages: [],
          monsters: [],
          thunderstoneBearers: []
        }
        // TODO: Make sure we don't get repeats
        // TODO: Add in a comparison to increase quality

        for (;set.heroes.length < config.heroes;) {
          const hero = this.getRandomHeroGroup();
          const duplicate = set.heroes.some((each) => each.heroGroup === hero.heroGroup);

          if (!duplicate) {
            set.heroes.push(hero);
            set.heroes.sort((one, two) => {
              if (one.heroGroup < two.heroGroup) {
                return -1;
              }

              if (one.heroGroup < two.heroGroup) {
                return 1;
              }

              if (one.heroGroup == two.heroGroup) {
                return 0;
              }
            });
          }
        }

        for (;set.villages.length < config.villages;) {
          const village = this.getRandomVillageCard();
          const duplicate = set.villages.some((each) => each.title === village.title);

          if (!duplicate) {
            set.villages.push(village);
            set.villages.sort((one, two) => {
              if (one.title < two.title) {
                return -1;
              }

              if (one.title < two.title) {
                return 1;
              }

              if (one.title == two.title) {
                return 0;
              }
            });
          }
        }

        for (;this.monsterStrength(set.monsters) < config.monsterValue;) {
          const monster = this.getRandomMonsterGroup();
          const duplicate = set.monsters.some((each) => each.monsterGroup === monster.monsterGroup);

          if (!duplicate) {
            set.monsters.push(monster);
            set.monsters.sort((one, two) => {
              if (one.monsterGroup < two.monsterGroup) {
                return -1;
              }

              if (one.monsterGroup < two.monsterGroup) {
                return 1;
              }

              if (one.monsterGroup == two.monsterGroup) {
                return 0;
              }
            });
          }
        }

        for (;set.thunderstoneBearers.length < config.thunderstoneBearers;) {
          const bearer = this.getRandomThunderstoneBearer();
          const duplicate = set.thunderstoneBearers.some((each) => each.title === bearer.title);

          if (!duplicate) {
            set.thunderstoneBearers.push(bearer);
            set.thunderstoneBearers.sort((one, two) => {
              if (one.title < two.title) {
                return -1;
              }

              if (one.title < two.title) {
                return 1;
              }

              if (one.title == two.title) {
                return 0;
              }
            });
          }
        }

        console.log("set: ", set);
      },
      isHero (deck) {
        return Boolean(deck.heroGroup);
      },
      isThunderstoneBearer (deck) {
        return deck.monsterGroup === "Thunderstone Bearer";
      },
      isMonster (deck) {
        return Boolean(deck.monsterGroup);
      },
      monsterStrength (array) {
        if (!array.length) {
          return 0;
        }
        const levels = array.map((monster) => monster.deck[0].level);

        return levels.reduce((acc, curr) => acc + curr, 0)
      },
      randomSeed (startPoint) {
        const cardBranches = Object.keys(cards);
        const branch = startPoint || cards[cardBranches[Math.floor(Math.random() * cardBranches.length)]];

        if (branch.heroGroup) {
          return {...branch, heroGroup: branch.level1.group};
        } else if (Array.isArray(branch) && branch[0].group && branch[0].group === "Thunderstone Bearer") {
          return {
            monsterGroup: branch[0].group,
            deck: this.randomValue(branch)
          };
        } else if (Array.isArray(branch) && branch[0].group) {
          return {
            monsterGroup: branch[0].group,
            deck: branch
          };
        } else if (Array.isArray(branch)) {
          return this.randomSeed(this.randomValue(branch));
        } else if (branch.title) {
          return branch;
        } else {
          const subBranch = branch[this.randomKey(branch)]
          return this.randomSeed(subBranch);
        }
      },
      getRandomHeroGroup () {
        const heroGroup = cards.heroes[this.randomKey(cards.heroes)];

        return {...heroGroup, heroGroup: heroGroup.level1.group};
      },
      getRandomVillageCard () {
        return this.randomValue(cards.villages);
      },
      getRandomMonsterGroup () {
        const monsterGroup = cards.monsters[this.randomKey(cards.monsters)];

        return {
          monsterGroup: monsterGroup[0].group,
          level: monsterGroup[0].level,
          deck: monsterGroup
        };
      },
      getRandomThunderstoneBearer () {
        return this.randomValue(cards.thunderstoneBearers);
      },
      keywordArrayFor (value) {
        let keywordArray = [];
        let stringArray = [];

        JSON.stringify(value).split("\"").filter((each) => {
          return each.match(/[a-z]|\s/) && each.length > 2
        }).forEach((element) => {
          if (element.split(" ").length > 1) {
            element.split(" ").forEach((each) => stringArray.push(each.toLowerCase()));
          } else {
            stringArray.push(element.toLowerCase());
          }
        })

        stringArray.forEach((string) => {
          if (keywordArray.indexOf(string) < 0) {
            keywordArray.push(string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,""));
          }
        })

        return keywordArray.sort();
      },
      keywordOverlapScore (array1, array2) {
        const commonWords = array1.filter((element) => array2.includes(element)).filter((value, index, self) => self.indexOf(value) === index);

        return commonWords.length;
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
