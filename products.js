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

        let row=$(event.target).parent().parent()[0];

        alert(row);

         $(row).hide();

    });

 

    var selectedbrand=0;// declaring variabe

    var selectedOs=0;// declaring variabe

 

    $("#sel_brand").on('change','.brand',function(){

        //selectedbrand = $(this).children("option:selected").val();

        //console.log($(this).children("option:selected").val());

        selectedbrand = $(this).val();

      //  alert(selectedbrand);

       

      //  alert(selectedOs);

       

 

    });

    $("#sel_OS").on('change','.os',function(){

        //selectedbrand = $(this).children("option:selected").val();

        //console.log($(this).children("option:selected").val());

        selectedOs = $(this).val();

        //alert(selectedOs);

       // alert(selectedbrand);

        if(selectedbrand!=0){

            $("tbody tr").hide();

            for(let i=0;i<products.length;i++){

 

                if(products[i].brand==selectedbrand){

                   alert(products[i].brand);

                    if(products[i].os==selectedOs){

                        alert(selectedOs);

                        $("tr").filter(document.getElementsByClassName(selectedbrand)).show();

                    }

                }

 

            }

        }

        else{

            $("tbody tr").hide();

            alert("selectedbrand=0");

            for(let i=0;i<products.length;i++){

                if(products[i].os==selectedOs){

                   // alert(selectedOs);

                    $("tr").filter(document.getElementsByClassName(selectedOs)).show();

                }

               

            }

        }

    });

 

    $("#sel_brand").on('change','.brand',function(){

        //selectedbrand = $(this).children("option:selected").val();

        //console.log($(this).children("option:selected").val());

        selectedbrand = $(this).val();

        //alert(selectedOs);

       // alert(selectedbrand);

        if(selectedOs!=0){

            $("tbody tr").hide();

            for(let i=0;i<products.length;i++){

 

                if(products[i].brand==selectedbrand){

                   alert(products[i].brand);

                    if(products[i].os==selectedOs){

                        alert(selectedOs);

                        $("tr").filter(document.getElementsByClassName(selectedbrand)).show();

                    }

                }

 

            }

        }

        else{

            $("tbody tr").hide();

            alert("selectedOs=0");

            for(let i=0;i<products.length;i++){

                if(products[i].brand==selectedbrand){

                   // alert(selectedOs);

                    $("tr").filter(document.getElementsByClassName(selectedbrand)).show();

                }

               

            }

        }

    });

   

   




    // $("#sel_OS").on('change','.os',function(){

    //     var selectedOS =$(this).children("option:selected").val();

    //   //  alert(selectedbrand);

    //     $("tbody tr").hide();

    //     for(let i=0;i<products.length;i++){

    //         if(products[i].brand==selectedbrand){

    //             if(products[i].os==selectedOS){

    //                alert(products[i].os);

    //                 $("tr").filter(document.getElementsByClassName(selectedbrand)).show();

    //             }

    //         }

    //     }

    // });

 

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


