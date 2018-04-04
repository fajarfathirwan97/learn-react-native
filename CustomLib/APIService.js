'use strict'

import apisauce from 'apisauce'

const create = () => {
  const api = apisauce.create({
    baseURL: 'http://eform-api.stagingapps.net/api',
    timeout: 1000 * (60 * 5),
    headers: { client_key: '$2y$10$OoDAS6saH1b3D/nZJ4DXKuOTqVumFTACUZDFkZfepS1h15jDNxdzK' }
  })
  const authLogin = (form) => api.post('v1/user/login', form, {})

  return {
    authLogin
  }

}
export default {
  create
}