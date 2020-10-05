

//this is to input item to show in the list and clear field
function addItem(){
    $('#js-shopping-list-form').on('submit',function(event){
        
    event.preventDefault();    
       
        $('li').closest('ul').append(
        `<li><span class="shopping-item">${$('#shopping-list-entry').val()}</span>
        <div class"shipping-item-controls">
        <button class="shopping-item-toggle">
        <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
        <span class="button-label">delete</span>
        </button>
        </div>
        </li>`
        )            
        
    }); 
}
// this function delets items from the list 

function deleteItems(){
    $('ul').on('click','.shopping-item-delete', function(){
       
        $(this).closest('li').remove();
    });
}

//this function is to check items on the list

function checkItem(){
    $('ul').on('click','.shopping-item-toggle', function(){
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked')

    })
}


$(document).ready(function(){
addItem();
deleteItems();
checkItem();

})
