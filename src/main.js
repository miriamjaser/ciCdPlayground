import App from './App.svelte';

new App({
	target: document.body,
	props: {
		// What's your name?
		name: 'Miriam Jaser',
		// In the following fiels you can either give a single string, 
		// or an array of bullet points
		
		// What do you associate with the term 'CI/CD'?
		associations: [
			'automatic deployment of software'
		],
		// Which CI/CD tools do you use in your project?
		tools: 'not sure',
		// What do you want to learn in this workshop? 
		expectations: [
			'lets see'
		],
		// What do you like to do when you're not coding?
		hobbies: [
			'long distance hiking'
		]
	}
});
