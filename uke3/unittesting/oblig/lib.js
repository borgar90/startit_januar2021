function containsValidDate(dato){
   let isValidYear = containsValidYear(dato); // tester om året er valid
   let isValidMonth = containsValidMnd(dato); // tester om mnd er valid
   let isValidDay = containsValidDay(dato); // Tester om dagen er valid
   let isValidDateDots = isDateValidDots(dato); //tester om dato har riktig punktsetting
   let isDate10 =dateContains10(dato); //tester om dato inneholder 10 characters
   if(isValidDateDots && isValidDay && isDate10 && isValidMonth && isValidYear){
       return true;
   }
}

function containsValidMnd(dato){
    let mnd = "";

    for (i=3; i<5; i++){ 
        mnd += dato.charAt(i); //finner alle tallene som har med mnd å gjøre
    }
    if(mnd > 0 && 
     mnd < 13 && mnd.length === 2){ //mnd er mellom 0 og 13 altså 1-12, og lengden på mnd string er 2 
      return true; //mnd er valid
    }
}

function containsValidDay(dato){
    let year = "";
    let dag = "";
    let montIsFebruary = false;
    let mnd = "";

    for (i=3; i<5; i++){
        mnd += dato.charAt(i); //finner mnd-tallene
    }
    if(mnd === "02"){ //mnd er februar
        montIsFebruary = true;
    }
    for (i=6; i<10; i++){ //finner året i stringen. 
        year += dato.charAt(i);
    }
    for (i=0; i<2; i++){ //dagen i stringen
        dag += dato.charAt(i);
    }
    
    if(montIsFebruary && isLeapYear(year)){ // mnd er februar og det er skudår
        if(dag >= 1 && dag <= 29 && dag.length === 2){
            return true; //dagen er i februar og er valid.
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

function containsValidYear(dato){
    let year = "";
    for (i=6; i<10; i++){ //finner året i stringen. 
        year += dato.charAt(i);
    }
    if(year.length === 4 && 
        year>= '0000' && 
        year<= '9999'){
            return true;
        }
}

function dateContains10(dato){
    if(dato.length === 10){
        return true;
    }  
}
function isDateValidDots(dato){
   if(
        dato.charAt(2) === "." &&
        dato.charAt(5) === "."
        ){  //datoen må ha lengde 10  og punktum på 3 og 6 plass i stringen
        
        return true;
    }
    
}

function isLeapYear(year)
{
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}


