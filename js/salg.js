export function data() {

    fetch("./data.json")
        .then(response => {
            return response.json();
        })
        .then(data => console.log(data));
}

