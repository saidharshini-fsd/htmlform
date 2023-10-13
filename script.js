let con=document.createElement('form')
con.setAttribute('id','form')
con.setAttribute('name','myform')
con.classList.add("container","mx-auto","m-4","p-4","rounded-3")
document.body.appendChild(con);

var br=document.createElement('br')
let h1=document.createElement('h1')
h1.setAttribute('id','title')
h1.innerText="Food  Forms"
document.body.appendChild(con).appendChild(h1)

let des=document.createElement('p')
des.setAttribute('id','description')
des.innerText="Description"
document.body.appendChild(con).appendChild(des)

let F1=document.createElement('div')
F1.classList.add("form-group")
let ftitle=document.createElement("label")
ftitle.innerText="First Name"
ftitle.classList.add('form-label','my-1')

let fname=document.createElement("input")
fname.classList.add('form-control')
fname.setAttribute('id','first-name')
fname.setAttribute('type','text')
fname.setAttribute('placeholder','First name')
fname.setAttribute('required','')

document.body.appendChild(con).appendChild(F1).appendChild(ftitle)
document.body.appendChild(con).appendChild(F1).appendChild(fname)

// l name
let ltitle=document.createElement("label") 
ltitle.innerText="Last Name"
ltitle.classList.add('form-label','my-1')
let lname=document.createElement("input")
lname.setAttribute('placeholder','Last name')
lname.setAttribute("required",'')
lname.setAttribute('id','last-name')
lname.classList.add('form-control')
document.body.appendChild(con).appendChild(F1).appendChild(ltitle)
document.body.appendChild(con).appendChild(F1).appendChild(lname)

let add_title=document.createElement("label") 
add_title.innerText="Address"
add_title.classList.add('form-label','my-1')
let address=document.createElement("textarea")
address.setAttribute('placeholder','Address')
address.setAttribute('id',"address")
address.setAttribute('required','')
address.classList.add('form-control')
document.body.appendChild(con).appendChild(F1).appendChild(add_title)
document.body.appendChild(con).appendChild(F1).appendChild(address)

let PN=document.createElement('div')
PN.classList.add('form-group')
let pin_title=document.createElement("label") ; 
pin_title.innerText="Pincode"
pin_title.classList.add('form-label','my-1')
let pin=document.createElement("input")
pin.setAttribute('placeholder','Pincode')
pin.setAttribute('type','text')
pin.setAttribute('id','pincode')
pin.setAttribute('required','')
pin.classList.add('form-control')
document.body.appendChild(con).appendChild(PN).appendChild(pin_title)
document.body.appendChild(con).appendChild(PN).appendChild(pin)


let gen_title=document.createElement("label") 
gen_title.innerText="Gender"
gen_title.classList.add('form-label','my-1')    
let gender=document.createElement('input')
gender.classList.add("gen")
gender.setAttribute('type','radio')
gender.setAttribute('name','gender')
gender.setAttribute('id','gen1')
gender.setAttribute('value','male')
gender.setAttribute('required','')
let gender1=document.createElement('input')
gender1.classList.add("gen")
gender1.setAttribute('type','radio')
gender1.setAttribute('name','gender')
gender1.setAttribute('value','female')
gender1.setAttribute('id','gen2')
document.body.appendChild(con).appendChild(gen_title);
let g1=document.body.appendChild(con).appendChild(gender)
let gn1=document.createElement('div')
document.body.appendChild(con).appendChild(gn1).appendChild(g1);
gn1.append("Male")
let g2=document.body.appendChild(con).appendChild(gender1)
let gn2=document.createElement('div')
document.body.appendChild(con).appendChild(gn1).appendChild(g2);
gn1.append("Female")


let choice_title=document.createElement('div')

choice_title.innerText="Choice OF Food"
document.body.appendChild(con).appendChild(choice_title)

let choice=document.createElement('div')

let flex=document.createElement('div')
let ch1=document.createElement('input')
let s1=document.createElement('span')
s1.classList.add("p-2")
s1.innerText="Beef Briyani"
flex.appendChild(ch1)
flex.appendChild(s1)
let b1=document.createElement('br')
flex.appendChild(b1)
ch1.setAttribute('type','checkbox')
ch1.setAttribute('value','Beef Briyani')
ch1.setAttribute('id','v1')
choice.appendChild(flex)

let ch2=document.createElement('input')
let s2=document.createElement('span')
s2.classList.add("p-2")
s2.innerText="Noodles"
flex.appendChild(ch2)
flex.appendChild(s2)
ch2.setAttribute('type','checkbox')
ch2.setAttribute('value','Noodles')
ch2.setAttribute('id','v2')
choice.appendChild(flex)
let b2=document.createElement('br')
flex.appendChild(b2)

let ch3=document.createElement('input')
let s3=document.createElement('span')
s3.classList.add("p-2")
s3.innerText="Chicken Rice"
flex.appendChild(ch3)
flex.appendChild(s3)
ch3.setAttribute('type','checkbox')
ch3.setAttribute('value','Chicken Rice')
ch3.setAttribute('id','v3')
choice.appendChild(flex)
let b3=document.createElement('br')
flex.appendChild(b3)

let ch4=document.createElement('input')
let s4=document.createElement('span')
s4.classList.add("p-2")
s4.innerText="Veg Meals"
flex.appendChild(ch4)
flex.appendChild(s4)
ch4.setAttribute('type','checkbox')
ch4.setAttribute('value','Veg Meals')
ch4.setAttribute('id','v4')
choice.appendChild(flex)
let b4=document.createElement('br')
flex.appendChild(b4)

