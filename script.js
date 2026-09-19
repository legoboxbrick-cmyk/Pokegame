/* =====================================
   POKÉMON BATTLE v1.5
   FIRST 151 POKÉMON
===================================== */


/* =====================================
   FALLBACK POKÉMON
   Used if the API is unavailable
===================================== */

const fallbackPokemonData = {

    bulbasaur: {
        id: 1,
        name: "Bulbasaur",
        type: ["grass", "poison"],
        level: 5,
        hp: 120,
        attack: 49,
        defense: 49,
        spAttack: 65,
        spDefense: 65,
        speed: 45,

        moves: [
            {
                name: "Tackle",
                type: "normal",
                power: 40,
                accuracy: 100
            },
            {
                name: "Vine Whip",
                type: "grass",
                power: 45,
                accuracy: 100
            },
            {
                name: "Razor Leaf",
                type: "grass",
                power: 55,
                accuracy: 95
            },
            {
                name: "Poison Sting",
                type: "poison",
                power: 40,
                accuracy: 100
            }
        ]
    },

    charmander: {
        id: 4,
        name: "Charmander",
        type: ["fire"],
        level: 5,
        hp: 115,
        attack: 52,
        defense: 43,
        spAttack: 60,
        spDefense: 50,
        speed: 65,

        moves: [
            {
                name: "Scratch",
                type: "normal",
                power: 40,
                accuracy: 100
            },
            {
                name: "Ember",
                type: "fire",
                power: 40,
                accuracy: 100
            },
            {
                name: "Flame Burst",
                type: "fire",
                power: 55,
                accuracy: 100
            },
            {
                name: "Fire Fang",
                type: "fire",
                power: 65,
                accuracy: 95
            }
        ]
    },

    squirtle: {
        id: 7,
        name: "Squirtle",
        type: ["water"],
        level: 5,
        hp: 125,
        attack: 48,
        defense: 65,
        spAttack: 50,
        spDefense: 64,
        speed: 43,

        moves: [
            {
                name: "Tackle",
                type: "normal",
                power: 40,
                accuracy: 100
            },
            {
                name: "Water Gun",
                type: "water",
                power: 40,
                accuracy: 100
            },
            {
                name: "Bubble",
                type: "water",
                power: 45,
                accuracy: 100
            },
            {
                name: "Aqua Tail",
                type: "water",
                power: 60,
                accuracy: 90
            }
        ]
    },

    pikachu: {
        id: 25,
        name: "Pikachu",
        type: ["electric"],
        level: 5,
        hp: 105,
        attack: 55,
        defense: 40,
        spAttack: 50,
        spDefense: 50,
        speed: 90,

        moves: [
            {
                name: "Quick Attack",
                type: "normal",
                power: 40,
                accuracy: 100
            },
            {
                name: "Thunder Shock",
                type: "electric",
                power: 40,
                accuracy: 100
            },
            {
                name: "Spark",
                type: "electric",
                power: 55,
                accuracy: 100
            },
            {
                name: "Thunderbolt",
                type: "electric",
                power: 70,
                accuracy: 90
            }
        ]
    },

    eevee: {
        id: 133,
        name: "Eevee",
        type: ["normal"],
        level: 5,
        hp: 115,
        attack: 55,
        defense: 50,
        spAttack: 45,
        spDefense: 65,
        speed: 55,

        moves: [
            {
                name: "Tackle",
                type: "normal",
                power: 40,
                accuracy: 100
            },
            {
                name: "Quick Attack",
                type: "normal",
                power: 40,
                accuracy: 100
            },
            {
                name: "Bite",
                type: "normal",
                power: 60,
                accuracy: 100
            },
            {
                name: "Swift",
                type: "normal",
                power: 60,
                accuracy: 100
            }
        ]
    },

    gengar: {
        id: 94,
        name: "Gengar",
        type: ["ghost", "poison"],
        level: 5,
        hp: 110,
        attack: 65,
        defense: 60,
        spAttack: 130,
        spDefense: 75,
        speed: 110,

        moves: [
            {
                name: "Shadow Sneak",
                type: "ghost",
                power: 40,
                accuracy: 100
            },
            {
                name: "Lick",
                type: "ghost",
                power: 45,
                accuracy: 100
            },
            {
                name: "Sludge",
                type: "poison",
                power: 55,
                accuracy: 95
            },
            {
                name: "Shadow Ball",
                type: "ghost",
                power: 70,
                accuracy: 90
            }
        ]
    },

    lucario: {
        id: 448,
        name: "Lucario",
        type: ["fighting", "steel"],
        level: 5,
        hp: 120,
        attack: 70,
        defense: 55,
        spAttack: 115,
        spDefense: 70,
        speed: 90,

        moves: [
            {
                name: "Quick Attack",
                type: "normal",
                power: 40,
                accuracy: 100
            },
            {
                name: "Force Palm",
                type: "fighting",
                power: 60,
                accuracy: 100
            },
            {
                name: "Metal Claw",
                type: "steel",
                power: 50,
                accuracy: 95
            },
            {
                name: "Aura Sphere",
                type: "fighting",
                power: 75,
                accuracy: 90
            }
        ]
    },

    snorlax: {
        id: 143,
        name: "Snorlax",
        type: ["normal"],
        level: 5,
        hp: 170,
        attack: 70,
        defense: 60,
        spAttack: 65,
        spDefense: 110,
        speed: 25,

        moves: [
            {
                name: "Tackle",
                type: "normal",
                power: 40,
                accuracy: 100
            },
            {
                name: "Headbutt",
                type: "normal",
                power: 55,
                accuracy: 100
            },
            {
                name: "Body Slam",
                type: "normal",
                power: 70,
                accuracy: 95
            },
            {
                name: "Heavy Slam",
                type: "steel",
                power: 75,
                accuracy: 90
            }
        ]
    },

    mewtwo: {
        id: 150,
        name: "Mewtwo",
        type: ["psychic"],
        level: 5,
        hp: 130,
        attack: 80,
        defense: 60,
        spAttack: 154,
        spDefense: 90,
        speed: 100,

        moves: [
            {
                name: "Confusion",
                type: "psychic",
                power: 50,
                accuracy: 100
            },
            {
                name: "Swift",
                type: "normal",
                power: 60,
                accuracy: 100
            },
            {
                name: "Psybeam",
                type: "psychic",
                power: 65,
                accuracy: 95
            },
            {
                name: "Psychic",
                type: "psychic",
                power: 80,
                accuracy: 90
            }
        ]
    }

};


/* =====================================
   MAIN POKÉMON DATABASE
===================================== */

const pokemonData = {
    ...fallbackPokemonData
};


/* =====================================
   TYPE CHART
===================================== */

const typeChart = {

    normal: {
        rock: 0.5,
        ghost: 0,
        steel: 0.5
    },

    fire: {
        grass: 2,
        ice: 2,
        bug: 2,
        steel: 2,
        fire: 0.5,
        water: 0.5,
        rock: 0.5,
        dragon: 0.5
    },

    water: {
        fire: 2,
        ground: 2,
        rock: 2,
        water: 0.5,
        grass: 0.5,
        dragon: 0.5
    },

    electric: {
        water: 2,
        flying: 2,
        electric: 0.5,
        grass: 0.5,
        dragon: 0.5,
        ground: 0
    },

    grass: {
        water: 2,
        ground: 2,
        rock: 2,
        fire: 0.5,
        grass: 0.5,
        poison: 0.5,
        flying: 0.5,
        bug: 0.5,
        dragon: 0.5,
        steel: 0.5
    },

    ice: {
        grass: 2,
        ground: 2,
        flying: 2,
        dragon: 2,
        fire: 0.5,
        water: 0.5,
        ice: 0.5,
        steel: 0.5
    },

    fighting: {
        normal: 2,
        ice: 2,
        rock: 2,
        dark: 2,
        steel: 2,
        poison: 0.5,
        flying: 0.5,
        psychic: 0.5,
        bug: 0.5,
        fairy: 0.5,
        ghost: 0
    },

    poison: {
        grass: 2,
        fairy: 2,
        poison: 0.5,
        ground: 0.5,
        rock: 0.5,
        ghost: 0.5,
        steel: 0
    },

    ground: {
        fire: 2,
        electric: 2,
        poison: 2,
        rock: 2,
        steel: 2,
        grass: 0.5,
        bug: 0.5,
        flying: 0
    },

    flying: {
        grass: 2,
        fighting: 2,
        bug: 2,
        electric: 0.5,
        rock: 0.5,
        steel: 0.5
    },

    psychic: {
        fighting: 2,
        poison: 2,
        psychic: 0.5,
        steel: 0.5,
        dark: 0
    },

    bug: {
        grass: 2,
        psychic: 2,
        dark: 2,
        fire: 0.5,
        fighting: 0.5,
        poison: 0.5,
        flying: 0.5,
        ghost: 0.5,
        steel: 0.5,
        fairy: 0.5
    },

    rock: {
        fire: 2,
        ice: 2,
        flying: 2,
        bug: 2,
        fighting: 0.5,
        ground: 0.5,
        steel: 0.5
    },

    ghost: {
        psychic: 2,
        ghost: 2,
        dark: 0.5,
        normal: 0
    },

    dragon: {
        dragon: 2,
        steel: 0.5,
        fairy: 0
    },

    dark: {
        psychic: 2,
        ghost: 2,
        fighting: 0.5,
        dark: 0.5,
        fairy: 0.5
    },

    steel: {
        ice: 2,
        rock: 2,
        fairy: 2,
        fire: 0.5,
        water: 0.5,
        electric: 0.5,
        steel: 0.5
    },

    fairy: {
        fighting: 2,
        dragon: 2,
        dark: 2,
        fire: 0.5,
        poison: 0.5,
        steel: 0.5
    }

};


