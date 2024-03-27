// Séries assistidas
var nSeriesAssistidas = [
    'imagens/(sa)breakingbad.jpg',
    'imagens/(sa)hillhouse.jpeg',
    'imagens/(sa)shooter.jpg',
    'imagens/(sa)strangerthings.jpg',
    'imagens/(sa)the100.jpg'
];

var divSAssistido = document.getElementById('s-assistido');

nSeriesAssistidas.forEach(function(SeriesAssistidas) {
    var sAssistidas = document.createElement('img');
    sAssistidas.src = SeriesAssistidas;
    divSAssistido.appendChild(sAssistidas);
});

// Séries para assistir 
var nSeriesAssistir = [
    'imagens/(sw) suits.jpg',
    'imagens/(sw) twhinchesters.jpg',
    'imagens/(sw)dragonhouse.jpeg',
    'imagens/(sw)mindhunter.jpg',
    'imagens/(sw)dark.jpeg'
];

var divSAssistir = document.getElementById('s-assistir');

nSeriesAssistir.forEach(function(seriesAssistir){
    var sAssistir = document.createElement('img');
    sAssistir.src = seriesAssistir;
    divSAssistir.appendChild(sAssistir);
})

// Filmes assistidos
var nFilmesAssistidos = [
    'imagens/(fa)pearlharbor.jpg',
    'imagens/(fa)joker.jpg',
    'imagens/(fa)us.jpg',
    'imagens/(fa)clube.jpg',
    'imagens/(fa)interstellar.jpg'
];

var divFAssistido = document.getElementById('f-assistido');

nFilmesAssistidos.forEach(function(FilmesAssistidos) {
    var imagem = document.createElement('img');
    imagem.src = FilmesAssistidos;
    divFAssistido.appendChild(imagem);
});


// Filmes para assistir
var nFilmesAssistir = [
    'imagens/(fw)wonka.jpeg',
    'imagens/(fw)oppenheimer.jpeg',
    'imagens/(fw)megan.jpg',
    'imagens/(fw)blackpanther.jpeg',
    'imagens/(fw)avatar.jpeg'
];

var divFAssistir = document.getElementById('f-assistir');

nFilmesAssistir.forEach(function(filmesAssistir){
    var fAssistir = document.createElement('img');
    fAssistir.src = filmesAssistir;
    divFAssistir.appendChild(fAssistir)
});

//Animes assistidos

var nAnimesAssistidos = [
    'imagens/(aa)atackontitan.jpg',
    'imagens/(aa)demonslayer.jpeg',
    'imagens/(aa)jujutsu.jpg',
    'imagens/(aa)naruto.jpeg',
    'imagens/(aa)narutoshippuden.jpeg'
];

var divAnAssistidos = document.getElementById ('a-assistido');

nAnimesAssistidos.forEach(function(animesAssistidos){
    var aAssistidos = document.createElement('img');
    aAssistidos.src = animesAssistidos;
    divAnAssistidos.appendChild(aAssistidos)
});

//Animes para assistir 

var nAnimesAssistir = [
    'imagens/(aw)blackclover.jpeg',
    'imagens/(aw)haykiu.jpeg',
    'imagens/(aw)myhero.jpeg',
    'imagens/(aw)onepiece.jpeg',
    'imagens/(aw)spyx.jpeg'
];    

var divAnAssistir = document.getElementById ('a-assistir');

nAnimesAssistir.forEach(function(animesAssistir){
    var aAssistir = document.createElement('img');
    aAssistir.src = animesAssistir;
    divAnAssistir.appendChild(aAssistir);
})