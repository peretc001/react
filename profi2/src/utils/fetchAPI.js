const FETCH_PARAMS = {
  headers: {
    'Content-Type': 'application/json',
  }
}

class fetchAPI {
  static async get (apiMethod, params = {}) {
    const fetchParams = { ...FETCH_PARAMS, method: 'GET' }
    const paramsStr = Object.keys(params).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`).join('&')

    try {
      const response = await fetch( process.env.NEXT_PUBLIC_API_URL + apiMethod + (paramsStr ? `?${paramsStr}` : ''), fetchParams)
      const result = await response.json()

      if (result) {
        if ('data' in result) return result.data
        else return result
      }
      else {
        console.error('error: in ', process.env.NEXT_PUBLIC_API_URL + apiMethod, 'result: ', result)
        return null
      }
    } catch (e) {
      return null
    }
  }

  static async post (apiMethod, params = {}) {
    const fetchParams = { ...FETCH_PARAMS, method: 'POST', body: JSON.stringify(params) }

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_API_URL + apiMethod, fetchParams)
      const result = await response.json()

      if (result) {
        if ('data' in result) return result.data
        else return result
      }
      else {
        console.error('error: in ', process.env.NEXT_PUBLIC_API_URL + apiMethod, 'result: ', result)
        return null
      }
    } catch (e) {
      return null
    }
  }
}

export default fetchAPI
