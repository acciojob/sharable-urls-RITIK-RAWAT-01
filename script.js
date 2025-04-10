// your code here
let Name = document.getElementById('name')
let year = document.getElementById('year')
let button = document.getElementById('button')
let url = document.getElementById('url')


function Shareble_url(){
    if(Name.value && year.value){
        url.innerText = `https://localhost:8080/?name=${Name.value}&year=${year.value}`
    }
    
    else if(Name.value){
        url.innerText = `https://localhost:8080/?name=${Name.value}`
    }
    
    else if(year.value){
        url.innerHTML = `https://localhost:8080/?year=${year.value}`
    }

    Name.value = ""
    year.value = ""
}


button.addEventListener('click',Shareble_url)



