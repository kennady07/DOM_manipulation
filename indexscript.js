// document.getElementById("symbol1").addEventListener("click",function(){
//     let ele=document.getElementById("symbol1");
//     ele.readOnly=false;
//     ele.style.padding="10px";
//     ele.type=select;
// })
// document.getElementById("taxv1").addEventListener("click",function(){
//     this.style.border="1px solid skyblue";
// })
document.getElementById("upload").addEventListener("click",function(){
    let file=document.createElement("input");
    file.type="file";
    file.click();

})
document.getElementById("symbol1").addEventListener("click", function() {
    let ele = this;
    ele.readOnly = false;

    // Create and configure the select element
    let select = document.createElement("select");
    ["$", "₹", "﷼"].forEach(symbol => {
        let option = document.createElement("option");
        option.value = symbol;
        option.text = symbol;
        select.appendChild(option);
    });

    // Position the select element
    let rect = ele.getBoundingClientRect();
    select.style.position = "absolute";
    select.style.left = `${rect.left}px`;
    select.style.top = `${rect.bottom + window.scrollY}px`;
    select.style.width = `${rect.width}px`;
    
    // Append and handle selection
    document.body.appendChild(select);
    select.focus();
    select.addEventListener("change", () => {
        ele.value = select.value;
        ele.readOnly = true;
        select.remove();
    });

    // Remove select when clicking outside
    document.addEventListener("click", function handler(event) {
        if (!select.contains(event.target) && event.target !== ele) {
            ele.readOnly = true;
            select.remove();
            document.removeEventListener("click", handler);
        }
    });
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

addrow1.addEventListener("click",new_row_addevent);
addrow2.addEventListener("click",new_row_addevent);
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
    document.getElementById("ad1").style.top=(tot1.offsetHeight+tot1.offsetTop+300)+"px";
    

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
    // if( sgst_total_tax >0 &&  cgst_total_tax>0 &&  cess_total_tax>0){
    //     update_sgst_csgst_cess_pos();
    // }
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













// <!-- <select name="state" class="state">
//                 <option value="tn">tn</option>
//                 <option value="tn">kl</option>
//                 <option value="tn">an</option>
//                 <option value="tn">tk</option>
//                 <option value="tn">fg</option>
//                 <option value="tn">tnwdd</option>
//             </select>
//             <select name="India" class="country">
//                 <option value="tn">tn</option>
//                 <option value="tn">kl</option>
//                 <option value="tn">an</option>
//                 <option value="tn">tk</option>
//                 <option value="tn">fg</option>
//                 <option value="tn">tnwdd</option> --></select>