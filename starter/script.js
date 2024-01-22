
var table_body = $("#table-main");
var template = table_body.children().eq(0).clone();
//table_body.children().eq(0).addClass("d-none");

function renderTable(){
    
    console.log(template);
    table_body.append(template);
}

renderTable();