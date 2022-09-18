const server = require('express')()
const PORT = process.env.PORT || 3333
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet')

dotenv.config({path: './config.env'})
//config general
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(cors({
    credentials: true,
    methods: ["GET", "POST", "PATCH", "DELETE"],
    origin: ["http://localhost:3000" /*"https://NAMEPROJECT.netlify.server"*/],
}));
server.use(helmet());

// connection to database
const connectDB = require('./config/db')
connectDB();
const apiRoutes = require('./api')
app.use("/api/v1", apiRoutes);
server.listen(PORT, ()=>{
    console.log(`API IS RUNNING ON PORT ${PORT}`)
})