class NetworkService {
  makeAPIGetRequest = (url, data = null) => {
    const options = {method: 'GET'}
    return this.makeAPIRequest(url, options)
  }

  makeAPIPostRequest = (url, data = null) => {
    const options = {method: 'POST', body: data}
    return this.makeAPIRequest(url, options)
  }

  makeAPIDeleteRequest = (url, data = null) => {
    const options = {method: 'DELETE'}
    return this.makeAPIRequest(url, options)
  }

  makeAPIPatchRequest = (url, data = null) => {
    const options = {method: 'PATCH',body: data}
    return this.makeAPIRequest(url, options)
  }

  makeAPIRequest(url,  options){
    async function postData(url, options){
      const response = await fetch(url, options)
      return await response.json()
    }
    return postData(url, options)
  }
}

export default NetworkService