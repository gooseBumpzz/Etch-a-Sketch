// Number of grid items
let itemCount = 256;

// Reference to the container
const container = document.getElementById('container');

// Create and append grid items dynamically
function grid (itemCount){
    for (let i = 1; i <= itemCount; i++) {
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        gridItem.textContent = "";        
        container.appendChild(gridItem);

        // create hover effect when mouse moved and change color
        gridItem.addEventListener ('mouseover', function(){
          gridItem.style.backgroundColor = getRandomColor();
        });
      }
}

//building 16x16 grid
grid(itemCount);

function resize(){
    let userInput = prompt ('Please enter a new size 1-49');
    let num = parseInt(userInput);  
    itemCount = num*num;

        //clear current grid
        container.replaceChildren();
        //create a new grid based on the input
        grid(itemCount);
        // add resize to a container based on the input

    let newSize = 484/(num)+"px";
    
    const gridItem = document.getElementsByClassName('grid-item');
    for (let i = 0; i < gridItem.length; i++) {
        gridItem[i].style.width = newSize; // Set the width to 300 pixels
        gridItem[i].style.height = newSize;
      }
    console.log(gridItem);  
} 

// add function to the resise button and prompt for an  number 1-100
let buttonSize = document.getElementById('btnSize');
buttonSize.addEventListener('click', resize);

// create a ranmod color selection
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

