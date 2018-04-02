console.log("started scraper");

let titles = document.getElementsByTagName("h5"); //Titles are all h5-elements. No other h5-elements on the page 
let articles = document.getElementsByClassName("collapseableArticle"); //Articles are wrapped in a collapsable div
let collection = [];


function getArticlesWithHtml(){
  if(titles.length === articles.length){
    for(let i = 0; i < titles.length; i++){
      let art = {
        title: titles[i].innerHTML,
        article: articles[i].innerHTML
      }
      collection.push(art);
    }
    console.log("done!");
    console.log(collection);
  } else {
    console.log("Scraper does not work anymore... Probably due to changes on the website.");
  }
}

getArticlesWithHtml()
