let dropItem = document.getElementsByClassName("tablinks");
let dropContent = document.getElementsByClassName("tabcontent");

function category(){
    for (i in dropItem) {
        function onHover(i) {
            dropItem[i].addEventListener('mouseover', function () {
                dropContent[i].style = "display:block";
                dropItem[i].style = "color: orangered";
    
                function onMouseOut(i) {
                    dropItem[i].addEventListener('mouseout', function () {
                        dropContent[i].style = "display:none"; 
                        dropItem[i].style = "color: black";
                    }, true);   
                }
                onMouseOut(i);

                function MousEnter(i) {
                    dropContent[i].addEventListener('mouseover', function () {
                        dropContent[i].style = "display:block"; 
                        dropItem[i].style = "color: orangered";
                    }, true);   
                }
                MousEnter(i);

                function MouseOut(i) {
                    dropContent[i].addEventListener('mouseout', function () {
                        dropContent[i].style = "display:none";
                        dropItem[i].style = "color: black"; 
                    }, true);   
                }
                MouseOut(i);
                
            }, true);
        }
        onHover(i);
    }
}
category();




// let dropItem = document.getElementsByClassName("dropbtn");
// let dropContent = document.getElementsByClassName("dropdown-content");
// let showBox = document.getElementById("show");

// function category(){
    
//     for (i in dropItem) {
//         function onHover(i) {
//             dropItem[i].addEventListener('mouseover', function () {
//                 showBox.style = "display:block";
//                 dropContent[i].style = "display:block"; 
    
//                 function onMouseOut(i) {
//                     dropItem[i].addEventListener('mouseout', function () {
//                         showBox.style = "display:none";
//                         dropContent[i].style = "display:none"; 
//                     }, true);   
//                 }
//                 onMouseOut(i);
                
//             }, true);
//         }
//         onHover(i);
//     }
// }
//     category();