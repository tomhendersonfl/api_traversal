document.getElementById("searchButton").addEventListener("click",doSendGetRequest);
var httpGetRequest = new XMLHttpRequest();
function doSendGetRequest() {
  httpGetRequest.onreadystatechange = function(data,status){getSearchResults(data,status)}
  var s = document.getElementById("searchString").value
  httpGetRequest.open('GET', "http://www.omdbapi.com/?s="+s);
  httpGetRequest.send();
}
var responseArray=[]
function getSearchResults(data,status) {
  console.log(data)
  console.log(status)
    el = document.getElementById("center_column").innerHTML = " ";
    responseArray = data.Search;
    el += "The following movie titles match your selection:";
    el += "<ul>";
    for (var i = 0; i < responseArray.length; i++) {
      var imageURL = '"'+responseArray[i]["Poster"]+'"';
      el += `<li><a href=${imageURL} target="_blank">${responseArray[i]["Title"]}</a></li>`;
    }
    el += "</ul>"
    document.getElementById("center_column").innerHTML = el;
  // }
}
console.log(responseArray)
