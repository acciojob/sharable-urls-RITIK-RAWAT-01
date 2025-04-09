// your code here
let Name = document.getElementById('name')
let year = document.getElementById('year')
let button = document.getElementById('button')
console.log(button)
let url = document.getElementById('url')


button.addEventListener("click" , () => {

    if(Name.value == "" && year.value == ""){
        url.innerHTML
    }
    else if(!(Name.value == "" || year.value == "")){
        url.innerText = `https://localhost:8080/?name=${Name.value}&year=${year.value}`
    }
    else if(Name.value != "" || year.value == ""){
        url.innerText = `https://localhost:8080/?name=${Name.value}`
    }
    else if(Name.value == "" || year.value != ""){
        url.innerHTML = `https://localhost:8080/?year=${year.value}`
    }

    Name.value = ""
    year.value = ""
})




