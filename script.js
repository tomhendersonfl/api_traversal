document.getElementById("searchButton").addEventListener("click",doSendGetRequest);
var httpGetRequest = new XMLHttpRequest();
function doSendGetRequest() {
  httpGetRequest.onreadystatechange = function(data,status){getSearchResults()}
  var s = document.getElementById("searchString").value
  httpGetRequest.open('GET', "http://www.omdbapi.com/?s="+s);
  httpGetRequest.send();
}

function getSearchResults() {
  if (httpGetRequest.readyState === 4 && httpGetRequest.status < 400) {
    var responseObj = JSON.parse(httpGetRequest.responseText);
    var responseArray = responseObj["Search"];
    var el = document.getElementById("container").innerHTML = " ";
    if (responseObj["Response"] === "True") {
      for (var i = 0; i < responseArray.length; i++) {
        el += `<p>${responseArray[i]["Title"]}</p>`
        el += `<img src="${responseArray[i]["Poster"]}" class="center_column">`
      }
      document.getElementById("container").innerHTML = el;
    } else {
      document.getElementById("container").innerHTML = "There are no movie titles that match your request"
    }
  }
}
