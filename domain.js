

let orginalurl = 'https://domain-checker7.p.rapidapi.com/whois?domain=';

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '0f849e62c3msh2a875fae96d5fb3p17908djsn9639ddcede65',
        'X-RapidAPI-Host': 'domain-checker7.p.rapidapi.com'
    }
};

async function main() {
		try {
			let geturl = retrieve();
			let url = orginalurl+geturl;
			const response = await fetch(url, options);
			const result = await response.text();
			console.log(result);
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