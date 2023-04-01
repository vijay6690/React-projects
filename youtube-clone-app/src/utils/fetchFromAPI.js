
const options = {
	headers: {
		'X-RapidAPI-Key': 'e226ae8492mshf05e9e8741a1c12p165f6cjsn40f680c403b3',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

export const fetchFromAPI = async(url) =>{
    const responses = await fetch(`https://youtube-v31.p.rapidapi.com/${url}`, options)
    const data =await responses.json()
    console.log(data.items); 



    // fetch(`https://youtube-v31.p.rapidapi.com/${url}`, options)
    //     .then(response => response.json())
    //     .then(data => console.log(data.items))
    //     .catch(err => console.error(err));
}
