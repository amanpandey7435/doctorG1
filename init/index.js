const mongoose=require("mongoose");
const Doctor=require("../models/doctor.js");
const initData=require("./data.js");
main().then(res=>console.log("Connected Successfully")).catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/doctorg1');
}

const initDb=async()=>{
    await Doctor.deleteMany({});
    await Doctor.insertMany(initData.data);
    console.log("Data isinserted");
}
console.log("Done");
initDb();
