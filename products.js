$(document).ready(function(){

    var products = [{"id": "100","name": "iPhone 4S", "brand": "Apple","os":"iOS"},
                    {"id": "101","name": "Moto X", "brand": "Motorola","os": "Android"},
                    {"id": "102", "name": "iPhone 6", "brand": "Apple", "os": "iOS"},
                    {"id": "103", "name": "Samsung Galaxy S","brand": "Samsung","os": "Android"},
                    {"id": "104","name": "Google Nexus","brand": "ASUS", "os": "Android"},
                    {"id": "105","name": "Surface","brand": "Microsoft","os": "Windows"}
                ];

    let txt="<table><thead><tr><th>ID</th><th>NAME</th><th>BRAND</th><th>OS</th><th>REMOVE</th></tr></thead><tbody>";

    for(let i=0; i<products.length; i++){
        txt+="<tr class='"+ products[i].os+" "+products[i].brand +"' id='"+ i +"'><td>"+ products[i].id +"</td>"+
        "<td>"+ products[i].name +"</td>"+
        "<td>"+ products[i].brand +"</td>"+
        "<td class='"+ products[i].os+"'>"+ products[i].os +"</td>"+
        "<td><a href='#' class='remove'>X</a></td>";
    }
    txt +="</tr>";
    txt +="</tbody></table>";
    $("#table").html(txt);
    $("#table").on("click",".remove",function(event){
        let id=$(event.target).parent().parent()[0];
        $(id).hide();
    });

    var selectedbrand;// declaring variabe

    $("#sel_brand").on('change','.brand',function(){
        selectedbrand = $(this).children("option:selected").val();
        console.log($(this).children("option:selected").val());
    });

    $("#sel_OS").on('change','.os',function(){
        var selectedOS =$(this).children("option:selected").val();
      //  alert(selectedbrand);
        $("tbody tr").hide();
        for(let i=0;i<products.length;i++){
            if(products[i].brand==selectedbrand){
                if(products[i].os==selectedOS){
                    $("tr").filter(document.getElementsByClassName(selectedbrand)).show();
                }
            }
        }
    });
 
    $("#searchSpan").on("click",'#searchButton',function(){
        let value = document.getElementById("searchBox").value;
        $("tbody tr").hide();  
        if( $.isNumeric(value)){
            for(let i=0;i<products.length;i++){
                if(products[i].id == value){
                    $("tr").filter(document.getElementById(i)).show();
                }
            }
        }
        else{
            for(let i=0;i<products.length;i++){
                if(products[i].name == value){
                    $("tr").filter(document.getElementById(i)).show();
                }
            }
        }
    })
});

 