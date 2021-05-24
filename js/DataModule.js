
const DataModule = (window.onload = function data() {


    let json = {
        "Oslo": {
            "navn": "Oslo",
            "salg": "1",
            "kunder": "1",
            "pizzas": "1",
            "DagensPizza": [
                {
                    "mandag": "Pepperoni Pizza"
                },
                {
                    "tirsdag": "Vegetarisk Pizza"
                },
                {
                    "onsdag": "Taco Pizza"
                },
                {
                    "torsdag": "Kebab Pizza"
                },
                {
                    "fredag": "Skinke Pizza"
                },
                {
                    "lørdag": "Kylling Pizza"
                },
                {
                    "søndag": "Biff Pizza"
                }
            ],
            "ansatte": {
                "name": {
                    "John Doe": [
                        {
                            "stilling": "HR"
                        }
                    ],
                    "Anna Doe": [
                        {
                            "stilling": "CTO"
                        }
                    ],
                    "Steven Doe": [
                        {
                            "stilling": "Kokk"
                        }
                    ]
                }
            }
        },
        "Ullern": {
            "name": "Ullern",
            "sales": "1",
            "customers": "1",
            "pizzas": "1",
            "DagensPizza": [
                {
                    "mandag": "Pepperoni Pizza"
                },
                {
                    "tirsdag": "Vegetarisk Pizza"
                },
                {
                    "onsdag": "Taco Pizza"
                },
                {
                    "torsdag": "Kebab Pizza"
                },
                {
                    "fredag": "Skinke Pizza"
                },
                {
                    "lørdag": "Kylling Pizza"
                },
                {
                    "søndag": "Biff Pizza"
                }
            ],
            "ansatte": {
                "name": {
                    "John Doe": [
                        {
                            "stilling": "HR"
                        }
                    ],
                    "Anna Doe": [
                        {
                            "stilling": "CTO"
                        }
                    ],
                    "Steven Doe": [
                        {
                            "stilling": "Kokk"
                        }
                    ]
                }
            }
        },
        "Asker": {
            "name": "Asker",
            "sales": "1",
            "customers": "1",
            "pizzas": "1",
            "DagensPizza": [
                {
                    "mandag": "Pepperoni Pizza"
                },
                {
                    "tirsdag": "Vegetarisk Pizza"
                },
                {
                    "onsdag": "Taco Pizza"
                },
                {
                    "torsdag": "Kebab Pizza"
                },
                {
                    "fredag": "Skinke Pizza"
                },
                {
                    "lørdag": "Kylling Pizza"
                },
                {
                    "søndag": "Biff Pizza"
                }
            ],
            "ansatte": {
                "name": {
                    "John Doe": [
                        {
                            "stilling": "HR"
                        }
                    ],
                    "Anna Doe": [
                        {
                            "stilling": "CTO"
                        }
                    ],
                    "Steven Doe": [
                        {
                            "stilling": "Kokk"
                        }
                    ]
                }
            }
        },
        "Fornebu": {
            "name": "Fornebu",
            "sales": "1",
            "customers": "1",
            "pizzas": "1",
            "DagensPizza": [
                {
                    "mandag": "Pepperoni Pizza"
                },
                {
                    "tirsdag": "Vegetarisk Pizza"
                },
                {
                    "onsdag": "Taco Pizza"
                },
                {
                    "torsdag": "Kebab Pizza"
                },
                {
                    "fredag": "Skinke Pizza"
                },
                {
                    "lørdag": "Kylling Pizza"
                },
                {
                    "søndag": "Biff Pizza"
                }
            ],
            "ansatte": {
                "name": {
                    "John Doe": [
                        {
                            "stilling": "HR"
                        }
                    ],
                    "Anna Doe": [
                        {
                            "stilling": "CTO"
                        }
                    ],
                    "Steven Doe": [
                        {
                            "stilling": "Kokk"
                        }
                    ]
                }
            }
        }
    }



    const getAllData = () => json;
    return { getAllData }

}());

export default DataModule;


