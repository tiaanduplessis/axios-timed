export default function axiosTimed (instance, cb) {
  instance.interceptors.request.use(request => {
    request.startTime = new Date().getTime()
    return request
  })

  instance.interceptors.response.use(response => {
    response.config.endTime = new Date().getTime()
    response.config.ms = response.config.endTime - response.config.startTime

    if (typeof cb === 'function') {
      cb(response)
    }

    return response
  })
}
