var xl =require("xlsx");
var wb=xl.readFile("database.xlsx");
var ws=wb.Sheets["new data"]; 
var data= xl.utils.sheet_to_json(ws);
// // var d1=[];
// // var d2=0;
// // var datatowin={
// //     products:[],
// //     productad:[],
// //     productsad:[]
// // }
// // for(;d1.length!=26;)
// // {
// //     var t1=Math.floor((Math.random()*550)+1);
// //     for(j=0;j<d1.length;j++)
// //     {
// //         if(d1[j]==t1)
// //         {
// //             d2=1;
// //             break;
// //         }
// //         else{
// //             d2=0;
// //         }
// //     }
// //     if(d2==0&&data[t1-1].psn!=undefined)
// //     {
// //         d1.push(t1);
// //     }
// // }
// // var d3=[];
// // for(i=0;i<26;i++)
// // {
// //     for(j=0;j<data.length;j++)
// //     if(d1[i]==data[j].pid)
// //     datatowin.products.push(data[d1[i]-1]);
// // }
// // var d4=[];
// // for(i=0;i<data.length;i++)
// // {
// //     if((data[i].pbn=="Vivo"||data[i].pbn=="vivo")&&data[i].psn==undefined)
// //     {
// //         d4.push(data[i].pid);
// //     }
// // }
// // var t2=0;
// // var d5=[];
// // var d6=[]
// // for(;d5.length!=3;)
// // {
// //     var t1=Math.floor((Math.random()*d4.length)+1);
// //     for(j=0;j<d6.length;j++)
// //     {
// //         if(d6[j]==t1)
// //         {
// //             t2=1;
// //             break;
// //         }
// //         else{
// //             t2=0;
// //         }
// //     }
// //     if(t2==0)
// //     {
// //     d5.push(d4[t1-1]);
// //     d6.push(t1);
// //     }
// // }
// // for(i=0;i<3;i++)
// // {
// //     for(j=0;j<data.length;j++)
// //     {
// //     if(data[j].pid==d5[i])
// //     {
// //         datatowin.productad.push(data[j]);
// //     }
// //     }
// // }
// // var d4=[];
// // for(i=0;i<data.length;i++)
// // {
// //     if((data[i].pbn=="Samsung"||data[i].pbn=="samsung")&&data[i].psn==undefined)
// //     {
// //         d4.push(data[i].pid);
// //     }
// // }
// // var t2=0;
// // var d5=[];
// // var d6=[]
// // for(;d5.length!=3;)
// // {
// //     var t1=Math.floor((Math.random()*d4.length)+1);
// //     for(j=0;j<d6.length;j++)
// //     {
// //         if(d6[j]==t1)
// //         {
// //             t2=1;
// //             break;
// //         }
// //         else{
// //             t2=0;
// //         }
// //     }
// //     if(t2==0)
// //     {
// //     d5.push(d4[t1-1]);
// //     d6.push(t1);
// //     }
// // }
// // for(i=0;i<3;i++)
// // {
// //     for(j=0;j<data.length;j++)
// //     {
// //     if(data[j].pid==d5[i])
// //     {
// //         datatowin.productad.push(data[j]);
// //     }
// //     }
// // }
// // var d4=[];
// // for(i=0;i<data.length;i++)
// // {
// //     if((data[i].pbn=="Lenovo"||data[i].pbn=="lenovo")&&data[i].psn==undefined)
// //     {
// //         d4.push(data[i].pid);
// //     }
// // }
// // var t2=0;
// // var d5=[];
// // var d6=[]
// // for(;d5.length!=3;)
// // {
// //     var t1=Math.floor((Math.random()*d4.length)+1);
// //     for(j=0;j<d6.length;j++)
// //     {
// //         if(d6[j]==t1)
// //         {
// //             t2=1;
// //             break;
// //         }
// //         else{
// //             t2=0;
// //         }
// //     }
// //     if(t2==0)
// //     {
// //     d5.push(d4[t1-1]);
// //     d6.push(t1);
// //     }
// // }
// // for(i=0;i<3;i++)
// // {
// //     for(j=0;j<data.length;j++)
// //     {
// //     if(data[j].pid==d5[i])
// //     {
// //         datatowin.productad.push(data[j]);
// //     }
// //     }
// // }
// // var d4=[];
// // for(i=0;i<data.length;i++)
// // {
// //     if((data[i].pbn=="Redmi"||data[i].pbn=="redmi")&&data[i].psn==undefined)
// //     {
// //         d4.push(data[i].pid);
// //     }
// // }
// // var t2=0;
// // var d5=[];
// // var d6=[]
// // for(;d5.length!=3;)
// // {
// //     var t1=Math.floor((Math.random()*d4.length)+1);
// //     for(j=0;j<d6.length;j++)
// //     {
// //         if(d6[j]==t1)
// //         {
// //             t2=1;
// //             break;
// //         }
// //         else{
// //             t2=0;
// //         }
// //     }
// //     if(t2==0)
// //     {
// //     d5.push(d4[t1-1]);
// //     d6.push(t1);
// //     }
// // }
// // for(i=0;i<3;i++)
// // {
// //     for(j=0;j<data.length;j++)
// //     {
// //     if(data[j].pid==d5[i])
// //     {
// //         datatowin.productad.push(data[j]);
// //     }
// //     }
// // }
// // var d4=[];
// // for(i=0;i<data.length;i++)
// // {
// //     if((data[i].pbn=="Realme"||data[i].pbn=="realme")&&data[i].psn==undefined)
// //     {
// //         d4.push(data[i].pid);
// //     }
// // }
// // var t2=0;
// // var d5=[];
// // var d6=[]
// // for(;d5.length!=3;)
// // {
// //     var t1=Math.floor((Math.random()*d4.length)+1);
// //     for(j=0;j<d6.length;j++)
// //     {
// //         if(d6[j]==t1)
// //         {
// //             t2=1;
// //             break;
// //         }
// //         else{
// //             t2=0;
// //         }
// //     }
// //     if(t2==0)
// //     {
// //     d5.push(d4[t1-1]);
// //     d6.push(t1);
// //     }
// // }
// // for(i=0;i<3;i++)
// // {
// //     for(j=0;j<data.length;j++)
// //     {
// //     if(data[j].pid==d5[i])
// //     {
// //         datatowin.productad.push(data[j]);
// //     }
// //     }
// // }
// // var d7=[];
// // for(i=0;i<data.length;i++)
// // {
// //     if(data[i].psn==undefined)
// //     d7.push(data[i].pid);
// // }
// // var t2=0;
// // var d5=[];
// // var d6=[]
// // for(;d5.length!=8;)
// // {
// //     var t1=Math.floor((Math.random()*d7.length)+1);
// //     for(j=0;j<d6.length;j++)
// //     {
// //         if(d6[j]==t1)
// //         {
// //             t2=1;
// //             break;
// //         }
// //         else{
// //             t2=0;
// //         }
// //     }
// //     if(t2==0)
// //     {
// //     d5.push(d7[t1-1]);
// //     d6.push(t1);
// //     }
// // }
// // for(i=0;i<d5.length;i++)
// // {
// //     for(j=0;j<data.length;j++)
// //     {
// //         if(data[j].pid==d5[i])
// //         {
// //             datatowin.productsad.push(data[j]);
// //         }
// //     }
// // }
// // console.log(datatowin.productsad);
// // for(i=0;i<data.length;i++)
// // console.log(data[i].cart);
// // var t={
// //     a:"1",
// //     a1:"1",
// //     a2:"2",
// //     a3:"3",
// //     a4:"4",
// //     a5:"5",
// //     a6:"6",
// //     a7:"7",
// //     a8:"8",
// //     a9:"9",
// //     a10:"10",
// //     a11:"11",
// //     a12:"12",
// //     a13:"13",
// // }
// // for(var i in t)
// // {
// //     console.log(i);
// // }
// console.log(data[0].cart.split(","));
// var wb=xl.readFile("userdatabase.xlsx");
// var ws=wb.Sheets["userdata"]; 
// var userdata= xl.utils.sheet_to_json(ws);
// console.log(userdata);
// var datapid;
// for(i=0;i<userdata.length;i++)
// {
//     if(1==userdata[i].id)
//     datapid=userdata[i].cart.split(",")
// }
// for(i=0;i<datapid.length;i++)
// datapid[i]=Number(datapid[0]);
// var datatowin={
//     user:"null",
//     products:[]
// };
// for(i=0;i<datapid.length;i++)
// {
//     for(j=0;j<data.length;j++)
//     if(datapid[i]==data[i].pid)
//     datatowin.products.push(data[i]);
// }
// 
// var a=60;
// console.log(60*10/100);
// for(i=0;i<data.length;i++)
// {
//     console.log(data[i].pbn);
var a1={
    a:2,
    b:5
}
console.log(a1);
