const container = document.querySelector(".container");
const nextBtns = document.querySelectorAll(".next");
const foreverBtn = document.getElementById("foreverBtn");
const popup = document.getElementById("popup");

let current = 0;
const totalPages = document.querySelectorAll(".page").length;

/* PAGE SLIDE */
nextBtns.forEach(btn=>{
  btn.addEventListener("click",()=>{
    if(current < totalPages - 1){
      current++;
      container.style.transform = `translateX(-${current * 100}vw)`;
    }
  });
});

/* HEART BURST ON HOVER */
const allButtons = document.querySelectorAll("button");

allButtons.forEach(btn=>{
  btn.addEventListener("mouseenter",()=>{
    for(let i=0;i<8;i++){
      const heart=document.createElement("div");
      heart.classList.add("heart");
      heart.innerHTML="💖";
      heart.style.left="50%";
      heart.style.top="50%";
      heart.style.setProperty("--x",(Math.random()*120-60)+"px");
      heart.style.setProperty("--y",(Math.random()*120-60)+"px");
      btn.appendChild(heart);
      setTimeout(()=>heart.remove(),800);
    }
  });
});

/* FINAL BUTTON CLICK */
if(foreverBtn){
  foreverBtn.addEventListener("click",()=>{

    popup.classList.add("show");

    /* Flower Rain */
    for(let i=0;i<50;i++){
      const petal=document.createElement("div");
      petal.classList.add("petal");
      petal.innerHTML="🌹";
      petal.style.left=Math.random()*window.innerWidth+"px";
      petal.style.animationDuration=(Math.random()*3+3)+"s";
      document.body.appendChild(petal);
      setTimeout(()=>petal.remove(),6000);
    }

    /* Fireworks */
    for(let i=0;i<6;i++){
      setTimeout(createFirework,i*300);
    }

  });
}

/* Firework Function */
function createFirework(){
  const x=Math.random()*window.innerWidth;
  const y=Math.random()*window.innerHeight/2;

  for(let i=0;i<30;i++){
    const fw=document.createElement("div");
    fw.classList.add("firework");
    fw.style.left=x+"px";
    fw.style.top=y+"px";
    fw.style.background=`hsl(${Math.random()*360},100%,60%)`;
    fw.style.setProperty("--x",(Math.random()*200-100)+"px");
    fw.style.setProperty("--y",(Math.random()*200-100)+"px");
    document.body.appendChild(fw);
    setTimeout(()=>fw.remove(),1000);
  }
}
