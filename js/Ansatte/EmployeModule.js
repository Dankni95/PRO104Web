
const EmployeModule = (function () {

    const employe = [
    {
        image: "image-12.jpg",
        name: "Geir Ludvig",
        phone: "+47 30 30 30 03",
        title: "Avdelings Leder",
        category: "Lambertseter"
    },

    {
        image: "image.jpg",
        name: "Mona Tilgunn",
        phone: "+47 44 00 00 01",
        title: "Ansatt",
        category: "Lambertseter"
    },

    {
        image: "image-1.jpg",
        name: "Mona Tilgunn",
        phone: "+47 44 44 00 01",
        title: "Ansatt",
        category: "Lambertseter"
    },

    {
        image: "image-2.jpg",
        name: "Mona Tilgunn",
        phone: "+47 44 44 00 01",
        title: "Ansatt",
        category: "Lambertseter"
    },

    {
        image: "image-3.jpg",
        name: "Lise Alouise",
        phone: "+47 30 30 30 03",
        title: "sjef",
        category: "Frogner"
    },

    {
        image: "image-4.jpg",
        name: "Lise Alouise",
        phone: "+47 30 30 30 03",
        title: "sjef",
        category: "Frogner"
    },

    {
        image: "image-5.jpg",
        name: "Lise Alouise",
        phone: "+47 30 30 30 03",
        title: "sjef",
        category: "Frogner"
    },

    {
        image: "image-6.jpg",
        name: "Lise Alouise",
        phone: "+47 30 30 30 03",
        title: "sjef",
        category: "Frogner"
    },

    {
        image: "person-1.jpg",
        name: "Lise",
        phone: "+47 30 30 30 03",
        title: "Admin",
        category: "Grønland"
    },

    {
        image: "person-1.jpg",
        name: "Kristine",
        phone: "+47 30 30 30 03",
        title: "Admin",
        category: "Grønland"
    },

    {
        image: "person-1.jpg",
        name: "Kristine",
        phone: "+47 30 30 30 03",
        title: "Admin",
        category: "Grunnerløkka"
    },
];

const getAllEmployees = () => employe;
return {getAllEmployees}

} ());

export default EmployeModule;