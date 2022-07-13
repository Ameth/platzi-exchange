const BASE_URL = 'https://api.coincap.io/v2'

const getAssets = async () => {
  const res = await fetch(`${BASE_URL}/assets?limit=20`)
  const datos = await res.json()

  // console.log(data)
  return datos.data
}

const getAsset = async coin => {
  const res = await fetch(`${BASE_URL}/assets/${coin}`)
  const datos = await res.json()

  // console.log(data)
  return datos.data
}

const getAssetHistory = async coin => {
  const now = new Date()
  const end = now.getTime()
  now.setDate(now.getDate() - 1)
  const start = now.getTime()

  const res = await fetch(
    `${BASE_URL}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`
  )
  const datos = await res.json()

  // console.log(data)
  return datos.data
}

export default {
  getAssets,
  getAsset,
  getAssetHistory
}
