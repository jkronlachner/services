export const serverService = {
    getAllServices,
    addService,
    changeService,
    getSpecificService,
    deleteService
};

function getAllServices() {
    const Http = new XMLHttpRequest();
    const url = "http://localhost:8080/api/services";
    Http.open("GET", url);
    Http.send();
    return new Promise(resolve => {
        Http.onreadystatechange = (e) => {
            if (Http.readyState === 4) {
                let response = Http.responseText;
                let array = JSON.parse(response);
                resolve(array);
            }
        }
    })
}

function getSpecificService(id) {
    const Http = new XMLHttpRequest();
    const url = "http://localhost:8080/api/services/" + id;
    Http.open("GET", url);
    Http.send();
    return new Promise(resolve => {
        Http.onreadystatechange = (e) => {
            if (Http.readyState === 4) {
                let response = Http.responseText;
                let object = JSON.parse(response);
                resolve(object);
            }
        }
    })
}

function changeService(id, object) {
    const Http = new XMLHttpRequest();
    const url = "http://localhost:8080/api/services/" + id;
    Http.open("PUT", url);
    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(JSON.stringify(object));
    return new Promise(resolve => {
        Http.onreadystatechange = (e) => {
            if (Http.readyState === 4) {
                let response = Http.responseText;
                let object = JSON.parse(response);
                resolve(object);
            }
        }
    })
}

function addService(object) {
    const Http = new XMLHttpRequest();
    const url = "http://localhost:8080/api/services";
    Http.open("POST", url);
    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(JSON.stringify(object));
    return new Promise(resolve => {
        Http.onreadystatechange = (e) => {
            if (Http.readyState === 4) {
                let response = Http.responseText;
                let object = JSON.parse(response);
                resolve(object);
            }
        }
    })
}

function deleteService(id) {
    const Http = new XMLHttpRequest();
    const url = "http://localhost:8080/api/services/" + id;
    Http.open("DELETE", url);
    Http.send();
    return new Promise(resolve => {
        Http.onreadystatechange = (e) => {
            if (Http.readyState === 4) {
                let response = Http.responseText;
                let object = JSON.parse(response);
                resolve(object);
            }
        }
    })
}
