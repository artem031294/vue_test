/*-----------------
   Initialize app 
-----------------*/

var menu = new Vue({
	el: '#header-main-menu',
	data: {
		items: [
			{
				link: "#home", text: 'Home'
			},
			{
				link: "#about", text: 'About us'
			},
			{
				link: "#contact", text: 'Contact us'
			},
		]
	}
});

var gallery = new Vue({
	el: '#fwslider1',
	data: {
		pictures: [
			{
				url: 'assets/demo-images/icon_editing.png', desc: 'Lorem Ipsum', a_href: '#'
			},
			{
				url: 'assets/demo-images/icon_clear.png', desc: 'Lores Mpsum', a_href: '#'
			},
			{
				url: 'assets/demo-images/icon_display.png', desc: 'Lomer Supim', a_href: '#'
			},
			{
				url: 'assets/demo-images/icon_time.png', desc: 'Merol Musmpi', a_href: '#'
			},
			{
				url: 'assets/demo-images/icon_ideas.png', desc: 'Lorem Ipsum', a_href: '#'
			},
			{
				url: 'assets/demo-images/icon_sound.png', desc: 'Lorem Ipsum', a_href: '#'
			},
			{
				url: 'assets/demo-images/icon_solution.png', desc: 'Lorem Ipsum', a_href: '#'
			},
		]
	}
})

var map = new Vue({
	el: '#gmap',
	data: {
		iframe_src: 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4274.290564544589!2d-75.2952832049782!3d40.753669641460846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2srs!4v1444506658649',
		show: true
	}
})