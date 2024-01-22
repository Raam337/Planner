
var table_body = $("#table-main");
var template = table_body.children().eq(0);
var today = $("#currentDay");


renderTable();
updateDay();
table_body.children().eq(0).addClass("d-none");


function renderTable(){
    var task_list = getStorage();
    console.log(task_list);
    var current_time = dayjs().format("H");
    for (let i = 0; i < 24; i++) {
        var clonedTemp = template.clone();
        clonedTemp.find(".hour").text(dayjs().set("hour", i).format("H a"));
        clonedTemp.find("textarea").text(task_list[i]);
        clonedTemp.find("textarea").data("nr",i);
        if(current_time > i) clonedTemp.find("textarea").addClass("past");
        if(current_time == i) clonedTemp.find("textarea").addClass("present");
        if(current_time < i) clonedTemp.find("textarea").addClass("future");
        
        table_body.append(clonedTemp);
    }
}

function updateDay(){
    today.text(dayjs().format("dddd, DD MMM YYYY"));
    today.css("color","rgb(250,50,50)");
    console.log(today.css("color"));
}

function getStorage(){
    var local_tasks = JSON.parse(localStorage.getItem("myTasks"));
    if(local_tasks){
        local_storage = local_tasks;
    } else {
        local_tasks = Array(24).fill("");
    }
    return local_tasks
}

function writeStorage(pos,text){
    var temp_array = getStorage();
    temp_array[pos] = text;
    localStorage.setItem("myTasks",JSON.stringify(temp_array));
}

var timeInterval = setInterval(function () {

    var R = Math.floor(Math.random() * 255);
    var G = Math.floor(Math.random() * 255);
    var B = Math.floor(Math.random() * 255);

    today.css("color",`rgb(${R},${G},${B})`);
    
  },2000);

  table_body.on("click", ".saveBtn", function(event){
    var field_text = $(event.target).closest(".saveBtn").siblings().eq(1).val();
    var field_nr = $(event.target).closest(".saveBtn").siblings().eq(1).data("nr");
    writeStorage(field_nr,field_text);
    alert(`Task ${field_text} has been added to ${$(event.target).closest(".saveBtn").siblings().eq(0).text()} `)
  })