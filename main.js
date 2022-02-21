async function apiCall(url) {


    try {
        
        let res=await fetch(url);
       let data=await res.json();
return data;

    } catch (error) {
        console.log(error);
    }


}


function appendArticles(articles, main) {
    articles.forEach(element => {
        let div=document.createElement("div");
         let image=document.createElement("img");
         image.src=element.urlToImage;
        let p=document.createElement("p");
         p.innerText=element.content;
        let p1=document.createElement("p");
        p1.innerText=element.description;
        let p2=document.createElement("p");
        p2.innerText=element.author;
        div.onclick=()=>{
            localStorage.setItem('article', JSON.stringify(element));
            window.location.href="news.html";
        } 
        div.append(image,p,p1,p2)
        main.append(div);

    });

}

export { apiCall,appendArticles };