const fetch_data = async (url) => {
	try {
		const response = await fetch(url);
		if (!response) {
			throw new Error(` HTTP EROR ${response.status}`);
		}
		const data = response.json();
		return data;
	} catch (e) {
		console.error("Error Fetching Data" + e);
		return e;
	}
};
// https://widipe.com/gptgo?text=hello
const api_widipe = "https://widipe.com/";
const api_ssateam = "https://api.ssateam.my.id/";
const call_api = async (endpoint, text) => {
	try {
		let request = await fetch_data(`${api_widipe}${endpoint}?text=${text}`);
		return request.result;
	} catch (e) {
		return e;
	}
};

const gptgo = (text) => call_api("gptgo", text);
const openai = (text) => call_api("openai", text);
const gpt4 = (text) => call_api("gpt4", text);
const blackbox = (text) => call_api("blackbox", text);
const turbo = (text) => call_api("turbo", text);

const call_api_ssateam = async (endpoint, message) => {
	let request = await fetch_data(
		`${api_ssateam}api/${endpoint}?message=${message}`
	);
	return request.data.response;
};
const ragbot = (text) => call_api_ssateam("ragbot", text);
const degreeguru = (text) => call_api_ssateam("degreeguru", text);
const llama3 = (text) => call_api_ssateam("llama3a3", text);

module.exports = {
	gptgo,
	gpt4,
	blackbox,
	turbo,
	openai,
	ragbot,
	degreeguru,
	llama3
};
