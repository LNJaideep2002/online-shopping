var xl =require("xlsx");
var totalresults=[];
var wb=xl.readFile("database.xlsx");
var ws=wb.Sheets["new data"]; 
var data= xl.utils.sheet_to_json(ws);
console.log("data collected");
var tg=0;
function noofcharcom(word,wordtocom) {
    var c=0;
    wordtocom=wordtocom.toLowerCase();
    word=word.toLowerCase();
    for(i=0;i<word.length;i++)
    {
        if(word[i]==wordtocom[i])
        {
            c++;
        }
    }
    return c;
}
function searchname(searchword) {
    var searchword1=searchword.split(" ");
    for(i2=0;i2<data.length;i2++)
    {
        console.log();

        for(j=0;j<searchword1.length;j++)
        {
            var dataword=data[i2].pfn.split(" ");
            for(d1=0;d1<dataword.length;d1++)
            {
                if(dataword[d1][0]=="(")
                {
                    var d2=dataword[d1].split("(");
                    dataword[d1]=d2[1];
                }
                if(dataword[d1][dataword[d1].length-1]==")")
                {
                    var d2=dataword[d1].split(")");
                    dataword[d1]=d2[0];
                }
                if(dataword[d1][0]==",")
                {
                    var d2=dataword[d1].split(",");
                    dataword[d1]=d2[1];
                }
                if(dataword[d1][dataword[d1].length-1]==",")
                {
                    var d2=dataword[d1].split(",");
                    dataword[d1]=d2[0];
                }
            }
            for(k=0;k<dataword.length;k++)
            {
                var t=noofcharcom(searchword1[j],dataword[k]);
                var dum=searchword1[j].length/2;
                if(t>dum)
                {
                    var resultobject={
                        pid:0,
                        noofchar:0,
                        noofcharm:0
                    };
                    resultobject.pid=data[i2].pid;
                    resultobject.noofchar=searchword1[j].length;
                    resultobject.noofcharm=t;
                    totalresults.push(resultobject);
                }
            }
        }
    }

    for(i5=0;i5<totalresults.length;i5++)
    for(i6=i5+1;i6<totalresults.length;i6++)
    if(totalresults[i5].pid==totalresults[i6].pid)
    {
        totalresults[i5].noofchar+=totalresults[i6].noofchar;
        totalresults[i5].noofcharm+=totalresults[i6].noofcharm;
        totalresults.splice(i6,1);
    }
    for(i7=0;i7<totalresults.length-1;i7++)
    for(j7=0;j7<totalresults.length-1-i7;j7++)
    if(totalresults[j7].noofcharm<totalresults[j7+1].noofcharm)
    {
        var dum1=totalresults[j7];
        totalresults[j7]=totalresults[j7+1];
        totalresults[j7+1]=dum1;
    }
    var nocm=[];
    var nocm1=[];
    for(i8=0;i8<totalresults.length;i8++)
    if(totalresults[i8].noofcharm==totalresults[i8].noofchar)
    {
        nocm.push(totalresults[i8]);
    }
    else{
        nocm1.push(totalresults[i8]);
    }
    for(i9=0;i9<totalresults.length && i9<nocm.length;i9++)
    totalresults[i9]=nocm[i9];
    for(;i9<totalresults.length && i9<nocm1.length;i9++)
    totalresults[i9]=nocm[i9];
}

// var t=[];
// for(i=0;i<totalresults.length;i++)
// t.push(totalresults[i].pid)
var a="air tag";
searchname(a);
console.log("result");
var datatowin=
{
    products:[]
};
console.log(totalresults);
for(i=0;i<totalresults.length;i++)
{
    if(totalresults[i]!=undefined)
    for(j=0;j<data.length;j++)
    if(totalresults[i].pid==data[j].pid)
    {datatowin.products.push(data[j]);
    break;
    }
}
console.log(datatowin.products);