document.getElementById('higher').addEventListener('click', function myFunction(){
    var value = parseInt(document.getElementById('value').innerHTML)
    if(value >= 50){
        var newValue = value
        document.getElementById('value').innerHTML = newValue
    }else{
        var newValue = value + 1
        document.getElementById('value').innerHTML = newValue
    }
})

document.getElementById('lower').addEventListener('click', function myFunction(){
    var value = parseInt(document.getElementById('value').innerHTML)
    if(value <= 0){
        var newValue = value
        document.getElementById('value').innerHtml = newValue
    }else{
    var newValue = value - 1
    document.getElementById('value').innerHTML = newValue
    }
} )
