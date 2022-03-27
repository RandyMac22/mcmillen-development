function loginHelper(state){
    let data = JSON.stringify(state)
		// console.log(data)
		//add our fetch api
		let resources = {
			method: 'POST',
			headers: {
			  'Content-Type': 'application/json'
			},
			body: data 
		  }
		return fetch("https://mcmillendevelopment-default-rtdb.firebaseio.com/users.json",resources).then(res=>{
			return res.json()
		})
}

export default loginHelper;