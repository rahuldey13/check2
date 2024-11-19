const mongoose = require ('mongoose');

main().catch(err => console.log(err));
const uri = "mongodb+srv://rahuldey13:76wk1Sk9sVvAHuNH@cluster0.5h7aq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


async function main(){
    await mongoose.connect(uri);
}