/* =====================================
   STORAGE
===================================== */

const SAVE_PREFIX =
    "pokemonBattle_save_";

const LEADERBOARD_KEY =
    "pokemonBattle_leaderboard";

const PLAYER_KEY =
    "pokemonBattle_player";

const POKEDEX_CACHE_KEY =
    "pokemonBattle_pokedex_151_v1";

const SAVE_COUNT = 3;


/* =====================================
   ELEMENTS
===================================== */

const startScreen =
    document.getElementById("start-screen");

const nameScreen =
    document.getElementById("name-screen");

const selectionScreen =
    document.getElementById("selection-screen");

const battleScreen =
    document.getElementById("battle-screen");

const resultScreen =
    document.getElementById("result-screen");

const saveScreen =
    document.getElementById("save-screen");

const leaderboardScreen =
    document.getElementById("leaderboard-screen");

const startButton =
    document.getElementById("start-button");

const loadGameButton =
    document.getElementById("load-game-button");

const leaderboardButton =
    document.getElementById("leaderboard-button");

const nameContinueButton =
    document.getElementById("name-continue-button");

const nameBackButton =
    document.getElementById("name-back-button");

const battleButton =
    document.getElementById("battle-button");

const playAgainButton =
    document.getElementById("play-again-button");

const newBattleButton =
    document.getElementById("new-battle-button");

const potionButton =
    document.getElementById("potion-button");

const saveBattleButton =
    document.getElementById("save-battle-button");

const saveSelectionButton =
    document.getElementById("save-selection-button");

const resultSaveButton =
    document.getElementById("result-save-button");

const resultHomeButton =
    document.getElementById("result-home-button");

const saveBackButton =
    document.getElementById("save-back-button");

const leaderboardBackButton =
    document.getElementById("leaderboard-back-button");

const leaderboardClearButton =
    document.getElementById(
        "leaderboard-clear-button"
    );

const pokemonGrid =
    document.getElementById("pokemon-grid");

const selectedText =
    document.getElementById("selected-text");

const movesContainer =
    document.getElementById("moves");

const battleMessage =
    document.getElementById("battle-message");

const logList =
    document.getElementById("log-list");

const battleArena =
    document.getElementById("battle-arena");

const effectLayer =
    document.getElementById("effect-layer");

const turnIndicator =
    document.getElementById("turn-indicator");

const playerImage =
    document.getElementById("player-image");

const enemyImage =
    document.getElementById("enemy-image");

const playerNameInput =
    document.getElementById("player-name-input");

const nameError =
    document.getElementById("name-error");

const saveSlots =
    document.getElementById("save-slots");

const leaderboardList =
    document.getElementById("leaderboard-list");

const slotModal =
    document.getElementById("slot-modal");

const modalTitle =
    document.getElementById("modal-title");

const modalMessage =
    document.getElementById("modal-message");

const modalConfirm =
    document.getElementById("modal-confirm");

const modalCancel =
    document.getElementById("modal-cancel");

const pokemonSearch =
    document.getElementById("pokemon-search");

const pokemonTypeFilter =
    document.getElementById("pokemon-type-filter");

const pokedexStatus =
    document.getElementById("pokedex-status");

const pokemonDetailsModal =
    document.getElementById(
        "pokemon-details-modal"
    );

const pokemonDetailsContent =
    document.getElementById(
        "pokemon-details-content"
    );

const pokemonDetailsClose =
    document.getElementById(
        "pokemon-details-close"
    );


/* =====================================
   GAME STATE
===================================== */

let playerPokemon = null;

let enemyPokemon = null;

let playerHP = 0;

let enemyHP = 0;

let playerMaxHP = 0;

let enemyMaxHP = 0;

let selectedPokemonKey = null;

let potions = 3;

let battleOver = false;

let turnLocked = false;

let playerName = "";

let playerWinsCount = 0;

let playerLossesCount = 0;

let currentSaveSlot = null;

let modalAction = null;

let pokedexReady = false;

let pokemonDetailsSelection = null;


/* =====================================
   MOVE POOL
===================================== */

const movePool = {

    normal: [
        {
            name: "Tackle",
            type: "normal",
            power: 40,
            accuracy: 100
        },
        {
            name: "Quick Attack",
            type: "normal",
            power: 40,
            accuracy: 100
        },
        {
            name: "Body Slam",
            type: "normal",
            power: 70,
            accuracy: 95
        }
    ],

    fire: [
        {
            name: "Ember",
            type: "fire",
            power: 40,
            accuracy: 100
        },
        {
            name: "Flame Charge",
            type: "fire",
            power: 50,
            accuracy: 100
        },
        {
            name: "Flamethrower",
            type: "fire",
            power: 90,
            accuracy: 90
        }
    ],

    water: [
        {
            name: "Water Gun",
            type: "water",
            power: 40,
            accuracy: 100
        },
        {
            name: "Bubble",
            type: "water",
            power: 40,
            accuracy: 100
        },
        {
            name: "Aqua Tail",
            type: "water",
            power: 90,
            accuracy: 90
        }
    ],

    electric: [
        {
            name: "Thunder Shock",
            type: "electric",
            power: 40,
            accuracy: 100
        },
        {
            name: "Spark",
            type: "electric",
            power: 65,
            accuracy: 100
        },
        {
            name: "Thunderbolt",
            type: "electric",
            power: 90,
            accuracy: 90
        }
    ],

    grass: [
        {
            name: "Vine Whip",
            type: "grass",
            power: 45,
            accuracy: 100
        },
        {
            name: "Razor Leaf",
            type: "grass",
            power: 55,
            accuracy: 95
        },
        {
            name: "Energy Ball",
            type: "grass",
            power: 90,
            accuracy: 90
        }
    ],

    ice: [
        {
            name: "Powder Snow",
            type: "ice",
            power: 40,
            accuracy: 100
        },
        {
            name: "Ice Shard",
            type: "ice",
            power: 40,
            accuracy: 100
        },
        {
            name: "Ice Beam",
            type: "ice",
            power: 90,
            accuracy: 90
        }
    ],

    fighting: [
        {
            name: "Rock Smash",
            type: "fighting",
            power: 40,
            accuracy: 100
        },
        {
            name: "Force Palm",
            type: "fighting",
            power: 60,
            accuracy: 100
        },
        {
            name: "Brick Break",
            type: "fighting",
            power: 75,
            accuracy: 95
        }
    ],

    poison: [
        {
            name: "Poison Sting",
            type: "poison",
            power: 40,
            accuracy: 100
        },
        {
            name: "Acid",
            type: "poison",
            power: 40,
            accuracy: 100
        },
        {
            name: "Sludge Bomb",
            type: "poison",
            power: 90,
            accuracy: 90
        }
    ],

    ground: [
        {
            name: "Mud-Slap",
            type: "ground",
            power: 40,
            accuracy: 100
        },
        {
            name: "Bulldoze",
            type: "ground",
            power: 60,
            accuracy: 100
        },
        {
            name: "Earthquake",
            type: "ground",
            power: 100,
            accuracy: 90
        }
    ],

    flying: [
        {
            name: "Gust",
            type: "flying",
            power: 40,
            accuracy: 100
        },
        {
            name: "Wing Attack",
            type: "flying",
            power: 60,
            accuracy: 100
        },
        {
            name: "Aerial Ace",
            type: "flying",
            power: 70,
            accuracy: 100
        }
    ],

    psychic: [
        {
            name: "Confusion",
            type: "psychic",
            power: 50,
            accuracy: 100
        },
        {
            name: "Psybeam",
            type: "psychic",
            power: 65,
            accuracy: 95
        },
        {
            name: "Psychic",
            type: "psychic",
            power: 90,
            accuracy: 90
        }
    ],

    bug: [
        {
            name: "Bug Bite",
            type: "bug",
            power: 60,
            accuracy: 100
        },
        {
            name: "Fury Cutter",
            type: "bug",
            power: 40,
            accuracy: 95
        },
        {
            name: "X-Scissor",
            type: "bug",
            power: 80,
            accuracy: 95
        }
    ],

    rock: [
        {
            name: "Rock Throw",
            type: "rock",
            power: 50,
            accuracy: 90
        },
        {
            name: "Rock Tomb",
            type: "rock",
            power: 60,
            accuracy: 95
        },
        {
            name: "Rock Slide",
            type: "rock",
            power: 75,
            accuracy: 90
        }
    ],

    ghost: [
        {
            name: "Lick",
            type: "ghost",
            power: 30,
            accuracy: 100
        },
        {
            name: "Shadow Sneak",
            type: "ghost",
            power: 40,
            accuracy: 100
        },
        {
            name: "Shadow Ball",
            type: "ghost",
            power: 80,
            accuracy: 95
        }
    ],

    dragon: [
        {
            name: "Dragon Rage",
            type: "dragon",
            power: 60,
            accuracy: 100
        },
        {
            name: "Dragon Breath",
            type: "dragon",
            power: 60,
            accuracy: 100
        },
        {
            name: "Dragon Claw",
            type: "dragon",
            power: 80,
            accuracy: 95
        }
    ],

    dark: [
        {
            name: "Bite",
            type: "dark",
            power: 60,
            accuracy: 100
        },
        {
            name: "Feint Attack",
            type: "dark",
            power: 60,
            accuracy: 100
        },
        {
            name: "Crunch",
            type: "dark",
            power: 80,
            accuracy: 95
        }
    ],

    steel: [
        {
            name: "Metal Claw",
            type: "steel",
            power: 50,
            accuracy: 95
        },
        {
            name: "Iron Head",
            type: "steel",
            power: 80,
            accuracy: 95
        },
        {
            name: "Flash Cannon",
            type: "steel",
            power: 80,
            accuracy: 90
        }
    ],

    fairy: [
        {
            name: "Fairy Wind",
            type: "fairy",
            power: 40,
            accuracy: 100
        },
        {
            name: "Draining Kiss",
            type: "fairy",
            power: 50,
            accuracy: 100
        },
        {
            name: "Dazzling Gleam",
            type: "fairy",
            power: 80,
            accuracy: 95
        }
    ]

};


