// Creates pixel table
let table = document.querySelector('#table')

for (let i=1; i<=19; i++) {
  table.innerHTML += '<tr id=row'+i+'></tr>'
  for (let j=1; j<=19; j++) {
    document.querySelector('#row'+i).insertAdjacentHTML('beforeend', '<td id=row'+i+'column'+j+'></td>')
  }
}

// Color Applier
let body = document.querySelector('body')
let mouseStatus;
body.addEventListener('mousedown', function() {
  mouseStatus = true;
})
body.addEventListener('mouseup', function() {
  mouseStatus = false;
})

table.addEventListener('mouseover', function(e) {
  let color = document.querySelector('#colorSelect').value;
  if (mouseStatus === true) {
    e.target.style.backgroundColor = color;
  }
})

table.addEventListener('click', function(e) {
  let color = document.querySelector('#colorSelect').value;
  e.target.style.backgroundColor = color;
})

// Reset Button
let allTd = document.querySelectorAll('td')
let reset = document.querySelector('#reset')
reset.addEventListener('click', function() {
  for (let i=0; i<allTd.length; i++) {
    allTd[i].style.backgroundColor = 'lightgrey'
  }
})
