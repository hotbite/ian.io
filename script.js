import data from './data.js'

var bc = document.getElementById('b2-cont');

for(let i = 0; i<data.length; i++){
    var div = document.createElement("div");
    var h3 = document.createElement("h3");
    var img = document.createElement("img");
    div.appendChild(img);
    img.src = "./icons/url.svg";
    div.appendChild(h3);
    h3.innerText = data[i];
    bc.appendChild(div);
    div.onclick = function(e){
        var d = this.innerText;
        var dd = d.replaceAll('projects','');
        document.location.href = './projects/'+dd+'/';
    }
}
