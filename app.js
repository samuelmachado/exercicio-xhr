const DONE = 4
const STATUS_CODE_OK = 200
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  console.warn(this.readyState)
  if (this.readyState == DONE && this.status == STATUS_CODE_OK) {
       // Typical action to be performed when the document is ready:
       document.getElementById("demo").innerHTML = xhttp.responseText;

       // você deve converter o xhttp.responseText para JSON
       // você deve inserir cada atributo do json no seu respectivo campo
  }
};
xhttp.open("GET", "https://viacep.com.br/ws/12243100/json/", true);
xhttp.send();
