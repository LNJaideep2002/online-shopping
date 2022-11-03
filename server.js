var express = require("express");
var xl = require("xlsx");
var ejs = require("ejs");
var fs = require("fs");
var app = express();
var user1 = "null";
var userid = 0;
var currentwin = 0;
const hostname = '0.0.0.0';
const port = 3000;
app.listen(process.env.PORT || port, function () {
    console.log("server stated");
});
var bodya = require("body-parser");
app.use(bodya.urlencoded({ extended: true }));
app.use(bodya.json());
var wb = xl.readFile("database.xlsx");
var ws = wb.Sheets["new data"];
var data = xl.utils.sheet_to_json(ws);
console.log("data collected");
app.set("view engine", "ejs");
app.use(express.static('public'));
var datatowin1;
app.get("/", function (req, res) {
    currentwin = 1;
    var d1 = [];
    var d2 = 0;
    var datatowin = {
        user: user1,
        product: [],
        productad: [],
        productsad: []
    }
    for (; d1.length != 26;) {
        var t1 = Math.floor((Math.random() * 550) + 1);
        for (j = 0; j < d1.length; j++) {
            if (d1[j] == t1) {
                d2 = 1;
                break;
            }
            else {
                d2 = 0;
            }
        }
        if (d2 == 0 && data[t1 - 1].psn != undefined) {
            d1.push(t1);
        }
    }
    var d3 = [];
    for (i = 0; i < 26; i++) {
        for (j = 0; j < data.length; j++)
            if (d1[i] == data[j].pid)
                datatowin.product.push(data[d1[i] - 1]);
    }
    var d4 = [];
    for (i = 0; i < data.length; i++) {
        if ((data[i].pbn == "Vivo" || data[i].pbn == "vivo") && data[i].psn == undefined) {
            d4.push(data[i].pid);
        }
    }
    var t2 = 0;
    var d5 = [];
    var d6 = []
    for (; d5.length != 3;) {
        var t1 = Math.floor((Math.random() * d4.length) + 1);
        for (j = 0; j < d6.length; j++) {
            if (d6[j] == t1) {
                t2 = 1;
                break;
            }
            else {
                t2 = 0;
            }
        }
        if (t2 == 0) {
            d5.push(d4[t1 - 1]);
            d6.push(t1);
        }
    }
    for (i = 0; i < 3; i++) {
        for (j = 0; j < data.length; j++) {
            if (data[j].pid == d5[i]) {
                datatowin.productad.push(data[j]);
            }
        }
    }
    var d4 = [];
    for (i = 0; i < data.length; i++) {
        if ((data[i].pbn == "Samsung" || data[i].pbn == "samsung") && data[i].psn == undefined) {
            d4.push(data[i].pid);
        }
    }
    var t2 = 0;
    var d5 = [];
    var d6 = []
    for (; d5.length != 3;) {
        var t1 = Math.floor((Math.random() * d4.length) + 1);
        for (j = 0; j < d6.length; j++) {
            if (d6[j] == t1) {
                t2 = 1;
                break;
            }
            else {
                t2 = 0;
            }
        }
        if (t2 == 0) {
            d5.push(d4[t1 - 1]);
            d6.push(t1);
        }
    }
    for (i = 0; i < 3; i++) {
        for (j = 0; j < data.length; j++) {
            if (data[j].pid == d5[i]) {
                datatowin.productad.push(data[j]);
            }
        }
    }
    var d4 = [];
    for (i = 0; i < data.length; i++) {
        if ((data[i].pbn == "Lenovo" || data[i].pbn == "lenovo") && data[i].psn == undefined) {
            d4.push(data[i].pid);
        }
    }
    var t2 = 0;
    var d5 = [];
    var d6 = []
    for (; d5.length != 3;) {
        var t1 = Math.floor((Math.random() * d4.length) + 1);
        for (j = 0; j < d6.length; j++) {
            if (d6[j] == t1) {
                t2 = 1;
                break;
            }
            else {
                t2 = 0;
            }
        }
        if (t2 == 0) {
            d5.push(d4[t1 - 1]);
            d6.push(t1);
        }
    }
    for (i = 0; i < 3; i++) {
        for (j = 0; j < data.length; j++) {
            if (data[j].pid == d5[i]) {
                datatowin.productad.push(data[j]);
            }
        }
    }
    var d4 = [];
    for (i = 0; i < data.length; i++) {
        if ((data[i].pbn == "Redmi" || data[i].pbn == "redmi") && data[i].psn == undefined) {
            d4.push(data[i].pid);
        }
    }
    var t2 = 0;
    var d5 = [];
    var d6 = []
    for (; d5.length != 3;) {
        var t1 = Math.floor((Math.random() * d4.length) + 1);
        for (j = 0; j < d6.length; j++) {
            if (d6[j] == t1) {
                t2 = 1;
                break;
            }
            else {
                t2 = 0;
            }
        }
        if (t2 == 0) {
            d5.push(d4[t1 - 1]);
            d6.push(t1);
        }
    }
    for (i = 0; i < 3; i++) {
        for (j = 0; j < data.length; j++) {
            if (data[j].pid == d5[i]) {
                datatowin.productad.push(data[j]);
            }
        }
    }
    var d4 = [];
    for (i = 0; i < data.length; i++) {
        if ((data[i].pbn == "Realme" || data[i].pbn == "realme") && data[i].psn == undefined) {
            d4.push(data[i].pid);
        }
    }
    var t2 = 0;
    var d5 = [];
    var d6 = []
    for (; d5.length != 3;) {
        var t1 = Math.floor((Math.random() * d4.length) + 1);
        for (j = 0; j < d6.length; j++) {
            if (d6[j] == t1) {
                t2 = 1;
                break;
            }
            else {
                t2 = 0;
            }
        }
        if (t2 == 0) {
            d5.push(d4[t1 - 1]);
            d6.push(t1);
        }
    }
    for (i = 0; i < 3; i++) {
        for (j = 0; j < data.length; j++) {
            if (data[j].pid == d5[i]) {
                datatowin.productad.push(data[j]);
            }
        }
    }
    var d7 = [];
    for (i = 0; i < data.length; i++) {
        if (data[i].psn == undefined)
            d7.push(data[i].pid);
    }
    var t2 = 0;
    var d5 = [];
    var d6 = []
    for (; d5.length != 8;) {
        var t1 = Math.floor((Math.random() * d7.length) + 1);
        for (j = 0; j < d6.length; j++) {
            if (d6[j] == t1) {
                t2 = 1;
                break;
            }
            else {
                t2 = 0;
            }
        }
        if (t2 == 0) {
            d5.push(d7[t1 - 1]);
            d6.push(t1);
        }
    }
    for (i = 0; i < d5.length; i++) {
        for (j = 0; j < data.length; j++) {
            if (data[j].pid == d5[i]) {
                datatowin.productsad.push(data[j]);
            }
        }
    }
    datatowin1 = datatowin;
    res.render("home", datatowin);
});
app.get("/login", function (req, res) {
    console.log(req.body);
    res.sendFile(__dirname + "/login.html");

});
app.post("/search", function (req, res) {
    currentwin = 2;
    var totalresults = [];
    function noofcharcom(word, wordtocom) {
        var c = 0;
        wordtocom = wordtocom.toLowerCase();
        word = word.toLowerCase();
        for (i = 0; i < word.length; i++) {
            if (word[i] == wordtocom[i]) {
                c++;
            }
        }
        return c;
    }
    function searchname(searchword) {
        var searchword1 = searchword.split(" ");
        for (i2 = 0; i2 < data.length; i2++) {
            console.log();

            for (j = 0; j < searchword1.length; j++) {
                var dataword = data[i2].pfn.split(" ");
                for (d1 = 0; d1 < dataword.length; d1++) {
                    if (dataword[d1][0] == "(") {
                        var d2 = dataword[d1].split("(");
                        dataword[d1] = d2[1];
                    }
                    if (dataword[d1][dataword[d1].length - 1] == ")") {
                        var d2 = dataword[d1].split(")");
                        dataword[d1] = d2[0];
                    }
                    if (dataword[d1][0] == ",") {
                        var d2 = dataword[d1].split(",");
                        dataword[d1] = d2[1];
                    }
                    if (dataword[d1][dataword[d1].length - 1] == ",") {
                        var d2 = dataword[d1].split(",");
                        dataword[d1] = d2[0];
                    }
                }
                for (k = 0; k < dataword.length; k++) {
                    var t = noofcharcom(searchword1[j], dataword[k]);
                    var dum = searchword1[j].length / 2;
                    if (t > dum) {
                        var resultobject = {
                            pid: 0,
                            noofchar: 0,
                            noofcharm: 0
                        };
                        resultobject.pid = data[i2].pid;
                        resultobject.noofchar = searchword1[j].length;
                        resultobject.noofcharm = t;
                        totalresults.push(resultobject);
                    }
                }
            }
        }

        for (i5 = 0; i5 < totalresults.length; i5++)
            for (i6 = i5 + 1; i6 < totalresults.length; i6++)
                if (totalresults[i5].pid == totalresults[i6].pid) {
                    totalresults[i5].noofchar += totalresults[i6].noofchar;
                    totalresults[i5].noofcharm += totalresults[i6].noofcharm;
                    totalresults.splice(i6, 1);
                }
        for (i7 = 0; i7 < totalresults.length - 1; i7++)
            for (j7 = 0; j7 < totalresults.length - 1 - i7; j7++)
                if (totalresults[j7].noofcharm < totalresults[j7 + 1].noofcharm) {
                    var dum1 = totalresults[j7];
                    totalresults[j7] = totalresults[j7 + 1];
                    totalresults[j7 + 1] = dum1;
                }
        var nocm = [];
        var nocm1 = [];
        for (i8 = 0; i8 < totalresults.length; i8++)
            if (totalresults[i8].noofcharm == totalresults[i8].noofchar) {
                nocm.push(totalresults[i8]);
            }
            else {
                nocm1.push(totalresults[i8]);
            }
        for (i9 = 0; i9 < totalresults.length && i9 < nocm.length; i9++)
            totalresults[i9] = nocm[i9];
        for (; i9 < totalresults.length && i9 < nocm1.length; i9++)
            totalresults[i9] = nocm[i9];
    }
    searchname(req.body.search);
    var datatowin =
    {
        user: user1,
        result: "",
        products: []
    };
    datatowin.result = req.body.search;
    for (i = 0; i < totalresults.length; i++) {
        if (totalresults[i] != undefined)
            for (j = 0; j < data.length; j++)
                if (totalresults[i].pid == data[j].pid) {
                    datatowin.products.push(data[j]);
                    break;
                }
    }
    datatowin1 = datatowin;
    res.render("res", datatowin);
});
app.post("/loginuser", function (req, res) {
    var wb = xl.readFile("userdatabase.xlsx");
    var ws = wb.Sheets["userdata"];
    var userdata = xl.utils.sheet_to_json(ws);
    var t = 0;
    var username;
    for (i = 0; i < userdata.length; i++) {
        if (userdata[i].email == req.body.email) {
            if (userdata[i].password == req.body.password) {
                t = 1;
                username = userdata[i].name;
                userid = userdata[i].id;
                user1 = username;
                break;
            }
            else {
                t = 2;
                break;
            }
        }
        else {
            t = 0;
        }
    }
    if (t == 0) {
        res.render("loginst", { st: "Email not Found", st1: 0 });
    }
    if (t == 2)//email matching password not matching
    {
        res.render("loginst", { st: "Email and Password not Matching", st1: 1 });
    }
    if (t == 1) {
        res.render("loginst", { st: "Login Successfully", st1: 2 });
    }
});
app.get("/signup", function (req, res) {
    res.sendFile(__dirname + "/s.html");
})
app.post("/signupuser", function (req, res) {
    var wb = xl.readFile("userdatabase.xlsx");
    var ws = wb.Sheets["userdata"];
    console.log(req.body);
    var userdata = xl.utils.sheet_to_json(ws);
    console.log(req.body);
    var userdata1 = { "id": "0", "email": "null", "password": "null", "address": "null", "city": "null", "checkbox": "null", "dob": "null", "cart": "null", "name": "null" };
    userdata1.email = req.body.email;
    userdata1.password = req.body.password;
    userdata1.name = req.body.name;
    userdata1.address = req.body.address;
    userdata1.city = req.body.city;
    userdata1.checkbox = req.body.checkbox;
    userdata1.dob = req.body.dob;
    userdata1.id = userdata[userdata.length - 1].id + 1
    userdata.push(userdata1)
    var nwb1 = xl.utils.book_new();
    var nws1 = xl.utils.json_to_sheet(userdata);
    xl.utils.book_append_sheet(nwb1, nws1, "userdata");
    xl.writeFile(nwb1, "userdatabase.xlsx");
    res.sendFile(__dirname + "/login.html");
});
app.get("/tocart", function (req, res) {
    if (user1 == "null") {
        res.sendFile(__dirname + "/login.html");
    } else {
        var wb = xl.readFile("userdatabase.xlsx");
        var ws = wb.Sheets["userdata"];
        var userdata = xl.utils.sheet_to_json(ws);
        for (i = 0; i < userdata.length; i++) {
            if (userid == userdata[i].id) {
                if (userdata[i].cart == "null")
                    userdata[i].cart = "";
                userdata[i].cart += req.query.proid + ",";
            }
        }
        var nwb1 = xl.utils.book_new();
        var nws1 = xl.utils.json_to_sheet(userdata);
        xl.utils.book_append_sheet(nwb1, nws1, "userdata");
        xl.writeFile(nwb1, "userdatabase.xlsx");
        if (currentwin == 1) {
            res.render("home", datatowin1);
        } else {
            res.render("res", datatowin1);
        }
    }
});
app.get("/cart", function (req, res) {
    if (user1 == "null") {
        res.sendFile(__dirname + "/login.html");
    } else {
        var wb = xl.readFile("userdatabase.xlsx");
        var ws = wb.Sheets["userdata"];
        var userdata = xl.utils.sheet_to_json(ws);
        var datapid;
        for (i = 0; i < userdata.length; i++) {
            if (userid == userdata[i].id)
                datapid = userdata[i].cart.split(",")
        }
        var datatowin = {
            user: user1,
            products: []
        };
        for (i = 0; i < datapid.length; i++) {
            for (j = 0; j < data.length; j++)
                if (datapid[i] == data[j].pid)
                    datatowin.products.push(data[j]);
        }
        res.render("cart", datatowin);
    }
});
app.get("/checkout", function (req, res) {
    console.log(req.query);
    var wb = xl.readFile("userdatabase.xlsx");
    var ws = wb.Sheets["userdata"];
    var userdata = xl.utils.sheet_to_json(ws);
    var check = "";
    for (var i in req.query)
        check += i + ":" + req.query[i] + ",";
    for (i = 0; i < userdata.length; i++)
        if (userdata[i].id == userid)
            userdata[i].cartq = check;
    var nwb1 = xl.utils.book_new();
    var nws1 = xl.utils.json_to_sheet(userdata);
    xl.utils.book_append_sheet(nwb1, nws1, "userdata");
    xl.writeFile(nwb1, "userdatabase.xlsx");
    var pids = [];
    var qty = [];
    for (var i in req.query)
        pids.push(Number(i));
    for (var i in req.query) {
        if (req.query[i] == "Qty 1")
            qty.push(1);
        if (req.query[i] == "Qty 2")
            qty.push(2);
        if (req.query[i] == "Qty 3")
            qty.push(3);
        if (req.query[i] == "Qty 4")
            qty.push(4);
        if (req.query[i] == "Qty 5")
            qty.push(5);
        if (req.query[i] == "Qty 6")
            qty.push(6);
        if (req.query[i] == "Qty 7")
            qty.push(7);
        if (req.query[i] == "Qty 8")
            qty.push(8);
        if (req.query[i] == "Qty 9")
            qty.push(9);
        if (req.query[i] == "Qty 10")
            qty.push(10);
        if (req.query[i] == "Qty 0")
            qty.push(0);
    }
    var datatowin2 = {
        user: user1,
        titems: 0,
        tprice: 0
    };
    for (i = 0; i < qty.length; i++)
        if (qty[i] != 0)
            datatowin2.titems += qty[i];
    for (i = 0; i < pids.length; i++) {
        for (j = 0; j < data.length; j++)
            if (pids[i] == data[j].pid)
                datatowin2.tprice += data[j].pp * qty[i];
    }
    datatowin2.tprice = datatowin2.tprice * 0.05 + 100;
    res.render("pay", datatowin2);
});
app.get("/order", function (req, res) {
    console.log(req.query);
    for (var i in req.query) {
        if (i == "cash") {
            var wb = xl.readFile("userdatabase.xlsx");
            var ws = wb.Sheets["userdata"];
            var userdata = xl.utils.sheet_to_json(ws);
            for (i = 0; i < userdata.length; i++) {
                if (userdata[i].id == userid) {
                    userdata[i].cart = "null";
                    userdata[i].cartq = "null";
                }
            }
            var nwb1 = xl.utils.book_new();
            var nws1 = xl.utils.json_to_sheet(userdata);
            xl.utils.book_append_sheet(nwb1, nws1, "userdata");
            xl.writeFile(nwb1, "userdatabase.xlsx");
            res.sendFile(__dirname + "/cash.html");
        }
        if (i == "card") {
            res.sendFile(__dirname + "/card.html");
        }
    }
});
app.get("/payment", function (req, res) {

    var wb = xl.readFile("userdatabase.xlsx");
    var ws = wb.Sheets["userdata"];
    var userdata = xl.utils.sheet_to_json(ws);
    for (i = 0; i < userdata.length; i++) {
        if (userdata[i].id == userid) {
            userdata[i].cart = "null";
            userdata[i].cartq = "null";
        }
    }
    var nwb1 = xl.utils.book_new();
    var nws1 = xl.utils.json_to_sheet(userdata);
    xl.utils.book_append_sheet(nwb1, nws1, "userdata");
    xl.writeFile(nwb1, "userdatabase.xlsx");
    res.sendFile(__dirname + "/payment.html");
});
app.get("/done", function (req, res) {

    res.sendFile(__dirname + "/cash.html");
});
app.get("/samsung", function (req, res) {
    var datatowin =
    {
        user: user1,
        result: "",
        products: []
    };
    for (i = 0; i < data.length; i++) {
        var t = "";
        if (data[i].type != undefined)
            var t = data[i].type.toLowerCase();
        if (data[i].pbn != undefined)
            var pbn = data[i].pbn.toLowerCase();
        if (pbn == "samsung" && data[i].psn != undefined && t == "mobile") {
            datatowin.products.push(data[i]);
        }
    }
    datatowin.result = "samsung";
    res.render("res", datatowin);
});
app.get("/apple", function (req, res) {
    var datatowin =
    {
        user: user1,
        result: "",
        products: []
    };
    for (i = 0; i < data.length; i++) {
        var t = "";
        if (data[i].type != undefined)
            var t = data[i].type.toLowerCase();
        if (data[i].pbn != undefined)
            var pbn = data[i].pbn.toLowerCase();
        if (pbn == "apple" && data[i].psn != undefined && t == "mobile") {
            datatowin.products.push(data[i]);
        }
    }
    datatowin.result = "apple";
    res.render("res", datatowin);
});
app.get("/huawei", function (req, res) {
    var datatowin =
    {
        user: user1,
        result: "",
        products: []
    };
    for (i = 0; i < data.length; i++) {
        var t = "";
        if (data[i].type != undefined)
            var t = data[i].type.toLowerCase();
        if (data[i].pbn != undefined)
            var pbn = data[i].pbn.toLowerCase();
        if (pbn == "honor" && data[i].psn != undefined && t == "mobile") {
            datatowin.products.push(data[i]);
        }
    }
    datatowin.result = "huawei";
    res.render("res", datatowin);
});
app.get("/xiaomi", function (req, res) {
    var datatowin =
    {
        user: user1,
        result: "",
        products: []
    };
    for (i = 0; i < data.length; i++) {
        var t = "";
        if (data[i].type != undefined)
            var t = data[i].type.toLowerCase();
        if (data[i].pbn != undefined)
            var pbn = data[i].pbn.toLowerCase();
        if (pbn == "redmi" && data[i].psn != undefined && t == "mobile") {
            datatowin.products.push(data[i]);
        }
    }
    datatowin.result = "xiaomi";
    res.render("res", datatowin);
});
app.get("/oppo", function (req, res) {
    var datatowin =
    {
        user: user1,
        result: "",
        products: []
    };
    for (i = 0; i < data.length; i++) {
        var t = "";
        if (data[i].type != undefined)
            var t = data[i].type.toLowerCase();
        if (data[i].pbn != undefined)
            var pbn = data[i].pbn.toLowerCase();
        if (pbn == "oppo" && data[i].psn != undefined && t == "mobile") {
            datatowin.products.push(data[i]);
        }
    }
    datatowin.result = "oppo";
    res.render("res", datatowin);
});
app.get("/lg", function (req, res) {
    var datatowin =
    {
        user: user1,
        result: "",
        products: []
    };
    for (i = 0; i < data.length; i++) {
        var t = "";
        if (data[i].type != undefined)
            var t = data[i].type.toLowerCase();
        if (data[i].pbn != undefined)
            var pbn = data[i].pbn.toLowerCase();
        if (pbn == "lg" && data[i].psn != undefined && t == "mobile") {
            datatowin.products.push(data[i]);
        }
    }
    datatowin.result = "lg";
    res.render("res", datatowin);
});
app.get("/realme", function (req, res) {
    var datatowin =
    {
        user: user1,
        result: "",
        products: []
    };
    for (i = 0; i < data.length; i++) {
        var t = "";
        if (data[i].type != undefined)
            var t = data[i].type.toLowerCase();
        if (data[i].pbn != undefined)
            var pbn = data[i].pbn.toLowerCase();
        if (pbn == "realme" && data[i].psn != undefined && t == "mobile") {
            datatowin.products.push(data[i]);
        }
    }
    datatowin.result = "realme";
    res.render("res", datatowin);
});
app.get("/vivo", function (req, res) {
    var datatowin =
    {
        user: user1,
        result: "",
        products: []
    };
    for (i = 0; i < data.length; i++) {
        var t = "";
        if (data[i].type != undefined)
            var t = data[i].type.toLowerCase();
        if (data[i].type != undefined)
            var t = data[i].type.toLowerCase();
        if (data[i].pbn != undefined)
            var pbn = data[i].pbn.toLowerCase();
        if (pbn == "vivo" && data[i].psn != undefined && t == "mobile") {
            datatowin.products.push(data[i]);
        }
    }
    datatowin.result = "vivo";
    res.render("res", datatowin);
});
app.get("/one plus", function (req, res) {
    var datatowin =
    {
        user: user1,
        result: "",
        products: []
    };
    for (i = 0; i < data.length; i++) {
        var t = "";
        if (data[i].type != undefined)
            t = data[i].type.toLowerCase();
        if (data[i].pbn != undefined)
            var pbn = data[i].pbn.toLowerCase();
        if (pbn == "one plus" && data[i].psn != undefined && t == "mobile") {
            datatowin.products.push(data[i]);
        }
    }
    datatowin.result = "one plus";
    res.render("res", datatowin);
});
app.get("/puma", function (req, res) {
    var datatowin =
    {
        user: user1,
        result: "",
        products: []
    };
    for (i = 0; i < data.length; i++) {
        if (data[i].pbn != undefined)
            var pbn = data[i].pbn.toLowerCase();
        if (pbn == "puma" && data[i].psn != undefined) {
            datatowin.products.push(data[i]);
        }
    }
    datatowin.result = "puma";
    res.render("res", datatowin);
});
app.get("/lee", function (req, res) {
    var datatowin =
    {
        user: user1,
        result: "",
        products: []
    };
    for (i = 0; i < data.length; i++) {
        if (data[i].pbn != undefined)
            var pbn = data[i].pbn.toLowerCase();
        if (pbn == "lee" && data[i].psn != undefined) {
            datatowin.products.push(data[i]);
        }
    }
    datatowin.result = "lee";
    res.render("res", datatowin);
});
app.get("/allen", function (req, res) {
    var datatowin =
    {
        user: user1,
        result: "",
        products: []
    };
    for (i = 0; i < data.length; i++) {
        if (data[i].pbn != undefined)
            var pbn = data[i].pbn.toLowerCase();
        if (pbn == "allen solly" && data[i].psn != undefined) {
            datatowin.products.push(data[i]);
        }
    }
    datatowin.result = "allen solly";
    res.render("res", datatowin);
});
app.get("/peter", function (req, res) {
    var datatowin =
    {
        user: user1,
        result: "",
        products: []
    };
    for (i = 0; i < data.length; i++) {
        if (data[i].pbn != undefined)
            var pbn = data[i].pbn.toLowerCase();
        if (pbn == "peter england" && data[i].psn != undefined) {
            datatowin.products.push(data[i]);
        }
    }
    datatowin.result = "peter england";
    res.render("res", datatowin);
});
app.get("/van", function (req, res) {
    var datatowin =
    {
        user: user1,
        result: "",
        products: []
    };
    for (i = 0; i < data.length; i++) {
        if (data[i].pbn != undefined)
            var pbn = data[i].pbn.toLowerCase();
        if (pbn == "van heusen" && data[i].psn != undefined) {
            datatowin.products.push(data[i]);
        }
    }
    datatowin.result = "van heusen";
    res.render("res", datatowin);
});
app.get("/raymond", function (req, res) {
    var datatowin =
    {
        user: user1,
        result: "",
        products: []
    };
    for (i = 0; i < data.length; i++) {
        if (data[i].pbn != undefined)
            var pbn = data[i].pbn.toLowerCase();
        if (pbn == "raymond" && data[i].psn != undefined) {
            datatowin.products.push(data[i]);
        }
    }
    datatowin.result = "raymond";
    res.render("res", datatowin);
});
app.get("/park", function (req, res) {
    var datatowin =
    {
        user: user1,
        result: "",
        products: []
    };
    for (i = 0; i < data.length; i++) {
        if (data[i].pbn != undefined)
            var pbn = data[i].pbn.toLowerCase();
        if (pbn == "park avenue" && data[i].psn != undefined) {
            datatowin.products.push(data[i]);
        }
    }
    datatowin.result = "park avenue";
    res.render("res", datatowin);
});
app.get("/stabil", function (req, res) {
    var datatowin =
    {
        user: user1,
        result: "",
        products: []
    };
    for (i = 0; i < data.length; i++) {
        var t = "";
        if (data[i].type != undefined)
            t = data[i].type.toLowerCase();
        if (data[i].pbn != undefined)
            var pbn = data[i].pbn.toLowerCase();
        if (data[i].psn != undefined && t == "satbilizer") {
            datatowin.products.push(data[i]);
        }
    }
    datatowin.result = "satbilizer";
    res.render("res", datatowin);
});
app.get("/air", function (req, res) {
    var datatowin =
    {
        user: user1,
        result: "",
        products: []
    };
    for (i = 0; i < data.length; i++) {
        var t = "";
        if (data[i].type != undefined)
            t = data[i].type.toLowerCase();
        if (data[i].pbn != undefined)
            var pbn = data[i].pbn.toLowerCase();
        if (data[i].psn != undefined && t == "air cooler") {
            datatowin.products.push(data[i]);
        }
    }
    datatowin.result = "air cooler";
    res.render("res", datatowin);
});
app.get("/heat", function (req, res) {
    var datatowin =
    {
        user: user1,
        result: "",
        products: []
    };
    for (i = 0; i < data.length; i++) {
        var t = "";
        if (data[i].type != undefined)
            t = data[i].type.toLowerCase();
        if (data[i].pbn != undefined)
            var pbn = data[i].pbn.toLowerCase();
        if (data[i].psn != undefined && t == "heater") {
            datatowin.products.push(data[i]);
        }
    }
    datatowin.result = "heater";
    res.render("res", datatowin);
});
app.get("/wash", function (req, res) {
    var datatowin =
    {
        user: user1,
        result: "",
        products: []
    };
    for (i = 0; i < data.length; i++) {
        var t = "";
        if (data[i].type != undefined)
            t = data[i].type.toLowerCase();
        if (data[i].pbn != undefined)
            var pbn = data[i].pbn.toLowerCase();
        if (data[i].psn != undefined && t == "wash machine") {
            datatowin.products.push(data[i]);
        }
    }
    datatowin.result = "wash machine";
    res.render("res", datatowin);
});
app.get("/refrig", function (req, res) {
    var datatowin =
    {
        user: user1,
        result: "",
        products: []
    };
    for (i = 0; i < data.length; i++) {
        var t = "";
        if (data[i].type != undefined)
            t = data[i].type.toLowerCase();
        if (data[i].pbn != undefined)
            var pbn = data[i].pbn.toLowerCase();
        if (data[i].psn != undefined && t == "refrigerator") {
            datatowin.products.push(data[i]);
        }
    }
    datatowin.result = "refrigerator";
    res.render("res", datatowin);
});
app.get("/tv", function (req, res) {
    var datatowin =
    {
        user: user1,
        result: "",
        products: []
    };
    for (i = 0; i < data.length; i++) {
        var t = "";
        if (data[i].type != undefined)
            t = data[i].type.toLowerCase();
        if (data[i].pbn != undefined)
            var pbn = data[i].pbn.toLowerCase();
        if (data[i].psn != undefined && t == "tv") {
            datatowin.products.push(data[i]);
        }
    }
    datatowin.result = "tv";
    res.render("res", datatowin);
});
app.get("/airc", function (req, res) {
    var datatowin =
    {
        user: user1,
        result: "",
        products: []
    };
    for (i = 0; i < data.length; i++) {
        var t = "";
        if (data[i].type != undefined)
            t = data[i].type.toLowerCase();
        if (data[i].pbn != undefined)
            var pbn = data[i].pbn.toLowerCase();
        if (data[i].psn != undefined && t == "ac") {
            datatowin.products.push(data[i]);
        }
    }
    datatowin.result = "Air conditioners";
    res.render("res", datatowin);
});
app.get("/cricket", function (req, res) {
    var datatowin =
    {
        user: user1,
        result: "",
        products: []
    };
    for (i = 0; i < data.length; i++) {
        var t = "";
        if (data[i].type != undefined)
            t = data[i].type.toLowerCase();
        if (data[i].pbn != undefined)
            var pbn = data[i].pbn.toLowerCase();
        if (data[i].psn != undefined && t == "cricket") {
            datatowin.products.push(data[i]);
        }
    }
    datatowin.result = "cricket";
    res.render("res", datatowin);
});
app.get("/foot", function (req, res) {
    var datatowin =
    {
        user: user1,
        result: "",
        products: []
    };
    for (i = 0; i < data.length; i++) {
        var t = "";
        if (data[i].type != undefined)
            t = data[i].type.toLowerCase();
        if (data[i].pbn != undefined)
            var pbn = data[i].pbn.toLowerCase();
        if (data[i].psn != undefined && t == "football") {
            datatowin.products.push(data[i]);
        }
    }
    datatowin.result = "football";
    res.render("res", datatowin);
});
app.get("/batminton", function (req, res) {
    var datatowin =
    {
        user: user1,
        result: "",
        products: []
    };
    for (i = 0; i < data.length; i++) {
        var t = "";
        if (data[i].type != undefined)
            t = data[i].type.toLowerCase();
        if (data[i].pbn != undefined)
            var pbn = data[i].pbn.toLowerCase();
        if (data[i].psn != undefined && t == "batminton") {
            datatowin.products.push(data[i]);
        }
    }
    datatowin.result = "batminton";
    res.render("res", datatowin);
});
app.get("/table", function (req, res) {
    var datatowin =
    {
        user: user1,
        result: "",
        products: []
    };
    for (i = 0; i < data.length; i++) {
        var t = "";
        if (data[i].type != undefined)
            t = data[i].type.toLowerCase();
        if (data[i].pbn != undefined)
            var pbn = data[i].pbn.toLowerCase();
        if (data[i].psn != undefined && t == "table") {
            datatowin.products.push(data[i]);
        }
    }
    datatowin.result = "table tennis";
    res.render("res", datatowin);
});
app.get("/tennis", function (req, res) {
    var datatowin =
    {
        user: user1,
        result: "",
        products: []
    };
    for (i = 0; i < data.length; i++) {
        var t = "";
        if (data[i].type != undefined)
            t = data[i].type.toLowerCase();
        if (data[i].pbn != undefined)
            var pbn = data[i].pbn.toLowerCase();
        if (data[i].psn != undefined && t == "tennis") {
            datatowin.products.push(data[i]);
        }
    }
    datatowin.result = "tennis";
    res.render("res", datatowin);
});
app.get("/basket", function (req, res) {
    var datatowin =
    {
        user: user1,
        result: "",
        products: []
    };
    for (i = 0; i < data.length; i++) {
        var t = "";
        if (data[i].type != undefined)
            t = data[i].type.toLowerCase();
        if (data[i].pbn != undefined)
            var pbn = data[i].pbn.toLowerCase();
        if (data[i].psn != undefined && t == "basket") {
            datatowin.products.push(data[i]);
        }
    }
    datatowin.result = "basket ball";
    res.render("res", datatowin);
});
app.get("/swimming", function (req, res) {
    var datatowin =
    {
        user: user1,
        result: "",
        products: []
    };
    for (i = 0; i < data.length; i++) {
        var t = "";
        if (data[i].type != undefined)
            t = data[i].type.toLowerCase();
        if (data[i].pbn != undefined)
            var pbn = data[i].pbn.toLowerCase();
        if (data[i].psn != undefined && t == "swimming") {
            datatowin.products.push(data[i]);
        }
    }
    datatowin.result = "swimming";
    res.render("res", datatowin);
});
app.get("/volley", function (req, res) {
    var datatowin =
    {
        user: user1,
        result: "",
        products: []
    };
    for (i = 0; i < data.length; i++) {
        var t = "";
        if (data[i].type != undefined)
            t = data[i].type.toLowerCase();
        if (data[i].pbn != undefined)
            var pbn = data[i].pbn.toLowerCase();
        if (data[i].psn != undefined && t == "volley") {
            datatowin.products.push(data[i]);
        }
    }
    datatowin.result = "volley ball";
    res.render("res", datatowin);
});
app.get("/mac", function (req, res) {
    var datatowin =
    {
        user: user1,
        result: "",
        products: []
    };
    for (i = 0; i < data.length; i++) {
        var t = "";
        var pbn = " ";
        if (data[i].type != undefined)
            var t = data[i].type.toLowerCase();
        if (data[i].pbn != undefined)
            var pbn = data[i].pbn.toLowerCase();
        if (pbn == "apple" && data[i].psn != undefined && t == "laptop") {
            datatowin.products.push(data[i]);
        }
    }
    datatowin.result = "mac book";
    res.render("res", datatowin);
});
app.get("/hp", function (req, res) {
    var datatowin =
    {
        user: user1,
        result: "",
        products: []
    };
    for (i = 0; i < data.length; i++) {
        var t = "";
        if (data[i].type != undefined)
            var t = data[i].type.toLowerCase();
        if (data[i].pbn != undefined)
            var pbn = data[i].pbn.toLowerCase();
        if (pbn == "hp" && data[i].psn != undefined && t == "laptop") {
            datatowin.products.push(data[i]);
        }
    }
    datatowin.result = "hp";
    res.render("res", datatowin);
});
app.get("/dell", function (req, res) {
    var datatowin =
    {
        user: user1,
        result: "",
        products: []
    };
    for (i = 0; i < data.length; i++) {
        var t = "";
        if (data[i].type != undefined)
            var t = data[i].type.toLowerCase();
        if (data[i].pbn != undefined)
            var pbn = data[i].pbn.toLowerCase();
        if (pbn == "dell" && data[i].psn != undefined && t == "laptop") {
            datatowin.products.push(data[i]);
        }
    }
    datatowin.result = "dell";
    res.render("res", datatowin);
});
app.get("/lenovo", function (req, res) {
    var datatowin =
    {
        user: user1,
        result: "",
        products: []
    };
    for (i = 0; i < data.length; i++) {
        var t = "";
        if (data[i].type != undefined)
            var t = data[i].type.toLowerCase();
        if (data[i].pbn != undefined)
            var pbn = data[i].pbn.toLowerCase();
        if (pbn == "lenovo" && data[i].psn != undefined && t == "laptop") {
            datatowin.products.push(data[i]);
        }
    }
    datatowin.result = "lenovo";
    res.render("res", datatowin);
});
app.get("/acer", function (req, res) {
    var datatowin =
    {
        user: user1,
        result: "",
        products: []
    };
    for (i = 0; i < data.length; i++) {
        var t = "";
        if (data[i].type != undefined)
            var t = data[i].type.toLowerCase();
        if (data[i].pbn != undefined)
            var pbn = data[i].pbn.toLowerCase();
        if (pbn == "acer" && data[i].psn != undefined && t == "laptop") {
            datatowin.products.push(data[i]);
        }
    }
    datatowin.result = "acer";
    res.render("res", datatowin);
});
app.get("/samsungl", function (req, res) {
    var datatowin =
    {
        user: user1,
        result: "",
        products: []
    };
    for (i = 0; i < data.length; i++) {
        var t = "";
        if (data[i].type != undefined)
            var t = data[i].type.toLowerCase();
        if (data[i].pbn != undefined)
            var pbn = data[i].pbn.toLowerCase();
        if (pbn == "samsung" && data[i].psn != undefined && t == "laptop") {
            datatowin.products.push(data[i]);
        }
    }
    datatowin.result = "samsung";
    res.render("res", datatowin);
});
app.get("/asus", function (req, res) {
    var datatowin =
    {
        user: user1,
        result: "",
        products: []
    };
    for (i = 0; i < data.length; i++) {
        var t = "";
        if (data[i].type != undefined)
            var t = data[i].type.toLowerCase();
        if (data[i].pbn != undefined)
            var pbn = data[i].pbn.toLowerCase();
        if (pbn == "asus" && data[i].psn != undefined && t == "laptop") {
            datatowin.products.push(data[i]);
        }
    }
    datatowin.result = "asus";
    res.render("res", datatowin);
});
app.get("/hcl", function (req, res) {
    var datatowin =
    {
        user: user1,
        result: "",
        products: []
    };
    for (i = 0; i < data.length; i++) {
        var t = "";
        if (data[i].type != undefined)
            var t = data[i].type.toLowerCase();
        if (data[i].pbn != undefined)
            var pbn = data[i].pbn.toLowerCase();
        if (pbn == "hcl" && data[i].psn != undefined && t == "laptop") {
            datatowin.products.push(data[i]);
        }
    }
    datatowin.result = "hcl";
    res.render("res", datatowin);
});
app.get("/sony", function (req, res) {
    var datatowin =
    {
        user: user1,
        result: "",
        products: []
    };
    for (i = 0; i < data.length; i++) {
        var t = "";
        if (data[i].type != undefined)
            var t = data[i].type.toLowerCase();
        if (data[i].pbn != undefined)
            var pbn = data[i].pbn.toLowerCase();
        if (pbn == "sony" && data[i].psn != undefined && t == "laptop") {
            datatowin.products.push(data[i]);
        }
    }
    datatowin.result = "sony";
    res.render("res", datatowin);
});

app.get("/sam", function (req, res) {
    res.send({
        name: "jaideep",
    });
    res.end();
});