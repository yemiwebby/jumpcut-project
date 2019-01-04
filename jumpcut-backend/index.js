
import express from 'express';
const bodyParser = require('body-parser');
const cors = require('cors');
import routes from './src/routes/index';


const app = express();
app.use(cors());

const port = 5500;
app.set('port', port);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


routes(app);

app.get('/*', (req, res) => {
    res.status(404).json({
        message: "Resource not found"
    })
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

export default app;
