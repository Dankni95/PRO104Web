
const DataModule = (window.onload = function data() {


    let json =
    {
        "Lambertseter": {
            "navn": "Lambertseter",
            "salg": "392999",
            "kunder": "50023",
            "pizzas": "123010",
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
        "Frogner": {
            "navn": "Frogner",
            "salg": "100002",
            "kunder": "12321",
            "pizzas": "19212",
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
        "Grønland": {
            "navn": "Grønland",
            "salg": "200000",
            "kunder": "5000",
            "pizzas": "13213",
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
        "Grünnerløkka": {
            "navn": "Grünnerløkka",
            "salg": "392342",
            "kunder": "21389",
            "pizzas": "21399",
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


