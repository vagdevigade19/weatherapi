const CityName=document.getElementById('CityName');
const submitBtn=document.getElementById('submitBtn');

const city_name=document.getElementById('city_name');

const temp_real_val=document.getElementById('temp_real_val');
const temp_status=document.getElementById('temp_status');

const datahide=document.querySelector('.middle_layer');


const getInfo=async(event)=>{
    event.preventDefault();
    let cityVal=CityName.value;
    if(cityVal === ""){
         city_name.innerText=`Please enter a name before search`;
         datahide.classList.add('data_hide');
   
} else{
        try{
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=ccdcde6c3c2649e3ae9408b5cce3034c`;
    const response=await fetch(url);
    const data=await response.json();
    const arrData=[data];

    city_name.innerText=`${arrData[0].name},${arrData[0].sys.country}`;
    temp_real_val.innerText=arrData[0].main.temp;
    

    const tempMood=arrData[0].weather[0].main;

    //conditions for displaying symbols
    if(tempMood=="Clear"){
        temp_status.innerHTML=
        "<i class='fas fa-sun' style='color:#eccc68;'></i>";
    }else if(tempMood=="Clouds"){
        temp_status.innerHTML=
        "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
    }else if(tempMood=="Rain"){
        temp_status.innerHTML=
        "<i class='fas fa-cloud-rain' style='color:#a4b0b6;'></i>";
    }else if(tempMood=="Haze"){
        temp_status.innerHTML=
        "<i class='fas fa-cloud' style='color:rgb(79, 42, 42);'></i>";
    }else {
        temp_status.innerHTML=
        "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
    }

    

    
    
    datahide.classList.remove('data_hide');
    
   

    }catch{
            city_name.innerText=`Please enter the city name correctly`;
            datahide.classList.add('data_hide');
   
        }

}
}

submitBtn.addEventListener('click',getInfo);