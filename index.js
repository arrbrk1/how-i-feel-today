let i = 0;

let arr = [];
if(localStorage.getItem("colorIndex") != null){
  arr = JSON.parse(localStorage.getItem("colorIndex"));
}

  

function classClick(e) {
  let colors = ["white", "red", "yellow", "green"];

  console.log(e);

  let button = e;
  if (++i == colors.length) i = 0;

  var btn = {
    id: `${button.id}`,
    color: `${colors[i]}`,
  };

  arr = arr.filter(function(jsonObject) {
    return jsonObject.id != button.id;
  });
  arr.push(btn);
  
  



  localStorage.setItem("colorIndex", JSON.stringify(arr));

  

  button.style.backgroundColor = colors[i];
}

function changeButtonColor() {
  let savedColors = JSON.parse(localStorage.getItem("colorIndex"))
  console.log(savedColors)

  if(savedColors) {
  savedColors.forEach(element => {
      document.getElementById(element.id).style.backgroundColor = element.color;
    });
  }
}


changeButtonColor();

