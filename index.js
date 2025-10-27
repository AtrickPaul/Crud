let info=[
    {userid:"E123",password:"1234",gender:"male",address:"konnagar",tc:"checked"},
    {userid:"E124",password:"1235",gender:"female",address:"chinsurah",tc:"not checked"},
    {userid:"E125",password:"1236",gender:"male",address:"kolkata",tc:"checked"},
]
let form=document.getElementById("form")
let editIndex=null
form.addEventListener("submit",function(e){
    e.preventDefault();
    let i1=document.getElementById("i1").value
    let i2=document.getElementById("i2").value
    let gender=document.querySelector('input[name="gender"]:checked').value
    let i3=document.getElementById("i3").value
    let i4 = document.getElementById("chk").checked
    let chk = ""
    if(i4){
chk="checked"
   }
   else{
    chk="not checked"
   }
    let obj={userid:i1, password:i2,gender:gender,address:i3,tc:chk}
    if (editIndex==null) {
        info.push(obj)
        document.getElementById("msg").innerText="Insert"
        document.getElementById("msg").style.color="green"
    }
    else{
        info[editIndex]=obj;
        document.getElementById("msg").innerText="Update"
        document.getElementById("msg").style.color="orange"
        editIndex=null
         document.getElementById("btn").innerText="Save"
    }
    loadData()
    reset()
})
let tbody=document.getElementById("tbody")
function loadData(){
    tbody.innerHTML=""
    info.map((e,key)=>{
        let tr=document.createElement("tr");
        tr.innerHTML=`
        <td>${e.userid}</td>
        <td>${e.password}</td>
        <td>${e.gender}</td>
        <td>${e.address}</td>
        <td>${e.tc}</td>
        <td><button onclick=updateData('${key}')>Update</button></td>
        <td><button onclick=deleteData('${key}')>Delete</button></td>
        `
        tbody.append(tr)
    })
    document.getElementById("sp").innerText="Total candidates are- "+info.length
}
function deleteData(key){
    if (window.confirm("are you sure?")) {
        info.splice(key,1)
        document.getElementById("msg").innerText="Delete"
        document.getElementById("msg").style.color="red"
        loadData()
        reset()
    }
}
function updateData(key){
    document.getElementById("i1").value=(info[key].userid)
    document.getElementById("i2").value=(info[key].password)
    document.querySelector(`input[name="gender"][value="${info[key].gender}"]`).checked=true;
    document.getElementById("i3").innerHTML=(info[key].address)
    document.getElementById("chk").value=(info[key].tc)
    document.getElementById("i2").type="text"
    if (info[key].tc === "checked") {
        document.getElementById("chk").checked = true;
    } else {
        document.getElementById("chk").checked = false;
    }
    document.getElementById("btn").innerText="Update"
    editIndex=key
}
function reset(){
   form.reset()
}
loadData()
