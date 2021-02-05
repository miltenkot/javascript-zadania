   // Z A D A N I E  1

document.addEventListener('DOMContentLoaded', () => {

let findList = document.querySelectorAll('.list');
   
   // Z A D A N I E  2
let showTags = function(tagName) {
            return document.querySelectorAll(tagName);
    }
let show = showTags('ul');
  
   // Z A D A N I E  3
  
let idList = document.querySelector('#list');
  
   // Z A D A N I E  4
let consoleLog = (whole) => console.log(whole);

    let li = document.querySelectorAll('li');
    let ul = document.querySelectorAll('ul');
    let spans = document.querySelectorAll('span');
    let spansList = document.querySelectorAll('div.list > span');
    let spansSpan = document.querySelectorAll('div#spans > span');
    consoleLog(li);
    consoleLog(ul);
    consoleLog(spans);
    consoleLog(spansList);
    consoleLog(spansSpan);
 });
