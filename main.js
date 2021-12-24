var studentarray=[] 
function submit(){
    var displayarray=[]
    for(var j=1;j<=4;j++){
        var name=document.getElementById("name_of_the_student_" +j).value 
        console.log(name)
        studentarray.push(name)
    }
    var arraylength=studentarray.length
    console.log(arraylength)
    for(var k=0;k<arraylength;k++){
        displayarray.push("<h4>name - "+studentarray[k]+"</h4>")
        console.log (displayarray)
    }
    document.getElementById("display_name_with_commas").innerHTML=displayarray
    var removecommas=displayarray.join(" ")
    console.log (removecommas)
    document.getElementById("display_name_without_commas").innerHTML=removecommas
    document.getElementById("submit_button").style.display="non"
    document.getElementById("sort_button").style.display="inline-block"
}
function sorting(){
    studentarray.sort()
    console.log(studentarray)
    var displaysortarray=[]
    var arraylength=studentarray.length
    console.log(arraylength)
    for(var k=0;k<arraylength;k++){
        displaysortarray.push("<h4>name - "+studentarray[k]+"</h4>")
        console.log (displaysortarray)
    }
    document.getElementById("display_name_with_commas").innerHTML=displaysortarray
    var removecommas=displaysortarray.join(" ")
    console.log (removecommas)
    document.getElementById("display_name_without_commas").innerHTML=removecommas
}