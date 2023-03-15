function add(a,b){
    return a + b;
}

function sub(a,b){
    return a - b;
}

function multi(a,b){
    return a * b;
}

function div(a,b){
    return a/b;
}

function calculate(){
    var a = Number(document.getElementById("a").value)
    var b = Number(document.getElementById("b").value)
    var arthimeticOperations = document.getElementById("operators").value
    var showType = document.getElementById("show").value

    if(arthimeticOperations == "add"){
        operation = add
    } else if(arthimeticOperations == "sub"){
        operation = sub
    } else if(arthimeticOperations == "multi"){
        operation = multi
    } else {
        operation = div
    }

    var outputType = undefined
    
    // if(showType == "html"){
    //     outputType = showHtmlOutput
    // } else if(showType == "console"){
    //     outputType = showConsoleOutput
    // } else if(showType == "alert"){
    //     outputType = showAlertOutput
    // } else {
    //     outputType = showPageOutput
    // }

    switch(showType){
        case "html" : {
            outputType = showHtmlOutput
            break
        }
        case "console" : {
            outputType = showConsoleOutput
            break
        }
        case "alert" : {
            outputType = showAlertOutput
            break
        }
        case "page" : {
            outputType = showPageOutput
            break
        }
        case "print" : {
            outputType = printOutput
            break
        }        
    }
    showResult(a,b,operation,outputType)
}

function showResult(a,b,operator,showDisplayIn){
    showDisplayIn(operator(a,b))
}

function showHtmlOutput(res){
    var color = resultColor(res)
    document.getElementById("result").innerHTML = `<h1 id = "output">Result:- <span style="color:${color}" > ${res > parseInt(res) ? res.toFixed(2) : res } </span> </h1> `
}

function showConsoleOutput(res){
    console.log(`Result = ${res}`)
    document.getElementById("result").innerHTML = ""
}

function showAlertOutput(res){
    alert(`Result = ${res}`)
    document.getElementById("result").innerHTML = ""
}

function showPageOutput(res){
    var color = resultColor(res)
    document.write(`<h1>Result:- <span style="color:${color}" > ${res > parseInt(res) ? res.toFixed(2) : res } </span> </h1> `)
}

function printOutput(res){
    showHtmlOutput(res)
    window.print()
}


function resultColor(res){
    var color = ""
    if(res < 0){
        color = "red"
    } else {
        color = "green"
    }
    return color
}
