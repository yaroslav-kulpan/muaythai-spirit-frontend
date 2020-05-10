import axios from 'axios'

class SpiritService {
  postMessage = data => {
    return new Promise(resolve => {
      resolve(axios.post('/message/send/', data))
    })
  }
}

export const spiritService = new SpiritService()
