async function loadData() {

    let data;

        await fetch('https://jsonplaceholder.typicode.com/todos')
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            // console.log(JSON.stringify(myJson));
            data = myJson;
        })

    return data;
}

async function showTitle() {
    
    let app1 = document.getElementById('app');
    
    let data = await loadData();
    // console.log(data_);

    for(let i=0; i < data.length; i++ ) {

        let title = document.createElement("div");

        title.innerText = data[i].title;
        app1.appendChild(title);
    }
}