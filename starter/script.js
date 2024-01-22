
var table_body = $("#table-main");
var template = table_body.children().eq(0);
var today = $("#currentDay");

renderTable();
updateDay();
table_body.children().eq(0).addClass("d-none");


function renderTable(){
    var local_tasks = JSON.parse(localStorage.getItem("schedulerTasks"));
    console.log(local_tasks);

    for (let i = 0; i < 24; i++) {
        var clonedTemp = template.clone();
        clonedTemp.find(".hour").text(dayjs().set("hour", i).format("H a"));
        table_body.append(clonedTemp);
    }
    
}

function updateDay(){
    today.text(dayjs().format());
}