
 Router.configure({
	layoutTemplate : 'layout'
});

Router.route('/' , {

	name : 'index',
	template : 'index'
});

Router.route('/index' , {
	name : 'Index',
	template : 'index'
 });
 
 Router.route('/home' , {
	name : 'Home',
	template : 'home'
 });
 

 Router.route('/login' , {
	name : 'Login',
	template : 'login'
 });
 
 Router.route('/register' , {
	name : 'Register',
	template : 'register'
 });
 
 Router.route('/list/:_id' , {
	name : 'Listpage',
	template : 'listpage',
	data :	function()
			{
				var id = this.params._id;
				return ListTask.findOne({_id:id});
				
			}
 });
 
