import bodyParser from "body-parser";
import cors from 'cors';
import express from "express";
import mongoose from "mongoose";
import geodataRoutes from "./routes/route.js";
//import jwt from "jsonwebtoken";
const secretKey = "secret";
const app = express();
const PORT = 5001;

app.use(cors())
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());
app.get('/', (req, res, next) => {

    res.status(200).json({
        status: 'success',
        data: {
            name: 'Geoquake Backend',
            version: '0.1.0'
        }
    });

});
app.use("/geodata", geodataRoutes)


app.listen(process.env.PORT || PORT, () => console.log(`server running on port:http://localhost:${PORT}`));


mongoose.connect("mongodb+srv://sowmyakv22:E2QrNlF9WCyUaJd9@cluster0.rewigfr.mongodb.net/?retryWrites=true&w=majority").then(() => console.log("connected"))
    .catch(e => console.log(e));
    // mongodb+srv://sowmyakv22:E2QrNlF9WCyUaJd9@cluster0.rewigfr.mongodb.net/?retryWrites=true&w=majority
// mongoose.connect("mongodb+srv://Manisha:mani@cluster.erugvlr.mongodb.net/?retryWrites=true&w=majority").then(()=>console.log("connected"))
// .catch(e=>console.log(e));
//mongoose.connect("mongodb+srv://sowmyakv22:PFnq7nKyACyENGSh@cluster0.dhgiden.mongodb.net/?retryWrites=true&w=majority").then(()=>console.log("connected"))
//.catch(e=>console.log(e));
