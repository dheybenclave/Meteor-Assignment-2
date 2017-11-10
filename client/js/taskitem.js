Template.taskitem.events({

    'click .delete-task': function(e){
        e.preventDefault();
        var id = this._id;
        if(confirm("Are you sure you want to delte this task ? '" + this.name + "'?"))
        {
            Task.remove({_id:id});
        }

    },
    
    'keyup [name=taskitem]' : function(e){
        e.preventDefault();
        if(e.which == 13 || e.which == 27)
        {
            $(e.target).blur();
        }
        else
        {
            var id  = this._id;
            var item = $(e.target).val();
            Task.update({_id:id},{$set : {name:item}});
        }
    },

    'click [name=taskitem]' : function(e){
        e.preventDefault();
        var id = this._id;
      

    },
    
    'change [type="checkbox"]' : function(e){
        e.preventDefault();
        var id = this._id;
        var iscompleted = this.completed;

        if(iscompleted)
        {
            Task.update({_id:id},{$set : {completed : false}});
        }
        else
        {
            Task.update({_id:id},{$set : {completed : true}});
        }


    }

    


});

Template.taskitem.helpers({
    'checked':function(){
        var iscompleted = this.completed;
        if(iscompleted)
        {
            return "checked";
        }
        else
        {
            return "";
        }
    }

});
