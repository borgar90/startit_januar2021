 // hjelpevariable for både view og controller
 var contentDiv = document.getElementById('content');
        
 // model
 let numbers = [7, 3, 1, 5, 8];
 let chosenBar; // Variabel for hvilken stolpe som er valgt
 let inputValue = 0; // Variabel for hva som er skrevet i input-feltet
 let style;
 let index =0;
 let disabled = "disabled";
 let valgtStolpe = "ingen";
 // view
 show();
 function show() {
     let svgInnerHtml = '';
     for (let i = 0; i < numbers.length; i++) {
         svgInnerHtml += createBar(numbers[i], i + 1);
     }
     contentDiv.innerHTML = `
         <svg id="chart" width="500" viewBox="0 0 80 60">
             ${svgInnerHtml}
         </svg><br/>
         Valgt stolpe: <i>${valgtStolpe}</i>
         <br />
         Verdi:
         <input id="input" type="number" min="1" max="10" oninput="inputValue = this.value;" value="${inputValue}" />
         <button onclick="leggTilNyStolpe(inputValue)">Legg til stolpe</button>
         <button ${disabled} onclick="endreValgtStolpe(inputValue)">Endre valgt stolpe</button><br />
         <button ${disabled} onclick="removeBar(index - 1)">Fjerne valgt stolpe</button>
         `;
         console.log(numbers);
 }

 function createBar(number, barNo) {
     const width = 8;
     const spacing = 2;
     let x = (barNo - 1) * (width + spacing);
     let height = number * 10;
     let y = 60 - height;
     let color = calcColor(1, 10, barNo);
    
     if (index == barNo){ // er selected bar
         
         return `<rect id="${barNo}"" style="${style}" onclick="selectBar(this)" width="${width}" height="${height}"
                         x="${x}" y="${y}" fill="${color}"></rect>`;
     }else{ // er ikke selevted bar
         return `<rect id="${barNo}"  onclick="selectBar(this)" width="${width}" height="${height}"
                         x="${x}" y="${y}" fill="${color}"></rect>`;
     }
     
 }

 function calcColor(min, max, val) {
     var minHue = 240, maxHue = 0;
     var curPercent = (val - min) / (max - min);
     var colString = "hsl(" + ((curPercent * (maxHue - minHue)) + minHue) + ",100%,50%)";
     return colString;
 }
 
 function selectBar(element){
   
     element.attributes.strokeWidth = 1;
     style = "stroke-width:1;stroke:rgb(0,0,0);"
     if(index != element.id){ //selected a bar
         index = element.id ;
         disabled = "";
         valgtStolpe = element.id;
     }else{ //deselected bar
         style = "";
         index = null;
         disabled = "disabled";
         valgtStolpe = "ingen";
     }
      
     show()
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
     if(inputValue<= 10 && inputValue > 0){
     let i = index -1 ;
     numbers[i] = inputValue;
     console.log(numbers[i]);
     show();
     }else{
         alert("Tallverdien må være mellom 1 og 10");
     }
 }

 function removeBar(i){
     
     numbers.splice(i, 1)
     show();
     return true; 
 }
 
 
 