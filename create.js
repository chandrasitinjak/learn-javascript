function saveData() {
    const name = document.getElementById("name").value;
    const desc = document.getElementById("desc").value;

    const body = {
        name : name,
        desc : desc,
    }
    
    fetch('http://127.0.0.1:8000/api/barangs', {
        method : 'POST',
        body : JSON.stringify(body),
        headers:{
            'Content-Type': 'application/json'
        }
    }) 
}