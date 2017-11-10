Template.addtask.events({
   
    'submit form': function(e){
        e.preventDefault();
        var input =  $('[name="Task Name"]');
        var taskname = input.val();
        var listid = this._id;

        Task.insert({
            name : taskname,
             completed: false,
            completeAt : new Date(),
            list_id : listid
            });

           input.val('');
           alert('Success')
     },
     
    
})