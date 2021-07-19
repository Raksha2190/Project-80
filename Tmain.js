
var name_of_guest = [];
var showing_list = [];
    
function submit()
{
    
    var guest=document.getElementById("guest").value;
    name_of_guest.push(guest);
    console.log(name_of_guest);
    document.getElementById("display_name").innerHTML = name_of_guest;
    document.getElementById("guest").value = "";
}

function show()
{
    var list_length= name_of_guest.length;
    var display_list = [];
    for(var i=0;i<list_length;i++)
    {
       display_list.push("<h4>" + name_of_guest[i] + "</h4>");
       console.log(display_list);
    }
    console.log(display_list);
    
    showing_list=display_list.join("");
    document.getElementById("display_list").innerHTML = "<h4>"+showing_list+"</h4>";

}


function sorting(){
    name_of_guest.sort();
    console.log(name_of_guest);
    var list_length= name_of_guest.length;
    var sorted_list = [];
    for(var i=0;i<list_length;i++)
    {
       sorted_list.push("<h4>" + name_of_guest[i] + "</h4>");
       console.log(sorted_list);
    }
    console.log(sorted_list);
    var sort_display=sorted_list.join("");
    document.getElementById("display_sort").innerHTML = "<h4>"+sort_display+"</h4>";

}
   
function search()
{
    var found=0;
    var searched_word=document.getElementById("search").value;
    var list_length= name_of_guest.length;
    for(var i=0;i<list_length;i++)
    {
        if(searched_word==name_of_guest[i])
        {
            found=found+1;
        }
    }
    document.getElementById("search_result").innerHTML= "<h1>" + searched_word + " found " + found + " time/s" + "</h1>";
}