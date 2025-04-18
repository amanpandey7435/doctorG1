const mongoose=require("mongoose");
const Doctor=require("../models/doctor.js");
const initData=require("./data.js");
main().then(res=>console.log("Connected Successfully")).catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/doctorg1');
}

const initDb=async()=>{
    await Doctor.deleteMany({});
    initData.data=initData.data.map((obj)=>({...obj,owner:'67f12fc4a743d19ceff51bae'}));
    initData.data=initData.data.map((obj)=>({...obj,slots:["10-11"]}));
    await Doctor.insertMany(initData.data);
    console.log("Data isinserted");
}
console.log("Done");
initDb();
