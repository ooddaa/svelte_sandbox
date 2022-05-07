import App from './App.svelte';
import Pagination from './Pagination.svelte';

// const app = new App({
// 	target: document.body,
// 	props: {
// 		name: 'world'
// 	}
// });

const app = new Pagination({
	target: document.body,
	props: {
		pages: [...Array(20).keys()].slice(1),
    show: 6,
	}
});

export default app;