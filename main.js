let add = document.querySelector('.add_task')

let textarea = document.querySelector('#textarea')

let startDate = document.querySelector('#startDate')

let endDate = document.querySelector('#endDate')

let selectName = document.querySelector('.select_name')

let selectTime = document.querySelector('.select_time')

let textarea_value = textarea.value;


let tasks = []

function chizadigan(){
  document.querySelector('.body-doing').innerHTML = ' '
  document.querySelector('.body-pending').innerHTML = ' '
  document.querySelector('.body-done').innerHTML = ' '
  document.querySelector('.body-rejected').innerHTML = ' '
  
  
  for(let i = 0; i< tasks.length; i++){
    if(tasks[i].time === 'Pending'){
      document.querySelector('.body-pending').innerHTML += `
      <h6>${tasks[i].task}</h6>
      <h6>Xodim:${tasks[i].name }</h6>
      <h6>StartDate:${tasks[i].startTime}</h6>
      <h6>EndDate:${tasks[i].endTime}</h6>
      <select class="form-select mb-3 pending-select" name="pending-select" id="pending-select">
      <option value="doing">Doing</option>
      <option value="done">Done</option>
      </select>
      <button class="btn btn-success"  onclick = "editTask(${i})">Edit</button>
      <button class="btn btn-danger" onclick = "deleteTask(${i})">Delete</button>
      <hr>
      `
    }
    
    if(tasks[i].time === 'doing'){
      document.querySelector('.body-doing').innerHTML += `
      <h6>${tasks[i].task}</h6>
      <h6>Xodim:${tasks[i].name }</h6>
      <h6>StartDate:${tasks[i].startTime}</h6>
      <h6>EndDate:${tasks[i].endTime}</h6>
      <select class="form-select mb-3 pending-select" name="pending-select" id="pending-select">
      <option value="Pending">Pending</option>
      <option value="done">Done</option>P
      </select>
      <button class="btn btn-success" onclick = "editTask(${i})">Edit</button>
      <button class="btn btn-danger" onclick = "deleteTask(${i})">Delete</button>
      <hr>
      `
    }
    
    if(tasks[i].time === 'done'){
      document.querySelector('.body-done').innerHTML += `
      <h6>${tasks[i].task}</h6>
      <h6>Xodim:${tasks[i].name }</h6>
      <h6>StartDate:${tasks[i].startTime}</h6>
      <h6>EndDate:${tasks[i].endTime}</h6>
      <div class="d-grid">
      <button class="btn btn-danger" onclick = "rejectedTask(${i})">Rejected</button>
      </div>
      <hr>
      `}
      
      if(tasks[i].time === 'rejected'){
        document.querySelector('.body-rejected').innerHTML += `
        <h6>${tasks[i].task}</h6>
        <h6>Xodim:${tasks[i].name }</h6>
        <h6>StartDate:${tasks[i].startTime}</h6>
        <h6>EndDate:${tasks[i].endTime}</h6>
        <select class="form-select mb-3 pending-select" name="pending-select" id="pending-select">
        <option value="Pending">Pending</option>
        <option value="doing">Doing</option>
        </select>
        <div class="d-grid">
        <button class="btn btn-success" onclick = "editTask(${i})">Edit</button>
        </div>
        <hr>
        `
      }
    }
  }
  
  add.addEventListener('click', function(){
    let newObj = {
      task: textarea.value,
      name: selectName.value,
      startTime: startDate.value,
      endTime: endDate.value, 
      time: selectTime.value
    }
    
    tasks.push(newObj)
    console.log(tasks)
    chizadigan()
  })
  
  function deleteTask(indexDelete){
    tasks.splice(indexDelete, 1)
    chizadigan()
  }
  
  
  function editTask(editIndex){
    tasks[editIndex].time = document.querySelector('.pending-select').value
    chizadigan()
  }
  
  function rejectedTask(rejectedIndex){
    tasks[rejectedIndex].time = 'rejected'
    tasks[rejectedIndex].task = 'qaytgan'
    chizadigan()
  }