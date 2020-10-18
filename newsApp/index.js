
let apiKey = "e943f69d689b4411ace546e9755a9663"
let baseurl = "https://newsapi.org/v1/"
let sourcesList = document.getElementById("select")
let defaultSource = "the-huffington-post"
let newsDescription = document.getElementById("list");
window.addEventListener("load", e => {
    updateNews()
    getSources()
})

let getSources = () => {
    fetch(`${baseurl}/sources`)
    .then(res=> res.json()).then(data=>{
        console.log("data",data);
        sourcesList.innerHTML = data.sources.map((val,key)=>{
            return `
            <option >${val.name}</option>
            `
        })
    })
}

let updateNews = (source = defaultSource) => {
fetch(`${baseurl}/articles?source=${source}&apikey=${apiKey}`)
.then(res=> res.json())
.then(data => {
    console.log("news", data);
    newsDescription.innerHTML = data.articles.map((val,key)=>{
        return `
        <div>
        <h2>${val.title}</h2>
        <img style="width:40%;height: 300px" src="${val.urlToImage}" />
        <h4>${val.author}</h4>
        <p>${val.description}</p>
        </div>
        `
    })
}).catch(error => {
    console.log("error",error);
})
}



