let info=[
    {userid:"E123",password:"1234"},
    {userid:"E125",password:"2234"},
    {userid:"E126",password:"3234"},
]
let form=document.getElementById("form")
let editIndex=null
form.addEventListener("submit",function(e){
    e.preventDefault();
    let i1=document.getElementById("i1").value
    let i2=document.getElementById("i2").value
    let obj={userid: i1 , password: i2}
    if (editIndex==null) {
        info.push(obj)
        document.getElementById("msg").innerText="Insert"
        document.getElementById("msg").style.color="green"
    } else {
        info[editIndex]=obj;
        document.getElementById("msg").innerText="Update"
        document.getElementById("msg").style.color="orange"
        editIndex= null
    document.getElementById("btn").innerText="Save"

    }
    loadData()
    reset()
})
let tbody=document.getElementById("tbody")
function loadData(){
    tbody.innerHTML=""
    info.map((e,key)=>{
        let tr=document.createElement("tr")
        tr.innerHTML=`
        <td>${e.userid}</td>
        <td>${e.password}</td>
        <td><button onclick=updateData('${key}')>Edit</button></td>
        <td><button onclick=deleteData('${key}')>Delete</button></td>
        `
        tbody.append(tr)
    })
    document.getElementById("sp").innerText="Total conditions are"+info.length
}
function deleteData(key){
    if(window.confirm("are you sure?")){
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
    document.getElementById("i2").type="text"
    document.getElementById("btn").innerText="Update"
    editIndex=key
}
function reset(){
    document.getElementById("i1").value=""
    document.getElementById("i2").value=""
}
loadData()