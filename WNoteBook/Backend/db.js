const mongoose=require("mongoose");
const mongoURI="mongodb://localhost:27017"

const connectToMongo = async () => {
        await mongoose.connect(mongoURI, {});
        console.log("Connected to MongoDB");
  
};

module.exports=connectToMongo