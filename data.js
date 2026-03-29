const PHASES = [
  {
    id: "setup",
    name: "Setup & Tutorial",
    subtitle: "Account creation and initial orientation",
    steps: [
      {
        id: "create-account",
        type: "unlock",
        text: "Create Ironman account",
        detail: {
          title: "Create Ironman Account",
          subtitle: "Start your journey",
          why: "Ironman mode restricts trading and most group content, forcing you to earn everything yourself. This is the foundation of the entire challenge.",
          tips: [
            "Choose 'Ironman' when prompted during account creation.",
            "Hardcore Ironman adds permadeath — pick regular Ironman if this is your first time.",
            "Your account type is permanent and cannot be changed later."
          ],
          links: [
            { label: "RS Wiki — Ironman Mode", url: "https://runescape.wiki/w/Ironman_Mode" }
          ]
        }
      },
      {
        id: "tutorial-island",
        type: "quest",
        text: "Complete Tutorial Island",
        detail: {
          title: "Tutorial Island",
          subtitle: "Mandatory introduction to game mechanics",
          why: "Required to enter the main game world. Introduces all skills at a basic level.",
          requirements: [],
          tips: [
            "Confirm Ironman mode when prompted by the Ironman tutor in Lumbridge after completing the tutorial.",
            "Talk to every tutor to collect free starter items.",
            "You'll arrive in Burthorpe/Taverley after completion."
          ],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Tutorial_Island" }
          ]
        }
      },
      {
        id: "settings-setup",
        type: "unlock",
        text: "Configure interface, keybinds & action bars",
        detail: {
          title: "Interface & Keybinds Setup",
          subtitle: "Set up your action bars and UI for efficient PvM",
          why: "Proper keybinds and interface layout are essential for PvM. Do this early so muscle memory builds from the start. Bad habits from click-based combat are hard to unlearn.",
          tips: [
            "Use Revolution++ combat mode to start — it fires basics AND thresholds automatically.",
            "Set up at least 2 action bars: one for main combat, one for defensive abilities.",
            "Enable 'Always show target information' in combat settings.",
            "Set up familiar action bar if using summoning.",
            "Rebind Eat/Drink to comfortable keys (many use 1-4 for food/potions)."
          ],
          links: [
            {
              label: "PvME — Interface Guide",
              url: "https://pvme.io/pvme-guides/getting-started/interface-guide/"
            },
            {
              label: "PvME — Revolution Bars",
              url: "https://pvme.io/pvme-guides/miscellaneous-information/revolution-bars/"
            },
            { label: "PvME — Quick Start", url: "https://pvme.io/pvme-guides/getting-started/quick-start/" }
          ]
        }
      },
      {
        id: "lodestones",
        type: "unlock",
        text: "Unlock essential lodestones",
        detail: {
          title: "Unlock Lodestones",
          subtitle: "Free teleport network across Gielinor",
          why: "Lodestones are your primary travel method early on. Unlocking them now saves enormous time on every future task.",
          tips: [
            "Priority lodestones: Lumbridge, Draynor, Port Sarim, Varrock, Falador, Edgeville, Burthorpe/Taverley.",
            "Simply click each lodestone in the world to activate it.",
            "Lodestone teleports are free and unlimited — use the world map to plan a route."
          ],
          links: [
            { label: "RS Wiki — Lodestones", url: "https://runescape.wiki/w/Lodestone_Network" }
          ]
        }
      },
      {
        id: "free-items",
        type: "unlock",
        text: "Claim free items & starter supplies",
        detail: {
          title: "Free Items & Starter Supplies",
          subtitle: "Collect everything available before you begin training",
          why: "You can't trade, so every free item matters. Several NPCs give useful starter gear and supplies.",
          tips: [
            "Grab the Dwarven Army Axe from the Burthorpe tutorial area — it's a multi-tool.",
            "Pick up the toolbelt items from various Burthorpe/Taverley tutors.",
            "Buy a few basic supplies: vials of water, feathers, runes from shops."
          ],
          links: [
            { label: "RS Wiki — Ironman Guide", url: "https://runescape.wiki/w/Ironman_Mode/Strategies" }
          ]
        }
      }
    ]
  },
  {
    id: "early-game",
    name: "Early Game",
    subtitle: "Necromancy start, efficient quest chain, first bosses & Barrows",
    steps: [
      {
        id: "necro-tutorial",
        type: "quest",
        text: "Complete Necromancy tutorial in City of Um",
        detail: {
          title: "Necromancy Tutorial",
          subtitle: "Unlock the strongest early-game combat style",
          why: "Necromancy is the best early-game combat style. It provides free starting gear, strong AoE, and a clear upgrade path all the way to end-game. Starting here lets you power through quests and early bosses faster than any other style.",
          requirements: [],
          tips: [
            "Head to the City of Um via the portal south of Lumbridge Swamp.",
            "The tutorial walks you through basic rituals and combat.",
            "You'll receive starter Necromancy gear upon completion."
          ],
          links: [
            { label: "RS Wiki — Necromancy", url: "https://runescape.wiki/w/Necromancy" },
            {
              label: "PvME — Early Necromancy Upgrades",
              url: "https://pvme.io/pvme-guides/new-to-pvm/early-necromancy-upgrades/"
            },
            {
              label: "PvME — Early Game Combat",
              url: "https://pvme.io/pvme-guides/new-to-pvm/early-game-combat/"
            }
          ]
        }
      },
      {
        id: "necro-5-quest",
        type: "quest",
        text: "Train Necromancy to 5 → complete Necromancy! quest",
        detail: {
          title: "Necromancy! Quest",
          subtitle: "Tier 10 gear and your first real equipment",
          why: "The Necromancy! quest rewards Death guard (tier 10), Skull lantern (tier 10), and Necromancer robes — your first proper combat set. This is a massive power boost at level 5.",
          requirements: ["Necromancy 5"],
          tips: [
            "Train at City of Um troll cave (level 7 trolls) to reach 5.",
            "Start the quest at Draynor lodestone.",
            "After completing: buy 1400 weak necroplasm, 500 basic ghostly ink, 100 basic ritual candles from shops."
          ],
          links: [
            { label: "RS Wiki — Necromancy!", url: "https://runescape.wiki/w/Necromancy!" }
          ]
        }
      },
      {
        id: "necro-20",
        type: "skill",
        text: "Train Necromancy to level 20",
        detail: {
          title: "Necromancy to 20",
          subtitle: "Build your first combat base",
          why: "Level 20 unlocks the Kili Row quest for tier 20 gear upgrades. Train via combat and rituals in the City of Um.",
          method: "Levels 5-20: Fight trolls in City of Um troll cave. Alternate with Lesser communion rituals to stock souls (aim for 50). Complete 3 lesser necroplasm rituals for regular ink. Craft 14 lesser ensouled bars for later use.",
          links: [
            { label: "RS Wiki — Necromancy Training", url: "https://runescape.wiki/w/Necromancy_training" }
          ]
        }
      },
      {
        id: "kili-row",
        type: "quest",
        text: "Complete Kili Row",
        detail: {
          title: "Kili Row",
          subtitle: "Upgrade to tier 20 Death guard, Skull lantern & Deathwarden armor",
          why: "Major gear upgrade. Tier 20 weapons nearly double your damage output compared to tier 10. Also introduces Kili's Knowledge system — you'll revisit Kili every 10 levels for weapon upgrades.",
          requirements: ["Necromancy 20"],
          tips: [
            "Complete Kili's tasks to unlock tier 20 upgrades.",
            "Each tier upgrade requires specific materials — check the quest log.",
            "You'll return to Kili at levels 30, 40, 50, and 60 for further upgrades."
          ],
          links: [
            { label: "RS Wiki — Kili Row", url: "https://runescape.wiki/w/Kili_Row" }
          ]
        }
      },
      {
        id: "reward-necro-t20",
        type: "reward",
        text: "Collect tier 20 Necromancy gear",
        detail: {
          title: "Tier 20 Death Guard, Skull Lantern & Deathwarden Armor",
          subtitle: "Major early gear upgrade from Kili Row",
          why: "Tier 20 weapons nearly double your damage output compared to tier 10. This is your first significant gear upgrade and sets the pattern — return to Kili every 10 Necromancy levels for weapon upgrades.",
          tips: [
            "Upgrade your Death guard and Skull lantern to tier 20.",
            "Craft Deathwarden armor from ensouled bars.",
            "You'll return to Kili at levels 30, 40, 50, and 60 for further weapon upgrades."
          ],
          links: [
            { label: "RS Wiki — Death Guard", url: "https://runescape.wiki/w/Death_guard" },
            { label: "RS Wiki — Deathwarden", url: "https://runescape.wiki/w/Deathwarden_robe_armour" }
          ]
        }
      },
      {
        id: "one-piercing-note",
        type: "quest",
        text: "Complete One Piercing Note",
        detail: {
          title: "One Piercing Note",
          subtitle: "Unlock Devotion, Transfigure & Sacrifice abilities",
          why: "Devotion is one of the best defensive abilities in the game — it extends protection prayer duration, making you nearly invincible for a short time. Sacrifice provides free healing. These abilities remain useful into end-game bossing.",
          requirements: [],
          tips: [
            "No combat or skill requirements.",
            "Medium-length quest with voice acting.",
            "Also rewards a 250 Prayer XP lamp and Citharede robes."
          ],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/One_Piercing_Note" },
            { label: "PvM Unlock Guide", url: "https://runescape.wiki/w/PvM_unlock_guide" }
          ]
        }
      },
      {
        id: "reward-devotion",
        type: "reward",
        text: "Unlock Devotion ability",
        detail: {
          title: "Devotion, Transfigure & Sacrifice Abilities",
          subtitle: "Powerful defensive and healing abilities from One Piercing Note",
          why: "Devotion extends your protection prayer uptime, making you nearly invincible for its duration. Sacrifice heals you for free. Both are used at every boss from early game through end-game.",
          tips: [
            "Add Devotion to your defensive action bar immediately.",
            "Devotion extends protection prayer by 10 seconds per kill during its effect.",
            "Sacrifice heals 25% of damage dealt — great for sustain between food."
          ],
          links: [
            { label: "RS Wiki — Devotion", url: "https://runescape.wiki/w/Devotion" },
            { label: "RS Wiki — Sacrifice", url: "https://runescape.wiki/w/Sacrifice" }
          ]
        }
      },
      {
        id: "blood-pact",
        type: "quest",
        text: "Complete The Blood Pact",
        detail: {
          title: "The Blood Pact",
          subtitle: "Free weapons + Lumbridge Catacombs access",
          why: "Gives a free staff (Caitlin's staff) and chargebow (Kayle's chargebow) — useful backup weapons. Unlocks Lumbridge Catacombs, an excellent AoE Necromancy training spot for levels 20-70.",
          requirements: [],
          tips: [
            "Very short quest, no requirements.",
            "Keep both Caitlin's staff and Kayle's chargebow.",
            "100 Combat XP lamp — choose your preference."
          ],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/The_Blood_Pact" }
          ]
        }
      },
      {
        id: "restless-ghost",
        type: "quest",
        text: "Complete The Restless Ghost",
        detail: {
          title: "The Restless Ghost",
          subtitle: "Early Prayer XP and Ghostspeak amulet",
          why: "Grants Prayer training XP — a significant boost at level 1. Prayer is critical for PvM as protection prayers halve incoming damage. Also gives the Ghostspeak amulet needed for other quests.",
          requirements: [],
          tips: [
            "Talk to Father Aereck in Lumbridge church to start.",
            "No combat required.",
            "The Ghostspeak amulet is needed for several future quests."
          ],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/The_Restless_Ghost" }
          ]
        }
      },
      {
        id: "cooks-assistant",
        type: "quest",
        text: "Complete Cook's Assistant",
        detail: {
          title: "Cook's Assistant",
          subtitle: "Quick Cooking XP + free sardines",
          why: "Gives Cooking XP and 20 sardines — useful as early food and for Gertrude's Cat quest later. Very quick to complete while you're in the Lumbridge area.",
          requirements: [],
          tips: [
            "Gather a bucket of milk, pot of flour, and egg before starting.",
            "All ingredients are found near Lumbridge.",
            "The sardines reward saves time later."
          ],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Cook%27s_Assistant" }
          ]
        }
      },
      {
        id: "violet-is-blue",
        type: "quest",
        text: "Complete Violet is Blue",
        detail: {
          title: "Violet is Blue",
          subtitle: "3 Farming lamps — prerequisite for Violet is Blue Too",
          why: "Required before Violet is Blue Too, which gives a Summoning XP lamp. The Farming lamps also help unlock Player-Owned Farm content earlier, which generates passive resources useful for Herblore and Prayer.",
          requirements: [],
          tips: ["Short holiday quest — mostly dialogue.", "Use all 3 lamps on Farming."],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Violet_is_Blue" }
          ]
        }
      },
      {
        id: "violet-is-blue-too",
        type: "quest",
        text: "Complete Violet is Blue Too",
        detail: {
          title: "Violet is Blue Too",
          subtitle: "Summoning, Archaeology & Construction XP lamps",
          why: "Grants a Summoning XP lamp — Summoning is one of the hardest skills to train (requires charms from combat) and is essential for PvM. Familiars provide extra inventory, healing, and combat boosts. Also gives Archaeology and Construction lamps.",
          requirements: ["Violet is Blue completed"],
          tips: ["Use the Summoning lamp immediately.", "Archaeology and Construction lamps are bonus — use on those skills."],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Violet_is_Blue_Too" }
          ]
        }
      },
      {
        id: "wolf-whistle",
        type: "quest",
        text: "Complete Wolf Whistle",
        detail: {
          title: "Wolf Whistle",
          subtitle: "Introduction to Summoning",
          why: "Unlocks the Summoning skill. Summoning familiars provide combat bonuses, extra inventory space (Beast of Burden), and healing. Essential for all PvM content.",
          requirements: [],
          tips: [
            "Start in Taverley — talk to Pikkupstix.",
            "Short quest, mostly dialogue.",
            "Start collecting charms from combat kills immediately after — gold and green charms are most useful early."
          ],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Wolf_Whistle" }
          ]
        }
      },
      {
        id: "druidic-ritual",
        type: "quest",
        text: "Complete Druidic Ritual",
        detail: {
          title: "Druidic Ritual",
          subtitle: "Unlock Herblore skill",
          why: "Herblore unlocks potions — eventually Overloads, the single biggest DPS boost in the game (+17% to all combat stats). Starting early lets you stockpile herbs from Slayer and quests.",
          requirements: [],
          tips: [
            "Start in Taverley — talk to Kaqemeex.",
            "After completion: buy 20 vials of water from Jatix (free daily supply).",
            "Start cleaning every herb you find — Herblore XP adds up."
          ],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Druidic_Ritual" }
          ]
        }
      },
      {
        id: "death-plateau",
        type: "quest",
        text: "Complete Death Plateau",
        detail: {
          title: "Death Plateau",
          subtitle: "3 Smithing XP lamps — feeds into Knight's Sword requirements",
          why: "The Smithing lamps help you reach level 30 Smithing for The Knight's Sword, which in turn feeds into the long-term Invention requirement (80 Smithing). Efficient early XP while you're already in the Burthorpe area.",
          requirements: [],
          tips: [
            "Start in Burthorpe — talk to Commander Denulth.",
            "Short quest with minor combat.",
            "Use the Smithing lamps immediately."
          ],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Death_Plateau" }
          ]
        }
      },
      {
        id: "whats-mine-is-yours",
        type: "quest",
        text: "Complete What's Mine is Yours",
        detail: {
          title: "What's Mine is Yours",
          subtitle: "Smithing XP — continues the Smithing chain",
          why: "Grants Smithing XP via the Gofannon amulet, pushing you closer to the 30 Smithing needed for The Knight's Sword. Part of the efficient Smithing leveling chain.",
          requirements: ["5 Smithing"],
          tips: [
            "Start in Burthorpe — talk to Doric.",
            "Involves mining and smelting — gather materials as you go.",
            "Use the Gofannon amulet's XP bonus."
          ],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/What%27s_Mine_is_Yours" }
          ]
        }
      },
      {
        id: "knights-sword",
        type: "quest",
        text: "Complete The Knight's Sword",
        detail: {
          title: "The Knight's Sword",
          subtitle: "Huge Smithing XP jump — reach level 30+",
          why: "One of the biggest early Smithing XP rewards in the game. Jumps you to level 30+ Smithing, which is a long-term step toward the 80 Smithing needed for Invention — one of the most powerful PvM skills.",
          requirements: ["10 Mining", "10 Cooking", "10 Smithing"],
          tips: [
            "Start by talking to the Squire in Falador Castle.",
            "Requires mining blurite ore in the icy dungeon below Port Sarim — bring food for ice warriors.",
            "The quest gives enough Smithing XP to significantly boost your level."
          ],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/The_Knight%27s_Sword" }
          ]
        }
      },
      {
        id: "rune-mythos",
        type: "quest",
        text: "Complete Rune Mythos",
        detail: {
          title: "Rune Mythos",
          subtitle: "Continue Necromancy progression and unlock tier 25+",
          why: "Continues the Necromancy quest chain. Opens up higher-tier rituals and better ink production. Save at least one impure essence from this quest — you'll need it later.",
          requirements: ["24 Necromancy", "Necromancy! quest completed"],
          tips: [
            "Train Necromancy to 25 at Lumbridge Catacombs skeletons (AoE).",
            "Save impure essence drops — don't discard them.",
            "After this quest, continue Kili's Knowledge for tier 30 weapon upgrades."
          ],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Rune_Mythos" }
          ]
        }
      },
      {
        id: "demon-slayer",
        type: "quest",
        text: "Complete Demon Slayer",
        detail: {
          title: "Demon Slayer",
          subtitle: "3 Ranged XP lamps — builds off-style combat",
          why: "The Ranged lamps give you a head start on Ranged, your secondary combat style. You'll need Ranged for certain bosses later (Araxxor, Nex) and for chinchompa AoE training.",
          requirements: [],
          tips: [
            "Start by talking to the Gypsy in Varrock.",
            "Requires killing Delrith — use Necromancy or Melee.",
            "Use the Ranged lamps immediately."
          ],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Demon_Slayer" }
          ]
        }
      },
      {
        id: "swept-away",
        type: "quest",
        text: "Complete Swept Away",
        detail: {
          title: "Swept Away",
          subtitle: "Herblore XP from XP bowl — feeds Overload progression",
          why: "The XP bowl rewards Herblore XP, helping you toward potion-making thresholds. Every bit of free Herblore XP matters since the skill is slow to train.",
          requirements: [],
          tips: [
            "During the quest: activate Port Sarim lodestone, buy 10 sardines and 1 chocolate bar.",
            "Use the XP bowl on Herblore for maximum value.",
            "Short quest — mostly running between NPCs."
          ],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Swept_Away" }
          ]
        }
      },
      {
        id: "waterfall-quest",
        type: "quest",
        text: "Complete Waterfall Quest",
        detail: {
          title: "Waterfall Quest",
          subtitle: "Massive Attack & Strength XP with no combat",
          why: "Grants huge Attack and Strength XP — enough to jump from level 1 to ~30 in both skills. No combat required. This single quest gives you a viable melee base for quests that need it.",
          requirements: [],
          tips: [
            "Start Tree Gnome Village first to unlock Elkoy's shortcut (makes travel easier).",
            "No combat required despite the quest guide warnings — just avoid enemies.",
            "Bring a rope and some food just in case."
          ],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Waterfall_Quest" }
          ]
        }
      },
      {
        id: "missing-presumed-death",
        type: "quest",
        text: "Complete Missing, Presumed Death",
        detail: {
          title: "Missing, Presumed Death",
          subtitle: "Unlock the Reaper system and Death's office",
          why: "Unlocks Reaper tasks from Death — daily boss kill assignments that reward Reaper points. These points buy the Aura Refresher, Bonfire Boosts, and eventually the Reaper crew member for Ports. Also unlocks War's Retreat access. The Reaper system is central to PvM progression.",
          requirements: [],
          tips: [
            "Start by talking to Brother Samwell at the Silvarea entrance east of Varrock.",
            "WARNING: Dangerous combat section for low-level hardcore ironmen.",
            "After completion, talk to Death in his office to start receiving Reaper tasks.",
            "You can toggle which bosses appear in your Reaper task pool."
          ],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Missing,_Presumed_Death" },
            { label: "PvM Unlock Guide", url: "https://runescape.wiki/w/PvM_unlock_guide" }
          ]
        }
      },
      {
        id: "priest-in-peril",
        type: "quest",
        text: "Complete Priest in Peril",
        detail: {
          title: "Priest in Peril",
          subtitle: "Unlock Morytania access",
          why: "Required to enter Morytania — home of Barrows, Vampyre quest chain, and many important PvM areas. Nearly every mid-game progression path runs through Morytania.",
          requirements: [],
          tips: [
            "Start by talking to King Roald in Varrock Palace.",
            "Short quest with minor combat.",
            "After completion, you can access the entire Morytania region."
          ],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Priest_in_Peril" }
          ]
        }
      },
      {
        id: "gertudes-cat",
        type: "quest",
        text: "Complete Gertrude's Cat",
        detail: {
          title: "Gertrude's Cat",
          subtitle: "Required for Icthlarin's Little Helper — get your first cat",
          why: "You need a cat (or kitten) to complete Icthlarin's Little Helper, which starts the desert quest chain toward Desert Treasure and Ancient Magicks. Cats also catch rats for death runes via the Rat Catchers series.",
          requirements: [],
          tips: [
            "Start by talking to Gertrude west of Varrock.",
            "Feed the kitten with sardines or raw sardines (from Cook's Assistant).",
            "Your kitten will grow into a cat over time — keep feeding it or it runs away."
          ],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Gertrude%27s_Cat" }
          ]
        }
      },
      {
        id: "sheep-herder",
        type: "quest",
        text: "Complete Sheep Herder",
        detail: {
          title: "Sheep Herder",
          subtitle: "Required for Mourning's End Part I → Plague's End chain",
          why: "Sheep Herder is a prerequisite for Mourning's End Part I, which is part of the plague/elf quest chain leading to Plague's End and Prifddinas. Do it now while requirements are easy — it becomes a blocker later if skipped.",
          requirements: [],
          tips: [
            "Start in East Ardougne — talk to Councillor Halgrive.",
            "Herd 4 coloured sheep into a pen — tedious but no combat.",
            "Use the Ardougne lodestone for quick access."
          ],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Sheep_Herder" }
          ]
        }
      },
      {
        id: "stolen-hearts",
        type: "quest",
        text: "Complete Stolen Hearts",
        detail: {
          title: "Stolen Hearts",
          subtitle: "Quick Al Kharid quest — prerequisite for Icthlarin's Little Helper",
          why: "Required before Diamond in the Rough, which is required before Icthlarin's Little Helper — your entry into the desert quest chain leading to Ancient Magicks and Ancient Curses.",
          requirements: [],
          tips: [
            "Start in Al Kharid — talk to Ozan.",
            "Short novice quest with minor combat.",
            "Flows directly into Diamond in the Rough."
          ],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Stolen_Hearts" }
          ]
        }
      },
      {
        id: "diamond-in-the-rough",
        type: "quest",
        text: "Complete Diamond in the Rough",
        detail: {
          title: "Diamond in the Rough",
          subtitle: "Continues Al Kharid storyline — prerequisite for Icthlarin's",
          why: "Required before Icthlarin's Little Helper. Completing this opens the path to Sophanem and the desert quest chain.",
          requirements: ["Stolen Hearts completed"],
          tips: [
            "Starts automatically after Stolen Hearts if done back-to-back.",
            "Bring desert gear (waterskins) for the later sections.",
            "Novice quest — no skill requirements."
          ],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Diamond_in_the_Rough" }
          ]
        }
      },
      {
        id: "ichtlarins-little-helper",
        type: "quest",
        text: "Complete Icthlarin's Little Helper",
        detail: {
          title: "Icthlarin's Little Helper",
          subtitle: "Starts the desert quest chain → Desert Treasure → Ancient Magicks",
          why: "This quest is a key step in the desert quest chain that eventually leads to Desert Treasure (Ancient Magicks spellbook) and further to Curses. Ancient Magicks provides powerful PvM spells including Blood Barrage for AoE healing.",
          requirements: ["Gertrude's Cat completed", "Stolen Hearts completed", "Diamond in the Rough completed"],
          tips: [
            "You need a cat or kitten (from Gertrude's Cat).",
            "Stolen Hearts + Diamond in the Rough are quick Al Kharid prereqs — do them first.",
            "Located in Sophanem — bring waterskins for desert travel.",
            "Medium-length quest with some combat."
          ],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Icthlarin%27s_Little_Helper" }
          ]
        }
      },
      {
        id: "the-golem",
        type: "quest",
        text: "Complete The Golem",
        detail: {
          title: "The Golem",
          subtitle: "Curse of Arrav prerequisite",
          why: "Quick quest. Required for Missing My Mummy and eventually Curse of Arrav.",
          requirements: ["20 Crafting", "25 Thieving"],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/The_Golem" }
          ]
        }
      },
      {
        id: "a-tail-of-two-cats",
        type: "quest",
        text: "Complete A Tail of Two Cats",
        detail: {
          title: "A Tail of Two Cats",
          subtitle: "Ritual of the Mahjarrat prerequisite",
          why: "Follows Gertrude's Cat and Icthlarin's Little Helper. Required for Ritual of the Mahjarrat.",
          requirements: ["Icthlarin's Little Helper completed"],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/A_Tail_of_Two_Cats" }
          ]
        }
      },
      {
        id: "recruitment-drive",
        type: "quest",
        text: "Complete Recruitment Drive",
        detail: {
          title: "Recruitment Drive",
          subtitle: "Temple Knights access — feeds into Slug Menace & Proselyte armor",
          why: "Unlocks the Temple Knights quest chain, eventually leading to Proselyte armor (prayer bonus gear) and the Slug Menace quest. Also gives Herblore, Agility, and Prayer XP which feed into later requirements.",
          requirements: ["3 Herblore"],
          tips: [
            "Start at Falador Castle — talk to Sir Amik Varze.",
            "Puzzle-based quest with no combat.",
            "Requires temporarily becoming female for one puzzle — NPC changes you back after."
          ],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Recruitment_Drive" }
          ]
        }
      },
      {
        id: "train-thieving-25",
        type: "skill",
        text: "Train Thieving to 25",
        detail: {
          title: "Thieving to 25",
          subtitle: "Needed for The Dig Site and Creature of Fenkenstrain",
          why: "The Dig Site (Ancient Curses chain) and Creature of Fenkenstrain (Morytania chain) both require 25 Thieving. No quests in the guide grant Thieving XP, so train it directly.",
          method: "Pickpocket men/women in Lumbridge or Edgeville to level 5, then steal from bakery stalls in Ardougne to 25. Bakery stalls are fast and give free food.",
          links: [
            { label: "RS Wiki — Thieving Training", url: "https://runescape.wiki/w/Thieving_training" }
          ]
        }
      },
      {
        id: "dig-site",
        type: "quest",
        text: "Complete The Dig Site",
        detail: {
          title: "The Dig Site",
          subtitle: "Required for Temple at Senntisten → Ancient Curses",
          why: "A critical prerequisite in the chain leading to The Temple at Senntisten, which unlocks Ancient Curses — the best prayer set for PvM. Turmoil/Torment/Anguish and Soul Split are game-changing upgrades. Start this chain early.",
          requirements: ["10 Agility", "10 Herblore", "25 Thieving"],
          tips: [
            "Start at the Dig Site east of Varrock — talk to an Examiner.",
            "Involves multiple exam passes — follow a guide for efficiency.",
            "Turn in the Level 3 certificate for a Fruit Blast.",
            "Grants 2 Mining lamps and Herblore XP."
          ],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/The_Dig_Site" }
          ]
        }
      },
      {
        id: "train-fletching-10",
        type: "skill",
        text: "Train Fletching to 10",
        detail: {
          title: "Fletching to 10",
          subtitle: "Needed for The Tourist Trap",
          why: "The Tourist Trap requires 10 Fletching. It rewards Agility lamps which are essential for reaching 35 Agility. Quick training — only takes a few minutes.",
          method: "Chop regular logs and fletch them into arrow shafts or shortbows (u). 10 Fletching takes very little time.",
          links: [
            { label: "RS Wiki — Fletching Training", url: "https://runescape.wiki/w/Fletching_training" }
          ]
        }
      },
      {
        id: "tourist-trap",
        type: "quest",
        text: "Complete The Tourist Trap",
        detail: {
          title: "The Tourist Trap",
          subtitle: "2 Agility lamps — needed for Horror from the Deep & Grand Tree",
          why: "The Agility lamps help you reach the 35-36 Agility needed for Horror from the Deep (God book) and The Grand Tree. Agility is slow to train early, so quest lamps are very efficient.",
          requirements: ["10 Fletching", "20 Smithing"],
          tips: [
            "Located in the desert south of Al Kharid — bring waterskins.",
            "Involves some stealth and combat.",
            "Use both lamps on Agility."
          ],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/The_Tourist_Trap" }
          ]
        }
      },
      {
        id: "witchs-house",
        type: "quest",
        text: "Complete Witch's House",
        detail: {
          title: "Witch's House",
          subtitle: "Large Constitution XP reward",
          why: "Grants significant Constitution (HP) XP. More health means more survivability in boss fights. Quick quest with minimal requirements.",
          requirements: [],
          tips: [
            "Located in Taverley — talk to the boy outside the house.",
            "Requires fighting the Witch's experiment (4 forms) — bring food.",
            "Safespot the experiment with magic or necromancy if your combat is low."
          ],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Witch%27s_House" }
          ]
        }
      },
      {
        id: "murder-mystery",
        type: "quest",
        text: "Complete Murder Mystery",
        detail: {
          title: "Murder Mystery",
          subtitle: "Crafting XP — feeds into Crafting 35 for Haunted Mine",
          why: "The Crafting XP helps you toward the 35 Crafting needed for Haunted Mine and the Salve amulet — a major PvM upgrade. Crafting is tedious to train, so quest XP is valuable.",
          requirements: [],
          tips: [
            "Located in the Sinclair Mansion north of Seers' Village.",
            "Detective/puzzle quest — no combat required.",
            "Follow a guide to identify the correct suspect quickly."
          ],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Murder_Mystery" }
          ]
        }
      },
      {
        id: "plague-city",
        type: "quest",
        text: "Complete Plague City",
        detail: {
          title: "Plague City",
          subtitle: "Starts plague quest chain → eventually Plague's End → Prifddinas",
          why: "The first quest in the plague/elf chain that eventually leads to Plague's End — unlocking Prifddinas, the most important city in the game for high-level content. Starting the chain now means you can chip away at requirements over time.",
          requirements: [],
          tips: ["Start in East Ardougne — talk to Edmond.", "Short quest with no combat.", "Unlocks Ardougne teleport — very useful."],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Plague_City" }
          ]
        }
      },
      {
        id: "biohazard",
        type: "quest",
        text: "Complete Biohazard",
        detail: {
          title: "Biohazard",
          subtitle: "Continues plague chain + Ardougne area access",
          why: "Continues the plague quest chain toward Plague's End. Also unlocks West Ardougne access and combat training area. Required before Underground Pass and further elf quests.",
          requirements: ["Plague City completed"],
          tips: [
            "Involves smuggling items past mourners — don't carry the wrong items.",
            "No combat required.",
            "Short quest if you follow a guide."
          ],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Biohazard" }
          ]
        }
      },
      {
        id: "fight-arena",
        type: "quest",
        text: "Complete Fight Arena",
        detail: {
          title: "Fight Arena",
          subtitle: "Attack XP boost",
          why: "Grants substantial Attack XP, pushing your melee stats further. Required combat levels will be needed for bosses and quest fights throughout mid-game.",
          requirements: [],
          tips: [
            "Located south of Ardougne — talk to Lady Servil.",
            "Requires fighting Khazard enemies — bring food and protection prayers.",
            "Can safespot General Khazard with ranged/magic if needed."
          ],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Fight_Arena" }
          ]
        }
      },
      {
        id: "tree-gnome-village",
        type: "quest",
        text: "Complete Tree Gnome Village",
        detail: {
          title: "Tree Gnome Village",
          subtitle: "Attack XP + Spirit tree access",
          why: "Grants Attack XP and unlocks spirit tree teleport network — an important travel method. Also required before The Grand Tree quest.",
          requirements: [],
          tips: [
            "Start by talking to King Bolren inside the Tree Gnome Village maze.",
            "Requires killing Khazard Warlord (level 100) — use protection prayers.",
            "Unlocks Elkoy's shortcut through the maze, useful for Waterfall Quest."
          ],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Tree_Gnome_Village" }
          ]
        }
      },
      {
        id: "train-agility-35",
        type: "skill",
        text: "Train Agility to 35",
        detail: {
          title: "Agility to 35",
          subtitle: "Needed for Grand Tree (25), Shilo Village (32), and Horror from the Deep (35)",
          why: "Multiple upcoming quests require Agility: The Grand Tree (25), Shilo Village (32), and Horror from the Deep (35). Tourist Trap's lamps help but aren't enough — train the rest at agility courses.",
          method: "Gnome Stronghold Agility Course (level 1-35). Use the Tourist Trap Agility lamps first, then run the course until 35. This also covers the 32 Agility for Shilo Village and 25 for Grand Tree.",
          links: [
            { label: "RS Wiki — Agility Training", url: "https://runescape.wiki/w/Agility_training" }
          ]
        }
      },
      {
        id: "grand-tree",
        type: "quest",
        text: "Complete The Grand Tree",
        detail: {
          title: "The Grand Tree",
          subtitle: "Attack XP + Grand Tree travel hub",
          why: "Big Attack XP reward. Unlocks the Grand Tree as a teleport hub and gnome glider network — critical for fast travel across the map.",
          requirements: ["25 Agility"],
          tips: [
            "Start by talking to King Narnode in the Grand Tree.",
            "Final boss (Black Demon) can be safespotted.",
            "Grants 1 Attack XP lamp on top of flat XP rewards."
          ],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/The_Grand_Tree" }
          ]
        }
      },
      {
        id: "bar-crawl",
        type: "quest",
        text: "Complete the Bar Crawl miniquest",
        detail: {
          title: "Bar Crawl Miniquest",
          subtitle: "Required for Horror from the Deep",
          why: "Horror from the Deep requires the Bar Crawl miniquest completed. It involves visiting various bars across the map — a good excuse to unlock lodestones along the way.",
          requirements: [],
          tips: [
            "Bring ~210 coins for all the drinks.",
            "The drinks deal damage — bring some food.",
            "Use lodestones to travel between bars quickly.",
            "Start at the Barbarian Outpost — talk to the guard."
          ],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Bar_Crawl_(miniquest)" }
          ]
        }
      },
      {
        id: "horror-from-deep",
        type: "quest",
        text: "Complete Horror from the Deep",
        detail: {
          title: "Horror from the Deep",
          subtitle: "Unlock God books — a powerful pocket slot item",
          why: "God books are strong pocket slot items for PvM. The Book of War (Bandos) or Book of Law (Armadyl) are best early picks. This is one of the earliest significant gear upgrades from the PvM unlock guide.",
          requirements: ["35 Agility", "Bar Crawl miniquest"],
          tips: [
            "Start at the Lighthouse north of Barbarian Outpost.",
            "Requires some combat — bring food and prayer potions.",
            "Choose Bandos (Book of War) for melee/general use, or Armadyl (Book of Law) for ranged.",
            "You'll need to collect page sets to activate the book — pages drop from various monsters."
          ],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Horror_from_the_Deep" },
            { label: "PvM Unlock Guide", url: "https://runescape.wiki/w/PvM_unlock_guide" }
          ]
        }
      },
      {
        id: "reward-god-book",
        type: "reward",
        text: "Collect your God book",
        detail: {
          title: "God Books — Pocket Slot Upgrade",
          subtitle: "One of the earliest powerful pocket slot items",
          why: "God books are strong pocket slot items that provide stat bonuses and a passive effect. This is one of the first real gear upgrades for the pocket slot, which is otherwise empty for a long time.",
          tips: [
            "Book of War (Bandos) — melee/general use, good all-rounder.",
            "Book of Law (Armadyl) — ranged bonus, good for ranged content.",
            "You need to collect page sets to activate the book — pages drop from GWD1 and other monsters.",
            "An incomplete book still provides stats, so equip it right away."
          ],
          links: [
            { label: "RS Wiki — God Books", url: "https://runescape.wiki/w/God_book" }
          ]
        }
      },
      {
        id: "jungle-potion",
        type: "quest",
        text: "Complete Jungle Potion",
        detail: {
          title: "Jungle Potion",
          subtitle: "Herblore XP + prerequisite for Shilo Village & Zogre Flesh Eaters",
          why: "Gives Herblore XP and is required for Shilo Village (good fishing spot, Crafting XP) and the Tai Bwo Wannai quest chain. Also feeds into requirements for later quests in the area.",
          requirements: ["3 Herblore"],
          tips: [
            "Start by talking to Trufitus in Tai Bwo Wannai village on Karamja.",
            "Collect herbs around the jungle — bring an axe and machete.",
            "Short quest, mostly gathering."
          ],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Jungle_Potion" }
          ]
        }
      },
      {
        id: "train-crafting-20",
        type: "skill",
        text: "Train Crafting to 20",
        detail: {
          title: "Crafting to 20",
          subtitle: "Needed for Nature Spirit (18), Creature of Fenkenstrain (20), Elemental Workshop (20), Shades of Mort'ton (20), Shilo Village (20)",
          why: "Several upcoming quests in Morytania and beyond require 18-20 Crafting. Murder Mystery gave some XP but not enough. Train the rest now before entering Morytania.",
          method: "Make leather items (cowhide → leather at a tanner, then craft into items) or do pottery (mine clay, use water, spin on potter's wheel, fire in kiln) at Draynor/Barbarian Village. Crafting gems from the Shilo Village gem shop is also efficient if you've already done that quest.",
          links: [
            { label: "RS Wiki — Crafting Training", url: "https://runescape.wiki/w/Crafting_training" }
          ]
        }
      },
      {
        id: "nature-spirit",
        type: "quest",
        text: "Complete Nature Spirit",
        detail: {
          title: "Nature Spirit",
          subtitle: "Barrows access route + Morytania quest chain",
          why: "Unlocks the swamp boat route to Barrows — the easiest early access method. Also required for the Vampyre quest chain leading to Sunspear and River of Blood.",
          requirements: ["Priest in Peril completed", "The Restless Ghost completed", "18 Crafting", "20 Mining", "20 Smithing"],
          tips: [
            "Start by talking to Drezel under Paterdomus temple.",
            "Requires some running through Mort Myre swamp — bring food for ghasts.",
            "After completion, use the boat from Mort'ton to reach Barrows quickly."
          ],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Nature_Spirit" }
          ]
        }
      },
      {
        id: "hazeel-cult",
        type: "quest",
        text: "Complete Hazeel Cult",
        detail: {
          title: "Hazeel Cult",
          subtitle: "Thieving XP — Ritual of the Mahjarrat prerequisite",
          why: "Quick quest with Thieving XP. Required later for Ritual of the Mahjarrat.",
          requirements: ["18 Thieving"],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Hazeel_Cult" }
          ]
        }
      },
      {
        id: "in-search-of-myreque",
        type: "quest",
        text: "Complete In Search of the Myreque",
        detail: {
          title: "In Search of the Myreque",
          subtitle: "Unlocks the Myreque quest area in Morytania",
          why: "First quest in the Myreque series. Bring 6 steel weapons, 75 steel nails, 6 planks, and a druid pouch.",
          requirements: ["Nature Spirit completed"],
          tips: ["Bring supplies: 6 steel weapons (any), 75 steel nails, 6 planks, druid pouch."],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/In_Search_of_the_Myreque" }
          ]
        }
      },
      {
        id: "in-aid-of-myreque",
        type: "quest",
        text: "Complete In Aid of the Myreque",
        detail: {
          title: "In Aid of the Myreque",
          subtitle: "Continues the Myreque series — unlocks Burgh de Rott",
          why: "Continues the vampyre quest chain. Gives access to Burgh de Rott and the vyrewatch area.",
          requirements: ["In Search of the Myreque completed", "25 Crafting", "15 Mining"],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/In_Aid_of_the_Myreque" }
          ]
        }
      },
      {
        id: "creature-of-fenkenstrain",
        type: "quest",
        text: "Complete Creature of Fenkenstrain",
        detail: {
          title: "Creature of Fenkenstrain",
          subtitle: "Morytania quest chain progression",
          why: "Required for the Morytania quest chain leading to Experiments (good early combat training), and feeds into requirements for In Aid of the Myreque and eventually the Vampyre series.",
          requirements: ["20 Crafting", "25 Thieving", "The Restless Ghost completed", "Priest in Peril completed"],
          tips: [
            "Start at Fenkenstrain's Castle in Morytania.",
            "Gather body parts from around Morytania — follow a guide.",
            "Rewards Ring of Charos — useful for charm checks and shop discounts."
          ],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Creature_of_Fenkenstrain" }
          ]
        }
      },
      {
        id: "train-magic-20",
        type: "skill",
        text: "Train Magic to 20",
        detail: {
          title: "Magic to 20",
          subtitle: "Needed for Elemental Workshop II",
          why: "Elemental Workshop II requires 20 Magic. You may already have some Magic XP from combat, but if not, a quick training session covers this.",
          method: "Kill low-level creatures with air strike/bolt, or use the Shattered Worlds minigame (Legacy mode, disable Defence XP) for fast Magic XP. Alternatively, Necromancy combat may have given incidental Magic XP from lamps.",
          links: [
            { label: "RS Wiki — Magic Training", url: "https://runescape.wiki/w/Magic_training" }
          ]
        }
      },
      {
        id: "elemental-workshop",
        type: "quest",
        text: "Complete Elemental Workshop I & II",
        detail: {
          title: "Elemental Workshop I & II",
          subtitle: "Crafting & Smithing XP — feeds into Crafting 35 for Haunted Mine",
          why: "Both quests give Crafting and Smithing XP, pushing you toward the 35 Crafting needed for Haunted Mine and the Salve amulet. Efficient two-quest chain that covers both skill requirements.",
          requirements: ["20 Crafting", "20 Mining", "20 Smithing (Workshop I)", "20 Magic", "30 Smithing (Workshop II)"],
          tips: [
            "Start in Seers' Village — search the bookcase in the house with an anvil.",
            "Puzzle-based quests with no combat.",
            "Workshop II has a more complex puzzle — follow a guide."
          ],
          links: [
            { label: "RS Wiki — EW I", url: "https://runescape.wiki/w/Elemental_Workshop_I" },
            { label: "RS Wiki — EW II", url: "https://runescape.wiki/w/Elemental_Workshop_II" }
          ]
        }
      },
      {
        id: "train-firemaking-30",
        type: "skill",
        text: "Train Firemaking to 30",
        detail: {
          title: "Firemaking to 30",
          subtitle: "Needed for Sea Slug",
          why: "Sea Slug requires 30 Firemaking. No quests in the guide grant Firemaking XP, so train it directly. Quick to train by burning logs.",
          method: "Chop oak logs near Seers' Village or Draynor and burn them. ~290 oak logs gets you from 1 to 30 Firemaking. You also get Woodcutting XP as a bonus.",
          links: [
            { label: "RS Wiki — Firemaking Training", url: "https://runescape.wiki/w/Firemaking_training" }
          ]
        }
      },
      {
        id: "sea-slug",
        type: "quest",
        text: "Complete Sea Slug",
        detail: {
          title: "Sea Slug",
          subtitle: "Fishing XP + prerequisite for Slug Menace chain",
          why: "Required for the Slug Menace quest chain which gives Crafting XP and feeds into the Temple Knight storyline. Also grants Fishing XP.",
          requirements: ["30 Firemaking"],
          tips: [
            "Start in Witchaven — talk to Caroline.",
            "Short quest with no combat.",
            "The Fishing XP helps with later requirements."
          ],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Sea_Slug_(quest)" }
          ]
        }
      },
      {
        id: "shilo-village",
        type: "quest",
        text: "Complete Shilo Village",
        detail: {
          title: "Shilo Village",
          subtitle: "Crafting XP + gem shop + fishing spot",
          why: "Unlocks the Shilo Village gem shop (good for Crafting training) and a great fishing spot. The Crafting XP helps reach the 35 needed for Haunted Mine.",
          requirements: ["32 Agility", "20 Crafting", "Jungle Potion completed"],
          tips: [
            "Start by talking to Mosol Rei outside Shilo Village on Karamja.",
            "Requires Jungle Potion completed.",
            "Fish to level 53 inside the village while you're here — efficient spot."
          ],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Shilo_Village_(quest)" }
          ]
        }
      },
      {
        id: "haunted-mine",
        type: "quest",
        text: "Complete Haunted Mine",
        detail: {
          title: "Haunted Mine",
          subtitle: "15% damage & accuracy boost vs undead",
          why: "The Salve amulet (e) gives 15% damage and accuracy against undead monsters. Since you'll be training Necromancy on undead (skeletons, ghosts) for a long time, this is a massive DPS increase. Also essential for Barrows and ED3.",
          requirements: ["15 Agility", "35 Crafting", "Priest in Peril completed"],
          tips: [
            "Upgrade to Salve amulet (e) via the Tarn's Lair miniquest for the enhanced effect.",
            "The enhanced version works with ALL combat styles including Necromancy.",
            "Stacks with some but not all other damage boosts — check wiki for interactions."
          ],
          links: [
            { label: "RS Wiki — Haunted Mine", url: "https://runescape.wiki/w/Haunted_Mine" },
            { label: "RS Wiki — Salve Amulet", url: "https://runescape.wiki/w/Salve_amulet_(e)" },
            { label: "PvM Unlock Guide", url: "https://runescape.wiki/w/PvM_unlock_guide" }
          ]
        }
      },
      {
        id: "reward-salve-amulet",
        type: "reward",
        text: "Craft Salve amulet (e)",
        detail: {
          title: "Salve Amulet (e)",
          subtitle: "15% damage & accuracy boost vs undead",
          why: "One of the strongest PvM items you can get this early. 15% damage AND accuracy against all undead — that includes Barrows brothers, ED3 mobs, and most Necromancy training targets. This single item speeds up your progression significantly.",
          tips: [
            "After Haunted Mine, do the Tarn's Lair miniquest to enchant it into Salve amulet (e).",
            "The enhanced version works with ALL combat styles including Necromancy.",
            "Equip this whenever fighting undead — it's a bigger boost than most necklaces."
          ],
          links: [
            { label: "RS Wiki — Salve Amulet (e)", url: "https://runescape.wiki/w/Salve_amulet_(e)" },
            { label: "RS Wiki — Tarn's Lair", url: "https://runescape.wiki/w/The_Lair_of_Tarn_Razorlor" }
          ]
        }
      },
      {
        id: "visions-of-havenhythe",
        type: "quest",
        text: "Complete Visions of Havenhythe",
        detail: {
          title: "Visions of Havenhythe",
          subtitle: "Unlock Havenhythe area and first boss access",
          why: "Opens the Havenhythe region and unlocks Ivar, King of Bones — your first real boss encounter. Short quest with no difficult requirements.",
          requirements: [],
          tips: [
            "Start at The Rusty Anchor Tavern in Port Sarim.",
            "Short quest — mostly dialogue and exploration.",
            "Unlocks the Wendlewick lodestone for fast return trips."
          ],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Visions_of_Havenhythe" }
          ]
        }
      },
      {
        id: "ivar",
        type: "boss",
        text: "Boss: Ivar, King of Bones",
        detail: {
          title: "Ivar, King of Bones",
          subtitle: "First boss — learn protection prayer switching",
          why: "Your first real boss encounter. Teaches you to use the correct protection prayer against different attack styles — a fundamental PvM skill you'll use at every boss going forward.",
          requirements: ["Visions of Havenhythe completed"],
          suggested: ["20+ Necromancy", "Protection prayers unlocked", "Basic food (trout/salmon)", "Salve amulet (e)"],
          drops: [
            {
              item: "Bonecrusher maul",
              why: "Two-handed weapon that auto-crushes bones for Prayer XP — excellent ironman QoL"
            },
            { item: "Colossal bone", why: "Good Prayer XP (guaranteed, capped at 100 kills)" },
            { item: "Magic skull mask", why: "Magic bonus headgear (rare)" }
          ],
          moveOn: "After obtaining the Bonecrusher maul and getting comfortable with prayer switching (~20-50 kills). Move on to War's Retreat unlock, then Silverquill.",
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Ivar,_King_of_Bones" },
            { label: "RS Wiki — Strategy", url: "https://runescape.wiki/w/Ivar,_King_of_Bones/Strategies" },
            { label: "PvME — Hermod Guide", url: "https://pvme.io/pvme-guides/rs3-full-boss-guides/hermod/" },
            { label: "PvME — Bossing Path", url: "https://pvme.io/pvme-guides/new-to-bossing/bossing-path/" },
            { label: "PvME — Learning PvM", url: "https://pvme.io/pvme-guides/new-to-bossing/learning-pvm/" }
          ]
        }
      },
      {
        id: "reward-bonecrusher-maul",
        type: "reward",
        text: "Obtain Bonecrusher maul",
        detail: {
          title: "Bonecrusher Maul",
          subtitle: "Auto-crushes bones for passive Prayer XP",
          why: "The Bonecrusher maul automatically crushes bones from kills for Prayer XP. As an ironman, passive Prayer XP from every kill adds up enormously over time. This is a key quality-of-life upgrade you'll use for the rest of your account.",
          tips: [
            "Farm Ivar until you get the Bonecrusher maul drop (~20-50 kills).",
            "Equip it as a special weapon or keep it in inventory — the bone-crushing effect is passive.",
            "Works on any bones dropped by monsters, not just Ivar's."
          ],
          links: [
            { label: "RS Wiki — Bonecrusher Maul", url: "https://runescape.wiki/w/Bonecrusher_maul" }
          ]
        }
      },
      {
        id: "wars-retreat",
        type: "unlock",
        text: "Unlock War's Retreat",
        detail: {
          title: "War's Retreat",
          subtitle: "Your PvM hub — bank, altar, boss portals, adrenaline crystal",
          why: "War's Retreat is the central hub for all bossing. It has a bank, altar, boss portals (instant teleport to any boss), adrenaline crystal (start fights with 100% adrenaline), and campfire (HP boost). Unlocking this early saves enormous time on every single boss trip.",
          tips: [
            "Teleport via the Wars Retreat lodestone or grouping system.",
            "Requires 10 boss kills total for teleport access (you should have this from Ivar).",
            "100 boss kills unlocks boss portal — set your current boss for instant teleport.",
            "200 kills unlocks the altar (restore prayer between kills).",
            "500 kills unlocks adrenaline crystal reset.",
            "1,000 kills unlocks campfire for max HP boost."
          ],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/War%27s_Retreat" },
            { label: "PvM Unlock Guide", url: "https://runescape.wiki/w/PvM_unlock_guide" }
          ]
        }
      },
      {
        id: "hearts-of-sanguine",
        type: "quest",
        text: "Complete Hearts of Sanguine",
        detail: {
          title: "Hearts of Sanguine",
          subtitle: "Unlock Silverquill boss and havensilver smithing",
          why: "Unlocks the Silverquill boss — a step up from Ivar that teaches telegraphed attack responses. Also gives Herblore and Smithing XP lamps.",
          requirements: ["Visions of Havenhythe completed"],
          tips: ["Continues the Havenhythe storyline.", "Medium length quest.", "Rewards: 250 Herblore XP lamp, 250 Smithing XP lamp."],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Hearts_of_Sanguine" }
          ]
        }
      },
      {
        id: "silverquill",
        type: "boss",
        text: "Boss: Silverquill, the Dreadhog",
        detail: {
          title: "Silverquill, the Dreadhog",
          subtitle: "Second boss — learn to read telegraphed attacks",
          why: "Steps up the difficulty from Ivar. Silverquill has two states (active and curled) and teaches you to respond to telegraphed attacks — a skill used at every mid and late-game boss.",
          requirements: ["Hearts of Sanguine completed"],
          suggested: ["30+ Necromancy", "Protection prayers", "Better food (lobster/swordfish)", "Salve amulet (e)"],
          drops: [
            { item: "Sanguine spines", why: "Crafting material for havensilver equipment" },
            { item: "Silver spines", why: "Crafting material" },
            { item: "Sanguine matter", why: "Rare material (1/14 drop rate)" },
            { item: "Congealed blood", why: "Useful consumable (1/33)" }
          ],
          moveOn: "After you're comfortable reading its attack patterns and have collected useful drops. Move on to further Necromancy training.",
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Silverquill,_the_Dreadhog" },
            { label: "PvME — Hermod Guide", url: "https://pvme.io/pvme-guides/rs3-full-boss-guides/hermod/" }
          ]
        }
      },
      {
        id: "hermod",
        type: "boss",
        text: "Boss: Hermod, the Spirit of War",
        detail: {
          title: "Hermod, the Spirit of War",
          subtitle: "Necromancy quest boss — teaches combat rotations",
          why: "Hermod is a Necromancy quest boss encountered during the Spirit Warrior quest. He's a significant step up in difficulty and teaches proper combat rotations. Required for Reaper Crew.",
          requirements: ["The Spirit of War quest (Necromancy quest line part 4)"],
          suggested: ["40+ Necromancy", "Protection prayers", "Good food supply"],
          drops: [
            { item: "Hermodic plate", why: "Crafting material (1/10)" },
            { item: "Hermod's armour spike", why: "Cosmetic unlock (1/2,000, threshold 400)" }
          ],
          moveOn: "After defeating Hermod to continue the Necromancy quest line. Farm for Hermodic plates if desired.",
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Hermod,_the_Spirit_of_War" },
            { label: "PvME — Hermod Guide", url: "https://pvme.io/pvme-guides/rs3-full-boss-guides/hermod/" }
          ]
        }
      },
      {
        id: "tears-of-guthix",
        type: "quest",
        text: "Complete Tears of Guthix",
        detail: {
          title: "Tears of Guthix",
          subtitle: "Unlocks free weekly XP in your lowest skill",
          why: "Essential weekly activity. Free XP in your lowest skill every week — never skip this.",
          requirements: ["43 Quest Points", "49 Firemaking", "20 Mining", "20 Crafting"],
          tips: ["Do this EVERY week. The XP scales with quest points."],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Tears_of_Guthix" }
          ]
        }
      },
      {
        id: "heroes-quest",
        type: "quest",
        text: "Complete Heroes' Quest",
        detail: {
          title: "Heroes' Quest",
          subtitle: "Multiple XP rewards — WGS prerequisite",
          why: "Partner quest like Shield of Arrav. Multiple skill XP rewards. Required for Legends' Quest and WGS chain.",
          requirements: [
            "Shield of Arrav completed",
            "Lost City completed",
            "Dragon Slayer completed",
            "53 Cooking",
            "53 Fishing",
            "25 Herblore",
            "50 Mining"
          ],
          tips: ["Use FC 'Shieldofarrav' to find a partner for the gang side."],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Heroes%27_Quest" }
          ]
        }
      },
      {
        id: "rum-deal",
        type: "quest",
        text: "Complete Rum Deal",
        detail: {
          title: "Rum Deal",
          subtitle: "Ritual of the Mahjarrat prerequisite",
          why: "Part of the pirate chain. Required eventually for Cabin Fever and RotM.",
          requirements: ["Pirate's Treasure completed", "42 Crafting", "40 Farming", "50 Fishing", "47 Prayer", "40 Slayer"],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Rum_Deal" }
          ]
        }
      },
      {
        id: "cabin-fever",
        type: "quest",
        text: "Complete Cabin Fever",
        detail: {
          title: "Cabin Fever",
          subtitle: "Ritual of the Mahjarrat prerequisite",
          why: "Continues the pirate chain. Required for Ritual of the Mahjarrat.",
          requirements: ["Pirate's Treasure completed", "Rum Deal completed", "42 Agility", "45 Crafting", "50 Ranged", "40 Smithing"],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Cabin_Fever" }
          ]
        }
      },
      {
        id: "legacy-of-seergaze",
        type: "quest",
        text: "Complete Legacy of Seergaze",
        detail: {
          title: "Legacy of Seergaze",
          subtitle: "Vampyre chain — unlocks Salve amulet crystal",
          why: "Continues the vampyre series. Unlocks the ability to create enhanced Salve amulets.",
          requirements: [
            "Darkness of Hallowvale completed",
            "29 Agility",
            "20 Construction",
            "47 Crafting",
            "40 Firemaking",
            "49 Magic",
            "35 Mining",
            "31 Slayer"
          ],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Legacy_of_Seergaze" }
          ]
        }
      },
      {
        id: "underground-pass",
        type: "quest",
        text: "Complete Underground Pass",
        detail: {
          title: "Underground Pass",
          subtitle: "Plague/Elf quest chain — access to Iban's staff",
          why: "Leads deeper into the elf quest chain. Iban's staff is a useful early magic weapon.",
          requirements: ["Biohazard completed", "25 Ranged"],
          tips: ["Bring food — the agility obstacles can be punishing at low Agility."],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Underground_Pass" }
          ]
        }
      },
      {
        id: "regicide",
        type: "quest",
        text: "Complete Regicide",
        detail: {
          title: "Regicide",
          subtitle: "Grants access to Tirannwn (elf lands)",
          why: "Opens access to the elf lands. Required for the Mourning's End quests leading to Plague's End.",
          requirements: ["Underground Pass completed", "56 Agility"],
          tips: ["Bring a bow and arrows for the quest."],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Regicide" }
          ]
        }
      },
      {
        id: "broken-home",
        type: "quest",
        text: "Complete Broken Home",
        detail: {
          title: "Broken Home",
          subtitle: "Best-in-slot ring for a long time",
          why: "The Asylum surgeon's ring (from the 37-minute speedrun challenge) is one of the best rings in the game for PvM. It has a chance to save 10% adrenaline on thresholds — a direct DPS increase at every boss. Highlighted in the PvM unlock guide as a high-priority unlock.",
          requirements: [],
          tips: [
            "The quest itself has no requirements — do it first to learn the layout.",
            "After completing once, redo it within 37 minutes for the ring.",
            "Use a guide with the optimal route for the speedrun.",
            "The ring works with all combat styles including Necromancy.",
            "This ring is used until you get Ring of Death or better — a LONG time."
          ],
          links: [
            { label: "RS Wiki — Broken Home", url: "https://runescape.wiki/w/Broken_Home" },
            {
              label: "RS Wiki — Asylum Surgeon's Ring",
              url: "https://runescape.wiki/w/Asylum_surgeon%27s_ring"
            },
            { label: "PvM Unlock Guide", url: "https://runescape.wiki/w/PvM_unlock_guide" }
          ]
        }
      },
      {
        id: "reward-asylum-ring",
        type: "reward",
        text: "Obtain Asylum surgeon's ring",
        detail: {
          title: "Asylum Surgeon's Ring",
          subtitle: "Best-in-slot ring until Ring of Death",
          why: "A chance to save 10% adrenaline on every threshold ability — a direct, passive DPS increase at every boss. This ring is used for an extremely long time. Highlighted in the PvM unlock guide as a high-priority unlock.",
          tips: [
            "Complete Broken Home once to learn the layout.",
            "Redo it within 37 minutes for the ring reward.",
            "Use a guide with the optimal speedrun route — it's tight but doable.",
            "Works with all combat styles including Necromancy."
          ],
          links: [
            {
              label: "RS Wiki — Asylum Surgeon's Ring",
              url: "https://runescape.wiki/w/Asylum_surgeon%27s_ring"
            }
          ]
        }
      },
      {
        id: "necro-40",
        type: "skill",
        text: "Train Necromancy to 40",
        detail: {
          title: "Necromancy to 40",
          subtitle: "Upgrade weapons through tier 30 and 40 via Kili",
          why: "Each 10-level tier gives significant weapon upgrades. Tier 40 weapons are a big jump in power. Keep up with Kili's Knowledge tasks — they're free damage increases.",
          method: "Train at Lumbridge Catacombs skeletons using AoE abilities. Return to Kili at levels 30 and 40 to complete Knowledge tasks and upgrade your Death guard and Skull lantern. Alternate combat with communion rituals to stock souls.",
          links: [
            { label: "RS Wiki — Necromancy Training", url: "https://runescape.wiki/w/Necromancy_training" }
          ]
        }
      },
      {
        id: "necro-65",
        type: "skill",
        text: "Train Necromancy to 65",
        detail: {
          title: "Necromancy to 65",
          subtitle: "Tier 60 weapons + ready for The Spirit of War",
          why: "Tier 60 is where Necromancy starts to feel truly powerful. Level 65 is needed for The Spirit of War quest, which drops hermodic plates for tier 90 armor. Continue upgrading via Kili's Knowledge at 50 and 60.",
          method: "Levels 40-65: Continue at Lumbridge Catacombs with AoE. Use Salve amulet (e) for the 15% boost on undead. Complete Kili's Knowledge III (50) and IV (60) for weapon upgrades. Stock up on necroplasm and ink via rituals. At level 50+, consider training at Abyss creatures for variety.",
          links: [
            { label: "RS Wiki — Necromancy Training", url: "https://runescape.wiki/w/Necromancy_training" }
          ]
        }
      },
      {
        id: "spirit-of-war",
        type: "quest",
        text: "Complete The Spirit of War",
        detail: {
          title: "The Spirit of War",
          subtitle: "Hermodic plates — critical for tier 90 Necromancy armor",
          why: "This quest boss drops hermodic plates, which are ESSENTIAL for crafting tier 90 Necromancy armor later. Start farming them now. CRITICAL: Do NOT upgrade armor past tier 70 until you have tier 90 materials — it's a waste of hermodic plates.",
          requirements: ["Necromancy 65"],
          tips: [
            "Save ALL hermodic plates — you need many for the tier 90 upgrade.",
            "Don't rush past this. Farm the boss for plates before moving on.",
            "The tier 70-80 armor upgrades are traps — skip straight to 90 when you have plates."
          ],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/The_Spirit_of_War" }
          ]
        }
      },
      {
        id: "giant-mole",
        type: "boss",
        text: "Boss: Giant Mole",
        detail: {
          title: "Giant Mole",
          subtitle: "Practice boss — learn chamber mechanics and burrowing",
          why: "A good practice boss that teaches arena awareness, tracking a mobile boss, and dealing with multiple simultaneous mechanics in the final phase. Free-to-play accessible and no quest requirements.",
          requirements: [],
          suggested: [
            "60+ Necromancy (or 60+ in any combat style)",
            "60+ Defence",
            "43+ Prayer (protection prayers)",
            "Decent food (lobster+)"
          ],
          drops: [
            { item: "Mole claw + Mole skin", why: "Trade to Wyson the Gardener for bird nests (seeds, rings)" },
            { item: "Dragon 2h sword", why: "Rare drop — decent melee weapon" },
            { item: "Clingy mole pet", why: "Boss pet (cosmetic)" }
          ],
          moveOn: "After you're comfortable with the mechanics and have obtained useful drops. Giant Mole doesn't have critical ironman drops — treat it as practice. Move on to Barrows.",
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Giant_mole" },
            { label: "RS Wiki — Strategy", url: "https://runescape.wiki/w/Giant_Mole/Strategies" },
            {
              label: "PvME — Giant Mole Guide",
              url: "https://pvme.io/pvme-guides/basic-guides/giant-mole-basic/"
            }
          ]
        }
      },
      {
        id: "shades-of-mortton",
        type: "quest",
        text: "Complete Shades of Mort'ton",
        detail: {
          title: "Shades of Mort'ton",
          subtitle: "Sacred oil + Flamtaer bracelets for Barrows efficiency",
          why: "Sacred oil is used for pyre logs (Prayer XP) and the quest unlocks the Mort'ton area near Barrows. The Flamtaer bracelets speed up wall rebuilding during the quest — make extras for Legacy of Seergaze later.",
          requirements: ["20 Crafting", "15 Herblore", "6 Firemaking", "Priest in Peril completed"],
          tips: [
            "Make 20 Flamtaer bracelets to speed up the wall-building section.",
            "Make extra Sacred oil for Legacy of Seergaze later.",
            "Located in Mort'ton — use the swamp boat from Nature Spirit."
          ],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Shades_of_Mort'ton" }
          ]
        }
      },
      {
        id: "barrows",
        type: "boss",
        text: "Boss: Barrows Brothers",
        detail: {
          title: "Barrows Brothers",
          subtitle: "Farm tier 70 tank armor sets",
          why: "Barrows is your primary source of tier 70 power and tank armor. Multiple sets cover all three combat styles. The armor lasts well into mid-game and is a massive defensive upgrade. Hard Morytania achievements halve the prayer drain here.",
          requirements: ["Nature Spirit or another Barrows access method"],
          suggested: [
            "60+ Necromancy (or 65+ in any style)",
            "65+ Defence",
            "43+ Prayer (protection prayers)",
            "Good food supply",
            "Salve amulet (e) — works on all brothers"
          ],
          drops: [
            {
              item: "Barrows armor sets (Ahrim, Dharok, Karil, etc.)",
              why: "Tier 70 armor for all combat styles — your main armor upgrade"
            },
            { item: "Amulet of the forsaken", why: "Boosts Barrows set effects" }
          ],
          moveOn: "After completing at least one full armor set for your primary combat style. Ahrim's for magic, Karil's for ranged. For Necromancy, the Deathwarden/tier 60+ gear may be better — use Barrows for your off-styles. Move on to mid-game content.",
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Barrows" },
            { label: "RS Wiki — Strategy", url: "https://runescape.wiki/w/Barrows/Strategies" },
            { label: "PvME — Barrows Guide", url: "https://pvme.io/pvme-guides/basic-guides/barrows-basic/" }
          ]
        }
      },
      {
        id: "pirate-treasure",
        type: "quest",
        text: "Complete Pirate's Treasure",
        detail: {
          title: "Pirate's Treasure",
          subtitle: "Rum Deal prerequisite",
          why: "Very quick quest with no requirements. Starts the pirate quest chain leading to Cabin Fever.",
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Pirate%27s_Treasure" }
          ]
        }
      },
      {
        id: "big-chompy-bird-hunting",
        type: "quest",
        text: "Complete Big Chompy Bird Hunting",
        detail: {
          title: "Big Chompy Bird Hunting",
          subtitle: "Cooking + Fletching + Ranged XP — Mourning's End prerequisite",
          why: "Required for Mourning's End Part I. Get 3 extra raw chompy for later quests.",
          requirements: ["30 Cooking", "5 Fletching", "30 Ranged"],
          tips: ["Get 3 extra raw chompy meat for Recipe for Disaster later."],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Big_Chompy_Bird_Hunting" }
          ]
        }
      },
      {
        id: "fremennik-trials",
        type: "quest",
        text: "Complete The Fremennik Trials",
        detail: {
          title: "The Fremennik Trials",
          subtitle: "Unlocks Fremennik area — Dagannoth Kings access + Lunar Diplomacy prerequisite",
          why: "Unlocks the Fremennik area and is prerequisite for Lunar Diplomacy and DKs access.",
          tips: ["No quest prerequisites. Complete all 7 trials."],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/The_Fremennik_Trials" }
          ]
        }
      },
      {
        id: "temple-of-ikov",
        type: "quest",
        text: "Complete Temple of Ikov",
        detail: {
          title: "Temple of Ikov",
          subtitle: "Curse of Arrav prerequisite",
          why: "Quick quest. Required for the Curse of Arrav chain.",
          requirements: ["40 Thieving"],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Temple_of_Ikov" }
          ]
        }
      },
      {
        id: "shield-of-arrav",
        type: "quest",
        text: "Complete Shield of Arrav",
        detail: {
          title: "Shield of Arrav",
          subtitle: "WGS + Curse of Arrav prerequisite",
          why: "Partner quest — use FC 'Shieldofarrav' to find a partner. Prerequisite for Heroes' Quest, Defender of Varrock, and many chains.",
          tips: ["Use FC 'Shieldofarrav' or 'OSRS SOA' to find a quest partner."],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Shield_of_Arrav" }
          ]
        }
      },
      {
        id: "lost-city",
        type: "quest",
        text: "Complete Lost City",
        detail: {
          title: "Lost City",
          subtitle: "Unlocks Zanaris + fairy rings — key WGS prerequisite",
          why: "Unlocks Zanaris which has useful shops and is the gateway to the fairy ring network.",
          requirements: ["31 Crafting", "36 Woodcutting"],
          tips: ["Bring food for the tree spirit fight."],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Lost_City" }
          ]
        }
      },
      {
        id: "dragon-slayer",
        type: "quest",
        text: "Complete Dragon Slayer",
        detail: {
          title: "Dragon Slayer",
          subtitle: "Good combat XP — Heroes' Quest prerequisite",
          why: "Solid Strength and Defence XP reward. Required for Heroes' Quest.",
          requirements: ["33 Quest Points"],
          tips: ["Use anti-dragon shield (from Duke Horacio in Lumbridge)."],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Dragon_Slayer" }
          ]
        }
      },
      {
        id: "darkness-of-hallowvale",
        type: "quest",
        text: "Complete Darkness of Hallowvale",
        detail: {
          title: "Darkness of Hallowvale",
          subtitle: "Continues vampyre chain — Myreque series",
          why: "Continues the vampyre quest series deeper into Meiyerditch.",
          requirements: ["In Aid of the Myreque completed", "26 Agility", "32 Crafting", "33 Magic", "20 Mining", "40 Strength"],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Darkness_of_Hallowvale" }
          ]
        }
      },
      {
        id: "reward-barrows-armor",
        type: "reward",
        text: "Collect Barrows armor set(s)",
        detail: {
          title: "Barrows Armor Sets",
          subtitle: "Tier 70 armor for all combat styles",
          why: "Barrows armor is a massive defensive upgrade that lasts well into mid-game. Having a full set for your primary and off-styles makes questing and bossing much safer.",
          tips: [
            "Priority: Ahrim's (magic), Karil's (ranged) — for Necromancy, Deathwarden gear may be better.",
            "Keep farming until you have at least one complete set for your primary style.",
            "Amulet of the forsaken is a nice bonus but don't farm specifically for it.",
            "Hard Morytania achievements halve prayer drain at Barrows — worth doing later."
          ],
          links: [
            { label: "RS Wiki — Barrows Equipment", url: "https://runescape.wiki/w/Barrows_equipment" }
          ]
        }
      },
      {
        id: "dailies-setup",
        type: "unlock",
        text: "Set up daily & weekly activities",
        detail: {
          title: "Dailies, Weeklies & Monthlies",
          subtitle: "Recurring activities that compound into massive XP and resources over time",
          why: "Consistent daily/weekly activities are the backbone of ironman progression. Missing these regularly means falling behind on critical skills like Herblore, Prayer, and Summoning. Set up a routine now.",
          tips: [
            "DAILY: Daily Challenges, Reaper Task (from Death), Nemi Forest (Prayer/other XP), Player-Owned Farm beehives.",
            "WEEKLY: Herby Werby (Herblore XP), Penguin Hide & Seek, Circus, Agoroth, Thalmund's Stock (CRITICAL for Necromancy — every Wednesday).",
            "MONTHLY: God Statues (Construction + Prayer/Slayer XP), Troll Invasion, Giant Oyster.",
            "Thalmund's Stock priority: Greater ensouled cloth, Powerful ghostly ink, Impure essence, Uncut moonstone."
          ],
          links: [
            { label: "RS Wiki — Repeatable Events", url: "https://runescape.wiki/w/Repeatable_events" }
          ]
        }
      }
    ]
  },
  {
    id: "mid-game",
    name: "Mid Game",
    subtitle: "Sunshine, Ancient Magicks, Piety, GWD1, Invention & Arch-Glacor",
    steps: [
      {
        id: "world-wakes",
        type: "quest",
        text: "Complete The World Wakes",
        detail: {
          title: "The World Wakes",
          subtitle: "Unlocks Sunshine & Death's Swiftness — the two strongest ultimate abilities",
          why: "Sunshine and Death's Swiftness are the most important PvM abilities in the game. Each gives a 50% damage boost for 30 seconds. Every boss encounter from here on will use one of these. This quest has no skill or quest requirements — do it immediately.",
          requirements: [],
          tips: [
            "No skill or quest requirements to start.",
            "Recommended: ~70+ combat stats, protection prayers.",
            "For full rewards, complete Ritual of the Mahjarrat + related quests beforehand (optional).",
            "You'll receive 3x 100,000 XP lamps (skills 75+) and a 250,000 Prayer XP lamp (80 Prayer) — bank these if you don't meet the level."
          ],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/The_World_Wakes" },
            { label: "PvM Unlock Guide", url: "https://runescape.wiki/w/PvM_unlock_guide" }
          ]
        }
      },
      {
        id: "reward-sunshine-ds",
        type: "reward",
        text: "Unlock Sunshine & Death's Swiftness",
        detail: {
          title: "Sunshine & Death's Swiftness",
          subtitle: "+50% damage for 30 seconds — the core of all PvM rotations",
          why: "These are the single biggest DPS upgrades available. Every serious boss kill uses one of these. Sunshine boosts magic damage, Death's Swiftness boosts ranged. Both cost 100% adrenaline with a 60s cooldown.",
          tips: [
            "Sunshine requires 76 Magic to use. Death's Swiftness requires 76 Ranged.",
            "Stand inside the golden circle (Sunshine) or green aura (DS) to get the buff.",
            "Later, Planted Feet perk (Invention) extends the duration by 21%.",
            "Even later, Greater Sunshine/Greater DS codices from Zamorak replace Planted Feet entirely."
          ],
          links: [
            { label: "RS Wiki — Sunshine", url: "https://runescape.wiki/w/Sunshine" },
            { label: "RS Wiki — Death's Swiftness", url: "https://runescape.wiki/w/Death%27s_Swiftness" },
            {
              label: "PvME — Mid Game Combat",
              url: "https://pvme.io/pvme-guides/new-to-bossing/mid-game-combat/"
            }
          ]
        }
      },
      {
        id: "roving-elves",
        type: "quest",
        text: "Complete Roving Elves",
        detail: {
          title: "Roving Elves",
          subtitle: "Elf quest chain — leads to Mourning's End",
          why: "Short quest continuing the elf chain. Required for Mourning's End.",
          requirements: ["Waterfall Quest completed", "Regicide completed"],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Roving_Elves" }
          ]
        }
      },
      {
        id: "mournings-end-1",
        type: "quest",
        text: "Complete Mourning's End Part I",
        detail: {
          title: "Mourning's End Part I",
          subtitle: "Elf quest chain — needed for Plague's End",
          why: "First of the infamous Mourning's End quests. Required for the path to Plague's End.",
          requirements: ["Roving Elves completed", "Big Chompy Bird Hunting completed", "Sheep Herder completed", "60 Ranged", "50 Thieving"],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Mourning%27s_End_Part_I" }
          ]
        }
      },
      {
        id: "mournings-end-2",
        type: "quest",
        text: "Complete Mourning's End Part II",
        detail: {
          title: "Mourning's End Part II",
          subtitle: "Elf quest chain — the puzzle quest",
          why: "Infamous light puzzle quest. Use a guide. Required for Within the Light → Plague's End.",
          requirements: ["Mourning's End Part I completed"],
          tips: ["Use a video guide for the light puzzle. It's much easier than its reputation."],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Mourning%27s_End_Part_II" }
          ]
        }
      },
      {
        id: "family-crest",
        type: "quest",
        text: "Complete Family Crest",
        detail: {
          title: "Family Crest",
          subtitle: "Crafting XP + gauntlets — Curse of Arrav prerequisite",
          why: "Gives choice of Goldsmith, Chaos, or Steel gauntlets. Required for Defender of Varrock.",
          requirements: ["40 Crafting", "59 Magic", "40 Mining", "40 Smithing"],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Family_Crest" }
          ]
        }
      },
      {
        id: "lunar-diplomacy",
        type: "quest",
        text: "Complete Lunar Diplomacy",
        detail: {
          title: "Lunar Diplomacy",
          subtitle: "Unlocks Lunar spellbook — Vengeance, NPC Contact, Plank Make",
          why: "Unlocks the Lunar spellbook with essential utility spells. Required for Dream Mentor and WGS chain.",
          requirements: [
            "The Fremennik Trials completed",
            "Lost City completed",
            "61 Crafting",
            "40 Defence",
            "49 Firemaking",
            "65 Magic",
            "55 Mining",
            "60 Woodcutting"
          ],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Lunar_Diplomacy" }
          ]
        }
      },
      {
        id: "slayer-start",
        type: "skill",
        text: "Train Slayer to 50+",
        detail: {
          title: "Start Slayer Training",
          subtitle: "Core mid-game activity — combat XP, drops, and charms",
          why: "Slayer is the backbone of ironman combat training. It provides charms for Summoning, herbs for Herblore, alchables for GP, and combat XP across all styles. Getting to 50+ also meets the Desert Treasure requirement (10 Slayer) and unlocks useful monsters.",
          method: "Get assignments from the highest-level Slayer master you qualify for. Use Necromancy for most tasks. Key milestones: 50 (Bloodveld), 58 (Cave horror → Black mask/Slayer helm component), 75 (Gargoyle). Buy a Slayer helm ASAP — combines black mask effect with a helmet.",
          links: [
            { label: "RS Wiki — Slayer Training", url: "https://runescape.wiki/w/Slayer_training" },
            { label: "RS Wiki — Slayer Masters", url: "https://runescape.wiki/w/Slayer_Masters" }
          ]
        }
      },
      {
        id: "troll-stronghold",
        type: "quest",
        text: "Complete Troll Stronghold",
        detail: {
          title: "Troll Stronghold",
          subtitle: "Unlocks Trollheim and GWD1 area access",
          why: "Required for access to the God Wars Dungeon area, which contains GWD1 bosses. Also a prerequisite for Desert Treasure. Gives law rune access via herb farming on Trollheim.",
          requirements: ["Death Plateau completed", "15 Agility"],
          tips: [
            "Start by talking to Denulth in Burthorpe.",
            "Involves combat against trolls — bring food and prayers.",
            "After completion, use Trollheim teleport (or lodestone) for GWD1 access."
          ],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Troll_Stronghold" }
          ]
        }
      },
      {
        id: "train-thieving-53",
        type: "skill",
        text: "Train Thieving to 53",
        detail: {
          title: "Thieving to 53",
          subtitle: "Required for Desert Treasure",
          why: "53 Thieving is needed to access the pyramid in Desert Treasure. This unlocks Ancient Magicks — one of the most powerful spellbooks for PvM.",
          method: "Continue bakery stalls or Ardougne knights (25→53). Blackjacking at 45+ is faster but click-intensive. Safecracking (62+) is best long-term but you won't reach that yet.",
          links: [
            { label: "RS Wiki — Thieving Training", url: "https://runescape.wiki/w/Thieving_training" }
          ]
        }
      },
      {
        id: "train-firemaking-50",
        type: "skill",
        text: "Train Firemaking to 50",
        detail: {
          title: "Firemaking to 50",
          subtitle: "Required for Desert Treasure",
          why: "50 Firemaking is required to start Desert Treasure. A quick skill to train.",
          method: "Burn maple logs (30→50). Alternatively, do the Shattered Worlds minigame for XP lamps. Book of Char (Members' Loyalty Programme) can also help if available.",
          links: [
            { label: "RS Wiki — Firemaking Training", url: "https://runescape.wiki/w/Firemaking_training" }
          ]
        }
      },
      {
        id: "train-magic-50",
        type: "skill",
        text: "Train Magic to 50",
        detail: {
          title: "Magic to 50",
          subtitle: "Required for Desert Treasure",
          why: "50 Magic is required for Desert Treasure. Also useful for combat diversity and high-level alchemy.",
          method: "Combat training is the most efficient way — kill creatures on Slayer tasks with magic. Alternatively, use Shattered Worlds for fast combat XP.",
          links: [
            { label: "RS Wiki — Magic Training", url: "https://runescape.wiki/w/Magic_training" }
          ]
        }
      },
      {
        id: "desert-treasure",
        type: "quest",
        text: "Complete Desert Treasure",
        detail: {
          title: "Desert Treasure",
          subtitle: "Unlock the Ancient Magicks spellbook",
          why: "Ancient Magicks gives you Ice Barrage (AoE freeze), Blood Barrage (AoE + healing), and Shadow/Smoke spells. Blood Barrage is incredibly useful for sustain at many bosses. This is a core PvM unlock.",
          requirements: ["The Dig Site completed", "Troll Stronghold completed", "53 Thieving", "50 Firemaking", "50 Magic", "10 Slayer"],
          tips: [
            "Long quest with 4 mini-boss fights across the desert.",
            "Bring combat gear, food, waterskins, and various quest items.",
            "The ice diamond section (Trollheim) is hardest — bring prayer potions.",
            "After completion, switch to Ancient Magicks at any altar."
          ],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Desert_Treasure" }
          ]
        }
      },
      {
        id: "reward-ancient-magicks",
        type: "reward",
        text: "Unlock Ancient Magicks spellbook",
        detail: {
          title: "Ancient Magicks",
          subtitle: "Blood Barrage, Ice Barrage, and the full ancient spell set",
          why: "Blood Barrage heals you for damage dealt while hitting in an AoE — it's one of the best sustain tools in PvM. Ice Barrage freezes targets in place. These spells are used at bosses throughout the entire game.",
          tips: [
            "Switch spellbooks at the altar in Jaldraocht Pyramid or any player-owned house altar.",
            "Blood Barrage: Heals 5% of damage dealt as HP. Amazing for Slayer and multi-target bosses.",
            "Ice Barrage: AoE freeze for 15 seconds. Useful for mob control.",
            "You can auto-cast these on your action bar like regular spells."
          ],
          links: [
            { label: "RS Wiki — Ancient Magicks", url: "https://runescape.wiki/w/Ancient_Magicks" }
          ]
        }
      },
      {
        id: "rune-mysteries",
        type: "quest",
        text: "Complete Rune Mysteries",
        detail: {
          title: "Rune Mysteries",
          subtitle: "Unlocks Runecrafting altars + Rune Mythos chain",
          why: "Quick introductory quest with no requirements. Unlocks access to Runecrafting altars and is a prerequisite for Rune Mythos. Also useful as an early quest for quest points.",
          requirements: [],
          tips: [
            "Start at the Wizards' Tower south of Draynor.",
            "Very short quest — just talk to NPCs.",
            "Also unlocks Runecrafting altars for rune crafting."
          ],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Rune_Mysteries" }
          ]
        }
      },
      {
        id: "merlins-crystal",
        type: "quest",
        text: "Complete Merlin's Crystal",
        detail: {
          title: "Merlin's Crystal",
          subtitle: "Prerequisite for Holy Grail → King's Ransom chain",
          why: "Required before Holy Grail, which is required before King's Ransom. Part of the quest chain leading to Piety and the Knight Waves training ground.",
          requirements: [],
          tips: ["Start in Camelot — talk to King Arthur.", "Involves some combat and puzzle-solving.", "No skill requirements."],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Merlin%27s_Crystal" }
          ]
        }
      },
      {
        id: "holy-grail",
        type: "quest",
        text: "Complete Holy Grail",
        detail: {
          title: "Holy Grail",
          subtitle: "Prayer & Defence XP — feeds into King's Ransom",
          why: "Grants significant Prayer and Defence XP. Required for King's Ransom which unlocks Piety.",
          requirements: ["Merlin's Crystal completed"],
          tips: [
            "Start in Camelot — talk to King Arthur.",
            "Involves traveling to various locations including Fisher King's castle.",
            "No combat or skill requirements."
          ],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Holy_Grail" }
          ]
        }
      },
      {
        id: "one-small-favour",
        type: "quest",
        text: "Complete One Small Favour",
        detail: {
          title: "One Small Favour",
          subtitle: "Long but rewarding — final prereq for King's Ransom",
          why: "The last prerequisite quest for King's Ransom. Notorious for being long (chain of favours), but the quest XP rewards are good and King's Ransom + Piety make it all worthwhile.",
          requirements: ["Shilo Village completed"],
          tips: [
            "Start in Shilo Village — talk to Yanni Salika.",
            "This quest sends you all over the map. Use lodestones.",
            "Bring some basic supplies: steel bar, bronze bar, chisel, etc.",
            "The XP lamp at the end can go to any skill."
          ],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/One_Small_Favour" }
          ]
        }
      },
      {
        id: "kings-ransom",
        type: "quest",
        text: "Complete King's Ransom",
        detail: {
          title: "King's Ransom",
          subtitle: "Unlocks Knight Waves training ground for Piety",
          why: "Completing this quest gives access to the Knight Waves Training Ground, where you unlock Piety, Rigour, and Augury — powerful combat prayers that boost damage and accuracy.",
          requirements: ["Holy Grail completed", "Murder Mystery completed", "One Small Favour completed"],
          tips: [
            "Start in Camelot — talk to the Gossip.",
            "Investigation/puzzle quest with some combat.",
            "After completion, the Knight Waves miniquest becomes available."
          ],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/King%27s_Ransom" }
          ]
        }
      },
      {
        id: "knight-waves",
        type: "quest",
        text: "Complete Knight Waves Training Ground",
        detail: {
          title: "Knight Waves Training Ground",
          subtitle: "Fight 8 knights to unlock Piety, Rigour & Augury",
          why: "The reward here is Piety (melee), Rigour (ranged), and Augury (magic) — significant damage and accuracy prayer boosts that stack on top of protection prayers.",
          requirements: ["King's Ransom completed"],
          tips: [
            "Fight 8 Knights of the Round Table in sequence.",
            "No Prayer, Summoning, stuns, or binds allowed during the fights.",
            "Bring your best combat gear and food.",
            "Piety needs 70 Prayer + 70 Defence to use. Rigour and Augury also need 70 Prayer + 70 Defence."
          ],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Knight_Waves_Training_Ground" }
          ]
        }
      },
      {
        id: "reward-piety",
        type: "reward",
        text: "Unlock Piety, Rigour & Augury prayers",
        detail: {
          title: "Piety, Rigour & Augury",
          subtitle: "Major combat prayer upgrades for all styles",
          why: "Piety gives +8% Attack, +8% Strength, +8% Defence. Rigour gives the same for Ranged. Augury for Magic. These are significant DPS and accuracy boosts you'll use at every boss.",
          tips: [
            "All require 70 Prayer and 70 Defence to activate.",
            "Use alongside protection prayers — they stack.",
            "Piety/Rigour/Augury are eventually replaced by Ancient Curses (Turmoil/Anguish/Torment) which are even stronger.",
            "Also gives 20,000 XP in Attack, Strength, Defence, Constitution, Ranged, and Magic."
          ],
          links: [
            { label: "RS Wiki — Piety", url: "https://runescape.wiki/w/Piety" }
          ]
        }
      },
      {
        id: "dream-mentor",
        type: "quest",
        text: "Complete Dream Mentor",
        detail: {
          title: "Dream Mentor",
          subtitle: "More Lunar spells — WGS prerequisite",
          why: "Unlocks additional Lunar spells including Humidify. Required for While Guthix Sleeps.",
          requirements: ["Lunar Diplomacy completed", "85 Combat level"],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Dream_Mentor" }
          ]
        }
      },
      {
        id: "eyes-of-glouphrie",
        type: "quest",
        text: "Complete Eyes of Glouphrie",
        detail: {
          title: "Eyes of Glouphrie",
          subtitle: "WGS prerequisite — Gnome quest chain",
          why: "Part of the Gnome quest chain. Required for Path of Glouphrie and eventually WGS.",
          requirements: ["The Grand Tree completed"],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Eyes_of_Glouphrie" }
          ]
        }
      },
      {
        id: "path-of-glouphrie",
        type: "quest",
        text: "Complete Path of Glouphrie",
        detail: {
          title: "Path of Glouphrie",
          subtitle: "WGS prerequisite — Gnome quest chain",
          why: "Continues the Gnome quest chain. Required for While Guthix Sleeps.",
          requirements: ["Eyes of Glouphrie completed", "Tree Gnome Village completed"],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Path_of_Glouphrie" }
          ]
        }
      },
      {
        id: "what-lies-below",
        type: "quest",
        text: "Complete What Lies Below",
        detail: {
          title: "What Lies Below",
          subtitle: "Curse of Arrav prerequisite",
          why: "Quick quest. Required for Hunt for Surok and Defender of Varrock.",
          requirements: ["35 Runecrafting"],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/What_Lies_Below" }
          ]
        }
      },
      {
        id: "garden-of-tranquillity",
        type: "quest",
        text: "Complete Garden of Tranquillity",
        detail: {
          title: "Garden of Tranquillity",
          subtitle: "Curse of Arrav prerequisite",
          why: "Required for the Curse of Arrav chain.",
          requirements: ["The Restless Ghost completed", "Creature of Fenkenstrain completed", "25 Farming"],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Garden_of_Tranquillity" }
          ]
        }
      },
      {
        id: "tale-of-muspah",
        type: "quest",
        text: "Complete Tale of the Muspah",
        detail: {
          title: "Tale of the Muspah",
          subtitle: "Curse of Arrav prerequisite",
          why: "No prerequisites at all. Required for Curse of Arrav.",
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Tale_of_the_Muspah" }
          ]
        }
      },
      {
        id: "missing-my-mummy",
        type: "quest",
        text: "Complete Missing My Mummy",
        detail: {
          title: "Missing My Mummy",
          subtitle: "Curse of Arrav prerequisite",
          why: "Required for Curse of Arrav.",
          requirements: ["Icthlarin's Little Helper completed", "The Golem completed"],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Missing_My_Mummy" }
          ]
        }
      },
      {
        id: "enhanced-excalibur",
        type: "unlock",
        text: "Unlock Enhanced Excalibur (Seer's Village Hard Tasks)",
        detail: {
          title: "Enhanced Excalibur",
          subtitle: "Free healing cooldown — used at every boss",
          why: "Enhanced Excalibur heals 4% of your max HP every 2 seconds for 20 seconds (40% total) on a 5-minute cooldown. It's a free heal with no food cost, used at virtually every boss encounter. Requires completing the Hard Seer's Village achievement set.",
          requirements: ["King's Ransom completed", "Hard Seer's Village achievements"],
          tips: [
            "Get the base Excalibur from Merlin's Crystal (already completed via King's Ransom chain).",
            "Complete Hard Seer's Village achievements to enhance it. Needs various skills at 50-60.",
            "Elite Seer's Village achievements double the healing (8% per tick = 80% total).",
            "Keep it on your action bar — use it on cooldown during bossing for free sustain."
          ],
          links: [
            { label: "RS Wiki — Enhanced Excalibur", url: "https://runescape.wiki/w/Enhanced_Excalibur" },
            {
              label: "RS Wiki — Seer's Village Tasks",
              url: "https://runescape.wiki/w/Seers'_Village_achievements"
            }
          ]
        }
      },
      {
        id: "mobility-abilities",
        type: "unlock",
        text: "Unlock mobility abilities: Bladed Dive, Double Surge/Escape",
        detail: {
          title: "Mobility Abilities",
          subtitle: "Bladed Dive + Double Surge + Double Escape — essential PvM movement",
          why: "These abilities are fundamental to boss movement. Bladed Dive is an instant targeted teleport (also deals damage). Double Surge and Double Escape let you use Surge/Escape twice in quick succession. Used at virtually every boss.",
          tips: [
            "Bladed Dive: Bought from Shattered Worlds reward shop (63 Slayer, needs ~2,500 Shattered Anima). Works with melee + Laceration Boots.",
            "Double Surge codex: Found on Anachronia (from Agility course or Big Game Hunter). Lets you Surge twice.",
            "Double Escape codex: Also from Anachronia. Lets you Escape twice.",
            "Dive ability (from Succession quest): Basic forward dash. No requirements.",
            "Laceration Boots: Allow Bladed Dive with any style (dropped by Shadow creatures). Very useful."
          ],
          links: [
            { label: "RS Wiki — Bladed Dive", url: "https://runescape.wiki/w/Bladed_Dive" },
            { label: "RS Wiki — Double Surge", url: "https://runescape.wiki/w/Double_Surge" },
            { label: "RS Wiki — Shattered Worlds", url: "https://runescape.wiki/w/Shattered_Worlds" }
          ]
        }
      },
      {
        id: "king-black-dragon",
        type: "boss",
        text: "Boss: King Black Dragon",
        detail: {
          title: "King Black Dragon",
          subtitle: "Classic dragon boss — Reaper Crew requirement",
          why: "An accessible early-mid boss. KBD drops Dragon Rider boots and gloves (T70 hybrid) and counts toward Reaper Crew. Good practice for dealing with dragonfire mechanics.",
          requirements: [],
          suggested: ["70+ combat stats", "60+ Defence", "Anti-dragon shield or Super antifire", "Protection prayers"],
          drops: [
            { item: "Dragon Rider boots", why: "T70 hybrid boots (1/512)" },
            { item: "Dragon Rider gloves", why: "T70 hybrid gloves (1/512)" },
            { item: "Draconic visage", why: "Makes Dragonfire shield (1/5,000)" }
          ],
          moveOn: "After a few kills for Reaper Crew. Not a priority farm.",
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/King_Black_Dragon" },
            { label: "PvME — KBD Guide", url: "https://pvme.io/pvme-guides/basic-guides/kbd-basic/" }
          ]
        }
      },
      {
        id: "chaos-elemental",
        type: "boss",
        text: "Boss: Chaos Elemental",
        detail: {
          title: "Chaos Elemental",
          subtitle: "Wilderness boss — Reaper Crew requirement",
          why: "Located in the Wilderness. Counts toward Reaper Crew. Bring minimal risk gear since the Wilderness is dangerous. The boss can unequip your items and teleport you.",
          requirements: [],
          suggested: ["70+ combat stats", "Cheap/welfare gear (risk of PK)", "Protection prayers"],
          drops: [
            { item: "Ancient Warriors' equipment", why: "Statius/Vesta/Zuriel/Morrigan's — rare but powerful" },
            { item: "Dragon 2h sword", why: "Rare drop" }
          ],
          moveOn: "One kill for Reaper Crew is sufficient. Not worth farming.",
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Chaos_Elemental" },
            {
              label: "PvME — Chaos Elemental Guide",
              url: "https://pvme.io/pvme-guides/basic-guides/chaos-elemental-basic/"
            }
          ]
        }
      },
      {
        id: "dagannoth-kings",
        type: "boss",
        text: "Boss: Dagannoth Kings",
        detail: {
          title: "Dagannoth Kings",
          subtitle: "Three kings — Berserker ring + dragon hatchet",
          why: "Three bosses in one lair, each weak to a different combat style. The Berserker ring and Warrior ring are useful melee accessories. Dragon hatchet is the best hatchet in the game. All three count as one Reaper Crew kill.",
          requirements: ["The Fremennik Trials completed"],
          suggested: ["75+ in all combat styles (tribrid recommended)", "70+ Defence", "Protection prayers"],
          drops: [
            { item: "Berserker ring (Rex)", why: "Melee DPS ring (1/128)" },
            { item: "Warrior ring (Rex)", why: "Melee accuracy ring (1/128)" },
            { item: "Archers' ring (Supreme)", why: "Ranged DPS ring (1/128)" },
            { item: "Seers' ring (Prime)", why: "Magic DPS ring (1/128)" },
            { item: "Dragon hatchet (any king)", why: "Best hatchet in the game (1/256)" }
          ],
          moveOn: "After obtaining Berserker ring and/or dragon hatchet. Seers' and Archers' rings are low priority.",
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Dagannoth_Kings" },
            {
              label: "PvME — DKs Guide",
              url: "https://pvme.io/pvme-guides/rs3-full-boss-guides/dagannoth-kings/"
            }
          ]
        }
      },
      {
        id: "kalphite-queen",
        type: "boss",
        text: "Boss: Kalphite Queen",
        detail: {
          title: "Kalphite Queen",
          subtitle: "Two-phase boss — Reaper Crew requirement",
          why: "The Kalphite Queen has two phases — one immune to ranged/magic, one immune to melee. Teaches style switching. Counts toward Reaper Crew. Not a major drop source but good practice.",
          requirements: [],
          suggested: ["70+ in two combat styles", "70+ Defence", "Protection prayers"],
          drops: [
            { item: "Dragon chainbody", why: "Cosmetic/rare (1/128)" },
            { item: "Dragon 2h sword", why: "Rare drop (1/256)" },
            { item: "Kalphite Queen head", why: "Slayer helm recolour (1/128)" }
          ],
          moveOn: "After one kill for Reaper Crew. Not a priority farm.",
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Kalphite_Queen" },
            {
              label: "PvME — KQ Guide",
              url: "https://pvme.io/pvme-guides/rs3-full-boss-guides/kalphite-queen/"
            }
          ]
        }
      },
      {
        id: "queen-black-dragon",
        type: "boss",
        text: "Boss: Queen Black Dragon",
        detail: {
          title: "Queen Black Dragon",
          subtitle: "Solo dragon boss — Royal crossbow + dragonbane ore",
          why: "QBD is an excellent solo boss that teaches phase-based mechanics and movement. The Royal crossbow (T80 2H ranged, free to forge during the fight) is a great ironman weapon. Song from the Depths quest reduces her damage.",
          requirements: ["60 Summoning (to access lair)"],
          suggested: ["80+ combat stats", "70+ Defence", "Super antifire potions", "Decent food"],
          drops: [
            {
              item: "Royal crossbow (forged during fight)",
              why: "T80 2H ranged — free, just bring a Royal crossbow (unforged) and brandish it during her fire wall"
            },
            { item: "Dragon kiteshield", why: "Rare (1/256)" },
            { item: "Dragonbone upgrade kit", why: "Cosmetic upgrade (1/250)" }
          ],
          moveOn: "After forging the Royal crossbow. Good GP farm if needed.",
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Queen_Black_Dragon" },
            {
              label: "PvME — QBD Guide",
              url: "https://pvme.io/pvme-guides/rs3-full-boss-guides/queen-black-dragon/"
            }
          ]
        }
      },
      {
        id: "fairy-tale-1",
        type: "quest",
        text: "Complete A Fairy Tale I — Growing Pains",
        detail: {
          title: "A Fairy Tale I — Growing Pains",
          subtitle: "Farming XP — fairy ring access prerequisite",
          why: "Starts the Fairy Tale series. Required for Fairy Tale II which unlocks full fairy ring network.",
          requirements: ["Lost City completed", "Nature Spirit completed", "49 Farming", "57 Herblore"],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/A_Fairy_Tale_I_-_Growing_Pains" }
          ]
        }
      },
      {
        id: "fairy-tale-2",
        type: "quest",
        text: "Complete A Fairy Tale II — Cure a Queen",
        detail: {
          title: "A Fairy Tale II — Cure a Queen",
          subtitle: "Unlocks full fairy ring network — RotM prerequisite",
          why: "Unlocks the full fairy ring transport network. Essential for fast travel. RotM prerequisite.",
          requirements: ["A Fairy Tale I completed", "40 Farming", "49 Herblore", "57 Thieving"],
          tips: ["You can use fairy rings after starting the quest, before finishing it."],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/A_Fairy_Tale_II_-_Cure_a_Queen" }
          ]
        }
      },
      {
        id: "enakhras-lament",
        type: "quest",
        text: "Complete Enakhra's Lament",
        detail: {
          title: "Enakhra's Lament",
          subtitle: "Ritual of the Mahjarrat prerequisite",
          why: "Required for Ritual of the Mahjarrat.",
          requirements: ["43 Crafting", "45 Firemaking", "39 Magic", "45 Mining", "43 Prayer"],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Enakhra%27s_Lament" }
          ]
        }
      },
      {
        id: "all-fired-up",
        type: "quest",
        text: "Complete All Fired Up",
        detail: {
          title: "All Fired Up",
          subtitle: "RotM + River of Blood prerequisite",
          why: "Required for both Ritual of the Mahjarrat and River of Blood.",
          requirements: ["Priest in Peril completed", "43 Firemaking"],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/All_Fired_Up" }
          ]
        }
      },
      {
        id: "wanted",
        type: "quest",
        text: "Complete Wanted!",
        detail: {
          title: "Wanted!",
          subtitle: "WGS prerequisite",
          why: "White Knights quest. Required for The Slug Menace and eventually WGS.",
          requirements: ["Recruitment Drive completed", "Lost City completed", "Priest in Peril completed"],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Wanted!" }
          ]
        }
      },
      {
        id: "slug-menace",
        type: "quest",
        text: "Complete The Slug Menace",
        detail: {
          title: "The Slug Menace",
          subtitle: "WGS prerequisite",
          why: "Continues the Sea Slug quest chain. Required for While Guthix Sleeps.",
          requirements: ["Sea Slug completed", "Wanted! completed", "30 Crafting", "30 Runecrafting", "30 Slayer", "30 Thieving"],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/The_Slug_Menace" }
          ]
        }
      },
      {
        id: "hunt-for-surok",
        type: "quest",
        text: "Complete The Hunt for Surok",
        detail: {
          title: "The Hunt for Surok",
          subtitle: "WGS prerequisite (miniquest)",
          why: "Short miniquest. Required for While Guthix Sleeps.",
          requirements: ["What Lies Below completed"],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Hunt_for_Surok" }
          ]
        }
      },
      {
        id: "needle-skips",
        type: "quest",
        text: "Complete The Needle Skips",
        detail: {
          title: "The Needle Skips",
          subtitle: "Elder Gods chain — starts the Needle series",
          why: "Starts the Elder Gods quest chain. No quest prerequisites but 80+ combat recommended.",
          tips: ["80+ Combat recommended for the boss fight."],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/The_Needle_Skips" }
          ]
        }
      },
      {
        id: "you-are-it",
        type: "quest",
        text: "Complete You Are It",
        detail: {
          title: "You Are It",
          subtitle: "Elder Gods chain — miniquest",
          why: "Short miniquest continuing the Needle storyline.",
          requirements: ["The Needle Skips completed"],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/You_Are_It" }
          ]
        }
      },
      {
        id: "desperate-times",
        type: "quest",
        text: "Complete Desperate Times",
        detail: {
          title: "Desperate Times",
          subtitle: "Elder Gods chain — Anachronia",
          why: "Continues the Elder Gods storyline. Introduces Kerapac.",
          requirements: ["The Needle Skips completed", "You Are It completed", "50 Agility", "50 Mining", "50 Smithing"],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Desperate_Times" }
          ]
        }
      },
      {
        id: "summers-end",
        type: "quest",
        text: "Complete Summer's End",
        detail: {
          title: "Summer's End",
          subtitle: "Unlocks Corporeal Beast — Spirit of Summer chain",
          why: "Summer's End is required to access the Corporeal Beast. It's the sequel to Spirit of Summer and involves combat with the Spirit Beast. Complete it before attempting Corp.",
          requirements: ["The Restless Ghost completed", "47 Firemaking", "35 Hunter", "45 Mining", "55 Prayer", "23 Summoning", "37 Woodcutting"],
          tips: [
            "Spirit of Summer (prerequisite): Requires The Restless Ghost. Needs 19 Construction, 26 Hunter, 35 Prayer, 37 Summoning, 23 Woodcutting.",
            "Bring combat gear — you fight the Spirit Beast at the end.",
            "Both quests are in the Wilderness, but instanced — no PvP danger."
          ],
          links: [
            { label: "RS Wiki — Summer's End", url: "https://runescape.wiki/w/Summer%27s_End" },
            { label: "RS Wiki — Spirit of Summer", url: "https://runescape.wiki/w/Spirit_of_Summer" }
          ]
        }
      },
      {
        id: "corporeal-beast",
        type: "boss",
        text: "Boss: Corporeal Beast",
        detail: {
          title: "Corporeal Beast",
          subtitle: "Spirit shields — Divine, Elysian, Arcane, Spectral",
          why: "The Corporeal Beast drops sigils that create the Spirit shield family — some of the best shields in the game. The Divine spirit shield is particularly useful for tanking. Corp is a classic boss and required for Reaper Crew.",
          requirements: ["Summer's End quest completed"],
          suggested: ["80+ combat stats", "70+ Prayer (Piety)", "T75+ weapons (spears deal full damage, other weapons deal half)"],
          drops: [
            {
              item: "Divine sigil",
              why: "Creates Divine spirit shield — absorbs 30% of damage from prayer (1/512)"
            },
            {
              item: "Elysian sigil",
              why: "Creates Elysian spirit shield — 70% chance to reduce damage by 25% (1/512)"
            },
            { item: "Arcane sigil", why: "Creates Arcane spirit shield — magic damage boost (1/512)" },
            { item: "Spectral sigil", why: "Creates Spectral spirit shield — prayer drain reduction (1/512)" },
            { item: "Holy elixir", why: "Required to create blessed spirit shields (1/171)" }
          ],
          moveOn: "After one kill for Reaper Crew, or after obtaining desired spirit shield.",
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Corporeal_Beast" },
            { label: "RS Wiki — Strategy", url: "https://runescape.wiki/w/Corporeal_Beast/Strategies" }
          ]
        }
      },
      {
        id: "tztok-jad",
        type: "boss",
        text: "Boss: TzTok-Jad — Fight Cave",
        detail: {
          title: "TzTok-Jad — Fight Cave",
          subtitle: "Fire cape — prerequisite for Fight Kiln and TokHaar-Kal capes",
          why: "TzTok-Jad is the final boss of the Fight Cave. Defeating him earns the Fire cape — a requirement for the Fight Kiln, which rewards the TokHaar-Kal capes (BIS style capes for a long time). Jad's prayer switching mechanic is iconic PvM.",
          requirements: [],
          suggested: ["75+ combat stats", "70+ Defence", "70+ Prayer", "Lots of food + prayer potions for the waves leading to Jad"],
          drops: [
            { item: "Fire cape", why: "Required to access Fight Kiln — sacrifice it to enter" }
          ],
          moveOn: "After obtaining the Fire cape. You need to sacrifice it to enter the Fight Kiln.",
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/TzTok-Jad" },
            { label: "RS Wiki — Strategy", url: "https://runescape.wiki/w/TzTok-Jad" }
          ]
        }
      },
      {
        id: "har-aken",
        type: "boss",
        text: "Boss: Har-Aken — Fight Kiln",
        detail: {
          title: "Har-Aken — Fight Kiln",
          subtitle: "TokHaar-Kal capes — BIS style capes until igneous",
          why: "The Fight Kiln rewards the TokHaar-Kal cape for your combat style — these are the best style capes until TzKal-Zuk's igneous capes. Requires sacrificing a Fire cape to enter. Obsidian armor (from Brink of Extinction) gives 45% damage reduction here.",
          requirements: ["Fire cape (sacrificed to enter)", "The Elder Kiln completed"],
          suggested: ["80+ combat stats", "80+ Defence", "Obsidian armor (huge damage reduction)", "Food + prayer potions for 37 waves"],
          drops: [
            { item: "TokHaar-Kal-Ket", why: "BIS melee cape" },
            { item: "TokHaar-Kal-Xil", why: "BIS ranged cape" },
            { item: "TokHaar-Kal-Mej", why: "BIS magic cape" },
            { item: "Uncut onyx", why: "Guaranteed drop — very valuable" }
          ],
          moveOn: "After obtaining the TokHaar-Kal cape for your main style. Run it again for other styles.",
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Fight_Kiln" },
            { label: "RS Wiki — Strategy", url: "https://runescape.wiki/w/Fight_Kiln/Strategies" }
          ]
        }
      },
      {
        id: "arch-glacor-learner",
        type: "boss",
        text: "Boss: Arch-Glacor — Learner Mode",
        detail: {
          title: "Arch-Glacor — Learner Mode",
          subtitle: "The best boss for learning PvM fundamentals",
          why: "Arch-Glacor is unique — you can toggle 0-5 mechanics, making it a perfect learner boss. Start with 0 mechanics (essentially a training dummy) and add mechanics one at a time. Deaths in Normal Mode are SAFE, even for Hardcore Ironmen.",
          requirements: [],
          suggested: ["70+ in any combat style", "60+ Defence", "Protection prayers", "Decent food"],
          drops: [
            { item: "Normal Mode (0-4 mechanics)", why: "No unique drops — this is for practice only" }
          ],
          moveOn: "Once you're comfortable with all 5 individual mechanics, enable all 5 at once.",
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Arch-Glacor" },
            { label: "RS Wiki — Strategy", url: "https://runescape.wiki/w/Arch-Glacor/Strategies" },
            {
              label: "PvME — Arch-Glacor Guide",
              url: "https://pvme.io/pvme-guides/basic-guides/arch-glacor-basic/"
            }
          ]
        }
      },
      {
        id: "arch-glacor-nm5",
        type: "boss",
        text: "Boss: Arch-Glacor — Normal Mode, all 5 mechanics",
        detail: {
          title: "Arch-Glacor — Normal Mode (5 Mechanics)",
          subtitle: "Full Normal Mode with all mechanics active",
          why: "With all 5 mechanics enabled, Arch-Glacor drops unique items and prepares you for Hard Mode. This is also the unlock requirement for Hard Mode (must complete one solo kill with all 5 mechanics).",
          requirements: [],
          suggested: ["80+ in any combat style", "70+ Defence", "70+ Prayer (Piety/Rigour/Augury)", "Good food + prayer potions"],
          drops: [
            { item: "Scripture of Wen", why: "Pocket slot item (1/500)" },
            { item: "Leng artefact", why: "Material for T95 melee swords — bank for later (1/500)" }
          ],
          moveOn: "After unlocking Hard Mode access. Return later with better gear for Hard Mode farming.",
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Arch-Glacor" },
            {
              label: "PvME — Arch-Glacor Guide",
              url: "https://pvme.io/pvme-guides/basic-guides/arch-glacor-basic/"
            }
          ]
        }
      },
      {
        id: "gwd1-graardor",
        type: "boss",
        text: "Boss: General Graardor",
        detail: {
          title: "General Graardor — God Wars Dungeon 1",
          subtitle: "Bandos power armor — your melee DPS upgrade",
          why: "Bandos armor is T70 power armor with damage bonuses, unlike Barrows which is tank armor. Power armor means faster kills everywhere. Graardor is the easiest GWD1 boss.",
          requirements: ["70 Strength (to access Bandos area)", "40 Bandos killcount (or War's Blessing)"],
          suggested: ["80+ in any combat style", "70+ Defence", "70+ Prayer", "Good food + prayer restoration"],
          drops: [
            { item: "Bandos chestplate", why: "T70 melee power body (1/384)" },
            { item: "Bandos tassets", why: "T70 melee power legs (1/384)" },
            { item: "Bandos helmet/boots/gloves", why: "Complete the set (1/384 each)" },
            { item: "Bandos hilt", why: "Bandos godsword component (1/512)" }
          ],
          moveOn: "After completing at least chestplate + tassets. Full set is nice but not required.",
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/General_Graardor" },
            { label: "RS Wiki — Strategy", url: "https://runescape.wiki/w/General_Graardor/Strategies" },
            {
              label: "PvME — Upgrade Order (Melee)",
              url: "https://pvme.io/pvme-guides/upgrading-info/upgrade-order/melee/"
            }
          ]
        }
      },
      {
        id: "gwd1-kril",
        type: "boss",
        text: "Boss: K'ril Tsutsaroth",
        detail: {
          title: "K'ril Tsutsaroth — God Wars Dungeon 1",
          subtitle: "Subjugation robes — your magic DPS upgrade",
          why: "Subjugation is T70 magic power armor. If you plan to use magic alongside Necromancy, this set is essential. K'ril also drops the Zamorakian spear (useful for some content).",
          requirements: ["70 Constitution (to access Zamorak area)", "40 Zamorak killcount (or War's Blessing)"],
          suggested: ["80+ in any combat style", "70+ Defence", "70+ Prayer", "K'ril can drain prayer and hit hard — bring prayer restores"],
          drops: [
            { item: "Subjugation garb", why: "T70 magic power body (1/512)" },
            { item: "Subjugation gown", why: "T70 magic power legs (1/512)" },
            { item: "Subjugation hood/gloves/boots/ward", why: "Complete the set (1/512 each)" },
            { item: "Zamorakian spear", why: "T70 melee spear (1/512)" }
          ],
          moveOn: "After completing garb + gown at minimum.",
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/K%27ril_Tsutsaroth" },
            {
              label: "PvME — Upgrade Order (Magic)",
              url: "https://pvme.io/pvme-guides/upgrading-info/upgrade-order/magic/"
            }
          ]
        }
      },
      {
        id: "gwd1-kreearra",
        type: "boss",
        text: "Boss: Kree'arra",
        detail: {
          title: "Kree'arra — God Wars Dungeon 1",
          subtitle: "Armadyl armor — your ranged DPS upgrade",
          why: "Armadyl is T70 ranged power armor. Useful if you plan to range bosses like Araxxor or Nex later. Kree'arra cannot be meleed — you must use ranged, magic, or necromancy.",
          requirements: ["70 Ranged (to access Armadyl area)", "40 Armadyl killcount (or War's Blessing)"],
          suggested: ["80+ Ranged, Magic, or Necromancy", "70+ Defence", "70+ Prayer"],
          drops: [
            { item: "Armadyl chestplate", why: "T70 ranged power body (1/384)" },
            { item: "Armadyl chainskirt", why: "T70 ranged power legs (1/384)" },
            { item: "Armadyl helmet/gloves/boots/buckler", why: "Complete the set (1/384 each)" }
          ],
          moveOn: "After completing chestplate + chainskirt at minimum.",
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Kree%27arra" },
            {
              label: "PvME — Upgrade Order (Ranged)",
              url: "https://pvme.io/pvme-guides/upgrading-info/upgrade-order/ranged/"
            }
          ]
        }
      },
      {
        id: "gwd1-zilyana",
        type: "boss",
        text: "Boss: Commander Zilyana",
        detail: {
          title: "Commander Zilyana — God Wars Dungeon 1",
          subtitle: "Saradomin sword + completes GWD1 Reaper set",
          why: "Commander Zilyana drops the Saradomin sword (decent T75 2H melee) and Saradomin hilt. More importantly, killing all four GWD1 generals counts toward Reaper Crew. Zilyana is fast and uses melee/magic — protect from melee and DPS quickly.",
          requirements: ["70 Agility (to access Saradomin area)", "40 Saradomin killcount (or War's Blessing)"],
          suggested: ["80+ in any combat style", "70+ Defence", "70+ Prayer"],
          drops: [
            { item: "Saradomin hilt", why: "Saradomin godsword component (1/512)" },
            { item: "Saradomin sword", why: "T75 2H melee weapon (1/512)" },
            { item: "Saradomin's whisper/murmur/hiss", why: "Niche necklaces (1/512 each)" }
          ],
          moveOn: "After at least one kill for Reaper Crew. Farm if you want the Saradomin godsword.",
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Commander_Zilyana" },
            { label: "RS Wiki — Strategy", url: "https://runescape.wiki/w/Commander_Zilyana/Strategies" }
          ]
        }
      },
      {
        id: "reward-gwd1-power-armor",
        type: "reward",
        text: "Equip GWD1 power armor sets",
        detail: {
          title: "GWD1 Power Armor",
          subtitle: "T70 damage-boosting armor for all combat styles",
          why: "Power armor gives damage bonuses that tank armor (Barrows) does not. Switching from Barrows to GWD1 power armor is a significant DPS increase. Use Bandos for melee, Subjugation for magic, Armadyl for ranged.",
          tips: [
            "Power armor > tank armor for DPS at almost all bosses.",
            "Keep your Barrows sets for tankier fights where survival matters more.",
            "GWD1 armor is non-degradable — it lasts forever, unlike Barrows.",
            "You'll eventually replace these with T80+ armor from GWD2/Invention."
          ],
          links: [
            {
              label: "RS Wiki — God Wars Equipment",
              url: "https://runescape.wiki/w/God_Wars_Dungeon#Equipment"
            }
          ]
        }
      },
      {
        id: "dungeoneering-tokens",
        type: "skill",
        text: "Earn Dungeoneering tokens for key rewards",
        detail: {
          title: "Dungeoneering Token Rewards",
          subtitle: "Charming imp, Ring of Vigour, Herbicide, Bonecrusher",
          why: "Several game-changing items come from Dungeoneering tokens. Charming imp auto-collects charms (essential for Summoning), Ring of Vigour saves 10% adrenaline on ultimates, and Herbicide/Bonecrusher provide passive XP.",
          method: "Do Dungeoneering floors or ED3 trash runs for tokens. ED3 trash runs are fastest for tokens + combat XP. Priority purchases: 1) Charming imp (100k tokens), 2) Ring of Vigour (50k tokens), 3) Herbicide (34k tokens), 4) Bonecrusher (34k tokens, unless you already have the Bonecrusher maul).",
          links: [
            { label: "RS Wiki — Dungeoneering Rewards", url: "https://runescape.wiki/w/Dungeoneering/Rewards" },
            {
              label: "PvME — Free Upgrades",
              url: "https://pvme.io/pvme-guides/upgrading-info/upgrade-order/free-upgrades/"
            },
            {
              label: "PvME — Permanent Unlocks",
              url: "https://pvme.io/pvme-guides/upgrading-info/permanent-unlocks/"
            }
          ]
        }
      },
      {
        id: "reward-charming-imp",
        type: "reward",
        text: "Obtain Charming imp & Ring of Vigour",
        detail: {
          title: "Charming Imp & Ring of Vigour",
          subtitle: "Two of the most important Dungeoneering rewards for PvM",
          why: "Charming imp auto-collects charms from kills, making Summoning training passive and effortless. Ring of Vigour retains 10% adrenaline after ultimate abilities — a direct DPS increase that compounds over every boss fight.",
          tips: [
            "Charming imp: Configure to auto-collect gold + green + crimson + blue charms.",
            "Add Charming imp to your tool belt for 500 Slayer points (so you never forget it).",
            "Ring of Vigour: Wear for every boss fight. Later, the Extinction quest makes this passive (frees ring slot).",
            "Also grab Herbicide when you can — auto-cleans herbs for Herblore XP during Slayer."
          ],
          links: [
            { label: "RS Wiki — Charming Imp", url: "https://runescape.wiki/w/Charming_imp" },
            { label: "RS Wiki — Ring of Vigour", url: "https://runescape.wiki/w/Ring_of_vigour" }
          ]
        }
      },
      {
        id: "train-smithing-80",
        type: "skill",
        text: "Train Smithing to 80",
        detail: {
          title: "Smithing to 80",
          subtitle: "Required to unlock Invention (unboostable)",
          why: "80 Smithing is one of three unboostable requirements for Invention — the most powerful PvM skill in the game. Invention lets you augment weapons and armor with perks that provide enormous DPS increases.",
          method: "Smith burial armor at the Artisans' Workshop (best XP from 70+). Before 70, smith platebodies or use Smithing daily challenges. The Artisans' Workshop also gives respect points for useful rewards.",
          links: [
            { label: "RS Wiki — Smithing Training", url: "https://runescape.wiki/w/Smithing_training" },
            { label: "RS Wiki — Artisans' Workshop", url: "https://runescape.wiki/w/Artisans%27_Workshop" }
          ]
        }
      },
      {
        id: "train-crafting-80",
        type: "skill",
        text: "Train Crafting to 80",
        detail: {
          title: "Crafting to 80",
          subtitle: "Required to unlock Invention (unboostable)",
          why: "80 Crafting is one of three unboostable requirements for Invention. You should already have decent Crafting from earlier quests and gem cutting.",
          method: "Cut gems from the Shilo Village gem shop or make dragonhide armor from hides collected via combat/Slayer. D'hide bodies are good XP from 77+. Alternatively, craft battlestaves if you have the supplies.",
          links: [
            { label: "RS Wiki — Crafting Training", url: "https://runescape.wiki/w/Crafting_training" }
          ]
        }
      },
      {
        id: "train-divination-80",
        type: "skill",
        text: "Train Divination to 80",
        detail: {
          title: "Divination to 80",
          subtitle: "Required to unlock Invention (unboostable)",
          why: "80 Divination is one of three unboostable requirements for Invention. Divination is also needed to make divine charges that power augmented gear.",
          method: "Do Guthixian Caches twice daily (best Divination XP by far). Supplement with regular harvesting at the highest-level wisp colony you can access. Hall of Memories is also excellent at higher levels.",
          links: [
            { label: "RS Wiki — Divination Training", url: "https://runescape.wiki/w/Divination_training" },
            { label: "RS Wiki — Guthixian Cache", url: "https://runescape.wiki/w/Guthixian_Cache" }
          ]
        }
      },
      {
        id: "unlock-invention",
        type: "unlock",
        text: "Unlock Invention skill",
        detail: {
          title: "Unlock Invention",
          subtitle: "The most powerful PvM skill in the game",
          why: "Invention lets you augment weapons and armor, then add perks that dramatically increase damage, accuracy, and survivability. Without Invention, you're missing ~15-20% of your potential DPS.",
          tips: [
            "Talk to Doc at the Invention Guild northeast of Falador to start the tutorial.",
            "Complete the tutorial to unlock the skill.",
            "You'll need divine charges to power augmented gear — make them from divine energy.",
            "Start augmenting your primary combat weapon immediately."
          ],
          links: [
            { label: "RS Wiki — Invention", url: "https://runescape.wiki/w/Invention" },
            { label: "RS Wiki — Invention Tutorial", url: "https://runescape.wiki/w/Invention_tutorial" },
            {
              label: "PvME — Invention Basics",
              url: "https://pvme.io/pvme-guides/invention-and-perks/invention-basics/"
            }
          ]
        }
      },
      {
        id: "reward-basic-perks",
        type: "reward",
        text: "Add basic Invention perks to gear",
        detail: {
          title: "Basic PvM Invention Perks",
          subtitle: "Precise, Equilibrium, Biting & Crackling",
          why: "Even entry-level perks give a huge DPS boost. Precise 6 + Equilibrium 4 on weapons increases average ability damage by ~9%. Biting and Crackling on armor add crit chance and free periodic damage.",
          tips: [
            "WEAPONS: Precise 6 (9x Historic components, ancient gizmo) + Equilibrium 4 (9x Timeworn components).",
            "ARMOR: Biting 2-3 (Direct + Noxious components), Crackling 3-4 (Explosive components).",
            "Later add: Impatient 4 (extra adrenaline), Enhanced Devoted 4 (damage reduction).",
            "Augment your primary weapon first, then armor. Use divine charges to power them."
          ],
          links: [
            { label: "RS Wiki — Optimal Perks", url: "https://runescape.wiki/w/Optimal_PvM_perk_setup" },
            { label: "PvME — Perks Guide", url: "https://pvme.io/pvme-guides/invention-and-perks/perks/" }
          ]
        }
      },
      {
        id: "archaeology-56",
        type: "skill",
        text: "Train Archaeology to 56",
        detail: {
          title: "Archaeology to 56",
          subtitle: "Unlock Berserker's Fury relic",
          why: "Berserker's Fury is one of the strongest PvM relics — up to +5.5% damage when below max HP (which you almost always are during bossing). This single relic is a significant passive DPS boost.",
          method: "Excavate at dig sites following the Archaeology training guide. At 56, unlock and activate Berserker's Fury at the monolith.",
          links: [
            { label: "RS Wiki — Archaeology Training", url: "https://runescape.wiki/w/Archaeology_training" },
            { label: "RS Wiki — Berserker's Fury", url: "https://runescape.wiki/w/Berserker%27s_Fury" }
          ]
        }
      },
      {
        id: "reward-berserkers-fury",
        type: "reward",
        text: "Activate Berserker's Fury relic",
        detail: {
          title: "Berserker's Fury Relic",
          subtitle: "Up to +5.5% damage when below max HP",
          why: "During bossing, you're almost always below max HP. This relic passively boosts your damage by up to 5.5% based on how low your HP is. It costs 250 relic power at the monolith — well worth the budget.",
          tips: [
            "Activate at the mysterious monolith at the Archaeology campus.",
            "This relic stays active permanently — set it and forget it.",
            "Later, combine with Fury of the Small (97 Archaeology) and Persistent Rage (98) for the optimal PvM relic loadout."
          ],
          links: [
            { label: "RS Wiki — Berserker's Fury", url: "https://runescape.wiki/w/Berserker%27s_Fury" }
          ]
        }
      },
      {
        id: "player-owned-ports",
        type: "unlock",
        text: "Start Player-Owned Ports",
        detail: {
          title: "Player-Owned Ports",
          subtitle: "Free T85 tank armor over time — daily login activity",
          why: "Ports provides free T85 tank armor (Tetsu, Seasinger, Death Lotus) via daily voyages. It takes weeks to months, but the armor is free and the daily time investment is minimal. Start early so it progresses passively.",
          tips: [
            "Requires 90 in at least one of: Agility, Construction, Cooking, Divination, Dungeoneering, Fishing, Herblore, Hunter, Prayer, Runecrafting, Slayer, or Thieving.",
            "Boosts do NOT work for the 90 requirement.",
            "Send voyages daily — even 2 minutes/day adds up over weeks.",
            "Priority: Get crew members for trade goods → craft armor scroll recipes → craft armor."
          ],
          links: [
            { label: "RS Wiki — Player-Owned Ports", url: "https://runescape.wiki/w/Player-owned_port" }
          ]
        }
      }
    ]
  },
  {
    id: "mid-late-game",
    name: "Mid-Late Game",
    subtitle: "Ancient Curses, Plague's End, GWD2, Araxxor & Overloads",
    steps: [
      {
        id: "branches-of-darkmeyer",
        type: "quest",
        text: "Complete The Branches of Darkmeyer",
        detail: {
          title: "The Branches of Darkmeyer",
          subtitle: "Vampyre chain — Darkmeyer access",
          why: "Continues the vampyre series into Darkmeyer.",
          requirements: ["Legacy of Seergaze completed", "63 Fletching", "63 Crafting", "64 Slayer", "70 Woodcutting"],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/The_Branches_of_Darkmeyer" }
          ]
        }
      },
      {
        id: "kindred-spirits",
        type: "quest",
        text: "Complete Kindred Spirits",
        detail: {
          title: "Kindred Spirits",
          subtitle: "Vampyre chain — continues Myreque series",
          why: "Continues the Myreque story. Required before Lord of Vampyrium.",
          requirements: ["Branches of Darkmeyer completed"],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Kindred_Spirits" }
          ]
        }
      },
      {
        id: "lord-of-vampyrium",
        type: "quest",
        text: "Complete The Lord of Vampyrium",
        detail: {
          title: "The Lord of Vampyrium",
          subtitle: "Vampyre chain — high-level combat quest",
          why: "Major vampyre quest. High combat requirements.",
          requirements: ["Kindred Spirits completed", "71 Agility", "76 Fletching", "78 Attack", "78 Magic", "78 Ranged", "78 Strength"],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/The_Lord_of_Vampyrium" }
          ]
        }
      },
      {
        id: "river-of-blood",
        type: "quest",
        text: "Complete River of Blood",
        detail: {
          title: "River of Blood",
          subtitle: "Completes vampyre chain — Sunspear weapon",
          why: "Final vampyre quest. Rewards the Sunspear, an augmentable hybrid weapon excellent for Slayer.",
          requirements: [
            "Lord of Vampyrium completed",
            "All Fired Up completed",
            "78 Attack",
            "80 Constitution",
            "76 Firemaking",
            "75 Fletching",
            "80 Herblore",
            "78 Magic",
            "72 Mining",
            "78 Ranged",
            "78 Strength"
          ],
          tips: ["Sunspear is augmentable with Invention — a versatile hybrid weapon for Slayer."],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/River_of_Blood" }
          ]
        }
      },
      {
        id: "within-the-light",
        type: "quest",
        text: "Complete Within the Light",
        detail: {
          title: "Within the Light",
          subtitle: "Elf chain — final quest before Plague's End",
          why: "Last prerequisite before Plague's End. Unlocks additional elf content.",
          requirements: ["Mourning's End Part II completed", "69 Agility", "70 Fletching", "75 Ranged", "75 Woodcutting"],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Within_the_Light" }
          ]
        }
      },
      {
        id: "plagues-end",
        type: "quest",
        text: "Complete Plague's End",
        detail: {
          title: "Plague's End",
          subtitle: "Unlock Prifddinas — the high-level hub city",
          why: "Prifddinas is the most important city in RS3. It contains: crystal flasks for Overload flasks, Hefin agility course, Ithell clan for crystal tools, Seren stones for Mining, crystal trees for Farming, and much more. Nearly all late-game content benefits from Prif access.",
          requirements: [
            "Within the Light completed",
            "Catapult Construction completed",
            "Making History completed",
            "75 Agility",
            "75 Construction",
            "75 Crafting",
            "75 Dungeoneering",
            "75 Herblore",
            "75 Mining",
            "75 Prayer",
            "75 Ranged",
            "75 Summoning",
            "75 Woodcutting"
          ],
          tips: [
            "10 skills at level 75 — start training early across multiple skills.",
            "Also requires: Catapult Construction (needs Regicide), Making History (needs Restless Ghost).",
            "The quest itself is medium length once you meet all requirements.",
            "After completion, explore all 8 clans — each offers unique benefits."
          ],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Plague%27s_End" },
            { label: "RS Wiki — Prifddinas", url: "https://runescape.wiki/w/Prifddinas" }
          ]
        }
      },
      {
        id: "reward-prifddinas",
        type: "reward",
        text: "Explore Prifddinas",
        detail: {
          title: "Prifddinas — The Crystal City",
          subtitle: "The most important unlock for late-game ironman progression",
          why: "Prif is a game-changer. Crystal flasks let you make 6-dose Overload flasks. The Hefin agility course is excellent XP. Seren stones are the best AFK Mining. Crystal tool siphoning trains Crafting. Nearly every skill benefits from Prif.",
          tips: [
            "Ithell clan: Crystal flask crafting (requires 89 Crafting) for Overload flasks.",
            "Meilyr clan: Combination potions, herblore shop.",
            "Hefin clan: Best agility course, prayer training with cleansing crystals.",
            "Trahaearn clan: Seren stones (Mining), gem rocks, smithing.",
            "Unlock all lodestones within the city."
          ],
          links: [
            { label: "RS Wiki — Prifddinas", url: "https://runescape.wiki/w/Prifddinas" }
          ]
        }
      },
      {
        id: "devious-minds",
        type: "quest",
        text: "Complete Devious Minds",
        detail: {
          title: "Devious Minds",
          subtitle: "Curse of Arrav prerequisite",
          why: "Required for Curse of Arrav. Involves Entrana.",
          requirements: ["Recruitment Drive completed", "What's Mine is Yours completed", "50 Fletching", "50 Runecrafting", "65 Smithing"],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Devious_Minds" }
          ]
        }
      },
      {
        id: "defender-of-varrock",
        type: "quest",
        text: "Complete Defender of Varrock",
        detail: {
          title: "Defender of Varrock",
          subtitle: "Curse of Arrav + River of Blood prerequisite",
          why: "Required for both Curse of Arrav and River of Blood.",
          requirements: ["Shield of Arrav completed", "The Knight's Sword completed", "Family Crest completed", "What Lies Below completed"],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Defender_of_Varrock" }
          ]
        }
      },
      {
        id: "curse-of-arrav",
        type: "quest",
        text: "Complete The Curse of Arrav",
        detail: {
          title: "The Curse of Arrav",
          subtitle: "Temple at Senntisten prerequisite",
          why: "Final quest in the chain before Temple at Senntisten. Unlocks access to Ancient Curses.",
          requirements: [
            "Defender of Varrock completed",
            "Devious Minds completed",
            "Missing My Mummy completed",
            "Garden of Tranquillity completed",
            "Tale of the Muspah completed",
            "61 Agility",
            "64 Mining",
            "64 Ranged",
            "37 Slayer",
            "64 Strength",
            "41 Summoning",
            "66 Thieving"
          ],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/The_Curse_of_Arrav" }
          ]
        }
      },
      {
        id: "temple-at-senntisten",
        type: "quest",
        text: "Complete The Temple at Senntisten",
        detail: {
          title: "The Temple at Senntisten",
          subtitle: "Unlock Ancient Curses — Turmoil, Soul Split, and more",
          why: "Ancient Curses are the strongest prayer set in the game. Soul Split heals you passively based on damage dealt. Turmoil/Torment/Anguish boost combat stats far beyond Piety. This is a transformative PvM upgrade.",
          requirements: [
            "Desert Treasure completed",
            "Devious Minds completed",
            "The Curse of Arrav completed",
            "50 Prayer",
            "125 Kudos from Varrock Museum"
          ],
          tips: [
            "Devious Minds: Needs Recruitment Drive + What's Mine is Yours + 50 Fletching, 50 Runecrafting, 65 Smithing.",
            "The Curse of Arrav chain: See the previous step — covers Shield of Arrav through Curse of Arrav.",
            "The quest itself is short once you meet all prerequisites.",
            "After completion, switch to Ancient Curses at any altar."
          ],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/The_Temple_at_Senntisten" }
          ]
        }
      },
      {
        id: "reward-ancient-curses",
        type: "reward",
        text: "Unlock Ancient Curses",
        detail: {
          title: "Ancient Curses — Soul Split, Turmoil & More",
          subtitle: "The strongest prayer set in the game",
          why: "Soul Split (92 Prayer) heals you for a portion of all damage dealt. Turmoil/Torment/Anguish/Desolation (95 Prayer) boost your combat stats significantly while draining the enemy. These prayers are used at every boss from now on.",
          tips: [
            "Soul Split (92 Prayer): Heals ~10% of damage dealt. The most used prayer in PvM.",
            "Turmoil (95 Prayer, melee), Torment (95, magic), Anguish (95, ranged), Desolation (95, necromancy).",
            "You can flick between Soul Split and protection prayers for both healing and damage reduction.",
            "Requires 92-95 Prayer to use the best curses — train Prayer at Chaos Altar or with dragon bones."
          ],
          links: [
            { label: "RS Wiki — Ancient Curses", url: "https://runescape.wiki/w/Ancient_Curses" }
          ]
        }
      },
      {
        id: "overloads",
        type: "skill",
        text: "Train Herblore to 96 for Overloads",
        detail: {
          title: "Overloads",
          subtitle: "The biggest single potion upgrade in PvM — +17% to all combat stats",
          why: "Overloads boost all combat stats by 17% for 6 minutes and cannot be reduced. They are the single largest DPS increase from a consumable. Every serious boss encounter uses an Overload.",
          method: "Chain: Super potions (45-79) → Extreme potions (88-93) → Overloads (96). The 96 can be boosted from 89 with spicy stew (+6) or pulse core (+7). Grow your own herbs via herb runs. Use Scroll of Cleansing from Dungeoneering to save secondaries. Crystal flasks from Prif make 6-dose Overload flasks.",
          links: [
            { label: "RS Wiki — Overload", url: "https://runescape.wiki/w/Overload" },
            { label: "RS Wiki — Herblore Training", url: "https://runescape.wiki/w/Herblore_training" },
            {
              label: "PvME — Consumables Guide",
              url: "https://pvme.io/pvme-guides/upgrading-info/consumables/"
            }
          ]
        }
      },
      {
        id: "consumables-progression",
        type: "unlock",
        text: "Set up PvM consumables: Weapon Poison+++, Vulnerability Bombs, food",
        detail: {
          title: "PvM Consumables Progression",
          subtitle: "Weapon Poison+++, Vulnerability Bombs, food upgrades & ammo",
          why: "Consumables are a massive DPS boost that many players overlook. Weapon Poison+++ with Cinderbane Gloves adds thousands of extra damage per minute. Vulnerability Bombs apply a 10% damage debuff on bosses. Using the right food, potions, and ammunition is essential.",
          tips: [
            "Weapon Poison+++ (82 Herblore): Cave nightshade + poison slime + coconut milk. ALWAYS use alongside Cinderbane Gloves for passive poison stacking.",
            "Vulnerability Bombs (86 Herblore, Plague's End): Throw at boss for 10% damage boost for 1 minute. Very important DPS increase.",
            "Spiritual Prayer potions (79 Prayer + 81 Herblore): Restore familiar spec points. Essential for Ripper Demon familiar's spec spam.",
            "Adrenaline Renewal potion (115 Herblore): Restores 30% adrenaline over 30s. Elite Dungeon drop or make yourself.",
            "Elder Overload (106 Herblore): Supreme overload + primal extract. Direct upgrade to standard overloads.",
            "Bakriminel bolts (enchanted): Hydrix bolts (adren on proc), Ruby bolts (% damage), Onyx bolts (healing). Essential ranged ammo.",
            "Food: Sharks (76 Cooking) → Rocktails (93) → Sailfish (99) → Blue Blubber Jellyfish (95, no adrenaline drain).",
            "Incense sticks: Kwuarm (10% increased potion timers), Lantadyme (+4% potion XP). Use at War's Retreat campfire."
          ],
          links: [
            { label: "RS Wiki — Weapon Poison+++", url: "https://runescape.wiki/w/Weapon_poison%2B%2B%2B" },
            { label: "RS Wiki — Vulnerability Bomb", url: "https://runescape.wiki/w/Vulnerability_bomb" },
            {
              label: "PvME — Consumables Guide",
              url: "https://pvme.io/pvme-guides/upgrading-info/consumables/"
            }
          ]
        }
      },
      {
        id: "cinderbanes-amulet-of-souls",
        type: "unlock",
        text: "Obtain Cinderbane Gloves + Amulet of Souls",
        detail: {
          title: "Cinderbane Gloves & Amulet of Souls",
          subtitle: "Stage 1 PvME upgrades for ALL combat styles",
          why: "Cinderbane Gloves are the best-in-slot gloves for ALL four combat styles — they apply a poison effect that stacks with Weapon Poison+++ for massive extra damage. The Amulet of Souls makes protection prayers block 60% instead of 50% and boosts Soul Split healing by 50%. Both are core PvM items.",
          tips: [
            "Cinderbane Gloves: Dropped by Manifest shadows in Sophanem Slayer Dungeon (requires 115 Slayer via boost or 105 natural). Can also buy from GE if not ironman.",
            "Weapon Poison+++ synergy: Always use Weapon Poison+++ alongside Cinderbanes for maximum DPS. Craft from cave nightshade + poison slime + coconut milk.",
            "Amulet of Souls: Made from a hydrix gem (cut from uncut hydrix — 400 Reaper Points from Death). Needs 79 Crafting to cut, 90 Crafting to make the amulet.",
            "Reaper necklace: Also made from hydrix. +3% hit chance. Used for the Essence of Finality later.",
            "Consider making the Reaper necklace first if accuracy is your bottleneck."
          ],
          links: [
            { label: "RS Wiki — Cinderbane Gloves", url: "https://runescape.wiki/w/Cinderbane_gloves" },
            { label: "RS Wiki — Amulet of Souls", url: "https://runescape.wiki/w/Amulet_of_souls" },
            {
              label: "PvME — Upgrading Info",
              url: "https://pvme.io/pvme-guides/upgrading-info/armour-and-weapons/"
            }
          ]
        }
      },
      {
        id: "gwd2-vindicta",
        type: "boss",
        text: "Boss: Vindicta & Gorvek",
        detail: {
          title: "Vindicta & Gorvek — GWD2",
          subtitle: "Dragon Rider Lance — the best early melee weapon for ironmen",
          why: "Vindicta drops the Dragon Rider Lance, a T85 halberd-range melee weapon. Halberd range hits in a 2-tile radius, making it excellent for Slayer and multi-target bossing. This is THE melee weapon upgrade for mid-game ironmen.",
          requirements: ["80 Attack", "40 Zarosian killcount in GWD2"],
          suggested: [
            "80+ combat stats",
            "80+ Prayer (70 minimum, Soul Split at 92 ideal)",
            "85+ Herblore (Super potions, Overloads at 96 ideal)",
            "Invention perks on gear"
          ],
          drops: [
            {
              item: "Dragon Rider Lance",
              why: "T85 halberd-range melee weapon — ironman staple (1/512 base, 1/256 max rep)"
            },
            { item: "Crest of Zaros", why: "Makes Anima Core of Zaros armor (T80)" },
            { item: "Dormant Anima Core pieces", why: "T80 armor base components" }
          ],
          moveOn: "After obtaining Dragon Rider Lance. Crest + dormant pieces for Anima Core armor are bonus.",
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Vindicta_%26_Gorvek" },
            { label: "RS Wiki — Strategy", url: "https://runescape.wiki/w/Vindicta_%26_Gorvek/Strategies" },
            { label: "PvME — Vindicta Guide", url: "https://pvme.io/pvme-guides/basic-guides/vindicta-basic/" }
          ]
        }
      },
      {
        id: "reward-dragon-rider-lance",
        type: "reward",
        text: "Obtain Dragon Rider Lance",
        detail: {
          title: "Dragon Rider Lance",
          subtitle: "T85 halberd-range melee weapon — the ironman staple",
          why: "Halberd range means it hits enemies 2 tiles away, and AoE abilities hit everything in that range. This makes Slayer tasks, ED trash runs, and multi-target bosses dramatically faster. Augment it with Precise + Equilibrium immediately.",
          tips: [
            "Augment with Invention immediately for Precise 6 + Equilibrium 4.",
            "Use for all Slayer tasks where melee works.",
            "This weapon carries you until Noxious scythe (T90 from Araxxor).",
            "Halberd range is uniquely powerful — no other weapon type offers this."
          ],
          links: [
            { label: "RS Wiki — Dragon Rider Lance", url: "https://runescape.wiki/w/Dragon_Rider_lance" }
          ]
        }
      },
      {
        id: "gwd2-helwyr",
        type: "boss",
        text: "Boss: Helwyr",
        detail: {
          title: "Helwyr — GWD2",
          subtitle: "Cywir components for Planted Feet + T85 magic weapons",
          why: "Helwyr drops Cywir wand and orb (T85 magic dual-wield) and Cywir components from disassembly — needed for the Planted Feet perk which extends Sunshine/Death's Swiftness by 21%.",
          requirements: ["80 Magic", "40 Serenist killcount in GWD2"],
          suggested: ["80+ combat stats", "80+ Prayer (Soul Split at 92 ideal)", "85+ Herblore (Overloads at 96 ideal)"],
          drops: [
            { item: "Wand of the Cywir elders", why: "T85 main-hand magic wand (1/512)" },
            { item: "Orb of the Cywir elders", why: "T85 off-hand magic orb (1/512)" },
            { item: "Crest of Seren", why: "Anima Core of Seren armor (T80)" }
          ],
          moveOn: "After obtaining wand + orb for magic, and extra drops for Cywir components (Planted Feet perk).",
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Helwyr" },
            { label: "PvME — Helwyr Guide", url: "https://pvme.io/pvme-guides/basic-guides/helwyr-basic/" }
          ]
        }
      },
      {
        id: "gwd2-twins-greg",
        type: "boss",
        text: "Boss: Twin Furies & Gregorovic",
        detail: {
          title: "Twin Furies & Gregorovic — GWD2",
          subtitle: "Complete your GWD2 weapon set and Telos access",
          why: "Twin Furies drop T85 dual-wield melee blades, Gregorovic drops T85 ranged glaives. You need one kill of each GWD2 boss for Telos access (which requires defeating all 4 generals at least once).",
          requirements: ["80 in any combat style for GWD2 area access", "40 Zamorakian KC / 40 Sliskean KC"],
          suggested: ["80+ combat stats", "80+ Prayer (Soul Split at 92 ideal)", "85+ Herblore (Overloads at 96 ideal)"],
          drops: [
            { item: "Blade of Avaryss + Nymora (Twin Furies)", why: "T85 dual-wield melee (1/512 each)" },
            { item: "Shadow glaives (Gregorovic)", why: "T85 main-hand + off-hand ranged (1/512 each)" }
          ],
          moveOn: "After at least one kill of each for Telos access. Farm for weapons if desired.",
          links: [
            { label: "RS Wiki — Twin Furies", url: "https://runescape.wiki/w/Twin_Furies" },
            { label: "RS Wiki — Gregorovic", url: "https://runescape.wiki/w/Gregorovic" },
            {
              label: "PvME — Twin Furies Guide",
              url: "https://pvme.io/pvme-guides/basic-guides/twin-furies-basic/"
            }
          ]
        }
      },
      {
        id: "osseous",
        type: "boss",
        text: "Boss: Osseous",
        detail: {
          title: "Osseous — Necromancy Boss",
          subtitle: "Occultist's ring — BIS Necromancy ring",
          why: "Osseous is a Necromancy-specific boss on PvME's recommended bossing path. It drops the Occultist's ring, the best ring for Necromancy. This is a solo boss with straightforward mechanics — a good Necromancy skill check before tackling Araxxor.",
          requirements: ["80 Necromancy", "Slayer task (Osseous can only be fought on task)"],
          suggested: ["90+ Necromancy", "T70+ Necromancy gear", "95 Prayer"],
          drops: [
            { item: "Occultist's ring", why: "BIS Necromancy ring — boosts Necromancy damage (1/500)" },
            { item: "Necromancy XP", why: "Good Necromancy XP per kill" }
          ],
          moveOn: "After obtaining the Occultist's ring.",
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Osseous" },
            { label: "RS Wiki — Strategy", url: "https://runescape.wiki/w/Osseous/Strategies" }
          ]
        }
      },
      {
        id: "araxxor",
        type: "boss",
        text: "Boss: Araxxor",
        detail: {
          title: "Araxxor / Araxxi",
          subtitle: "First T90 weapons — Noxious scythe, staff & longbow",
          why: "Araxxor is the primary source of T90 weapons for ironmen. The Noxious scythe (halberd range!), Noxious staff, and Noxious longbow are huge upgrades that last well into late game. This is a solo boss, making it perfect for ironmen.",
          requirements: [],
          suggested: [
            "90+ in chosen combat style",
            "90+ Defence",
            "95 Prayer (Soul Split + Turmoil)",
            "96 Herblore (Overloads)",
            "89+ Invention with basic perks",
            "90 Crafting (to assemble weapons)"
          ],
          drops: [
            { item: "Spider leg pieces (top/mid/bottom)", why: "1/40 each — combine all 3 into a spider leg" },
            { item: "Araxxi's fang", why: "Fang + leg = Noxious scythe (T90 2H melee, halberd range) — 1/120" },
            { item: "Araxxi's eye", why: "Eye + leg = Noxious staff (T90 2H magic) — 1/120" },
            { item: "Araxxi's web", why: "Web + leg = Noxious longbow (T90 2H ranged) — 1/120" }
          ],
          moveOn: "After assembling your primary T90 weapon. Noxious scythe first (halberd range for Slayer), then staff or longbow depending on your next goals.",
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Araxxor" },
            { label: "RS Wiki — Strategy", url: "https://runescape.wiki/w/Araxxor/Strategies" },
            { label: "PvME — Araxxor Guide", url: "https://pvme.io/pvme-guides/basic-guides/araxxor-basic/" }
          ]
        }
      },
      {
        id: "reward-noxious-weapons",
        type: "reward",
        text: "Assemble Noxious weapon(s)",
        detail: {
          title: "Noxious Weapons",
          subtitle: "T90 weapons — your biggest upgrade since Necromancy gear",
          why: "T90 weapons are a massive jump from T85. The Noxious scythe retains halberd range (like Dragon Rider Lance but T90), making it the best melee Slayer weapon. These weapons carry you through all late-game content.",
          tips: [
            "Requires 90 Crafting to assemble (spider leg + hilt).",
            "Priority: Scythe (melee + halberd range) > Staff (magic) > Longbow (ranged).",
            "Augment immediately with Precise 6 + Equilibrium 4.",
            "Noxious scythe replaces Dragon Rider Lance. Noxious staff replaces Cywir wand+orb for 2H content."
          ],
          links: [
            { label: "RS Wiki — Noxious Weapons", url: "https://runescape.wiki/w/Noxious_weaponry" }
          ]
        }
      },
      {
        id: "nex",
        type: "boss",
        text: "Boss: Nex",
        detail: {
          title: "Nex — The Original",
          subtitle: "T80 Torva/Pernix/Virtus power armor — massive defense upgrade",
          why: "Nex drops the best T80 power armor sets for all combat styles: Torva (melee), Pernix (ranged), and Virtus (magic). These are direct upgrades over GWD1 and Anima Core armor. Nex also drops the Zaryte bow (T80 ranged) and components for Nihil pouches (95 Summoning).",
          requirements: ["70 Agility, Constitution, Ranged, Strength", "Frozen Key (from GWD1 generals) or Ancient ceremonial robes"],
          suggested: ["90+ combat stats", "90+ Defence", "95 Prayer (Ancient Curses)", "96 Herblore (Overloads)", "T85+ weapons"],
          drops: [
            {
              item: "Torva armor (helm/body/legs/gloves/boots)",
              why: "T80 melee power armor — BIS until T90 (1/384 each)"
            },
            { item: "Pernix armor", why: "T80 ranged power armor (1/384 each)" },
            { item: "Virtus armor", why: "T80 magic power armor (1/384 each)" },
            { item: "Zaryte bow", why: "T80 2H ranged bow (1/384)" },
            { item: "Nihil ingredients", why: "Needed for Nihil Summoning pouches at 87+ Summoning" }
          ],
          moveOn: "After obtaining armor set(s) for your primary combat style(s). Torva is the priority for melee users.",
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Nex" },
            { label: "RS Wiki — Strategy", url: "https://runescape.wiki/w/Nex/Strategies" },
            { label: "PvME — Nex Guide", url: "https://pvme.io/pvme-guides/basic-guides/nex-basic/" }
          ]
        }
      },
      {
        id: "rex-matriarchs",
        type: "boss",
        text: "Boss: Rex Matriarchs",
        detail: {
          title: "Rex Matriarchs — Orikalka, Pthentraken & Rathis",
          subtitle: "T82 Rex rings + dinosaur components",
          why: "The three Rex Matriarchs on Anachronia each use a different combat style and drop Rings of the Matriarchs (T82 hybrid rings). All three must be killed for Reaper Crew. They're good mid-level bosses for practicing style-switching.",
          requirements: ["Access to Anachronia", "Slayer task recommended (not required)"],
          suggested: ["80+ combat stats", "70+ Prayer", "T80+ weapons"],
          drops: [
            { item: "Orikalka's Bane (melee ring)", why: "T82 melee ring — from Orikalka (1/500)" },
            { item: "Pthentraken's Claw (ranged ring)", why: "T82 ranged ring — from Pthentraken (1/500)" },
            { item: "Rathis' Dagger (magic ring)", why: "T82 magic ring — from Rathis (1/500)" }
          ],
          moveOn: "After one kill of each for Reaper Crew. Farm for rings if desired.",
          links: [
            { label: "RS Wiki — Orikalka", url: "https://runescape.wiki/w/Orikalka" },
            { label: "RS Wiki — Pthentraken", url: "https://runescape.wiki/w/Pthentraken" },
            { label: "RS Wiki — Rathis", url: "https://runescape.wiki/w/Rathis" }
          ]
        }
      },
      {
        id: "kalphite-king",
        type: "boss",
        text: "Boss: Kalphite King",
        detail: {
          title: "Kalphite King",
          subtitle: "Drygore weapons — T90 melee dual-wield",
          why: "Kalphite King drops Drygore weapons, the T90 melee dual-wield set. These are a significant upgrade for melee alongside the Noxious scythe (which is 2H). KK rotates between melee/ranged/magic phases, teaching phase-based combat.",
          requirements: ["Access to Exiled Kalphite Hive (north of Sophanem)"],
          suggested: ["90+ combat stats", "90+ Defence", "95 Prayer (Ancient Curses)", "96 Herblore (Overloads)", "T85+ weapons"],
          drops: [
            {
              item: "Drygore longsword/mace/rapier (MH + OH)",
              why: "T90 melee dual-wield — 6 weapon variants (1/43 per unique)"
            },
            { item: "Perfect chitin", why: "Used in T90 melee shields" }
          ],
          moveOn: "After obtaining a Drygore main-hand and off-hand. Any combination works — mace is cheapest to maintain.",
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Kalphite_King" },
            { label: "RS Wiki — Strategy", url: "https://runescape.wiki/w/Kalphite_King/Strategies" },
            {
              label: "PvME — KK Solo Necro",
              url: "https://pvme.io/pvme-guides/rs3-full-boss-guides/kalphite-king/solo-necromancy/"
            }
          ]
        }
      },
      {
        id: "legiones",
        type: "boss",
        text: "Boss: Legiones",
        detail: {
          title: "Legiones — Ascension Dungeon",
          subtitle: "Ascension crossbow — T90 ranged dual-wield",
          why: "The six Legiones each drop a unique Ascension signet (I-VI). Collect all six plus a Dragon crossbow and 100 Ascension keystones to assemble the Ascension crossbow (T90 ranged main-hand). Requires Slayer to access the dungeon.",
          requirements: ["81 Slayer", "Ascension keystones (100 per crossbow, from Ascension creatures)"],
          suggested: ["90+ Ranged", "90+ Defence", "95 Prayer", "96 Herblore"],
          drops: [
            {
              item: "Ascension signets I-VI",
              why: "One per Legio — collect all 6 to assemble crossbow (1/50 per kill)"
            }
          ],
          moveOn: "After assembling at least one Ascension crossbow (main-hand). Off-hand requires a second set of signets.",
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Legiones" },
            { label: "RS Wiki — Ascension crossbow", url: "https://runescape.wiki/w/Ascension_crossbow" }
          ]
        }
      },
      {
        id: "ed1-full",
        type: "boss",
        text: "Boss: Elite Dungeon 1 — Temple of Aminishi",
        detail: {
          title: "Elite Dungeon 1 — Temple of Aminishi",
          subtitle: "Seiryu's claw + ancient scales for T82 armor",
          why: "ED1 features three bosses (Sanctum Guardian, Masuta the Ascended, Seiryu the Azure Serpent). Drops include ancient scales for craftable T82 armor and the Seiryu's claw for an upgraded halberd weapon.",
          requirements: ["Impressing the Locals miniquest completed"],
          suggested: ["90+ combat stats", "96 Herblore (Overloads)", "95 Prayer", "96 Summoning"],
          drops: [
            {
              item: "Seiryu's claw",
              why: "Upgrades Dragon Rider Lance to T85.5 halberd — Seiryu drop (1/55 solo)"
            },
            { item: "Ancient scales", why: "Crafts T82 Elite Sirenic/Tectonic/Primeval armor" }
          ],
          moveOn: "After obtaining Seiryu's claw if still using Dragon Rider Lance, or clearing for Reaper Crew.",
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Temple_of_Aminishi" },
            { label: "PvME — ED1 Guide", url: "https://pvme.io/pvme-guides/basic-guides/ed1-basic/" }
          ]
        }
      },
      {
        id: "croesus",
        type: "boss",
        text: "Boss: Croesus",
        detail: {
          title: "Croesus — Skilling Boss",
          subtitle: "Cryptbloom armor (T90 magic tank) + Scripture of Bik",
          why: "Croesus is a unique skilling boss — no combat required! You fight it using Woodcutting, Mining, Fishing, and Hunter. It drops Cryptbloom armor (T90 magic tank armor with a powerful passive that reduces damage based on your current HP) and the Scripture of Bik.",
          requirements: ["Access to Senntisten (City of Senntisten quest)", "Recommended: 80+ in Woodcutting, Mining, Fishing, Hunter"],
          suggested: ["90+ Woodcutting, Mining, Fishing, Hunter", "Team of 4 (one per skill)"],
          drops: [
            {
              item: "Cryptbloom armor (helm/top/bottom/gloves/boots)",
              why: "T90 magic tank armor — passive: reduce incoming damage based on missing HP (1/512 per piece)"
            },
            {
              item: "Scripture of Bik",
              why: "Pocket slot — procs produce resources from monster drops (1/512)"
            }
          ],
          moveOn: "After obtaining Cryptbloom top + bottom at minimum. Full set for maximum tank value.",
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Croesus" },
            { label: "RS Wiki — Strategy", url: "https://runescape.wiki/w/Croesus/Strategies" }
          ]
        }
      },
      {
        id: "ed-trash-runs",
        type: "skill",
        text: "Do Elite Dungeon 3 trash runs",
        detail: {
          title: "ED3 Trash Runs",
          subtitle: "Fast Dungeoneering tokens + combat XP",
          why: "ED3 trash runs (kill mobs, teleport out before bosses) are the fastest way to earn Dungeoneering tokens and combat XP simultaneously. Great for topping up tokens for remaining Dungeoneering rewards.",
          method: "Enter ED3 (The Shadow Reef), kill all trash mobs in the first few rooms, teleport out, repeat. Each run takes 5-10 minutes and gives substantial combat XP + Dungeoneering tokens. Can also be used for Slayer tasks.",
          links: [
            { label: "RS Wiki — ED3", url: "https://runescape.wiki/w/The_Shadow_Reef" }
          ]
        }
      },
      {
        id: "kerapac-nm",
        type: "boss",
        text: "Boss: Kerapac Normal Mode",
        detail: {
          title: "Kerapac, the Bound — Normal Mode",
          subtitle: "Scripture of Jas + Greater Concentrated Blast codex",
          why: "Scripture of Jas is one of the best pocket slot items for DPS. Greater Concentrated Blast is a massive magic DPS upgrade. Normal Mode is very accessible — no hard enrage mechanics.",
          requirements: [],
          suggested: ["90+ in chosen combat style", "90+ Defence", "95 Prayer", "96 Herblore (Overloads)"],
          drops: [
            {
              item: "Scripture of Jas",
              why: "BIS DPS pocket slot — 6.6% chance per hit to deal bonus damage (1/768 per loot pile)"
            },
            {
              item: "Greater Concentrated Blast codex",
              why: "Massive magic DPS upgrade (1/768 per loot pile)"
            },
            { item: "Kerapac's wrist wraps", why: "T85 magic gloves (1/768 per loot pile)" }
          ],
          moveOn: "After obtaining Scripture of Jas and Greater Concentrated Blast. Return for Hard Mode later with better gear.",
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Kerapac,_the_Bound" },
            {
              label: "PvME — Kerapac HM Guide",
              url: "https://pvme.io/pvme-guides/basic-guides/kerapac-hm-basic/"
            }
          ]
        }
      },
      {
        id: "reward-scripture-of-jas",
        type: "reward",
        text: "Obtain Scripture of Jas",
        detail: {
          title: "Scripture of Jas",
          subtitle: "Best-in-slot DPS pocket item until Grimoire",
          why: "The Scripture of Jas has a 6.6% chance per hit to create a Time Rift that deals 20% of accumulated damage (capped at 30k). This is a significant passive DPS boost at every boss.",
          tips: [
            "Replaces God books as your pocket slot item.",
            "Requires pages to charge — pages drop from Kerapac or can be bought on GE (non-ironman).",
            "As an ironman, farm extra Kerapac kills for pages to keep it charged.",
            "Eventually replaced by Erethdor's Grimoire from Solak (end-game)."
          ],
          links: [
            { label: "RS Wiki — Scripture of Jas", url: "https://runescape.wiki/w/Scripture_of_Jas" }
          ]
        }
      },
      {
        id: "archaeology-97",
        type: "skill",
        text: "Train Archaeology to 97",
        detail: {
          title: "Archaeology to 97",
          subtitle: "Unlock Fury of the Small relic",
          why: "Fury of the Small makes basic abilities generate 1% more adrenaline (from 8% to 9%). This compounds across every rotation — you reach thresholds and ultimates faster, which is a meaningful DPS increase at every boss.",
          method: "Continue excavating at the highest-level dig site available. Archaeology is a slow skill but consistent. Use auto-screener and material manual for efficiency. Tetras and chronotes from completed collections help speed things up.",
          links: [
            { label: "RS Wiki — Fury of the Small", url: "https://runescape.wiki/w/Fury_of_the_Small" },
            { label: "RS Wiki — Archaeology Training", url: "https://runescape.wiki/w/Archaeology_training" }
          ]
        }
      },
      {
        id: "archaeology-98",
        type: "skill",
        text: "Train Archaeology to 98",
        detail: {
          title: "Archaeology to 98",
          subtitle: "Unlock Persistent Rage relic",
          why: "Persistent Rage prevents adrenaline from draining outside of combat. This means you can start every boss fight with 100% adrenaline, opening with an ultimate ability immediately. Huge quality-of-life and DPS improvement.",
          method: "Only 1 level from 97. Continue at your current dig site.",
          links: [
            { label: "RS Wiki — Persistent Rage", url: "https://runescape.wiki/w/Persistent_Rage" }
          ]
        }
      },
      {
        id: "archaeology-118",
        type: "skill",
        text: "Train Archaeology to 118",
        detail: {
          title: "Archaeology to 118",
          subtitle: "Unlock Conservation of Energy relic",
          why: "Conservation of Energy refunds 10% adrenaline when you use an ultimate ability. Combined with Fury of the Small and Persistent Rage, this forms the optimal PvM relic loadout (550 relic power total). A long grind but the payoff is permanent.",
          method: "Continue excavating at the highest sites. Use mattocks with Honed and Fortune perks. Complete collections for Tetracompass pieces. This is a long-term goal — don't rush it at the expense of bossing progression.",
          links: [
            { label: "RS Wiki — Conservation of Energy", url: "https://runescape.wiki/w/Conservation_of_Energy" },
            { label: "RS Wiki — Archaeology Training", url: "https://runescape.wiki/w/Archaeology_training" }
          ]
        }
      }
    ]
  },
  {
    id: "late-game",
    name: "Late Game",
    subtitle: "Elite Dungeons, Raksha, Telos & T92 weapons",
    steps: [
      {
        id: "ed2-full",
        type: "boss",
        text: "Boss: Elite Dungeon 2 — Dragonkin Laboratory",
        detail: {
          title: "Elite Dungeon 2 — Dragonkin Laboratory",
          subtitle: "Greater melee ability codices from bosses",
          why: "ED2 bosses drop Greater Flurry, Greater Fury, and Greater Barge codices — major melee DPS upgrades. If melee is one of your styles, these are high-priority unlocks.",
          requirements: [],
          suggested: ["90+ combat stats", "96 Summoning", "96 Herblore (Overloads)", "95 Prayer (Ancient Curses)"],
          drops: [
            { item: "Greater Flurry codex (Astellarn)", why: "Upgrades Flurry — better AoE melee" },
            { item: "Greater Fury codex (Verak Lith)", why: "Upgrades Fury — guaranteed crit after channel" },
            {
              item: "Greater Barge codex (Black Stone Dragon)",
              why: "Upgrades Barge — bleed bonus after charging"
            }
          ],
          moveOn: "After obtaining the codices you need for your melee rotation.",
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Dragonkin_Laboratory" },
            { label: "PvME — ED2 Guide", url: "https://pvme.io/pvme-guides/basic-guides/ed2-basic/" }
          ]
        }
      },
      {
        id: "ed3-full",
        type: "boss",
        text: "Boss: Elite Dungeon 3 — The Ambassador",
        detail: {
          title: "Elite Dungeon 3 — The Shadow Reef",
          subtitle: "Eldritch crossbow — T92 2H ranged",
          why: "The Ambassador drops Eldritch crossbow pieces, which assemble into a T92 2H ranged weapon with an incredible special attack (Split Soul — makes Soul Split damage the enemy instead of healing you).",
          requirements: [],
          suggested: ["90+ combat stats", "96 Summoning", "96 Herblore", "95 Prayer"],
          drops: [
            {
              item: "Eldritch crossbow pieces (limb, stock, mechanism)",
              why: "Assemble into T92 2H ranged crossbow — needs 96 Fletching (1/55 solo)"
            }
          ],
          moveOn: "After assembling the Eldritch crossbow, or if moving to Telos/Raksha instead.",
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/The_Shadow_Reef" },
            { label: "PvME — ED3 Guide", url: "https://pvme.io/pvme-guides/basic-guides/ed3-basic/" }
          ]
        }
      },
      {
        id: "magister",
        type: "boss",
        text: "Boss: The Magister",
        detail: {
          title: "The Magister",
          subtitle: "Khopesh of the Kharidian — T92 melee dual-wield",
          why: "The Magister drops Scraps of Scripture which combine into the Khopesh of the Kharidian (T92 main-hand) and Off-hand Khopesh (T92 off-hand). These are the BIS melee dual-wield weapons, outclassing Drygores.",
          requirements: ["115 Slayer", "Access to Sophanem Slayer Dungeon", "Key to the Crossing (from feathers of Ma'at — 50 per fight)"],
          suggested: ["95+ combat stats", "95 Prayer", "96 Herblore", "T90+ weapons"],
          drops: [
            {
              item: "Scraps of Scripture (100 per Khopesh)",
              why: "Combine into T92 melee swords — ~1/18 per kill"
            },
            { item: "Vital spark", why: "Used for Vital spark enhancers" }
          ],
          moveOn: "After assembling both Khopesh main-hand and off-hand (200 scraps total).",
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/The_Magister" },
            { label: "RS Wiki — Strategy", url: "https://runescape.wiki/w/The_Magister/Strategies" }
          ]
        }
      },
      {
        id: "train-summoning-87",
        type: "skill",
        text: "Train Summoning to 87",
        detail: {
          title: "Summoning to 87",
          subtitle: "Unlock Nihil familiars (+5% accuracy)",
          why: "Nihils provide a 5% accuracy boost for a specific combat style. At bosses with high defence (like Nex, Telos), accuracy matters enormously — a missed hit is 0 damage. Blood/Shadow/Smoke/Ice nihils each boost one style.",
          method: "Use charms collected from Slayer and bossing via Charming Imp. Do DXP weekends for Summoning if possible. Crimson and blue charms give the best XP — save them for higher levels.",
          tips: [
            "Blood nihil: +5% melee accuracy. Shadow nihil: +5% magic accuracy. Smoke nihil: +5% ranged accuracy. Ice nihil: +5% necromancy accuracy.",
            "Nihils require Nex ingredient drops (from Nex: Angel of Death or trading with other players isn't an option on ironman — you'll need to farm Nex).",
            "Use Charming Imp (Dungeoneering reward) to auto-collect charms from all combat."
          ],
          links: [
            { label: "RS Wiki — Nihil", url: "https://runescape.wiki/w/Nihil" },
            { label: "RS Wiki — Summoning Training", url: "https://runescape.wiki/w/Summoning_training" }
          ]
        }
      },
      {
        id: "train-summoning-90",
        type: "skill",
        text: "Train Summoning to 90",
        detail: {
          title: "Summoning to 90",
          subtitle: "Unlock Kal'gerion Demon familiar (+6% crit)",
          why: "Kal'gerion Demon provides a 6% critical hit chance boost. When accuracy isn't an issue (lower-defence bosses), the crit boost outperforms Nihils for raw DPS.",
          method: "Continue using saved charms. Only 3 levels from 87 — focus on crimson and blue charms for efficiency.",
          links: [
            { label: "RS Wiki — Kal'gerion Demon (familiar)", url: "https://runescape.wiki/w/Kal%27gerion_demon_%28familiar%29" },
            { label: "RS Wiki — Summoning Training", url: "https://runescape.wiki/w/Summoning_training" }
          ]
        }
      },
      {
        id: "train-summoning-96",
        type: "skill",
        text: "Train Summoning to 96",
        detail: {
          title: "Summoning to 96",
          subtitle: "Unlock Ripper Demon familiar (BIS DPS) + Pack Yak",
          why: "Ripper Demon is the #1 DPS familiar in the game. Its special attack (Death From Above) deals massive damage, and spamming it with Spiritual Prayer potions is a huge DPS increase at every boss. Pack Yak (also 96) gives 30 extra inventory slots — essential for learning bosses.",
          method: "This is the big Summoning goal. Save blue charms for the final push. Use DXP events if available. The jump from 90 to 96 requires significant charm stockpiling.",
          tips: [
            "Ripper Demon spec: Use Spiritual Prayer potions to restore familiar spec points and spam Death From Above.",
            "Pack Yak: 30-slot beast of burden. Use when learning new bosses or for extended trips.",
            "96 Summoning is one of the most impactful milestones in the entire game for PvM."
          ],
          links: [
            { label: "RS Wiki — Ripper Demon (familiar)", url: "https://runescape.wiki/w/Ripper_demon_familiar" },
            { label: "RS Wiki — Summoning Training", url: "https://runescape.wiki/w/Summoning_training" },
            { label: "PvME — Familiars Guide", url: "https://pvme.io/pvme-guides/upgrading-info/consumables/" }
          ]
        }
      },
      {
        id: "tzkal-zuk",
        type: "boss",
        text: "Boss: TzKal-Zuk (Normal Mode)",
        detail: {
          title: "TzKal-Zuk — Normal Mode",
          subtitle: "Igneous Kal capes — BIS combat capes",
          why: "TzKal-Zuk is the upgraded Fight Cave/Kiln boss. Normal Mode completion with each combat style gives you Igneous Kal capes — BIS combat capes that upgrade your Overpower/Omnipower/Deadshot/Death Skulls abilities. On PvME's bossing path between Raksha and Kerapac HM.",
          requirements: ["Defeat TzTok-Jad and Har-Aken first (TokHaar-Kal capes)", "Access to Elder God Wars Dungeon"],
          suggested: ["92+ combat stats", "95 Prayer", "96 Herblore", "T90+ weapons", "Complete once per combat style for each cape"],
          drops: [
            {
              item: "Igneous Kal-Mej (magic)",
              why: "BIS magic cape — upgrades Omnipower into a stronger version"
            },
            { item: "Igneous Kal-Xil (ranged)", why: "BIS ranged cape — upgrades Deadshot" },
            { item: "Igneous Kal-Ket (melee)", why: "BIS melee cape — upgrades Overpower" },
            {
              item: "Igneous Kal-Zuk (all styles)",
              why: "Combined BIS cape — requires all three style capes + TzKal-Zuk HM completion"
            }
          ],
          moveOn: "After obtaining all three style-specific Igneous capes. Return for Hard Mode later for the combined cape.",
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/TzKal-Zuk" },
            { label: "RS Wiki — Strategy", url: "https://runescape.wiki/w/TzKal-Zuk/Strategies" },
            {
              label: "PvME — TzKal-Zuk Guide",
              url: "https://pvme.io/pvme-guides/basic-guides/tzkal-zuk-basic/"
            }
          ]
        }
      },
      {
        id: "raksha",
        type: "boss",
        text: "Boss: Raksha, the Shadow Colossus",
        detail: {
          title: "Raksha, the Shadow Colossus",
          subtitle: "Greater Ricochet & Greater Chain — AoE combat upgrades",
          why: "Raksha drops Greater Ricochet (ranged) and Greater Chain (magic) codices — the best AoE ability upgrades in the game. These dramatically improve your damage in multi-target situations.",
          requirements: ["Raksha miniquest completed", "Access to Anachronia"],
          suggested: ["90+ combat stats", "90+ Defence", "95 Prayer", "96 Herblore", "96 Summoning"],
          drops: [
            { item: "Greater Ricochet codex", why: "BIS ranged AoE upgrade (1/325)" },
            { item: "Greater Chain codex", why: "BIS magic AoE upgrade (1/325)" },
            { item: "Divert codex", why: "Defensive ability upgrade (1/325)" },
            { item: "Fleeting boots", why: "T80 ranged boots (1/130)" },
            { item: "Shadow spike", why: "Upgrades boots to T90 (1/325)" }
          ],
          moveOn: "After obtaining Greater Ricochet and/or Greater Chain depending on your combat style focus.",
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Raksha" },
            {
              label: "RS Wiki — Strategy",
              url: "https://runescape.wiki/w/Raksha,_the_Shadow_Colossus/Strategies"
            },
            { label: "PvME — Raksha Guide", url: "https://pvme.io/pvme-guides/basic-guides/raksha-basic/" }
          ]
        }
      },
      {
        id: "telos",
        type: "boss",
        text: "Boss: Telos, the Warden",
        detail: {
          title: "Telos, the Warden",
          subtitle: "T92 weapons — Seren Godbow, Staff of Sliske, Zaros Godsword",
          why: "Telos is the pinnacle solo boss for ironmen. It drops dormant T92 weapons for all three traditional combat styles. The enrage/streak system means drop rates improve as you push higher. This is where most of your late-game time will be spent.",
          requirements: ["Defeat all 4 GWD2 generals at least once", "80 Attack, Magic, Ranged, Prayer (boostable)"],
          suggested: [
            "99 combat stats",
            "99 Defence",
            "95 Prayer (Ancient Curses)",
            "99 Summoning",
            "96+ Herblore (Overloads)",
            "T90 weapons + augmented armor with good perks"
          ],
          drops: [
            { item: "Dormant Seren Godbow", why: "T92 2H ranged (requires anima orb to activate)" },
            { item: "Dormant Staff of Sliske", why: "T92 2H magic (requires anima orb)" },
            { item: "Dormant Zaros Godsword", why: "T92 2H melee (requires anima orb)" },
            { item: "Reprisal ability codex", why: "Reflects stored damage back at target" }
          ],
          moveOn: "Telos is content you can push indefinitely. Higher enrage = better drops. Start at 0-100% to learn, then push to 100%+ for normal drop rates, then 500%+ for best rates.",
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Telos" },
            { label: "RS Wiki — Strategy", url: "https://runescape.wiki/w/Telos,_the_Warden/Strategies" },
            { label: "PvME — Telos Guide", url: "https://pvme.io/pvme-guides/basic-guides/telos-basic/" }
          ]
        }
      },
      {
        id: "reward-t92-weapons",
        type: "reward",
        text: "Assemble T92 weapon(s)",
        detail: {
          title: "T92 Weapons from Telos",
          subtitle: "Seren Godbow, Staff of Sliske, Zaros Godsword",
          why: "T92 weapons are the next major tier upgrade. Each requires a dormant weapon + the matching anima orb (Pure, Volcanic, or Corrupted — dropped sequentially as you get orbs). These are your primary weapons for end-game bossing.",
          tips: [
            "Orbs drop in sequence: first kill gives orb type 1, etc.",
            "Below 100% enrage, unique drop rates are severely reduced (10-30x).",
            "Push to 100%+ enrage for normal drop rates.",
            "Augment T92 weapons with your best perks immediately."
          ],
          links: [
            { label: "RS Wiki — Telos Drops", url: "https://runescape.wiki/w/Telos#Drops" }
          ]
        }
      },
      {
        id: "legends-quest",
        type: "quest",
        text: "Complete Legends' Quest",
        detail: {
          title: "Legends' Quest",
          subtitle: "WGS prerequisite — high-level quest",
          why: "Required for While Guthix Sleeps.",
          requirements: [
            "Heroes' Quest completed",
            "50 Agility",
            "50 Crafting",
            "45 Herblore",
            "56 Magic",
            "52 Mining",
            "42 Prayer",
            "50 Smithing",
            "50 Strength",
            "50 Thieving",
            "50 Woodcutting"
          ],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Legends%27_Quest" }
          ]
        }
      },
      {
        id: "while-guthix-sleeps",
        type: "quest",
        text: "Complete While Guthix Sleeps",
        detail: {
          title: "While Guthix Sleeps",
          subtitle: "Major quest — Ritual of the Mahjarrat prerequisite",
          why: "One of the most important quests in the game. Required for Ritual of the Mahjarrat.",
          requirements: [
            "Legends' Quest completed",
            "Dream Mentor completed",
            "Path of Glouphrie completed",
            "Tears of Guthix completed",
            "The Slug Menace completed",
            "The Hunt for Surok completed",
            "65 Farming",
            "65 Herblore",
            "55 Hunter",
            "75 Magic",
            "60 Thieving",
            "23 Summoning"
          ],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/While_Guthix_Sleeps" }
          ]
        }
      },
      {
        id: "ritual-of-the-mahjarrat",
        type: "quest",
        text: "Complete Ritual of the Mahjarrat",
        detail: {
          title: "Ritual of the Mahjarrat",
          subtitle: "Massive prereq chain — unlocks Rise of the Six and other late content",
          why: "Ritual of the Mahjarrat is one of the grandmaster quests. It unlocks access to Rise of the Six (Barrows), gives significant rewards, and is a prerequisite for later quests. Has a very long quest chain including While Guthix Sleeps.",
          requirements: [
            "While Guthix Sleeps completed",
            "The Temple at Senntisten completed",
            "The Curse of Arrav completed",
            "A Tail of Two Cats completed",
            "77 Agility",
            "76 Crafting",
            "76 Mining"
          ],
          tips: [
            "See the two prerequisite steps above — WGS chain and side prerequisites cover the full quest web.",
            "This quest has one of the longest prerequisite chains in the game.",
            "Also needs 125 Kudos from Varrock Museum (if not already obtained).",
            "For full rewards, complete Ritual of the Mahjarrat + related quests beforehand (optional)."
          ],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Ritual_of_the_Mahjarrat" },
            { label: "RS Wiki — While Guthix Sleeps", url: "https://runescape.wiki/w/While_Guthix_Sleeps" }
          ]
        }
      },
      {
        id: "rise-of-the-six",
        type: "boss",
        text: "Boss: Rise of the Six",
        detail: {
          title: "Rise of the Six (RotS)",
          subtitle: "Malevolent energy (T90 melee armor) + T90 shields",
          why: "Rise of the Six is an advanced Barrows encounter featuring shadow versions of the Barrows brothers. It drops Malevolent energy for T90 melee power armor and T90 shields for all styles. A good team boss for building group PvM experience.",
          requirements: ["Ritual of the Mahjarrat quest completed", "Barrows — Rise of the Six access"],
          suggested: ["95+ combat stats", "95 Prayer", "96 Herblore", "T90 weapons", "Team of 4 recommended"],
          drops: [
            {
              item: "Malevolent energy",
              why: "Crafts T90 melee power armor — Malevolent armor (3/10 chance, 2 per roll)"
            },
            { item: "Shield of the Barrows", why: "T90 shields — melee/magic/ranged variants (1/100 each)" }
          ],
          moveOn: "After obtaining enough Malevolent energy for a full armor set (42 energy).",
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Barrows:_Rise_of_the_Six" },
            {
              label: "RS Wiki — Strategy",
              url: "https://runescape.wiki/w/Barrows:_Rise_of_the_Six/Strategies"
            },
            {
              label: "PvME — RotS Solo",
              url: "https://pvme.io/pvme-guides/rs3-full-boss-guides/rise-of-the-six/rise-of-the-six-solo/"
            }
          ]
        }
      },
      {
        id: "raids-bm-yaka",
        type: "boss",
        text: "Boss: Raids — Beastmaster Durzag & Yakamaru",
        detail: {
          title: "Liberation of Mazcab — Raids",
          subtitle: "Achto armor (T90 tank) + Teci currency",
          why: "Raids feature two bosses: Beastmaster Durzag (entry-level group boss) and Yakamaru (advanced group boss). They drop Achto Primeval/Teralith/Tempest armor (T90 tank armor with reset cooldown passive) and Teci currency for raids rewards. Both are required for Reaper Crew.",
          requirements: [],
          suggested: ["95+ combat stats", "95 Prayer", "96 Herblore", "T90 weapons", "Team of 10 recommended"],
          drops: [
            {
              item: "Achto armor pieces",
              why: "T90 tank armor with passive: chance to reset Defensive cooldowns (1/20 BM, 1/15 Yaka)"
            },
            { item: "Teci", why: "Raids currency — buy abilities, armor, and codices (1,500-3,000 per kill)" },
            {
              item: "Mazcab ability codex (Yaka)",
              why: "Unlocks Onslaught, Corruption Blast, Corruption Shot, Storm Shards/Shatter (1/50)"
            }
          ],
          moveOn: "After obtaining codices you need (especially Corruption abilities) and at least one kill each for Reaper Crew.",
          links: [
            { label: "RS Wiki — BM", url: "https://runescape.wiki/w/Beastmaster_Durzag" },
            { label: "RS Wiki — Yakamaru", url: "https://runescape.wiki/w/Yakamaru" },
            {
              label: "PvME — Duo BM",
              url: "https://pvme.io/pvme-guides/rs3-full-boss-guides/beastmaster-durzag/duo-bm/"
            }
          ]
        }
      },
      {
        id: "kerapac-hm",
        type: "boss",
        text: "Boss: Kerapac Hard Mode",
        detail: {
          title: "Kerapac, the Bound — Hard Mode",
          subtitle: "Fractured Staff of Armadyl — T95 2H magic",
          why: "The Fractured Staff of Armadyl is a T95 2H magic weapon with a powerful passive (+15-25% crit damage) and special attack. It was the first T95 weapon in RS3 and is the BIS magic 2H weapon.",
          requirements: [],
          suggested: ["99 combat stats", "99 Defence", "95 Prayer", "99 Summoning", "96 Herblore", "T90+ weapons with good perks"],
          drops: [
            {
              item: "Fractured Staff of Armadyl pieces (shaft, gem, symbol)",
              why: "Assemble into T95 2H magic staff — needs 95 Crafting (~1/133 per piece per kill)"
            }
          ],
          moveOn: "After assembling the complete Fractured Staff of Armadyl.",
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Kerapac,_the_Bound" },
            {
              label: "PvME — Kerapac HM Guide",
              url: "https://pvme.io/pvme-guides/basic-guides/kerapac-hm-basic/"
            }
          ]
        }
      },
      {
        id: "desperate-measures",
        type: "quest",
        text: "Complete Desperate Measures",
        detail: {
          title: "Desperate Measures",
          subtitle: "Elder Gods chain — Anachronia",
          why: "Continues the Elder Gods storyline on Anachronia.",
          requirements: ["Desperate Times completed", "50 Agility", "50 Hunter", "50 Mining", "50 Smithing"],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Desperate_Measures" }
          ]
        }
      },
      {
        id: "desperate-creatures",
        type: "quest",
        text: "Complete Desperate Creatures",
        detail: {
          title: "Desperate Creatures",
          subtitle: "Elder Gods chain",
          why: "Continues the Elder Gods storyline.",
          requirements: ["Desperate Measures completed", "55 Agility", "55 Hunter"],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Desperate_Creatures" }
          ]
        }
      },
      {
        id: "vault-of-shadows",
        type: "quest",
        text: "Complete Vault of Shadows",
        detail: {
          title: "Vault of Shadows",
          subtitle: "Elder Gods chain — Raksha access",
          why: "Short quest leading to the Raksha boss encounter miniquest.",
          requirements: ["Desperate Creatures completed"],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/The_Vault_of_Shadows" }
          ]
        }
      },
      {
        id: "azzanadras-quest",
        type: "quest",
        text: "Complete Azzanadra's Quest",
        detail: {
          title: "Azzanadra's Quest",
          subtitle: "Elder Gods chain — major lore quest",
          why: "Major quest in the Elder Gods storyline. Requires multiple completed quest chains.",
          requirements: ["Vault of Shadows completed", "Desperate Creatures completed", "58 Archaeology"],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Azzanadra%27s_Quest" }
          ]
        }
      },
      {
        id: "battle-of-monolith",
        type: "quest",
        text: "Complete Battle of the Monolith",
        detail: {
          title: "Battle of the Monolith",
          subtitle: "Elder Gods chain — solo boss encounters",
          why: "Solo boss encounters continuing the Elder Gods storyline.",
          requirements: ["Azzanadra's Quest completed"],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Battle_of_the_Monolith" }
          ]
        }
      },
      {
        id: "city-of-senntisten-quest",
        type: "quest",
        text: "Complete City of Senntisten (quest)",
        detail: {
          title: "City of Senntisten (quest)",
          subtitle: "Elder Gods chain — opens Senntisten area",
          why: "Opens the City of Senntisten area. Requires both Battle of the Monolith and Desert Treasure.",
          requirements: ["Battle of the Monolith completed", "Desert Treasure completed", "Temple at Senntisten completed"],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/City_of_Senntisten" }
          ]
        }
      },
      {
        id: "eye-of-het-1",
        type: "quest",
        text: "Complete Eye of Het I",
        detail: {
          title: "Eye of Het I",
          subtitle: "Elder Gods chain",
          why: "Continues the Elder Gods storyline in Senntisten.",
          requirements: ["City of Senntisten quest completed"],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Eye_of_Het_I" }
          ]
        }
      },
      {
        id: "eye-of-het-2",
        type: "quest",
        text: "Complete Eye of Het II",
        detail: {
          title: "Eye of Het II",
          subtitle: "Elder Gods chain",
          why: "Second part of the Eye of Het.",
          requirements: ["Eye of Het I completed"],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Eye_of_Het_II" }
          ]
        }
      },
      {
        id: "sins-of-father",
        type: "quest",
        text: "Complete Sins of the Father",
        detail: {
          title: "Sins of the Father",
          subtitle: "Elder Gods chain — final quest before Extinction",
          why: "The final quest before Extinction. Completes the Elder Gods storyline arc.",
          requirements: ["Eye of Het II completed"],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Sins_of_the_Father" }
          ]
        }
      },
      {
        id: "extinction",
        type: "quest",
        text: "Complete Extinction",
        detail: {
          title: "Extinction",
          subtitle: "Passivize Ring of Vigour — free your ring slot permanently",
          why: "The Extinction quest lets you combine your Ring of Vigour with a warped gem, making the adrenaline-saving effect permanent and passive. This frees your ring slot for a better ring (like Ring of Death or Asylum surgeon's ring).",
          requirements: ["Sins of the Father completed", "Eye of Het II completed"],
          tips: [
            "See the Elder Gods quest chain step above — covers the full Needle Skips → Sins of the Father prerequisite web.",
            "Also rewards 4x 175,000 XP lamps (level 75+ skills).",
            "After completion, combine Ring of Vigour + warped gem from Vicendithas."
          ],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Extinction" }
          ]
        }
      },
      {
        id: "reward-passive-rov",
        type: "reward",
        text: "Passivize Ring of Vigour",
        detail: {
          title: "Passive Ring of Vigour",
          subtitle: "Permanent 10% adrenaline save — ring slot freed",
          why: "The Ring of Vigour effect (save 10% adrenaline after ultimates, reduce special attack cost by 10%) becomes permanent. You no longer need to wear the ring, freeing your ring slot for Ring of Death, Asylum surgeon's ring, or other combat rings.",
          tips: [
            "Get the warped gem from Vicendithas after completing Extinction.",
            "Use the gem on your Ring of Vigour to consume it.",
            "The effect is permanent and works with all combat styles.",
            "Now wear Ring of Death (safe deaths + free reclaim) or Asylum surgeon's ring (threshold saves)."
          ],
          links: [
            { label: "RS Wiki — Ring of Vigour", url: "https://runescape.wiki/w/Ring_of_vigour#Passivisation" }
          ]
        }
      },
      {
        id: "advanced-perks",
        type: "unlock",
        text: "Upgrade to advanced Invention perks",
        detail: {
          title: "Advanced Invention Perks",
          subtitle: "Aftershock 4, Biting 4, Crackling 4 & more",
          why: "Advanced perks are significant upgrades over basic ones. Aftershock 4 deals AoE damage every 50,000 damage dealt. Biting 4 gives much higher crit chance. These compound into a large DPS increase.",
          tips: [
            "Aftershock 4: Ilujankan components (disassemble Anima Core of Zaros items from GWD2). Requires 89+ Invention.",
            "Biting 4: Noxious components (disassemble Noxious weapons) + Direct components.",
            "Crackling 4 + Relentless 5: Explosive + Shifting components.",
            "Planted Feet: Cywir components (from Helwyr drops). Extends Sunshine/Death's Swiftness by 21%.",
            "Use Ancient gizmos (requires 95 Archaeology + Blueprint: Ancient gizmo) for better perk chances."
          ],
          links: [
            { label: "RS Wiki — Optimal Perks", url: "https://runescape.wiki/w/Optimal_PvM_perk_setup" },
            {
              label: "PvME — Perk Information",
              url: "https://pvme.io/pvme-guides/invention-and-perks/perk-information/"
            },
            { label: "PvME — Perks Guide", url: "https://pvme.io/pvme-guides/invention-and-perks/perks/" }
          ]
        }
      }
    ]
  },
  {
    id: "end-game",
    name: "End Game",
    subtitle: "Vorago, Solak, Zamorak, Rasial & BIS gear",
    steps: [
      {
        id: "nex-aod",
        type: "boss",
        text: "Boss: Nex — Angel of Death",
        detail: {
          title: "Nex: Angel of Death",
          subtitle: "T99 prayer codices + T92 magic weapons",
          why: "AoD drops Praesul codices which unlock T99 curses (Malevolence, Desolation, Affliction, Ruination) — the strongest prayers in the game. Also drops T92 Praesul wand + Imperium core (BIS magic dual-wield).",
          requirements: ["70 Agility, Constitution, Ranged, Strength", "Frozen Key or Ancient ceremonial robes"],
          suggested: ["99 combat stats", "99 Defence", "95+ Prayer", "99 Summoning", "T90+ weapons with advanced perks", "Team of 7 recommended"],
          drops: [
            {
              item: "Praesul codex",
              why: "Unlocks T99 curses: Malevolence/Desolation/Affliction/Ruination (1/36 to 1/252)"
            },
            { item: "Wand of the Praesul", why: "T92 main-hand magic wand (1/284 to 1/1988)" },
            { item: "Imperium Core", why: "T92 off-hand magic orb (1/284 to 1/1988)" }
          ],
          moveOn: "After obtaining Praesul codex for your T99 curse. Wand + core are bonus for magic dual-wield.",
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Nex:_Angel_of_Death" },
            { label: "PvME — AoD Guide", url: "https://pvme.io/pvme-guides/basic-guides/aod-basic/" }
          ]
        }
      },
      {
        id: "reward-t99-curses",
        type: "reward",
        text: "Unlock T99 curses",
        detail: {
          title: "T99 Curses — Malevolence, Desolation, Affliction, Ruination",
          subtitle: "The strongest prayers in the game",
          why: "T99 curses provide even higher stat boosts than Turmoil/Torment/Anguish. They require 99 Prayer and the respective Praesul codex. A direct DPS increase at every boss.",
          tips: [
            "Malevolence (melee), Desolation (ranged), Affliction (magic), Ruination (necromancy).",
            "All require 99 Prayer to use.",
            "Each codex unlocks one style's curse — prioritize your main combat style.",
            "These are the final prayer upgrades."
          ],
          links: [
            { label: "RS Wiki — T99 Curses", url: "https://runescape.wiki/w/Malevolence" }
          ]
        }
      },
      {
        id: "rasial",
        type: "boss",
        text: "Boss: Rasial, the First Necromancer",
        detail: {
          title: "Rasial, the First Necromancer",
          subtitle: "T95 Necromancy weapons — Omni guard & Soulbound lantern",
          why: "Rasial drops the T95 Necromancy main-hand and off-hand weapons with powerful passives. Omni guard has Death Spark (double damage hit every 5 stacks). Soulbound lantern gives +2 max Residual Soul stacks. Get these before tackling Vorago, Solak, and Zamorak.",
          requirements: ["Alpha vs Omega quest completed", "95 Necromancy", "77 Dungeoneering", "86 Archaeology", "66 Magic", "40 Prayer"],
          suggested: ["95 Necromancy (required)", "90+ Defence", "95 Prayer", "96 Herblore"],
          drops: [
            { item: "Omni guard", why: "T95 main-hand Necromancy — Death Spark passive (1/640)" },
            { item: "Soulbound lantern", why: "T95 off-hand Necromancy — +2 Residual Soul stacks (1/640)" },
            { item: "First Necromancer's robes (5 pieces)", why: "T95 Necromancy armor set (1/640 each)" }
          ],
          moveOn: "After obtaining Omni guard + Soulbound lantern at minimum.",
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Rasial" },
            { label: "PvME — Rasial Guide", url: "https://pvme.io/pvme-guides/rs3-full-boss-guides/rasial/" }
          ]
        }
      },
      {
        id: "vorago",
        type: "boss",
        text: "Boss: Vorago",
        detail: {
          title: "Vorago",
          subtitle: "Seismic weapons (T90 magic DW) + Tectonic energy",
          why: "Vorago drops Seismic wand and singularity (T90 magic dual-wield) and Tectonic energy for T90 magic armor. The boss has a weekly rotation of special mechanics, keeping it fresh.",
          requirements: [],
          suggested: ["99 combat stats", "99 Defence", "87+ Summoning", "95 Prayer", "96 Herblore", "Team of 4-7 recommended (solo possible)"],
          drops: [
            { item: "Seismic wand", why: "T90 main-hand magic (1/400, 1/200 HM)" },
            { item: "Seismic singularity", why: "T90 off-hand magic (1/400, 1/200 HM)" },
            { item: "Tectonic energy", why: "Crafts T90 magic armor (4/5 chance, 2 per roll)" }
          ],
          moveOn: "After obtaining Seismic wand + singularity and enough Tectonic energy for armor.",
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Vorago" },
            { label: "RS Wiki — Strategy", url: "https://runescape.wiki/w/Vorago/Strategies" },
            {
              label: "PvME — Vorago Guide",
              url: "https://pvme.io/pvme-guides/basic-guides/vorago-basic/vorago-basic/"
            }
          ]
        }
      },
      {
        id: "solak",
        type: "boss",
        text: "Boss: Solak",
        detail: {
          title: "Solak, Guardian of the Grove",
          subtitle: "Erethdor's Grimoire — the best pocket slot item in the game",
          why: "Erethdor's Grimoire is the BIS pocket slot item, providing +12% crit chance and +70 damage to all combat styles. It's a massive DPS increase over Scripture of Jas. Solak also drops T92 Blightbound crossbows.",
          requirements: [],
          suggested: [
            "99 combat stats",
            "99 Defence",
            "95 Prayer",
            "96 Summoning",
            "96 Herblore",
            "89+ Invention",
            "Scales with team size (1-7 players)"
          ],
          drops: [
            {
              item: "Erethdor's grimoire",
              why: "BIS pocket slot — +12% crit chance, +70 damage all styles (1/200)"
            },
            { item: "Blightbound crossbow (MH)", why: "T92 ranged dual-wield main-hand (1/400)" },
            { item: "Blightbound crossbow (OH)", why: "T92 ranged dual-wield off-hand (1/400)" },
            { item: "Torn grimoire pages", why: "Fuel for the Grimoire (always 1 per kill)" }
          ],
          moveOn: "After obtaining Erethdor's Grimoire. Farm extra kills for grimoire pages to keep it charged.",
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Solak" },
            { label: "PvME — Solak Guide", url: "https://pvme.io/pvme-guides/basic-guides/solak-basic/" }
          ]
        }
      },
      {
        id: "reward-grimoire",
        type: "reward",
        text: "Obtain Erethdor's Grimoire",
        detail: {
          title: "Erethdor's Grimoire",
          subtitle: "Best-in-slot pocket item — +12% crit chance",
          why: "The Grimoire is the ultimate pocket slot item. +12% critical hit chance and +70 damage across all combat styles is unmatched. This single item represents one of the largest DPS upgrades available.",
          tips: [
            "Requires grimoire pages to charge — costs 1 page per 45 seconds of activation.",
            "Farm Solak for pages, or activate only during tough boss fights to conserve pages.",
            "Replaces Scripture of Jas permanently once obtained.",
            "Works with all combat styles including Necromancy."
          ],
          links: [
            { label: "RS Wiki — Erethdor's Grimoire", url: "https://runescape.wiki/w/Erethdor%27s_grimoire" }
          ]
        }
      },
      {
        id: "zamorak",
        type: "boss",
        text: "Boss: Zamorak, Lord of Chaos",
        detail: {
          title: "Zamorak, Lord of Chaos",
          subtitle: "Bow of the Last Guardian (T95 ranged) + Vestments of Havoc (T95 melee armor)",
          why: "Zamorak drops the Bow of the Last Guardian (T95 2H ranged, the strongest ranged weapon), Greater Sunshine/Death's Swiftness codices (replace Planted Feet entirely), and Vestments of Havoc (T95 melee power armor with incredible set bonuses).",
          requirements: ["Complete one full Zamorakian Undercity dungeon clear"],
          suggested: ["99 combat stats", "99 Defence", "95+ Prayer", "96+ Herblore", "T92+ weapons with advanced perks"],
          drops: [
            {
              item: "Bow of the Last Guardian pieces",
              why: "Assemble into T95 2H ranged — needs 95 Fletching"
            },
            { item: "Greater Sunshine codex", why: "Replaces Planted Feet for magic" },
            { item: "Greater Death's Swiftness codex", why: "Replaces Planted Feet for ranged" },
            { item: "Chaos Roar codex", why: "Melee ability upgrade" },
            {
              item: "Vestments of Havoc (4 pieces)",
              why: "T95 melee power armor — set bonuses: +15% adren regen, +6s Berserk, +20% max adrenaline"
            }
          ],
          moveOn: "Farm until you have your priority drops. This boss has enrage scaling up to 60,000%.",
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Zamorak,_Lord_of_Chaos" },
            { label: "PvME — Zamorak Guide", url: "https://pvme.io/pvme-guides/basic-guides/zamorak-basic/" }
          ]
        }
      },
      {
        id: "sanctum-of-rebirth",
        type: "boss",
        text: "Boss: Sanctum of Rebirth (Vermyx → Kezalam → Nakatra)",
        detail: {
          title: "Sanctum of Rebirth",
          subtitle: "3 bosses: Vermyx, Kezalam & Nakatra — T95 magic weapons + upgrade shards",
          why: "The Sanctum has 3 bosses (Vermyx, Brood Mother → Kezalam, the Wanderer → Nakatra, Devourer Eternal), each counting separately for Reaper Crew. Nakatra drops Roar of Awakening (T95 MH magic wand) and Ode to Deceit (T95 OH magic orb). Hard Mode drops Shard of Genesis Essence.",
          requirements: ["Necromancy! quest completed", "Soul Searching quest completed"],
          suggested: ["90+ Necromancy", "90+ Defence", "95 Prayer", "96 Herblore + Summoning"],
          drops: [
            { item: "Roar of Awakening", why: "T95 main-hand magic wand (from Nakatra)" },
            { item: "Ode to Deceit", why: "T95 off-hand magic orb (from Nakatra)" },
            { item: "Shard of Genesis Essence", why: "Upgrades T95 weapons +5 tiers (Hard Mode only)" },
            { item: "Scripture of Amascut", why: "Pocket slot — damage boost + DoT" }
          ],
          moveOn: "After obtaining your priority weapons. All 3 bosses (Vermyx, Kezalam, Nakatra) count for Reaper Crew. Hard Mode for Genesis Essence shards.",
          links: [
            { label: "RS Wiki — Vermyx", url: "https://runescape.wiki/w/Vermyx,_Brood_Mother" },
            { label: "RS Wiki — Kezalam", url: "https://runescape.wiki/w/Kezalam,_the_Wanderer" },
            { label: "RS Wiki — Nakatra", url: "https://runescape.wiki/w/Nakatra,_Devourer_Eternal" },
            { label: "RS Wiki — Sanctum", url: "https://runescape.wiki/w/Sanctum_of_Rebirth" },
            {
              label: "PvME — Sanctum HM Guide",
              url: "https://pvme.io/pvme-guides/rs3-full-boss-guides/sanctum/sanctum-hm-mechanics-overview/"
            }
          ]
        }
      },
      {
        id: "arch-glacor-hm",
        type: "boss",
        text: "Boss: Arch-Glacor Hard Mode",
        detail: {
          title: "Arch-Glacor — Hard Mode",
          subtitle: "Frozen Core of Leng + Dark Nilas → T95 melee swords",
          why: "Hard Mode Arch-Glacor drops the Frozen Core of Leng and Leng artefact, used to create the Dark Shard and Dark Sliver of Leng — T95 melee dual-wield swords. The streak/enrage system provides scaling challenge.",
          requirements: ["Complete NM solo with all 5 mechanics enabled"],
          suggested: ["99 combat stats", "99 Defence", "95 Prayer", "99 Summoning", "96 Herblore", "T90+ weapons with advanced perks"],
          drops: [
            { item: "Frozen Core of Leng", why: "T95 melee sword component (24% of unique rolls)" },
            { item: "Leng artefact", why: "T95 melee sword component (38% of unique rolls)" },
            { item: "Dark Nilas", why: "Upgrade material for T85→T95 melee swords (1/100)" },
            { item: "Scripture of Wen", why: "Pocket slot item (38% of unique rolls)" }
          ],
          moveOn: "After obtaining all pieces for T95 melee swords.",
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Arch-Glacor" },
            {
              label: "PvME — Arch-Glacor HM Guide",
              url: "https://pvme.io/pvme-guides/rs3-full-boss-guides/arch-glacor/range-hard-mode/"
            }
          ]
        }
      },
      {
        id: "zemouregal-vorkath",
        type: "boss",
        text: "Boss: Zemouregal & Vorkath",
        detail: {
          title: "Zemouregal & Vorkath",
          subtitle: "Dracolich armor (T90 tank ranged) + Lord of Bones codex",
          why: "Zemouregal & Vorkath is a Necromancy boss from the Battle of Forinthry quest line. It drops undead dragonhide and Vorkath's spikes to craft T90 Dracolich ranged tank armor, plus the Invoke Lord of Bones codex for Necromancy. Required for Reaper Crew.",
          requirements: ["Battle of Forinthry quest progression"],
          suggested: ["90+ Necromancy", "90+ Defence", "95 Prayer", "T90+ Necromancy weapons"],
          drops: [
            {
              item: "Undead dragonhide",
              why: "Crafts T75 tank ranged armor, base for Dracolich (4-13 per kill)"
            },
            { item: "Vorkath's spike", why: "Upgrades dragonhide into T90 Dracolich armor (4-9 per kill)" },
            { item: "Vorkath's scale", why: "Upgrades to T92 elite Dracolich armor — Hard Mode only (1/150)" },
            { item: "Invoke Lord of Bones codex", why: "Necromancy ability unlock" }
          ],
          moveOn: "After obtaining Dracolich armor set or one kill for Reaper Crew. Hard Mode for T92 scales.",
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Zemouregal_%26_Vorkath" },
            { label: "RS Wiki — Strategy", url: "https://runescape.wiki/w/Zemouregal_%26_Vorkath/Strategies" }
          ]
        }
      },
      {
        id: "amascut",
        type: "boss",
        text: "Boss: Amascut, the Devourer",
        detail: {
          title: "Amascut, the Devourer",
          subtitle: "Tumeken's armor + Shard of Genesis Essence — enrage-scaling group boss",
          why: "Amascut is an enrage-scaling group boss (up to 5 players) in the Golden Palace at Menaphos. She drops Tumeken's resplendence armor, Shard of Genesis Essence (for T95 weapon upgrades), and the Devourer's Nexus. Required for Reaper Crew.",
          requirements: ["Eclipse of the Heart quest completed"],
          suggested: ["99 combat stats", "95 Prayer", "96 Herblore", "T92+ weapons with advanced perks", "Team of up to 5 recommended"],
          drops: [
            {
              item: "Tumeken's resplendence armor (6 pieces)",
              why: "High-tier magic armor set (1/600 NM, scales to 1/25 at 2000%+)"
            },
            {
              item: "Shard of Genesis Essence",
              why: "Upgrades T95 weapons +5 tiers — Hard Mode only (1/280 to 1/100)"
            },
            { item: "Devourer's Nexus", why: "Unique drop (1/750 NM, scales with enrage)" },
            { item: "Devourer's Guard + Tumeken's Light", why: "Weapon drops" }
          ],
          moveOn: "After obtaining key drops. Push higher enrage for better rates on Genesis Essence shards.",
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Amascut,_the_Devourer" }
          ]
        }
      },
      {
        id: "gate-of-elidinis",
        type: "boss",
        text: "Boss: Gate of Elidinis",
        detail: {
          title: "Gate of Elidinis",
          subtitle: "Skilling boss — Scripture of Elidinis + prayer codex",
          why: "The Gate of Elidinis is a skilling boss atop the Sanctum of Rebirth, similar to Croesus. You fight it using Agility, Construction, Crafting, Divination, and Mining. Scales for 1-10 players. Required for Reaper Crew.",
          requirements: ["Ode of the Devourer quest completed", "75 Necromancy", "86 Archaeology", "54 Construction"],
          suggested: ["90+ in relevant skills (Agility, Construction, Crafting, Divination, Mining)", "Team of 4+ recommended"],
          drops: [
            { item: "Scripture of Elidinis", why: "Pocket slot item (1/120)" },
            { item: "Eclipsed Soul prayer codex", why: "Prayer unlock (1/120)" },
            { item: "Memory dowser", why: "Divination tool — very valuable (1/120)" },
            { item: "Runic attuner", why: "Runecrafting tool (1/120)" }
          ],
          moveOn: "After one kill for Reaper Crew, or farm for unique drops.",
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Gate_of_Elidinis" }
          ]
        }
      },
      {
        id: "mhekarnahz",
        type: "boss",
        text: "Boss: Flesh-hatcher Mhekarnahz",
        detail: {
          title: "Flesh-hatcher Mhekarnahz",
          subtitle: "Daemonheim stalker boss — Hexhunter bow (ultra-rare)",
          why: "Flesh-hatcher Mhekarnahz is a Daemonheim boss located in the Warped Depths, accessed through the eastern Wilderness. It's a 'solo-together' encounter where multiple players fight individual instances. Required for Reaper Crew.",
          requirements: ["40 Dungeoneering", "Access via eastern Wilderness resource dungeon"],
          suggested: ["90+ combat stats", "95 Prayer", "96 Herblore", "T90+ weapons"],
          drops: [
            { item: "Dragon harpoon", why: "Pre-roll drop — useful for Fishing" },
            {
              item: "Hexhunter bow",
              why: "T97-equivalent bow vs magic-using targets — ultra-rare (1/1,000,000)"
            },
            { item: "Stalker's charm", why: "Summoning charm" },
            { item: "Seeker's charm", why: "Summoning charm" }
          ],
          moveOn: "After one kill for Reaper Crew. The Hexhunter bow is absurdly rare — don't farm for it.",
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Flesh-hatcher_Mhekarnahz" }
          ]
        }
      },
      {
        id: "essence-of-finality",
        type: "unlock",
        text: "Craft Essence of Finality amulet",
        detail: {
          title: "Essence of Finality",
          subtitle: "The most important amulet in end-game PvM",
          why: "The Essence of Finality combines Amulet of Souls + Reaper Necklace effects AND lets you store a weapon special attack that can be used with any weapon. This is THE end-game amulet — you'll eventually want multiple EoFs with different stored specs.",
          requirements: ["Amulet of Souls", "Reaper necklace", "100 Crafting (to combine)"],
          tips: [
            "Made by combining: Amulet of Souls + Reaper necklace + 25 cut onyx + an alchemical hydrix.",
            "Alchemical hydrix: Made from hydrix + 50 fortunate components (from disassembling treasure trail rewards). Needs 107 Invention.",
            "Popular stored specs: Dark bow (ranged EoF), Granite maul (melee EoF), Guthix staff (magic EoF), Armadyl battlestaff (magic EoF).",
            "You'll want at least 2-3 EoFs over time, one per main combat style.",
            "Keep your first EoF general-purpose, then build style-specific ones as you progress."
          ],
          links: [
            {
              label: "RS Wiki — Essence of Finality",
              url: "https://runescape.wiki/w/Essence_of_Finality_amulet"
            },
            {
              label: "PvME — Upgrading Info",
              url: "https://pvme.io/pvme-guides/upgrading-info/armour-and-weapons/"
            }
          ]
        }
      },
      {
        id: "limitless-ingenuity",
        type: "unlock",
        text: "Obtain Limitless sigil + Ingenuity of the Humans",
        detail: {
          title: "Limitless & Ingenuity of the Humans",
          subtitle: "Core PvM sigils — use thresholds freely + guarantee hits",
          why: "The Limitless sigil lets you use threshold abilities below 50% adrenaline for 6 seconds — essential for DPS rotations. Ingenuity of the Humans guarantees your next attack hits, bypassing accuracy mechanics entirely. Both are used at every high-level boss.",
          tips: [
            "Limitless sigil: Made from vital sparks (1,000 needed). Sparks drop from Magister, Sophanem Slayer Dungeon mobs, and Corrupted creatures. Very slow to collect as an ironman.",
            "Ingenuity of the Humans: Made from 114 Invention (alchemical onyx + 100 direct components + 100 refined components). The 114 Invention requirement is the main bottleneck.",
            "Use Limitless at the start of boss fights for a damage burst — activate → rapidfire/assault without needing 50% adrenaline.",
            "Use Ingenuity for high-damage specials that need to land (like Guthix Staff spec or SGB spec on low-affinity bosses)."
          ],
          links: [
            { label: "RS Wiki — Limitless", url: "https://runescape.wiki/w/Limitless" },
            {
              label: "RS Wiki — Ingenuity of the Humans",
              url: "https://runescape.wiki/w/Ingenuity_of_the_Humans"
            }
          ]
        }
      },
      {
        id: "bis-optimization",
        type: "unlock",
        text: "Final BIS gear optimization",
        detail: {
          title: "BIS Gear Optimization",
          subtitle: "The final stretch — perfecting your loadout",
          why: "At this stage, you're optimizing the last few percent of DPS. This includes T99 prayers, best-in-slot perks, relic loadout, and filling any remaining gear slots with optimal items.",
          tips: [
            "T99 curses from AoD Praesul codices.",
            "Erethdor's Grimoire as pocket slot (keep pages stocked).",
            "Conservation of Energy relic (118 Archaeology) — 10% adrenaline refund on ultimates.",
            "Greater Sunshine + Greater Death's Swiftness from Zamorak (replaces Planted Feet).",
            "Reaper Crew: Kill all 55 unique bosses for +2 Prayer, +20 Armour, +200 LP, +12 damage.",
            "Trim comp requirements if you want the ultimate completionist goal."
          ],
          links: [
            { label: "RS Wiki — Optimal PvM Setup", url: "https://runescape.wiki/w/Optimal_PvM_perk_setup" },
            { label: "RS Wiki — Reaper Crew", url: "https://runescape.wiki/w/Reaper_Crew" },
            {
              label: "PvME — Armour & Weapons",
              url: "https://pvme.io/pvme-guides/upgrading-info/armour-and-weapons/"
            }
          ]
        }
      }
    ]
  },
  {
    id: "skill-xp-reference",
    name: "Skill XP Reference",
    subtitle: "Side quests and activities from the Pathway Guide not covered in the main tracker",
    steps: [],
    skills: [
      {
        id: "side-quests",
        name: "Quests",
        icon: "📜",
        items: [
          { id: "xp-goblin-diplomacy", text: "Goblin Diplomacy", note: "Crafting XP" },
          { id: "xp-once-upon-a-slime", text: "Once Upon a Slime", note: "Cooking XP" },
          { id: "xp-monks-friend", text: "Monk's Friend", note: "Woodcutting XP" },
          { id: "xp-ernest-the-chicken", text: "Ernest the Chicken", note: "Killerwatt area" },
          { id: "xp-tribal-totem", text: "Tribal Totem", note: "Thieving XP" },
          { id: "xp-gunnars-ground", text: "Gunnar's Ground", note: "Construction XP lamp" },
          { id: "xp-fishing-contest", text: "Fishing Contest", note: "Fishing XP + White Wolf shortcut" },
          { id: "xp-observatory-quest", text: "Observatory Quest", note: "Crafting XP" },
          { id: "xp-lost-tribe", text: "The Lost Tribe", note: "Mining XP + Dorgeshuun area" },
          { id: "xp-eagles-peak", text: "Eagles' Peak", note: "Hunter areas + eagle transport" },
          { id: "xp-buyers-and-cellars", text: "Buyers and Cellars chain", note: "Thieving XP chain" },
          { id: "xp-the-feud", text: "The Feud", note: "Thieving XP" },
          { id: "xp-cold-war", text: "Cold War", note: "Agility + Crafting + Construction XP" },
          { id: "xp-new-foundations", text: "New Foundations", note: "Significant Construction XP" },
          { id: "xp-zogre-flesh-eaters", text: "Zogre Flesh Eaters", note: "Fletching + Herblore XP" },
          { id: "xp-troll-romance", text: "Troll Romance", note: "Agility + Strength XP" },
          { id: "xp-swan-song", text: "Swan Song", note: "Fishing XP" },
          {
            id: "xp-giant-dwarf",
            text: "The Giant Dwarf",
            note: "Crafting + Mining + Smithing + Thieving XP"
          },
          { id: "xp-rfd-cooks-quest", text: "RFD: Another Cook's Quest", note: "Starts RFD chain" },
          {
            id: "xp-evil-daves",
            text: "Evil Dave's Big Day Out",
            note: "Cooking + Herblore + Magic XP lamps"
          },
          {
            id: "xp-beneath-cursed-tides",
            text: "Beneath Cursed Tides",
            note: "6 skill XP lamps, no requirements"
          },
          {
            id: "xp-throne-of-miscellania",
            text: "Throne of Miscellania + Royal Trouble",
            note: "Unlocks Managing Miscellania (passive resources)"
          },
          { id: "xp-monkey-madness", text: "Monkey Madness", note: "Huge combat XP reward" }
        ],
        tips: [],
        link: { label: "RS Wiki — Quest List", url: "https://runescape.wiki/w/List_of_quests" }
      },
      {
        id: "other-activities",
        name: "Other",
        icon: "📋",
        items: [
          {
            id: "xp-ring-of-vigour",
            text: "Ring of Vigour",
            note: "50k DG tokens — saves 10% adrenaline on ultimates"
          },
          { id: "xp-charming-imp", text: "Charming Imp", note: "100k DG tokens — auto-collects charms" },
          { id: "xp-herbicide", text: "Herbicide", note: "34k DG tokens — auto-processes herbs" },
          { id: "xp-bonecrusher", text: "Bonecrusher", note: "34k DG tokens — auto-crushes bones" },
          {
            id: "xp-berserkers-fury",
            text: "Berserker's Fury relic",
            note: "Archaeology 56 — +5.5% damage below max HP"
          },
          {
            id: "xp-fury-of-small",
            text: "Fury of the Small relic",
            note: "Archaeology 97 — extra adrenaline per basic"
          },
          {
            id: "xp-persistent-rage",
            text: "Persistent Rage relic",
            note: "Archaeology 98 — adrenaline doesn't drain out of combat"
          },
          {
            id: "xp-conservation-energy",
            text: "Conservation of Energy relic",
            note: "Archaeology 118 — 10% adrenaline refund on ultimates"
          }
        ],
        tips: [
          "Barbarian Fishing — Fishing + Agility + Strength XP combined",
          "Safecracking (62+) — best Thieving XP",
          "Player-Owned Farm — passive Farming XP + ingredients",
          "Herb + tree runs — best Farming XP, do daily",
          "Guthixian Caches (twice daily) — best Divination XP",
          "God Statues (monthly) — Construction + Prayer/Slayer XP",
          "Shooting Stars (daily) — Mining XP + gems",
          "Vis wax daily (RC 50+) — very valuable",
          "Pickpocketing master farmers (38+) — seeds for Farming/Herblore",
          "Elite Dungeon trash runs — Dungeoneering + combat XP + GP"
        ],
        link: { label: "RS Wiki — PvM Unlock Guide", url: "https://runescape.wiki/w/PvM_unlock_guide" }
      }
    ]
  }
];
