var xl =require("xlsx");
// // var mongoose=require("mongoose");
// // var proSchema=new mongoose.Schema({pid:Number,pfn:String,psn:String,pbn:String,psp:Array,pdes:String,pp:Number,pst:Number,pimg:String});
// // var proModel=mongoose.model("products",proSchema);
// // mongoose.connect("mongodb://localhost/project");
// var wb=xl.readFile("book1.xlsx");
// // proModel.find(function(er,da)
// // {
// //     console.log(er);
// //     console.log(da);
// //     mongoose.disconnect();
// // });
// // var das= new proModel({pid:0,pfn:"cbgd",psn:"uqwi",pbn:"cdmk",psp:[{pspname:"amsn",pspval:0},{pspname:"bvhd",pspval:1}],pdes:"ncndhdtef",pp:50,pst:50,pimg:"ansf"});
// // das.save(function()
// // {
// //     console.log("completed");
// //     mongoose.disconnect();
// // });
// // proModel.remove({pid:0},(er)=>
// // {
// //     console.log("completed")
// //     console.log(er)
// // })
// // console.log(wb.SheetNames);
// var ws=wb.Sheets["sam"];
// // console.log(ws);
// var data = xl.utils.sheet_to_json(ws);
// for(i=0;i<data.length;i++)
// console.log(data[i].pfn);
// for(i=0;i<20;i++)
    // // if(data[i].pfn.length>0)
    // console.log(data[i].pfn.length);
// for(i=0;i<data.length;i++)
// {
//     if(data[i].pfn==undefined)
//     data[i].pfn=" ";
// }
// var nwb=xl.utils.book_new();
// var nws=xl.utils.json_to_sheet(data);
// xl.utils.book_append_sheet(nwb,nws,"new data");
// xl.writeFile(nwb,"data1234.xlsx")"
// var wb=xl.readFile("userdatabase.xlsx");
// var ws=wb.Sheets["userdata"]; 
// var data= xl.utils.sheet_to_json(ws);
// console.log(data);
// console.log(data[data.length-1].id);
// var a=[{"name":"jaideep123"},{"name":"asdf"},{"name":"zxcv"}];
// console.log(a[0].name);
// var nwb=xl.utils.book_new();
// var nws=xl.utils.json_to_sheet(a);
// xl.utils.book_append_sheet(nwb,nws,"data");
// xl.writeFile(nwb,"asd.xlsx");
var wb=xl.readFile("sam.xlsx");
var ws=wb.Sheets["Instructions"]; 
var data= xl.utils.sheet_to_json(ws);
console.log(data);