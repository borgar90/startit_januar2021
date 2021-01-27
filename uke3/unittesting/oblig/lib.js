function containsValidDate(text){
   let isValidYear = containsValidYear(text); // tester om året er valid
   let isValidMonth = containsValidMnd(text); // tester om mnd er valid
   let isValidDay = containsValidDay(text); // Tester om dagen er valid
   let isValidDateDots = isDateValidDots(text); //tester om dato har riktig punktsetting
   let isDate10 =dateContains10(text); //tester om dato inneholder 10 characters
   if(isValidDateDots && isValidDay && isDate10 && isValidMonth && isValidYear){
       return true;
   }
}

function containsValidMnd(text){
    let mnd = "";

    for (i=3; i<5; i++){
        mnd += text.charAt(i);
    }
    if(mnd > 0 && 
     mnd < 13 && mnd.length === 2){
      return true;
    }
}

function containsValidDay(text){
    let year = "";
    let dag = "";
    let montIsFebruary = false;
    let mnd = "";

    for (i=3; i<5; i++){
        mnd += text.charAt(i);
    }
    if(mnd === "02"){
        montIsFebruary = true;
    }
    for (i=6; i<10; i++){ //finner året i stringen. 
        year += text.charAt(i);
    }
    for (i=0; i<2; i++){ //dagen i stringen
        dag += text.charAt(i);
    }
    
    if(montIsFebruary && isLeapYear(year)){ // mnd er februar og det er skudår
        if(dag >= 1 && dag <= 29 && dag.length === 2){
            return true;
        }
    }else if(montIsFebruary){
        if(dag >=1 && dag <=28){
            return true; //mnd er februar og er ikke skuddår, så dagene er gyldige mellom 1 og 28
        }
    }else{
        if(mnd === "01" || mnd === "03" || mnd === "05" || mnd === "07" || mnd === "08" || mnd === "10" ||mnd === "12" ){
            if (dag>=1 && dag <=31){
                return true; // mnd er longMonth og dag er mellom 1 og 31
            }
        }else if(!montIsFebruary){ //er denne redundant?
            if (dag >=1 && dag <= 30){
                return true; //mnd er shortMonth og dag er mellom 1 og 30.  
            }
        }
    }

}

function containsValidYear(text){
    let year = "";
    for (i=6; i<10; i++){ //finner året i stringen. 
        year += text.charAt(i);
    }
    if(year.length === 4 && 
        year>= '0000' && 
        year<= '9999'){
            return true;
        }
}

function dateContains10(text){
    if(text.length === 10){
        return true;
    }  
}
function isDateValidDots(text){
   if(
        text.charAt(2) === "." &&
        text.charAt(5) === "."
        ){  //texten må ha lengde 10  og punktum på 3 og 6 plass i stringen
        
        return true;
    }
    
}

function isLeapYear(year)
{
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}


