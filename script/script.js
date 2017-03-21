$(document).ready(function(){
//Getting the displayitems data from json----------------------------------------------------------------
    var items;
    function getitems(){
        $.ajax({
            url:'data/mydata.json',
            async:false,
            success:function(itemresp){
                items = itemresp.displayitems;
            }
        });
        
        $.each(items, function(index,value){
            $('.display').append('<img src="'+value.imageurl+ '">'+'&nbsp'+'&nbsp'+'<span>'+value.description+'</span>'+'</br>'+'<p>'+value.name+'&nbsp'+'&nbsp'+'<b>'+'<span>Price:</span>'+value.price+'</b>'+'&nbsp'+'&nbsp'+'<button id="add">Add to Cart</button>'+'</p>');
        });
    }
    
    getitems();    
      
    var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
    

//GETTING THE DATA FROM THE mydata.json--------------------------------------------------------

    var shoppingdata;
    
  function gettable(){
      $.ajax({
          url:'data/mydata.json',
          async:false,
          success:function(resp){
              shoppingdata = resp.shoppingcart;
              
          }
      });

        $.each(shoppingdata,function(index,value){
            $('#mytable').append('<tr>'+'<td>'+value.id+'</td>'+'<td>'+value.name+'</td>'+'<td>'+value.price+'</td>'+'</tr>');
        });
  }
    
    $('#myBtn').click(function(){
        $('#mytable').html("<th>ID</th>"+"<th>Product Name</th>"+"<th>Price</th>");
        gettable();
    });
// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
   

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});