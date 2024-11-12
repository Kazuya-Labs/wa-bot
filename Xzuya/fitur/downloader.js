const fetchData = async (url) => {
	try {
		const response = await fetch(url);
		const data = await response.json();
		return data;
	} catch (e) {
		console.log(e);
	}
};
const apiAgatz = `https://api.agatz.xyz/api`;
const ig = async (url) => {
	try {
		const response = await fetchData(`${apiAgatz}/tiktok?url=${url}`);
		const result = response.data;
		return [result.videoLinks, result.title];
	} catch (e) {
		console.log(e);
		return e;
	}
};
const ytmp4 = async (url) => {
	const { data } = await fetchData(`${apiAgatz}/ytmp4?url=${url}`);
	return data.url[0];
};
const twitter = async (url) => {
	try {
		const response = await fetchData(`${apiAgatz}/twitter?url=${url}`);
		return response;
	} catch (e) {
		return e;
	}
};

module.exports = { ig, twitter, ytmp4 };
