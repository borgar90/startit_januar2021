let page = document.getElementById("page");
let randomNumb = [];
let flipped = [];
let card1, card2;
let xz = 0;



function init(){ //initierer koden

   
    //velger tilfeldig tall fra 0 til 4 med samme tall bare 2 ganger
    //hvor alle tall mellom 0 og 4 blir valg

    for(let i = 0; i<11; ){
        let newRandom = randomNumber(); // henter tilfeldig tall mellom 0 og 4

        if(randomNumb.includes(newRandom)){ //tallet finnes fra før
           if(i==10){ //for å avslutte løkka
               i++;
           }
           //tilfeldig tall finnes fra før men bare 1 gang:
            if(countOccurrences(randomNumb, newRandom)== 1){
                randomNumb.unshift(newRandom); //legger til tilfeldig tall for 2 gang, og bare 2 gang
                i++;
            }
        }else{
            randomNumb.unshift(newRandom); //legger til første instansen av et tall.
            i++;

        }

    }

}
// teller antal ganger et parameter eksisterer i array og returnerer antall.
const countOccurrences = function(arr, val){
    return arr.reduce((acc, elem) => {
        return (val === elem ? acc + 1 : acc)
    }, 0);
}

function randomNumber(){
    return Math.floor(Math.random() * 5);
}

function victory(win){
    for(i=0;i<win.length;i++){
        win[i].innerHTML ="victory";
    }
}


function flipCard(id){
    //flip card 1
    //flip card 2
    //if card 1 matches card 2 the card remains flipped
    //if card 1 != card 2 the cards flip back
    //if card 3 is clicked flipp back card 1 and 2
    let flipped = document.querySelectorAll(".flipped");
    if(flipped.length < 3){
    document.getElementById(id).innerHTML = randomNumb[id-1];
    document.getElementById(id).className = "flipped";
    }

    

    for(i=0; i<flipped.length; i++){ // alle flips
        console.log(flipped.length);
        if(flipped[1] && flipped[0] && !flipped[3]){ // 2 kort er flipped
            
           

            if(flipped[0].innerHTML == flipped[1].innerHTML){ //funnet 2 like
                //victory
                flipped[0].className = "victory";
                flipped[1].className = "victory";
                flipped[0].innerHTML ="victory";
                flipped[1].innerHTML = "victory";
                flipped[0].onclick = null;
                flipped[1].onclick = null;

                let win = document.getElementsByClassName("victory");
               
            
                if(win.length == 10){
                    victory(win);
                }
                flipped[0] = flipped[2];
            }else if(flipped[0].innerHTML != flipped[1].innerHTML && !flipped[2]){ //funnet 2 som ikke matcher, kort resettes
                //timeout
                
                setTimeout(function(){ // utsetter et halv sekund
                    flipped[0].innerHTML = "Card";
                    flipped[1].innerHTML = "Card";
                    flipped[0].className = "card";
                    flipped[1].className = "card";
                }, 500)
                
                 


            }else{
                flipped[0] = flipped[2]; 
            }

        }else{
            flipped[0] = flipped[2];
        }
    }

}