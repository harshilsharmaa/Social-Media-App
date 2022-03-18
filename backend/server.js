const app = require("./app");
const { connectDatabase } = require("./config/database");
const cloudinary = require('cloudinary')
const cors = require('cors');
app.use(cors());


connectDatabase();


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
})


app.listen(process.env.PORT, () => {
    console.log("Server is running on port: 4000"  );
});