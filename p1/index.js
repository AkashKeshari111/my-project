let main_div = document.getElementById("main_div");

for (i = 0; i < 9; i++) {
  let div = document.createElement("div");
  div.className = "div1";

  let div2 = document.createElement("div");
  div2.className = "div2";

  let div3 = document.createElement("div");
  div3.className = "div3";

  let div4 = document.createElement("div");
  div4.className = "div4";

  let div5 = document.createElement("div");
  div5.className = "div5";

  let div6 = document.createElement("div");
  div6.className = "div6";

  let div7 = document.createElement("div");
  div7.className = "div7";

  let div8 = document.createElement("div");
  div8.className = "div8";

  let div9 = document.createElement("div");
  div9.className = "div9";

  let div10 = document.createElement("div");
  div10.className = "div10";

  let deg = (Math.random()*360);
  setInterval(() => {
    main_div.style.transform = "rotate(" + deg + "deg)";   
    div.style.transform = "rotate(" + deg + "deg)";
    div2.style.transform = "rotate(" + deg + "deg)";
    div3.style.transform = "rotate(" + deg + "deg)";
    div4.style.transform = "rotate(" + deg + "deg)";
    div5.style.transform = "rotate(" + deg + "deg)";
    div6.style.transform = "rotate(" + deg + "deg)";
    div6.style.transform = "rotate(" + deg + "deg)";
    div7.style.transform = "rotate(" + deg + "deg)";
    div8.style.transform = "rotate(" + deg + "deg)";
    div9.style.transform = "rotate(" + deg + "deg)";

    deg = (deg + 25) % 360;
  }, 2000);

  //    div8.append(div9)
  div9.append(div10);
  div8.append(div9);
  div7.append(div8);
  div6.append(div7);

  div5.append(div6);
  div4.append(div5);
  div3.append(div4);
  div2.append(div3);
  div.append(div2);
  main_div.append(div);
}

// let deg=45;
// setInterval(()=>{
//     main_div.style.transform = "rotate(" + deg + "deg)";
//     deg = (deg + 10) % 360
// },2000)
