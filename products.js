$(document).ready(function(){
    var products = [{"id": "100","name": "iPhone 4S", "brand": "Apple","os":"iOS"},
    {"id": "101","name": "Moto X", "brand": "Motorola","os": "Android"},
    {"id": "102", "name": "iPhone 6", "brand": "Apple", "os": "iOS"},
    { "id": "103", "name": "Samsung Galaxy S","brand": "Samsung","os": "Android"},
    {"id": "104","name": "Google Nexus","brand": "ASUS", "os": "Android"},
    {"id": "105","name": "Surface","brand": "Microsoft","os": "Windows"}];

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
     //   alert($(event.target).parent().parent()[0].id);
        let id=$(event.target).parent().parent()[0];
        $(id).hide();
    });
    
    // $("#brand").on("change",function(){
    //    //alert($(this).text);
    //    var selectedText = $("#brand:selected").html();
    //    alert(selectedText);
    // });


    $("#sel_brand").on('change','.brand',function(){
        var selectedbrand = $(this).children("option:selected").val();
        console.log($(this).children("option:selected").val());
        $("tbody tr").hide();
        $("tr").filter(document.getElementsByClassName(selectedbrand)).show();
       // $("tr").filter(document.getElementsByClassName(selectedbrand)).show();
        // alert("You have selected the brand - " + selectedbrand);
       // $("tr").filter($(this).children("option:selected").val()).hide();
    });

    $("#sel_OS").on('change','.os',function(){
        var selectedOS =$(this).children("option:selected").val();
        //alert("You have selected the os - " + selectedOS);
        $("tbody tr").hide();
        $("tr").filter(document.getElementsByClassName(selectedOS)).show(); 
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
        
        // function tocheck(value){
        //     for()
        // }
    })




});
