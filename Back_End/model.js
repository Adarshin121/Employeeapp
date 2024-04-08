const mongoose = require("mongoose")

//connection
mongoose.connect("<url>")
.then(()=>{
    console.log("Db connected")
})
.catch(err=>console.log(err))

let mongoSchema = mongoose.Schema

const EmployeeSchema = new mongoSchema({
    ename:String,
    eage:Number,
    eposition:String,
    esalary:Number

})

var employeeModel = mongoose.model("employee",EmployeeSchema)
module.exports = employeeModel  

