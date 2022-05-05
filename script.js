let imags = ["Color-Box-II-sq-CX2417-Ocean-Deep.jpg" ,
    "Color-Box-II-sq-CX2420-Green-Foliage.jpg",
    "Orange_colour_box.svg (1).png"
];

let i = 0;
const container = document.getElementById("targetedImg");

function next() {
    i++;
    if(i >= imags.length){
       i=0;
    }
    container.src = imags[i];
}

function prev() {
    i--; 
    if(i < 0){
        i = imags.length-1;
        
    }
    container.src = imags[i];

}
setInterval(next,3000)