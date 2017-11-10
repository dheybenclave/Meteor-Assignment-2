Template.counttask.helpers({

    'completedtask': function(e){
        return Task.find({completed:true}).count();
    },
    'totaltask': function(e){
        return Task.find({}).count();
    },


})