/* =====================================
   IMAGE
===================================== */

function getPokemonImage(id) {

    return (
        "https://raw.githubusercontent.com/" +
        "PokeAPI/sprites/master/sprites/pokemon/" +
        "other/official-artwork/" +
        id +
        ".png"
    );

}


/* =====================================
   POKÉMON NAME
===================================== */

function formatPokemonName(name) {

    return String(name)
        .split("-")
        .map(
            part =>
                part.charAt(0).toUpperCase() +
                part.slice(1)
        )
        .join(" ");

}


/* =====================================
   CREATE GENERATED MOVES
===================================== */

function createGeneratedMoves(
    types,
    stats
) {

    const moves = [];

    const primaryType =
        types[0] || "normal";

    const secondaryType =
        types[1] || null;


    /* Normal move */

    moves.push({
        ...movePool.normal[
            stats.speed > 70
                ? 1
                : 0
        ]
    });


    /* Primary STAB */

    if (
        movePool[primaryType]
    ) {

        moves.push({
            ...movePool[primaryType][0]
        });

    }


    /* Secondary STAB */

    if (
        secondaryType &&
        movePool[secondaryType]
    ) {

        moves.push({
            ...movePool[secondaryType][1]
        });

    } else if (
        movePool[primaryType]
    ) {

        moves.push({
            ...movePool[primaryType][2]
        });

    }


    /* Strong move */

    if (
        movePool[primaryType]
    ) {

        moves.push({
            ...movePool[primaryType][2]
        });

    } else {

        moves.push({
            ...movePool.normal[2]
        });

    }


    return moves.slice(0, 4);

}


/* =====================================
   CONVERT API DATA
===================================== */

function convertAPIData(data) {

    const stats = {};

    data.stats.forEach(stat => {

        const name =
            stat.stat.name;

        stats[name] =
            Number(stat.base_stat) || 1;

    });


    const types =
        data.types
            .sort(
                (a, b) =>
                    a.slot - b.slot
            )
            .map(
                item =>
                    item.type.name
            );


    /*
       Scale HP so battles are still
       similar to the current game.
    */

    const battleHP =
        Math.max(
            70,
            Math.round(
                stats.hp * 1.55
            )
        );


    return {

        id: data.id,

        name:
            formatPokemonName(
                data.name
            ),

        type: types,

        level: 5,

        hp: battleHP,

        attack:
            stats.attack || 50,

        defense:
            stats.defense || 50,

        spAttack:
            stats["special-attack"] || 50,

        spDefense:
            stats["special-defense"] || 50,

        speed:
            stats.speed || 50,

        height:
            data.height || 0,

        weight:
            data.weight || 0,

        moves:
            createGeneratedMoves(
                types,
                stats
            )

    };

}


/* =====================================
   LOAD CACHED POKÉDEX
===================================== */

function loadCachedPokedex() {

    const raw =
        localStorage.getItem(
            POKEDEX_CACHE_KEY
        );

    if (!raw) {
        return false;
    }

    try {

        const cached =
            JSON.parse(raw);

        if (
            !cached ||
            !Array.isArray(cached)
        ) {
            return false;
        }

        if (
            cached.length < 151
        ) {
            return false;
        }

        cached.forEach(pokemon => {

            const key =
                `pokemon-${pokemon.id}`;

            pokemonData[key] =
                pokemon;

        });

        pokedexReady = true;

        return true;

    } catch (error) {

        console.error(
            "Could not load cached Pokédex:",
            error
        );

        return false;

    }

}


/* =====================================
   FETCH ONE POKÉMON
===================================== */

async function fetchPokemon(id) {

    const response =
        await fetch(
            `https://pokeapi.co/api/v2/pokemon/${id}`
        );

    if (!response.ok) {

        throw new Error(
            `Pokémon ${id} failed`
        );

    }

    return response.json();

}


/* =====================================
   LOAD FIRST 151
===================================== */

async function loadFirst151Pokemon() {

    /*
       First try cache.
    */

    if (
        loadCachedPokedex()
    ) {

        pokedexStatus.textContent =
            "151 Pokémon ready • Loaded from your local cache.";

        pokedexReady = true;

        createPokemonCards();

        return;

    }


    pokedexStatus.textContent =
        "Loading Pokémon #001–#151... 0 / 151";


    const results = [];

    const batchSize = 15;


    try {

        for (
            let start = 1;
            start <= 151;
            start += batchSize
        ) {

            const ids = [];

            for (
                let id = start;
                id < start + batchSize && id <= 151;
                id++
            ) {

                ids.push(id);

            }


            const batch =
                await Promise.all(
                    ids.map(
                        id =>
                            fetchPokemon(id)
                    )
                );


            batch.forEach(data => {

                results.push(
                    convertAPIData(data)
                );

            });


            pokedexStatus.textContent =
                `Loading Pokémon #001–#151... ${results.length} / 151`;

        }


        results.sort(
            (a, b) =>
                a.id - b.id
        );


        /*
           Store complete data locally.
        */

        localStorage.setItem(
            POKEDEX_CACHE_KEY,
            JSON.stringify(results)
        );


        /*
           Add all 151 to game database.
        */

        results.forEach(pokemon => {

            pokemonData[
                `pokemon-${pokemon.id}`
            ] = pokemon;

        });


        /*
           Add name aliases for the original
           save system.
        */

        results.forEach(pokemon => {

            const key =
                pokemon.name
                    .toLowerCase()
                    .replace(
                        /[^a-z0-9]+/g,
                        "-"
                    );

            pokemonData[key] =
                pokemon;

        });


        pokedexReady = true;

        pokedexStatus.textContent =
            "151 Pokémon ready! Search by name or Pokédex number.";

        createPokemonCards();

    } catch (error) {

        console.error(
            "Pokédex loading error:",
            error
        );


        pokedexReady = false;

        pokedexStatus.textContent =
            "Could not load the full Pokédex. Offline Pokémon are available.";

        createPokemonCards();

    }

}


/* =====================================
   SCREEN
===================================== */

function showScreen(screen) {

    document
        .querySelectorAll(".screen")
        .forEach(item => {

            item.classList.remove("active");

        });

    screen.classList.add("active");

    window.scrollTo(0, 0);

}


/* =====================================
   PLAYER PROFILE
===================================== */

