import express from "express";

const app = express();
const port = 3000;

//app.set(`view engine`, `ejs`);

app.get("/", (req,res)=>{
    let today = new Date();
    let dayOfWeek = today.getDay();
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let dayName = days[dayOfWeek];
    let message;
    if(dayOfWeek === 0 || dayOfWeek === 6){
        message = "It's time to have fun";
    } else {
        message = "It's time to work";
    }
    res.render(`index.ejs`, {dayName: dayName, message: message});
});

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}.`)
})