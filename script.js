// your code here
let Name = document.getElementById('name')
let year = document.getElementById('year')
let button = document.getElementById('button')
console.log(button)
let url = document.getElementById('url')


button.addEventListener("click" , () => {

    if(!(Name.value == "" || year.value == "")){
        url.append(`?name=${Name.value}&year=${year.value}`)
    }
    else if(Name.value != "" || year.value == ""){
        url.append(`?name=${Name.value}`);
    }
    else if(Name.value == "" || year.value != ""){
        url.append(`?year=${year.value}`)
    }

	Name.value = ""
	year.value = ""
})




