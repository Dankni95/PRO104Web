// Data for Employees
const EmployeModule = (function () {

    const employe = [
        // Lambertseter  
        {
            id: 0,
            image: "/image-12.jpg",
            name: "Geir Ludvig",
            phone: "+47 10 10 30 03",
            title: "Daglig Leder",
            category: "Lambertseter",
            all: "alle",
        },

        {
            id: 1,
            image: "image-16.jpg",
            name: "Monica Seljord",
            phone: "+47 30 30 30 03",
            title: "Avdelings Leder",
            category: "Lambertseter",
            all: "alle",
        },

        {
            id: 2,
            image: "image.jpg",
            name: "Simen Kly",
            phone: "+47 44 00 00 01",
            title: "Ansatt",
            category: "Lambertseter",
            all: "alle",
        },

        {
            id: 3,
            image: "image-1.jpg",
            name: "Heidi Blidame",
            phone: "+47 44 44 00 01",
            title: "Ansatt",
            category: "Lambertseter",
            all: "alle",
        },

        {
            id: 4,
            image: "image-2.jpg",
            name: "Mona Tilgunn",
            phone: "+47 44 44 00 01",
            title: "Ansatt",
            category: "Lambertseter",
            all: "alle",
        },
        // Frogner
        {
            id: 5,
            image: "image-3.jpg",
            name: "Morten krakk",
            phone: "+47 30 30 30 03",
            title: "Avdelings Leder",
            category: "Frogner",
            all: "alle",
        },

        {
            id: 6,
            image: "image-4.jpg",
            name: "Henrik fluger",
            phone: "+47 42 30 30 03",
            title: "Ansatt",
            category: "Frogner",
            all: "alle",
        },

        {

            id: 7,
            image: "image-5.jpg",
            name: "Lise Alouise",
            phone: "+47 50 30 50 03",
            title: "Ansatt",
            category: "Frogner",
            all: "alle",
        },

        {
            id: 8,
            image: "image-6.jpg",
            name: "Margrethe landover",
            phone: "+47 30 40 40 03",
            title: "Ansatt",
            category: "Frogner",
            all: "alle",
        },
        // Grønland
        {
            id: 9,
            image: "image-7.jpg",
            name: "Lise Blidfis",
            phone: "+47 20 20 30 23",
            title: "Avdelings Leder",
            category: "Grønland",
            all: "alle",
        },

        {
            id: 10,
            image: "image-8.jpg",
            name: "Amor Lamor",
            phone: "+47 30 44 30 03",
            title: "Ansatt",
            category: "Grønland",
            all: "alle",
        },

        {
            id: 11,
            image: "image-9.jpg",
            name: "Halgeir Lavendel",
            phone: "+47 30 30 20 03",
            title: "Ansatt",
            category: "Grønland",
            all: "alle",
        },

        {
            id: 12,
            image: "image-10.jpg",
            name: "Susanne Fjøll",
            phone: "+47 30 55 60 03",
            title: "Ansatt",
            category: "Grønland",
            all: "alle",
        },
        //Grunnerløkka
        {
            id: 13,
            image: "image-11.jpg",
            name: "Jostein Fjøll",
            phone: "+47 30 30 30 03",
            title: "Avdelings Leder",
            category: "Grunnerløkka",
            all: "alle",
        },

        {
            id: 14,
            image: "image-15.jpg",
            name: "Miro Kaprino",
            phone: "+47 22 30 22 03",
            title: "Ansatt",
            category: "Grunnerløkka",
            all: "alle",
        },

        {
            id: 15,
            image: "image-13.jpg",
            name: "Jasmin Lavin",
            phone: "+47 55 30 54 03",
            title: "Ansatt",
            category: "Grunnerløkka",
            all: "alle",
        },

        {
            id: 16,
            image: "image-14.jpg",
            name: "Mai Fay",
            phone: "+47 22 22 33 03",
            title: "Ansatt",
            category: "Grunnerløkka",
            all: "alle",
        },
    ];

    const getAllEmployees = () => employe;
    return { getAllEmployees }

}());

export default EmployeModule;
