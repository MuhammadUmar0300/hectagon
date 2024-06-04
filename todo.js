const title=document.getElementById("title").value
const description=document.getElementById("description").value
const date=document.getElementById("date").value
const generateRandomId=()=> Math.random().toString(36).slice(2)

let todos=[
    {title: "Title 1", date: date, id: generateRandomId(),isCompleted: false},
    {title: "Title 2",date: date, id: generateRandomId(),isCompleted: false},
    {title: "Title 3",date: date,id: generateRandomId(),isCompleted: false}
]

const handleCreateTodo=()=>{
    let todo={
        title: `Title ${todos.length+1}`,
        date: date,
        id: generateRandomId(),
        isCompleted: false
    }

    todos.push(todo)

}

const handleReadTodo=()=>{
    todos.forEach(element=>console.log(element))
}

const handleUpdateTodo=()=>{
    todos=todos.map(element=>{
        if(element.title==="Title 2"){
            return {...element,isCompleted: true}
        }
        return element
    })
}

const handleDeleteTodo=()=>{
    todos=todos.filter(element => element.title!=="Title 3")
}

const handlePrintTodo=()=>{
    let srNo=1;
    document.getElementById("show-output").innerHTML=""
    let status;
    todos.forEach (element => {
        if(element.isCompleted==false){
            status="No"
        }
        else{
            status="Yes"
        }
        document.getElementById("show-output").innerHTML+=`<tr><td>${srNo++}</td> <td>${element.title}</td> <td>${element.date}</td> <td>${element.id}</td> <td>${status}</td> </tr>`})
}

function clearOutput(){
    document.getElementById("show-output").innerHTML=""
}
