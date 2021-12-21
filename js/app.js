
let circle = document.getElementById('circle');
let rect = document.getElementById('rect');
let polygon = document.getElementById('triangle');

function removeAll() {
   const svg = document.getElementById('svg');
   svg.removeChild(circle);
   svg.removeChild(rect);
   svg.removeChild(polygon);
}
removeAll();

let butCircle = document.querySelector('.but__circle');
butCircle.addEventListener('click', function () {
   if (butCircle.innerHTML === "Show Circle") {
      butCircle.innerHTML = "Remove  Circle";
      showCircle();
   }
   else {
      butCircle.innerHTML = "Show Circle";
      removeCircle();
   }
});

function showCircle() {
   const svg = document.getElementById('svg');
   svg.appendChild(circle);
}
function removeCircle() {
   svg.removeChild(circle);
}

let butRect = document.querySelector('.but__rect');
butRect.addEventListener('click', function () {
   if (butRect.innerHTML === "Show Rect") {
      butRect.innerHTML = "Remove Rect";
      showRect();
   }
   else {
      butRect.innerHTML = "Show Rect";
      removeRect();
   }
});

function showRect() {
   const svg = document.getElementById('svg');
   svg.appendChild(rect);
}
function removeRect() {
   svg.removeChild(rect);
}



let butTriangle = document.querySelector('.but__triangle');
butTriangle.addEventListener('click', function () {
   if (butTriangle.innerHTML === "Show Triangle") {
      butTriangle.innerHTML = "Remove Triangle";
      showTriangle();
   }
   else {
      butTriangle.innerHTML = "Show Triangle";
      removeTriangle();
   }
});

function showTriangle() {
   const svg = document.getElementById('svg');
   svg.appendChild(polygon);
}
function removeTriangle() {
   svg.removeChild(polygon);
}




