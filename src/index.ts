import app from './app'
import { keys } from './config/keys'
const PORT = keys.port || 3333

app.listen(PORT)

console.log(`Running on PORT ${PORT} - environment ${keys.environment || 'development'}`)
