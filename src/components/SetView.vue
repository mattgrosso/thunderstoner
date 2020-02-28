<template>
  <div class="set-view">
    <p>This is a set view.</p>
    <button @click="generateSet(config)">
      Generate
    </button>
  </div>
</template>

<script>
  import { cards } from "../assets/cards.js";
  // TODO: Instead of total monster levels, maybe we do total monster health.
  // TODO: Also, what about total cost of villages and/or heroes?
  // TODO: For that matter, what about total gold value vs total gold cost? That could be a good metric.
  // TODO: Can we make all of the decks more uniform in thier data structure?

  const component = {
    data () {
      return {
        set: {
          monsters: [],
          heroes: [],
          villages: []
        },
        config: {
          heroes: 5,
          villages: 13,
          monsterValue: 10,
          thunderstoneBearers: 3,
          minScore: 30
        }
      };
    },
    mounted: function () {
      this.generateSet(this.config);
    },
    methods: {
      compareDeckToSet (deck, set) {
        const scores = [];
        let setArray = [];
        const setKeys = Object.keys(set);
        setKeys.forEach((key) => setArray = [...setArray, ...set[key]]);

        setArray.forEach((elem) => {
          scores.push(this.keywordOverlapScore(this.keywordArrayFor(elem), this.keywordArrayFor(deck)));
        })

        return (scores.reduce((accumulator, currentValue) => accumulator + currentValue, 0)) / scores.length;
      },
      generateSet (config) {
        const set = {
          heroes: [],
          villages: [],
          monsters: [],
          thunderstoneBearers: []
        }
        let keywords = [];
        // TODO: This compare method sucks. We need a better one.

        let count = 0;
        let badScores = {};

        for (;set.heroes.length < config.heroes;) {
          const hero = this.getRandomHeroGroup();
          const duplicate = set.heroes.some((each) => each.heroGroup === hero.heroGroup);
          let score = config.minScore;

          if (this.compareDeckToSet(hero, set)) {
            score = this.compareDeckToSet(hero, set);
          }

          if (!duplicate && score >= config.minScore) {
            count = 0;
            badScores = {};

            if (keywords.length) {
              keywords = this.keywordOverlaps(keywords, this.keywordArrayFor(hero));
            } else {
              keywords = this.keywordArrayFor(hero);
            }

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
          } else if (count > 1000) {
            console.error("Hero scores too low");
            console.log("Scores too low. Top 5 scores (excluding self) were: ", Object.keys(badScores).slice(-6).slice(0, 5));
            return;
          } else {
            count ++;
            if (badScores[score]) {
              badScores[score]++;
            } else {
              badScores[score] = 1;
            }
          }
        }

        for (;set.villages.length < config.villages;) {
          const village = this.getRandomVillageCard();
          const duplicate = set.villages.some((each) => each.title === village.title);
          let score = config.minScore;

          if (this.compareDeckToSet(village, set)) {
            score = this.compareDeckToSet(village, set);
          }

          if (!duplicate && score >= (config.minScore / 2)) {
            count = 0;
            badScores = {};

            if (keywords.length) {
              keywords = this.keywordOverlaps(keywords, this.keywordArrayFor(village));
            } else {
              keywords = this.keywordArrayFor(village);
            }

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
          } else if (count > 1000) {
            console.error("Village scores too low");
            console.log("Top 5 scores (excluding self) were: ", Object.keys(badScores).slice(-6).slice(0, 5));
            return;
          } else {
            count ++;
            if (badScores[score]) {
              badScores[score]++;
            } else {
              badScores[score] = 1;
            }
          }
        }

        for (;this.monsterStrength(set.monsters) < config.monsterValue;) {
          const monster = this.getRandomMonsterGroup();
          const duplicate = set.monsters.some((each) => each.monsterGroup === monster.monsterGroup);
          let score = config.minScore;

          if (this.compareDeckToSet(monster, set)) {
            score = this.compareDeckToSet(monster, set);
          }

          if (!duplicate && score >= (config.minScore / 2)) {
            count = 0;
            badScores = {};

            if (keywords.length) {
              keywords = this.keywordOverlaps(keywords, this.keywordArrayFor(monster));
            } else {
              keywords = this.keywordArrayFor(monster);
            }

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
          } else if (count > 1000) {
            console.error("Monster scores too low");
            console.log("Top 5 scores (excluding self) were: ", Object.keys(badScores).slice(-6).slice(0, 5));
            return;
          } else {
            count ++;
            if (badScores[score]) {
              badScores[score]++;
            } else {
              badScores[score] = 1;
            }
          }
        }

        for (;set.thunderstoneBearers.length < config.thunderstoneBearers;) {
          const bearer = this.getRandomThunderstoneBearer();
          const duplicate = set.thunderstoneBearers.some((each) => each.title === bearer.title);
          let score = config.minScore;

          if (this.compareDeckToSet(bearer, set)) {
            score = this.compareDeckToSet(bearer, set);
          }

          if (!duplicate && score >= (config.minScore / 3)) {
            count = 0;
            badScores = {};

            if (keywords.length) {
              keywords = this.keywordOverlaps(keywords, this.keywordArrayFor(bearer));
            } else {
              keywords = this.keywordArrayFor(bearer);
            }

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
          } else if (count > 1000) {
            console.error("Thunderstone Bearer scores too low");
            console.log("Top 5 scores (excluding self) were: ", Object.keys(badScores).slice(-6).slice(0, 5));
            return;
          } else {
            count ++;
            if (badScores[score]) {
              badScores[score]++;
            } else {
              badScores[score] = 1;
            }
          }
        }

        console.log("set: ", set);
        console.log("keywords: ", keywords);
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
      keywordOverlaps (array1, array2) {
        return array1.filter((element) => array2.includes(element)).filter((value, index, self) => self.indexOf(value) === index);
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
