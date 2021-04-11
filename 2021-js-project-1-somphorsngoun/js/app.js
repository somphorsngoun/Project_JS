// Main........................................................................................
// ____________________________________________________________________________________________

let Title = document.querySelector('#title');
let Author = document.querySelector('#Author');
let Date = document.querySelector('#date');
let Type = document.querySelector('#type');
let Price = document.querySelector('#price');
let Color = document.querySelector('#color');
let MovieList = document.querySelector('.movieList');

let Start = document.querySelector('.start');
let Contain = document.querySelector('.main');

let Input = document.querySelector('.input');

let Num = 0;
let grandchild = '';
let grand = '';

// ____________________________________________________________________________________________
// Function....................................................................................
// ____________________________________________________________________________________________
function RemoveMovie(event) {
  let Delete = event.target.className;
  if (Delete === "fa fa-times"){
    event.target.parentElement.parentElement.remove();

  }
  let p = document.querySelectorAll('p');
  for (n of p){
    n.style.justifyContent="space-between";
  }
  if (Delete === 'fa fa-pencil'){
    Ok.style.display = 'block';
    Add.style.display = 'none';
    grand = event.target.parentElement.parentElement;
    grandchild = grand.children;
    console.log(grandchild[0].textContent);
    Title.value = grandchild[0].textContent;
    Author.value = grandchild[1].textContent;
    Type.value = grandchild[2].textContent;
    Price.value = grandchild[3].textContent.slice(0,-1).slice(0,-1);
    Date.value = grandchild[4].textContent;
    Color.value = window.getComputedStyle(grand, null).getPropertyValue("background-color");
    console.log(window.getComputedStyle(grand, null).getPropertyValue("background-color"));
  }


}
function SearchPrice(){
  document.querySelector('.searchName').style.display = 'none';
  document.querySelector('.searchprice').style.display = 'block';
  
}
function SearchName(){
  document.querySelector('.searchName').style.display = 'block';
  document.querySelector('.searchprice').style.display = 'none';
}

function cancel(event) {
    event.preventDefault();
    Title.value = "";
    Author.value = "";
    Type.value = "";
    Date.value = "";
    Price.value = "";
    Color.value = "#000000";

    
}

function AddMovie(event) {
    event.preventDefault();
    if (Title.value === '' || Author.value === '' || Date.value === '' || Type.value === 'Choose...' || Price.value === '' || Color.value === '#000000'){
      alert('Please complet all information');
    }else{
      Resource.style.display = 'block';
      IsTrue = false;
  
      let span1 = document.createElement('span');
      span1.id = "Name";
      span1.textContent = Title.value;
  
      let span2 = document.createElement('span');
      span2.id = "coast";
      span2.textContent = Price.value + " " + '$';
  
      let span3 = document.createElement('span');
      span3.id = "icon";
  
      let I1 = document.createElement('i');
      I1.classList = 'fa fa-pencil';
  
      let I2 = document.createElement('i');
      I2.classList = 'fa fa-times'; 
  
      let span4 = document.createElement('span');
      span4.id = 'authorName';
      span4.textContent = Author.value;
  
      let span6 = document.createElement('span');
      span6.id = 'Date';
      span6.textContent = Date.value;
  
      let span5 = document.createElement('span');
      span5.id = Type.value;
      span5.textContent = Type.value;
  
      
      span3.appendChild(I1);
      span3.appendChild(I2);
  
      let P = document.createElement('p');
      P.id = Num;
      P.appendChild(span1);
      P.appendChild(span4);
      P.appendChild(span5);
      P.appendChild(span2);
      P.appendChild(span6);
      P.appendChild(span3);
      P.style.background = Color.value;
      MovieList.appendChild(P);
      Num += 1;

      ArrayOftitle.push(Title.value);
      ArrayOfp.push(P);
      cancel(event);
    }
  
}

function searchBook(event) {
    let Search = searchBookInput.value.toLocaleLowerCase();
    let AllP = document.querySelectorAll('p');
    for (p of AllP){
      let title = p.firstElementChild.textContent.toLocaleLowerCase();

      if (title.indexOf(Search) === -1){
        p.style.display = 'none';
      }else{
        p.style.display = 'block';
      }
    }
     
    
}
function ShowForm() {
  if (IsTrue){
    Resource.style.display = 'none';
  }else{
    Resource.style.display = 'block';

  }
  Contain.style.display = 'block';
  Contain.style.display = 'flex';  


}
function HideForm() {
  Contain.style.display = 'none';


}

