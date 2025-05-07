var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var script = document.createElement('script');
script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js";
script.type = "text/javascript";
function change(display, num) {
    var imgSrc = $('figure img');
    var txt = ["All new styles", "Introducing the Bloom Collection", "Limited Editions"];
    imgSrc.css('display', 'none');
    imgSrc.fadeIn(1000);
    imgSrc.css('display', 'visible');
    $('figcaption').css('display', 'none');
    $('figcaption').fadeIn(1000);
    $('figcaption').css('display', 'visible');
    if (num == 0) {
        $('#b1').css('color', 'red');
        $('#b2').css('color', 'white');
        $('#b3').css('color', 'white');
    }
    else if (num == 1) {
        $('#b2').css('color', 'red');
        $('#b1').css('color', 'white');
        $('#b3').css('color', 'white');
    }
    else if (num == 2) {
        $('#b3').css('color', 'red');
        $('#b2').css('color', 'white');
        $('#b1').css('color', 'white');
    }
    imgSrc.attr('src', '../img/' + display);
    $('figcaption').html(txt[num]);
}
;
function txtEle(ele, txt, app) {
    $(ele, {
        text: txt
    }).appendTo(app);
}
;
function minMax(min, max) {
    var min_ne = (min.val() != undefined && min.val() != '' && !isNaN(min.val()));
    var max_ne = (max.val() != undefined && max.val() != '' && !isNaN(max.val()));
    var min_e = min.val() == undefined || min.val() == '' || isNaN(min.val());
    var max_e = max.val() == undefined || max.val() == '' || isNaN(max.val());
    if (min_ne && max_ne) {
        return 1;
    }
    else if (min_ne && max_e) {
        return 2;
    }
    else if (min_e && max_ne) {
        return 3;
    }
    return 0;
}
;
function inRange(current, value, min, max) {
    switch (current) {
        case 0:
            return true;
        case 1:
            if (value >= Number(min.val()) && value <= Number(max.val())) {
                return true;
            }
            else {
                return false;
            }
        case 2:
            if (value >= Number(min.val())) {
                return true;
            }
            else {
                return false;
            }
        case 3:
            if (value <= Number(max.val())) {
                return true;
            }
            else {
                return false;
            }
        default:
            return false;
    }
    return false;
}
//try typescript here
//then convert rest
function populate(data, pass, checked) {
    //remove later
    var url = '#';
    console.log('populating..');
    console.log("Data: " + data);
    if (pass) {
        if (checked.has('asc')) {
            console.log('ascending');
            data.sort(function (a, b) { return a.price - b.price; });
        }
        if (checked.has('des')) {
            console.log('descending');
            data.sort(function (a, b) { return b.price - a.price; });
        }
        if (checked.has('asc') && checked.has('des')) {
            alert('only one of ascending or descending');
            $('#asc').prop('checked', false);
            $('#des').prop('checked', false);
            checked.delete('asc');
            checked.delete('des');
        }
        data.forEach(function (item) {
            var i = item.id;
            var inc = (i + 2) * (i + 2) + i;
            var itemDiv = inc * inc;
            var aDiv = inc * inc * inc;
            var cat = checked.has(item.category);
            var size = checked.has(item.size.toString());
            var type = checked.has(item.type);
            var nocheck = checked.size === 0;
            var exdes = checked.size === 1 && checked.has('des');
            var exasc = checked.size === 1 && checked.has('asc');
            if (nocheck || cat || size || type || exdes || exasc) {
                if (inRange(minMax($('#min'), $('#max')), item.price, $('#min'), $('#max'))) {
                    $('<div>', {
                        id: itemDiv,
                        class: 'item'
                    }).appendTo('#shop');
                    $('<a>', {
                        href: url,
                        id: aDiv
                    }).appendTo('#' + itemDiv);
                    $('<img>', {
                        src: '../img/' + item.src + '.png'
                    }).appendTo('#' + aDiv);
                    txtEle('<h3>', item.name, '#' + aDiv);
                    txtEle('<p>', '$' + item.price, '#' + aDiv);
                    txtEle('<p>', item.category, '#' + aDiv);
                    var gen = (item.type == 'M' ? 'Men' : 'Women');
                    txtEle('<p>', gen, '#' + aDiv);
                    if (item.sale) {
                        txtEle('<p>', item.sale, '#' + aDiv);
                    }
                    var sizeCheck = '';
                    var itemSize = item.size;
                    var arr = ['XS', ' S', ' M', ' L', ' XL'];
                    for (var i_1 = 0; i_1 < itemSize + 1; ++i_1) {
                        sizeCheck += arr[i_1];
                    }
                    txtEle('<p>', sizeCheck, '#' + aDiv);
                    txtEle('<p>', 'ID: ' + item.id, '#' + aDiv);
                }
            }
        });
    }
    //data.length = 0;
}
;
function search(data) {
    var srch = $('#search').val().toString().toLowerCase();
    var notEmpty = srch != undefined && srch.toString() != '';
    data.forEach(function (item) {
        var i = item.id;
        var inc = (i + 2) * (i + 2) + i;
        var itemDiv = inc * inc;
        var aDiv = inc * inc * inc;
        var url = '#';
        //account for sizes as well
        if (notEmpty && (item.id.toString().toLowerCase().includes(srch) ||
            item.name.toLowerCase().includes(srch) ||
            item.size.toString().toLowerCase().includes(srch) ||
            item.category.toLowerCase().includes(srch) ||
            item.type.toLowerCase().includes(srch))) {
            $('<div>', {
                id: itemDiv,
                class: 'item'
            }).appendTo('#shop');
            $('<a>', {
                href: url,
                id: aDiv
            }).appendTo('#' + itemDiv);
            $('<img>', {
                src: '../img/' + item.src + '.png'
            }).appendTo('#' + aDiv);
            txtEle('<h3>', item.name, '#' + aDiv);
            txtEle('<p>', '$' + item.price, '#' + aDiv);
            txtEle('<p>', item.category, '#' + aDiv);
            var gen = (item.type == 'M' ? 'Men' : 'Women');
            txtEle('<p>', gen, '#' + aDiv);
            if (item.sale) {
                txtEle('<p>', item.sale, '#' + aDiv);
            }
            var sizeCheck = '';
            var itemSize = item.size;
            var arr = ['XS', ' S', ' M', ' L', ' XL'];
            for (var i_2 = 0; i_2 < itemSize + 1; ++i_2) {
                sizeCheck += arr[i_2];
            }
            txtEle('<p>', sizeCheck, '#' + aDiv);
            txtEle('<p>', 'ID: ' + item.id, '#' + aDiv);
        }
    });
}
;
function getItems() {
    return __awaiter(this, void 0, void 0, function () {
        var resp, items;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('http://localhost:3000/item')];
                case 1:
                    resp = _a.sent();
                    return [4 /*yield*/, resp.json()];
                case 2:
                    items = _a.sent();
                    return [2 /*return*/, items];
            }
        });
    });
}
;
function getUsers() {
    return __awaiter(this, void 0, void 0, function () {
        var resp, users;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('http://localhost:3000/user')];
                case 1:
                    resp = _a.sent();
                    return [4 /*yield*/, resp.json()];
                case 2:
                    users = _a.sent();
                    return [2 /*return*/, users];
            }
        });
    });
}
;
function signUp(username, password, src, email) {
    return __awaiter(this, void 0, void 0, function () {
        var user, res, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    user = {
                        username: username,
                        password: password,
                        src: src,
                        email: email,
                        auth: 1
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch('http://localhost:3000/user', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(user)
                        })];
                case 2:
                    res = _a.sent();
                    return [4 /*yield*/, res.json()];
                case 3:
                    data = _a.sent();
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    console.error("Error: ", error_1);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function authenticate(val, id) {
    return __awaiter(this, void 0, void 0, function () {
        var res, data, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("http://localhost:3000/user/".concat(id, "/auth"), {
                            method: "PUT",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({ auth: val })
                        })];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res.json()];
                case 2:
                    data = _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    console.error("Error:", error_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function loadPage(url) {
    return __awaiter(this, void 0, void 0, function () {
        var res, content;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(url)];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res.text()];
                case 2:
                    content = _a.sent();
                    $('#all').empty();
                    $('#all').html(content);
                    return [2 /*return*/];
            }
        });
    });
}
function upload(event, auth) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            console.log('uploading...');
            if (auth) {
                console.log('to change');
            }
            return [2 /*return*/];
        });
    });
}
//TO-DO
//Auth checking on server
//UI should respond accordingly
//Update using Express (put)
script.onload = function () {
    var auth, signup = false;
    var signout = true;
    $(document).ready(function () {
        var click = 0;
        var arr = [];
        var user_arr = [];
        var ids = ['0', '1', '2', '3', '4', 'Shirts', 'Outdoorwear', 'Pants', 'Footwear',
            'M', 'F', 'asc', 'des'];
        var checked = new Map();
        var pressed = false;
        var hold;
        var current;
        console.log("Loaded");
        try {
            getItems().then(function (items) {
                items.forEach(function (item) {
                    arr.push(item);
                });
                populate(arr, true, checked);
            });
        }
        catch (error) {
            console.error("Error: ", error);
        }
        try {
            getUsers().then(function (users) {
                users.forEach(function (user) {
                    user_arr.push(user);
                });
            });
        }
        catch (error) {
            console.error("Error: ", error);
        }
        console.log('users: ' + user_arr);
        $('#login').click(function () {
            console.log('log in');
            var check_user = ($('#username').val() != '' && $('#username').val() != undefined);
            var check_pw = ($('#password').val() != '' && $('#password').val() != undefined);
            //turn into function
            if ((check_user && check_pw) && user_arr.length > 0) {
                console.log('not empty');
                for (var _i = 0, user_arr_1 = user_arr; _i < user_arr_1.length; _i++) {
                    var user = user_arr_1[_i];
                    if ($('#username').val().toString().toLowerCase() == user.username.toLowerCase() && $('#password').val().toString().toLowerCase() == user.password.toLowerCase()) {
                        auth = true;
                        alert('log in successful');
                        $('#drop').css('visibility', 'hidden');
                        console.log("Current ID: " + user.id);
                        authenticate(1, user.id);
                        current = user;
                        console.log('Authenticated: ' + user.auth);
                        signout = false;
                        $('#signout').css('visibility', 'visible');
                        $('#upload').css('visibility', 'visible');
                        break;
                        //return to home screen as authenticated
                    }
                }
                ;
                if (!auth) {
                    window.location.href = 'signup.html';
                    //loadPage('signup.html');
                }
            }
            else {
                alert('bad');
                console.log('username: ' + $('#username').val());
                console.log('password: ' + $('#password').val());
            }
        });
        $('#gosignup').click(function () {
            window.location.href = 'signup.html';
            //loadPage('signup.html');
        });
        $('#signup').click(function () {
            console.log('clicked sign up');
            var check_username = $('#username_su').val() != '' && $('#username_su').val() != undefined;
            var check_password = $('#password_su').val() != '' && $('#password_su').val() != undefined;
            var check_email = $('#email').val() != '' && $('#email').val() != undefined;
            //validate to ensure no duplicates
            //ensure fields are not empty or undefined
            //post request
            //make checks into function
            if (user_arr.length > 0 && check_username && check_password && check_email) {
                console.log('Legal');
                for (var _i = 0, user_arr_2 = user_arr; _i < user_arr_2.length; _i++) {
                    var user = user_arr_2[_i];
                    if ($('#username_su').val().toString().toLowerCase() != user.username.toString().toLowerCase()) {
                        if ($('#email').val().toString().toLowerCase() != user.email.toString().toLowerCase()) {
                            //sign out button?
                            signUp($('#username_su').val().toString(), $('#password_su').val().toString(), 'none', $('#email').val().toString());
                            alert('Sign Up Successful');
                            console.log("Current ID: " + user.id);
                            authenticate(1, user.id);
                            current = user;
                            console.log('Authenticated: ' + user.auth);
                            window.location.href = 'store_home.html';
                            //loadPage('store_home.html');
                            auth = true;
                            $('#drop').css('visibility', 'hidden');
                            signout = false;
                            $('#signout').css('visibility', 'visible');
                            break;
                        }
                        else {
                            alert('Email already exists');
                        }
                    }
                    else {
                        //to be separated
                        alert('Username already exists');
                    }
                }
                ;
            }
            else {
                alert('Fill in all fields');
            }
        });
        $('#b1').click(function () {
            change('slide1.jpeg', 0);
        });
        $('#b2').click(function () {
            change('slide2.jpg', 1);
        });
        $('#b3').click(function () {
            change('slide3.jpg', 2);
        });
        $('#mens').hover(function () {
            console.log("hovering");
            $('#popup').css('visibility', 'visible');
        });
        $('#mens').mouseout(function () {
            $('#popup').eq(0).css('visibility', 'hidden');
        });
        $('#acc > img').click(function () {
            if (signout) {
                $('#drop').css('visibility', 'visible');
                console.log('clicked');
            }
        });
        $('#default').click(function () {
            if (signout) {
                $('#drop').eq(0).css('visibility', 'hidden');
                console.log('click out');
            }
        });
        $('#signout').click(function () {
            auth = false;
            $('#signout').css('visibility', 'hidden');
            $('#drop').css('visibility', 'visible');
            console.log("Current ID: " + current.id);
            authenticate(0, current.id);
            console.log('Authenticated: ' + current.auth);
            current = null;
            $('#username').val('');
            $('#password').val('');
        });
        try {
            ids.forEach(function (id) {
                $('#' + id).click(function () {
                    //check for min/max here
                    if ($('#' + id).is(':checked')) {
                        console.log('checked: ' + id);
                        checked.set(id, ++click);
                        console.log('checked size: ' + checked.size);
                    }
                    else {
                        console.log('unchecked: ' + id);
                        checked.delete(id);
                        --click;
                        console.log('checked size: ' + checked.size);
                    }
                });
            });
        }
        catch (error) {
            console.log('Error: ', error);
        }
        $('#apply').click(function () {
            console.log('pressed');
            //arr.length = 0;
            //need copy of array for modifying
            //clear shop and display that one
            $('#shop').empty();
            populate(arr, true, checked);
            ids.forEach(function (id) {
                if ($('#' + id).prop('checked', true)) {
                    $('#' + id).prop('checked', false);
                }
            });
            checked.clear();
            console.log(click);
            //arr.length=0;
        });
        //const items = getItems(); //return from this function
        //populate(items, true);
        $('#submit').click(function () {
            console.log('searching...');
            $('#shop').empty();
            search(arr);
        });
    });
};
document.head.appendChild(script);
