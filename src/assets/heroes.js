export const heroes = {
  heroes: {
    aeon: {
      heroGroup: true,
      level1: {
        title: "Lesser Aeon Priest",
        group: "Aeon",
        traits: [
          "Human",
          "Thief",
          "Cleric",
          "Level 1"
        ],
        level: 1,
        goldValue: 0,
        strength: 3,
        cost: 6,
        attacks: [
          "Physical Attack +1"
        ],
        villages: [
          "Destroy 1 card."
        ],
        xp: 2,
        points: 0,
        set: "Numenera"
      },
      level2: {
        title: "Aeon Priest",
        group: "Aeon",
        traits: [
          "Human",
          "Thief",
          "Cleric",
          "Level 2"
        ],
        level: 2,
        goldValue: 1,
        strength: 4,
        cost: 10,
        attacks: [
          "Physical Attack +2"
        ],
        villages: [
          "Destroy 1 card. You may place 1 card of up to 2 higher cost from the village into your discard pile."
        ],
        dungeons: [
          "Destroy 1 card. You may place 1 card of up to 2 higher cost from the village into your discard pile."
        ],
        xp: 3,
        points: 0,
        set: "Numenera"
      },
      level3: {
        title: "Greater Aeon Priest",
        group: "Aeon",
        traits: [
          "Human",
          "Thief",
          "Cleric",
          "Level 3"
        ],
        level: 3,
        goldValue: 1,
        strength: 4,
        cost: 12,
        attacks: [
          "Physical Attack +3"
        ],
        dungeons: [
          "Destroy 1 card. You may place 1 card of up to 2 higher cost from the village into your hand."
        ],
        points: 2,
        set: "Numenera"
      }
    },
    aird: {
      heroGroup: true,
      level1: {
        title: "Aird Cutpurse",
        group: "Aird",
        traits: [
          "Human",
          "Thief",
          "Level 1"
        ],
        level: 1,
        goldValue: 0,
        strength: 3,
        cost: 5,
        attacks: [
          "Physical Attack +1"
        ],
        villages: [
          "All players discard the top card of their deck. Gain the gold value of one discarded card."
        ],
        xp: 2,
        points: 0,
        set: "ToR"
      },
      level2: {
        title: "Aird Honeytongue",
        group: "Aird",
        traits: [
          "Human",
          "Thief",
          "Level 2"
        ],
        level: 2,
        goldValue: 2,
        strength: 3,
        cost: 10,
        attacks: [
          "Physical Attack +2"
        ],
        dungeons: [
          "All players discard the top card of their deck. Gain the gold value of one discarded card. Gain Physical Attack equal to the gold value of one discarded card."
        ],
        xp: 3,
        points: 0,
        set: "ToR"
      },
      level3: {
        title: "Aird Seductress",
        group: "Aird",
        traits: [
          "Human",
          "Thief",
          "Level 3"
        ],
        level: 3,
        goldValue: 3,
        strength: 4,
        cost: 13,
        attacks: [
          "Physical Attack +3"
        ],
        dungeons: [
          "All other players show their hands. Add one revealed hero to your hand. Return that hero to its owner's discard pile after the combat (even if it was destroyed)."
        ],
        points: 2,
        set: "ToR"
      }
    },
    armsman: {
      heroGroup: true,
      level1: {
        title: "Armsman Bastion",
        group: "Armsman",
        traits: [
          "Dwarf",
          "Fighter",
          "Level 1"
        ],
        level: 1,
        goldValue: 0,
        strength: 6,
        cost: 7,
        attacks: [
          "Physical Attack +2"
        ],
        xp: 2,
        points: 0,
        set: "RoC"
      },
      level2: {
        title: "Armsman Stronghold",
        group: "Armsman",
        traits: [
          "Dwarf",
          "Fighter",
          "Level 2"
        ],
        level: 2,
        goldValue: 0,
        strength: 6,
        cost: 10,
        attacks: [
          "Physical Attack +3"
        ],
        dungeons: [
          "Buy 1 weapon and place it into your hand."
        ],
        aftermaths: [
          "Destroy 1 weapon."
        ],
        xp: 3,
        points: 0,
        set: "RoC"
      },
      level3: {
        title: "Armsman Citadel",
        group: "Armsman",
        traits: [
          "Dwarf",
          "Fighter",
          "Level 3"
        ],
        level: 3,
        goldValue: 0,
        strength: 8,
        cost: 13,
        attacks: [
          "Physical Attack +4"
        ],
        dungeons: [
          "Place 1 weapon from a village stack into your hand."
        ],
        spoils: [
          "Destroy 1 weapon."
        ],
        points: 2,
        set: "RoC"
      }
    },
    bhoidwood: {
      heroGroup: true,
      level1: {
        title: "Bhoidwood Hunter",
        group: "Bhoidwood",
        traits: [
          "Elf",
          "Ranger",
          "Level 1"
        ],
        level: 1,
        goldValue: -1,
        strength: 5,
        cost: 6,
        attacks: [
          "Physical Attack +2"
        ],
        xp: 2,
        points: 0,
        set: "ToR"
      },
      level2: {
        title: "Bhoidwood Stalker",
        group: "Bhoidwood",
        traits: [
          "Elf",
          "Ranger",
          "Level 2"
        ],
        level: 2,
        goldValue: -2,
        strength: 5,
        cost: 9,
        attacks: [
          "Physical Attack +4"
        ],
        dungeons: [
          "Switch the positions of two adjacent monsters in the hall."
        ],
        xp: 3,
        points: 0,
        set: "ToR"
      },
      level3: {
        title: "Bhoidwood Slayer",
        group: "Bhoidwood",
        traits: [
          "Elf",
          "Ranger",
          "Level 3"
        ],
        level: 3,
        goldValue: -3,
        strength: 6,
        cost: 12,
        attacks: [
          "Physical Attack +6"
        ],
        dungeons: [
          "Rearrange the hall."
        ],
        points: 1,
        set: "ToR"
      }
    },
    blackhand: {
      heroGroup: true,
      level1: {
        title: "Blackhand Smuggler",
        group: "Blackhand",
        traits: [
          "Human",
          "Thief",
          "Level 1"
        ],
        level: 1,
        goldValue: 2,
        strength: 3,
        cost: 5,
        attacks: [
          "Physical Attack +1"
        ],
        specialEffects: [
          "If you purchase a hero or villager this turn, you may place it on top of your deck instead of in your discard pile."
        ],
        xp: 2,
        points: 0,
        set: "Start"
      },
      level2: {
        title: "Blackhand Thief",
        group: "Blackhand",
        traits: [
          "Human",
          "Thief",
          "Level 2"
        ],
        level: 2,
        goldValue: 2,
        strength: 4,
        cost: 8,
        attacks: [
          "Physical Attack +2"
        ],
        dungeons: [
          "Add Physical Attack +2 if two or more other heroes are present."
        ],
        xp: 3,
        points: 0,
        set: "Start"
      },
      level3: {
        title: "Blackhand Assassin",
        group: "Blackhand",
        traits: [
          "Human",
          "Thief",
          "Level 3"
        ],
        level: 3,
        goldValue: 3,
        strength: 4,
        cost: 11,
        attacks: [
          "Physical Attack +4"
        ],
        dungeons: [
          "Add Physical Attack +4 if one or more other heroes are present."
        ],
        points: 2,
        set: "Start"
      }
    },
    blademage: {
      heroGroup: true,
      level1: {
        title: "Blademage Striker",
        group: "Blademage",
        traits: [
          "Human",
          "Wizard",
          "Level 1"
        ],
        level: 1,
        goldValue: 0,
        strength: 3,
        cost: 5,
        light: 1,
        attacks: [
          "Magic Attack +1"
        ],
        xp: 2,
        points: 0,
        set: "RoC"
      },
      level2: {
        title: "Blademage Forger",
        group: "Blademage",
        traits: [
          "Human",
          "Wizard",
          "Level 2"
        ],
        level: 2,
        goldValue: 0,
        strength: 3,
        cost: 9,
        light: 1,
        attacks: [
          "Magic Attack +2"
        ],
        dungeons: [
          "One spell becomes a Weight 0 magic weapon equipped to this hero (it is still a spell) that adds Magic Attack +3."
        ],
        xp: 3,
        points: 0,
        set: "RoC"
      },
      level3: {
        title: "Blademage Caster",
        group: "Blademage",
        traits: [
          "Human",
          "Wizard",
          "Level 3"
        ],
        level: 3,
        goldValue: 0,
        strength: 3,
        cost: 13,
        attacks: [
          "Magic Attack +4"
        ],
        dungeons: [
          "Each spell becomes a Weight 0 magic weapon (each is still a spell) that adds Magic Attack equal to its gold cost."
        ],
        points: 2,
        set: "RoC"
      }
    },
    blind: {
      heroGroup: true,
      level1: {
        title: "Blind Neophyte",
        group: "Blind",
        traits: [
          "Human",
          "Fighter",
          "Cleric",
          "Level 1"
        ],
        level: 1,
        goldValue: 0,
        strength: 4,
        cost: 6,
        attacks: [
          "Physical Attack +2"
        ],
        repeatDungeons: [
          "Destroy 1 Light item to add Magic Attack +3."
        ],
        xp: 2,
        points: 0,
        set: "ItA"
      },
      level2: {
        title: "Blind Monk",
        group: "Blind",
        traits: [
          "Human",
          "Fighter",
          "Cleric",
          "Level 2"
        ],
        level: 2,
        goldValue: 0,
        strength: 4,
        cost: 9,
        attacks: [
          "Physical Attack +3"
        ],
        repeatDungeons: [
          "Destroy 1 Light item to add Magic Attack +4."
        ],
        xp: 3,
        points: 0,
        set: "ItA"
      },
      level3: {
        title: "Blind Grandmaster",
        group: "Blind",
        traits: [
          "Human",
          "Fighter",
          "Cleric",
          "Level 3"
        ],
        level: 3,
        goldValue: 0,
        strength: 5,
        cost: 12,
        attacks: [
          "Physical Attack +3"
        ],
        specialEffects: [
          "Ignore Darkness penalties.",
          "Add Magic Attack +3 if no Light items are present."
        ],
        points: 3,
        set: "ItA"
      },
      level4: {
        title: "Blind Shihan",
        group: "Blind",
        traits: [
          "Human",
          "Fighter",
          "Cleric",
          "Level 4"
        ],
        level: 4,
        goldValue: 0,
        strength: 6,
        cost: 16,
        attacks: [
          "Physical Attack +4"
        ],
        specialEffects: [
          "Ignore Darkness penalties.",
          "Add Magic Attack +4 and ignore Battle effects if no Light items are present."
        ],
        points: 5,
        set: "ItA"
      }
    },
    bluefire: {
      heroGroup: true,
      level1: {
        title: "Bluefire Student",
        group: "Bluefire",
        traits: [
          "Human",
          "Cleric",
          "Wizard",
          "Level 1"
        ],
        level: 1,
        goldValue: 0,
        strength: 2,
        cost: 4,
        attacks: [
          "Physical Attack +1"
        ],
        dungeons: [
          "Gain 1 XP."
        ],
        xp: 2,
        points: 0,
        set: "WC"
      },
      level2: {
        title: "Bluefire Mage",
        group: "Bluefire",
        traits: [
          "Human",
          "Cleric",
          "Wizard",
          "Level 2"
        ],
        level: 2,
        goldValue: 0,
        strength: 3,
        cost: 7,
        attacks: [
          "Physical Attack +2"
        ],
        dungeons: [
          "Gain 2 XP."
        ],
        xp: 3,
        points: 0,
        set: "WC"
      },
      level3: {
        title: "Bluefire Master",
        group: "Bluefire",
        traits: [
          "Human",
          "Cleric",
          "Wizard",
          "Level 3"
        ],
        level: 3,
        goldValue: 0,
        strength: 4,
        cost: 10,
        attacks: [
          "Physical Attack +3"
        ],
        dungeons: [
          "Level up 1 hero (pay all costs). Place the new hero in your hand."
        ],
        points: 2,
        set: "WC"
      },
      level4: {
        title: "Bluefire Preceptor",
        group: "Bluefire",
        traits: [
          "Human",
          "Cleric",
          "Wizard",
          "Level 4"
        ],
        level: 4,
        goldValue: 0,
        strength: 4,
        cost: 14,
        attacks: [
          "Physical Attack +4"
        ],
        dungeons: [
          "Level up 1 hero (pay all costs). Place the new hero in your hand. Instead of destroying the hero you level with this ability, you may return it to your hand."
        ],
        points: 44,
        set: "WC"
      }
    },
    caliginite: {
      heroGroup: true,
      level1: {
        title: "Caliginite Lurker",
        group: "Caliginite",
        traits: [
          "Dwarf",
          "Thief",
          "Level 1"
        ],
        level: 1,
        goldValue: 1,
        strength: 4,
        cost: 5,
        attacks: [
          "Physical Attack +1"
        ],
        specialEffects: [
          "Add Physical Attack +2 if there is Darkness."
        ],
        xp: 2,
        points: 0,
        set: "ToR"
      },
      level2: {
        title: "Caliginite Prowler",
        group: "Caliginite",
        traits: [
          "Dwarf",
          "Thief",
          "Level 2"
        ],
        level: 2,
        goldValue: 1,
        strength: 4,
        cost: 9,
        attacks: [
          "Physical Attack +2"
        ],
        specialEffects: [
          "Add Physical Attack +3 if there is Darkness."
        ],
        xp: 3,
        points: 0,
        set: "ToR"
      },
      level3: {
        title: "Caliginite Silencer",
        group: "Caliginite",
        traits: [
          "Dwarf",
          "Thief",
          "Level 3"
        ],
        level: 3,
        goldValue: 1,
        strength: 5,
        cost: 12,
        attacks: [
          "Physical Attack +3"
        ],
        dungeons: [
          "Add Physical Attack +6 if there is Darkness."
        ],
        points: 1,
        set: "ToR"
      }
    },
    canon: {
      heroGroup: true,
      level1: {
        title: "Canon Devotee",
        group: "Canon",
        traits: [
          "Cleric",
          "Level 1"
        ],
        level: 1,
        goldValue: 0,
        strength: 4,
        cost: 4,
        attacks: [
          "Magic Attack +1"
        ],
        villages: [
          "Destroy 1 Disease."
        ],
        dungeons: [
          "Destroy 1 Disease."
        ],
        xp: 2,
        points: 0,
        set: "Original"
      },
      level2: {
        title: "Canon Medium",
        group: "Canon",
        traits: [
          "Cleric",
          "Level 2"
        ],
        level: 2,
        goldValue: 0,
        strength: 4,
        cost: 7,
        attacks: [
          "Magic Attack +2"
        ],
        dungeons: [
          "Put a Disease from your hand into another player's discard to gain Magic Attack +1."
        ],
        xp: 3,
        points: 0,
        set: "Original"
      },
      level3: {
        title: "Canon Theurge",
        group: "Canon",
        traits: [
          "Cleric",
          "Level 3"
        ],
        level: 3,
        goldValue: 0,
        strength: 5,
        light: 1,
        cost: 10,
        attacks: [
          "Magic Attack +3"
        ],
        dungeons: [
          "Place all Diseases from you hand under one Monster in the Hall. The next player to battle that Monster receives those Diseases. Gain Magic Attack +2 for each Disease placed."
        ],
        points: 2,
        set: "Original"
      }
    },
    cathedral: {
      heroGroup: true,
      level1: {
        title: "Cathedral Acolyte",
        group: "Cathedral",
        traits: [
          "Human",
          "Cleric",
          "Level 1"
        ],
        level: 1,
        goldValue: 0,
        strength: 4,
        cost: 6,
        attacks: [
          "Physical Attack +1"
        ],
        villages: [
          "Destroy 1 disease to draw 1 card."
        ],
        dungeons: [
          "Destroy 1 disease to draw 1 card."
        ],
        xp: 2,
        points: 0,
        set: "Start"
      },
      level2: {
        title: "Cathedral Priest",
        group: "Cathedral",
        traits: [
          "Human",
          "Cleric",
          "Level 2"
        ],
        level: 2,
        goldValue: 0,
        strength: 5,
        cost: 9,
        attacks: [
          "Physical Attack +3"
        ],
        villages: [
          "Destroy 1 card to draw 1 card."
        ],
        dungeons: [
          "Destroy 1 card to draw 1 card."
        ],
        xp: 3,
        points: 0,
        set: "Start"
      },
      level3: {
        title: "Cathedral Bishop",
        group: "Cathedral",
        traits: [
          "Human",
          "Cleric",
          "Level 3"
        ],
        level: 3,
        goldValue: 0,
        strength: 6,
        cost: 12,
        attacks: [
          "Physical Attack +5"
        ],
        dungeons: [
          "Destroy 1 card to add Magic Attack +3 to this card."
        ],
        points: 2,
        set: "Start"
      }
    },
    chalice: {
      heroGroup: true,
      level1: {
        title: "Chalice Quester",
        group: "Chalice",
        traits: [
          "Human",
          "Fighter",
          "Cleric",
          "Level 1"
        ],
        level: 1,
        goldValue: 0,
        strength: 5,
        cost: 7,
        attacks: [
          "Physical Attack +2"
        ],
        repeatDungeons: [
          "Destroy 1 disease to draw 1 card."
        ],
        xp: 2,
        points: 0,
        set: "ItA"
      },
      level2: {
        title: "Chalice Defender",
        group: "Chalice",
        traits: [
          "Human",
          "Fighter",
          "Cleric",
          "Level 2"
        ],
        level: 2,
        goldValue: 0,
        strength: 6,
        cost: 10,
        attacks: [
          "Magic Attack +3"
        ],
        dungeons: [
          "Add Physical Attack +1 for each Light item present.",
          "Draw 1 card."
        ],
        repeatDungeons: [
          "Destroy 1 disease to draw 1 card."
        ],
        xp: 3,
        points: 0,
        set: "ItA"
      },
      level3: {
        title: "Chalice Paladin",
        group: "Chalice",
        traits: [
          "Human",
          "Fighter",
          "Cleric",
          "Level 3"
        ],
        level: 3,
        goldValue: 0,
        strength: 7,
        cost: 12,
        attacks: [
          "Magic Attack +4"
        ],
        dungeons: [
          "Draw 1 card."
        ],
        spoils: [
          "Buy 1 card."
        ],
        points: 2,
        set: "ItA"
      },
      level4: {
        title: "Chalice Paragon",
        group: "Chalice",
        traits: [
          "Human",
          "Fighter",
          "Cleric",
          "Level 4"
        ],
        level: 4,
        goldValue: 0,
        strength: 8,
        cost: 16,
        attacks: [
          "Magic Attack +5"
        ],
        dungeons: [
          "Draw 2 cards. If either has a Light icon, you may draw 2 more cards."
        ],
        spoils: [
          "Buy 1 card. If it has a Light icon, you may buy 1 additional card."
        ],
        points: 4,
        set: "ItA"
      }
    },
    charming: {
      heroGroup: true,
      level1: {
        title: "Charming",
        group: "Charming",
        traits: [
          "Human",
          "Cleric",
          "Level 1"
        ],
        level: 1,
        goldValue: 0,
        strength: 4,
        cost: 6,
        attacks: [
          "Magic Attack +2"
        ],
        repeatVillages: [
          "Destroy 1 disease to draw 1 card."
        ],
        xp: 2,
        points: 0,
        set: "Numenera"
      },
      level2: {
        title: "Charming Nano",
        group: "Charming",
        traits: [
          "Human",
          "Cleric",
          "Level 2"
        ],
        level: 2,
        goldValue: 0,
        strength: 5,
        cost: 9,
        attacks: [
          "Magic Attack +3"
        ],
        repeatDungeons: [
          "Destroy 1 disease to draw 1 card."
        ],
        dungeons: [
          "Place one Regular or level 1 hero from your discard pile into your hand."
        ],
        xp: 3,
        points: 0,
        set: "Numenera"
      },
      level3: {
        title: "Enhanced Charming Nano",
        group: "Charming",
        traits: [
          "Human",
          "Cleric",
          "Level 3"
        ],
        level: 3,
        goldValue: 0,
        strength: 5,
        cost: 13,
        attacks: [
          "Magic Attack +5"
        ],
        repeatDungeons: [
          "Destroy 1 disease to draw 1 card."
        ],
        dungeons: [
          "Place 1 hero from your discard pile into your hand."
        ],
        points: 2,
        set: "Numenera"
      }
    },
    clan: {
      heroGroup: true,
      level1: {
        title: "Clan Sergeant",
        group: "Clan",
        traits: [
          "Dwarf",
          "Fighter",
          "Level 1"
        ],
        level: 1,
        goldValue: 0,
        strength: 6,
        cost: 6,
        attacks: [
          "Physical Attack +2"
        ],
        dungeons: [
          "Add Physical Attack +1 to each other equipped hero."
        ],
        xp: 2,
        points: 0,
        set: "WC"
      },
      level2: {
        title: "Clan Commander",
        group: "Clan",
        traits: [
          "Dwarf",
          "Fighter",
          "Level 2"
        ],
        level: 2,
        goldValue: 0,
        strength: 7,
        cost: 9,
        attacks: [
          "Physical Attack +3"
        ],
        dungeons: [
          "Add Physical Attack +2 to each other equipped hero."
        ],
        xp: 3,
        points: 0,
        set: "WC"
      },
      level3: {
        title: "Clan Champion",
        group: "Clan",
        traits: [
          "Dwarf",
          "Fighter",
          "Level 3"
        ],
        level: 3,
        goldValue: 0,
        strength: 8,
        cost: 12,
        attacks: [
          "Physical Attack +4"
        ],
        dungeons: [
          "Add Physical Attack +3 to each other equipped hero."
        ],
        spoils: [
          "Buy 1 weapon."
        ],
        points: 3,
        set: "WC"
      },
      level4: {
        title: "Clan King",
        group: "Clan",
        traits: [
          "Dwarf",
          "Fighter",
          "Level 4"
        ],
        level: 4,
        goldValue: 0,
        strength: 9,
        cost: 16,
        attacks: [
          "Physical Attack +4"
        ],
        dungeons: [
          "Add Physical Attack +4 to each other equipped hero.",
          "If no weapon is present buy 1 weapon and add it to your hand."
        ],
        points: 5,
        set: "WC"
      }
    },
    clever: {
      heroGroup: true,
      level1: {
        title: "Clever",
        group: "Clever",
        traits: [
          "Human",
          "Wizard",
          "Level 1"
        ],
        level: 1,
        goldValue: 0,
        strength: 3,
        cost: 6,
        attacks: [
          "Magic Attack +2"
        ],
        xp: 2,
        points: 0,
        set: "Numenera"
      },
      level2: {
        title: "Clever Nano",
        group: "Clever",
        traits: [
          "Human",
          "Wizard",
          "Level 2"
        ],
        level: 2,
        goldValue: 0,
        strength: 3,
        cost: 9,
        dungeons: [
          "Magic Attack +3.",
          "Physical Attack equal to the VP of 1 monster present (in your hand). This card becomes unequipped and cannot equip weapons."
        ],
        specialEffects: [
          "This hero can only use one ability."
        ],
        xp: 3,
        points: 0,
        set: "Numenera"
      },
      level3: {
        title: "Enhanced Clever Nano",
        group: "Clever",
        traits: [
          "Human",
          "Wizard",
          "Level 3"
        ],
        level: 3,
        goldValue: 0,
        strength: 4,
        cost: 12,
        dungeons: [
          "Magic Attack +5",
          "Physical Attack equal to the Health of 1 monster present (in your hand). This card becomes unequipped and cannot equip weapons."
        ],
        specialEffects: [
          "This hero can only use one ability."
        ],
        points: 2,
        set: "Numenera"
      }
    },
    criochan: {
      heroGroup: true,
      level1: {
        title: "Criochan Sergeant",
        group: "Criochan",
        traits: [
          "Human",
          "Fighter",
          "Level 1"
        ],
        level: 1,
        goldValue: 0,
        strength: 7,
        cost: 7,
        attacks: [
          "Physical Attack +2"
        ],
        xp: 2,
        points: 0,
        set: "ToR"
      },
      level2: {
        title: "Criochan Knight",
        group: "Criochan",
        traits: [
          "Human",
          "Fighter",
          "Level 2"
        ],
        level: 2,
        goldValue: 0,
        strength: 7,
        cost: 10,
        attacks: [
          "Physical Attack +5"
        ],
        xp: 3,
        points: 0,
        set: "ToR"
      },
      level3: {
        title: "Criochan Captain",
        group: "Criochan",
        traits: [
          "Human",
          "Fighter",
          "Level 3"
        ],
        level: 3,
        goldValue: 0,
        strength: 8,
        cost: 13,
        attacks: [
          "Physical Attack +8"
        ],
        points: 2,
        set: "ToR"
      }
    },
    dark: {
      heroGroup: true,
      level1: {
        title: "Dark Animator",
        group: "Dark",
        traits: [
          "Human",
          "Wizard",
          "Level 1"
        ],
        level: 1,
        goldValue: 0,
        strength: 2,
        cost: 5,
        attacks: [
          "Magic Attack +1"
        ],
        dungeons: [
          "Destroy 1 hero or villager in your discard pile to add Magic Attack +1."
        ],
        xp: 2,
        points: 0,
        set: "WC"
      },
      level2: {
        title: "Dark Puppeteer",
        group: "Dark",
        traits: [
          "Human",
          "Wizard",
          "Level 2"
        ],
        level: 2,
        goldValue: 0,
        strength: 3,
        cost: 8,
        attacks: [
          "Magic Attack +2"
        ],
        dungeons: [
          "Add Magic Attack equal to the VP of 1 monster present."
        ],
        xp: 3,
        points: 0,
        set: "WC"
      },
      level3: {
        title: "Dark Necromancer",
        group: "Dark",
        traits: [
          "Human",
          "Wizard",
          "Level 3"
        ],
        level: 3,
        goldValue: 0,
        strength: 4,
        cost: 12,
        attacks: [
          "Magic Attack +3"
        ],
        dungeons: [
          "Add Magic Attack equal to the total VP of all monsters present."
        ],
        points: 2,
        set: "WC"
      },
      level4: {
        title: "Dark Eternal",
        group: "Dark",
        traits: [
          "Human",
          "Wizard",
          "Level 4"
        ],
        level: 4,
        goldValue: 0,
        strength: 4,
        cost: 16,
        attacks: [
          "Magic Attack +3"
        ],
        dungeons: [
          "Add Magic Attack equal to the total VP of all monsters present or in the top 5 cards of your discard pile."
        ],
        points: 4,
        set: "WC"
      }
    },
    deepstrider: {
      heroGroup: true,
      level1: {
        title: "Deepstrider Sentry",
        group: "Deepstrider",
        traits: [
          "Elf",
          "Ranger",
          "Level 1"
        ],
        level: 1,
        goldValue: -1,
        strength: 5,
        cost: 6,
        attacks: [
          "Physical Attack +2"
        ],
        xp: 2,
        points: 0,
        set: "ToR"
      },
      level2: {
        title: "Deepstrider Scout",
        group: "Deepstrider",
        traits: [
          "Elf",
          "Ranger",
          "Level 2"
        ],
        level: 2,
        goldValue: -1,
        strength: 5,
        cost: 8,
        attacks: [
          "Physical Attack +3"
        ],
        dungeons: [
          "Reveal the top card of the dungeon deck. Give your heroes Attack +1 against monsters of that group. Place the revealed card on the top and/or bottom of the dungeon deck."
        ],
        xp: 3,
        points: 0,
        set: "ToR"
      },
      level3: {
        title: "Deepstrider Warden",
        group: "Deepstrider",
        traits: [
          "Elf",
          "Ranger",
          "Level 3"
        ],
        level: 3,
        goldValue: -2,
        strength: 6,
        cost: 11,
        attacks: [
          "Physical Attack +4"
        ],
        dungeons: [
          "Reveal the top 2 cards of the dungeon deck. Give your heroes Attack +1 against monsters of the revealed groups. Place the revealed cards on the top and/or bottom of the dungeon deck in any order."
        ],
        points: 2,
        set: "ToR"
      }
    },
    diin: {
      heroGroup: true,
      level1: {
        title: "Diin Illusionist",
        group: "Diin",
        traits: [
          "Wizard",
          "Level 1"
        ],
        level: 1,
        goldValue: 0,
        strength: 3,
        cost: 5,
        attacks: [
          "Magic Attack +2"
        ],
        xp: 2,
        points: 0,
        set: "Original"
      },
      level2: {
        title: "Diin Beguiler",
        group: "Diin",
        traits: [
          "Wizard",
          "Level 2"
        ],
        level: 2,
        goldValue: 0,
        strength: 3,
        cost: 8,
        attacks: [
          "Magic Attack +2"
        ],
        dungeons: [
          "One Militia duplicates all abilities of one other Hero in your hand."
        ],
        xp: 3,
        points: 0,
        set: "Original"
      },
      level3: {
        title: "Diin Enchanter",
        group: "Diin",
        traits: [
          "Wizard",
          "Level 3"
        ],
        level: 3,
        goldValue: 0,
        strength: 4,
        cost: 11,
        attacks: [
          "Magic Attack +3"
        ],
        dungeons: [
          "Discard one Militia to draw the top Hero from any Village stack. That Hero joins the battle. Destroy the Hero at the end of the battle."
        ],
        points: 2,
        set: "Original"
      }
    },
    disowned: {
      heroGroup: true,
      level1: {
        title: "Disowned Berserker",
        group: "Disowned",
        traits: [
          "Dwarf",
          "Fighter",
          "Level 1"
        ],
        level: 1,
        goldValue: 0,
        strength: 6,
        cost: 6,
        attacks: [
          "Physical Attack +2"
        ],
        aftermaths: [
          "Destroy 1 other hero."
        ],
        xp: 2,
        points: 0,
        set: "CoB"
      },
      level2: {
        title: "Disowned Reaver",
        group: "Disowned",
        traits: [
          "Dwarf",
          "Fighter",
          "Level 2"
        ],
        level: 2,
        goldValue: 0,
        strength: 6,
        cost: 8,
        attacks: [
          "Physical Attack +5"
        ],
        dungeons: [
          "Destroy 1 hero."
        ],
        aftermaths: [
          "If equipped with a weapon, destroy 1 other hero."
        ],
        xp: 3,
        points: 0,
        set: "CoB"
      },
      level3: {
        title: "Disowned Bloodrager",
        group: "Disowned",
        traits: [
          "Dwarf",
          "Fighter",
          "Level 3"
        ],
        level: 3,
        goldValue: 0,
        strength: 7,
        cost: 11,
        attacks: [
          "Physical Attack +8"
        ],
        aftermaths: [
          "Destroy all other heroes. Place this card on top of your deck."
        ],
        specialEffects: [
          "This hero can equip two weapons."
        ],
        points: 1,
        set: "CoB"
      }
    },
    divine: {
      heroGroup: true,
      level1: {
        title: "Divine Healer",
        group: "Divine",
        traits: [
          "Human",
          "Cleric",
          "Level 1"
        ],
        level: 1,
        goldValue: 0,
        strength: 4,
        cost: 5,
        attacks: [
          "Physical Attack +1"
        ],
        villages: [
          "Destroy 1 disease to draw 1 card."
        ],
        dungeons: [
          "Destroy 1 disease to draw 1 card."
        ],
        xp: 2,
        points: 0,
        set: "WC"
      },
      level2: {
        title: "Divine Chaplain",
        group: "Divine",
        traits: [
          "Human",
          "Cleric",
          "Level 2"
        ],
        level: 2,
        goldValue: 0,
        strength: 5,
        cost: 8,
        attacks: [
          "Physical Attack +2"
        ],
        villages: [
          "Draw 1 card."
        ],
        dungeons: [
          "Draw 1 card.",
          "Add Physical Attack +1 for each disease and monster present."
        ],
        xp: 3,
        points: 0,
        set: "WC"
      },
      level3: {
        title: "Divine Prophet",
        group: "Divine",
        traits: [
          "Human",
          "Cleric",
          "Level 3"
        ],
        level: 3,
        goldValue: 0,
        strength: 6,
        cost: 11,
        attacks: [
          "Physical Attack +3"
        ],
        villages: [
          "Destroy 1 disease to draw 2 cards.",
          "Draw 1 card for each monster present."
        ],
        dungeons: [
          "Destroy 1 disease to draw 2 cards.",
          "Draw 1 card for each monster present."
        ],
        points: 2,
        set: "WC"
      },
      level4: {
        title: "Divine Herald",
        group: "Divine",
        traits: [
          "Human",
          "Cleric",
          "Level 4"
        ],
        level: 4,
        goldValue: 0,
        strength: 6,
        cost: 15,
        attacks: [
          "Physical Attack +4"
        ],
        villages: [
          "Destroy 1 disease to draw 2 cards.",
          "Draw 1 card for each monster present."
        ],
        dungeons: [
          "Destroy 1 disease to draw 2 cards.",
          "Draw 2 card for each monster present."
        ],
        points: 4,
        set: "WC"
      }
    },
    drua: {
      heroGroup: true,
      level1: {
        title: "Drua Sacrist",
        group: "Drua",
        traits: [
          "Elf",
          "Cleric",
          "Level 1"
        ],
        level: 1,
        goldValue: 0,
        strength: 4,
        cost: 6,
        attacks: [
          "Physical Attack +2"
        ],
        dungeons: [
          "Destroy 1 card in your hand."
        ],
        xp: 2,
        points: 0,
        set: "ToR"
      },
      level2: {
        title: "Drua Cursesworn",
        group: "Drua",
        traits: [
          "Elf",
          "Cleric",
          "Level 2"
        ],
        level: 2,
        goldValue: 0,
        strength: 4,
        cost: 9,
        attacks: [
          "Physical Attack +3"
        ],
        villages: [
          "Destroy 1 card in your hand.",
          "Destroy 1 disease to draw 1 card."
        ],
        dungeons: [
          "Destroy 1 card in your hand.",
          "Destroy 1 disease to draw 1 card."
        ],
        xp: 3,
        points: 0,
        set: "ToR"
      },
      level3: {
        title: "Drua Purifier",
        group: "Drua",
        traits: [
          "Elf",
          "Cleric",
          "Level 3"
        ],
        level: 3,
        goldValue: 0,
        strength: 5,
        cost: 12,
        repeatVillages: [
          "Destroy 1 card in your hand.",
          "Destroy 1 disease to draw 2 card."
        ],
        repeatDungeons: [
          "Destroy 1 card in your hand.",
          "Destroy 1 disease to draw 2 card."
        ],
        points: 2,
        set: "ToR"
      }
    },
    elf: {
      heroGroup: true,
      level1: {
        title: "Elf Wizard",
        group: "Elf",
        traits: [
          "Elf",
          "Wizard",
          "Level 1"
        ],
        level: 1,
        goldValue: 0,
        strength: 3,
        light: 1,
        cost: 5,
        attacks: [
          "Magic Attack +2"
        ],
        xp: 2,
        points: 0,
        set: "Original"
      },
      level2: {
        title: "Elf Sorcerer",
        group: "Elf",
        traits: [
          "Elf",
          "Wizard",
          "Level 2"
        ],
        level: 2,
        goldValue: 0,
        strength: 3,
        light: 2,
        cost: 8,
        attacks: [
          "Magic Attack +3"
        ],
        specialEffects: [
          "You may return one Monster to the bottom of the deck after defeating a Monster. (Refill the hall.)"
        ],
        xp: 3,
        points: 0,
        set: "Original"
      },
      level3: {
        title: "Elf Archmage",
        group: "Elf",
        traits: [
          "Elf",
          "Wizard",
          "Level 3"
        ],
        level: 3,
        goldValue: 0,
        strength: 4,
        light: 2,
        cost: 10,
        attacks: [
          "Magic Attack +4"
        ],
        dungeons: [
          "You may return one Monster to the bottom of the deck and refill the hall before the beginning of a battle."
        ],
        points: 2,
        set: "Original"
      }
    },
    feayn: {
      heroGroup: true,
      level1: {
        title: "Feayn class",
        group: "Feayn",
        traits: [
          "Fighter",
          "Archer",
          "Level 1"
        ],
        level: 1,
        goldValue: 0,
        strength: 4,
        light: 1,
        cost: 7,
        attacks: [
          "Attack +1"
        ],
        specialEffects: [
          "Cannot attack Rank 1."
        ],
        xp: 2,
        points: 0,
        set: "Original"
      },
      level2: {
        title: "Feayn Marksman",
        group: "Feayn",
        traits: [
          "Fighter",
          "Archer",
          "Level 2"
        ],
        level: 2,
        goldValue: 0,
        strength: 5,
        light: 1,
        cost: 10,
        attacks: [
          "Attack +3"
        ],
        specialEffects: [
          "Cannot attack Rank 1."
        ],
        xp: 3,
        points: 0,
        set: "Original"
      },
      level3: {
        title: "Feayn Sniper",
        group: "Feayn",
        traits: [
          "Fighter",
          "Archer",
          "Level 3"
        ],
        level: 3,
        goldValue: 0,
        strength: 6,
        light: 2,
        cost: 12,
        attacks: [
          "Attack +4"
        ],
        specialEffects: [
          "Cannot attack Rank 1.",
          "Gain +1 XP if you defeat a Monster in Rank 3."
        ],
        points: 2,
        set: "Original"
      }
    },
    forcemage: {
      heroGroup: true,
      level1: {
        title: "Forcemage class",
        group: "Forcemage",
        traits: [
          "Human",
          "Wizard",
          "Level 1"
        ],
        level: 1,
        goldValue: 0,
        strength: 3,
        cost: 8,
        attacks: [
          "Magic Attack +2"
        ],
        specialEffects: [
          "Add Magic Attack +1 for each spell present."
        ],
        xp: 2,
        points: 0,
        set: "CoB"
      },
      level2: {
        title: "Forcemage Evoker",
        group: "Forcemage",
        traits: [
          "Human",
          "Wizard",
          "Level 2"
        ],
        level: 2,
        goldValue: 0,
        strength: 3,
        cost: 11,
        attacks: [
          "Magic Attack +3"
        ],
        dungeons: [
          "Draw 1 card. If it is a spell, draw an additional card and add Magic Attack +1."
        ],
        xp: 3,
        points: 0,
        set: "CoB"
      },
      level3: {
        title: "Forcemage Blaster",
        group: "Forcemage",
        traits: [
          "Human",
          "Wizard",
          "Level 3"
        ],
        level: 3,
        goldValue: 0,
        strength: 4,
        cost: 14,
        attacks: [
          "Magic Attack +4"
        ],
        dungeons: [
          "Draw 2 cards. If either is a spell, draw an additional card and add Magic Attack +2."
        ],
        points: 2,
        set: "CoB"
      }
    },
    garrison: {
      heroGroup: true,
      level1: {
        title: "Garrison Page",
        group: "Garrison",
        traits: [
          "Human",
          "Fighter",
          "Level 1"
        ],
        level: 1,
        goldValue: 0,
        strength: 6,
        cost: 7,
        attacks: [
          "Physical Attack +2"
        ],
        xp: 2,
        points: 0,
        set: "Start"
      },
      level2: {
        title: "Garrison Squire",
        group: "Garrison",
        traits: [
          "Human",
          "Fighter",
          "Level 2"
        ],
        level: 2,
        goldValue: 0,
        strength: 7,
        cost: 10,
        attacks: [
          "Physical Attack +3"
        ],
        dungeons: [
          "Add Physical Attack +1 while equipped with a weapon."
        ],
        xp: 3,
        points: 0,
        set: "Start"
      },
      level3: {
        title: "Garrison Knight",
        group: "Garrison",
        traits: [
          "Human",
          "Fighter",
          "Level 3"
        ],
        level: 3,
        goldValue: 0,
        strength: 8,
        cost: 13,
        attacks: [
          "Physical Attack +5"
        ],
        dungeons: [
          "Add Physical Attack +3 while equipped with a weapon."
        ],
        points: 2,
        set: "Start"
      }
    },
    glamercast: {
      heroGroup: true,
      level1: {
        title: "Glamercast Troubadour",
        group: "Glamercast",
        traits: [
          "Human",
          "Thief",
          "Wizard",
          "Level 1"
        ],
        level: 1,
        goldValue: 0,
        strength: 2,
        light: 1,
        cost: 6,
        specialEffects: [
          "Give each other hero Magic Attack +1."
        ],
        xp: 2,
        points: 0,
        set: "ToR"
      },
      level2: {
        title: "Glamercast Bard",
        group: "Glamercast",
        traits: [
          "Human",
          "Thief",
          "Wizard",
          "Level 2"
        ],
        level: 2,
        goldValue: 0,
        strength: 3,
        light: 1,
        cost: 9,
        attacks: [
          "Magic Attack +2"
        ],
        specialEffects: [
          "Give each other hero Magic Attack +1."
        ],
        xp: 3,
        points: 0,
        set: "ToR"
      },
      level3: {
        title: "Glamercast Maestro",
        group: "Glamercast",
        traits: [
          "Human",
          "Thief",
          "Wizard",
          "Level 3"
        ],
        level: 3,
        goldValue: 0,
        strength: 3,
        light: 1,
        cost: 12,
        attacks: [
          "Magic Attack +3"
        ],
        spoils: [
          "Gain 1 XP per hero."
        ],
        specialEffects: [
          "Give each other hero Magic Attack +2."
        ],
        points: 2,
        set: "ToR"
      }
    },
    gohlen: {
      heroGroup: true,
      level1: {
        title: "Gohlen Trapper",
        group: "Gohlen",
        traits: [
          "Human",
          "Ranger",
          "Level 1"
        ],
        level: 1,
        goldValue: 0,
        strength: 5,
        cost: 7,
        attacks: [
          "Physical Attack +2"
        ],
        dungeons: [
          "Add Physical Attack +2 if a monster is present."
        ],
        xp: 2,
        points: 0,
        set: "WC"
      },
      level2: {
        title: "Gohlen Tracker",
        group: "Gohlen",
        traits: [
          "Human",
          "Ranger",
          "Level 2"
        ],
        level: 2,
        goldValue: 0,
        strength: 6,
        cost: 10,
        attacks: [
          "Physical Attack +3"
        ],
        dungeons: [
          "Add Physical Attack +3 if a monster is present."
        ],
        xp: 3,
        points: 0,
        set: "WC"
      },
      level3: {
        title: "Gohlen Hunter",
        group: "Gohlen",
        traits: [
          "Human",
          "Ranger",
          "Level 3"
        ],
        level: 3,
        goldValue: 0,
        strength: 6,
        cost: 13,
        attacks: [
          "Physical Attack +4"
        ],
        dungeons: [
          "Each other player discards 1 monster or shows a hand with none."
        ],
        spoils: [
          "Place 1 discarded monster of 5 VP or lower onto your discard pile if it is from the same group as the monster you defeated."
        ],
        points: 1,
        set: "WC"
      },
      level4: {
        title: "Gohlen Hunter",
        group: "Gohlen",
        traits: [
          "Human",
          "Ranger",
          "Level 4"
        ],
        level: 4,
        goldValue: 0,
        strength: 7,
        cost: 17,
        attacks: [
          "Physical Attack +5"
        ],
        dungeons: [
          "Each other player discards 1 monster or shows a hand with none."
        ],
        spoils: [
          "Place 1 discarded monster of 5 VP or lower onto your discard pile."
        ],
        points: 3,
        set: "WC"
      }
    },
    graceful: {
      heroGroup: true,
      level1: {
        title: "Graceful",
        group: "Graceful",
        traits: [
          "Human",
          "Fighter",
          "Level 1"
        ],
        level: 1,
        goldValue: 0,
        strength: 4,
        cost: 6,
        attacks: [
          "Physical Attack +1"
        ],
        specialEffects: [
          "Add Physical Attack +2 while fighting a monster with a Battle effect."
        ],
        xp: 2,
        points: 0,
        set: "Numenera"
      },
      level2: {
        title: "Graceful Glaive",
        group: "Graceful",
        traits: [
          "Human",
          "Fighter",
          "Level 2"
        ],
        level: 2,
        goldValue: 0,
        strength: 5,
        cost: 9,
        attacks: [
          "Physical Attack +2"
        ],
        specialEffects: [
          "Add Physical Attack +4 while fighting a monster with a Battle effect."
        ],
        xp: 3,
        points: 0,
        set: "Numenera"
      },
      level3: {
        title: "Enhanced Graceful Glaive",
        group: "Graceful",
        traits: [
          "Human",
          "Fighter",
          "Level 3"
        ],
        level: 3,
        goldValue: 0,
        strength: 6,
        cost: 12,
        attacks: [
          "Physical Attack +3"
        ],
        specialEffects: [
          "Immune to Battle and Aftermath effects.",
          "Add Physical Attack +5 while fighting a monster with a Battle of Aftermath effect."
        ],
        points: 2,
        set: "Numenera"
      }
    },
    grim: {
      heroGroup: true,
      level1: {
        title: "Grim Blade",
        group: "Grim",
        traits: [
          "Human",
          "Cleric",
          "Level 1"
        ],
        level: 1,
        goldValue: 0,
        strength: 4,
        cost: 6,
        attacks: [
          "Physical Attack +2"
        ],
        spoils: [
          "Set the defeated monster and this card aside. Return both to your deck at the end of the game."
        ],
        xp: 2,
        points: 0,
        set: "ItA"
      },
      level2: {
        title: "Grim Militant",
        group: "Grim",
        traits: [
          "Human",
          "Cleric",
          "Level 2"
        ],
        level: 2,
        goldValue: 0,
        strength: 5,
        cost: 10,
        attacks: [
          "Physical Attack +3"
        ],
        spoils: [
          "Discard 2 XP to set the defeated monster aside. Return it to your deck at the end of the game."
        ],
        xp: 3,
        points: 0,
        set: "ItA"
      },
      level3: {
        title: "Grim Scourge",
        group: "Grim",
        traits: [
          "Human",
          "Cleric",
          "Level 3"
        ],
        level: 3,
        goldValue: 0,
        strength: 5,
        cost: 13,
        attacks: [
          "Physical Attack +4"
        ],
        spoils: [
          "Set the defeated monster aside. Return it to your deck at the end of the game."
        ],
        points: 3,
        set: "ItA"
      },
      level4: {
        title: "Grim Scourge",
        group: "Grim",
        traits: [
          "Human",
          "Cleric",
          "Level 4"
        ],
        level: 4,
        goldValue: 0,
        strength: 6,
        cost: 17,
        attacks: [
          "Physical Attack +5"
        ],
        spoils: [
          "Set the defeated monster and any monsters present aside. Return them to your deck at the end of the game."
        ],
        points: 4,
        set: "ItA"
      }
    },
    harruli: {
      heroGroup: true,
      level1: {
        title: "Harruli Initiate",
        group: "Harruli",
        traits: [
          "Human",
          "Fighter",
          "Wizard",
          "Level 1"
        ],
        level: 1,
        goldValue: 0,
        strength: 5,
        cost: 6,
        attacks: [
          "Physical Attack +1"
        ],
        dungeons: [
          "Add Magic Attack +1 for each spell present."
        ],
        xp: 2,
        points: 0,
        set: "WC"
      },
      level2: {
        title: "Harruli Spellsword",
        group: "Harruli",
        traits: [
          "Human",
          "Fighter",
          "Wizard",
          "Level 2"
        ],
        level: 2,
        goldValue: 0,
        strength: 6,
        cost: 9,
        attacks: [
          "Physical Attack +2"
        ],
        dungeons: [
          "Add Magic Attack +2 for each spell present."
        ],
        xp: 3,
        points: 0,
        set: "WC"
      },
      level3: {
        title: "Harruli Avatar",
        group: "Harruli",
        traits: [
          "Human",
          "Fighter",
          "Wizard",
          "Level 3"
        ],
        level: 3,
        goldValue: 0,
        strength: 7,
        cost: 12,
        attacks: [
          "Physical Attack +4"
        ],
        dungeons: [
          "Reveal the top 3 cards of your deck. Place 1 revealed spell (if any) into your hand. Discard the rest."
        ],
        points: 2,
        set: "WC"
      },
      level4: {
        title: "Harruli Magus",
        group: "Harruli",
        traits: [
          "Human",
          "Fighter",
          "Wizard",
          "Level 4"
        ],
        level: 4,
        goldValue: 0,
        strength: 7,
        cost: 16,
        attacks: [
          "Physical Attack +5"
        ],
        dungeons: [
          "Reveal the top 4 cards of your deck. Place all revealed spells (if any) into your hand. Discard the rest."
        ],
        points: 4,
        set: "WC"
      }
    },
    honormain: {
      heroGroup: true,
      level1: {
        title: "Honormain Gallant",
        group: "Honormain",
        traits: [
          "Human",
          "Fighter",
          "Cleric",
          "Level 1"
        ],
        level: 1,
        goldValue: 0,
        strength: 5,
        cost: 7,
        attacks: [
          "Physical Attack +2"
        ],
        villages: [
          "Discard 1 card or destroy 1 disease."
        ],
        dungeons: [
          "Discard 1 card or destroy 1 disease."
        ],
        xp: 2,
        points: 0,
        set: "RoC"
      },
      level2: {
        title: "Honormain Defender",
        group: "Honormain",
        traits: [
          "Human",
          "Fighter",
          "Cleric",
          "Level 2"
        ],
        level: 2,
        goldValue: 0,
        strength: 6,
        cost: 10,
        attacks: [
          "Physical Attack +3"
        ],
        dungeons: [
          "Discard 1 card to add Magic Attack +1.",
          "Destroy 1 disease to add Magic Attack +2."
        ],
        xp: 3,
        points: 0,
        set: "RoC"
      },
      level3: {
        title: "Honormain Paladin",
        group: "Honormain",
        traits: [
          "Human",
          "Fighter",
          "Cleric",
          "Level 3"
        ],
        level: 3,
        goldValue: 0,
        strength: 6,
        cost: 12,
        attacks: [
          "Physical Attack +5"
        ],
        repeatDungeons: [
          "Discard 1 card to add Magic Attack +1.",
          "Destroy 1 disease to add Magic Attack +2."
        ],
        points: 2,
        set: "RoC"
      }
    },
    intelligent: {
      heroGroup: true,
      level1: {
        title: "Intelligent",
        group: "Intelligent",
        traits: [
          "Human",
          "Cleric",
          "Level 1"
        ],
        level: 1,
        goldValue: 0,
        strength: 4,
        cost: 5,
        attacks: [
          "Physical Attack +1"
        ],
        reacts: [
          "After a card is destroyed, add Physical Attack +2."
        ],
        xp: 2,
        points: 0,
        set: "Numenera"
      },
      level2: {
        title: "Intelligent Jack",
        group: "Intelligent",
        traits: [
          "Human",
          "Cleric",
          "Level 2"
        ],
        level: 2,
        goldValue: 0,
        strength: 5,
        cost: 9,
        attacks: [
          "Physical Attack +2"
        ],
        dungeons: [
          "Destroy 1 card."
        ],
        reacts: [
          "After a card is destroyed, add Physical Attack +2."
        ],
        xp: 3,
        points: 0,
        set: "Numenera"
      },
      level3: {
        title: "Enhanced Intelligent Jack",
        group: "Intelligent",
        traits: [
          "Human",
          "Cleric",
          "Level 3"
        ],
        level: 3,
        goldValue: 0,
        strength: 5,
        cost: 12,
        attacks: [
          "Physical Attack +3"
        ],
        dungeons: [
          "Destroy 1 card."
        ],
        reacts: [
          "After a card is destroyed, add Physical Attack +4 and Light +2."
        ],
        points: 2,
        set: "Numenera"
      }
    },
    isri: {
      heroGroup: true,
      level1: {
        title: "Isri Thrower",
        group: "Isri",
        traits: [
          "Human",
          "Fighter",
          "Ranger",
          "Level 1"
        ],
        level: 1,
        goldValue: 0,
        strength: 5,
        cost: 7,
        attacks: [
          "Physical Attack +2"
        ],
        dungeons: [
          "Destroy 1 item or weapon to add Physical Attack +1."
        ],
        xp: 2,
        points: 0,
        set: "WC"
      },
      level2: {
        title: "Isri Bladespinner",
        group: "Isri",
        traits: [
          "Human",
          "Fighter",
          "Ranger",
          "Level 2"
        ],
        level: 2,
        goldValue: 0,
        strength: 6,
        cost: 10,
        attacks: [
          "Physical Attack +3"
        ],
        dungeons: [
          "Destroy 1 weapon to add Physical Attack equal to the weapon's Weight."
        ],
        spoils: [
          "Buy 1 weapon."
        ],
        xp: 3,
        points: 0,
        set: "WC"
      },
      level3: {
        title: "Isri Helmsplitter",
        group: "Isri",
        traits: [
          "Human",
          "Fighter",
          "Ranger",
          "Level 3"
        ],
        level: 3,
        goldValue: 0,
        strength: 7,
        cost: 13,
        attacks: [
          "Physical Attack +4"
        ],
        dungeons: [
          "Destroy 1 weapon present or 1 weapon from the village to add Physical Attack equal to the weapon's Weight."
        ],
        points: 1,
        set: "WC"
      },
      level4: {
        title: "Isri Heartseeker",
        group: "Isri",
        traits: [
          "Human",
          "Fighter",
          "Ranger",
          "Level 4"
        ],
        level: 4,
        goldValue: 0,
        strength: 8,
        cost: 17,
        attacks: [
          "Physical Attack +5"
        ],
        dungeons: [
          "Add Physical Attack equal to the Weight of 1 weapon equipped to this hero, or destroy 1 weapon from the village to add Physical Attack equal to that weapon's Weight."
        ],
        points: 3,
        set: "WC"
      }
    },
    krell: {
      heroGroup: true,
      level1: {
        title: "Krell Warrior",
        group: "Krell",
        traits: [
          "Fighter",
          "Level 1"
        ],
        level: 1,
        goldValue: 0,
        strength: 6,
        cost: 7,
        attacks: [
          "Physical Attack +2"
        ],
        specialEffects: [
          "Additional Attack +2 if you reveal 4 or more Heroes."
        ],
        xp: 2,
        points: 0,
        set: "Original"
      },
      level2: {
        title: "Krell Warleader",
        group: "Krell",
        traits: [
          "Fighter",
          "Level 2"
        ],
        level: 2,
        goldValue: 0,
        strength: 7,
        cost: 10,
        attacks: [
          "Physical Attack +3"
        ],
        specialEffects: [
          "Additional Attack +1 for each Militia or Mercenary you reveal."
        ],
        xp: 3,
        points: 0,
        set: "Original"
      },
      level3: {
        title: "Krell Warlord",
        group: "Krell",
        traits: [
          "Fighter",
          "Level 3"
        ],
        level: 3,
        goldValue: 0,
        strength: 8,
        cost: 13,
        attacks: [
          "Physical Attack +4"
        ],
        specialEffects: [
          "Additional Attack +2 for each Militia or Mercenary you reveal."
        ],
        points: 2,
        set: "Original"
      },
      level4: {
        title: "Krell Warmaster",
        group: "Krell",
        traits: [
          "Fighter",
          "Level 4"
        ],
        level: 4,
        goldValue: 0,
        strength: 9,
        cost: 17,
        attacks: [
          "Physical Attack +5"
        ],
        dungeons: [
          "Each other player must reveal a Militia or discard 1 card at random. Gain Attack +2 for each Militia revealed, including those revealed by opponents."
        ],
        points: 4,
        set: "Original"
      }
    },
    learned: {
      heroGroup: true,
      level1: {
        title: "Learned",
        group: "Learned",
        traits: [
          "Human",
          "Wizard",
          "Level 1"
        ],
        level: 1,
        goldValue: 0,
        strength: 2,
        cost: 8,
        attacks: [
          "Magic Attack +1"
        ],
        villages: [
          "Discard 1 card to draw 1 card."
        ],
        dungeons: [
          "Discard 1 card to draw 1 card."
        ],
        xp: 2,
        points: 0,
        set: "Numenera"
      },
      level2: {
        title: "Learned Nano",
        group: "Learned",
        traits: [
          "Human",
          "Wizard",
          "Level 2"
        ],
        level: 2,
        goldValue: 0,
        strength: 2,
        cost: 11,
        attacks: [
          "Magic Attack +2"
        ],
        dungeons: [
          "Discard 3 cards to draw 2 cards."
        ],
        xp: 3,
        points: 0,
        set: "Numenera"
      },
      level3: {
        title: "Enhanced Learned Nano",
        group: "Learned",
        traits: [
          "Human",
          "Wizard",
          "Level 3"
        ],
        level: 3,
        goldValue: 0,
        strength: 2,
        cost: 13,
        attacks: [
          "Magic Attack +4"
        ],
        dungeons: [
          "Draw 2 cards. Discard 1 card."
        ],
        points: 2,
        set: "Numenera"
      }
    },
    lorigg: {
      heroGroup: true,
      level1: {
        title: "Lorigg Thief",
        group: "Lorigg",
        traits: [
          "Human",
          "Thief",
          "Level 1"
        ],
        level: 1,
        goldValue: 2,
        strength: 4,
        light: 1,
        cost: 5,
        attacks: [
          "Physical Attack +1"
        ],
        xp: 2,
        points: 0,
        set: "ItA"
      },
      level2: {
        title: "Lorigg Rogue",
        group: "Lorigg",
        traits: [
          "Human",
          "Thief",
          "Level 2"
        ],
        level: 2,
        goldValue: 3,
        strength: 4,
        light: 1,
        cost: 8,
        attacks: [
          "Physical Attack +2"
        ],
        dungeons: [
          "Each other player discards 1 card (of his or her choice)."
        ],
        xp: 3,
        points: 0,
        set: "ItA"
      },
      level3: {
        title: "Lorigg Outlaw",
        group: "Lorigg",
        traits: [
          "Human",
          "Thief",
          "Level 3"
        ],
        level: 3,
        goldValue: 4,
        strength: 5,
        light: 2,
        cost: 10,
        attacks: [
          "Physical Attack +2"
        ],
        dungeons: [
          "Each other player discards 1 card (of his or her choice)."
        ],
        points: 1,
        set: "ItA"
      },
      level4: {
        title: "Lorigg Guildmaster",
        group: "Lorigg",
        traits: [
          "Human",
          "Thief",
          "Level 4"
        ],
        level: 4,
        goldValue: 5,
        strength: 5,
        light: 3,
        cost: 14,
        attacks: [
          "Physical Attack +3"
        ],
        villages: [
          "Each other player reveals his or her hand and discards his or her highest level hero."
        ],
        dungeons: [
          "Each other player reveals his or her hand and discards his or her highest level hero."
        ],
        points: 3,
        set: "ItA"
      }
    },
    lurker: {
      heroGroup: true,
      level1: {
        title: "Lurker Footpad",
        group: "Lurker",
        traits: [
          "Thief",
          "Level 1"
        ],
        level: 1,
        goldValue: 1,
        strength: 4,
        light: 1,
        cost: 5,
        attacks: [
          "Attack +1"
        ],
        xp: 2,
        points: 0,
        set: "Original"
      },
      level2: {
        title: "Lurker Whisper",
        group: "Lurker",
        traits: [
          "Thief",
          "Level 2"
        ],
        level: 2,
        goldValue: 1,
        strength: 5,
        light: 1,
        cost: 8,
        attacks: [
          "Attack +2"
        ],
        dungeons: [
          "Each other player discards an Item or reveals he has none. Light +1 if any Light Items are discarded."
        ],
        xp: 3,
        points: 0,
        set: "Original"
      },
      level3: {
        title: "Lurker Specter",
        group: "Lurker",
        traits: [
          "Thief",
          "Level 3"
        ],
        level: 3,
        goldValue: 2,
        strength: 5,
        light: 2,
        cost: 11,
        attacks: [
          "Attack +3"
        ],
        dungeons: [
          "Each other player discards an Item or reveals he has none. You may use one of the discarded Items, returning it to owner at the end of the turn."
        ],
        points: 3,
        set: "Original"
      }
    },
    magehunter: {
      heroGroup: true,
      level1: {
        title: "Magehunter Fist",
        group: "Magehunter",
        traits: [
          "Fighter",
          "Level 1"
        ],
        level: 1,
        goldValue: 0,
        strength: 5,
        cost: 6,
        attacks: [
          "Attack +2"
        ],
        specialEffects: [
          "Additional Attack +1 if no Magic Attack is present."
        ],
        xp: 2,
        points: 0,
        set: "Original"
      },
      level2: {
        title: "Magehunter Flame",
        group: "Magehunter",
        traits: [
          "Fighter",
          "Level 2"
        ],
        level: 2,
        goldValue: 0,
        strength: 6,
        cost: 9,
        attacks: [
          "Attack +3"
        ],
        specialEffects: [
          "Additional Attack +2 if no Magic Attack is present."
        ],
        xp: 3,
        points: 0,
        set: "Original"
      },
      level3: {
        title: "Magehunter Fell",
        group: "Magehunter",
        traits: [
          "Fighter",
          "Level 3"
        ],
        level: 3,
        goldValue: 0,
        strength: 7,
        cost: 12,
        attacks: [
          "Attack +4"
        ],
        specialEffects: [
          "Additional Attack +3 if no Magic Attack is present."
        ],
        spoils: [
          "Buy a Mercenary."
        ],
        points: 1,
        set: "Original"
      }
    },
    moonclaw: {
      heroGroup: true,
      level1: {
        title: "Moonclaw class",
        group: "Moonclaw",
        traits: [
          "Corvaxis",
          "Ranger",
          "Level 1"
        ],
        level: 1,
        goldValue: 0,
        strength: 5,
        cost: 5,
        attacks: [
          "Physical Attack +2"
        ],
        aftermaths: [
          "If you did not defeat a monster, destroy this card."
        ],
        xp: 2,
        points: 0,
        set: "RoC"
      },
      level2: {
        title: "Moonclaw Courser",
        group: "Moonclaw",
        traits: [
          "Corvaxis",
          "Ranger",
          "Level 2"
        ],
        level: 2,
        goldValue: -1,
        strength: 5,
        cost: 8,
        attacks: [
          "Physical Attack +3"
        ],
        dungeons: [
          "Reveal the bottom card of the dungeon deck. If it is a non-Guardian monster, you may switch it with a monster in rank 3 or higher."
        ],
        xp: 3,
        points: 0,
        set: "RoC"
      },
      level3: {
        title: "Moonclaw Ranger",
        group: "Moonclaw",
        traits: [
          "Corvaxis",
          "Ranger",
          "Level 3"
        ],
        level: 3,
        goldValue: -2,
        strength: 5,
        cost: 11,
        attacks: [
          "Physical Attack +4"
        ],
        dungeons: [
          "Reveal the bottom card of the dungeon deck. If it is a non-Guardian monster, you may switch it with any monster in the hall."
        ],
        points: 2,
        set: "RoC"
      }
    },
    mystic: {
      heroGroup: true,
      level1: {
        title: "Mystic",
        group: "Mystic",
        traits: [
          "Human",
          "Fighter",
          "Wizard",
          "Level 1"
        ],
        level: 1,
        goldValue: 0,
        strength: 4,
        cost: 7,
        attacks: [
          "Physical Attack +1",
          "Magic Attack +1"
        ],
        xp: 2,
        points: 0,
        set: "Numenera"
      },
      level2: {
        title: "Mystic Glaive",
        group: "Mystic",
        traits: [
          "Human",
          "Fighter",
          "Wizard",
          "Level 2"
        ],
        level: 2,
        goldValue: 0,
        strength: 5,
        light: 1,
        cost: 10,
        attacks: [
          "Physical Attack +4"
        ],
        dungeons: [
          "Convert this hero's Physical Attack to Magic Attack."
        ],
        xp: 3,
        points: 0,
        set: "Numenera"
      },
      level3: {
        title: "Enhanced Mystic Glaive",
        group: "Mystic",
        traits: [
          "Human",
          "Fighter",
          "Wizard",
          "Level 3"
        ],
        level: 3,
        goldValue: 0,
        strength: 6,
        light: 1,
        cost: 13,
        attacks: [
          "Physical Attack +6"
        ],
        dungeons: [
          "Convert this hero's Physical Attack to Magic Attack."
        ],
        points: 3,
        set: "Numenera"
      }
    },
    nightblade: {
      heroGroup: true,
      level1: {
        title: "Nightblade Slasher",
        group: "Nightblade",
        traits: [
          "Fighter",
          "Thief",
          "Level 1"
        ],
        level: 1,
        goldValue: 1,
        strength: 4,
        cost: 7,
        attacks: [
          "Attack +2"
        ],
        specialEffects: [
          "Additional Attack +1 if equipped with an Edged Weapon with a Weight of 3 or less."
        ],
        xp: 2,
        points: 0,
        set: "Original"
      },
      level2: {
        title: "Nightblade Cutthroat",
        group: "Nightblade",
        traits: [
          "Fighter",
          "Thief",
          "Level 2"
        ],
        level: 2,
        goldValue: 1,
        strength: 5,
        cost: 10,
        attacks: [
          "Attack +3"
        ],
        specialEffects: [
          "Additional Attack +3 if equipped with an Edged Weapon with a Weight of 3 or less.",
          "Attack +1 if you have no Light Items."
        ],
        xp: 3,
        points: 0,
        set: "Original"
      },
      level3: {
        title: "Nightblade Assassin",
        group: "Nightblade",
        traits: [
          "Fighter",
          "Thief",
          "Level 3"
        ],
        level: 3,
        goldValue: 2,
        strength: 6,
        cost: 13,
        attacks: [
          "Attack +3"
        ],
        dungeons: [
          "Each other player chooses and discards a Light Item or reveals he has none."
        ],
        specialEffects: [
          "Additional Attack +6 if equipped with an Edged Weapon with a Weight of 3 or less."
        ],
        points: 3,
        set: "Original"
      }
    },
    nyth: {
      heroGroup: true,
      level1: {
        title: "Nyth class",
        group: "Nyth",
        traits: [
          "Archer",
          "Level 1"
        ],
        level: 1,
        goldValue: 0,
        strength: 4,
        cost: 7,
        specialEffects: [
          "Attack +1 per rank of the target.",
          "Light +1 if bow is equipped."
        ],
        xp: 2,
        points: 0,
        set: "Original"
      },
      level2: {
        title: "Nyth Yeoman",
        group: "Nyth",
        traits: [
          "Archer",
          "Level 2"
        ],
        level: 2,
        goldValue: 0,
        strength: 5,
        cost: 10,
        specialEffects: [
          "Attack +2 per rank of the target.",
          "Light +1 if a bow is equipped."
        ],
        xp: 3,
        points: 0,
        set: "Original"
      },
      level3: {
        title: "Nyth Marksman",
        group: "Nyth",
        traits: [
          "Archer",
          "Level 3"
        ],
        level: 3,
        goldValue: 0,
        strength: 5,
        cost: 13,
        specialEffects: [
          "Attack +3 per rank of the target.",
          "Light +1 if a bow is equipped."
        ],
        points: 3,
        set: "Original"
      }
    },
    outlands: {
      heroGroup: true,
      level1: {
        title: "Outlands Warrior",
        group: "Outlands",
        traits: [
          "Human",
          "Fighter",
          "Level 1"
        ],
        level: 1,
        goldValue: 0,
        strength: 7,
        cost: 8,
        attacks: [
          "Physical Attack +3"
        ],
        dungeons: [
          "Destroy 1 food to add Physical Attack +3."
        ],
        xp: 2,
        points: 0,
        set: "ItA"
      },
      level2: {
        title: "Outlands Slayer",
        group: "Outlands",
        traits: [
          "Human",
          "Fighter",
          "Level 2"
        ],
        level: 2,
        goldValue: 0,
        strength: 8,
        cost: 11,
        attacks: [
          "Physical Attack +4"
        ],
        dungeons: [
          "Add Physical Attack +1 for each monster present."
        ],
        repeatDungeons: [
          "Destroy 1 food to add Physical Attack +3."
        ],
        xp: 3,
        points: 0,
        set: "ItA"
      },
      level3: {
        title: "Outlands Khan",
        group: "Outlands",
        traits: [
          "Human",
          "Fighter",
          "Level 3"
        ],
        level: 3,
        goldValue: 0,
        strength: 8,
        cost: 13,
        attacks: [
          "Physical Attack +5"
        ],
        dungeons: [
          "Add Physical Attack +2 for each monster present."
        ],
        points: 2,
        set: "ItA"
      },
      level4: {
        title: "Outlands Sovereign",
        group: "Outlands",
        traits: [
          "Human",
          "Fighter",
          "Level 4"
        ],
        level: 4,
        goldValue: 0,
        strength: 10,
        cost: 17,
        attacks: [
          "Physical Attack +7"
        ],
        dungeons: [
          "Add Physical Attack equal to the total XP of all monsters present."
        ],
        points: 4,
        set: "ItA"
      }
    },
    patternmage: {
      heroGroup: true,
      level1: {
        title: "Patternmage Augur",
        group: "Patternmage",
        traits: [
          "Human",
          "Wizard",
          "Level 1"
        ],
        level: 1,
        goldValue: 0,
        strength: 2,
        cost: 7,
        attacks: [
          "Magic Attack +2"
        ],
        villages: [
          "Look at the top 2 cards of your deck. Discard 1 of them. Place the other on top of your deck."
        ],
        dungeons: [
          "Look at the top 2 cards of your deck. Discard 1 of them. Place the other on top of your deck."
        ],
        xp: 2,
        points: 0,
        set: "CoB"
      },
      level2: {
        title: "Patternmage Diviner",
        group: "Patternmage",
        traits: [
          "Human",
          "Wizard",
          "Level 2"
        ],
        level: 2,
        goldValue: 0,
        strength: 3,
        cost: 9,
        attacks: [
          "Magic Attack +3"
        ],
        villages: [
          "Look at the top 3 cards of your deck. Discard 2 of them. Place the other on top of your deck."
        ],
        dungeons: [
          "Look at the top 3 cards of your deck. Discard 2 of them. Place the other on top of your deck.",
          "Draw 1 card."
        ],
        xp: 3,
        points: 0,
        set: "CoB"
      },
      level3: {
        title: "Patternmage Ordainer",
        group: "Patternmage",
        traits: [
          "Human",
          "Wizard",
          "Level 3"
        ],
        level: 3,
        goldValue: 0,
        strength: 4,
        cost: 12,
        attacks: [
          "Magic Attack +4"
        ],
        villages: [
          "Look at the top 3 cards of your deck. Discard any or all of them. Place the rest on top of your deck in any order."
        ],
        dungeons: [
          "Look at the top 3 cards of your deck. Discard any or all of them. Place the rest on top of your deck in any order.",
          "Draw 1 card."
        ],
        specialEffects: [
          "ability"
        ],
        points: 1,
        set: "CoB"
      }
    },
    phalanx: {
      heroGroup: true,
      level1: {
        title: "Phalanx Footman",
        group: "Phalanx",
        traits: [
          "Fighter",
          "Level 1"
        ],
        level: 1,
        goldValue: 0,
        strength: 5,
        cost: 5,
        attacks: [
          "Attack +2"
        ],
        specialEffects: [
          "Additional Attack +1 and Strength +1 for each other Phalanx you reveal."
        ],
        xp: 6,
        points: 0,
        set: "Original"
      },
      level2: {
        title: "Phalanx Officer",
        group: "Phalanx",
        traits: [
          "Fighter",
          "Level 2"
        ],
        level: 2,
        goldValue: 0,
        strength: 7,
        cost: 13,
        attacks: [
          "Attack +4"
        ],
        villages: [
          "Draw 1 card for each other Phalanx you reveal."
        ],
        dungeons: [
          "Draw 1 card for each other Phalanx you reveal."
        ],
        specialEffects: [
          "ability"
        ],
        points: 1,
        set: "Original"
      }
    },
    profaned: {
      heroGroup: true,
      level1: {
        title: "Profaned Acolyte",
        group: "Profaned",
        traits: [
          "Human",
          "Wizard",
          "Cleric",
          "Level 1"
        ],
        level: 1,
        goldValue: 0,
        strength: 3,
        cost: 5,
        attacks: [
          "Magic Attack +1"
        ],
        dungeons: [
          "Light +1. Gain 1 curse."
        ],
        xp: 2,
        points: 0,
        set: "RoC"
      },
      level2: {
        title: "Profaned Curate",
        group: "Profaned",
        traits: [
          "Human",
          "Wizard",
          "Cleric",
          "Level 2"
        ],
        level: 2,
        goldValue: 0,
        strength: 4,
        light: 1,
        cost: 8,
        attacks: [
          "Magic Attack +2"
        ],
        villages: [
          "Draw 1 card. Gain 1 curse."
        ],
        dungeons: [
          "Draw 1 card. Gain 1 curse."
        ],
        repeatDungeons: [
          "Destroy 1 disease to add Magic Attack +3."
        ],
        xp: 3,
        points: 0,
        set: "RoC"
      },
      level3: {
        title: "Profaned Patriarch",
        group: "Profaned",
        traits: [
          "Human",
          "Wizard",
          "Cleric",
          "Level 3"
        ],
        level: 3,
        goldValue: 0,
        strength: 5,
        light: 1,
        cost: 11,
        attacks: [
          "Magic Attack +3"
        ],
        repeatDungeons: [
          "Destroy 1 disease to add Magic Attack +3 and draw 1 card."
        ],
        points: 2,
        set: "RoC"
      }
    },
    rapparee: {
      heroGroup: true,
      level1: {
        title: "Rapparee Scrounger",
        group: "Rapparee",
        traits: [
          "Elf",
          "Thief",
          "Level 1"
        ],
        level: 1,
        goldValue: 3,
        strength: 3,
        cost: 5,
        attacks: [
          "Physical Attack +1"
        ],
        xp: 2,
        points: 0,
        set: "CoB"
      },
      level2: {
        title: "Rapparee Skimmer",
        group: "Rapparee",
        traits: [
          "Elf",
          "Thief",
          "Level 2"
        ],
        level: 2,
        goldValue: 3,
        strength: 4,
        cost: 9,
        attacks: [
          "Physical Attack +2"
        ],
        spoils: [
          "Buy 1 item or weapon."
        ],
        xp: 3,
        points: 0,
        set: "CoB"
      },
      level3: {
        title: "Rapparee Looter",
        group: "Rapparee",
        traits: [
          "Elf",
          "Thief",
          "Level 3"
        ],
        level: 3,
        goldValue: 4,
        strength: 4,
        cost: 12,
        attacks: [
          "Physical Attack +3"
        ],
        spoils: [
          "Buy 1 village card. Place it on top of your deck."
        ],
        points: 1,
        set: "CoB"
      }
    },
    redblade: {
      heroGroup: true,
      level1: {
        title: "Redblade Killer",
        group: "Redblade",
        traits: [
          "Fighter",
          "Thief",
          "Level 1"
        ],
        level: 1,
        goldValue: 1,
        strength: 5,
        cost: 5,
        attacks: [
          "Attack +2"
        ],
        xp: 2,
        points: 0,
        set: "Original"
      },
      level2: {
        title: "Redblade Poisoner",
        group: "Redblade",
        traits: [
          "Fighter",
          "Thief",
          "Level 2"
        ],
        level: 2,
        goldValue: 2,
        strength: 5,
        cost: 8,
        attacks: [
          "Attack +3"
        ],
        dungeons: [
          "All other players discard one card."
        ],
        xp: 3,
        points: 0,
        set: "Original"
      },
      level3: {
        title: "Redblade Assassin",
        group: "Redblade",
        traits: [
          "Fighter",
          "Thief",
          "Level 3"
        ],
        level: 3,
        goldValue: 2,
        strength: 6,
        cost: 9,
        attacks: [
          "Attack +4"
        ],
        dungeons: [
          "All other playes discard one Hero or two cards."
        ],
        points: 2,
        set: "Original"
      }
    },
    regian: {
      heroGroup: true,
      level1: {
        title: "Regian class",
        group: "Regian",
        traits: [
          "Human",
          "Cleric",
          "Level 1"
        ],
        level: 1,
        goldValue: 0,
        strength: 4,
        cost: 5,
        attacks: [
          "Magic Attack +1"
        ],
        repeatDungeons: [
          "Destroy 1 disease to draw 1 card."
        ],
        xp: 2,
        points: 0,
        set: "ItA"
      },
      level2: {
        title: "Regian Priest",
        group: "Regian",
        traits: [
          "Human",
          "Cleric",
          "Level 2"
        ],
        level: 2,
        goldValue: 0,
        strength: 4,
        cost: 8,
        attacks: [
          "Magic Attack +2"
        ],
        dungeons: [
          "Draw 1 card."
        ],
        repeatDungeons: [
          "Destroy 1 disease to draw 1 card."
        ],
        xp: 3,
        points: 0,
        set: "ItA"
      },
      level3: {
        title: "Regian Bishop",
        group: "Regian",
        traits: [
          "Human",
          "Cleric",
          "Level 3"
        ],
        level: 3,
        goldValue: 0,
        strength: 5,
        cost: 11,
        attacks: [
          "Magic Attack +3"
        ],
        dungeons: [
          "Draw 2 cards."
        ],
        repeatDungeons: [
          "Destroy 1 disease to draw 2 cards."
        ],
        points: 2,
        set: "ItA"
      },
      level4: {
        title: "Regian Archbishop",
        group: "Regian",
        traits: [
          "Human",
          "Cleric",
          "Level 4"
        ],
        level: 4,
        goldValue: 0,
        strength: 5,
        cost: 15,
        attacks: [
          "Magic Attack +4"
        ],
        dungeons: [
          "Draw 3 cards."
        ],
        repeatDungeons: [
          "Destroy 1 disease to draw 3 cards."
        ],
        points: 4,
        set: "ItA"
      }
    },
    rugged: {
      heroGroup: true,
      level1: {
        title: "Rugged",
        group: "Rugged",
        traits: [
          "Human",
          "Ranger",
          "Level 1"
        ],
        level: 1,
        goldValue: -1,
        strength: 5,
        cost: 5,
        attacks: [
          "Physical Attack +1"
        ],
        villages: [
          "Mark 1 monster in the hall."
        ],
        aftermaths: [
          "Mark 1 monster in the hall."
        ],
        reacts: [
          "After another player selects a monster with your mark to fight, gain 1 XP."
        ],
        xp: 2,
        points: 0,
        set: "Numenera"
      },
      level2: {
        title: "Rugged Jack",
        group: "Rugged",
        traits: [
          "Human",
          "Ranger",
          "Level 2"
        ],
        level: 2,
        goldValue: -1,
        strength: 6,
        cost: 9,
        attacks: [
          "Physical Attack +3"
        ],
        aftermaths: [
          "Mark 1 monster in the hall."
        ],
        reacts: [
          "After any player (including you) selects a monster with your mark to fight, gain 1 XP."
        ],
        xp: 3,
        points: 0,
        set: "Numenera"
      },
      level3: {
        title: "Enhanced Rugged Jack",
        group: "Rugged",
        traits: [
          "Human",
          "Ranger",
          "Level 3"
        ],
        level: 3,
        goldValue: -1,
        strength: 6,
        cost: 12,
        attacks: [
          "Physical Attack +5"
        ],
        reacts: [
          "After another player selects a monster with your mark to fight, take a prepare action."
        ],
        aftermaths: [
          "Mark 1 monster in the hall."
        ],
        points: 2,
        set: "Numenera"
      }
    },
    selurin: {
      heroGroup: true,
      level1: {
        title: "Selurin Magician",
        group: "Selurin",
        traits: [
          "Wizard",
          "Level 1"
        ],
        level: 1,
        goldValue: 0,
        strength: 2,
        cost: 8,
        attacks: [
          "Magic Attack +2"
        ],
        specialEffects: [
          "All Items and Magic Attack Spells gain Magic Attack +1."
        ],
        xp: 2,
        points: 0,
        set: "Original"
      },
      level2: {
        title: "Selurin Warlock",
        group: "Selurin",
        traits: [
          "Wizard",
          "Level 2"
        ],
        level: 2,
        goldValue: 0,
        strength: 2,
        cost: 10,
        attacks: [
          "Magic Attack +2"
        ],
        specialEffects: [
          "Total Magic Attack x2 (apply last)"
        ],
        xp: 3,
        points: 0,
        set: "Original"
      },
      level3: {
        title: "Selurin Theurge",
        group: "Selurin",
        traits: [
          "Wizard",
          "Level 3"
        ],
        level: 3,
        goldValue: 0,
        strength: 3,
        cost: 13,
        attacks: [
          "Magic Attack +2"
        ],
        dungeons: [
          "Each player discards one Hero or shows they have none. You may borrow one of these discarded Heros for the battle, returning it at the end."
        ],
        specialEffects: [
          "Total Magic Attack x2 (apply last)"
        ],
        points: 1,
        set: "Original"
      }
    },
    silvertongue: {
      heroGroup: true,
      level1: {
        title: "Silvertongue Swindler",
        group: "Silvertongue",
        traits: [
          "Human",
          "Thief",
          "Level 1"
        ],
        level: 1,
        goldValue: 1,
        strength: 4,
        cost: 5,
        attacks: [
          "Physical Attack +1"
        ],
        villages: [
          "Place a village card present back on its stack to gain 2 gold."
        ],
        xp: 2,
        points: 0,
        set: "RoC"
      },
      level2: {
        title: "Silvertongue Rook",
        group: "Silvertongue",
        traits: [
          "Human",
          "Thief",
          "Level 2"
        ],
        level: 2,
        goldValue: 2,
        strength: 4,
        cost: 7,
        attacks: [
          "Physical Attack +2"
        ],
        villages: [
          "Give another player a village card present to either add Physical Attack +2 or gain 2 gold."
        ],
        dungeons: [
          "Give another player a village card present to either add Physical Attack +2 or gain 2 gold."
        ],
        xp: 3,
        points: 0,
        set: "RoC"
      },
      level3: {
        title: "Silvertongue Sharp",
        group: "Silvertongue",
        traits: [
          "Human",
          "Thief",
          "Level 3"
        ],
        level: 3,
        goldValue: 3,
        strength: 5,
        cost: 10,
        attacks: [
          "Physical Attack +3"
        ],
        villages: [
          "Give another player a village card present to add Physical Attack +3 and draw 1 card."
        ],
        dungeons: [
          "Give another player a village card present to add Physical Attack +3 and draw 1 card."
        ],
        points: 2,
        set: "RoC"
      }
    },
    skinshifter: {
      heroGroup: true,
      level1: {
        title: "Skinshifter Clawhand",
        group: "Skinshifter",
        traits: [
          "Dwarf",
          "Cleric",
          "Level 1"
        ],
        level: 1,
        goldValue: 0,
        strength: 3,
        cost: 7,
        attacks: [
          "Physical Attack +1"
        ],
        dungeons: [
          "Discard a card to add Physical Attack +2 and Strength +1."
        ],
        xp: 2,
        points: 0,
        set: "CoB"
      },
      level2: {
        title: "Skinshifter Mauler",
        group: "Skinshifter",
        traits: [
          "Dwarf",
          "Cleric",
          "Level 2"
        ],
        level: 2,
        goldValue: 0,
        strength: 4,
        cost: 10,
        attacks: [
          "Physical Attack +2"
        ],
        dungeons: [
          "Discard a card to add Physical Attack +3 and Strength +2."
        ],
        xp: 3,
        points: 0,
        set: "CoB"
      },
      level3: {
        title: "Skinshifter Terror",
        group: "Skinshifter",
        traits: [
          "Dwarf",
          "Cleric",
          "Level 3"
        ],
        level: 3,
        goldValue: 0,
        strength: 5,
        cost: 13,
        attacks: [
          "Physical Attack +4"
        ],
        dungeons: [
          "Discard or destroy a card to add Physical Attack +4 and Strength +3. If the card was a disease, yu may use this ability a second time this turn."
        ],
        points: 2,
        set: "CoB"
      }
    },
    spellsword: {
      heroGroup: true,
      level1: {
        title: "Spellsword Venturer",
        group: "Spellsword",
        traits: [
          "Elf",
          "Fighter",
          "Level 1"
        ],
        level: 1,
        goldValue: 0,
        strength: 5,
        cost: 8,
        attacks: [
          "Physical Attack +2"
        ],
        specialEffects: [
          "Add Magic Attack +1 if at least 1 magic item, magic weapon, or spell is present."
        ],
        xp: 2,
        points: 0,
        set: "CoB"
      },
      level2: {
        title: "Spellsword Challenger",
        group: "Spellsword",
        traits: [
          "Elf",
          "Fighter",
          "Level 2"
        ],
        level: 2,
        goldValue: 0,
        strength: 5,
        light: 1,
        cost: 10,
        attacks: [
          "Physical Attack +3"
        ],
        specialEffects: [
          "Add Magic Attack +1 for each magic item, magic weapon, and spell present."
        ],
        xp: 3,
        points: 0,
        set: "CoB"
      },
      level3: {
        title: "Spellsword Vanquisher",
        group: "Spellsword",
        traits: [
          "Elf",
          "Fighter",
          "Level 3"
        ],
        level: 3,
        goldValue: 0,
        strength: 6,
        light: 1,
        cost: 12,
        attacks: [
          "Physical Attack +4"
        ],
        spoils: [
          "Buy 1 magic item, magic weapon, or spell."
        ],
        specialEffects: [
          "Add Magic Attack +2 for each magic item, magic weapon, and spell present."
        ],
        points: 2,
        set: "CoB"
      }
    },
    stealthy: {
      heroGroup: true,
      level1: {
        title: "Stealthy",
        group: "Stealthy",
        traits: [
          "Human",
          "Thief",
          "Level 1"
        ],
        level: 1,
        goldValue: 2,
        strength: 3,
        cost: 5,
        attacks: [
          "Physical Attack +1"
        ],
        villages: [
          "Buy 1 additional card this turn."
        ],
        xp: 2,
        points: 0,
        set: "Numenera"
      },
      level2: {
        title: "Stealthy Jack",
        group: "Stealthy",
        traits: [
          "Human",
          "Thief",
          "Level 2"
        ],
        level: 2,
        goldValue: 2,
        strength: 4,
        cost: 8,
        attacks: [
          "Physical Attack +2"
        ],
        villages: [
          "Buy 1 additional card this turn."
        ],
        spoils: [
          "Buy 1 non-hero card."
        ],
        xp: 3,
        points: 0,
        set: "Numenera"
      },
      level3: {
        title: "Enhanced Stealthy Jack",
        group: "Stealthy",
        traits: [
          "Human",
          "Thief",
          "Level 3"
        ],
        level: 3,
        goldValue: 2,
        strength: 4,
        cost: 11,
        attacks: [
          "Physical Attack +3"
        ],
        villages: [
          "Buy 1 card and add it to your hand."
        ],
        dungeons: [
          "Buy 1 card and add it to your hand."
        ],
        points: 2,
        set: "Numenera"
      }
    },
    sternnkin: {
      heroGroup: true,
      level1: {
        title: "Sternnkin Orcbane",
        group: "Sternnkin",
        traits: [
          "Dwarf",
          "Fighter",
          "Level 1"
        ],
        level: 1,
        goldValue: 0,
        strength: 5,
        cost: 6,
        attacks: [
          "Physical Attack +2"
        ],
        xp: 2,
        points: 0,
        set: "ToR"
      },
      level2: {
        title: "Sternnkin Ettinbane",
        group: "Sternnkin",
        traits: [
          "Dwarf",
          "Fighter",
          "Level 2"
        ],
        level: 2,
        goldValue: 0,
        strength: 5,
        cost: 9,
        attacks: [
          "Physical Attack +3"
        ],
        specialEffects: [
          "Add Physical Attack +2 when fighting monsters with VP greater than this card's Strength."
        ],
        xp: 3,
        points: 0,
        set: "ToR"
      },
      level3: {
        title: "Sternnkin Dragonbane",
        group: "Sternnkin",
        traits: [
          "Dwarf",
          "Fighter",
          "Level 3"
        ],
        level: 3,
        goldValue: 0,
        strength: 5,
        cost: 12,
        attacks: [
          "Physical Attack +4"
        ],
        specialEffects: [
          "Add Physical Attack +3 when fighting monsters with VP greater than this card's Strength."
        ],
        points: 2,
        set: "ToR"
      }
    },
    stoneguard: {
      heroGroup: true,
      level1: {
        title: "Stoneguard Brute",
        group: "Stoneguard",
        traits: [
          "Dwarf",
          "Fighter",
          "Level 1"
        ],
        level: 1,
        goldValue: 0,
        strength: 6,
        cost: 8,
        attacks: [
          "Physical Attack +2"
        ],
        xp: 2,
        points: 0,
        set: "WC"
      },
      level2: {
        title: "Stoneguard Bruiser",
        group: "Stoneguard",
        traits: [
          "Dwarf",
          "Fighter",
          "Level 2"
        ],
        level: 2,
        goldValue: 0,
        strength: 7,
        cost: 11,
        attacks: [
          "Physical Attack +3"
        ],
        specialEffects: [
          "Add Physical Attack +2 while equipped.",
          "Add Physical Attack +1 for each mercenary present."
        ],
        xp: 3,
        points: 0,
        set: "WC"
      },
      level3: {
        title: "Stoneguard Tanker",
        group: "Stoneguard",
        traits: [
          "Dwarf",
          "Fighter",
          "Level 3"
        ],
        level: 3,
        goldValue: 0,
        strength: 8,
        cost: 13,
        attacks: [
          "Physical Attack +4"
        ],
        spoils: [
          "Add any mercenaries present to your new hand at the end of the turn."
        ],
        specialEffects: [
          "Add Physical Attack +3 while equipped.",
          "Add Physical Attack +1 for each mercenary present."
        ],
        points: 2,
        set: "WC"
      },
      level4: {
        title: "Stoneguard Juggernaut",
        group: "Stoneguard",
        traits: [
          "Dwarf",
          "Fighter",
          "Level 4"
        ],
        level: 4,
        goldValue: 0,
        strength: 9,
        cost: 17,
        attacks: [
          "Physical Attack +4"
        ],
        spoils: [
          "Add any mercenaries present to your new hand at the end of the turn."
        ],
        specialEffects: [
          "Add Physical Attack +5 while equipped.",
          "Add Physical Attack +2 for each mercenary present."
        ],
        points: 2,
        set: "WC"
      }
    },
    strong: {
      heroGroup: true,
      level1: {
        title: "Strong",
        group: "Strong",
        traits: [
          "Human",
          "Fighter",
          "Level 1"
        ],
        level: 1,
        goldValue: 0,
        strength: 6,
        cost: 8,
        attacks: [
          "Physical Attack +3"
        ],
        specialEffects: [
          "You cannot level up a Regular into this card."
        ],
        spoils: [
          "Discard 4 XP to level up this hero."
        ],
        points: 0,
        set: "Numenera"
      },
      level2: {
        title: "Strong Glaive",
        group: "Strong",
        traits: [
          "Human",
          "Fighter",
          "Level 2"
        ],
        level: 2,
        goldValue: 0,
        strength: 7,
        cost: 11,
        attacks: [
          "Physical Attack +6"
        ],
        spoils: [
          "Discard 6 XP to level up this hero."
        ],
        points: 0,
        set: "Numenera"
      },
      level3: {
        title: "Enhanced Strong Glaive",
        group: "Strong",
        traits: [
          "Human",
          "Fighter",
          "Level 3"
        ],
        level: 3,
        goldValue: 0,
        strength: 8,
        cost: 14,
        attacks: [
          "Physical Attack +9"
        ],
        points: 1,
        set: "Numenera"
      }
    },
    strongwilled: {
      heroGroup: true,
      level1: {
        title: "Strong-willed",
        group: "Strong-willed",
        traits: [
          "Human",
          "Thief",
          "Level 1"
        ],
        level: 1,
        goldValue: 2,
        strength: 4,
        light: 1,
        cost: 5,
        attacks: [
          "Physical Attack +1"
        ],
        xp: 2,
        points: 0,
        set: "Numenera"
      },
      level2: {
        title: "Strong-willed Jack",
        group: "Strong-willed",
        traits: [
          "Human",
          "Thief",
          "Level 2"
        ],
        level: 2,
        goldValue: 2,
        strength: 4,
        light: 1,
        cost: 8,
        attacks: [
          "Physical Attack +2"
        ],
        dungeons: [
          "Use the Dungeon ability on one item card even if you have already used it this turn."
        ],
        xp: 3,
        points: 0,
        set: "Numenera"
      },
      level3: {
        title: "Enhanced Strong-willed Jack",
        group: "Strong-willed",
        traits: [
          "Human",
          "Thief",
          "Level 3"
        ],
        level: 3,
        goldValue: 2,
        strength: 4,
        light: 2,
        cost: 10,
        attacks: [
          "Physical Attack +3"
        ],
        dungeons: [
          "Each other player discards 1 item or shows a hand with none. Add Physical Attack equal to the cost of 1 discarded card."
        ],
        points: 2,
        set: "Numenera"
      }
    },
    swift: {
      heroGroup: true,
      level1: {
        title: "Swift",
        group: "Swift",
        traits: [
          "Human",
          "Ranger",
          "Level 1"
        ],
        level: 1,
        goldValue: -1,
        strength: 5,
        cost: 6,
        attacks: [
          "Physical Attack +2"
        ],
        aftermaths: [
          "Mark 1 non-guardian monster in the hall."
        ],
        reacts: [
          "After another player selects a monster with your mark to fight, add Health +1 to that monster."
        ],
        xp: 2,
        points: 0,
        set: "Numenera"
      },
      level2: {
        title: "Swift Jack",
        group: "Swift",
        traits: [
          "Human",
          "Ranger",
          "Level 2"
        ],
        level: 2,
        goldValue: -1,
        strength: 6,
        cost: 9,
        attacks: [
          "Physical Attack +4"
        ],
        aftermaths: [
          "Mark 1 non-guardian monster in the hall."
        ],
        reacts: [
          "After another player selects a monster with your mark to fight, add Health +2 to that monster."
        ],
        xp: 3,
        points: 0,
        set: "Numenera"
      },
      level3: {
        title: "Enhanced Swift Jack",
        group: "Swift",
        traits: [
          "Human",
          "Ranger",
          "Level 3"
        ],
        level: 3,
        goldValue: -1,
        strength: 6,
        cost: 13,
        attacks: [
          "Physical Attack +6"
        ],
        aftermaths: [
          "Mark 1 non-guardian monster in the hall."
        ],
        reacts: [
          "After another player selects a monster with your mark to fight, add Health +3 to that monster."
        ],
        points: 2,
        set: "Numenera"
      }
    },
    tempest: {
      heroGroup: true,
      level1: {
        title: "Tempest Avenger",
        group: "Tempest",
        traits: [
          "Fighter",
          "Level 1"
        ],
        level: 1,
        goldValue: 0,
        strength: 6,
        cost: 5,
        attacks: [
          "Attack +2"
        ],
        xp: 2,
        points: 0,
        set: "Original"
      },
      level2: {
        title: "Tempest Reaver",
        group: "Tempest",
        traits: [
          "Fighter",
          "Level 2"
        ],
        level: 2,
        goldValue: 0,
        strength: 7,
        cost: 8,
        attacks: [
          "Attack +3"
        ],
        specialEffects: [
          "If you defeat a monster worth less than 4 VP, you may put this Hero on top of your deck instead of discarding it at the end of the turn."
        ],
        xp: 3,
        points: 0,
        set: "Original"
      },
      level3: {
        title: "Tempest Warden",
        group: "Tempest",
        traits: [
          "Fighter",
          "Level 3"
        ],
        level: 3,
        goldValue: 0,
        strength: 8,
        cost: 12,
        attacks: [
          "Attack +4"
        ],
        specialEffects: [
          "If you defeat a monster worth less than 4 VP, you may add this Hero to your newly drawn hand instead of discarding it at the end of the turn."
        ],
        points: 2,
        set: "Original"
      }
    },
    thornwood: {
      heroGroup: true,
      level1: {
        title: "Thornwood Stalker",
        group: "Thornwood",
        traits: [
          "Human",
          "Ranger",
          "Level 1"
        ],
        level: 1,
        goldValue: 0,
        strength: 4,
        cost: 6,
        attacks: [
          "Physical Attack +1"
        ],
        specialEffects: [
          "Add Physical Attack +1 for each rank of the monster you are fighting."
        ],
        xp: 2,
        points: 0,
        set: "ItA"
      },
      level2: {
        title: "Thornwood Hunter",
        group: "Thornwood",
        traits: [
          "Human",
          "Ranger",
          "Level 2"
        ],
        level: 2,
        goldValue: 0,
        strength: 5,
        cost: 9,
        attacks: [
          "Physical Attack +2"
        ],
        specialEffects: [
          "Add Physical Attack +1 for each rank of the monster you are fighting.",
          "Add Light +1 against the highest rank."
        ],
        xp: 3,
        points: 0,
        set: "ItA"
      },
      level3: {
        title: "Thornwood Ranger",
        group: "Thornwood",
        traits: [
          "Human",
          "Ranger",
          "Level 3"
        ],
        level: 3,
        goldValue: 0,
        strength: 6,
        cost: 12,
        attacks: [
          "Physical Attack +3"
        ],
        spoils: [
          "Gain 1 XP if you defeated the monster in the highest rank."
        ],
        specialEffects: [
          "Add Physical Attack +2 for each rank of the monster you are fighting."
        ],
        points: 2,
        set: "ItA"
      },
      level4: {
        title: "Thornwood Exterminator",
        group: "Thornwood",
        traits: [
          "Human",
          "Ranger",
          "Level 4"
        ],
        level: 4,
        goldValue: 0,
        strength: 7,
        cost: 16,
        attacks: [
          "Physical Attack +3"
        ],
        spoils: [
          "Discard 5 XP to take another turn."
        ],
        specialEffects: [
          "Add Physical Attack +3 for each rank of the monster you are fighting."
        ],
        points: 4,
        set: "ItA"
      }
    },
    tholis: {
      heroGroup: true,
      level1: {
        title: "Tholis class",
        group: "Tholis",
        traits: [
          "Human",
          "Thief",
          "Wizard",
          "Level 1"
        ],
        level: 1,
        goldValue: 1,
        strength: 3,
        cost: 7,
        attacks: [
          "Magic Attack +1"
        ],
        dungeons: [
          "Look at the top 3 cards of the dungeon deck. Return them in any order."
        ],
        xp: 2,
        points: 0,
        set: "WC"
      },
      level2: {
        title: "Tholis Clairvoyant",
        group: "Tholis",
        traits: [
          "Human",
          "Thief",
          "Wizard",
          "Level 2"
        ],
        level: 2,
        goldValue: 1,
        strength: 4,
        cost: 10,
        attacks: [
          "Magic Attack +2"
        ],
        dungeons: [
          "Look at the top 3 cards of the dungeon deck. You may switch 1 of them with the monster in rank 1. Return the cards to the top of the dungeon deck in any order."
        ],
        xp: 3,
        points: 0,
        set: "WC"
      },
      level3: {
        title: "Tholis Oracle",
        group: "Tholis",
        traits: [
          "Human",
          "Thief",
          "Wizard",
          "Level 3"
        ],
        level: 3,
        goldValue: 1,
        strength: 4,
        cost: 13,
        attacks: [
          "Magic Attack +3"
        ],
        dungeons: [
          "Each other player reveals the top 5 cards of his or her deck, discards any heroes, then returns the rest in any order."
        ],
        points: 2,
        set: "WC"
      },
      level4: {
        title: "Tholis Visionary",
        group: "Tholis",
        traits: [
          "Human",
          "Thief",
          "Wizard",
          "Level 4"
        ],
        level: 4,
        goldValue: 2,
        strength: 4,
        cost: 17,
        attacks: [
          "Magic Attack +4"
        ],
        dungeons: [
          "Each other player reveals the top 5 cards of his or her deck, discards any cards with a gold cost, then returns the rest in any order."
        ],
        points: 4,
        set: "WC"
      }
    },
    thundermage: {
      heroGroup: true,
      level1: {
        title: "Thundermage Summoner",
        group: "Thundermage",
        traits: [
          "Human",
          "Wizard",
          "Level 1"
        ],
        level: 1,
        goldValue: 0,
        strength: 3,
        light: 1,
        cost: 7,
        attacks: [
          "Magic Attack +2"
        ],
        xp: 2,
        points: 0,
        set: "ToR"
      },
      level2: {
        title: "Thundermage Evoker",
        group: "Thundermage",
        traits: [
          "Human",
          "Wizard",
          "Level 2"
        ],
        level: 2,
        goldValue: 0,
        strength: 3,
        light: 2,
        cost: 10,
        attacks: [
          "Magic Attack +3"
        ],
        xp: 3,
        points: 0,
        set: "ToR"
      },
      level3: {
        title: "Thundermage Bolter",
        group: "Thundermage",
        traits: [
          "Human",
          "Wizard",
          "Level 3"
        ],
        level: 3,
        goldValue: 0,
        strength: 4,
        cost: 13,
        attacks: [
          "Magic Attack +4"
        ],
        dungeons: [
          "Place the monster from rank 1 into your discard pile (you do not collect XP). End your turn."
        ],
        points: 2,
        set: "ToR"
      }
    },
    tough: {
      heroGroup: true,
      level1: {
        title: "Tough",
        group: "Tough",
        traits: [
          "Human",
          "Fighter",
          "Level 1"
        ],
        level: 1,
        goldValue: 0,
        strength: 6,
        cost: 6,
        attacks: [
          "Physical Attack +1"
        ],
        dungeons: [
          "If equipped, draw 1 card."
        ],
        spoils: [
          "Buy 1 weapon."
        ],
        xp: 2,
        points: 0,
        set: "Numenera"
      },
      level2: {
        title: "Tough Glaive",
        group: "Tough",
        traits: [
          "Human",
          "Fighter",
          "Level 2"
        ],
        level: 2,
        goldValue: 0,
        strength: 7,
        cost: 10,
        attacks: [
          "Physical Attack +3"
        ],
        dungeons: [
          "If equipped, draw 1 card."
        ],
        spoils: [
          "Place the top card of the Tough stack into your discard pile."
        ],
        xp: 3,
        points: 0,
        set: "Numenera"
      },
      level3: {
        title: "Enhanced Tough Glaive",
        group: "Tough",
        traits: [
          "Human",
          "Fighter",
          "Level 3"
        ],
        level: 3,
        goldValue: 0,
        strength: 7,
        cost: 13,
        attacks: [
          "Physical Attack +6"
        ],
        dungeons: [
          "If equipped, draw 1 card."
        ],
        spoils: [
          "Place the top card of any hero stack into your discard pile."
        ],
        points: 2,
        set: "Numenera"
      }
    },
    tower: {
      heroGroup: true,
      level1: {
        title: "Tower Apprentice",
        group: "Tower",
        traits: [
          "Dwarf",
          "Wizard",
          "Level 1"
        ],
        level: 1,
        goldValue: 0,
        strength: 2,
        light: 1,
        cost: 6,
        attacks: [
          "Magic Attack +1"
        ],
        xp: 2,
        points: 0,
        set: "Start"
      },
      level2: {
        title: "Tower Adept",
        group: "Tower",
        traits: [
          "Dwarf",
          "Wizard",
          "Level 2"
        ],
        level: 2,
        goldValue: 0,
        strength: 3,
        light: 1,
        cost: 9,
        attacks: [
          "Magic Attack +2"
        ],
        dungeons: [
          "Draw 1 card."
        ],
        xp: 3,
        points: 0,
        set: "Start"
      },
      level3: {
        title: "Tower Master",
        group: "Tower",
        traits: [
          "Dwarf",
          "Wizard",
          "Level 3"
        ],
        level: 3,
        goldValue: 0,
        strength: 3,
        light: 2,
        cost: 12,
        attacks: [
          "Magic Attack +3"
        ],
        dungeons: [
          "Draw 2 cards."
        ],
        points: 2,
        set: "Start"
      }
    },
    tuath: {
      heroGroup: true,
      level1: {
        title: "Tuath class",
        group: "Tuath",
        traits: [
          "Human",
          "Ranger",
          "Level 1"
        ],
        level: 1,
        goldValue: -1,
        strength: 4,
        cost: 4,
        attacks: [
          "Physical Attack +2"
        ],
        xp: 2,
        points: 0,
        set: "CoB"
      },
      level2: {
        title: "Tuath Trapper",
        group: "Tuath",
        traits: [
          "Human",
          "Ranger",
          "Level 2"
        ],
        level: 2,
        goldValue: -1,
        strength: 5,
        cost: 8,
        attacks: [
          "Physical Attack +3"
        ],
        dungeons: [
          "Place a monster from the hall on the bottom of the dungeon deck. Refill the hall."
        ],
        xp: 3,
        points: 0,
        set: "CoB"
      },
      level3: {
        title: "Tuath Banisher",
        group: "Tuath",
        traits: [
          "Human",
          "Ranger",
          "Level 3"
        ],
        level: 3,
        goldValue: -2,
        strength: 6,
        cost: 12,
        attacks: [
          "Physical Attack +5"
        ],
        dungeons: [
          "Place a monster from the hall on the bottom of the dungeon deck. Refill the hall. Ignore Darkness penalties."
        ],
        points: 3,
        set: "CoB"
      }
    },
    veilminder: {
      heroGroup: true,
      level1: {
        title: "Veilminder Martyr",
        group: "Veilminder",
        traits: [
          "Elf",
          "Cleric",
          "Level 1"
        ],
        level: 1,
        goldValue: 0,
        strength: 4,
        cost: 5,
        attacks: [
          "Magic Attack +1"
        ],
        dungeons: [
          "Destroy this card to cancel one Battle or Aftermath effect on a monster in the hall."
        ],
        xp: 2,
        points: 0,
        set: "ToR"
      },
      level2: {
        title: "Veilminder Renunciate",
        group: "Veilminder",
        traits: [
          "Elf",
          "Cleric",
          "Level 2"
        ],
        level: 2,
        goldValue: 0,
        strength: 4,
        cost: 7,
        attacks: [
          "Magic Attack +2"
        ],
        dungeons: [
          "Discard this card to cancel one Battle or Aftermath effect on a monster in the hall."
        ],
        xp: 3,
        points: 0,
        set: "ToR"
      },
      level3: {
        title: "Veilminder Priest",
        group: "Veilminder",
        traits: [
          "Elf",
          "Cleric",
          "Level 3"
        ],
        level: 3,
        goldValue: 0,
        strength: 5,
        cost: 11,
        attacks: [
          "Magic Attack +3"
        ],
        dungeons: [
          "Discard this card to cancel all Battle and Aftermath effects. Draw 1 card."
        ],
        points: 2,
        set: "ToR"
      }
    },
    verdan: {
      heroGroup: true,
      level1: {
        title: "Verdan Minstrel",
        group: "Verdan",
        traits: [
          "Elf",
          "Ranger",
          "Thief",
          "Level 1"
        ],
        level: 1,
        goldValue: 1,
        strength: 5,
        light: 1,
        cost: 7,
        attacks: [
          "Physical Attack +2"
        ],
        dungeons: [
          "Each other player with 6 or more cards discards 1 random card."
        ],
        xp: 2,
        points: 0,
        set: "ItA"
      },
      level2: {
        title: "Verdan Bard",
        group: "Verdan",
        traits: [
          "Elf",
          "Ranger",
          "Thief",
          "Level 2"
        ],
        level: 2,
        goldValue: 2,
        strength: 5,
        light: 1,
        cost: 10,
        attacks: [
          "Physical Attack +3"
        ],
        dungeons: [
          "Discard 2 XP to place the rank 1 monster on the bottom of the dungeon deck. Refill the hall.",
          "Each other player reveals 1 spell or discards 1 card."
        ],
        xp: 3,
        points: 0,
        set: "ItA"
      },
      level3: {
        title: "Verdan Troubadour",
        group: "Verdan",
        traits: [
          "Elf",
          "Ranger",
          "Thief",
          "Level 3"
        ],
        level: 3,
        goldValue: 2,
        strength: 5,
        light: 1,
        cost: 12,
        attacks: [
          "Physical Attack +4"
        ],
        dungeons: [
          "Discard 1 XP to place a monster from the hall on the bottom of the dungeon deck. Refill the hall.",
          "Each other player discards 1 XP."
        ],
        points: 1,
        set: "ItA"
      },
      level4: {
        title: "Verdan Rhapsodist",
        group: "Verdan",
        traits: [
          "Elf",
          "Ranger",
          "Thief",
          "Level 4"
        ],
        level: 4,
        goldValue: 2,
        strength: 5,
        light: 1,
        cost: 16,
        attacks: [
          "Physical Attack +5"
        ],
        dungeons: [
          "Place a monster from the hall on the bottom of the dungeon deck. Refill the hall.",
          "Each other player discards 1 XP and 1 random card."
        ],
        points: 3,
        set: "ItA"
      }
    },
    veris: {
      heroGroup: true,
      level1: {
        title: "Veris Squire",
        group: "Veris",
        traits: [
          "Elf",
          "Wizard",
          "Level 1"
        ],
        level: 1,
        goldValue: 0,
        strength: 4,
        cost: 6,
        attacks: [
          "Magic Attack +2"
        ],
        specialEffects: [
          "Add Light +1 to each equipped weapon."
        ],
        xp: 2,
        points: 0,
        set: "ItA"
      },
      level2: {
        title: "Veris Enhancer",
        group: "Veris",
        traits: [
          "Elf",
          "Wizard",
          "Level 2"
        ],
        level: 2,
        goldValue: 0,
        strength: 4,
        cost: 9,
        attacks: [
          "Magic Attack +3"
        ],
        specialEffects: [
          "Add Physical Attack +1 and Light +1 to each equipped weapon."
        ],
        xp: 3,
        points: 0,
        set: "ItA"
      },
      level3: {
        title: "Veris Enchanter",
        group: "Veris",
        traits: [
          "Elf",
          "Wizard",
          "Level 3"
        ],
        level: 3,
        goldValue: 0,
        strength: 5,
        cost: 12,
        attacks: [
          "Magic Attack +1"
        ],
        dungeons: [
          "Add Physical Attack equal to the total Light present."
        ],
        specialEffects: [
          "Add Physical Attack +2 and Light +2 to each equipped weapon."
        ],
        points: 2,
        set: "ItA"
      },
      level4: {
        title: "Veris Artisan",
        group: "Veris",
        traits: [
          "Elf",
          "Wizard",
          "Level 4"
        ],
        level: 4,
        goldValue: 0,
        strength: 5,
        cost: 16,
        attacks: [
          "Magic Attack +1"
        ],
        dungeons: [
          "Add Magic Attack equal to the total Light present."
        ],
        specialEffects: [
          "Add Physical Attack +3 and Light +3 to each equipped weapon."
        ],
        points: 4,
        set: "ItA"
      }
    },
    veteran: {
      heroGroup: true,
      level1: {
        title: "Veteran Warrior",
        group: "Veteran",
        traits: [
          "Fighter",
          "Level 1"
        ],
        level: 1,
        goldValue: 0,
        strength: 6,
        cost: 8,
        attacks: [
          "Attack +3"
        ],
        xp: 2,
        points: 0,
        set: "Original"
      },
      level2: {
        title: "Veteran Berserker",
        group: "Veteran",
        traits: [
          "Fighter",
          "Level 2"
        ],
        level: 2,
        goldValue: 0,
        strength: 7,
        cost: 11,
        attacks: [
          "Attack +4"
        ],
        dungeons: [
          "Destroy a Hero for an additional Attack +2."
        ],
        xp: 3,
        points: 0,
        set: "Original"
      },
      level3: {
        title: "Veteran Reaver",
        group: "Veteran",
        traits: [
          "Fighter",
          "Level 3"
        ],
        level: 3,
        goldValue: 0,
        strength: 8,
        cost: 13,
        attacks: [
          "Attack +5"
        ],
        dungeons: [
          "Destroy a Hero for an additional Attack +4."
        ],
        spoils: [
          "Gain 1 XP."
        ],
        xp: 5,
        points: 2,
        set: "Original"
      },
      level4: {
        title: "Veteran Warmonger",
        group: "Veteran",
        traits: [
          "Fighter",
          "Level 4"
        ],
        level: 4,
        goldValue: 0,
        strength: 10,
        cost: 18,
        attacks: [
          "Attack +6"
        ],
        specialEffects: [
          "Additional Attack +10 if you reveal only Level 3 or higher Heroes."
        ],
        spoils: [
          "Gain 2 XP."
        ],
        points: 4,
        set: "Original"
      }
    },
    whetmage: {
      heroGroup: true,
      level1: {
        title: "Whetmage Honer",
        group: "Whetmage",
        traits: [
          "Human",
          "Wizard",
          "Level 1"
        ],
        level: 1,
        goldValue: 0,
        strength: 2,
        cost: 5,
        attacks: [
          "Magic Attack +1"
        ],
        dungeons: [
          "Level up a Regular or another level 1 hero. Add the newly leveled hero to your hand."
        ],
        xp: 2,
        points: 0,
        set: "ToR"
      },
      level2: {
        title: "Whetmage Monk",
        group: "Whetmage",
        traits: [
          "Human",
          "Wizard",
          "Level 2"
        ],
        level: 2,
        goldValue: 0,
        strength: 2,
        cost: 8,
        attacks: [
          "Magic Attack +3"
        ],
        dungeons: [
          "Level up another hero. Add the newly leveled hero to your hand."
        ],
        xp: 3,
        points: 0,
        set: "ToR"
      },
      level3: {
        title: "Whetmage Polisher",
        group: "Whetmage",
        traits: [
          "Human",
          "Wizard",
          "Level 3"
        ],
        level: 3,
        goldValue: 0,
        strength: 3,
        cost: 11,
        attacks: [
          "Magic Attack +5"
        ],
        dungeons: [
          "Level up any number of heroes. Add the newly leveled up heroes to your hand. You cannot level a hero that has already need leveled up this turn."
        ],
        points: 3,
        set: "ToR"
      }
    },
    wildwood: {
      heroGroup: true,
      level1: {
        title: "Wildwood Assailant",
        group: "Wildwood",
        traits: [
          "Elf",
          "Ranger",
          "Level 1"
        ],
        level: 1,
        goldValue: -1,
        strength: 5,
        cost: 4,
        attacks: [
          "Physical Attack +2"
        ],
        xp: 2,
        points: 0,
        set: "Start"
      },
      level2: {
        title: "Wildwood Strategist",
        group: "Wildwood",
        traits: [
          "Elf",
          "Ranger",
          "Level 2"
        ],
        level: 2,
        goldValue: -1,
        strength: 5,
        cost: 9,
        attacks: [
          "Physical Attack +3"
        ],
        dungeons: [
          "Physical Attack +1 for each monster revealed in your hand."
        ],
        xp: 3,
        points: 0,
        set: "Start"
      },
      level3: {
        title: "Wildwood Chieftain",
        group: "Wildwood",
        traits: [
          "Elf",
          "Ranger",
          "Level 3"
        ],
        level: 3,
        goldValue: -2,
        strength: 6,
        cost: 12,
        attacks: [
          "Physical Attack +5"
        ],
        dungeons: [
          "Physical Attack +1 for each monster revealed in your hand."
        ],
        spoils: [
          "Place 1 non-Guardian monster from the hall on the bottom of the dungeon deck. Refill the hall."
        ],
        points: 2,
        set: "Start"
      }
    },
    woodfolk: {
      heroGroup: true,
      level1: {
        title: "Woodfolk Herbalist",
        group: "Woodfolk",
        traits: [
          "Human",
          "Fighter",
          "Cleric",
          "Level 1"
        ],
        level: 1,
        goldValue: 0,
        strength: 4,
        cost: 5,
        attacks: [
          "Physical Attack +1"
        ],
        specialEffects: [
          "Add Magic Attack +3 against monsters that give diseases."
        ],
        xp: 2,
        points: 0,
        set: "WC"
      },
      level2: {
        title: "Woodfolk Shaman",
        group: "Woodfolk",
        traits: [
          "Human",
          "Fighter",
          "Cleric",
          "Level 2"
        ],
        level: 2,
        goldValue: 0,
        strength: 5,
        cost: 8,
        attacks: [
          "Physical Attack +2"
        ],
        dungeons: [
          "Destroy 1 disease to draw 1 card."
        ],
        specialEffects: [
          "Add Magic Attack +4 against monsters that give diseases."
        ],
        xp: 3,
        points: 0,
        set: "WC"
      },
      level3: {
        title: "Woodfolk Druid",
        group: "Woodfolk",
        traits: [
          "Human",
          "Fighter",
          "Cleric",
          "Level 3"
        ],
        level: 3,
        goldValue: 0,
        strength: 6,
        cost: 11,
        attacks: [
          "Physical Attack +4"
        ],
        repeatDungeons: [
          "Destroy 1 disease to add Magic Attack +4 and draw 1 card."
        ],
        points: 3,
        set: "WC"
      },
      level4: {
        title: "Woodfolk Hierophant",
        group: "Woodfolk",
        traits: [
          "Human",
          "Fighter",
          "Cleric",
          "Level 4"
        ],
        level: 4,
        goldValue: 0,
        strength: 7,
        cost: 15,
        attacks: [
          "Physical Attack +4"
        ],
        repeatDungeons: [
          "Destroy 1 disease to add Magic Attack +6 and draw 1 card."
        ],
        points: 5,
        set: "WC"
      }
    },
    woodguard: {
      heroGroup: true,
      level1: {
        title: "Woodguard Scion",
        group: "Woodguard",
        traits: [
          "Treefolk",
          "Cleric",
          "Level 1"
        ],
        level: 1,
        goldValue: 0,
        strength: 10,
        light: 1,
        cost: 7,
        attacks: [
          "Physical Attack +1"
        ],
        dungeons: [
          "Add Physical Attack +2. Each other player draws 1 card."
        ],
        specialEffects: [
          "Cannot equip a weapon."
        ],
        xp: 2,
        points: 0,
        set: "RoC"
      },
      level2: {
        title: "Woodguard Sapling",
        group: "Woodguard",
        traits: [
          "Treefolk",
          "Cleric",
          "Level 2"
        ],
        level: 2,
        goldValue: 0,
        strength: 10,
        light: 1,
        cost: 10,
        attacks: [
          "Physical Attack +2"
        ],
        dungeons: [
          "Add Physical Attack +4. Each other player draws 1 card."
        ],
        specialEffects: [
          "Cannot equip a weapon."
        ],
        xp: 3,
        points: 0,
        set: "RoC"
      },
      level3: {
        title: "Woodguard Elder",
        group: "Woodguard",
        traits: [
          "Treefolk",
          "Cleric",
          "Level 3"
        ],
        level: 3,
        goldValue: 0,
        strength: 10,
        cost: 13,
        attacks: [
          "Physical Attack +3"
        ],
        dungeons: [
          "Add Physical Attack +6. Each player draws 1 card.",
          "Destroy 1 disease to draw 1 card."
        ],
        specialEffects: [
          "Cannot equip a weapon."
        ],
        points: 2,
        set: "RoC"
      }
    },
    xenomorph: {
      heroGroup: true,
      level1: {
        title: "Xenomorph Changeling",
        group: "Xenomorph",
        traits: [
          "Xenomorph",
          "(Unclassed)",
          "Level 1"
        ],
        level: 1,
        goldValue: 0,
        strength: 3,
        cost: 6,
        attacks: [
          "Physical Attack +1"
        ],
        villages: [
          "This card becomes a duplicate of an equal or lower level non-Xenomorph hero present or in your discard pile."
        ],
        dungeons: [
          "This card becomes a duplicate of an equal or lower level non-Xenomorph hero present or in your discard pile."
        ],
        xp: 2,
        points: 0,
        set: "ItA"
      },
      level2: {
        title: "Xenomorph Shadow",
        group: "Xenomorph",
        traits: [
          "Xenomorph",
          "(Unclassed)",
          "Level 2"
        ],
        level: 2,
        goldValue: 0,
        strength: 4,
        cost: 9,
        attacks: [
          "Physical Attack +2"
        ],
        villages: [
          "This card becomes a duplicate of an equal or lower level non-Xenomorph hero present, or in your discard pile, or on top of a hero stack."
        ],
        dungeons: [
          "This card becomes a duplicate of an equal or lower level non-Xenomorph hero present, or in your discard pile, or on top of a hero stack."
        ],
        xp: 3,
        points: 0,
        set: "ItA"
      },
      level3: {
        title: "Xenomorph Shifter",
        group: "Xenomorph",
        traits: [
          "Xenomorph",
          "(Unclassed)",
          "Level 3"
        ],
        level: 3,
        goldValue: 0,
        strength: 5,
        cost: 12,
        attacks: [
          "Physical Attack +3"
        ],
        villages: [
          "Destroy the top card of a hero stack.",
          "This card becomes a duplicate of an equal or lower level non-Xenomorph hero present, or in your discard pile, or on top of a hero stack."
        ],
        dungeons: [
          "Destroy the top card of a hero stack.",
          "This card becomes a duplicate of an equal or lower level non-Xenomorph hero present, or in your discard pile, or on top of a hero stack."
        ],
        points: 2,
        set: "ItA"
      },
      level4: {
        title: "Xenomorph Unbound",
        group: "Xenomorph",
        traits: [
          "Xenomorph",
          "(Unclassed)",
          "Level 4"
        ],
        level: 4,
        goldValue: 0,
        strength: 6,
        cost: 16,
        attacks: [
          "Physical Attack +4"
        ],
        villages: [
          "This card becomes a duplicate of an equal or lower level non-Xenomorph hero present, or in your discard pile, or in a hero stack (even if not on top)."
        ],
        dungeons: [
          "This card becomes a duplicate of an equal or lower level non-Xenomorph hero present, or in your discard pile, or in a hero stack (even if not on top)."
        ],
        points: 4,
        set: "ItA"
      }
    }
  }
}