function loadPlayerProfile() {

    const saved =
        localStorage.getItem(
            PLAYER_KEY
        );

    if (!saved) {
        return;
    }

    try {

        const profile =
            JSON.parse(saved);

        playerName =
            profile.name || "";

        playerWinsCount =
            Number(profile.wins) || 0;

        playerLossesCount =
            Number(profile.losses) || 0;

    } catch (error) {

        console.error(
            "Could not load player profile:",
            error
        );

    }

}


function savePlayerProfile() {

    localStorage.setItem(
        PLAYER_KEY,
        JSON.stringify({

            name:
                playerName,

            wins:
                playerWinsCount,

            losses:
                playerLossesCount

        })
    );

    updatePlayerNameUI();

}


function updatePlayerNameUI() {

    const displayName =
        playerName || "Trainer";

    document.getElementById(
        "start-player-name"
    ).textContent =
        displayName;

    document.getElementById(
        "selection-player-name"
    ).textContent =
        displayName;

    document.getElementById(
        "battle-player-name"
    ).textContent =
        displayName.toUpperCase();

    document.getElementById(
        "result-player-name"
    ).textContent =
        displayName;

    document.getElementById(
        "result-wins"
    ).textContent =
        playerWinsCount;

    document.getElementById(
        "result-losses"
    ).textContent =
        playerLossesCount;

}


/* =====================================
   START NEW PROFILE
===================================== */

function openNameScreen() {

    playerNameInput.value =
        playerName || "";

    nameError.textContent = "";

    showScreen(
        nameScreen
    );

    setTimeout(() => {

        playerNameInput.focus();

    }, 100);

}


function createNewProfile() {

    const name =
        playerNameInput.value
            .trim()
            .replace(/\s+/g, " ");

    if (!name) {

        nameError.textContent =
            "Please enter a trainer name.";

        return;

    }

    if (name.length < 2) {

        nameError.textContent =
            "Your name must be at least 2 characters.";

        return;

    }

    playerName =
        name.slice(0, 16);

    playerWinsCount = 0;

    playerLossesCount = 0;

    selectedPokemonKey = null;

    currentSaveSlot = null;

    savePlayerProfile();

    createPokemonCards();

    showScreen(
        selectionScreen
    );

}


/* =====================================
   FILTER POKÉMON
===================================== */

function getFilteredPokemon() {

    const search =
        pokemonSearch.value
            .trim()
            .toLowerCase();

    const type =
        pokemonTypeFilter.value;


    const uniquePokemon =
        Object.values(pokemonData)
            .filter(
                pokemon =>
                    pokemon &&
                    pokemon.id >= 1 &&
                    pokemon.id <= 151
            )
            .reduce(
                (map, pokemon) => {

                    map[pokemon.id] =
                        pokemon;

                    return map;

                },
                {}
            );


    return Object.values(
        uniquePokemon
    )
        .sort(
            (a, b) =>
                a.id - b.id
        )
        .filter(pokemon => {

            const matchesSearch =
                !search ||
                pokemon.name
                    .toLowerCase()
                    .includes(search) ||
                String(pokemon.id)
                    .includes(search);


            const matchesType =
                type === "all" ||
                pokemon.type.includes(type);


            return (
                matchesSearch &&
                matchesType
            );

        });

}


/* =====================================
   POKÉMON CARDS
===================================== */

function createPokemonCards() {

    pokemonGrid.innerHTML = "";


    const pokemonList =
        getFilteredPokemon();


    const allPokemon =
        Object.values(pokemonData)
            .filter(
                pokemon =>
                    pokemon &&
                    pokemon.id >= 1 &&
                    pokemon.id <= 151
            );


    const uniqueCount =
        new Set(
            allPokemon.map(
                pokemon =>
                    pokemon.id
            )
        ).size;


    if (
        pokemonList.length === 0
    ) {

        pokemonGrid.innerHTML = `

            <div class="pokemon-empty">

                <strong>
                    No Pokémon found
                </strong>

                Try another name,
                number, or type.

            </div>

        `;

    }


    pokemonList.forEach(
        pokemon => {

            const key =
                `pokemon-${pokemon.id}`;


            const card =
                document.createElement("div");

            card.className =
                "pokemon-card";

            card.dataset.key =
                key;


            if (
                selectedPokemonKey === key ||
                (
                    selectedPokemonKey &&
                    pokemonData[
                        selectedPokemonKey
                    ] === pokemon
                )
            ) {

                card.classList.add(
                    "selected"
                );

            }


            const types =
                pokemon.type
                    .map(type => {

                        return `

                            <span
                                class="type-badge type-${type}"
                            >
                                ${type}
                            </span>

                        `;

                    })
                    .join("");


            card.innerHTML = `

                <div class="pokemon-number">
                    #${String(
                        pokemon.id
                    ).padStart(3, "0")}
                </div>

                <img
                    src="${getPokemonImage(
                        pokemon.id
                    )}"
                    alt="${escapeHTML(
                        pokemon.name
                    )}"
                    loading="lazy"
                >

                <h3>
                    ${escapeHTML(
                        pokemon.name
                    )}
                </h3>

                <div class="type-badges">
                    ${types}
                </div>

                <div class="pokemon-card-stats">

                    <div class="stat-chip">
                        HP
                        <strong>
                            ${pokemon.hp}
                        </strong>
                    </div>

                    <div class="stat-chip">
                        ATK
                        <strong>
                            ${pokemon.attack}
                        </strong>
                    </div>

                    <div class="stat-chip">
                        DEF
                        <strong>
                            ${pokemon.defense}
                        </strong>
                    </div>

                    <div class="stat-chip">
                        SPD
                        <strong>
                            ${pokemon.speed}
                        </strong>
                    </div>

                </div>

            `;


            card.addEventListener(
                "click",
                event => {

                    /*
                       Clicking a card selects it.
                    */

                    selectPokemon(key);

                    /*
                       Double click opens details.
                    */

                }
            );


            card.addEventListener(
                "dblclick",
                () => {

                    openPokemonDetails(
                        pokemon
                    );

                }
            );


            pokemonGrid.appendChild(
                card
            );

        }
    );


    pokedexStatus.textContent =
        pokedexReady
            ? `Showing ${pokemonList.length} of ${uniqueCount} Pokémon. Double-click a Pokémon for full stats.`
            : `Showing ${pokemonList.length} Pokémon available offline.`;

}


/* =====================================
   SELECT POKÉMON
===================================== */

function selectPokemon(key) {

    const pokemon =
        pokemonData[key];

    if (!pokemon) {
        return;
    }


    selectedPokemonKey =
        key;


    document
        .querySelectorAll(
            ".pokemon-card"
        )
        .forEach(card => {

            card.classList.remove(
                "selected"
            );

        });


    const card =
        document.querySelector(
            `.pokemon-card[data-key="${key}"]`
        );


    if (card) {

        card.classList.add(
            "selected"
        );

    }


    selectedText.textContent =
        `${pokemon.name} is ready for battle!`;


    battleButton.disabled =
        false;

}


/* =====================================
   POKÉMON DETAILS
===================================== */

function openPokemonDetails(
    pokemon
) {

    pokemonDetailsSelection =
        pokemon;


    const stats = [

        {
            name: "HP",
            value: pokemon.hp
        },

        {
            name: "Attack",
            value: pokemon.attack
        },

        {
            name: "Defense",
            value: pokemon.defense
        },

        {
            name: "Sp. Atk",
            value: pokemon.spAttack
        },

        {
            name: "Sp. Def",
            value: pokemon.spDefense
        },

        {
            name: "Speed",
            value: pokemon.speed
        }

    ];


    const total =
        stats.reduce(
            (sum, stat) =>
                sum + Number(stat.value),
            0
        );


    const types =
        pokemon.type
            .map(
                type =>
                    `

                    <span
                        class="type-badge type-${type}"
                    >
                        ${type}
                    </span>

                    `
            )
            .join("");


    const statsHTML =
        stats.map(stat => {

            const percentage =
                Math.min(
                    100,
                    (
                        Number(stat.value) /
                        160
                    ) * 100
                );


            return `

                <div class="details-stat-row">

                    <span class="details-stat-name">
                        ${stat.name}
                    </span>

                    <span class="details-stat-value">
                        ${stat.value}
                    </span>

                    <div class="details-stat-bar">

                        <div
                            class="details-stat-fill"
                            style="width:${percentage}%"
                        ></div>

                    </div>

                </div>

            `;

        }).join("");


    const height =
        pokemon.height
            ? `${(
                pokemon.height /
                10
            ).toFixed(1)} m`
            : "—";


    const weight =
        pokemon.weight
            ? `${(
                pokemon.weight /
                10
            ).toFixed(1)} kg`
            : "—";


    pokemonDetailsContent.innerHTML = `

        <div class="details-top">

            <img
                class="details-image"
                src="${getPokemonImage(
                    pokemon.id
                )}"
                alt="${escapeHTML(
                    pokemon.name
                )}"
            >

            <div>

                <div class="details-number">
                    #${String(
                        pokemon.id
                    ).padStart(3, "0")}
                </div>

                <h2 class="details-name">
                    ${escapeHTML(
                        pokemon.name
                    )}
                </h2>

                <div class="details-types">
                    ${types}
                </div>

                <div class="details-measurements">

                    <div class="measurement">
                        📏 ${height}
                    </div>

                    <div class="measurement">
                        ⚖️ ${weight}
                    </div>

                </div>

            </div>

        </div>


        <div class="details-section-title">
            BASE STATS
        </div>

        <div class="details-stats">
            ${statsHTML}
        </div>

        <div class="details-total">
            BASE STAT TOTAL: ${total}
        </div>


        <div class="details-actions">

            <button
                id="details-select-button"
                class="main-button"
            >
                SELECT THIS POKÉMON
            </button>

        </div>

    `;


    document
        .getElementById(
            "details-select-button"
        )
        .addEventListener(
            "click",
            () => {

                const key =
                    `pokemon-${pokemon.id}`;

                selectPokemon(key);

                closePokemonDetails();

            }
        );


    pokemonDetailsModal.classList.add(
        "active"
    );

}


