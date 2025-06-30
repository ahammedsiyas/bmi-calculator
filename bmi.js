const calculate=()=>{
    let weights=document.getElementById('weight')
    let heights=document.getElementById('height')
  
    let h=heights.value/100
    let bmi=weights.value/(h*h)
    result=bmi.toFixed(1)
    
    if(result<16){
        output.innerHTML=`${result} kg/m<sup>2</sup> (<span style="color:red;">Severe Thinness</span>)`
    }
    else if(result>=16&&result<=17){
         output.innerHTML=`${result} kg/m<sup>2</sup> (<span style="color:pink;">Moderate Thinness</span>)`
    }
    else if(result>=17&&result<=18.5){
         output.innerHTML=`${result} kg/m<sup>2</sup> (<span style="color:yellow;">Mild Thinness</span>)`
    }
    else if(result>=18.5&&result<=25){
         output.innerHTML=`${result} kg/m<sup>2</sup> (<span style="color:green;">Normal</span>)`
    }
    else if(result>=25&&result<=30){
        
         output.innerHTML=`${result} kg/m<sup>2</sup> (<span style="color:yellow;">OverWeight</span>)`
    }
     else if(result>=30&&result<=35){
        
         output.innerHTML=`${result} kg/m<sup>2</sup> (<span style="color:red;">Obese Class I</span>)`
    }
     else if(result>=35&&result<=40){
         output.innerHTML=`${result} kg/m<sup>2</sup> (<span style="color:red;">Obese Class II</span>)`
    }
     else if(result>40){
         output.innerHTML=`${result} kg/m<sup>2</sup> (<span style="color:red;">Obese Class III</span>)`
    }
    else{
        alert('enter weight and height')
    }

}