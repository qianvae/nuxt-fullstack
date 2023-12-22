import Vue from 'vue'
const { createLogger, format, transports } = require('winston')

Vue.prototype.logger = createLogger({
  level: 'debug',
  format: format.combine(
    format.timestamp(),
    format.json()
  ),
  transports: [
    new transports.Console()
  ]
})
// Vue.prototype.logger = {
//   debug () {
//     console.log(arguments)
//   }
// }
