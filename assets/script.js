const dico_path = "https://raw.githubusercontent.com/IdefaSoft/test/main/piar.json";
window.addEventListener('load', init, false);
function init(e){
    document.getElementById("bouton_1").addEventListener('click', documentLoader, false);
}
function trad(){
    document.getElementById('result').innerHTML = ""
    let dico = JSON.parse(this.responseText);
    let texte = document.getElementById('francais').value.toLowerCase().trim().split(' ');
    if(texte == ""){
        document.getElementById('result').innerHTML = "Aucun texte à traduire n'a été rentré."
        return
    }
    document.getElementById('voici').innerHTML = "Voici la traduction :"
    for (let texte1 of texte) {
        if(texte1.includes(".")){
            for(let texte2 of texte1.split(".")){
                if(texte2.length > 0){
                    document.getElementById('result').innerHTML += " "+dico[texte2] + ".";
                }
                continue
            }
        }
        else if(texte1.includes(".")){
            for(let texte2 of texte1.split(",")){
                if(texte2.length > 0){
                    document.getElementById('result').innerHTML += " "+dico[texte2] + ",";
                }
                continue
            }
        }
        else{
            document.getElementById('result').innerHTML += " "+dico[texte1];
        }
    }
}
function documentLoader(){
    let request = new XMLHttpRequest();
    request.onload=trad;
    request.open('GET', dico_path, true);
    request.send();
}