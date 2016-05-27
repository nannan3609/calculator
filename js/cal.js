var output = document.getElementById("show"); // 记录输出框内容
var oper = 0; //记录输入状态
var cal; //记录计算状态
var num; //记录运算符之前的数
var ten;
document.getElementById("zero").onclick = function() {
    if (output.value == "0") {
        output.value = "0";
        // 若输出框中的值为0,再输入0，也依然是0
    } else {
        if (oper == 0 || oper == -1 || oper==-2) {
            output.value += "0";
            // 数字为小数或多位数，在它后面加就行了
        } else {
            num = output.value;
            output.value = "0";
            oper=-2;
            // oper==1则说明在运算状态，是一个新的数，可能是小数需要输入
        }
    }
};
document.getElementById("one").onclick = function() {
    if (output.value == "0") {
        output.value = "1";
        // 若输出框中的值为0,再输入1，就等于1
    } else {
        if (oper == 0 || oper == -1 || oper==-2) {
            output.value += "1";
        } else {
            num = output.value;
            output.value = "1";
            oper=-2;
        }
    }
};
document.getElementById("two").onclick = function() {
    if (output.value == "0") {
        output.value = "2";
        // 若输出框中的值为0,再输入2，就等于2
    } else {
        if (oper == 0 || oper == -1 || oper==-2) {
            output.value += "2";
        } else {
            num = output.value;
            output.value = "2";
            oper=-2;
        }
    }
};
document.getElementById("three").onclick = function() {
    if (output.value == "0") {
        output.value = "3";
        // 若输出框中的值为0,再输入3，就等于3
    } else {
        if (oper == 0 || oper == -1 || oper==-2) {
            output.value += "3";
        } else {
            num = output.value;
            output.value = "3";
            oper=-2;
        }
    }
};
document.getElementById("four").onclick = function() {
    if (output.value == "0") {
        output.value = "4";
        // 若输出框中的值为0,再输入4，就等于4
    } else {
        if (oper == 0 || oper == -1 || oper==-2) {
            output.value += "4";
        } else {
            num = output.value;
            output.value = "4";
            oper=-2;
        }
    }
};
document.getElementById("five").onclick = function() {
    if (output.value == "0") {
        output.value = "5";
        // 若输出框中的值为0,再输入5，就等于5
    } else {
        if (oper == 0 || oper == -1 || oper==-2) {
            output.value += "5";
        } else {
            num = output.value;
            output.value = "5";
            oper=-2;
        }
    }
};
document.getElementById("six").onclick = function() {
    if (output.value == "0") {
        output.value = "6";
        // 若输出框中的值为0,再输入6，就等于6
    } else {
        if (oper == 0 || oper == -1 || oper==-2) {
            output.value += "6";
        } else {
            num = output.value;
            output.value = "6";
            oper=-2;
        }
    }
};
document.getElementById("seven").onclick = function() {
    if (output.value == "0") {
        output.value = "7";
        // 若输出框中的值为0,再输入7，就等于7
    } else {
        if (oper == 0 || oper == -1 || oper==-2) {
            output.value += "7";
        } else {
            num = output.value;
            output.value = "7";
           oper=-2;
        }
    }
};
document.getElementById("eight").onclick = function() {
    if (output.value == "0") {
        output.value = "8";
        // 若输出框中的值为0,再输入8，就等于8
    } else {
        if (oper == 0 || oper == -1 || oper==-2) {
            output.value += "8";
        } else {
            num = output.value;
            output.value = "8";
             oper=-2;
        }
    }
};
document.getElementById("nine").onclick = function() {
    if (output.value == "0") {
        output.value = "9";
        // 若输出框中的值为0,再输入9，就等于9
    } else {
        if (oper == 0 || oper == -1 || oper==-2) {
            output.value += "9";
        } else {
            num = output.value;
            output.value = "9";
            oper=-2;
        }
    }
};
document.getElementById("point").onclick = function() {
    var j = 0;
    for (var i = 0; i < output.value.length; i++) { //判断是否已经有一个点号
        if (output.value.substr(i, 1) == ".") {
            j = 1;
            // 若已经 有一个小数点了，则不允许输入第二个小数点
        }
    }
    if (j == 1) {
        alert("不能输入第二个小数点");
    } else {
        output.value = output.value + ".";
        oper = -1;
        // 加上小数点之后，oper变为-1,表示正在小数输入状态，直到遇到运算符
    }
};

