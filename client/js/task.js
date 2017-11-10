// Template.task.helpers({
//     'task' : function(){
//         return Task.find({},{sort:{completedAt:-1}});
//     }
// })

Template.task.helpers({
    'task' : function(){
        return Task.find({list_id:this._id},{sort:{completedAt:-1}});
    }
})