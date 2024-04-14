export function requestTime(req, res, next) {
  //   req.requestTime = Date.now()
  req.requestTime = new Date()
  next()
}