/* =====================================
   CLOSE DETAILS
===================================== */

function closePokemonDetails() {

    pokemonDetailsModal.classList.remove(
        "active"
    );

    pokemonDetailsSelection =
        null;

}


/* =====================================
   RANDOM ENEMY
===================================== */

function chooseEnemy() {

    const keys =
        Object.keys(pokemonData)
            .filter(key => {

                const pokemon =
                    pokemonData[key];

                return (
                    pokemon &&
                    pokemon.id >= 1 &&
                    pokemon.id <= 151 &&
                    key !== selectedPokemonKey
                );

            });


    /*
       Remove duplicate aliases by ID.
    */

    const uniqueKeys =
        keys.filter(
            (key, index, array) => {

                const id =
                    pokemonData[key].id;

                return (
                    array.findIndex(
                        otherKey =>
                            pokemonData[
                                otherKey
                            ].id === id
                    ) === index
                );

            }
        );


    return uniqueKeys[
        Math.floor(
            Math.random() *
            uniqueKeys.length
        )
    ];

}


/* =====================================
   START BATTLE
===================================== */

function startBattle() {

    if (
        !selectedPokemonKey
    ) {
        return;
    }


    playerPokemon =
        pokemonData[
            selectedPokemonKey
        ];


    if (!playerPokemon) {
        return;
    }


    const enemyKey =
        chooseEnemy();


    enemyPokemon =
        pokemonData[
            enemyKey
        ];


    playerMaxHP =
        playerPokemon.hp;

    enemyMaxHP =
        enemyPokemon.hp;

    playerHP =
        playerMaxHP;

    enemyHP =
        enemyMaxHP;

    potions = 3;

    battleOver = false;

    turnLocked = false;


    setupBattleUI();


    showScreen(
        battleScreen
    );

}


/* =====================================
   SETUP BATTLE UI
===================================== */

function setupBattleUI() {

    document.getElementById(
        "player-name"
    ).textContent =
        playerPokemon.name;

    document.getElementById(
        "enemy-name"
    ).textContent =
        enemyPokemon.name;

    document.getElementById(
        "player-level"
    ).textContent =
        `Lv. ${playerPokemon.level}`;

    document.getElementById(
        "enemy-level"
    ).textContent =
        `Lv. ${enemyPokemon.level}`;

    document.getElementById(
        "player-types"
    ).textContent =
        playerPokemon.type.join(" / ");

    document.getElementById(
        "enemy-types"
    ).textContent =
        enemyPokemon.type.join(" / ");


    playerImage.src =
        getPokemonImage(
            playerPokemon.id
        );

    enemyImage.src =
        getPokemonImage(
            enemyPokemon.id
        );


    playerImage.className =
        "battle-pokemon player-image player-enter";

    enemyImage.className =
        "battle-pokemon enemy-image enemy-enter";


    logList.innerHTML = "";

    effectLayer.innerHTML = "";


    updateHPBars();

    updatePotionButton();

    createMoveButtons();


    setBattleMessage(
        `Go, ${playerPokemon.name}!`
    );


    addLog(
        `A wild ${enemyPokemon.name} appeared!`
    );


    setTurnIndicator(
        "YOUR TURN"
    );

}


/* =====================================
   MOVE BUTTONS
===================================== */

function createMoveButtons() {

    movesContainer.innerHTML = "";


    playerPokemon.moves
        .forEach(
            (move, index) => {

                const button =
                    document.createElement(
                        "button"
                    );


                button.className =
                    `move-button move-${move.type}`;


                button.innerHTML = `

                    <span class="move-name">
                        ${escapeHTML(
                            move.name
                        )}
                    </span>

                    <span class="move-info">
                        ${move.type.toUpperCase()}
                        • POWER ${move.power}
                        • ${move.accuracy}% ACC
                    </span>

                `;


                button.addEventListener(
                    "click",
                    () =>
                        useMove(index)
                );


                movesContainer.appendChild(
                    button
                );

            }
        );

}


/* =====================================
   TYPE EFFECTIVENESS
===================================== */

function getEffectiveness(
    moveType,
    defender
) {

    let multiplier = 1;


    defender.type.forEach(
        defenderType => {

            if (
                typeChart[moveType] &&
                typeChart[moveType][
                    defenderType
                ] !== undefined
            ) {

                multiplier *=
                    typeChart[
                        moveType
                    ][
                        defenderType
                    ];

            }

        }
    );


    return multiplier;

}


/* =====================================
   DAMAGE
===================================== */

function calculateDamage(
    attacker,
    defender,
    move
) {

    const effectiveness =
        getEffectiveness(
            move.type,
            defender
        );


    const stab =
        attacker.type.includes(
            move.type
        )
            ? 1.5
            : 1;


    const critical =
        Math.random() < 0.08
            ? 1.5
            : 1;


    const random =
        0.85 +
        Math.random() * 0.15;


    const baseDamage =
        (
            (
                (
                    2 *
                    attacker.level /
                    5
                ) +
                2
            ) *
            move.power *
            (
                attacker.attack /
                Math.max(
                    1,
                    defender.defense
                )
            )
        ) / 10 + 2;


    const damage =
        Math.max(
            1,
            Math.floor(
                baseDamage *
                stab *
                effectiveness *
                critical *
                random
            )
        );


    return {

        damage,

        effectiveness,

        critical

    };

}


/* =====================================
   USE MOVE
===================================== */

function useMove(
    moveIndex
) {

    if (
        battleOver ||
        turnLocked ||
        playerHP <= 0 ||
        enemyHP <= 0
    ) {
        return;
    }


    turnLocked = true;

    disableBattleControls(
        true
    );


    const move =
        playerPokemon.moves[
            moveIndex
        ];


    const playerFirst =
        playerPokemon.speed >=
        enemyPokemon.speed;


    setTurnIndicator(
        playerFirst
            ? "YOUR TURN"
            : "ENEMY TURN"
    );


    if (playerFirst) {

        performAttack(
            playerPokemon,
            enemyPokemon,
            move,
            true,
            () => {

                if (
                    battleOver ||
                    enemyHP <= 0
                ) {
                    return;
                }


                setTimeout(
                    () => {

                        performEnemyTurn();

                    },
                    650
                );

            }
        );

    } else {

        setTurnIndicator(
            "ENEMY TURN"
        );


        setTimeout(
            () => {

                performEnemyTurn(
                    () => {

                        if (
                            battleOver ||
                            playerHP <= 0
                        ) {
                            return;
                        }


                        setTimeout(
                            () => {

                                performAttack(
                                    playerPokemon,
                                    enemyPokemon,
                                    move,
                                    true,
                                    finishTurn
                                );

                            },
                            650
                        );

                    }
                );

            },
            450
        );

    }

}


/* =====================================
   PLAYER / ENEMY ATTACK
===================================== */

