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
          why: "Ironman mode restricts player trading and Grand Exchange shortcuts, forcing you to earn gear, supplies, and skilling materials from their original sources. This is the foundation of the entire challenge.",
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
          why: "The Necromancy! quest rewards Death guard (tier 10), Skull lantern (tier 10), and Necromancer robes — your first proper combat set. This is a massive power boost at level 5. The quest itself has no level requirements, but training to 5 first is recommended for the combat sections.",
          requirements: [],
          tips: [
            "The quest has no formal requirements — but train to level 5 at City of Um troll cave first for easier combat.",
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
        id: "train-crafting-15",
        type: "skill",
        text: "Train Crafting to level 15",
        detail: {
          title: "Crafting to 15",
          subtitle: "Required to craft tier 20 Deathwarden armor",
          why: "You need 15 Crafting to craft the tier 20 Deathwarden robes after Kili Row. Pottery is the fastest method at this stage.",
          method: "Mine clay, add water to make soft clay, then use the potter's wheel and kiln in Barbarian Village or Draynor. Bowls and pie dishes give decent XP.",
          links: [
            { label: "RS Wiki — Crafting Training", url: "https://runescape.wiki/w/Crafting_training" }
          ]
        }
      },
      {
        id: "death-plateau",
        type: "quest",
        text: "Complete Death Plateau",
        detail: {
          title: "Death Plateau",
          subtitle: "3 generic XP lamps — use on Smithing for Knight's Sword",
          why: "Rewards 3 generic XP lamps (any skill). Use them on Smithing to reach the level needed for The Knight's Sword, which gives 15+ Smithing required to craft tier 20 Deathwarden weapons.",
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
          why: "Grants Smithing XP via the Gofannon amulet, pushing you closer to the Smithing needed for The Knight's Sword.",
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
          why: "One of the biggest early Smithing XP rewards in the game. Jumps you to level 30+ Smithing, well past the 15 needed for tier 20 Deathwarden armor. Also a long-term step toward the 80 Smithing needed for Invention.",
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
        id: "reward-necro-t20",
        type: "reward",
        text: "Craft tier 20 Necromancy gear",
        detail: {
          title: "Tier 20 Death Guard, Skull Lantern & Deathwarden Armor",
          subtitle: "Major early gear upgrade from Kili Row",
          why: "Tier 20 weapons nearly double your damage output compared to tier 10. This is your first significant gear upgrade and sets the pattern — return to Kili every 10 Necromancy levels for weapon upgrades.",
          requirements: ["15 Crafting", "15 Smithing", "20 Defence", "Kili Row completed"],
          tips: [
            "Upgrade your Death guard and Skull lantern to tier 20.",
            "Craft Deathwarden armor from ensouled bars — requires 15 Crafting and 15 Smithing.",
            "You need 20 Defence to equip tier 20 gear. Train Defence via combat if you haven't already.",
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
          why: "Devotion is one of the best defensive abilities in the game — it makes your active protection prayer block 100% of damage for 9.6 seconds, making you nearly invincible. Sacrifice provides free healing. These abilities remain useful into end-game bossing.",
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
          why: "Devotion makes your active protection prayer block 100% of damage (reducing hits to 1) for 9.6 seconds. Extended by 4.8 seconds per kill (max 2 kills = 19.2s total). Sacrifice heals you for free. Both are used at every boss from early game through end-game.",
          tips: [
            "Add Devotion to your defensive action bar immediately.",
            "Devotion makes protection prayers reduce damage to 1 for 9.6 seconds, extended by 4.8s per kill (max 19.2s).",
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
          subtitle: "3 generic XP lamps (1,000 XP each) — prerequisite for Violet is Blue Too",
          why: "Required before Violet is Blue Too. Rewards 3 generic skill lamps (Lamp of Joy, Lamp of Wonder, Lamp of Laughter — 1,000 XP each, any skill). Use them on Farming to unlock Player-Owned Farm content earlier, which generates passive resources useful for Herblore and Prayer.",
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
          subtitle: "3 generic XP lamps (4,000 XP each, any skill)",
          why: "Rewards 3 generic skill lamps (Lamp of Joy, Lamp of Wonder, Lamp of Laughter — 4,000 XP each, any skill). Use them on Archaeology, Construction, and Summoning: Summoning is one of the harder ironman skills to train because it depends on charms from combat, and it stays useful for PvM.",
          requirements: ["Violet is Blue completed"],
          tips: ["Use the lamps on Archaeology, Construction, and Summoning.", "All 3 lamps are generic — you can choose any skill for each."],
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
          subtitle: "Introduction to Summoning — 276 Summoning XP + 275 gold charms",
          why: "Introductory Summoning quest (Summoning is available without this quest). Rewards 276 Summoning XP and 275 gold charms — a significant early boost. Summoning familiars provide combat bonuses, extra inventory space (Beast of Burden), and healing. Essential for all PvM content.",
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
          subtitle: "Herblore XP boost + free supplies",
          why: "Introductory Herblore quest (Herblore is available without this quest). Rewards 250 Herblore XP, 15 grimy guams, and 15 eyes of newt — a good early boost. Herblore leads to Overloads, the single biggest DPS boost in the game (+17% to all combat stats). Starting early lets you stockpile herbs from Slayer and quests.",
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
          subtitle: "3 generic combat XP lamps (100 XP each) — builds off-style combat",
          why: "Rewards 3 combat XP lamps (100 XP each, choose from Attack/Strength/Defence/Constitution/Ranged/Magic/Necromancy). Put them into Ranged to start building your secondary combat style for later bosses and chinchompa AoE training.",
          requirements: [],
          tips: [
            "Start by talking to the Gypsy in Varrock.",
            "Requires killing Delrith — use Necromancy or Melee.",
            "Use the lamps on Ranged."
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
          subtitle: "Generic XP bowl (any skill) — feeds Overload progression",
          why: "Rewards an XP bowl with 10 portions of goulash that grant XP equal to 10x your level in any chosen skill (5x for Invention). Put the XP into Herblore to help toward potion-making thresholds.",
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
          subtitle: "Unlock Death's office, World Guardian title & key quest chains",
          why: "Unlocks Death's office, the Invitation box (teleport to Empyrean Citadel), and the World Guardian title. A prerequisite for many important quests: Dishonour among Thieves, Fate of the Gods, Kindred Spirits, One of a Kind, and more. Note: Reaper tasks are unlocked separately (45 Slayer + 50 combat level), and War's Retreat requires 60 combat OR 1,000 total level — neither requires this quest.",
          requirements: [],
          tips: [
            "Start by talking to Brother Samwell at the Silvarea entrance east of Varrock.",
            "WARNING: Dangerous combat section for low-level hardcore ironmen.",
            "Reaper tasks: visit Death's office via Death's Hourglass near Draynor (requires 45 Slayer, 50 combat level — no quest needed).",
            "War's Retreat: requires 60 combat level OR 1,000 total level — no quest needed."
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
        id: "train-cooking-50",
        type: "skill",
        text: "Train Cooking to 50",
        detail: {
          title: "Cooking to 50",
          subtitle: "Needed for A Tail of Two Cats (ironman) and general food supply",
          why: "A Tail of Two Cats requires making a chocolate cake (50 Cooking on ironman). Cooking also improves your self-supplied food stack for early PvM.",
          method: "Fish trout/salmon at Barbarian Village, cook them on the nearby fire, or use the Yeti Town bonfire for its Cooking XP boost. The Lumbridge range is another good option because it reduces burn chance.",
          links: [
            { label: "RS Wiki — Cooking Training", url: "https://runescape.wiki/w/Cooking_training" }
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
          subtitle: "2x 4,650 XP in chosen skills (Agility/Fletching/Smithing/Thieving)",
          why: "Rewards 4,650 XP twice in your choice of Agility, Fletching, Smithing, or Thieving (you can pick the same skill twice). Put both rewards into Agility to reach the 35-36 Agility needed for Horror from the Deep and The Grand Tree.",
          requirements: ["10 Fletching", "20 Smithing"],
          tips: [
            "Located in the desert south of Al Kharid — bring waterskins.",
            "Involves some stealth and combat.",
            "Choose Agility twice for 9,300 Agility XP."
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
          subtitle: "Generic combat XP lamp + Grand Tree travel hub",
          why: "Rewards an 18,400 XP generic combat lamp (choose from Attack/Strength/Defence/Constitution/Ranged/Magic/Necromancy), plus a 7,900 Agility lamp and a 2,150 Magic lamp. Unlocks the Grand Tree as a teleport hub and gnome glider network — critical for fast travel across the map.",
          requirements: ["25 Agility"],
          tips: [
            "Start by talking to King Narnode in the Grand Tree.",
            "Final boss (Black Demon) can be safespotted.",
            "Use the combat lamp on Attack."
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
          why: "God books are strong pocket slot items for PvM. The quest only offers 3 choices initially: Saradomin (Book of Wisdom), Guthix (Book of Balance), or Zamorak (Book of Chaos). Bandos (Book of War) and Armadyl (Book of Law) can only be purchased from Jossik AFTER obtaining one of the initial 3 books.",
          requirements: ["35 Agility", "Bar Crawl miniquest"],
          tips: [
            "Start at the Lighthouse north of Barbarian Outpost.",
            "Requires some combat — bring food and prayer potions.",
            "Initial choice is only Saradomin, Guthix, or Zamorak — pick the one most useful for your style.",
            "After obtaining your first book, you can buy Bandos (Book of War), Armadyl (Book of Law), and others from Jossik.",
            "You'll need to collect page sets to activate any book — pages drop from various monsters."
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
            "Initial quest choice: Saradomin (Book of Wisdom), Guthix (Book of Balance), or Zamorak (Book of Chaos).",
            "After obtaining your first book, buy Book of War (Bandos) or Book of Law (Armadyl) from Jossik for other styles.",
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
          requirements: [],
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
          requirements: ["Nature Spirit completed", "25 Agility"],
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
          requirements: ["In Search of the Myreque completed", "25 Crafting", "7 Magic", "15 Mining"],
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
          subtitle: "20% damage & accuracy boost vs undead",
          why: "The Salve amulet (e) gives 20% damage and accuracy against undead monsters. Since you'll be training Necromancy on undead (skeletons, ghosts) for a long time, this is a massive DPS increase. Also essential for Barrows and ED3.",
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
          subtitle: "20% damage & accuracy boost vs undead",
          why: "One of the strongest PvM items you can get this early. 20% damage AND accuracy against all undead — that includes Barrows brothers, ED3 mobs, and most Necromancy training targets. This single item speeds up your progression significantly.",
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
            { item: "Colossal bone", why: "Good Prayer XP (100% drop every kill — cap removed March 2026)" },
            { item: "Magic skull mask", why: "Magic bonus headgear (rare)" }
          ],
          moveOn: "After obtaining the Bonecrusher maul and getting comfortable with prayer switching (~20-50 kills). Move on to War's Retreat unlock, then Silverquill.",
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Ivar,_King_of_Bones" },
            { label: "RS Wiki — Strategy", url: "https://runescape.wiki/w/Ivar,_King_of_Bones/Strategies" },
            { label: "PvME — AFK Ivar", url: "https://pvme.io/pvme-guides/afk/afk-ivar-king-of-bones/" },
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
            "100 boss kills unlocks east boss portal — set your current boss for instant teleport.",
            "200 kills unlocks the Altar of War (restore prayer between kills).",
            "750 kills unlocks War's Grimoire (spellbook swapping).",
            "1,000 kills unlocks adrenaline crystals.",
            "The campfire is available immediately — upgrades are purchased with Marks of War from War's Wares."
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
            { label: "RS Wiki — Strategy", url: "https://runescape.wiki/w/Silverquill,_the_Dreadhog/Strategies" },
            { label: "PvME — AFK Silverquill", url: "https://pvme.io/pvme-guides/afk/afk-silverquill-the-dreadhog/" }
          ]
        }
      },
      {
        id: "train-firemaking-50",
        type: "skill",
        text: "Train Firemaking to 50",
        detail: {
          title: "Firemaking to 50",
          subtitle: "Needed for Tears of Guthix, Haunted Mine, and Desert Treasure",
          why: "49 Firemaking needed for Tears of Guthix (weekly free XP — do this ASAP), 35 for Haunted Mine, and 50 for Desert Treasure. Quick to train.",
          method: "Burn maple logs (30→50). Alternatively, do the Shattered Worlds minigame for XP lamps. Book of Char (Members' Loyalty Programme) can also help if available.",
          links: [
            { label: "RS Wiki — Firemaking Training", url: "https://runescape.wiki/w/Firemaking_training" }
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
          requirements: ["44 Quest Points", "49 Firemaking", "20 Mining", "20 Crafting"],
          tips: ["Do this EVERY week. The XP scales with quest points."],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Tears_of_Guthix" }
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
        id: "heroes-quest",
        type: "quest",
        text: "Complete Heroes' Quest",
        detail: {
          title: "Heroes' Quest",
          subtitle: "Multiple XP rewards — WGS prerequisite",
          why: "Multiple skill XP rewards. Required for Legends' Quest and WGS chain.",
          requirements: [
            "Shield of Arrav completed",
            "Dragon Slayer completed",
            "56 Quest Points",
            "53 Cooking",
            "53 Fishing",
            "25 Herblore",
            "50 Mining"
          ],
          tips: ["Lost City is no longer a prerequisite (removed Feb 2024).", "Requires 56 Quest Points.", "25 Defence only required for Black Arm Gang members — you can switch gangs to avoid it."],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Heroes%27_Quest" }
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
        id: "train-prayer-47",
        type: "skill",
        text: "Train Prayer to 47",
        detail: {
          title: "Prayer to 47",
          subtitle: "Needed for Rum Deal and protection prayers",
          why: "47 Prayer is needed for Rum Deal. Protection prayers (unlocked at 37-43) are essential for PvM. Train at the Chaos Temple in the Wilderness for 2x XP with dragon bones.",
          method: "Collect dragon bones from blue dragons or gather bone spawns at the Boneyard. Use the Chaos Temple altar in level 38 Wilderness for guaranteed 2x XP. Bring 1 inventory at a time to minimize risk. ~200 dragon bones gets you from 1 to 47.",
          links: [
            { label: "RS Wiki — Prayer Training", url: "https://runescape.wiki/w/Prayer_training" }
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
          why: "Part of the pirate chain. Required eventually for Cabin Fever and RotM. Note: Pirate's Treasure is not a wiki-listed prerequisite, but is kept in guide order for pirate chain continuity.",
          requirements: ["42 Crafting", "40 Farming", "50 Fishing", "47 Prayer", "42 Slayer"],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Rum_Deal" }
          ]
        }
      },
      {
        id: "train-smithing-50",
        type: "skill",
        text: "Train Smithing to 50",
        detail: {
          title: "Smithing to 50",
          subtitle: "Needed for Cabin Fever and Deathwarden weapons",
          why: "Cabin Fever requires 50 Smithing. Also needed for upgrading Deathwarden mainhand and off-hand weapons. Knight's Sword gave you ~30 — train the rest at an anvil.",
          method: "Smith burial sets at the Artisans' Workshop in Falador. Burial ingots give 2x Smithing XP and are the fastest method. Mine ore at the nearby Mining Guild or use stored ore.",
          links: [
            { label: "RS Wiki — Smithing Training", url: "https://runescape.wiki/w/Smithing_training" }
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
          requirements: ["Pirate's Treasure completed", "Rum Deal completed", "42 Agility", "45 Crafting", "40 Ranged", "50 Smithing"],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Cabin_Fever" }
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
          why: "The Asylum surgeon's ring (from completing all 3 replay challenges) is one of the best rings in the game for PvM. It has a 10% chance to save 15% adrenaline on any ability (30s cooldown) — a direct DPS increase at every boss. Requires 85 Defence to wear. Highlighted in the PvM unlock guide as a high-priority unlock.",
          requirements: [],
          tips: [
            "The quest itself has no requirements — do it first to learn the layout.",
            "After completing once, redo and complete all 3 challenges: no deaths, limited healing (1 or fewer food), AND under 37 minutes — all in one run.",
            "Use a guide with the optimal route for the challenge run.",
            "The ring requires 85 Defence to wear and works with all combat styles including Necromancy.",
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
          subtitle: "Best-in-slot ring until Ring of Death (requires 85 Defence)",
          why: "10% chance to save 15% adrenaline on any ability (30s cooldown) — a direct, passive DPS increase at every boss. Requires 85 Defence to wear. This ring is used for an extremely long time. Highlighted in the PvM unlock guide as a high-priority unlock.",
          tips: [
            "Complete Broken Home once to learn the layout.",
            "Redo and complete all 3 challenges in one run: no deaths, 1 or fewer food, AND under 37 minutes.",
            "Use a guide with the optimal route — it's tight but doable.",
            "Requires 85 Defence to wear. Works with all combat styles including Necromancy."
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
          method: "Train at Lumbridge Catacombs skeletons using AoE abilities. Return to Kili at levels 30 and 40 to complete Knowledge tasks and upgrade your Death guard and Skull lantern. Alternate combat with communion rituals to stock souls. Note: Deathwarden armor requires matching Defence levels (30/40) to equip — weapons only need the Necromancy level.",
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
          method: "Levels 40-65: Continue at Lumbridge Catacombs with AoE. Use Salve amulet (e) for the 20% boost on undead. Complete Kili's Knowledge III (50) and IV (60) for weapon upgrades. Stock up on necroplasm and ink via rituals. At level 50+, consider training at Abyss creatures for variety. Note: Deathwarden armor requires matching Defence levels (50/60) to equip — weapons only need the Necromancy level. Combat training should keep Defence on pace naturally.",
          links: [
            { label: "RS Wiki — Necromancy Training", url: "https://runescape.wiki/w/Necromancy_training" }
          ]
        }
      },
      {
        id: "ghosts-ahoy",
        type: "quest",
        text: "Complete Ghosts Ahoy",
        detail: {
          title: "Ghosts Ahoy",
          subtitle: "Port Phasmatys access — Vessel of the Harbinger prerequisite",
          why: "Grants access to Port Phasmatys and the ectofuntus for Prayer training. Required for Vessel of the Harbinger and The Spirit of War in the Necromancy quest chain.",
          requirements: ["The Restless Ghost completed", "Priest in Peril completed", "25 Agility", "20 Cooking"],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Ghosts_Ahoy" }
          ]
        }
      },
      {
        id: "vessel-of-the-harbinger",
        type: "quest",
        text: "Complete Vessel of the Harbinger",
        detail: {
          title: "Vessel of the Harbinger",
          subtitle: "Necromancy quest chain part 3 — Spirit of War prerequisite",
          why: "Continues the Necromancy quest line. Required to unlock The Spirit of War and the Hermod boss fight.",
          requirements: ["Rune Mythos completed", "Ghosts Ahoy completed", "46 Necromancy", "40 Prayer"],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Vessel_of_the_Harbinger" }
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
          requirements: ["Vessel of the Harbinger completed", "Ghosts Ahoy completed", "65 Necromancy"],
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
        id: "hermod",
        type: "boss",
        text: "Boss: Hermod, the Spirit of War",
        detail: {
          title: "Hermod, the Spirit of War",
          subtitle: "Hermodic plates for Necromancy gear upgrades",
          why: "Hermod is the repeatable boss unlocked through The Spirit of War. This is where the route starts banking Hermodic plates for later Necromancy armour upgrades, while also giving you a controlled place to practise basic Necromancy rotations before broader bossing.",
          requirements: ["The Spirit of War quest (Necromancy quest line part 4)"],
          suggested: ["65+ Necromancy (required for The Spirit of War)", "Tier 60 Death guard + skull lantern", "Protection prayers", "Good food supply"],
          drops: [
            { item: "Hermodic plate", why: "Crafting material (1/10)" },
            { item: "Hermod's armour spike", why: "Cosmetic unlock (1/2,000, threshold 400)" }
          ],
          moveOn: "After the quest kill, farm Hermodic plates for the Necromancy armour upgrades you plan to make, then move on once the plate stack is covered.",
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Hermod,_the_Spirit_of_War" },
            { label: "PvME — Hermod Guide", url: "https://pvme.io/pvme-guides/rs3-full-boss-guides/hermod/" }
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
            { item: "Molly (boss pet)", why: "Boss pet (cosmetic)" }
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
          subtitle: "Reaper kill + Amulet of the Forsaken for Berserker's Fury",
          why: "Barrows is the source of the Amulet of the Forsaken, which is needed to create Dharok's Memento for the Berserker's Fury relic. Barrows armour is useful side loot, but for this Necromancy-first route the amulet is the important progression target.",
          requirements: ["Nature Spirit or another Barrows access method"],
          suggested: [
            "60+ Necromancy (or 65+ in any style)",
            "65+ Defence",
            "43+ Prayer (protection prayers)",
            "Good food supply",
            "Salve amulet (e) — works on all brothers"
          ],
          drops: [
            { item: "Amulet of the forsaken", why: "Required with the Saradominist I lock of hair to create Dharok's Memento for Berserker's Fury" },
            {
              item: "Barrows armor sets (Ahrim, Dharok, Karil, etc.)",
              why: "Optional tier 70 armour for off-styles or defensive swaps"
            }
          ],
          moveOn: "Get the Reaper Crew kill, then farm Amulet of the Forsaken for Berserker's Fury if you do not already have it. Do not require a full armour set before moving on.",
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Barrows" },
            { label: "RS Wiki — Strategy", url: "https://runescape.wiki/w/Barrows/Strategies" },
            { label: "RS Wiki — Amulet of the forsaken", url: "https://runescape.wiki/w/Amulet_of_the_forsaken" },
            { label: "PvME — Barrows Guide", url: "https://pvme.io/pvme-guides/basic-guides/barrows-basic/" }
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
        id: "train-fletching-25",
        type: "skill",
        text: "Train Fletching to 25",
        detail: {
          title: "Fletching to 25",
          subtitle: "Needed for The Fremennik Trials",
          why: "The Fremennik Trials requires 25 Fletching. Quick to train from your current level.",
          method: "Chop oak logs, fletch into shortbows. From 10 to 25 takes about 10 minutes.",
          links: [
            { label: "RS Wiki — Fletching Training", url: "https://runescape.wiki/w/Fletching_training" }
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
          requirements: ["40 Crafting", "25 Fletching", "40 Woodcutting"],
          tips: ["No quest prerequisites. Complete all 7 trials.", "You need a raw shark (or raw manta ray/sea turtle) — obtain before starting."],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/The_Fremennik_Trials" }
          ]
        }
      },
      {
        id: "train-thieving-42",
        type: "skill",
        text: "Train Thieving to 42",
        detail: {
          title: "Thieving to 42",
          subtitle: "Needed for Temple of Ikov and Rum Deal",
          why: "Temple of Ikov requires 42 Thieving (wiki says 40 but guide lists 40). Thieves' Guild training is fast and efficient.",
          method: "Train at Thieves' Guild cell doors from 25 to 41, then complete Lost Her Marbles for its XP reward to reach 43. Access Thieves' Guild via the trapdoor in Lumbridge.",
          links: [
            { label: "RS Wiki — Thieving Training", url: "https://runescape.wiki/w/Thieving_training" },
            { label: "RS Wiki — Lost Her Marbles", url: "https://runescape.wiki/w/Lost_Her_Marbles" }
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
          requirements: ["40 Ranged", "42 Thieving"],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Temple_of_Ikov" }
          ]
        }
      },
      {
        id: "reward-barrows-armor",
        type: "reward",
        text: "Farm Barrows for Amulet of the Forsaken",
        detail: {
          title: "Amulet of the Forsaken",
          subtitle: "Required item for Dharok's Memento and Berserker's Fury",
          why: "Berserker's Fury is unlocked by using Dharok's Memento at the monolith. Dharok's Memento is created from the Saradominist I lock of hair plus an unused Amulet of the Forsaken, so Barrows should be framed as the amulet grind rather than a mandatory full-set armour grind.",
          tips: [
            "Keep one unused Amulet of the Forsaken for Dharok's Memento.",
            "Complete the Saradominist I Archaeology collection at 56 for the lock of hair.",
            "Barrows armour pieces are useful side loot, especially Ahrim's/Karil's for off-styles, but do not require a complete set here.",
            "Hard Morytania achievements halve prayer drain at Barrows — worth doing later."
          ],
          links: [
            { label: "RS Wiki — Dharok's Memento", url: "https://runescape.wiki/w/Dharok%27s_Memento" },
            { label: "RS Wiki — Amulet of the forsaken", url: "https://runescape.wiki/w/Amulet_of_the_forsaken" },
            { label: "RS Wiki — Berserker's Fury", url: "https://runescape.wiki/w/Berserker%27s_Fury" }
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
            "You'll receive 3x 100,000 XP lamps (skills 75+), 3x 50,000 combat XP lamps (combat skills 65+), a 110,000 Slayer XP lamp (70 Slayer), and a 250,000 Prayer XP lamp (80 Prayer) — bank these if you don't meet the levels."
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
            "5 Herblore",
            "65 Magic",
            "60 Mining",
            "55 Woodcutting"
          ],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Lunar_Diplomacy" }
          ]
        }
      },
      {
        id: "smoking-kills",
        type: "quest",
        text: "Complete Smoking Kills",
        detail: {
          title: "Smoking Kills",
          subtitle: "Doubles Slayer reward points — CRITICAL before Slayer training",
          why: "Smoking Kills doubles the Slayer reward points earned from task completions. Without this quest, you earn half points. Complete it before starting serious Slayer training to avoid wasting hundreds of tasks at half points.",
          requirements: ["Icthlarin's Little Helper completed", "25 Crafting", "35 Slayer"],
          tips: [
            "Start by talking to Sumona in Pollnivneach.",
            "Involves combat in the Pollnivneach Slayer Dungeon — bring combat gear and food.",
            "After completion, all Slayer task completions give full reward points.",
            "Also unlocks Slayer reward shop access and ability to craft Slayer rings."
          ],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Smoking_Kills" }
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
          requirements: ["Death Plateau completed", "15 Agility", "30 Thieving"],
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
            "Switch spellbooks at the altar in Jaldraocht Pyramid, or at your own player-owned house altar once you have built one.",
            "Blood Barrage: Heals 5% of damage dealt as HP. Amazing for Slayer and multi-target bosses.",
            "Ice Barrage: AoE freeze for 9.6 seconds. Useful for mob control.",
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
          subtitle: "Unlocks Runecrafting altars + Rune Memories chain",
          why: "Quick introductory quest with no requirements. Unlocks access to Runecrafting altars and is a prerequisite for Rune Memories. Also useful as an early quest for quest points.",
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
          requirements: ["Merlin's Crystal completed", "30 Attack"],
          tips: [
            "Start in Camelot — talk to King Arthur.",
            "Involves traveling to various locations including Fisher King's castle.",
            "Requires 30 Attack to wield Excalibur for the boss fight."
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
          requirements: ["Shilo Village completed", "36 Agility", "25 Crafting", "18 Herblore", "30 Smithing"],
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
          why: "Piety gives +8 Attack levels (accuracy), +8% melee damage, and +8 Defence levels (armour). Rigour and Augury give equivalent boosts for Ranged and Magic respectively. These are significant DPS and accuracy boosts you'll use at every boss.",
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
          requirements: ["Lunar Diplomacy completed"],
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
          requirements: ["The Grand Tree completed", "5 Construction", "46 Magic"],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/The_Eyes_of_Glouphrie" }
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
          requirements: ["Eyes of Glouphrie completed", "Tree Gnome Village completed", "Waterfall Quest completed", "45 Agility", "47 Ranged", "56 Slayer", "60 Strength", "56 Thieving"],
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
          why: "No quest prerequisites. Required for Curse of Arrav.",
          requirements: ["6 Firemaking", "10 Magic", "8 Mining", "10 Woodcutting"],
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
          requirements: ["Icthlarin's Little Helper completed", "The Golem completed", "Diamond in the Rough completed", "35 Construction", "35 Cooking", "35 Crafting", "35 Magic", "35 Prayer"],
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
          why: "Enhanced Excalibur heals 4% of your max HP every 4.2 seconds, 5 times (20% total) on a 5-minute cooldown with Hard Seer's Village tasks. Elite tasks double it to 10 times (40% total). Free heal with no food cost — used at virtually every boss.",
          requirements: ["King's Ransom completed", "Hard Seer's Village achievements"],
          tips: [
            "Get the base Excalibur from Merlin's Crystal (already completed via King's Ransom chain).",
            "Complete Hard Seer's Village achievements to enhance it. Needs various skills at 50-60.",
            "Elite Seer's Village achievements double the healing to 40% total (10 heals of 4%).",
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
            "Bladed Dive: Bought from Shattered Worlds reward shop (65 Attack required, costs 63,000,000 Shattered Anima). Works with melee + Laceration Boots.",
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
          subtitle: "Classic dragon boss — dragonfire practice",
          why: "An accessible early-mid boss with simple dragonfire pressure. Dragon Rider boots/gloves and visage are optional, but the main value is getting comfortable with antifire setup and basic boss positioning.",
          requirements: [],
          suggested: ["70+ combat stats", "60+ Defence", "Anti-dragon shield or Super antifire", "Protection prayers"],
          drops: [
            { item: "Dragon Rider boots", why: "T60 hybrid boots (1/2,000)" },
            { item: "Dragon Rider gloves", why: "T60 hybrid gloves (1/2,000)" },
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
          subtitle: "Wilderness boss — low-risk setup check",
          why: "Located in the Wilderness, so the important lesson is risk control: bring minimal gear, expect item unequips/teleports, and leave after the kill unless you specifically want rare Wilderness drops.",
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
          why: "Three bosses in one lair, each weak to a different combat style. Berserker ring and dragon hatchet are the meaningful ironman rewards; the rest of the rings are optional unless you want off-style upgrades.",
          requirements: ["The Fremennik Trials completed"],
          suggested: ["75+ in all combat styles (tribrid recommended)", "70+ Defence", "Protection prayers"],
          drops: [
            { item: "Berserker ring (Rex)", why: "Melee DPS ring (1/128)" },
            { item: "Warrior ring (Rex)", why: "Melee accuracy ring (1/128)" },
            { item: "Archers' ring (Supreme)", why: "Ranged DPS ring (1/128)" },
            { item: "Seers' ring (Prime)", why: "Magic DPS ring (1/128)" },
            { item: "Dragon hatchet (any king)", why: "Best hatchet in the game (1/128 from each king)" }
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
          subtitle: "Two-phase boss — style switching practice",
          why: "The Kalphite Queen has two phases with different style immunities, making it useful style-switching practice. The drops are not important for this route, so treat it as a mechanics check rather than a farm.",
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
          why: "QBD is an excellent solo boss that teaches phase-based mechanics and movement. The Royal crossbow (T80 2H ranged) requires 4 component drops from QBD, a coral crossbow from Song from the Depths, and 70 Smithing to assemble and forge. Song from the Depths quest also reduces her damage.",
          requirements: ["60 Summoning (to access lair)"],
          suggested: ["80+ combat stats", "70+ Defence", "Super antifire potions", "Decent food"],
          drops: [
            {
              item: "Royal crossbow (forged during fight)",
              why: "T80 2H ranged — requires 4 component drops (stabiliser, frame, sight, torsion spring), coral crossbow from Song from the Depths, and 70 Smithing. Assemble at Thurgo, then brandish during QBD's fire wall to forge."
            },
            { item: "Dragon kiteshield", why: "Rare (1/253)" },
            { item: "Dragonbone upgrade kit", why: "Cosmetic upgrade (2/253)" }
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
          requirements: ["Lost City completed", "Nature Spirit completed"],
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
          requirements: ["A Fairy Tale I completed", "49 Farming", "57 Herblore", "40 Thieving"],
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
          requirements: ["50 Crafting", "45 Firemaking", "13 Magic"],
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
        id: "enter-the-abyss",
        type: "quest",
        text: "Complete Enter the Abyss (miniquest)",
        detail: {
          title: "Enter the Abyss",
          subtitle: "Miniquest — prerequisite for Wanted! and The Slug Menace",
          why: "Short miniquest that unlocks the Abyss for Runecrafting and is required for the Wanted! → Slug Menace → WGS quest chain.",
          requirements: ["Rune Mysteries completed"],
          tips: [
            "Talk to the Mage of Zamorak in low-level Wilderness (level 5, north of Edgeville).",
            "Teleport the mage to the Runecrafting Guild, then talk to him there.",
            "Very quick — mostly dialogue."
          ],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Enter_the_Abyss" }
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
          requirements: ["Recruitment Drive completed", "Enter the Abyss (miniquest) completed"],
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
          requirements: [],
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
          requirements: ["The Needle Skips completed", "You Are It completed", "50 Divination", "50 Mining", "50 Smithing"],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Desperate_Times" }
          ]
        }
      },
      {
        id: "spirit-of-summer",
        type: "quest",
        text: "Complete Spirit of Summer",
        detail: {
          title: "Spirit of Summer",
          subtitle: "Prerequisite for Summer's End → Corporeal Beast",
          why: "Required before Summer's End, which unlocks the Corporeal Beast. Set in the Wilderness but instanced — no PvP danger.",
          requirements: ["The Restless Ghost completed", "19 Summoning", "26 Farming", "35 Prayer", "40 Construction"],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Spirit_of_Summer" }
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
          requirements: ["Spirit of Summer completed", "47 Firemaking", "35 Hunter", "45 Mining", "55 Prayer", "23 Summoning", "37 Woodcutting"],
          tips: [
            "Spirit of Summer (prerequisite): Requires The Restless Ghost. Needs 40 Construction, 26 Farming, 35 Prayer, 19 Summoning.",
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
          why: "The Corporeal Beast drops sigils for the Spirit shield family. They are useful defensive side goals, but not central to a Necromancy-first Reaper route, so this placement is mostly an early-mid mechanics check before moving on to more relevant unlocks.",
          requirements: ["Summer's End quest completed"],
          suggested: ["80+ combat stats", "70+ Prayer (Piety)", "T75+ weapons (spears deal full damage, other weapons deal half)"],
          drops: [
            {
              item: "Divine sigil",
              why: "Creates Divine spirit shield — absorbs 30% of damage from prayer (1/2,560)"
            },
            {
              item: "Elysian sigil",
              why: "Creates Elysian spirit shield — 70% chance to reduce damage by 25% (1/2,560)"
            },
            { item: "Arcane sigil", why: "Creates Arcane spirit shield — magic damage boost (1/2,560)" },
            { item: "Spectral sigil", why: "Creates Spectral spirit shield — prayer drain reduction (1/1,280)" },
            { item: "Holy elixir", why: "Required to create blessed spirit shields (1/171)" }
          ],
          moveOn: "After one kill. Spirit shields are optional side farms and not required for the main route.",
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
            { item: "Uncut onyx", why: "Alternative reward — choose cape OR onyx per completion" }
          ],
          moveOn: "After obtaining the TokHaar-Kal cape for your main style. Run it again for other styles or an uncut onyx.",
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
            { item: "Normal Mode (0-4 mechanics)", why: "Unique drops are possible but very rare — primarily for practice" }
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
          subtitle: "Saradomin sword + finishes the GWD1 block",
          why: "Commander Zilyana is the fast Saradomin-side GWD1 kill. Her drops are optional for this route, so the practical goal is finishing the GWD1 block while practising quick protect-from-melee uptime.",
          requirements: ["70 Agility (to access Saradomin area)", "40 Saradomin killcount (or War's Blessing)"],
          suggested: ["80+ in any combat style", "70+ Defence", "70+ Prayer"],
          drops: [
            { item: "Saradomin hilt", why: "Saradomin godsword component (1/512)" },
            { item: "Saradomin sword", why: "T75 2H melee weapon (1/320)" },
            { item: "Saradomin's whisper/murmur/hiss", why: "Niche necklaces (1/320 each)" }
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
          subtitle: "Big token spend before passive Ring of Vigour",
          why: "The token rewards are excellent, but forcing Charming imp + Ring of Vigour immediately after 40 Dungeoneering is too steep for the route. Treat this as a later focused token block: Ring of Vigour is needed before the Extinction passive unlock, while Charming imp is a strong QoL pickup once the token stack is actually there.",
          method: "Do regular Dungeoneering floors and use any token boxes or other account-appropriate token sources you unlock. Do not plan around old ED3 trash-run token rates; Elite Dungeon bosses award tokens, but the reliable baseline is still Dungeoneering itself. Priority if tokens are limited: 1) Ring of Vigour (50k tokens, required for passive RoV), 2) Charming imp (100k tokens, major charm QoL), 3) Herbicide/Bonecrusher later as optional cleanup.",
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
          subtitle: "Token rewards after the account can justify the grind",
          why: "Charming imp auto-collects charms from kills, making Summoning training passive and effortless. Ring of Vigour retains 10% adrenaline after ultimate abilities, and later becomes passive through Extinction. These are strong rewards, but the combined token cost is big enough that they should not block early-mid bossing.",
          tips: [
            "Charming imp: Configure to auto-collect gold + green + crimson + blue charms.",
            "Add Charming imp to your tool belt for 500 Slayer points (so you never forget it).",
            "Ring of Vigour: buy this first if tokens are limited, because it is required for the passive Ring of Vigour unlock.",
            "Grab Herbicide/Bonecrusher later when tokens stop feeling scarce; they are useful, but not Reaper Crew blockers."
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
          title: "Starter PvM Invention Perks",
          subtitle: "Regular gizmos: Precise/Eruptive, Biting, Scavenging",
          why: "Do not chase ancient-gizmo perks here. This step is just about getting useful regular-gizmo perks onto gear while you level Invention: Precise/Eruptive on weapons for damage, plus Biting or Scavenging on body armour depending on what components you can spare.",
          tips: [
            "WEAPONS: use regular weapon gizmos with Precise and Eruptive. At low Invention levels, accept low ranks like Precise 2 / Eruptive 2 and replace them as your level and components improve.",
            "ARMOUR: put Biting 2 on body armour if direct components are easy; otherwise Scavenging 2 is very ironman-friendly because it generates components while killing monsters.",
            "Optional later starter upgrades: Crackling if you have spare explosive components, or Enhanced Devoted / Devoted once you can make them comfortably.",
            "Skip for now: Precise 6, Eruptive 4, Aftershock, Biting 4, ancient gizmos, and anything needing Noxious components. Those belong in the advanced-perks step."
          ],
          links: [
            { label: "RS Wiki — Low-level Invention perks", url: "https://runescape.wiki/w/Low-level_Invention_perk_setup" },
            { label: "RS Wiki — Ironman Invention", url: "https://runescape.wiki/w/Ironman_Mode/Strategies/Invention" },
            { label: "PvME — Invention Basics", url: "https://pvme.io/pvme-guides/invention-and-perks/invention-basics/" }
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
          why: "Berserker's Fury is one of the strongest PvM relics — up to +5.5% damage when below max HP (which you almost always are during bossing). The Archaeology level alone is not enough: you also need the Barrows Amulet of the Forsaken to create Dharok's Memento.",
          method: "Train Archaeology to 56, complete the Saradominist I collection for the lock of hair, then combine it with an unused Amulet of the Forsaken from Barrows to create Dharok's Memento.",
          links: [
            { label: "RS Wiki — Archaeology Training", url: "https://runescape.wiki/w/Archaeology_training" },
            { label: "RS Wiki — Dharok's Memento", url: "https://runescape.wiki/w/Dharok%27s_Memento" },
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
          why: "During bossing, you're almost always below max HP. This relic passively boosts your damage by up to 5.5% based on how low your HP is. It costs 250 relic power at the monolith and requires Dharok's Memento, made from the Saradominist I lock of hair and an unused Amulet of the Forsaken.",
          tips: [
            "Make sure you kept one unused Amulet of the Forsaken from Barrows.",
            "Complete Saradominist I for the lock of hair before trying to make Dharok's Memento.",
            "Activate at the mysterious monolith at the Archaeology campus.",
            "This relic stays active permanently — set it and forget it.",
            "Later, combine with Fury of the Small (97 Archaeology) and Persistent Rage (98) for the optimal PvM relic loadout."
          ],
          links: [
            { label: "RS Wiki — Dharok's Memento", url: "https://runescape.wiki/w/Dharok%27s_Memento" },
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
          requirements: ["Legacy of Seergaze completed", "63 Agility", "64 Crafting", "63 Farming", "70 Fletching", "70 Magic", "67 Slayer", "76 Woodcutting"],
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
          subtitle: "Sliske's Game series — unlocks Linza's armor for River of Blood",
          why: "Part of Sliske's Game series (not the vampyre chain). Required for River of Blood but not directly part of the Myreque questline.",
          requirements: ["Missing, Presumed Death completed", "60 Agility", "60 Crafting", "60 Herblore", "60 Smithing"],
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
          requirements: ["Branches of Darkmeyer completed", "71 Agility", "76 Fletching", "78 Attack", "78 Magic", "78 Ranged", "78 Strength"],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/The_Lord_of_Vampyrium" }
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
          requirements: ["Shield of Arrav completed", "The Knight's Sword completed", "Family Crest completed", "What Lies Below completed", "51 Agility", "51 Hunter", "59 Mining", "54 Smithing"],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Defender_of_Varrock" }
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
            "Defender of Varrock completed",
            "All Fired Up completed",
            "78 Attack",
            "80 Constitution",
            "76 Firemaking",
            "75 Fletching",
            "80 Herblore",
            "78 Magic",
            "72 Mining",
            "78 Ranged"
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
        id: "catapult-construction",
        type: "quest",
        text: "Complete Catapult Construction",
        detail: {
          title: "Catapult Construction",
          subtitle: "Plague's End prerequisite",
          why: "Required for Plague's End. Short quest with low requirements — knock it out before attempting Plague's End.",
          requirements: ["44 Construction", "54 Fletching", "Smithing (any level)"],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Catapult_Construction" }
          ]
        }
      },
      {
        id: "making-history",
        type: "quest",
        text: "Complete Making History",
        detail: {
          title: "Making History",
          subtitle: "Plague's End prerequisite",
          why: "Required for Plague's End. Easy quest with no skill requirements — just dialogue and travelling.",
          requirements: ["Priest in Peril completed"],
          links: [
            { label: "RS Wiki", url: "https://runescape.wiki/w/Making_History" }
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
          why: "Soul Split (92 Prayer) heals you for a portion of all damage dealt. Turmoil/Torment/Anguish/Sorrow (95 Prayer) boost your combat stats significantly while draining the enemy. These prayers are used at every boss from now on.",
          tips: [
            "Soul Split (92 Prayer): Heals based on damage dealt with diminishing returns (10% of first 2k, 5% of next 2k, 1.25% above 4k). The most used prayer in PvM.",
            "Turmoil (95 Prayer, melee), Torment (95, magic), Anguish (95, ranged), Sorrow (95, necromancy).",
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
          subtitle: "The biggest single potion upgrade in PvM — 15% of stat level + 3 to all combat stats",
          why: "Overloads boost all combat stats by 15% of level + 3 (up to +17 at level 99, +21 at 120) for 6 minutes and cannot be reduced. They are the single largest DPS increase from a consumable. Every serious boss encounter uses an Overload.",
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
            "Weapon Poison+++ (100 Herblore): Weapon poison++ (3) + poison slime + primal extract. ALWAYS use alongside Cinderbane Gloves for passive poison stacking.",
            "Vulnerability Bombs (103 Herblore, Plague's End): Throw at boss for 10% damage boost for 1 minute. Very important DPS increase.",
            "Spiritual Prayer potions (110 Herblore): Restore familiar spec points. Essential for Ripper Demon familiar's spec spam. Recipe from Meilyr clan shop.",
            "Adrenaline Renewal potion (115 Herblore): Restores 40% adrenaline over 6 seconds. Elite Dungeon drop or make yourself.",
            "Elder Overload (106 Herblore): Supreme overload + clean fellstalk + primal extract. Direct upgrade to standard overloads.",
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
        text: "Optional EoF prep: Cinderbane Gloves + Amulet of Souls",
        detail: {
          title: "Cinderbane Gloves & Amulet of Souls",
          subtitle: "Optional endgame prep, not a GWD2/Araxxor blocker",
          why: "Cinderbane Gloves and Amulet of Souls are strong PvM upgrades, but both are expensive Ironman detours: Cinderbanes come from high-level Lost Grove Slayer monsters or Solak, and Amulet of Souls needs hydrix/Reaper-point materials plus high Crafting. Treat this as Essence of Finality prep or optional endgame power, not as a requirement before GWD2, Araxxor, or first-kill Reaper progression.",
          tips: [
            "Cinderbane Gloves: Dropped by creatures in The Lost Grove (Moss golems, Vinecrawlers, Bulbous crawlers). Drop rate is 1/1,500 on task, 1/5,000 off task. Also dropped by Solak (1/1,000).",
            "Weapon Poison+++ synergy: Always use Weapon Poison+++ alongside Cinderbanes for maximum DPS. Craft from Weapon poison++ (3) + poison slime + primal extract (100 Herblore).",
            "Amulet of Souls: Made from a hydrix gem (cut from uncut hydrix — 400 Reaper Points from Death). Needs 79 Crafting to cut, 99 Crafting (boostable) to make the amulet.",
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
              why: "T85 halberd-range melee weapon — ironman staple (1/510 base, 1/255 max rep)"
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
          why: "Halberd range means it hits enemies 2 tiles away, and AoE abilities hit everything in that range. This makes Slayer tasks, ED trash runs, and multi-target bosses dramatically faster. Augment it with the best regular Precise/Eruptive gizmos you can make.",
          tips: [
            "Augment with Invention immediately and use your current best Precise/Eruptive weapon perks.",
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
          requirements: ["80 Ranged (Twin Furies) / 80 Prayer (Gregorovic)", "40 Zamorakian KC / 40 Sliskean KC"],
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
          requirements: ["70 Necromancy", "30 Archaeology", "Osseous Rex miniquest completed"],
          suggested: ["90+ Necromancy", "T70+ Necromancy gear", "95 Prayer"],
          drops: [
            { item: "Occultist's ring", why: "BIS Necromancy ring — boosts Necromancy damage (2/399 base)" },
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
            { item: "Araxxi's fang", why: "Fang + leg = Noxious scythe (T90 2H melee, halberd range) — 1/240 matching style, 1/480 off-style" },
            { item: "Araxxi's eye", why: "Eye + leg = Noxious staff (T90 2H magic) — 1/240 matching style, 1/480 off-style" },
            { item: "Araxxi's web", why: "Web + leg = Noxious longbow (T90 2H ranged) — 1/240 matching style, 1/480 off-style" }
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
            "Augment immediately with your best Precise/Eruptive weapon perks. Upgrade to ancient-gizmo perks later when the advanced-perks step makes sense.",
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
          why: "Nex drops the best T80 power armor sets for all combat styles: Torva (melee), Pernix (ranged), and Virtus (magic). These are direct upgrades over GWD1 and Anima Core armor. Nex also drops the Zaryte bow (T80 ranged) and Virtus wand/book (T80 magic dual-wield).",
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
            { item: "Virtus wand + book", why: "T80 magic dual-wield (1/384 each)" }
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
          subtitle: "BIS combat rings (tierless) + dinosaur components",
          why: "The three Rex Matriarchs on Anachronia each use a different combat style and drop best-in-slot combat rings. They are good mid-level style-switching practice, with ring farming left optional unless a specific combat style becomes a priority.",
          requirements: ["Access to Anachronia", "Slayer task recommended (not required)"],
          suggested: ["80+ combat stats", "70+ Prayer", "T80+ weapons"],
          drops: [
            { item: "Champion's ring (melee)", why: "BIS melee ring — from Orikalka (melee boss, 1/200 for Heart of the Warrior)" },
            { item: "Channeller's ring (magic)", why: "BIS magic ring — from Pthentraken (magic boss, 1/200 for Heart of the Seer)" },
            { item: "Stalker's ring (ranged)", why: "BIS ranged ring — from Rathis (ranged boss, 1/200 for Heart of the Archer)" }
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
              why: "T90 melee dual-wield — 6 weapon variants (1/252 per unique)"
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
          why: "The six Legiones each drop a unique Ascension signet (I-VI). Collect all six plus a Dragon crossbow and 100 Ascension shards to assemble the Ascension crossbow (T90 ranged main-hand). Keystones are consumed 1 per fight to access boss rooms.",
          requirements: ["95 Slayer", "Ascension keystones (1 per boss fight) + 100 Ascension shards (for assembly)"],
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
          subtitle: "Seiryu's claw (Mizuyari T85 spear) + ancient scales for T92 armor",
          why: "ED1 features three bosses (Sanctum Guardian, Masuta the Ascended, Seiryu the Azure Serpent). Drops include ancient scales for craftable T92 Elite Sirenic/Dracolith armor and Seiryu's claw to craft the Mizuyari (T85 spear).",
          requirements: ["Impressing the Locals miniquest completed"],
          suggested: ["90+ combat stats", "96 Herblore (Overloads)", "95 Prayer", "96 Summoning"],
          drops: [
            {
              item: "Seiryu's claw",
              why: "Crafts Mizuyari (T85 spear) — does NOT upgrade Dragon Rider Lance (1/55 solo)"
            },
            { item: "Ancient scales", why: "Crafts T92 Elite Sirenic/Dracolith armor" }
          ],
          moveOn: "After obtaining Seiryu's claw for Mizuyari, or clearing for Reaper Crew.",
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
          why: "Croesus is a unique skilling boss — no combat required! You fight it using Woodcutting, Mining, Fishing, and Hunter. It drops Cryptbloom armor (T90 magic tank armor with Nature's Envoy passive: damage reduction + Fungal Shield at low HP) and the Scripture of Bik.",
          requirements: ["No quest required", "Recommended: 80+ in Woodcutting, Mining, Fishing, Hunter"],
          suggested: ["90+ Woodcutting, Mining, Fishing, Hunter", "Team of 4 (one per skill)"],
          drops: [
            {
              item: "Cryptbloom armor (helm/top/bottom/gloves/boots)",
              why: "T90 magic tank armor — passive: reduces magic/melee damage, Fungal Shield activates below 20% HP (drop rate varies by contribution, ~1/450 at max)"
            },
            {
              item: "Scripture of Bik",
              why: "Pocket slot — procs produce resources from monster drops (drop rate varies by contribution)"
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
            "Requires pages to charge — as an ironman, those pages come from Kerapac drops.",
            "Plan extra Kerapac kills if you want to keep the scripture charged for difficult bosses.",
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
          why: "Fury of the Small makes basic abilities generate 1% more adrenaline (from 9% to 10%). This compounds across every rotation — you reach thresholds and ultimates faster, which is a meaningful DPS increase at every boss.",
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
          subtitle: "Optional endgame relic goal",
          why: "Conservation of Energy refunds 10% adrenaline when you use an ultimate ability, but 98 → 118 Archaeology is a massive detour. Treat this as a later optimisation goal, not a blocker before the Reaper Crew boss push.",
          method: "Return to this after the main boss route is secure or when you specifically want the best relic setup. Continue excavating at the highest sites, use mattocks with strong perks, and complete collections for Tetracompass pieces.",
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
          subtitle: "Khopesh of Tumeken & Khopesh of Elidinis — T92 melee dual-wield",
          why: "The Magister drops phylacteries (1/18 per kill) containing 5-25 Scraps of Scripture (avg 10). 300 scraps create 3 Blessings to upgrade a T82 Khopesh of the Kharidian into the T92 Khopesh of Tumeken (main-hand) or Khopesh of Elidinis (off-hand). These are powerful melee dual-wield weapons.",
          requirements: ["115 Slayer", "Access to Sophanem Slayer Dungeon", "Key to the Crossing (monster drop: 1/75 on-task from Sophanem Slayer Dungeon creatures, 1/128 from the Magister)"],
          suggested: ["95+ combat stats", "95 Prayer", "96 Herblore", "T90+ weapons"],
          drops: [
            {
              item: "Phylactery → Scraps of Scripture (300 per T92 khopesh)",
              why: "Phylactery: 1/18 per kill, contains 5-25 scraps. 300 scraps = 3 Blessings → upgrade T82 khopesh to T92"
            },
            { item: "Vital spark", why: "Used for Limitless ability codex" }
          ],
          moveOn: "After assembling both Khopesh of Tumeken (MH) and Khopesh of Elidinis (OH) — 600 scraps total.",
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
          method: "Use charms collected from Slayer and bossing via Charming Imp. Save crimson and blue charms for higher-value pouches, and push Summoning when you have the secondary ingredients ready.",
          tips: [
            "Blood nihil: +5% melee accuracy. Shadow nihil: +5% magic accuracy. Smoke nihil: +5% ranged accuracy. Ice nihil: +5% necromancy accuracy.",
            "Nihils require Nex ingredient drops on ironman, so plan to farm the components yourself.",
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
          subtitle: "Unlock Kal'gerion Demon familiar (+1% passive crit / +5% from special)",
          why: "Kal'gerion Demon provides a passive +1% critical strike chance, and its special move (Crit-i-Kal scroll) grants +5% critical strike chance for 60 seconds. When accuracy isn't an issue (lower-defence bosses), the crit boost outperforms Nihils for raw DPS.",
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
          method: "This is the big Summoning goal. Save blue charms and high-XP secondary ingredients for the final push; the jump from 90 to 96 requires significant charm stockpiling.",
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
            { item: "Igneous Kal-Mor (necromancy)", why: "BIS necromancy cape — upgrades Death Skulls" },
            {
              item: "Igneous Kal-Zuk (all styles)",
              why: "Combined BIS cape — requires all four style capes (Ket, Xil, Mej, Mor) + 90 Crafting + TzKal-Zuk HM flawless completion"
            }
          ],
          moveOn: "After obtaining all four style-specific Igneous capes. Return for Hard Mode later for the combined cape.",
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
            "Jungle Potion completed",
            "107 Quest Points",
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
            "Defender of Varrock completed",
            "Dream Mentor completed",
            "Path of Glouphrie completed",
            "Shilo Village completed",
            "Tears of Guthix completed",
            "Temple of Ikov completed",
            "Wanted! completed",
            "The Hunt for Surok completed",
            "25 Agility",
            "40 Defence",
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
          requirements: ["Access to Barrows: Rise of the Six (requires Morytania access)"],
          suggested: ["95+ combat stats", "95 Prayer", "96 Herblore", "T90 weapons", "Team of 4 recommended"],
          drops: [
            {
              item: "Malevolent energy",
              why: "Crafts T90 melee power armor — Malevolent armor (1 guaranteed per kill, 50% chance of a 2nd)"
            },
            { item: "Shield of the Barrows", why: "T90 shields — melee/magic/ranged variants (1/240 each)" }
          ],
          moveOn: "After obtaining enough Malevolent energy for a full armor set (84 energy: 14 helm, 42 cuirass, 28 greaves).",
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
          why: "Raids feature two bosses: Beastmaster Durzag and Yakamaru. The real route constraint is team availability more than a solo gear checkpoint, while Achto armour, codices, and Teci rewards remain optional group-farm goals.",
          requirements: [],
          suggested: ["95+ combat stats", "95 Prayer", "96 Herblore", "T90 weapons", "Team of 10 recommended"],
          drops: [
            {
              item: "Achto armor pieces",
              why: "T90 tank armor with passive: chance to reset Defensive cooldowns (1/20 from both BM and Yaka, 1/18 with max reputation)"
            },
            { item: "Teci", why: "Raids currency — buy abilities, armor, and codices (750-1,500 from BM, 1,000-1,750 from Yaka)" },
            {
              item: "Mazcab ability codex (Yaka)",
              why: "Unlocks Onslaught, Corruption Blast, Corruption Shot, Storm Shards/Shatter (1/30 from Yaka)"
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
          requirements: ["Desperate Times completed", "50 Agility", "50 Archaeology"],
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
          requirements: ["Desperate Measures completed"],
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
          requirements: ["58 Archaeology", "60 Divination"],
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
          requirements: ["Vault of Shadows completed", "Desperate Creatures completed", "58 Agility", "58 Archaeology", "70 Divination"],
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
          why: "Opens the City of Senntisten area. Requires Battle of the Monolith (Desert Treasure and Temple at Senntisten are NOT required).",
          requirements: ["Battle of the Monolith completed", "74 Archaeology", "74 Magic", "75 Slayer"],
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
          requirements: ["City of Senntisten quest completed", "65 Agility"],
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
          requirements: ["Eye of Het II completed", "85 in one of: Crafting, Runecrafting, Smithing, or Invention"],
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
          requirements: ["Sins of the Father completed"],
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
            { item: "Omni guard", why: "T95 main-hand Necromancy — Death Spark passive (1/320 effective, two rolls per kill)" },
            { item: "Soulbound lantern", why: "T95 off-hand Necromancy — +2 Residual Soul stacks (1/320 effective, two rolls per kill)" },
            { item: "First Necromancer's robes (5 pieces)", why: "T95 Necromancy armor set (1/128 effective per piece via separate armor roll)" }
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
          why: "Erethdor's Grimoire is the BIS pocket slot item, providing +12% crit chance to all combat styles. It's a massive DPS increase over Scripture of Jas. Solak also drops T92 Blightbound crossbows.",
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
              why: "BIS pocket slot — +12% crit chance all styles (1/200)"
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
          why: "The Grimoire is the ultimate pocket slot item. +12% critical hit chance across all combat styles is unmatched. This single item represents one of the largest DPS upgrades available.",
          tips: [
            "Requires grimoire pages to charge — each page adds 45 minutes of activation time.",
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
            },
            { item: "Codex of Lost Knowledge", why: "Generates a new chest of rewards — additional loot" }
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
          subtitle: "Dracolich armor (T90 power ranged) + Lord of Bones codex",
          why: "Zemouregal & Vorkath sits on the Fort Forinthry quest line and drops materials for Dracolich ranged armour plus the Invoke Lord of Bones codex. For a Necromancy-first route, the codex is the interesting reward, while the ranged armour can stay optional unless ranged becomes a priority.",
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
          why: "Amascut is an enrage-scaling group boss in the Golden Palace at Menaphos. Her drops are mostly late magic/T95-upgrade goals, so for this route she belongs after the Ode/Eclipse quest chain and after the account is already in late cleanup shape.",
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
          subtitle: "Skilling boss — Memory dowser, Runic attuner, Scripture, prayer codex",
          why: "The Gate of Elidinis should not sit at the very end of the route. The Memory dowser is valuable for gathering the Divination energy that powers augmented gear, while Runic attuner helps Runecrafting. Put Gate after the 86 Archaeology/Ode unlock path and before the route starts leaning hard on advanced Invention and long divine-charge upkeep.",
          requirements: ["Ode of the Devourer quest completed", "75 Necromancy", "86 Archaeology", "54 Construction"],
          suggested: ["80+ Divination for Memory dowser value", "80+ Runecrafting if you want to use Runic attuner", "90+ in relevant gathering/support skills makes kills smoother"],
          drops: [
            { item: "Scripture of Elidinis", why: "Pocket slot item (1/480)" },
            { item: "Eclipsed Soul prayer codex", why: "Prayer unlock (1/480)" },
            { item: "Memory dowser", why: "Divination off-hand — high value for energy gathering and divine-charge upkeep (1/480)" },
            { item: "Runic attuner", why: "Runecrafting off-hand — useful if Runecrafting becomes a supply/XP focus (1/480)" }
          ],
          moveOn: "Get the Reaper Crew kill here. If divine-charge upkeep becomes painful, this is a sensible place to spend extra time chasing Memory dowser; do not require every unique before moving on.",
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
          why: "Flesh-hatcher Mhekarnahz is a Daemonheim boss accessed through the eastern Wilderness resource dungeon. The main route reason is simple access cleanup: once 40 Dungeoneering is covered, this is an efficient point to take the kill without pretending the ultra-rare Hexhunter bow is part of the plan.",
          requirements: ["40 Dungeoneering", "Access via eastern Wilderness resource dungeon"],
          suggested: ["70+ Necromancy or another comfortable combat style", "43+ Prayer", "Tier 60+ weapon", "Good food supply"],
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
          requirements: ["Amulet of Souls", "Reaper necklace", "99 Crafting (to combine)"],
          tips: [
            "Made by combining: Amulet of Souls + Reaper necklace + Alchemical hydrix at 99 Crafting.",
            "Alchemical hydrix: Made from hydrix + 50 fortunate components + 50 refined components + 10 precious components + 2 rumbling components. Needs 117 Invention (boostable from 100).",
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
        text: "Obtain Limitless ability + Ingenuity of the Humans",
        detail: {
          title: "Limitless & Ingenuity of the Humans",
          subtitle: "Core PvM abilities — use thresholds freely + guarantee hits",
          why: "The Limitless ability lets you use threshold abilities below 50% adrenaline for 6 seconds — essential for DPS rotations. Ingenuity of the Humans guarantees your next attack hits, bypassing accuracy mechanics entirely. Both are used at every high-level boss.",
          tips: [
            "Limitless ability codex: Made from 2,000 vital sparks. Sparks drop from Magister, Sophanem Slayer Dungeon mobs, and Corrupted creatures. Very slow to collect as an ironman.",
            "Ingenuity of the Humans ability codex: Requires 114 Invention to discover blueprint + 80 Crafting. Components: 2 alchemical onyx + 20 stunning components + 100 direct components + 1,500 smooth parts.",
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
    subtitle: "Side quests and activities not covered in the main tracker",
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
            id: "xp-memory-dowser",
            text: "Memory dowser",
            note: "Gate of Elidinis — Divination off-hand for energy/divine charge gathering"
          },
          {
            id: "xp-runic-attuner",
            text: "Runic attuner",
            note: "Gate of Elidinis — Runecrafting off-hand for altar-focused RC"
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

const ROUTE_ORDER_OPTIMIZATIONS = {
  insertions: {
    "necro-24": {
      id: "necro-24",
      type: "skill",
      text: "Train Necromancy to level 24",
      detail: {
        title: "Necromancy to 24",
        subtitle: "Requirement checkpoint for Rune Mythos",
        why: "Rune Mythos requires 24 Necromancy. Do this short push before adding the quest to the route so the requirement is already met.",
        method: "Continue City of Um combat and rituals after Kili Row.",
        links: [
          { label: "RS Wiki — Rune Mythos", url: "https://runescape.wiki/w/Rune_Mythos" },
          { label: "RS Wiki — Necromancy training", url: "https://runescape.wiki/w/Necromancy_training" }
        ]
      }
    },
    "train-agility-10": {
      id: "train-agility-10",
      type: "skill",
      text: "Train Agility to level 10",
      detail: {
        title: "Agility to 10",
        subtitle: "Requirement checkpoint for The Dig Site",
        why: "The Dig Site requires 10 Agility. This keeps the early quest chain requirement-clean.",
        method: "Run the Burthorpe/Taverley or Gnome Stronghold course briefly.",
        links: [
          { label: "RS Wiki — The Dig Site", url: "https://runescape.wiki/w/The_Dig_Site" },
          { label: "RS Wiki — Agility training", url: "https://runescape.wiki/w/Agility_training" }
        ]
      }
    },
    "train-mining-20": {
      id: "train-mining-20",
      type: "skill",
      text: "Train Mining to level 20",
      detail: {
        title: "Mining to 20",
        subtitle: "Requirement checkpoint for Nature Spirit",
        why: "Nature Spirit requires 20 Mining and 20 Smithing. The Knight's Sword covers Smithing; this small Mining push closes the remaining gate.",
        method: "Mine copper/tin/iron near Burthorpe, Varrock, or the Mining Guild path.",
        links: [
          { label: "RS Wiki — Nature Spirit", url: "https://runescape.wiki/w/Nature_Spirit" },
          { label: "RS Wiki — Mining training", url: "https://runescape.wiki/w/Mining_training" }
        ]
      }
    },
    "train-crafting-25": {
      id: "train-crafting-25",
      type: "skill",
      text: "Train Crafting to level 25",
      detail: {
        title: "Crafting to 25",
        subtitle: "Requirement checkpoint for In Aid of the Myreque",
        why: "In Aid of the Myreque requires 25 Crafting. This also keeps Crafting moving toward Haunted Mine and later quest gates.",
        method: "Continue pottery, silver jewellery, or gem cutting with gems gathered from Mining and shops.",
        links: [
          { label: "RS Wiki — In Aid of the Myreque", url: "https://runescape.wiki/w/In_Aid_of_the_Myreque" },
          { label: "RS Wiki — Crafting training", url: "https://runescape.wiki/w/Crafting_training" }
        ]
      }
    },
    "train-firemaking-30": {
      id: "train-firemaking-30",
      type: "skill",
      text: "Train Firemaking to level 30",
      detail: {
        title: "Firemaking to 30",
        subtitle: "Requirement checkpoint for Sea Slug",
        why: "Sea Slug requires 30 Firemaking, so this short skilling stop belongs before the quest.",
        method: "Burn the best logs available from Woodcutting or shops.",
        links: [
          { label: "RS Wiki — Sea Slug", url: "https://runescape.wiki/w/Sea_Slug" },
          { label: "RS Wiki — Firemaking training", url: "https://runescape.wiki/w/Firemaking_training" }
        ]
      }
    },
    "train-crafting-35": {
      id: "train-crafting-35",
      type: "skill",
      text: "Train Crafting to level 35",
      detail: {
        title: "Crafting to 35",
        subtitle: "Requirement checkpoint for Haunted Mine",
        why: "Haunted Mine requires 35 Crafting. Reaching it before the quest keeps the Salve amulet path clean.",
        method: "Use pottery, silver jewellery, gold jewellery, and gem cutting depending on available materials.",
        links: [
          { label: "RS Wiki — Haunted Mine", url: "https://runescape.wiki/w/Haunted_Mine" },
          { label: "RS Wiki — Crafting training", url: "https://runescape.wiki/w/Crafting_training" }
        ]
      }
    },
    "train-dungeoneering-40": {
      id: "train-dungeoneering-40",
      type: "skill",
      text: "Train Dungeoneering to level 40",
      detail: {
        title: "Dungeoneering to 40",
        subtitle: "Access checkpoint for Flesh-hatcher Mhekarnahz",
        why: "Flesh-hatcher Mhekarnahz is a mid-level boss, but it still needs the Daemonheim/Warped Depths access gate covered before the route sends you there.",
        method: "Run early Daemonheim floors solo or with your friend until level 40. This also starts building toward later Dungeoneering token goals.",
        links: [
          { label: "RS Wiki — Dungeoneering training", url: "https://runescape.wiki/w/Dungeoneering_training" },
          { label: "RS Wiki — Flesh-hatcher Mhekarnahz", url: "https://runescape.wiki/w/Flesh-hatcher_Mhekarnahz" }
        ]
      }
    },
    "train-construction-42-fort": {
      id: "train-construction-42-fort",
      type: "skill",
      text: "Train Construction to 42 for Fort Forinthry",
      detail: {
        title: "Construction to 42",
        subtitle: "New Foundations, Fort lodestone, and Town Hall Tier 1",
        why: "New Foundations gives strong Construction progress and unlocks the Fort hub. Train enough Construction and gather the limestone bricks before starting it so the early Fort unlocks happen in one pass.",
        method: "Prepare at least 362 limestone bricks: 352 for New Foundations and 10 for the Fort Forinthry lodestone. Build Town Hall Tier 1 afterwards for rested experience.",
        links: [
          { label: "RS Wiki — Construction training", url: "https://runescape.wiki/w/Construction_training" },
          { label: "RS Wiki — New Foundations", url: "https://runescape.wiki/w/New_Foundations" }
        ]
      }
    },
    "new-foundations": {
      id: "new-foundations",
      type: "quest",
      text: "Complete New Foundations",
      detail: {
        title: "New Foundations",
        subtitle: "Start Fort Forinthry and unlock the Fort build system",
        why: "New Foundations starts the Fort Forinthry line. It is not just a later quest prerequisite: it opens the Fort hub, gives Construction progress, and sets up later Fort quest requirements.",
        requirements: ["Construction 41", "352 limestone bricks"],
        links: [
          { label: "RS Wiki — New Foundations", url: "https://runescape.wiki/w/New_Foundations" },
          { label: "RS Wiki — Fort Forinthry", url: "https://runescape.wiki/w/Fort_Forinthry" }
        ]
      }
    },
    "fort-lodestone-build": {
      id: "fort-lodestone-build",
      type: "unlock",
      text: "Build the Fort Forinthry lodestone",
      detail: {
        title: "Fort Forinthry Lodestone",
        subtitle: "Fast travel into the Fort hub",
        why: "Build this immediately after New Foundations. It makes every later Fort quest/build step less annoying and costs only a small extra limestone-brick stack.",
        requirements: ["New Foundations completed", "10 limestone bricks"],
        links: [
          { label: "RS Wiki — Fort Forinthry", url: "https://runescape.wiki/w/Fort_Forinthry" }
        ]
      }
    },
    "fort-town-hall-t1": {
      id: "fort-town-hall-t1",
      type: "unlock",
      text: "Build Fort Town Hall Tier 1",
      detail: {
        title: "Town Hall Tier 1",
        subtitle: "Rested experience and Fort progression",
        why: "Town Hall Tier 1 finishes the early Fort setup. It unlocks rested experience and leaves the Fort ready for the later Command Centre, Chapel, and quest chain.",
        requirements: ["New Foundations completed", "Construction 42"],
        links: [
          { label: "RS Wiki — Town Hall", url: "https://runescape.wiki/w/Town_Hall_(Fort_Forinthry)" }
        ]
      }
    },
    "fort-construction-materials": {
      id: "fort-construction-materials",
      type: "skill",
      text: "Prepare Fort Forinthry construction materials",
      detail: {
        title: "Fort Construction Materials",
        subtitle: "Prep before Command Centre, Chapel, and Fort quests",
        why: "Prepare the Fort building materials before starting the next Fort run. The upcoming buildings and quests consume a lot of logs and limestone bricks, so doing the gathering now keeps the chain from turning into repeated bank/material detours.",
        method: "Gather 96 logs, 120 oak logs, 288 willow logs, 168 maple logs, 216 acadia logs, and 168 limestone bricks.",
        requirements: ["New Foundations completed"],
        links: [
          { label: "RS Wiki — Fort Forinthry", url: "https://runescape.wiki/w/Fort_Forinthry" }
        ]
      }
    },
    "fort-command-centre-t1": {
      id: "fort-command-centre-t1",
      type: "unlock",
      text: "Build Fort Command Centre Tier 1",
      detail: {
        title: "Command Centre Tier 1",
        subtitle: "First late Fort building before the quest chain",
        why: "Build Command Centre Tier 1 before the Fort quest chain. This keeps the construction sequence explicit instead of hiding it inside a vague quest-chain step.",
        requirements: ["New Foundations completed", "Fort construction materials prepared"],
        links: [
          { label: "RS Wiki — Command Centre", url: "https://runescape.wiki/w/Command_Centre" }
        ]
      }
    },
    "fort-chapel-t1": {
      id: "fort-chapel-t1",
      type: "unlock",
      text: "Build Fort Chapel Tier 1",
      detail: {
        title: "Chapel Tier 1",
        subtitle: "Second late Fort building before the quest chain",
        why: "Build Chapel Tier 1 immediately before the Fort quest sequence. Keep it explicit so the route shows the actual Fort work instead of compressing it into a placeholder.",
        requirements: ["New Foundations completed", "Fort construction materials prepared"],
        links: [
          { label: "RS Wiki — Chapel", url: "https://runescape.wiki/w/Chapel_(Fort_Forinthry)" }
        ]
      }
    },
    "murder-on-the-border": {
      id: "murder-on-the-border",
      type: "quest",
      text: "Complete Murder on the Border",
      detail: {
        title: "Murder on the Border",
        subtitle: "Fort quest chain: Kitchen Tier 1 during quest",
        why: "This starts the concrete Fort quest sequence that eventually feeds Ancient Awakening, Battle of Forinthry, and Requiem for a Dragon.",
        requirements: ["New Foundations completed", "Kitchen Tier 1 built during the quest"],
        links: [
          { label: "RS Wiki — Murder on the Border", url: "https://runescape.wiki/w/Murder_on_the_Border" }
        ]
      }
    },
    "unwelcome-guests": {
      id: "unwelcome-guests",
      type: "quest",
      text: "Complete Unwelcome Guests",
      detail: {
        title: "Unwelcome Guests",
        subtitle: "Fort quest chain: Guardhouse Tier 1 during quest",
        why: "Unwelcome Guests continues the Fort chain after Murder on the Border and includes the Guardhouse build. Keeping it explicit makes the actual Fort work visible instead of hiding it under chain progress.",
        requirements: ["Murder on the Border completed", "Guardhouse Tier 1 built during the quest"],
        links: [
          { label: "RS Wiki — Unwelcome Guests", url: "https://runescape.wiki/w/Unwelcome_Guests" }
        ]
      }
    },
    "dead-and-buried": {
      id: "dead-and-buried",
      type: "quest",
      text: "Complete Dead and Buried",
      detail: {
        title: "Dead and Buried",
        subtitle: "Fort quest chain: Ranger's Workroom Tier 1 during quest",
        why: "Dead and Buried is the next Fort quest and advances the chain needed before Battle of Forinthry and later Zemouregal & Vorkath.",
        requirements: ["Unwelcome Guests completed", "Ranger's Workroom Tier 1 built during the quest"],
        links: [
          { label: "RS Wiki — Dead and Buried", url: "https://runescape.wiki/w/Dead_and_Buried" }
        ]
      }
    },
    "ancient-awakening": {
      id: "ancient-awakening",
      type: "quest",
      text: "Complete Ancient Awakening",
      detail: {
        title: "Ancient Awakening",
        subtitle: "Fort quest chain: border wall, Grove cabin, Botanist's Workbench",
        why: "Ancient Awakening belongs before Battle of Forinthry so the later Requiem/Gate path has its prerequisites spelled out instead of implied.",
        requirements: ["Dead and Buried completed", "Eastern border wall built", "Grove cabin Tier 1 built", "Botanist's Workbench Tier 1 built"],
        links: [
          { label: "RS Wiki — Ancient Awakening", url: "https://runescape.wiki/w/Ancient_Awakening" }
        ]
      }
    },
    "train-necro-75": {
      id: "train-necro-75",
      type: "skill",
      text: "Train Necromancy to level 75",
      detail: {
        title: "Necromancy to 75",
        subtitle: "Quest gate for the Gate of Elidinis unlock chain",
        why: "Gate of Elidinis is not a final cleanup boss for this route. Its Divination and Runecrafting rewards are useful before sustained augmented-gear upkeep, so cover the 75 Necromancy gate before the Ode of the Devourer path.",
        method: "Continue rituals, Slayer, and boss practice with your current Necromancy gear. Keep Kili's Knowledge upgrades current while pushing toward the later tier 90 route.",
        links: [
          { label: "RS Wiki — Necromancy training", url: "https://runescape.wiki/w/Necromancy_training" },
          { label: "RS Wiki — Gate of Elidinis", url: "https://runescape.wiki/w/Gate_of_Elidinis" }
        ]
      }
    },
    "archaeology-86": {
      id: "archaeology-86",
      type: "skill",
      text: "Train Archaeology to 86",
      detail: {
        title: "Archaeology to 86",
        subtitle: "Gate of Elidinis, Requiem/Ode, and later Rasial prep",
        why: "86 Archaeology is the long gate behind the Gate of Elidinis unlock path, and it also lines up with the later Necromancy quest chain for Rasial. Do this after the early 56 Archaeology relic, but before the route starts leaning heavily on Invention charges and advanced perks.",
        method: "Continue Archaeology training from the 56 relic checkpoint. Restore collections and use chronotes/monolith unlocks as you go; this is also a stepping stone toward the later 97/98 relic push.",
        links: [
          { label: "RS Wiki — Archaeology training", url: "https://runescape.wiki/w/Archaeology_training" },
          { label: "RS Wiki — Gate of Elidinis", url: "https://runescape.wiki/w/Gate_of_Elidinis" },
          { label: "RS Wiki — Rasial", url: "https://runescape.wiki/w/Rasial" }
        ]
      }
    },
    "elder-kiln-reqs": {
      id: "elder-kiln-reqs",
      type: "skill",
      text: "Meet The Elder Kiln skill requirements",
      detail: {
        title: "Elder Kiln Requirements",
        subtitle: "Prep for Har-Aken access",
        why: "Har-Aken is reached through the Fight Kiln, which is unlocked by completing The Elder Kiln. Check these requirements before adding Har-Aken to the boss route.",
        method: "Train the remaining Elder Kiln requirements, including the Magic, Agility, and Mining gates if your quest log still shows them incomplete.",
        links: [
          { label: "RS Wiki — The Elder Kiln", url: "https://runescape.wiki/w/The_Elder_Kiln" },
          { label: "RS Wiki — Fight Kiln", url: "https://runescape.wiki/w/Fight_Kiln" }
        ]
      }
    },
    "the-elder-kiln": {
      id: "the-elder-kiln",
      type: "quest",
      text: "Complete The Elder Kiln",
      detail: {
        title: "The Elder Kiln",
        subtitle: "Unlock Fight Kiln and Har-Aken",
        why: "Har-Aken is the final boss of the Fight Kiln and counts for Reaper Crew. This quest needs to happen before the Har-Aken step.",
        requirements: ["Elder Kiln skill requirements met", "TzHaar quest chain progress"],
        links: [
          { label: "RS Wiki — The Elder Kiln", url: "https://runescape.wiki/w/The_Elder_Kiln" },
          { label: "RS Wiki — Har-Aken", url: "https://runescape.wiki/w/Har-Aken" }
        ]
      }
    },
    "impressing-the-locals": {
      id: "impressing-the-locals",
      type: "quest",
      text: "Complete Impressing the Locals",
      detail: {
        title: "Impressing the Locals",
        subtitle: "Unlock The Arc and Temple of Aminishi access",
        why: "Elite Dungeon 1 is on Aminishi, so this belongs before the ED1 full-clear boss step.",
        requirements: [],
        links: [
          { label: "RS Wiki — Impressing the Locals", url: "https://runescape.wiki/w/Impressing_the_Locals" },
          { label: "RS Wiki — Temple of Aminishi", url: "https://runescape.wiki/w/Temple_of_Aminishi" }
        ]
      }
    },
    "elder-god-quest-reqs": {
      id: "elder-god-quest-reqs",
      type: "skill",
      text: "Meet Elder God Wars quest-chain skill gates",
      detail: {
        title: "Elder God Wars Quest Requirements",
        subtitle: "Prep for Extinction and passive Ring of Vigour",
        why: "The Elder God Wars quest chain gates Extinction. Since passive Ring of Vigour is a permanent DPS increase, clear these skill gates before the late boss push.",
        method: "Check the quest list before starting Desperate Measures: important gates include Archaeology, Divination, Magic, Slayer, Agility, and one level-85 production skill for Sins of the Father.",
        links: [
          { label: "RS Wiki — Extinction", url: "https://runescape.wiki/w/Extinction" },
          { label: "RS Wiki — City of Senntisten", url: "https://runescape.wiki/w/City_of_Senntisten" }
        ]
      }
    },
    "raksha-miniquest": {
      id: "raksha-miniquest",
      type: "quest",
      text: "Complete Raksha, the Shadow Colossus miniquest",
      detail: {
        title: "Raksha, the Shadow Colossus",
        subtitle: "Unlock Raksha boss encounter",
        why: "Raksha itself is not the unlock step; the miniquest should be completed before attempting the boss.",
        requirements: ["The Vault of Shadows completed", "Access to Anachronia"],
        links: [
          { label: "RS Wiki — Raksha miniquest", url: "https://runescape.wiki/w/Raksha,_the_Shadow_Colossus_(miniquest)" },
          { label: "RS Wiki — Raksha", url: "https://runescape.wiki/w/Raksha" }
        ]
      }
    },
    "train-necro-95": {
      id: "train-necro-95",
      type: "skill",
      text: "Train Necromancy to level 95",
      detail: {
        title: "Necromancy to 95",
        subtitle: "Rasial requirement and main style breakpoint",
        why: "Rasial is a high-priority farm target for Necromancy weapons and armour, and requires 95 Necromancy.",
        method: "Use rituals and high-value combat training. Keep Kili's gear path current while pushing to this level.",
        links: [
          { label: "PvME — Necromancy Upgrade Order", url: "https://pvme.io/pvme-guides/upgrading-info/upgrade-order/necromancy/" },
          { label: "RS Wiki — Necromancy training", url: "https://runescape.wiki/w/Necromancy_training" }
        ]
      }
    },
    "necro-t90-gear": {
      id: "necro-t90-gear",
      type: "reward",
      text: "Upgrade to tier 90 Necromancy gear",
      detail: {
        title: "Tier 90 Necromancy Gear",
        subtitle: "Minimum practical Rasial farming setup",
        why: "Rasial can technically be attempted once the quest and skill requirements are met, but farming him efficiently wants tier 90 Necromancy gear first. Use Kili's Knowledge, Hermodic plates, rituals, and gathered materials to finish the tier 90 setup before committing to Rasial farming.",
        requirements: ["95 Necromancy", "Kili's Knowledge progression", "Hermodic plates from Hermod"],
        tips: [
          "Prioritise the weapons and the armour path you can sustain.",
          "If Rasial kills are inconsistent, come back after more perks, stats, or supplies rather than forcing the farm."
        ],
        links: [
          { label: "PvME — Necromancy Upgrade Order", url: "https://pvme.io/pvme-guides/upgrading-info/upgrade-order/necromancy/" },
          { label: "RS Wiki — Kili's Knowledge", url: "https://runescape.wiki/w/Kili%27s_Knowledge" },
          { label: "RS Wiki — Rasial", url: "https://runescape.wiki/w/Rasial" }
        ]
      }
    },
    "tomes-of-the-warlock": {
      id: "tomes-of-the-warlock",
      type: "quest",
      text: "Complete Tomes of the Warlock",
      detail: {
        title: "Tomes of the Warlock",
        subtitle: "Necromancy quest-chain step for Requiem, Ode, Gate, and Rasial",
        why: "Tomes of the Warlock belongs earlier than the Rasial block because it also feeds the Requiem/Ode chain that unlocks Gate of Elidinis. Completing it here keeps the Gate placement requirement-clean and still covers the later Alpha vs Omega path.",
        requirements: ["Necromancy quest-chain progress", "75 Necromancy", "86 Archaeology"],
        links: [
          { label: "RS Wiki — Tomes of the Warlock", url: "https://runescape.wiki/w/Tomes_of_the_Warlock" },
          { label: "RS Wiki — Alpha vs Omega", url: "https://runescape.wiki/w/Alpha_vs_Omega" }
        ]
      }
    },
    "alpha-vs-omega": {
      id: "alpha-vs-omega",
      type: "quest",
      text: "Complete Alpha vs Omega",
      detail: {
        title: "Alpha vs Omega",
        subtitle: "Direct unlock for Rasial",
        why: "Rasial requires Alpha vs Omega. Put the quest immediately before the Rasial farm block.",
        requirements: ["Tomes of the Warlock completed", "Rasial quest-chain requirements met"],
        links: [
          { label: "RS Wiki — Alpha vs Omega", url: "https://runescape.wiki/w/Alpha_vs_Omega" },
          { label: "RS Wiki — Rasial", url: "https://runescape.wiki/w/Rasial" }
        ]
      }
    },
    "soul-searching": {
      id: "soul-searching",
      type: "quest",
      text: "Complete Soul Searching",
      detail: {
        title: "Soul Searching",
        subtitle: "Unlock Sanctum of Rebirth",
        why: "Sanctum of Rebirth requires Soul Searching, so it belongs before the Sanctum boss sequence.",
        requirements: ["Necromancy! completed"],
        links: [
          { label: "RS Wiki — Soul Searching", url: "https://runescape.wiki/w/Soul_Searching" },
          { label: "RS Wiki — Sanctum of Rebirth", url: "https://runescape.wiki/w/Sanctum_of_Rebirth" }
        ]
      }
    },
    "battle-of-forinthry": {
      id: "battle-of-forinthry",
      type: "quest",
      text: "Complete Battle of Forinthry",
      detail: {
        title: "Battle of Forinthry",
        subtitle: "Direct Fort quest before Requiem and Zemouregal & Vorkath",
        why: "Battle of Forinthry should be an explicit quest step, not shorthand for the whole Fort chain. It unlocks the Zemouregal & Vorkath path and is part of the prerequisite route into Requiem for a Dragon.",
        requirements: ["Ancient Awakening completed"],
        links: [
          { label: "RS Wiki — Battle of Forinthry", url: "https://runescape.wiki/w/Battle_of_Forinthry" },
          { label: "RS Wiki — Zemouregal & Vorkath", url: "https://runescape.wiki/w/Zemouregal_%26_Vorkath" }
        ]
      }
    },
    "requiem-for-a-dragon": {
      id: "requiem-for-a-dragon",
      type: "quest",
      text: "Complete Requiem for a Dragon",
      detail: {
        title: "Requiem for a Dragon",
        subtitle: "Bridge quest into Ode of the Devourer",
        why: "Ode of the Devourer is the direct Gate of Elidinis unlock, and Requiem for a Dragon is the prerequisite that makes Ode available. Put it immediately before Ode so the Gate block is self-contained.",
        requirements: ["Battle of Forinthry completed", "Tomes of the Warlock completed", "86 Archaeology", "75 Necromancy"],
        links: [
          { label: "RS Wiki — Requiem for a Dragon", url: "https://runescape.wiki/w/Requiem_for_a_Dragon" },
          { label: "RS Wiki — Ode of the Devourer", url: "https://runescape.wiki/w/Ode_of_the_Devourer" }
        ]
      }
    },
    "eclipse-of-the-heart": {
      id: "eclipse-of-the-heart",
      type: "quest",
      text: "Complete Eclipse of the Heart",
      detail: {
        title: "Eclipse of the Heart",
        subtitle: "Unlock Amascut, the Devourer",
        why: "Amascut is available after Eclipse of the Heart, so this quest belongs before the Reaper Crew kill.",
        requirements: ["Ode of the Devourer completed", "Desert quest-chain progress"],
        links: [
          { label: "RS Wiki — Eclipse of the Heart", url: "https://runescape.wiki/w/Eclipse_of_the_Heart" },
          { label: "RS Wiki — Amascut", url: "https://runescape.wiki/w/Amascut,_the_Devourer" }
        ]
      }
    },
    "ode-of-the-devourer": {
      id: "ode-of-the-devourer",
      type: "quest",
      text: "Complete Ode of the Devourer",
      detail: {
        title: "Ode of the Devourer",
        subtitle: "Unlock Gate of Elidinis",
        why: "Gate of Elidinis requires Ode of the Devourer, and Gate's skilling rewards are useful well before final boss cleanup. Put Ode directly before Gate after the Requiem/Fort/Necromancy requirements are covered.",
        requirements: ["Soul Searching completed", "Requiem for a Dragon completed", "Desert quest-chain progress", "86 Archaeology", "75 Necromancy"],
        links: [
          { label: "RS Wiki — Ode of the Devourer", url: "https://runescape.wiki/w/Ode_of_the_Devourer" },
          { label: "RS Wiki — Gate of Elidinis", url: "https://runescape.wiki/w/Gate_of_Elidinis" }
        ]
      }
    }
  }
};

function applyRouteOrderOptimizations() {
  const findStep = (stepId) => {
    for (const phase of PHASES) {
      const index = phase.steps.findIndex((step) => step.id === stepId);
      if (index !== -1) {
        return { phase, index, step: phase.steps[index] };
      }
    }
    return null;
  };

  const insertBefore = (step, targetId) => {
    if (findStep(step.id)) return;
    const target = findStep(targetId);
    if (!target) return;
    target.phase.steps.splice(target.index, 0, step);
  };

  const moveBefore = (stepId, targetId) => {
    const source = findStep(stepId);
    if (!source) return;
    const [step] = source.phase.steps.splice(source.index, 1);
    const target = findStep(targetId);
    if (!target) {
      source.phase.steps.splice(source.index, 0, step);
      return;
    }
    target.phase.steps.splice(target.index, 0, step);
  };

  const insertions = ROUTE_ORDER_OPTIMIZATIONS.insertions;

  moveBefore("one-piercing-note", "necro-tutorial");
  moveBefore("reward-devotion", "necro-tutorial");
  moveBefore("blood-pact", "necro-20");

  insertBefore(insertions["necro-24"], "rune-mythos");
  moveBefore("train-crafting-20", "the-golem");
  insertBefore(insertions["train-agility-10"], "dig-site");
  insertBefore(insertions["train-mining-20"], "nature-spirit");
  insertBefore(insertions["train-crafting-25"], "in-aid-of-myreque");
  moveBefore("train-magic-20", "in-aid-of-myreque");
  insertBefore(insertions["train-firemaking-30"], "sea-slug");
  insertBefore(insertions["train-crafting-35"], "haunted-mine");
  insertBefore(insertions["train-construction-42-fort"], "swept-away");
  insertBefore(insertions["new-foundations"], "swept-away");
  insertBefore(insertions["fort-lodestone-build"], "swept-away");
  insertBefore(insertions["fort-town-hall-t1"], "swept-away");
  insertBefore(insertions["train-dungeoneering-40"], "mhekarnahz");
  moveBefore("reward-barrows-armor", "big-chompy-bird-hunting");

  moveBefore("croesus", "gwd1-graardor");
  moveBefore("train-dungeoneering-40", "corporeal-beast");
  moveBefore("mhekarnahz", "corporeal-beast");
  insertBefore(insertions["elder-kiln-reqs"], "har-aken");
  insertBefore(insertions["the-elder-kiln"], "har-aken");
  insertBefore(insertions["impressing-the-locals"], "ed1-full");

  [
    "desperate-measures",
    "desperate-creatures",
    "vault-of-shadows",
    "azzanadras-quest",
    "battle-of-monolith",
    "city-of-senntisten-quest",
    "eye-of-het-1",
    "eye-of-het-2",
    "sins-of-father",
    "extinction",
    "reward-passive-rov",
    "advanced-perks",
  ].forEach((stepId) => moveBefore(stepId, "ed2-full"));
  insertBefore(insertions["elder-god-quest-reqs"], "desperate-measures");
  insertBefore(insertions["raksha-miniquest"], "raksha");
  moveBefore("dungeoneering-tokens", "reward-passive-rov");
  moveBefore("reward-charming-imp", "reward-passive-rov");
  insertBefore(insertions["fort-construction-materials"], "rune-mysteries");
  insertBefore(insertions["fort-command-centre-t1"], "rune-mysteries");
  insertBefore(insertions["fort-chapel-t1"], "rune-mysteries");
  insertBefore(insertions["murder-on-the-border"], "rune-mysteries");
  insertBefore(insertions["unwelcome-guests"], "rune-mysteries");
  insertBefore(insertions["dead-and-buried"], "rune-mysteries");
  insertBefore(insertions["ancient-awakening"], "rune-mysteries");
  insertBefore(insertions["train-necro-75"], "archaeology-97");
  insertBefore(insertions["archaeology-86"], "archaeology-97");
  insertBefore(insertions["requiem-for-a-dragon"], "archaeology-97");

  insertBefore(insertions["train-necro-95"], "nex-aod");
  insertBefore(insertions["tomes-of-the-warlock"], "nex-aod");
  insertBefore(insertions["alpha-vs-omega"], "nex-aod");
  moveBefore("rasial", "nex-aod");
  insertBefore(insertions["necro-t90-gear"], "rasial");
  moveBefore("essence-of-finality", "nex-aod");
  moveBefore("cinderbanes-amulet-of-souls", "essence-of-finality");

  insertBefore(insertions["soul-searching"], "sanctum-of-rebirth");
  insertBefore(insertions["battle-of-forinthry"], "zemouregal-vorkath");
  insertBefore(insertions["ode-of-the-devourer"], "gate-of-elidinis");
  insertBefore(insertions["eclipse-of-the-heart"], "amascut");
  moveBefore("tomes-of-the-warlock", "requiem-for-a-dragon");
  moveBefore("soul-searching", "requiem-for-a-dragon");
  moveBefore("battle-of-forinthry", "requiem-for-a-dragon");
  moveBefore("gate-of-elidinis", "archaeology-97");
  moveBefore("ode-of-the-devourer", "gate-of-elidinis");
  moveBefore("sanctum-of-rebirth", "cinderbanes-amulet-of-souls");
  moveBefore("telos", "raksha");
  moveBefore("limitless-ingenuity", "vorago");
  moveBefore("train-summoning-87", "bis-optimization");
  moveBefore("train-summoning-90", "bis-optimization");
  moveBefore("train-summoning-96", "bis-optimization");
  moveBefore("archaeology-118", "bis-optimization");
}

applyRouteOrderOptimizations();

function movePostRouteStepsToNextSteps() {
  const postRouteStepIds = [
    "train-summoning-87",
    "train-summoning-90",
    "train-summoning-96",
    "archaeology-118",
    "bis-optimization"
  ];

  const movedSteps = [];
  for (const stepId of postRouteStepIds) {
    for (const phase of PHASES) {
      if (!phase.steps) continue;
      const index = phase.steps.findIndex((step) => step.id === stepId);
      if (index === -1) continue;
      movedSteps.push(phase.steps.splice(index, 1)[0]);
      break;
    }
  }

  if (!movedSteps.length) return;

  const nextStepsPhase = {
    id: "next-steps",
    name: "Next Steps",
    subtitle: "Optional optimisation after the Reaper Crew route is done",
    optional: true,
    steps: movedSteps
  };

  const existingIndex = PHASES.findIndex((phase) => phase.id === "next-steps");
  if (existingIndex !== -1) {
    PHASES[existingIndex] = nextStepsPhase;
    return;
  }

  const referenceIndex = PHASES.findIndex((phase) => phase.id === "skill-xp-reference");
  PHASES.splice(referenceIndex === -1 ? PHASES.length : referenceIndex, 0, nextStepsPhase);
}

movePostRouteStepsToNextSteps();

function applyReaperStepSplits() {
  const findStep = (stepId) => {
    for (const phase of PHASES) {
      const index = phase.steps.findIndex((step) => step.id === stepId);
      if (index !== -1) return { phase, index, step: phase.steps[index] };
    }
    return null;
  };

  const makeBossStep = (baseStep, overrides) => ({
    ...baseStep,
    id: overrides.id,
    text: overrides.text,
    detail: {
      ...baseStep.detail,
      title: overrides.title,
      subtitle: overrides.subtitle ?? baseStep.detail.subtitle,
      why: overrides.why,
      requirements: overrides.requirements ?? baseStep.detail.requirements ?? [],
      drops: overrides.drops ?? [],
      moveOn: overrides.moveOn,
      links: overrides.links ?? baseStep.detail.links ?? []
    }
  });

  const replaceComposite = (sourceId, replacements) => {
    const source = findStep(sourceId);
    if (!source) return;
    const newSteps = replacements.map((replacement) => makeBossStep(source.step, replacement));
    source.phase.steps.splice(source.index, 1, ...newSteps);
  };

  replaceComposite("gwd2-twins-greg", [
    {
      id: "twin-furies",
      text: "Boss: Twin Furies",
      title: "Twin Furies — Nymora & Avaryss",
      subtitle: "GWD2 Reaper Crew kill",
      why: "Twin Furies are one of the four Heart of Gielinor bosses needed before Telos access. Take the kill here for the GWD2 completion path; weapon farming is optional for a Necromancy-first route.",
      moveOn: "After one kill for Reaper Crew and Telos access. Farm weapons only if they support your next style goal.",
      links: [
        { label: "RS Wiki — Twin Furies", url: "https://runescape.wiki/w/Twin_Furies" },
        { label: "PvME — Twin Furies", url: "https://pvme.io/pvme-guides/basic-guides/twin-furies-basic/" }
      ]
    },
    {
      id: "gregorovic",
      text: "Boss: Gregorovic",
      title: "Gregorovic — Heart of Gielinor",
      subtitle: "GWD2 Reaper Crew kill",
      why: "Gregorovic finishes another piece of the Heart of Gielinor/Telos access set. The fight belongs with the other GWD2 cleanup rather than being delayed into endgame.",
      moveOn: "After one kill for Reaper Crew and Telos access. Farm weapons only if they support your next style goal.",
      links: [
        { label: "RS Wiki — Gregorovic", url: "https://runescape.wiki/w/Gregorovic" },
        { label: "PvME — Gregorovic", url: "https://pvme.io/pvme-guides/basic-guides/gregorovic-basic/" }
      ]
    }
  ]);

  replaceComposite("ed1-full", [
    {
      id: "ed1-sanctum-guardian",
      text: "Boss: Sanctum Guardian",
      title: "Sanctum Guardian — Temple of Aminishi",
      subtitle: "Elite Dungeon 1 first boss",
      why: "Sanctum Guardian is the first checkpoint in ED1. The value here is learning the dungeon rhythm and opening the path toward a full Seiryu clear, not stopping for a separate farm.",
      moveOn: "After one kill, continue the dungeon toward Masuta.",
      links: [
        { label: "RS Wiki — Sanctum Guardian", url: "https://runescape.wiki/w/Sanctum_Guardian" },
        { label: "PvME — ED1 Guide", url: "https://pvme.io/pvme-guides/basic-guides/ed1-basic/" }
      ]
    },
    {
      id: "ed1-masuta",
      text: "Boss: Masuta the Ascended",
      title: "Masuta the Ascended — Temple of Aminishi",
      subtitle: "Elite Dungeon 1 second boss",
      why: "Masuta is the second ED1 checkpoint and the last major stop before Seiryu. Treat it as part of the same full-clear objective rather than a standalone grind.",
      moveOn: "After one kill, continue the dungeon toward Seiryu.",
      links: [
        { label: "RS Wiki — Masuta", url: "https://runescape.wiki/w/Masuta_the_Ascended" },
        { label: "PvME — ED1 Guide", url: "https://pvme.io/pvme-guides/basic-guides/ed1-basic/" }
      ]
    },
    {
      id: "ed1-seiryu",
      text: "Boss: Seiryu the Azure Serpent",
      title: "Seiryu the Azure Serpent — Temple of Aminishi",
      subtitle: "Elite Dungeon 1 final boss",
      why: "Seiryu is the payoff for the ED1 full clear. Mizuyari and other drops are optional side goals, so finish the dungeon once and move on unless you specifically want ED1 loot.",
      moveOn: "After one full ED1 clear for Reaper Crew. Mizuyari and other drops are optional side goals.",
      links: [
        { label: "RS Wiki — Seiryu", url: "https://runescape.wiki/w/Seiryu_the_Azure_Serpent" },
        { label: "PvME — ED1 Guide", url: "https://pvme.io/pvme-guides/basic-guides/ed1-basic/" }
      ]
    }
  ]);

  replaceComposite("ed2-full", [
    {
      id: "ed2-astellarn",
      text: "Boss: Astellarn",
      title: "Astellarn — Dragonkin Laboratory",
      subtitle: "Elite Dungeon 2 first boss",
      why: "Astellarn starts the ED2 full clear. Since ED2 is mainly here for route completion and optional melee codices later, the first boss should be treated as forward progress through the dungeon.",
      moveOn: "After one kill, continue the dungeon toward Verak Lith.",
      links: [
        { label: "RS Wiki — Astellarn", url: "https://runescape.wiki/w/Astellarn" },
        { label: "PvME — ED2 Guide", url: "https://pvme.io/pvme-guides/basic-guides/ed2-basic/" }
      ]
    },
    {
      id: "ed2-verak-lith",
      text: "Boss: Verak Lith",
      title: "Verak Lith — Dragonkin Laboratory",
      subtitle: "Elite Dungeon 2 second boss",
      why: "Verak Lith is the second ED2 checkpoint. The goal is to finish the Dragonkin Laboratory clear cleanly, with codex farming left for a later melee-focused plan.",
      moveOn: "After one kill, continue the dungeon toward the Black Stone Dragon.",
      links: [
        { label: "RS Wiki — Verak Lith", url: "https://runescape.wiki/w/Verak_Lith" },
        { label: "PvME — ED2 Guide", url: "https://pvme.io/pvme-guides/basic-guides/ed2-basic/" }
      ]
    },
    {
      id: "ed2-black-stone-dragon",
      text: "Boss: Black Stone Dragon",
      title: "Black Stone Dragon — Dragonkin Laboratory",
      subtitle: "Elite Dungeon 2 final boss",
      why: "Black Stone Dragon is the ED2 finish line. ED2 codices can be farmed later if melee becomes a priority, but they are not a Necromancy-first blocker.",
      moveOn: "After one full ED2 clear for Reaper Crew. Farm codices later if melee becomes a priority.",
      links: [
        { label: "RS Wiki — Black Stone Dragon", url: "https://runescape.wiki/w/Black_Stone_Dragon" },
        { label: "PvME — ED2 Guide", url: "https://pvme.io/pvme-guides/basic-guides/ed2-basic/" }
      ]
    }
  ]);

  replaceComposite("ed3-full", [
    {
      id: "ed3-crassian-leviathan",
      text: "Boss: Crassian Leviathan",
      title: "Crassian Leviathan — The Shadow Reef",
      subtitle: "Elite Dungeon 3 first boss",
      why: "Crassian Leviathan starts the ED3 full clear. It is a checkpoint on the way to Ambassador rather than a place where this Necromancy-first route needs to farm drops.",
      moveOn: "After one kill, continue the dungeon toward Taraket.",
      links: [
        { label: "RS Wiki — Crassian Leviathan", url: "https://runescape.wiki/w/Crassian_Leviathan" },
        { label: "PvME — ED3 Guide", url: "https://pvme.io/pvme-guides/basic-guides/ed3-basic/" }
      ]
    },
    {
      id: "ed3-taraket",
      text: "Boss: Taraket the Necromancer",
      title: "Taraket the Necromancer — The Shadow Reef",
      subtitle: "Elite Dungeon 3 second boss",
      why: "Taraket is the second ED3 checkpoint and the last stop before Ambassador. Clear it as part of the dungeon objective; Eldritch crossbow farming can wait unless ranged becomes explicit.",
      moveOn: "After one kill, continue the dungeon toward The Ambassador.",
      links: [
        { label: "RS Wiki — Taraket", url: "https://runescape.wiki/w/Taraket_the_Necromancer" },
        { label: "PvME — ED3 Guide", url: "https://pvme.io/pvme-guides/basic-guides/ed3-basic/" }
      ]
    },
    {
      id: "ed3-ambassador",
      text: "Boss: The Ambassador",
      title: "The Ambassador — The Shadow Reef",
      subtitle: "Elite Dungeon 3 final boss",
      why: "The Ambassador is the ED3 finish line and the only Shadow Reef point where the Eldritch crossbow farm becomes relevant. For this route, finish the clear once and leave ranged farming optional.",
      moveOn: "After one full clear and Ambassador kill for Reaper Crew. Eldritch crossbow is optional ranged progression.",
      links: [
        { label: "RS Wiki — The Ambassador", url: "https://runescape.wiki/w/The_Ambassador" },
        { label: "PvME — ED3 Guide", url: "https://pvme.io/pvme-guides/basic-guides/ed3-basic/" }
      ]
    }
  ]);

  replaceComposite("raids-bm-yaka", [
    {
      id: "beastmaster-durzag",
      text: "Boss: Beastmaster Durzag",
      title: "Beastmaster Durzag — Liberation of Mazcab",
      subtitle: "Raids first boss",
      why: "Beastmaster Durzag is the easier half of Mazcab raids and a good target whenever a group is available. The limiting factor is usually team timing, not a special solo unlock.",
      moveOn: "After one Beastmaster kill for Reaper Crew. Codices and Achto are optional if your team is available.",
      links: [
        { label: "RS Wiki — Beastmaster Durzag", url: "https://runescape.wiki/w/Beastmaster_Durzag" },
        { label: "PvME — Duo BM", url: "https://pvme.io/pvme-guides/rs3-full-boss-guides/beastmaster-durzag/duo-bm/" }
      ]
    },
    {
      id: "yakamaru",
      text: "Boss: Yakamaru",
      title: "Yakamaru — Liberation of Mazcab",
      subtitle: "Raids second boss",
      why: "Yakamaru completes the Mazcab raid pair and is more group-coordination heavy than Beastmaster. Do it when the team opportunity is there rather than letting it dictate the solo route.",
      moveOn: "After one Yakamaru kill for Reaper Crew. Codices and Achto are optional if your team is available.",
      links: [
        { label: "RS Wiki — Yakamaru", url: "https://runescape.wiki/w/Yakamaru" }
      ]
    }
  ]);

  replaceComposite("sanctum-of-rebirth", [
    {
      id: "sanctum-vermyx",
      text: "Boss: Vermyx, Brood Mother",
      title: "Vermyx, Brood Mother — Sanctum of Rebirth",
      subtitle: "Sanctum first boss",
      why: "Vermyx opens the Sanctum sequence. At this point the route already has Rasial/T90 Necromancy momentum, so the goal is a clean normal-mode Sanctum clear rather than farming the first room.",
      moveOn: "After one kill, continue toward Kezalam.",
      links: [
        { label: "RS Wiki — Vermyx", url: "https://runescape.wiki/w/Vermyx,_Brood_Mother" },
        { label: "PvME — Sanctum HM Guide", url: "https://pvme.io/pvme-guides/rs3-full-boss-guides/sanctum/sanctum-hm-mechanics-overview/" }
      ]
    },
    {
      id: "sanctum-kezalam",
      text: "Boss: Kezalam, the Wanderer",
      title: "Kezalam, the Wanderer — Sanctum of Rebirth",
      subtitle: "Sanctum second boss",
      why: "Kezalam is the middle Sanctum checkpoint. Continue through it while the mechanics are fresh so the full Sanctum clear stays one coherent push.",
      moveOn: "After one kill, continue toward Nakatra.",
      links: [
        { label: "RS Wiki — Kezalam", url: "https://runescape.wiki/w/Kezalam,_the_Wanderer" },
        { label: "PvME — Sanctum HM Guide", url: "https://pvme.io/pvme-guides/rs3-full-boss-guides/sanctum/sanctum-hm-mechanics-overview/" }
      ]
    },
    {
      id: "sanctum-nakatra",
      text: "Boss: Nakatra, Devourer Eternal",
      title: "Nakatra, Devourer Eternal — Sanctum of Rebirth",
      subtitle: "Sanctum final boss",
      why: "Nakatra is the normal-mode Sanctum finish line. Weapons and Genesis shards can be farmed later if they become priority upgrades, but the route does not need to park here before other cleanup bosses.",
      moveOn: "After clearing Vermyx, Kezalam, and Nakatra for Reaper Crew. Farm weapons or Genesis shards later if they become priority upgrades.",
      links: [
        { label: "RS Wiki — Nakatra", url: "https://runescape.wiki/w/Nakatra,_Devourer_Eternal" },
        { label: "PvME — Sanctum HM Guide", url: "https://pvme.io/pvme-guides/rs3-full-boss-guides/sanctum/sanctum-hm-mechanics-overview/" }
      ]
    }
  ]);
}

applyReaperStepSplits();

const ROUTE_COPY_REVISIONS = {
  ivar: {
    moveOn: "After one kill for Reaper Crew. Do a few extra only if you want the Bonecrusher maul or more prayer-switching practice."
  },
  silverquill: {
    moveOn: "After one kill for Reaper Crew. Extra kills are optional practice; it is not a required farm for the route."
  },
  hermod: {
    moveOn: "Farm Hermodic plates for Necromancy gear upgrades, then move on once the plates you need are covered."
  },
  "giant-mole": {
    moveOn: "After one kill for Reaper Crew. Use it as mechanics practice if useful; do not stay for drops."
  },
  barrows: {
    moveOn: "After the Reaper Crew kill and one unused Amulet of the Forsaken for Berserker's Fury. Farm full sets only if you want off-style armour or collection progress; Necromancy gear remains the main route."
  },
  "dagannoth-kings": {
    moveOn: "After one kill of each king for Reaper Crew. Berserker ring and dragon hatchet are useful optional farms."
  },
  "queen-black-dragon": {
    moveOn: "After one kill for Reaper Crew. Royal crossbow is an optional ranged sidegrade, not a blocker for Necromancy-first progression."
  },
  "corporeal-beast": {
    moveOn: "After one kill for Reaper Crew. Spirit shields are optional and not required for the main route."
  },
  "gwd1-graardor": {
    moveOn: "After one kill for Reaper Crew. Farm Bandos only if you want melee armour or components later."
  },
  "gwd1-kril": {
    moveOn: "After one kill for Reaper Crew. Subjugation is useful for magic/off-style progression, but not mandatory for the Necromancy-first path."
  },
  "gwd1-kreearra": {
    moveOn: "After one kill for Reaper Crew. Armadyl armour is optional ranged/off-style progression."
  },
  "gwd2-vindicta": {
    moveOn: "After one kill for Reaper Crew and Telos access. Dragon Rider Lance is useful, but optional if Necromancy is carrying progression."
  },
  "gwd2-helwyr": {
    moveOn: "After one kill for Reaper Crew and Telos access. Cywir wand/orb and Planted Feet components are optional unlocks."
  },
  "gwd2-twins-greg": {
    moveOn: "After at least one kill of each boss for Reaper Crew and Telos access. Farm weapons only if they support your next style goal."
  },
  araxxor: {
    moveOn: "After one kill for Reaper Crew. Noxious weapons are strong optional farms, but Necromancy can carry the route without forcing them here."
  },
  nex: {
    moveOn: "After one kill for Reaper Crew. Farm armour only if you need a specific off-style set or Nex components."
  },
  "kalphite-king": {
    moveOn: "After one kill for Reaper Crew. Drygores are optional melee progression, not a blocker for the Reaper Crew route."
  },
  legiones: {
    moveOn: "After the required Reaper Crew kills. Ascension crossbows are optional ranged progression and are a long ironman farm."
  },
  "ed1-full": {
    moveOn: "After one full clear for Reaper Crew. Mizuyari and other drops are optional side goals."
  },
  croesus: {
    moveOn: "After one kill for Reaper Crew. Cryptbloom is excellent defensive gear, but treat it as an optional long farm."
  },
  "kerapac-nm": {
    moveOn: "Farm Scripture of Jas and Greater Concentrated Blast if you want those PvM unlocks; otherwise one kill covers Reaper Crew and you can return later."
  },
  "ed2-full": {
    moveOn: "After one full clear for Reaper Crew. Farm codices later if melee becomes a priority."
  },
  "ed3-full": {
    moveOn: "After one full clear and Ambassador kill for Reaper Crew. Eldritch crossbow is optional ranged progression."
  },
  magister: {
    moveOn: "After one kill for Reaper Crew. Stay only if you are deliberately working on vital sparks/Limitless or khopeshes."
  },
  "tzkal-zuk": {
    moveOn: "After one normal-mode kill for Reaper Crew. Farm the Necromancy cape if it is realistic; return for other style capes and hard mode later."
  },
  raksha: {
    moveOn: "After one kill for Reaper Crew. Greater Ricochet/Greater Chain are excellent unlocks for other styles, but optional for Necromancy-first progression."
  },
  telos: {
    moveOn: "After one kill for Reaper Crew. Push enrage or farm T92s later if you specifically want traditional-style weapons."
  },
  "rise-of-the-six": {
    moveOn: "After one kill for Reaper Crew. Malevolent energy and shields are optional group-farm rewards."
  },
  "raids-bm-yaka": {
    moveOn: "After one Beastmaster and one Yakamaru kill for Reaper Crew. Codices and Achto are optional if your team is available."
  },
  "kerapac-hm": {
    moveOn: "After one hard-mode kill for Reaper Crew. Fractured Staff of Armadyl is a major magic goal, but not required before finishing the boss list."
  },
  "nex-aod": {
    moveOn: "After one kill for Reaper Crew. Farm Praesul codices only if your team setup makes AoD efficient and you want T99 curses before cleanup."
  },
  vorago: {
    moveOn: "After one kill for Reaper Crew. Seismics and tectonic energy are optional magic progression."
  },
  solak: {
    moveOn: "After one kill for Reaper Crew. Erethdor's Grimoire is a huge DPS item, but it is a separate farm from the achievement route."
  },
  zamorak: {
    moveOn: "After one kill for Reaper Crew. Farm later for Bow of the Last Guardian, codices, or Vestments if those become explicit goals."
  },
  "sanctum-of-rebirth": {
    moveOn: "After clearing Vermyx, Kezalam, and Nakatra for Reaper Crew. Farm weapons or Genesis shards later if they become priority upgrades."
  },
  "arch-glacor-hm": {
    moveOn: "After one hard-mode kill for Reaper Crew. Leng swords are optional melee progression."
  },
  "zemouregal-vorkath": {
    moveOn: "After one kill for Reaper Crew. Dracolich and Lord of Bones are useful, but not blockers for the main route."
  },
  amascut: {
    moveOn: "After one kill for Reaper Crew. Push enrage or farm Genesis shards only after the achievement path is secure."
  }
};

function applyRouteCopyRevisions() {
  const steps = PHASES.flatMap((phase) => phase.steps);
  for (const [stepId, revisions] of Object.entries(ROUTE_COPY_REVISIONS)) {
    const step = steps.find((candidate) => candidate.id === stepId);
    if (!step) continue;
    step.detail = { ...step.detail, ...revisions };
  }
}

applyRouteCopyRevisions();

const HIGH_VALUE_ROUTE_STEPS = new Set([
  "one-piercing-note",
  "reward-devotion",
  "necro-tutorial",
  "necro-5-quest",
  "kili-row",
  "reward-necro-t20",
  "dungeoneering-tokens",
  "reward-charming-imp",
  "world-wakes",
  "reward-sunshine-ds",
  "unlock-invention",
  "reward-basic-perks",
  "reward-barrows-armor",
  "archaeology-56",
  "reward-berserkers-fury",
  "temple-at-senntisten",
  "reward-curses",
  "overloads",
  "kerapac-nm",
  "gate-of-elidinis",
  "extinction",
  "reward-passive-rov",
  "advanced-perks",
  "train-necro-95",
  "tomes-of-the-warlock",
  "alpha-vs-omega",
  "necro-t90-gear",
  "rasial",
  "essence-of-finality",
  "limitless-ingenuity"
]);

const OPTIONAL_FARM_ROUTE_STEPS = new Set([
  "barrows",
  "gwd1-graardor",
  "gwd1-kril",
  "gwd1-kreearra",
  "gwd1-zilyana",
  "gwd2-vindicta",
  "gwd2-helwyr",
  "twin-furies",
  "gregorovic",
  "araxxor",
  "nex",
  "kalphite-king",
  "legiones",
  "cinderbanes-amulet-of-souls",
  "croesus",
  "archaeology-118",
  "ed2-black-stone-dragon",
  "ed3-ambassador",
  "magister",
  "raksha",
  "telos",
  "beastmaster-durzag",
  "yakamaru",
  "train-summoning-87",
  "train-summoning-90",
  "train-summoning-96",
  "kerapac-hm",
  "nex-aod",
  "vorago",
  "solak",
  "zamorak",
  "arch-glacor-hm",
  "amascut"
]);

const COMFORT_ROUTE_STEPS = new Set([
  "configure-interface",
  "unlock-lodestones",
  "free-items",
  "wars-retreat",
  "reward-bonecrusher-maul",
  "daily-weekly-setup",
  "player-owned-farm",
  "anachronia-base-camp"
]);

function applyRouteMetadata() {
  const steps = PHASES.flatMap((phase) => phase.steps ?? []);
  for (const step of steps) {
    if (HIGH_VALUE_ROUTE_STEPS.has(step.id)) {
      step.routeRole = "high-value-farm";
    } else if (OPTIONAL_FARM_ROUTE_STEPS.has(step.id)) {
      step.routeRole = "optional-farm";
    } else if (COMFORT_ROUTE_STEPS.has(step.id)) {
      step.routeRole = "comfort-qol";
    } else if (step.type === "boss") {
      step.routeRole = "reaper-kill";
    } else {
      step.routeRole = "required";
    }

    if (step.type === "boss") {
      step.verifiedAgainst = ["RS Wiki boss page", "PvME where available", "Reaper Crew tracker"];
    } else if (step.routeRole === "high-value-farm") {
      step.verifiedAgainst = ["RS Wiki", "PvM unlock guide", "PvME where available"];
    } else if (step.type === "quest" || step.type === "skill") {
      step.verifiedAgainst = ["RS Wiki", "Efficient Ironman Pathway where relevant"];
    } else {
      step.verifiedAgainst = ["RS Wiki", "Project route review"];
    }
  }
}

applyRouteMetadata();

const REAPER_CREW = [
  { name: "Ivar, King of Bones", stepIds: ["ivar"] },
  { name: "Silverquill, the Dreadhog", stepIds: ["silverquill"] },
  { name: "Flesh-hatcher Mhekarnahz", stepIds: ["mhekarnahz"] },
  { name: "Hermod, the Spirit of War", stepIds: ["hermod"] },
  { name: "Giant Mole", stepIds: ["giant-mole"] },
  { name: "The Barrows Brothers", stepIds: ["barrows"] },
  { name: "King Black Dragon", stepIds: ["king-black-dragon"] },
  { name: "Chaos Elemental", stepIds: ["chaos-elemental"] },
  { name: "Dagannoth Kings", stepIds: ["dagannoth-kings"] },
  { name: "Kalphite Queen", stepIds: ["kalphite-queen"] },
  { name: "Queen Black Dragon", stepIds: ["queen-black-dragon"] },
  { name: "Corporeal Beast", stepIds: ["corporeal-beast"] },
  { name: "TzTok-Jad", stepIds: ["tztok-jad"] },
  { name: "Har-Aken", stepIds: ["har-aken"] },
  { name: "Arch-Glacor", stepIds: ["arch-glacor-learner", "arch-glacor-nm5", "arch-glacor-hm"] },
  { name: "General Graardor", stepIds: ["gwd1-graardor"] },
  { name: "K'ril Tsutsaroth", stepIds: ["gwd1-kril"] },
  { name: "Kree'arra", stepIds: ["gwd1-kreearra"] },
  { name: "Commander Zilyana", stepIds: ["gwd1-zilyana"] },
  { name: "Vindicta & Gorvek", stepIds: ["gwd2-vindicta"] },
  { name: "Helwyr", stepIds: ["gwd2-helwyr"] },
  { name: "Twin Furies", stepIds: ["twin-furies"], legacyStepIds: ["gwd2-twins-greg"] },
  { name: "Gregorovic", stepIds: ["gregorovic"], legacyStepIds: ["gwd2-twins-greg"] },
  { name: "Rex Matriarchs", stepIds: ["rex-matriarchs"] },
  { name: "Osseous", stepIds: ["osseous"] },
  { name: "Araxxor / Araxxi", stepIds: ["araxxor"] },
  { name: "Nex", stepIds: ["nex"] },
  { name: "Kalphite King", stepIds: ["kalphite-king"] },
  { name: "Legiones", stepIds: ["legiones"] },
  { name: "Sanctum Guardian", stepIds: ["ed1-sanctum-guardian"], legacyStepIds: ["ed1-full"] },
  { name: "Masuta the Ascended", stepIds: ["ed1-masuta"], legacyStepIds: ["ed1-full"] },
  { name: "Seiryu the Azure Serpent", stepIds: ["ed1-seiryu"], legacyStepIds: ["ed1-full"] },
  { name: "Croesus", stepIds: ["croesus"] },
  { name: "Kerapac, the Bound", stepIds: ["kerapac-nm", "kerapac-hm"] },
  { name: "Astellarn", stepIds: ["ed2-astellarn"], legacyStepIds: ["ed2-full"] },
  { name: "Verak Lith", stepIds: ["ed2-verak-lith"], legacyStepIds: ["ed2-full"] },
  { name: "Black Stone Dragon", stepIds: ["ed2-black-stone-dragon"], legacyStepIds: ["ed2-full"] },
  { name: "Crassian Leviathan", stepIds: ["ed3-crassian-leviathan"], legacyStepIds: ["ed3-full"] },
  { name: "Taraket the Necromancer", stepIds: ["ed3-taraket"], legacyStepIds: ["ed3-full"] },
  { name: "The Ambassador", stepIds: ["ed3-ambassador"], legacyStepIds: ["ed3-full"] },
  { name: "The Magister", stepIds: ["magister"] },
  { name: "TzKal-Zuk", stepIds: ["tzkal-zuk"] },
  { name: "Raksha", stepIds: ["raksha"] },
  { name: "Telos, the Warden", stepIds: ["telos"] },
  { name: "Rise of the Six", stepIds: ["rise-of-the-six"] },
  { name: "Beastmaster Durzag", stepIds: ["beastmaster-durzag"], legacyStepIds: ["raids-bm-yaka"] },
  { name: "Yakamaru", stepIds: ["yakamaru"], legacyStepIds: ["raids-bm-yaka"] },
  { name: "Rasial", stepIds: ["rasial"] },
  { name: "Nex: Angel of Death", stepIds: ["nex-aod"] },
  { name: "Vorago", stepIds: ["vorago"] },
  { name: "Solak", stepIds: ["solak"] },
  { name: "Zamorak, Lord of Chaos", stepIds: ["zamorak"] },
  { name: "Vermyx, Brood Mother", stepIds: ["sanctum-vermyx"], legacyStepIds: ["sanctum-of-rebirth"] },
  { name: "Kezalam, the Wanderer", stepIds: ["sanctum-kezalam"], legacyStepIds: ["sanctum-of-rebirth"] },
  { name: "Nakatra, Devourer Eternal", stepIds: ["sanctum-nakatra"], legacyStepIds: ["sanctum-of-rebirth"] },
  { name: "Zemouregal & Vorkath", stepIds: ["zemouregal-vorkath"] },
  { name: "Amascut, the Devourer", stepIds: ["amascut"] },
  { name: "Gate of Elidinis", stepIds: ["gate-of-elidinis"] }
];
