const DataModule = (window.onload = function data() {

    const data = fetch("./data.json")
        .then(response => {
            return response.json();
        })

    const getAllData = () => data;
    return { getAllData }
}());

export default DataModule;