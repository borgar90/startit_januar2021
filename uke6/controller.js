function selectBar(element){
   
    style = "stroke-width:1;stroke:rgb(0,0,0);"
    if(index != element){ //selected a bar
        index = element ;
        disabled = "";
        valgtStolpe = element;
        
           show()
        return index
    }else{ //deselected bar
        style = "";
        index = null;
        disabled = "disabled";
        valgtStolpe = "ingen";
        
       show()
       return false
    }
     
}

function leggTilNyStolpe(inputValue){
    if(inputValue<= 10 && inputValue > 0){
        numbers.push(inputValue);
       show();
       return true
    }else{
        alert("tallverdien må være mellom 1 og 10");
    }
}

function endreValgtStolpe(inputValue){
    console.log("inputvalue" + inputValue);
    if(inputValue<= 10 && inputValue > 0){ //input er 1-10
    let i = index -1 ; //trekker 1 fra index
    numbers[i] = inputValue;
    console.log(numbers[i]);
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