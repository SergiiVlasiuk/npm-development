import colors from 'colors'

export function logger(req, res, next) {
  const formattedDate = req.requestTime.toLocaleString('uk-UA', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'UTC',
  })

  console.log(colors.bgGreen.black(`Req.time: ${formattedDate}`))
  next()
}
