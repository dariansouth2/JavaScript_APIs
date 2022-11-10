console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
const submitSearch = document.querySelector ("#submitSearch");
const inputSearch = document.querySelector ("#inputContainer");
const imageContainer = document.querySelector ("#imageContainer > img");
const feedBackParagraph = document.querySelector("#feedBackParagraph");

//Exercise 2
submitSearch.addEventListener("click", () =>{
    console.log(inputSearch.value);
   let searchTerm = inputSearch.value; 
   
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${ESQqSnTxH4Aqf7yVGtaJIW7O7Xs36rTh}&=${searchTerm}`)
    .then((resolvedValue) =>{
        return resolvedValue.json()
    })
    .then((res) =>{
        //console.log(res);
        imageContainer.src = res.data.images.original.url;
        inputSearch.value = "";
        feedBackParagraph.textContent = "";
    })
    .catch((err) =>{
        console.log(err);
        feedBackParagraph.textContent = err.message;
    })
});

