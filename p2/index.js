

let main_div=document.getElementById("main_div");

let cir=document.createElement("div")
cir.className="cir"
let cir1=document.createElement("div")
cir1.className="cir1"

let div=document.createElement("div")
div.className="div"
let cir2=document.createElement("div")
cir2.className="cir2"
let cir3=document.createElement("div")
cir3.className="cir3"


let cir4=document.createElement("div")
cir4.className="cir4"


let line=document.createElement("div")
line.className="line"

let cir5=document.createElement("div")
cir5.className="cir5"

let cir6=document.createElement("div")
cir6.className="cir6"

let smily=document.createElement("div")
smily.className="smily"

let rec=document.createElement("div")
rec.className="rec"


let cir7=document.createElement("div")
cir7.className="cir7"

let cir8=document.createElement("div")
cir8.className="cir8"

let div2=document.createElement("div")
div2.className="div2"

let rec2=document.createElement("div")
rec2.className="rec2"
let rec3=document.createElement("div")
rec3.className="rec3"



let line2=document.createElement("div")
line2.className="line2"

let line3=document.createElement("div")
line3.className="line3"


let line4=document.createElement("div")
line4.className="line4"


let line5=document.createElement("div")
line5.className="line5"


let cir9=document.createElement("div")
cir9.className="cir9"


let cir10=document.createElement("div")
cir10.className="cir10"


let cir11=document.createElement("div")
cir11.className="cir11"


let div3=document.createElement("div")
div3.className="div3"

let mos1=document.createElement("div")
mos1.className="mos1"

let mos2=document.createElement("div")
mos2.className="mos2"

let mos3=document.createElement("div")
mos3.className="mos3"


let mos4=document.createElement("div")
mos4.className="mos4"

let mos5=document.createElement("div")
mos5.className="mos5"

let mos6=document.createElement("div")
mos6.className="mos6"

let div4=document.createElement("div")
div4.className="div4"
let div5=document.createElement("div")
div5.className="div5"


let cir12=document.createElement("div")
cir12.className="cir12"

rec.append(cir12)
div5.append(mos4,mos5,mos6)
div4.append(mos1,mos2,mos3)
div2.append(rec2,rec3)
cir7.append(cir8)
cir3.append(cir6)
cir2.append(cir5)
div.append(cir2,cir3)
cir1.append(div,cir4,line,div4,div5,smily)
cir.append(cir1)
main_div.append(cir,rec,cir7,cir9,cir10,line4,line5,line2,line3,div2,cir11,div3)