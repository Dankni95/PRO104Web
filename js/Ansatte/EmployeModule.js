
const EmployeModule = (function () {

    const employe = [
    {
        image: "person-1.jpg",
        name: "Marie",
        phone: "+47 30 30 30 03",
        title: "Admin",
        category: "Lambertseter"
    },

    {
        image: "person-1.jpg",
        name: "Lise",
        phone: "+47 30 30 30 03",
        title: "Admin",
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