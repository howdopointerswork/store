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
//try typescript here
//then convert rest
function populate(data, ids) {
    //remove later
    var url = '#';
    //	$(url + 'shop').empty();
    console.log('populating..');
    console.log('ids test: ' + ids[1]);
    data.forEach(function (item) {
        var i = item.id;
        var inc = (i + 2) * (i + 2) + i;
        var itemDiv = inc * inc;
        var aDiv = inc * inc * inc;
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
    });
}
;
function loadItems() {
    return __awaiter(this, void 0, void 0, function () {
        var url, resp, items, arr, checked, load, _i, arr_1, id;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = '#';
                    return [4 /*yield*/, fetch('http://localhost:3000/item')];
                case 1:
                    resp = _a.sent();
                    return [4 /*yield*/, resp.json()];
                case 2:
                    items = _a.sent();
                    arr = ['0', '1', '2', '3', '4', 'Shirts', 'Outdoorwear', 'Pants', 'Footwear',
                        'M', 'F', 'asc', 'des', 'min', 'max', 'apply'];
                    checked = [];
                    load = true;
                    console.log('length: ' + checked.length);
                    //need defualt display
                    //so turn into one or more functions
                    $('#apply').click(function () {
                        console.log('clicked');
                        checked.length = 0;
                        $('#shop').empty();
                        for (var _i = 0, arr_2 = arr; _i < arr_2.length; _i++) {
                            var box = arr_2[_i];
                            if ($('#' + box).prop('checked')) {
                                console.log(box);
                                checked.push(box);
                                console.log('new length: ' + checked.length);
                                //add here
                            }
                        }
                        //});
                        items.forEach(function (item) {
                            var i = item.id;
                            var inc = (i + 2) * (i + 2) + i;
                            var itemDiv = inc * inc;
                            var aDiv = inc * inc * inc;
                            console.log('checked length: ' + checked.length);
                            for (var _i = 0, checked_1 = checked; _i < checked_1.length; _i++) {
                                var box = checked_1[_i];
                                console.log('box ' + box);
                                //fix to include AND logic
                                if ((box == item.category) || (box == item.type) || (box == item.size)) {
                                    console.log(box);
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
                                    if (parseInt(item.sale) == 1) {
                                        txtEle('<p>', item.sale, '#' + aDiv);
                                    }
                                    var sizeCheck = '';
                                    var itemSize = item.size;
                                    var arr_3 = ['XS', ' S', ' M', ' L', ' XL'];
                                    for (var i_2 = 0; i_2 < itemSize + 1; ++i_2) {
                                        sizeCheck += arr_3[i_2];
                                    }
                                    txtEle('<p>', sizeCheck, '#' + aDiv);
                                    txtEle('<p>', 'ID: ' + item.id, '#' + aDiv);
                                    break;
                                }
                            }
                            if (checked.length == 0) {
                                $('#shop').empty();
                                load = false;
                                populate(items, arr);
                            }
                            //}
                        });
                        $('#shop').css('display', 'flex');
                        $('#shop').css('flex-wrap', 'wrap');
                    });
                    if (checked.length == 0 && load) {
                        for (_i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
                            id = arr_1[_i];
                            if ($('#' + id).prop('checked')) {
                                console.log("Currently checked: " + id);
                                $('#' + id).prop('checked', false);
                            }
                        }
                        populate(items, arr);
                        console.log("Checked is empty");
                    }
                    return [2 /*return*/];
            }
        });
    });
}
;
script.onload = function () {
    $(document).ready(function () {
        console.log("Loaded");
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
        loadItems();
    });
};
document.head.appendChild(script);
