const listitems = document.querySelectorAll("li");
listitems[0].textContent ="Swetha";
listitems[0].style.background= "orange";
listitems[1].style.background= "white";
listitems[2].style.background= "green";
listitems[0].setAttribute("value",7);

const p = document.createElement("p");
p.textContent = "New content added";
const scrolablediv = document.getElementById("Scrolable");
//scrolablediv.append(p);
scrolablediv.prepend(p);



 const qsaItems = document.querySelectorAll("li");
 const gtagItems =Array.from(document.getElementsByTagName("li"));
 qsaItems.forEach((element) => {
     console.log(element);
 });

 gtagItems.forEach((element)=>{ 
     console.log(element);
 });
 console.log(qsaItems);
  console.log(gtagItems);

  function addList(){
    for(let i = 0 ; i< 3; i++){
        const parent = document.querySelector("ol");
        const li = document.createElement("li");
        li.textContent=`List item i=${i}`;
        parent.append(li);
    }
  }