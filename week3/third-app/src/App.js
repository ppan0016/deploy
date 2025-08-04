import React, {useState} from 'react';

function App() {
	
	// these are state variables
	const [name, setName] = useState('') // initial value to an empty string
	const [headerText , setHeader] = useState('')
	
	
	const handleChange = (e)=>{
		setName(e.target.value) // get latest value from input box
	}
	
	const handleClick = (e)=>{
		setHeader(name)
		e.preventDefault() // stops the page from reloading
	}
	
	return (
		<div className= "header-div">
			<br></br>
			<form onSubmit={handleClick}>
				<h1>Welcome {headerText}</h1>
				<br></br>
				
				<input 
				onChange = {handleChange} type= "text"
				placeholder ='enter your name' value= {name}/>
				<br></br>

				<button type = 'submit'>Submit</button>
			</form>
		</div>
	)
}

export default App;
