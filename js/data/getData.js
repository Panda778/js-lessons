export async function getData() {
	const response = await fetch('/data.json')
	const json = await response.json()
	return json
}

export const datas = await getData()
