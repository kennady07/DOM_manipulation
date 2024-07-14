

document.getElementById("state1").addEventListener("click",function(){
    this.style.display="none";
    let state2=document.getElementById("state2");
    state2.style.display="block";

    if(!state2.changeListenerAdded){
        state2.addEventListener("change",function(){
            if(state2.value){
                let val=state2.options[state2.selectedIndex].text;
                let state1=document.getElementById("state1");
                state1.value=val;
                state1.style.display="block";
                state2.style.display="none";
            }
        }) 
        state2.changeListenerAdded=true;
    }
    
});


document.getElementById("country1").addEventListener("click",function(){
    this.style.display="none";
    let country2=document.getElementById("country2");
    country2.style.display="block";
    if(!country2.changeListenerAdded){
        country2.addEventListener("change",function(){
            if(country2.value){
                let val=country2.options[country2.selectedIndex].text;
                let country1=document.getElementById("country1");
                country1.value=val;
                country1.style.display="block";
                country2.style.display="none";
            }

        })
        country2.changeListenerAdded=true;
    }
})



document.getElementById("clistate1").addEventListener("click",function(){
    this.style.display="none";
    let state2=document.getElementById("clistate2");
    state2.style.display="block";

    if(!state2.changeListenerAdded){
        state2.addEventListener("change",function(){
            if(state2.value){
                let val=state2.options[state2.selectedIndex].text;
                let state1=document.getElementById("clistate1");
                state1.value=val;
                state1.style.display="block";
                state2.style.display="none";
            }
        }) 
        state2.changeListenerAdded=true;
    }
    
});


document.getElementById("clicountry1").addEventListener("click",function(){
    this.style.display="none";
    let country2=document.getElementById("clicountry2");
    country2.style.display="block";
    if(!country2.changeListenerAdded){
        country2.addEventListener("change",function(){
            if(country2.value){
                let val=country2.options[country2.selectedIndex].text;
                let country1=document.getElementById("clicountry1");
                country1.value=val;
                country1.style.display="block";
                country2.style.display="none";
            }

        })
        country2.changeListenerAdded=true;
    }
})


document.getElementById("symbol1").addEventListener("click",function(){
    this.style.display="none";
    let state2=document.getElementById("symbol2");
    state2.style.display="block";

    if(!state2.changeListenerAdded){
        state2.addEventListener("change",function(){
            if(state2.value){
                let val=state2.options[state2.selectedIndex].text;
                let state1=document.getElementById("symbol1");
                state1.value=val;
                state1.style.display="block";
                state2.style.display="none";
            }
        }) 
        state2.changeListenerAdded=true;
    }
    
});

function changefont(){
    let val=document.getElementById("cname1");
    val.style.fontWeight="bold";
    val.style.fontSize="15px";
    val.style.color="grey";   
}


const displayimg = document.getElementById('displayimg');
const Inputimg = document.getElementById('Inputimg');
const editicon= document.getElementById('edit');
const deleteicon = document.getElementById('delete');
const upload = document.getElementById('upload1');


