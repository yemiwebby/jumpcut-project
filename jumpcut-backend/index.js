
import express from 'express';
import cors from 'cors';
import router from "./src/routes/index";

const app = express();
app.use(cors());

const port = 5500;
app.set('port', port);

app.use('/api/generate', router);

app.get('/*', (req, res) => {
    res.status(404).json({
        message: "Resource not found"
    })
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

export default app;
