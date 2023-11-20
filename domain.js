

let orginalurl = 'https://domain-checker7.p.rapidapi.com/whois?domain=';

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'ea222e7d08mshdb97d0dcb949165p1f8119jsn878144c8814f',
        'X-RapidAPI-Host': 'domain-checker7.p.rapidapi.com'
    }
};



async function main() {
		try {
			let geturl = retrieve();
			let url = orginalurl+geturl;
			const response = await fetch(url, options);
			const result = await response.json();
			JSON.stringify(result);
			console.log(result);
			let expired = result.expires_at;
			console.log(expired);

		} catch (error) {
			console.error(error);
		} 
		
		

}





	

   const retrieve = () => {
	let myInput = document.getElementById('domainname').value;
	return myInput;
   }
  
	document.getElementById('submitval').addEventListener('click', main);

	async function myFunction(){
		
	let geturl = retrieve();
	let url = orginalurl+geturl;
	const response = await fetch(url, options);
	const result = await response.json();
	JSON.stringify(result);
	let expired = result.expires_at;
	let domain5 = result.domain;
	let valid = result.valid;
	let updated = result.updated_at;
	let availabilty = result.available;
	let register = result.registrar;
	let names = document.getElementById('domainname').value;
	document.getElementById('span2').textContent= names;
	document.getElementById('domain5').textContent= domain5;
	document.getElementById('valid').textContent= valid;
	document.getElementById('updated').textContent= updated;
	document.getElementById('registrar').textContent= register;
	document.getElementById('expired').textContent= expired;
		if (availabilty) { 
			document.getElementById('span3').textContent= 'is available'
			document.getElementById('span3').style.color = '#35FF69';
			
		} else { document.getElementById('span3').textContent= 'is not available';
				document.getElementById('span3').style.color = '#9A031E';
		}
	
	document.getElementById("myAnchor").href = "https://www." + retrieve();
	
	


	}

	document.getElementById('submitval').addEventListener('click', main);

