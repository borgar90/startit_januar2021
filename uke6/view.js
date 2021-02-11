
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
         <input id="input" type="number" min="1" max="10" oninput="inputValue = parseInt(this.value) ;" value="${inputValue}" />
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
     disabled = valgtStolpe != "ingen" ? '' : 'disabled';
     if (index == barNo){ // er en selected bar
        style = "stroke-width:1;stroke:rgb(0,0,0);"; //gjør klar style variablen. 
       
        return `<rect id="${barNo}"" style="${style}" onclick="selectBar(${barNo})" width="${width}" height="${height}"
                         x="${x}" y="${y}" fill="${color}"></rect>`;

     }else{ // er ikke selevted bar
        style = ""; //slår av style
        
         return `<rect id="${barNo}"  onclick="selectBar(${barNo})" width="${width}" height="${height}"
                         x="${x}" y="${y}" fill="${color}"></rect>`;
     }
     
 }

 function calcColor(min, max, val) {
     var minHue = 240, maxHue = 0;
     var curPercent = (val - min) / (max - min);
     var colString = "hsl(" + ((curPercent * (maxHue - minHue)) + minHue) + ",100%,50%)";
     return colString;
 }
 

 
 
 