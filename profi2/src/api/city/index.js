import fetchAPI from "@/utils/fetchAPI";

export const APIGetTopCities = () => {
  return fetchAPI.get('/api/v1/cities/top')
}

export const APISearchCities = (name) => {
  return fetchAPI.get('/api/v1/cities/find?name=' + name)
}

  // searchCities(name) {
  //   return this.request('get', 'api/v1/cities/find?name=' + name)
  // }
  //
  // getCityByIp(ip) {
  //   return this.request('post', 'api/v1/cities/get-by-ip', { user_ip: ip })
  // }
