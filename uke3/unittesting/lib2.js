function reverseText(text){
    return text.split(``).reverse().join(``);
}

function fixText(txt){
   txt=txt.replace(/\s+/g, '');
   txt = txt.toLowerCase();
   return  txt.replace(/^./, txt[0].toUpperCase());
}
function isEmail(txt){
    let indexOfAt = txt.indexOf("@");
    let indexOfSpace = /\s/.test(txt);
    
    let i = 0;
    var subStr1 = txt.split('@')[0];
    var subStr2 = txt.split('@')[1];
 
 
    if(indexOfAt > -1){
        if(indexOfSpace){
            console.log(indexOfSpace);
             return false; //contains space
        }else{
            if(subStr1.indexOf(".") > -1 && subStr2.indexOf(".") > -1) {
                 return true; //contains @ and contains no spaces. and contains two dots before and after @. 
            } 
             
        }
    }
 }