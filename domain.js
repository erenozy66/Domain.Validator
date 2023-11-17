let orginalurl = 'https://domain-checker7.p.rapidapi.com/whois?domain=bol.com';
let url = orginalurl.replace('bol.com', document.getElementById("domainname").innerHTML);
console.log(url);
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'bcd1f3a04dmsh3328dc823586677p11a6c0jsne0f06219c9ec',
        'X-RapidAPI-Host': 'domain-checker7.p.rapidapi.com'
    }
};

async function main() {
try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
} catch (error) {
    console.error(error);
}
}
console.log(main());