function calcul() {
    // 根据cal的值选择相应的运算
    switch (cal) {
        case 1:
            output.value = parseFloat(num) + parseFloat(output.value);
            break;
        case 2:
            output.value = parseFloat((num - output.value).toFixed(9));
            // 处理计算精度问题
            break;
        case 3:
            output.value = parseFloat((num * output.value).toFixed(9));
            break;
        case 4:
            if (output.value != 0) {
                // 分母不能为0
                output.value = parseFloat((num / output.value).toFixed(9));
            } else {
                output.value = "分母不能为0，请重新输入";
            }
            break;
        case 5:
            output.value = num % output.value;
            break;
    }
}
document.getElementById("add").onclick = function() {
    if (oper == 1 || oper == -1 && num != " "  || oper==-2) {
        calcul();
        oper = 1;
        cal = 1;
        // 说明之前有运算要进行，先运算之前的，再把cal改成与现在运算对应的，oper改为1
    } else {
        if (output.value == " ") {
            output.value = "输入错误,请重新输入";
        }
        // 加号前面没有数，这种情况是没有意义的
        num = output.value;
        // 记录加号之前的数
        oper = 1;
        cal = 1;
    }
};
document.getElementById("less").onclick = function() {
    if (output.value == " ") {
        output.value += "-";
        // 减号前面没有数，它表示负号的意思
    } else {
        if (oper == 1 || oper == -1 && num != " " || oper==-2) {
            calcul();
            oper = 1;
            cal = 2;
            // 说明之前有运算要进行，先运算之前的，再把cal改成与现在运算对应的，oper改为1
        }  else {
            num = output.value;
            // 记录加号之前的数
            oper = 1;
            cal = 2;
        }
    }
};
document.getElementById("multip").onclick = function() {
    if (oper == 1 || oper == -1 && num != " " || oper==-2) {
        calcul();
        oper = 1;
        cal = 3;
        // 说明之前有运算要进行，先运算之前的，再把cal改成与现在运算对应的，oper改为1
    } else {
        if (output.value == " ") {
            output.value = "输入错误,请重新输入";
        }
        // 乘号前面没有数，这种情况是没有意义的
        num = output.value;
        // 记录乘号之前的数
        oper = 1;
        cal = 3;
    }
};
document.getElementById("except").onclick = function() {
    if (oper == 1 || oper==-2 ||oper==-1 && num!=" ") {
        calcul();
        cal = 4;
        oper=1;
    } // 说明之前有运算要进行，先运算之前的，再把cal改成与现在运算对应的，oper改为1 
    else {
        if (output.value == " ") {
            output.value = "输入错误,请重新输入";
        }
        // 除号前面没有数，这种情况是没有意义的
        num = output.value;
        // 记录除号之前的数
        oper = 1;
        cal = 4;
    }
};
document.getElementById("remainder").onclick = function() {
    if (oper == 1  || oper == -1  || oper==-2) {
        calcul();
        oper=1;
        cal = 5;
    } // 说明之前有运算要进行，先运算之前的，再把cal改成与现在运算对应的，oper改为1  
    else {
        if (output.value == " ") {
            output.value = "输入错误,请重新输入";
        }
        // 求余号前面没有数，这种情况是没有意义的
        num = output.value;
        // 记录求余号之前的数
        oper = 1;
        cal = 5;
    }
};
document.getElementById("sin").onclick = function() {
    if (output.value == " ") {
        output.value = "请先输入角度";
    } else {
        output.value = parseFloat(Math.sin(output.value / 180 * Math.PI).toFixed(9));
    }
};
// 计算正弦值  sin按钮已经表示做运算的意思
document.getElementById("cos").onclick = function() {
    if (output.value == " ") {
        output.value = "请先输入角度";
    } else {
        output.value = parseFloat(Math.cos(output.value / 180 * Math.PI).toFixed(9));
    }
};
// 计算余弦值 cos按钮已经表示做运算的意思
document.getElementById("tan").onclick = function() {
    if (output.value == " ") {
        output.value = "请先输入角度";
    } else {
        output.value = Math.tan(output.value / 180 * Math.PI);
    }
};
// 计算正切值  tan按钮已经表示做运算的意思
document.getElementById("sqrt").onclick = function() {
        if (output.value == " ") {
            output.value = "请先输入被开方数";
        } else {
            output.value = Math.sqrt(output.value);
        }
    }
    // 计算开根号所得的值  按钮已经表示做运算的意思
document.getElementById("equal").onclick = function() {
    calcul();
    oper = 0;
};
// 进行之前的计算
document.getElementById("del").onclick = function() {
    output.value = output.value.substring(0, output.value.length - 1);
};
// 删除最后一个数字   求输出框中的字符串的子串，长度为其自身减一
document.getElementById("clearall").onclick = function() {
    output.value = " ";
    oper = 0;
    num = 0;
};
// 清空，回到最初的状态