// for day and month 
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

var d = new Date();
var month = monthNames[d.getMonth()];
var day = d.getDate();
var dayName =days[d.getDay()];




// for search 

async function search(a){
var searchValue = searchInput.value;
    var t= await fetch(`https://api.weatherapi.com/v1/forecast.json?key=04f2479c1f8e4a2d87190558241906&q=${a}&days=3`);
    if(t.ok&&400!=t.status){
        let a = await t.json();
        display(a.location,a.current)
        displayAnother(a.forecast.forecastday)
    }
}
document.getElementById("searchInput").addEventListener("keyup",a=>{search(a.target.value)});

var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];


function display(a,t){
    if(null!=t){
        var e=new Date(t.last_updated.replace(" ","T"));
        let n=`
        <div class="forecastToday forecast">
            <div class="tabel-header d-flex justify-content-between">
                <div class="day">${days[d.getDay()]}</div>
                <div class="date">${d.getDate()+monthNames[d.getMonth()]}</div>
            </div>
            <div class="table-body" id="current">
                <div class="location">${a.name}</div>
                <div class="degree">
                    <div class="num">${t.temp_c}<sup>o</sup>C</div>
                    <div class="icn">
                        <img src="https:${t.condition.icon}" alt="img" width=90/>
                    </div>
                </div>
                <div class="custom">${t.condition.text}</div>
                <span><img src="./img/icon-umberella@2x.png" alt="umberlla" width="19" height="19"/>20%</span>
                <span><img src="./img/icon-wind@2x.png" alt="wind" width="19" height="19"/>18km/h</span>
                <span><img src="./img/icon-compass@2x.png" alt="compass" width="19" height="19"/>East</span>
            </div>
        </div>`
        document.getElementById('rowBody').innerHTML=n;
    }
}


function displayAnother(a){
    let t="";
for(let e=1;e<a.length;e++)
        t+=`<div class="forecast">
            <div class="tabel-header">
                <div class="day">${days[new Date(a[e].date.replace(" ","T")).getDay()]}</div>
            </div>
            <div class="table-body">
                <div class="icn">
                    <img src="https:${a[e].day.condition.icon}" alt="photo" width=48 />
                </div>
                <div class="degree">
                    <div class="num">${a[e].day.maxtemp_c}<sup>o</sup>C</div>
                    <small>${a[e].day.mintemp_c}<sup>o</sup></small>
                </div>
                <div class="custom">${a[e].day.condition.text}</div>
            </div>
        </div>`;
            document.getElementById("rowBody").innerHTML+=t
}

search("cairo");












