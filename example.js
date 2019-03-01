import axios from 'axios'
import axiosTimed from 'axios-timed'

axiosTimed(axios, response => console.log('ms', response.config.ms))

axios
	.get('https://jsonplaceholder.typicode.com/todos/')
	.then(console.log)
	.catch(console.error)