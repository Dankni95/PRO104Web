
const EmployeModule = (function () {

    const employe = [
    {
        image: "person-1.jpg",
        name: "Kalle balle",
        phone: "+47 30 30 30 03",
        title: "Admin",
        category: "Avdeling lambertseter"
    },

    {
        image: "person-1.jpg",
        name: "Kalle balle",
        phone: "+47 30 30 30 03",
        title: "Admin",
        category: "Avdeling frogner"
    },
];

const getAllEmployees = () => employe;
return {getAllEmployees}

} ());

export default EmployeModule;