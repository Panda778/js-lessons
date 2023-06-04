export async function getData() {
	const response = await fetch('/data.json')
	const json = await response.json()
	localStorage.setItem('data', JSON.stringify(json))
	return json
}

export const datas = await getData()