function performAttack(
    attacker,
    defender,
    move,
    isPlayer,
    onComplete
) {

    if (battleOver) {
        return;
    }


    const attackerImage =
        isPlayer
            ? playerImage
            : enemyImage;


    const defenderImage =
        isPlayer
            ? enemyImage
            : playerImage;


    setBattleMessage(
        `${attacker.name} used ${move.name}!`
    );


    addLog(
        `${attacker.name} used ${move.name}.`
    );


    attackerImage.classList.remove(
        "attack-player",
        "attack-enemy"
    );


    void attackerImage.offsetWidth;


    attackerImage.classList.add(
        isPlayer
            ? "attack-player"
            : "attack-enemy"
    );


    setTimeout(
        () => {

            const hit =
                Math.random() * 100 <=
                move.accuracy;


            if (!hit) {

                setBattleMessage(
                    `${attacker.name}'s attack missed!`
                );


                addLog(
                    "The attack missed!"
                );


                setTimeout(
                    onComplete,
                    650
                );


                return;

            }


            const result =
                calculateDamage(
                    attacker,
                    defender,
                    move
                );


            if (isPlayer) {

                enemyHP =
                    Math.max(
                        0,
                        enemyHP -
                        result.damage
                    );

            } else {

                playerHP =
                    Math.max(
                        0,
                        playerHP -
                        result.damage
                    );

            }


            updateHPBars();


            defenderImage.classList.remove(
                "hit"
            );


            void defenderImage.offsetWidth;


            defenderImage.classList.add(
                "hit"
            );


            battleArena.classList.remove(
                "shake"
            );


            void battleArena.offsetWidth;


            battleArena.classList.add(
                "shake"
            );


            showDamageNumber(
                result.damage,
                isPlayer,
                result.critical > 1
            );


            let message =
                `${defender.name} took ${result.damage} damage!`;


            if (
                result.effectiveness === 0
            ) {

                message =
                    `${defender.name} is immune to the attack!`;


                showEffectText(
                    "NO EFFECT!"
                );

            } else if (
                result.effectiveness > 1
            ) {

                message +=
                    " Super effective!";


                showEffectText(
                    "SUPER EFFECTIVE!"
                );

            } else if (
                result.effectiveness < 1
            ) {

                message +=
                    " Not very effective...";


                showEffectText(
                    "NOT VERY EFFECTIVE"
                );

            }


            if (
                result.critical > 1
            ) {

                message +=
                    " Critical hit!";


                showEffectText(
                    "CRITICAL HIT!"
                );

            }


            setTimeout(
                () => {

                    setBattleMessage(
                        message
                    );


                    addLog(
                        message
                    );

                },
                150
            );


            if (
                (
                    isPlayer &&
                    enemyHP <= 0
                ) ||
                (
                    !isPlayer &&
                    playerHP <= 0
                )
            ) {

                setTimeout(
                    () => {

                        defenderImage.classList.add(
                            "faint"
                        );


                        if (isPlayer) {

                            playerWins();

                        } else {

                            playerLoses();

                        }

                    },
                    750
                );


                return;

            }


            setTimeout(
                onComplete,
                750
            );

        },
        300
    );

}


/* =====================================
   ENEMY TURN
===================================== */

function performEnemyTurn(
    onComplete = finishTurn
) {

    if (
        battleOver ||
        enemyHP <= 0
    ) {
        return;
    }


    setTurnIndicator(
        "ENEMY TURN"
    );


    const moveIndex =
        Math.floor(
            Math.random() *
            enemyPokemon.moves.length
        );


    const move =
        enemyPokemon.moves[
            moveIndex
        ];


    performAttack(
        enemyPokemon,
        playerPokemon,
        move,
        false,
        () => {

            if (
                battleOver ||
                playerHP <= 0
            ) {
                return;
            }


            setTimeout(
                onComplete,
                300
            );

        }
    );

}


/* =====================================
   FINISH TURN
===================================== */

function finishTurn() {

    if (battleOver) {
        return;
    }


    turnLocked = false;


    disableBattleControls(
        false
    );


    setTurnIndicator(
        "YOUR TURN"
    );


    setBattleMessage(
        `What will ${playerPokemon.name} do?`
    );

}


/* =====================================
   POTION
===================================== */

function usePotion() {

    if (
        battleOver ||
        turnLocked ||
        potions <= 0 ||
        playerHP >= playerMaxHP
    ) {
        return;
    }


    turnLocked = true;


    disableBattleControls(
        true
    );


    potions--;


    const oldHP =
        playerHP;


    playerHP =
        Math.min(
            playerMaxHP,
            playerHP + 35
        );


    const healed =
        playerHP - oldHP;


    updateHPBars();

    updatePotionButton();


    potionButton.classList.remove(
        "potion-use"
    );


    void potionButton.offsetWidth;


    potionButton.classList.add(
        "potion-use"
    );


    setBattleMessage(
        `${playerPokemon.name} recovered ${healed} HP!`
    );


    addLog(
        `You used a Potion and recovered ${healed} HP.`
    );


    showEffectText(
        `+${healed} HP`
    );


    setTimeout(
        () => {

            if (
                enemyHP <= 0 ||
                battleOver
            ) {
                return;
            }


            performEnemyTurn(
                finishTurn
            );

        },
        850
    );

}


/* =====================================
   HP BARS
===================================== */

function updateHPBars() {

    if (
        playerMaxHP <= 0 ||
        enemyMaxHP <= 0
    ) {
        return;
    }


    const playerPercent =
        (
            playerHP /
            playerMaxHP
        ) * 100;


    const enemyPercent =
        (
            enemyHP /
            enemyMaxHP
        ) * 100;


    const playerBar =
        document.getElementById(
            "player-hp"
        );


    const enemyBar =
        document.getElementById(
            "enemy-hp"
        );


    playerBar.style.width =
        `${playerPercent}%`;


    enemyBar.style.width =
        `${enemyPercent}%`;


    updateHPColor(
        playerBar,
        playerPercent
    );


    updateHPColor(
        enemyBar,
        enemyPercent
    );


    document.getElementById(
        "player-hp-text"
    ).textContent =
        `${playerHP} / ${playerMaxHP}`;


    document.getElementById(
        "enemy-hp-text"
    ).textContent =
        `${enemyHP} / ${enemyMaxHP}`;


    updatePotionButton();

}


/* =====================================
   HP COLORS
===================================== */

function updateHPColor(
    bar,
    percent
) {

    bar.classList.remove(
        "medium",
        "low"
    );


    if (
        percent <= 25
    ) {

        bar.classList.add(
            "low"
        );

    } else if (
        percent <= 50
    ) {

        bar.classList.add(
            "medium"
        );

    }

}


/* =====================================
   DAMAGE NUMBER
===================================== */

function showDamageNumber(
    damage,
    targetIsEnemy,
    critical
) {

    const number =
        document.createElement(
            "div"
        );


    number.className =
        "damage-number";


    if (critical) {

        number.classList.add(
            "critical"
        );

    }


    number.textContent =
        `-${damage}`;


    if (targetIsEnemy) {

        number.style.left =
            "72%";

        number.style.top =
            "36%";

    } else {

        number.style.left =
            "28%";

        number.style.top =
            "68%";

    }


    effectLayer.appendChild(
        number
    );


    setTimeout(
        () => {

            number.remove();

        },
        950
    );

}


/* =====================================
   EFFECT TEXT
===================================== */

function showEffectText(
    text
) {

    const element =
        document.createElement(
            "div"
        );


    element.className =
        "effect-text";


    element.textContent =
        text;


    effectLayer.appendChild(
        element
    );


    setTimeout(
        () => {

            element.remove();

        },
        1000
    );

}


/* =====================================
   BATTLE CONTROLS
===================================== */

function disableBattleControls(
    disabled
) {

    document
        .querySelectorAll(
            ".move-button"
        )
        .forEach(
            button => {

                button.disabled =
                    disabled;

            }
        );


    potionButton.disabled =
        disabled ||
        potions <= 0 ||
        playerHP >= playerMaxHP ||
        battleOver;


    if (saveBattleButton) {

        saveBattleButton.disabled =
            false;

    }

}


/* =====================================
   POTION BUTTON
===================================== */

function updatePotionButton() {

    document.getElementById(
        "potion-count"
    ).textContent =
        potions;


    potionButton.disabled =
        turnLocked ||
        potions <= 0 ||
        playerHP >= playerMaxHP ||
        battleOver;

}


/* =====================================
   TURN INDICATOR
===================================== */

function setTurnIndicator(
    text
) {

    turnIndicator.textContent =
        text;


    turnIndicator.classList.toggle(
        "enemy-turn",
        text === "ENEMY TURN"
    );

}


/* =====================================
   MESSAGE
===================================== */

function setBattleMessage(
    message
) {

    battleMessage.textContent =
        message;

}


/* =====================================
   LOG
===================================== */

function addLog(
    message
) {

    const entry =
        document.createElement(
            "div"
        );


    entry.className =
        "log-entry";


    entry.textContent =
        message;


    logList.prepend(
        entry
    );

}


/* =====================================
   SAVE DATA
===================================== */

function createSaveData() {

    return {

        version: 2,

        playerName,

        wins:
            playerWinsCount,

        losses:
            playerLossesCount,

        selectedPokemonKey,

        playerHP,

        enemyHP,

        playerMaxHP,

        enemyMaxHP,

        potions,

        battleOver,

        playerPokemonKey:
            playerPokemon
                ? findPokemonKey(
                    playerPokemon
                )
                : null,

        enemyPokemonKey:
            enemyPokemon
                ? findPokemonKey(
                    enemyPokemon
                )
                : null,

        savedAt:
            new Date().toISOString()

    };

}


