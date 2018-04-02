// var app = chrome.runtime.getBackgroundPage();

function hello() {
    chrome.tabs.executeScript({
      file: 'scraper.js'
    }); 
  }
  
document.getElementById('clickme').addEventListener('click', hello);