var mongoose=require("mongoose");
var employeeSchema=new mongoose.Schema({name:String,salary:Number});
var employeesModel=mongoose.model("product",employeeSchema);
mongoose.connect("mongodb://localhost/project",{
    useNewUrlParser:true,
    useUnifiedTopology:true
});
// var das= new employeesModel({name:"asdffgg",salary:79096});
// das.save(tap);
// function tap(sd,dat)
// {
//     console.log(sd);
//     console.log("dfdhgdhat");
// //     setTimeout(500,fun);
// var das= new employeesModel({name:"asdffgg",salary:79096});
// das.save(function()
// {
//     console.log("completed");
//     mongoose.disconnect();
// });
employeesModel.find(abc);
var data1;
function abc(error,data)
{
    console.log(error);
    console.log(data);
    data1=data;
    mongoose.disconnect();
    // setTimeout(abcd,500)
}
// setTimeout(abcd,2000)
// function abcd()
// {
//     console.log(data1[0].name);
// }