let ch5=document.createElement('input')
let s5=document.createElement('span')
s5.classList.add("p-2")
s5.innerText="Mutton Briyani"
flex.appendChild(ch5)
flex.appendChild(s5)
ch5.setAttribute('type','checkbox')
ch5.setAttribute('id','v5')
ch5.setAttribute('value','Mutton Briyani')
choice.appendChild(flex)

document.body.appendChild(con).appendChild(choice)



//state
let state_title=document.createElement("label") 
state_title.innerText="State"
state_title.classList.add('form-label','my-1')
let state=document.createElement("input")
state.setAttribute('required','')
state.setAttribute('id','state')
state.classList.add('form-control')
document.body.appendChild(con).appendChild(state_title)
document.body.appendChild(con).appendChild(state)

//country
let coun_title=document.createElement("label") 
coun_title.innerText="Country"
coun_title.classList.add('form-label','my-1')
let coun=document.createElement("input")
coun.setAttribute('required','')
coun.setAttribute('id','coun')
coun.classList.add('form-control')
document.body.appendChild(con).appendChild(coun_title)
document.body.appendChild(con).appendChild(coun)


//button
let btn=document.createElement('input');
btn.innerHTML="Submit";
btn.classList.add("btn","btn-primary","my-4")
btn.setAttribute('type','button')
btn.setAttribute('id','submit')
btn.setAttribute('value','Submit')
document.body.appendChild(con).appendChild(btn)


//button
let r_btn=document.createElement('input');
r_btn.innerHTML="Reset";
r_btn.classList.add("btn","btn-warning","my-4","mx-4")
r_btn.setAttribute('type','reset')
document.body.appendChild(con).appendChild(r_btn)

//table

let table_div = document.createElement('div')
table_div.classList.add("table-responsive","table_ans")
let ans_table=document.createElement('table')
ans_table.classList.add("table","border")
let thead=document.createElement('thead')
let th_row=document.createElement('tr')
let th_row_1 =document.createElement('th')
th_row_1.innerText="First Name"
let th_row_2 =document.createElement('th')
th_row_2.innerText="Last Name"
let th_row_3 =document.createElement('th')
th_row_3.innerText="Address"
let th_row_4 =document.createElement('th')
th_row_4.innerText="Gender"
let th_row_5 =document.createElement('th')
th_row_5.innerText='State'
let th_row_6 =document.createElement('th')
th_row_6.innerText='Foods'
thead.appendChild(th_row_1)
thead.appendChild(th_row_2)
thead.appendChild(th_row_3)
thead.appendChild(th_row_4)
thead.appendChild(th_row_6)
thead.appendChild(th_row_5)
ans_table.appendChild(thead)

let tbody=document.createElement('tbody')
let t_row = document.createElement('tr')
let t_data1= document.createElement('td')
t_data1.setAttribute('id','t1')
let t_data2= document.createElement('td')
t_data2.setAttribute('id','t2')
let t_data3= document.createElement('td')
t_data3.setAttribute('id','t3')
let t_data4= document.createElement('td')
t_data4.setAttribute('id','t4')
let t_data5= document.createElement('td')
t_data5.setAttribute('id','t5')
let t_data6= document.createElement('td')
t_data6.setAttribute('id','t6')
t_row.appendChild(t_data1)
t_row.appendChild(t_data2)
t_row.appendChild(t_data3)
t_row.appendChild(t_data4)
t_row.appendChild(t_data5)
t_row.appendChild(t_data6)

tbody.appendChild(t_row)
ans_table.appendChild(tbody)
document.body.appendChild(con).appendChild(table_div).appendChild(ans_table)


let ans=document.getElementById("submit").addEventListener('click',validate)

function validate(event){
   event.preventDefault();
   let fv=document.getElementById("first-name").value;  
   let lname_v=document.getElementById("last-name").value;  
   let add_v=document.getElementById("address").value;  
   let gender_v1=document.getElementById("gen1");
   let gender_v2=document.getElementById("gen2");  
   

   let ch_v1 = document.getElementById("v1");
   let ch_v2 = document.getElementById("v2");
   let ch_v3 = document.getElementById("v3");
   let ch_v4 = document.getElementById("v4");
   let ch_v5 = document.getElementById("v5");
   let state_v=document.getElementById("state").value;  

   let l=" ";
   if(fv!=""){
      document.getElementById('t1').innerHTML=fv;
   }
   if(lname_v!=""){
      document.getElementById('t2').innerHTML=lname_v;
   }
   if(add_v!=""){
      document.getElementById('t3').innerHTML=add_v;
   }
   if(gender_v1.checked==true){
      document.getElementById('t4').innerHTML="male";
   }
   else if(gender_v2.checked==true){
      document.getElementById('t4').innerHTML="female";
   }
   if(state_v!=""){
      document.querySelector('.table_ans').style.cssText="display:block"
      document.getElementById('t6').innerHTML=state_v;
   }
   if(ch_v1.checked==true){
      let ff=document.getElementById('v1').value;
       l=l+ff+' '
   }
   if(ch_v2.checked==true){
      let ff=document.getElementById('v2').value;
      l=l+ff+' '
   }
   if(ch_v3.checked==true){
      let ff=document.getElementById('v3').value;
      l=l+ff+' '
   }
   if(ch_v4.checked==true){
      let ff=document.getElementById('v4').value;
      l=l+ff+' '
   }
   if(ch_v5.checked==true){
      let ff=document.getElementById('v5').value;
      l=l+ff+' '
   }

   document.getElementById('t5').innerHTML=l;
   
   document.myform.reset();

}