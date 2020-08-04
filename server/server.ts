import * as express from 'express';
import { DataProvider } from './data-exchange/dataProvider';


const app = express();
const provider = new DataProvider();
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested, Content-Type, Accept')
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE')

    if ('OPTIONS' == req.method) {
        res.sendStatus(200)
    }
    else {
        console.log(`${req.ip} ${req.method} ${req.url}`)
        next()
    }
})

app.get('/', async (req, res) => {
    res.send(await provider.getDocument())
})

app.listen(4201, 'localhost', function () {
    console.log('server is running on 4201')
})
