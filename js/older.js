function older_posts() {
    text = "<h4>Posts anteriores</h4>"    
    posts = [{ titulo:"Post anterior 1",
                texto: "Hola Anna, de la mateixa manera que els formularis es guarden a la bbdd, aquest blog també es crearà, conectarà i carregarà les dades de forma externa",
                fecha: "29/05/2022",
            }]

    for (let i=0; i < posts.length; i++) {
        e = posts[i];
        // console.log(e.titulo);
        text += '<div class="post-preview"> \n';
        text += '<p class="post-title">' + e.titulo + '</p> \n';
        text += '<p class="post-meta"> ' + e.texto + '</p> \n' ;
        text += '<p class="post-meta"> Posteado por mí, a '+ e.fecha +'</p>';
        text += '<p class="post-meta"><a href="blog.html">Volver al post inicial</a></p>';
        text += '</div><hr class="my-1" />'
    } 
    document.getElementById("zona1").innerHTML = text;
}

// function Asigna_form() { 
//     document.getElementById("autor").classList.toggle("show");
//     let boto=document.getElementsByClassName("boto");
//     console.log(boto[0].innerHTML);
//     if (boto[0].innerHTML=="Informació sobre l'autor +") {
//         boto[0].innerHTML="Menys informació"
//     } else {
//         boto[0].innerHTML="Informació sobre l'autor +"
//     }
// }
function cur1() {
    var elementsH = document.querySelector ("h3").innerText;
    console.log(elementsH);
}
function cur2() {
    var elementsH = document.querySelector ("h3")[1].innerText;
    console.log(elementsH);
}
function cur3() {
    var elementsH = document.querySelector ("h3")[2].innerText;
    console.log(elementsH);
}
function cur4() {
    var elementsH = document.querySelector ("h3")[3].innerText;
    console.log(elementsH);
}