function handleImageDisplay() {
    const file = Inputimg.files[0];
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = function(e) {
            displayimg.src = e.target.result;
            displayimg.style.display = 'block';
            displayimg.style.height="90px";
            displayimg.style.width="90px";
            upload.style.display="none";
            editicon.style.display = 'block';
            deleteicon.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
}

displayimg.addEventListener('click',function(){
    Inputimg.click();
});


Inputimg.addEventListener('change', function() {
    handleImageDisplay();
});


editicon.addEventListener('click', function(){
    Inputimg.click();
});


deleteicon.addEventListener('click', () => {
    displayimg.src = './assets/images/img1.png'; 
    Inputimg.value = ''; 
    displayimg.style.display = 'block';
    editicon.style.display = 'none';
    deleteicon.style.display = 'none';
    upload.style.display="block";
});


let rowcnt=2;
let addrow1=document.getElementById("addrow");
let addrow2=document.getElementById("addrow1");
function new_row_addevent(){
    
    let table=document.getElementById("table1");
    let newrow=document.createElement("tr");
    let newrowid=rowcnt++;
    newrow.innerHTML=`
        <td>
            <textarea>Enter Item name/description</textarea><br>
            <input type="text" placeholder="HSN/SAC">
        </td>        
        <td><input type="number" class="text" value="0" id="qty"></td>
        <td><input type="text" value="0.000" class="text" id="price"></td>
        <td>
            <input type="number" class="text" value="0" id="sgsttax"><br>
            <input type="text" value="0.000" class="text" id="sgstamt" readonly>

        </td>
        <td>
            <input type="number" class="text" value="0" id="cgsttax"><br>
            <input type="text" value="0.000" class="text" id="cgstamt" readonly>
        </td>
        <td>
            <input type="number" class="text" value="0" id="cesstax"><br>
            <input type="text" value="0.000" class="text" id="cessamt" readonly>
        </td>
        <td><input type="text" value="0.000" class="text" id="amt" readonly></td>
        <td><img src="./assets/images/icon1.png" alt="kkk" style="width:30px;height:30px;display:none" class="img" id="deleterow"></td>`;
    newrow.setAttribute("id",newrowid);
    table.appendChild(newrow);
    update_addrow_pos();
}

function handletextin(){
    document.getElementById("addrow2").style.display="block";
}

function handletextout(){
    document.getElementById("addrow2").style.display="none";
}

addrow1.addEventListener("click",new_row_addevent);
addrow2.addEventListener("click",new_row_addevent);

addrow1.addEventListener("mouseover",handletextin);
addrow2.addEventListener("mouseover",handletextin);

addrow1.addEventListener("mouseout",handletextout);
addrow2.addEventListener("mouseout",handletextout);

document.getElementById("wrong1").addEventListener("click",function(){
    let domcollect=document.getElementById("table1");
    let len=domcollect.rows.length;
    if(len>2){
        domcollect.deleteRow(len-1);
        update_addrow_pos();
        update_subtotal_value();
        update_total_value();
        update_tax_total();
        
    }
});
document.getElementById("table1").addEventListener("mouseover",function(event){
    if(event.target.closest("tr") && event.target.closest("tr").querySelector(".img")){
        let img=event.target.closest("tr").querySelector(".img");
        img.style.display="block";

    }
})

document.getElementById("table1").addEventListener("mouseout",function(event){
    if(event.target.closest("tr") && event.target.closest("tr").querySelector(".img")){
        let img=event.target.closest("tr").querySelector(".img");
        img.style.display="none";

    }
})

document.getElementById("table1").addEventListener("click",function(event){
    // if(event.target.classList.contains("deleterow")){
    if(event.target.id === "deleterow"){
        event.target.closest("tr").remove();
        update_addrow_pos();
        update_subtotal_value();
        update_total_value();
        update_tax_total();
    }
});

function update_addrow_pos(){
    let table=document.getElementById("table1");
    document.getElementById("addrow").style.top=(table.offsetHeight+table.offsetTop+20)+"px";
    document.getElementById("addrow1").style.top=(table.offsetHeight+table.offsetTop+25)+"px";
    document.getElementById("addrow2").style.top=(table.offsetHeight+table.offsetTop+45)+"px";
    document.getElementById("subtot1").style.top=(table.offsetHeight+table.offsetTop+25)+"px";
    document.getElementById("subtotval1").style.top=(table.offsetHeight+table.offsetTop+25)+"px";
    document.getElementById("sgsttot1").style.top=(table.offsetHeight+table.offsetTop+55)+"px";
    document.getElementById("sgsttotval1").style.top=(table.offsetHeight+table.offsetTop+55)+"px";
    document.getElementById("cgsttot1").style.top=(table.offsetHeight+table.offsetTop+85)+"px";
    document.getElementById("cgsttotval1").style.top=(table.offsetHeight+table.offsetTop+85)+"px";
    document.getElementById("cesstot1").style.top=(table.offsetHeight+table.offsetTop+115)+"px";
    document.getElementById("cesstotval1").style.top=(table.offsetHeight+table.offsetTop+115)+"px";
    document.getElementById("tot1").style.top=(table.offsetHeight+table.offsetTop+145)+"px";
    document.getElementById("totval1").style.top=(table.offsetHeight+table.offsetTop+145)+"px";
    document.getElementById("symbol1").style.top=(table.offsetHeight+table.offsetTop+145)+"px";
    document.getElementById("note1").style.top=(tot1.offsetHeight+tot1.offsetTop+35)+"px";
    document.getElementById("notepara1").style.top=(tot1.offsetHeight+tot1.offsetTop+65)+"px";
    document.getElementById("terms1").style.top=(tot1.offsetHeight+tot1.offsetTop+145)+"px";
    document.getElementById("termspara1").style.top=(tot1.offsetHeight+tot1.offsetTop+175)+"px";
    document.getElementById("logo1").style.top=(tot1.offsetHeight+tot1.offsetTop+230)+"px";
    document.getElementById("logotext").style.top=(tot1.offsetHeight+tot1.offsetTop+270)+"px";
    document.getElementById("ad1").style.top=(tot1.offsetHeight+tot1.offsetTop+300)+"px";
    document.getElementById("line1").style.top=(tot1.offsetHeight+tot1.offsetTop+350)+"px";

}

document.getElementById("table1").addEventListener("blur",function(event){
    if(event.target.id==="qty" || event.target.id==="price"){
        update_row_totalamt(event.target.closest("tr"));
        update_row_taxamt(event.target.closest("tr"));
        update_subtotal_value();
        update_total_value();
        update_tax_total();   
    }
    else if(event.target.id==="sgsttax" || event.target.id==="cgsttax" || event.target.id==="cesstax"){
        update_row_taxamt(event.target.closest("tr"));
        update_total_value();
        update_tax_total();

    }
},true);

function update_row_totalamt(row){
    let qty=parseInt(row.querySelector("#qty").value)||0;
    let price=parseFloat(row.querySelector("#price").value)||0;
    if(qty>0 && price>0){
        let totalamt =qty*price;
        row.querySelector("#amt").value=totalamt.toFixed(3);
    }
    else{
        
        row.querySelector("#amt").value=0.000;
        row.querySelector("#sgstamt").value=0.000;
        row.querySelector("#cgstamt").value=0.000;
        row.querySelector("#cessamt").value=0.000;
        
    }    
}

function update_row_taxamt(row){
    
    let sgst=parseInt(row.querySelector("#sgsttax").value)||0;
    let cgst=parseInt(row.querySelector("#cgsttax").value)||0;
    let cess=parseInt(row.querySelector("#cesstax").value)||0;
    let totalbase=parseFloat(row.querySelector("#amt").value)||0;
    if(sgst>0){
        row.querySelector("#sgstamt").value=((sgst*totalbase)/100).toFixed(3);
    }else{
        row.querySelector("#sgstamt").value=0.000;
    }
    if(cgst>0){
        row.querySelector("#cgstamt").value=((cgst*totalbase)/100).toFixed(3);
    }else{
        row.querySelector("#cgstamt").value=0.000;
    }
    if(cess>0){
        row.querySelector("#cessamt").value=((cess*totalbase)/100).toFixed(3);
    }else{
        row.querySelector("#cessamt").value=0.000;
    }
    
}

function update_subtotal_value(){
    let subtot=0;
    let rows=document.querySelectorAll("#table1 tr:not(:first-child)");//this line select all the rows of the table except heading row.
    rows.forEach(row=>{
        let val=parseFloat(row.querySelector("#amt").value);
        subtot+=val;
    })
    document.getElementById("subtotval1").value=subtot.toFixed(3);
}


function update_total_value(){
    let tot=0;
    let rows=document.querySelectorAll("#table1 tr:not(:first-child)");//this line select all the rows of the table except heading row.
    rows.forEach(row=>{
        let sgst=parseFloat(row.querySelector("#sgstamt").value)||0;
        let cgst=parseFloat(row.querySelector("#cgstamt").value)||0;
        let cess=parseFloat(row.querySelector("#cessamt").value)||0;
        let amt=parseFloat(row.querySelector("#amt").value)||0;
        tot+=sgst+cgst+cess+amt;
    })
    document.getElementById("totval1").value=tot.toFixed(3);
}


function update_tax_total(){
    let sgst_total_tax=0;
    let cgst_total_tax=0;
    let cess_total_tax=0;
    let rows=document.querySelectorAll("#table1 tr:not(:first-child)");//this line select all the rows of the table except heading row.
    rows.forEach(row=>{
        let sgst=parseFloat(row.querySelector("#sgstamt").value)||0;
        let cgst=parseFloat(row.querySelector("#cgstamt").value)||0;
        let cess=parseFloat(row.querySelector("#cessamt").value)||0;
        sgst_total_tax+=sgst;
        cgst_total_tax+=cgst;
        cess_total_tax+=cess;
    })
   
    if(sgst_total_tax>0){
        document.getElementById("sgsttot1").style.display="block";
        document.getElementById("sgsttotval1").style.display="block";
        document.getElementById("sgsttotval1").value=sgst_total_tax.toFixed(3);
    }else{
        document.getElementById("sgsttot1").style.display="none";
        document.getElementById("sgsttotval1").style.display="none";
        document.getElementById("sgsttotval1").value=0.000;
    }
    if(cgst_total_tax>0){
        document.getElementById("cgsttot1").style.display="block";
        document.getElementById("cgsttotval1").style.display="block";
        document.getElementById("cgsttotval1").value=cgst_total_tax.toFixed(3);
    }else{
        document.getElementById("cgsttot1").style.display="none";
        document.getElementById("cgsttotval1").style.display="none";
        document.getElementById("cgsttotval1").value=0.000;
    }
    if(cess_total_tax>0){
        document.getElementById("cesstot1").style.display="block";
        document.getElementById("cesstotval1").style.display="block";
        document.getElementById("cesstotval1").value=cess_total_tax.toFixed(3);
    }else{
        document.getElementById("cesstot1").style.display="none";
        document.getElementById("cesstotval1").style.display="none";
        document.getElementById("cesstotval1").value=0.000;
    }
    
}


function handlelogoin(){
    document.getElementById("logotext").style.display="block";
}

function handlelogoout(){
    document.getElementById("logotext").style.display="none";
}
let logo1=document.getElementById("logo1");
logo1.addEventListener("mouseover",handlelogoin);
logo1.addEventListener("mouseout",handlelogoout);