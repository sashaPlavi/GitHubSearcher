

var ctrl = (function (ui, data) {
    function ourFunction(users) {
        ui.rendersUsers(users);
    }

    $('#btn').click(function () {
        var query = ui.getSearchQuery()
        ui.reset()
        if(query){

        data.searchUsers(query, ourFunction);
          
        }else{
            ui.displayerr()
        }
    })
    
})(dom, data)