function findPokemonKey(
    pokemon
) {

    if (!pokemon) {
        return null;
    }


    return (
        `pokemon-${pokemon.id}`
    );

}


function resolvePokemonKey(
    key
) {

    if (!key) {
        return null;
    }


    if (
        pokemonData[key]
    ) {

        return pokemonData[key];

    }


    const clean =
        String(key)
            .toLowerCase()
            .replace(
                /[^a-z0-9]+/g,
                "-"
            );


    if (
        pokemonData[clean]
    ) {

        return pokemonData[clean];

    }


    const numeric =
        Number(
            String(key)
                .replace(
                    "pokemon-",
                    ""
                )
        );


    if (
        Number.isFinite(numeric)
    ) {

        const found =
            Object.values(
                pokemonData
            ).find(
                pokemon =>
                    pokemon &&
                    pokemon.id === numeric
            );


        if (found) {
            return found;
        }

    }


    const byName =
        Object.values(
            pokemonData
        ).find(
            pokemon =>
                pokemon &&
                pokemon.name
                    .toLowerCase() ===
                String(key)
                    .toLowerCase()
        );


    return byName || null;

}


function getSave(
    slot
) {

    const raw =
        localStorage.getItem(
            SAVE_PREFIX + slot
        );


    if (!raw) {
        return null;
    }


    try {

        return JSON.parse(raw);

    } catch (error) {

        console.error(
            "Invalid save data:",
            error
        );

        return null;

    }

}


function saveToSlot(
    slot
) {

    if (!playerName) {

        openNameScreen();

        return;

    }


    const data =
        createSaveData();


    localStorage.setItem(
        SAVE_PREFIX + slot,
        JSON.stringify(data)
    );


    currentSaveSlot =
        slot;


    savePlayerProfile();


    renderSaveSlots();


    if (
        battleMessage
    ) {

        setBattleMessage(
            `Game saved to Slot ${slot}!`
        );

    }

}


function deleteSave(
    slot
) {

    localStorage.removeItem(
        SAVE_PREFIX + slot
    );


    if (
        currentSaveSlot === slot
    ) {

        currentSaveSlot = null;

    }


    renderSaveSlots();

}


/* =====================================
   LOAD SAVE
===================================== */

function loadFromSlot(
    slot
) {

    const data =
        getSave(slot);


    if (!data) {
        return;
    }


    playerName =
        data.playerName || "Trainer";


    playerWinsCount =
        Number(data.wins) || 0;


    playerLossesCount =
        Number(data.losses) || 0;


    selectedPokemonKey =
        data.selectedPokemonKey || null;


    playerHP =
        Number(data.playerHP) || 0;


    enemyHP =
        Number(data.enemyHP) || 0;


    playerMaxHP =
        Number(data.playerMaxHP) || 0;


    enemyMaxHP =
        Number(data.enemyMaxHP) || 0;


    potions =
        Number.isFinite(
            Number(data.potions)
        )
            ? Number(data.potions)
            : 3;


    battleOver =
        Boolean(data.battleOver);


    currentSaveSlot =
        slot;


    playerPokemon =
        resolvePokemonKey(
            data.playerPokemonKey
        );


    enemyPokemon =
        resolvePokemonKey(
            data.enemyPokemonKey
        );


    savePlayerProfile();

    updatePlayerNameUI();


    if (
        playerPokemon &&
        enemyPokemon &&
        playerMaxHP > 0 &&
        enemyMaxHP > 0
    ) {

        turnLocked =
            battleOver;


        setupBattleUI();

        updateHPBars();


        if (battleOver) {

            disableBattleControls(
                true
            );


            setBattleMessage(
                "This battle has already ended."
            );

        } else {

            turnLocked = false;


            disableBattleControls(
                false
            );


            setBattleMessage(
                `Save loaded! What will ${playerPokemon.name} do?`
            );


            addLog(
                `Loaded game from Slot ${slot}.`
            );

        }


        showScreen(
            battleScreen
        );


        return;

    }


    createPokemonCards();


    if (
        selectedPokemonKey
    ) {

        const selected =
            resolvePokemonKey(
                selectedPokemonKey
            );


        if (selected) {

            selectedPokemonKey =
                `pokemon-${selected.id}`;

            selectPokemon(
                selectedPokemonKey
            );

        }

    }


    showScreen(
        selectionScreen
    );

}


/* =====================================
   SAVE SCREEN
===================================== */

function openSaveScreen() {

    document.getElementById(
        "save-screen-title"
    ).textContent =
        "Save Game";


    renderSaveSlots();


    showScreen(
        saveScreen
    );

}


function openLoadScreen() {

    document.getElementById(
        "save-screen-title"
    ).textContent =
        "Load Game";


    renderSaveSlots();


    showScreen(
        saveScreen
    );

}


function renderSaveSlots() {

    saveSlots.innerHTML = "";


    for (
        let slot = 1;
        slot <= SAVE_COUNT;
        slot++
    ) {

        const data =
            getSave(slot);


        const card =
            document.createElement(
                "div"
            );


        card.className =
            "save-slot";


        if (!data) {

            card.classList.add(
                "empty"
            );


            card.innerHTML = `

                <div class="slot-number">
                    SAVE SLOT ${slot}
                </div>

                <div class="slot-name">
                    Empty
                </div>

                <div class="slot-details">
                    No saved game in this slot.
                </div>

                <div class="slot-actions">

                    <button
                        class="slot-button primary"
                        data-action="save"
                        data-slot="${slot}"
                    >
                        💾 Save Here
                    </button>

                </div>

            `;

        } else {

            const savedDate =
                data.savedAt
                    ? new Date(
                        data.savedAt
                    ).toLocaleString()
                    : "Unknown";


            const pokemon =
                resolvePokemonKey(
                    data.playerPokemonKey ||
                    data.selectedPokemonKey
                );


            const pokemonName =
                pokemon
                    ? pokemon.name
                    : "No Pokémon";


            card.innerHTML = `

                <div class="slot-number">
                    SAVE SLOT ${slot}
                </div>

                <div class="slot-name">
                    ${escapeHTML(
                        data.playerName ||
                        "Trainer"
                    )}
                </div>

                <div class="slot-details">

                    Pokémon:
                    ${escapeHTML(
                        pokemonName
                    )}<br>

                    🏆 Wins:
                    ${Number(
                        data.wins
                    ) || 0}<br>

                    💥 Losses:
                    ${Number(
                        data.losses
                    ) || 0}<br>

                    📅 ${escapeHTML(
                        savedDate
                    )}

                </div>

                <div class="slot-actions">

                    <button
                        class="slot-button primary"
                        data-action="load"
                        data-slot="${slot}"
                    >
                        🔄 Load
                    </button>

                    <button
                        class="slot-button"
                        data-action="save"
                        data-slot="${slot}"
                    >
                        💾 Overwrite
                    </button>

                    <button
                        class="slot-button delete"
                        data-action="delete"
                        data-slot="${slot}"
                    >
                        🗑️ Delete
                    </button>

                </div>

            `;

        }


        saveSlots.appendChild(
            card
        );

    }

}


/* =====================================
   SAVE SLOT BUTTONS
===================================== */

saveSlots.addEventListener(
    "click",
    event => {

        const button =
            event.target.closest(
                ".slot-button"
            );


        if (!button) {
            return;
        }


        const action =
            button.dataset.action;


        const slot =
            Number(
                button.dataset.slot
            );


        if (
            action === "save"
        ) {

            if (
                getSave(slot)
            ) {

                openModal(
                    "Overwrite Save?",
                    `Slot ${slot} already contains a save. Overwrite it?`,
                    () => {

                        saveToSlot(
                            slot
                        );

                        renderSaveSlots();

                    }
                );

            } else {

                saveToSlot(
                    slot
                );

                renderSaveSlots();

            }

        }


        if (
            action === "load"
        ) {

            loadFromSlot(
                slot
            );

        }


        if (
            action === "delete"
        ) {

            openModal(
                "Delete Save?",
                `Are you sure you want to delete Slot ${slot}? This cannot be undone.`,
                () => {

                    deleteSave(
                        slot
                    );

                }
            );

        }

    }
);


/* =====================================
   MODAL
===================================== */

function openModal(
    title,
    message,
    action
) {

    modalTitle.textContent =
        title;


    modalMessage.textContent =
        message;


    modalAction =
        action;


    slotModal.classList.add(
        "active"
    );

}


function closeModal() {

    slotModal.classList.remove(
        "active"
    );


    modalAction =
        null;

}


