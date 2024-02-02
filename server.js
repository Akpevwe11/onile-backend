
import dotenv from 'dotenv'
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000

dotenv.config()

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('Db connected')).catch((err) => console.log(err))

app.use(bodyParser.urlencoded({extended: true}));
app.get('/', (req, res) => res.send('Hello World'))

app.listen(process.env.PORT || port, () =>  console.log(`Server Listening on port ${port}...`))
   
