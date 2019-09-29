async function tampilkanData() {

    let data;

    await fetch('http://127.0.0.1:8000/api/barangs')
    .then(function (response) {
        return response.json();
    })
    .then(function(myJson) {
        data  = myJson;
    })

    const x = document.getElementById('myTable');

    for(let i=0; i < data.length; i++) {
        
        var row = x.insertRow(-1);

        var elementBaru = document.createElement("BUTTON");        
        var elementBaru1 = document.createElement("BUTTON");
        // elementBaru.innerHTML = data[i].id;
        elementBaru.innerText = data[i].id;
        elementBaru1.innerText = "Hapus"

        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        
        cell1.innerHTML = data[i].name;
        cell2.innerHTML = data[i].desc;    
        var xx = cell3;
        var yy = cell3;


        xx.appendChild(elementBaru);        
        yy.appendChild(elementBaru1);

        elementBaru1.onclick = function() {
            deleteBarang(data[i].id);
        }

        elementBaru.onclick = function () {            
            viewDetailBarang(data[i].id);
        }
    }    
}

async function deleteBarang(id) {
    await fetch('http://127.0.0.1:8000/api/barangs/'+ id, {
        method: 'DELETE',
    })
    .then (function (response) {
        console.log(response);
        tampilkanData();
    })
}

async function viewDetailBarang(id) {
    let data;

    await fetch('http://127.0.0.1:8000/api/barangs/'+id+'')
    .then(function (response) {
        return response.json();
    })  
    .then (function(myJson) {
        data = myJson;
    })  

    var data1 = document.getElementById("input1");
    var data2 = document.getElementById("input2");
    var button = document.getElementById("save");

    data1.value = data.name;
    data2.value = data.desc;
    
    button.onclick = function() {
        updateBarang(id, data1.value, data2.value);
    }
}

async function updateBarang(id, name, desc) {
    
    const body = {
        name: name,
        desc: desc,
    }

    await fetch('http://127.0.0.1:8000/api/barangs/' + id, {
        method : 'PUT',
        body : JSON.stringify(body),
        headers : {
            'Content-Type': 'application/json'
        }
    })
    .then(function (response) {
        console.log(response);
    })
}

