Template.addlist.events({
    'submit form':function(e)
    {
        e.preventDefault();
        var name = $('[name = "listName"]');

        if(name.val().toString().trim().length != 0)
        {
            ListTask.insert({name: name.val()})
        }
        name.val('');
    }

})