modalConfirm.addEventListener(
    "click",
    () => {

        if (
            typeof modalAction ===
            "function"
        ) {

            const action =
                modalAction;


            closeModal();


            action();

        } else {

            closeModal();

        }

    }
);


modalCancel.addEventListener(
    "click",
    closeModal
);


slotModal.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            slotModal
        ) {

            closeModal();

        }

    }
);


/* =====================================
   LEADERBOARD
===================================== */

function getLeaderboard() {

    const raw =
        localStorage.getItem(
            LEADERBOARD_KEY
        );


    if (!raw) {
        return [];
    }


    try {

        const data =
            JSON.parse(raw);


        return Array.isArray(data)
            ? data
            : [];

    } catch {

        return [];

    }

}


function saveLeaderboard(
    leaderboard
) {

    localStorage.setItem(
        LEADERBOARD_KEY,
        JSON.stringify(
            leaderboard
        )
    );

}


function updateLeaderboard() {

    if (!playerName) {
        return;
    }


    const leaderboard =
        getLeaderboard();


    const existing =
        leaderboard.find(
            entry =>
                entry.name
                    .toLowerCase() ===
                playerName
                    .toLowerCase()
        );


    if (existing) {

        existing.wins =
            playerWinsCount;


        existing.losses =
            playerLossesCount;

    } else {

        leaderboard.push({

            name:
                playerName,

            wins:
                playerWinsCount,

            losses:
                playerLossesCount

        });

    }


    leaderboard.sort(
        (a, b) => {

            if (
                b.wins !==
                a.wins
            ) {

                return (
                    b.wins -
                    a.wins
                );

            }


            return (
                a.losses -
                b.losses
            );

        }
    );


    saveLeaderboard(
        leaderboard
    );

}


function renderLeaderboard() {

    const leaderboard =
        getLeaderboard();


    leaderboardList.innerHTML =
        "";


    if (
        leaderboard.length === 0
    ) {

        leaderboardList.innerHTML = `

            <div class="leaderboard-empty">

                🏆

                <br><br>

                No trainers have completed
                a battle yet.

            </div>

        `;


        return;

    }


    leaderboard
        .slice(0, 20)
        .forEach(
            (entry, index) => {

                const row =
                    document.createElement(
                        "div"
                    );


                row.className =
                    "leaderboard-row";


                let rankIcon =
                    `#${index + 1}`;


                if (
                    index === 0
                ) {

                    rankIcon =
                        "🥇";

                } else if (
                    index === 1
                ) {

                    rankIcon =
                        "🥈";

                } else if (
                    index === 2
                ) {

                    rankIcon =
                        "🥉";

                }


                row.innerHTML = `

                    <div class="leaderboard-rank">
                        ${rankIcon}
                    </div>

                    <div class="leaderboard-name">
                        ${escapeHTML(
                            entry.name
                        )}
                    </div>

                    <div class="leaderboard-stat">

                        <span>
                            WINS
                        </span>

                        <strong>
                            ${Number(
                                entry.wins
                            ) || 0}
                        </strong>

                    </div>

                    <div class="leaderboard-stat">

                        <span>
                            LOSSES
                        </span>

                        <strong>
                            ${Number(
                                entry.losses
                            ) || 0}
                        </strong>

                    </div>

                `;


                leaderboardList.appendChild(
                    row
                );

            }
        );

}


function openLeaderboard() {

    updateLeaderboard();

    renderLeaderboard();

    showScreen(
        leaderboardScreen
    );

}


function clearLeaderboard() {

    openModal(
        "Clear Leaderboard?",
        "This will remove every trainer from the leaderboard. Your save files will not be deleted.",
        () => {

            localStorage.removeItem(
                LEADERBOARD_KEY
            );


            renderLeaderboard();

        }
    );

}


/* =====================================
   HTML SAFETY
===================================== */

function escapeHTML(
    value
) {

    return String(value)
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
        );

}


/* =====================================
   WIN
===================================== */

function playerWins() {

    if (battleOver) {
        return;
    }


    battleOver = true;

    turnLocked = true;


    disableBattleControls(
        true
    );


    playerWinsCount++;


    savePlayerProfile();

    updateLeaderboard();


    setTurnIndicator(
        "VICTORY!"
    );


    setBattleMessage(
        `${enemyPokemon.name} fainted!`
    );


    addLog(
        `${enemyPokemon.name} fainted!`
    );


    setTimeout(
        () => {

            document.getElementById(
                "result-icon"
            ).textContent =
                "🏆";


            document.getElementById(
                "result-title"
            ).textContent =
                "You Win!";


            document.getElementById(
                "result-message"
            ).textContent =
                `${playerPokemon.name} defeated ${enemyPokemon.name}!`;


            updatePlayerNameUI();


            showScreen(
                resultScreen
            );

        },
        1100
    );

}


/* =====================================
   LOSE
===================================== */

function playerLoses() {

    if (battleOver) {
        return;
    }


    battleOver = true;

    turnLocked = true;


    disableBattleControls(
        true
    );


    playerLossesCount++;


    savePlayerProfile();

    updateLeaderboard();


    setTurnIndicator(
        "DEFEAT"
    );


    setBattleMessage(
        `${playerPokemon.name} fainted!`
    );


    addLog(
        `${playerPokemon.name} fainted!`
    );


    setTimeout(
        () => {

            document.getElementById(
                "result-icon"
            ).textContent =
                "💥";


            document.getElementById(
                "result-title"
            ).textContent =
                "You Lost!";


            document.getElementById(
                "result-message"
            ).textContent =
                `${enemyPokemon.name} won the battle.`;


            updatePlayerNameUI();


            showScreen(
                resultScreen
            );

        },
        1100
    );

}


/* =====================================
   NEW BATTLE
===================================== */

function newBattle() {

    startBattle();

}


/* =====================================
   PLAY AGAIN
===================================== */

function playAgain() {

    selectedPokemonKey =
        null;


    battleOver =
        false;


    turnLocked =
        false;


    playerPokemon =
        null;


    enemyPokemon =
        null;


    selectedText.textContent =
        "Choose a Pokémon";


    battleButton.disabled =
        true;


    createPokemonCards();


    showScreen(
        selectionScreen
    );

}


/* =====================================
   HOME
===================================== */

function goHome() {

    closeModal();

    closePokemonDetails();

    updatePlayerNameUI();

    showScreen(
        startScreen
    );

}


/* =====================================
   SEARCH EVENTS
===================================== */

pokemonSearch.addEventListener(
    "input",
    () => {

        createPokemonCards();

    }
);


pokemonTypeFilter.addEventListener(
    "change",
    () => {

        createPokemonCards();

    }
);


/* =====================================
   DETAILS EVENTS
===================================== */

pokemonDetailsClose.addEventListener(
    "click",
    closePokemonDetails
);


pokemonDetailsModal.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            pokemonDetailsModal
        ) {

            closePokemonDetails();

        }

    }
);


/* =====================================
   EVENTS
===================================== */

startButton.addEventListener(
    "click",
    () => {

        if (playerName) {

            createPokemonCards();

            showScreen(
                selectionScreen
            );

        } else {

            openNameScreen();

        }

    }
);


loadGameButton.addEventListener(
    "click",
    openLoadScreen
);


leaderboardButton.addEventListener(
    "click",
    openLeaderboard
);


nameContinueButton.addEventListener(
    "click",
    createNewProfile
);


nameBackButton.addEventListener(
    "click",
    () => {

        showScreen(
            startScreen
        );

    }
);


playerNameInput.addEventListener(
    "keydown",
    event => {

        if (
            event.key ===
            "Enter"
        ) {

            createNewProfile();

        }

    }
);


battleButton.addEventListener(
    "click",
    startBattle
);


potionButton.addEventListener(
    "click",
    usePotion
);


newBattleButton.addEventListener(
    "click",
    newBattle
);


playAgainButton.addEventListener(
    "click",
    playAgain
);


saveBattleButton.addEventListener(
    "click",
    openSaveScreen
);


saveSelectionButton.addEventListener(
    "click",
    openSaveScreen
);


resultSaveButton.addEventListener(
    "click",
    openSaveScreen
);


resultHomeButton.addEventListener(
    "click",
    goHome
);


saveBackButton.addEventListener(
    "click",
    () => {

        if (
            playerPokemon &&
            enemyPokemon &&
            playerMaxHP > 0
        ) {

            showScreen(
                battleScreen
            );

        } else {

            showScreen(
                selectionScreen
            );

        }

    }
);


leaderboardBackButton.addEventListener(
    "click",
    goHome
);


leaderboardClearButton.addEventListener(
    "click",
    clearLeaderboard
);


/* =====================================
   INITIALIZE
===================================== */

loadPlayerProfile();

updatePlayerNameUI();


/*
   Start loading all 151 immediately.
*/

loadFirst151Pokemon();
