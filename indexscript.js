let rowcnt=2;
document.getElementById("addrow").addEventListener("click",function(){
    
    let table=document.getElementById("table1");
    let newrow=document.createElement("tr");
    let newrowid=rowcnt++;
    newrow.innerHTML=`
        <td>
            <textarea>Enter Item name/description</textarea><br>
            <input type="text" placeholder="HSN/SAC">
        </td>        
        <td><input type="number" class="text"></td>
        <td><input type="text" value="0.000" class="text"></td>
        <td>
            <input type="number" class="text"><br>
            <input type="text" value="0.000" class="text">

        </td>
        <td>
            <input type="number" class="text"><br>
            <input type="text" value="0.000" class="text">
        </td>
        <td>
            <input type="number" class="text"><br>
            <input type="text" value="0.000" class="text">
        </td>
        <td><input type="text" value="0.000" class="text"></td>
        <td><img src="./assets/images/icon1.png" alt="kkk" style="width:30px;height:30px;display:block" onclick="deleterow('${newrowid}')"></td>`;
    newrow.setAttribute("id",newrowid);
    table.appendChild(newrow);
    document.getElementById("addrow").style.top=(table.offsetHeight+table.offsetTop+20)+"px";
    window.alert("new row added!!!!!!!"); 
})

document.getElementById("wrong1").addEventListener("click",function(){
    let domcollect=document.getElementById("table1");
    let len=domcollect.rows.length;
    if(len>2){
        domcollect.deleteRow(len-1);
        let table=document.getElementById("table1");
        document.getElementById("addrow").style.top=(table.offsetHeight+table.offsetTop+20)+"px";
    }
});

function deleterow(id){
    let row=document.getElementById(id);
    window.alert(id);
    let domcollect=document.getElementById("table1");
    let len=domcollect.rows.length;
    for(let i=1;i<len-1;i++){
        if(i==id){
            domcollect.deleteRow(i);
        }
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