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
    console.log('current is: ' + current);
    switch (current) {
        case 0:
            console.log('both empty');
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
script.onload = function () {
    $(document).ready(function () {
        var click = 0;
        var arr = [];
        var checked = new Map();
        var pressed = false;
        var ids = ['0', '1', '2', '3', '4', 'Shirts', 'Outdoorwear', 'Pants', 'Footwear',
            'M', 'F', 'asc', 'des'];
        console.log("Loaded");
        getItems().then(function (items) {
            items.forEach(function (item) {
                arr.push(item);
                console.log('item: ' + item.id);
            });
            populate(arr, true, checked);
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
