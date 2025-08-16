const button=document.getElementById('calculate');

button.addEventListener('click',function(){

    let height=document.querySelector("#height").value;
    let weight=document.querySelector("#weight").value;

    if(height==''|| weight==''){
        alert("Please fill out the input fields!");
        return;
    }

    let bmi=(weight/(height*height))*10000;
    document.querySelector("#result").innerHTML=bmi.toFixed(2);

    let comment='';

    if(bmi<18.5)
    {
        comment="UnderWeight";
    }
    else if(bmi>=18.5 && bmi<24.9)
    {
        comment="Normal";
    }
    else if(bmi>=25 && bmi<29.9)
    {
        comment="OverWeight";
    }
    else
    {
        comment="Obese";
    }
    document.querySelector("#comment").innerHTML=`comment:
     You are <span>${comment}</span>`;

});