function TypeMovie(event){
  let TypeName = event.target.id;
  let Drama = document.querySelectorAll('#Dramas');
  let History = document.querySelectorAll('#Historical');
  let Comedy = document.querySelectorAll('#Comedy');
  let Horror = document.querySelectorAll('#Horror');
  console.log(TypeName);
  console.log(Drama, History, Comedy, Horror);
  if (TypeName === 'drama'){
    console.log(TypeName);
    for (d of Drama){
      d.parentElement.style.display = 'block';
    }
    for (h of History){
      h.parentElement.style.display = 'none';
    }
    for (c of Comedy){
      c.parentElement.style.display = 'none';
    }
    for (hor of Horror){
      hor.parentElement.style.display = 'none';
    }
  }else if (TypeName === 'history'){
    for (h of History){
      h.parentElement.style.display = 'block';
    }
    for (d of Drama){
      d.parentElement.style.display = 'none';
    }
    for (c of Comedy){
      c.parentElement.style.display = 'none';
    }
    for (hor of Horror){
      hor.parentElement.style.display = 'none';
    }
  }else if (TypeName === 'comedy'){
    for (c of Comedy){
      c.parentElement.style.display = 'block';
    }
    for (d of Drama){
      d.parentElement.style.display = 'none';
    }
    for (h of History){
      h.parentElement.style.display = 'none';
    }
    for (hor of Horror){
      hor.parentElement.style.display = 'none';
    }
  } else if (TypeName === 'horror'){
    for (hor of Horror){
      hor.parentElement.style.display = 'block';
    }
    for (d of Drama){
      d.parentElement.style.display = 'none';
    }
    for (h of History){
      h.parentElement.style.display = 'none';
    }
    for (c of Comedy){
      c.parentElement.style.display = 'none';
    }
  }else if (TypeName === 'all'){
    for (d of Drama){
      d.parentElement.style.display = 'block';
    }
    for (h of History){
      h.parentElement.style.display = 'block';
    }
    for (c of Comedy){
      c.parentElement.style.display = 'block';
    }
    for (hor of Horror){
      hor.parentElement.style.display = 'block';
    }
  }
}

function BS(event) {
  // if (event.target.firstElementChild.id === 'Name'){
  //   document.querySelector('form').style.display = 'none';
  // }
  for (let i = 0 ; i < Num+1; i++){
    let Event = event.target;
    if (Event.id === String(i) || Event.id === 'Name' || Event.id === 'coast' || Event.id === 'authorName' || Event.id === 'Date' || Event.className === 'fa fa-pencil' || Event.id === 'icon' ||Event.className === 'fa fa-times'){
      document.querySelector('.input').style.display = 'none';
      document.querySelector('.info').style.display = 'block';
      let ArrChild = event.target.children;
      document.querySelector('#titleOfMovie').textContent = ArrChild[0].textContent;
      document.querySelector('#directorOfMovie').textContent = ArrChild[1].textContent;
      document.querySelector('#priceOfMovie').textContent = ArrChild[3].textContent;
      document.querySelector('#typeOfMovie').textContent = ArrChild[2].textContent;
      document.querySelector('#dateOfMovie').textContent = ArrChild[4].textContent;
    }
  }
}
function BR(event) {
  document.querySelector('.input').style.display = 'block';
  document.querySelector('.info').style.display = 'none';


}

function MinMaxPrice(event) {
  event.preventDefault();
  let Min = document.querySelector('#minNumber');
  let Max = document.querySelector('#maxNumber');
  let allpPrice = document.querySelectorAll('p');
  for (let p of allpPrice){
    let child = p.children;
    let Str = child[3].textContent.slice(0,-1);
    console.log(Str.slice(0,-1));
    if (parseInt(Str.slice(0,-1)) > Min.value && parseInt(Str.slice(0,-1)) < Max.value){
      p.style.display = "block";
    }else {
      p.style.display = "none";
    }
  }

}

function OK(event){
  event.preventDefault();
  console.log(1);
  grandchild[0].textContent = Title.value;
  grandchild[1].textContent = Author.value;
  grandchild[2].textContent = Type.value;
  grandchild[3].textContent = Price.value + " " + "$";
  grandchild[4].textContent = Date.value;
  grand.style.background = Color.value;
  cancel(event);
  Ok.style.display = 'none';
  Add.style.display = 'block';
}
function SortList(event) {
  event.preventDefault();
  ArrayOftitle.sort();
  let AllList = document.querySelectorAll('p');
  for (n of ArrayOfp){
    n.remove();
  }
  for (n in ArrayOftitle){
    for (value of ArrayOfp){
      if (value.firstElementChild.textContent === ArrayOftitle[n]){
        MovieList.appendChild(value);
      }
    }
  }
  
}
// ___________________________________________________________________________________________
// Event......................................................................................
// ___________________________________________________________________________________________
let IsTrue = true;
let ArrayOftitle = [];
let ArrayOfp = [];
let MovieMenu = document.querySelector('nav ul');
MovieMenu.addEventListener('click', TypeMovie)

let Resource = document.querySelector('.resource');
Resource.addEventListener('mouseover', BS);
Resource.addEventListener('mouseout', BR);

let Show = document.querySelector('#show');
Show.addEventListener('click', ShowForm);

let Hide = document.querySelector('#hide');
Hide.addEventListener('click', HideForm);

let Remove = document.querySelector('.movieList');
Remove.addEventListener('click', RemoveMovie);

let SPrice = document.querySelector('#searchPrice');
SPrice.addEventListener('click', MinMaxPrice);

let Cancel = document.querySelector('#Cancel');
Cancel.addEventListener('click', cancel);

let Add = document.querySelector('#Add');
Add.addEventListener('click', AddMovie);

let Ok = document.querySelector('#ok');
Ok.addEventListener('click', OK);

let RadioP = document.querySelector('input[name=radioP]');
RadioP.addEventListener('click', SearchPrice);

let RadioN = document.querySelector('input[name=radioN]');
RadioN.addEventListener('click', SearchName);

let searchBookInput = document.getElementById("inputsearch");
searchBookInput.addEventListener("keyup", searchBook);

let BtnSearch = document.querySelector('#search');
BtnSearch.addEventListener('click', searchBook);

let Sort = document.querySelector('#sort');
Sort.addEventListener('click', SortList);
