function selectBar(element){ // funksjon for å velge stolpe
   
    style = "stroke-width:1;stroke:rgb(0,0,0);" //gjør klar style variablen. 
    if(index != element){ //selected a bar
        index = element ; // setter indexvariabelen til element. Klikker man på samme baren er index = element, og vi nullstiller
        disabled = ""; // slår av disabled på knappene
        valgtStolpe = element; //opdaterer valgt stolpe teksten med valgt stolpe
        
           show()
        return index // returnerer index når bar er valgt.
    }else{ //deselected bar
        style = ""; //slår av style
        index = null; //ingen bar er selected så index skal være null.
        disabled = "disabled"; //slår av knappene
        valgtStolpe = "ingen"; //oppdaterer teksten til ingen stolpe valgt. 
       show() // refresher viewet
       return false // til unittesting, returnerer false når ingen bar er valgt
    }
     
}

function leggTilNyStolpe(inputValue){
    if(inputValue<= 10 && inputValue > 0){
        numbers.push(inputValue); // legger til ny stolpe på slutten av arrayet. 
       show();
       return true
    }else{
        alert("tallverdien må være mellom 1 og 10");
    }
}

function endreValgtStolpe(inputValue){
    if(inputValue<= 10 && inputValue > 0){ //input er 1-10
    let i = index -1 ; //trekker 1 fra index
    numbers[i] = inputValue;
    show();
    return true
    }else{
        alert("Tallverdien må være mellom 1 og 10");
       return false
   }
}

function removeBar(i){
    numbers.splice(i, 1) //removes 1 char from place i in the array
    show(); // updates view()
    return true; 
}