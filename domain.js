

let orginalurl = 'https://domain-checker7.p.rapidapi.com/whois?domain=';

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'abe322ebfamshcba91590a65ff94p1e49dcjsn1ddf3a572dca',
        'X-RapidAPI-Host': 'domain-checker7.p.rapidapi.com'
    }
};

async function main() {
		try {
			let geturl = retrieve();
			let url = orginalurl+geturl;
			const response = await fetch(url, options);
			const result = await response.json();
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

	function myFunction(){
	let names = document.getElementById('domainname').value;
	document.getElementById('span2').textContent= names;
	document.getElementById("myAnchor").href = "https://www." + retrieve();
	
	


	}

	document.getElementById('submitval').addEventListener('click', main);

