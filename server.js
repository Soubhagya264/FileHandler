const express = require('express');
const dotenv = require('dotenv');
const Routes = require('./routes/routes');
const app = express();

dotenv.config()
const PORT = process.env.PORT || 6000;
const cors = require('cors');
const corsOptions = {
    origin: ['http://localhost:3000'],
    credentials: true
};
app.use(cors(corsOptions));

app.use(Routes);

app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`);
}
)