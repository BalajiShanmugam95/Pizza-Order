export default {
    name:"Weather Mixin",
    data(){
        return {
            isGeoAccessGranted:false,
            userLatLong:{},
            weatherDetails:{},
            statusTimeCode:"",
        }
    },
    watch:{
        userLatLong(){
            this.getWeather()
        }
    },
    methods:{
        getWeather(){
            this.axios.get("https://api.open-meteo.com/v1/forecast?latitude="+this.userLatLong.latitude+"&longitude="+this.userLatLong.longitude+"&current_weather=true").then((res)=>{    
                this.weatherDetails=res.data["current_weather"] || {};
            }).catch((error)=>{
                console.log(error)
            })
        },
        getGeoPermission(){
            let self=this;
            const success = (position) => {
                const latitude  = position.coords.latitude;
                const longitude = position.coords.longitude;

                self.isGeoAccessGranted = true;
                self.userLatLong={latitude,longitude};
            };
            const error = (err) => {
                self.isGeoAccessGranted = false;
                console.log(err)
            };
            this.getCurrentStatusByTime();
            navigator.geolocation.getCurrentPosition(success, error);
        },
        getCurrentStatusByTime(){
            var today = new Date()
            var curHr = today.getHours()
            if (curHr < 12) {
                this.statusTimeCode = 1;
            } else if (curHr < 16) {
                this.statusTimeCode = 2;
            } else if(curHr < 20) {
                this.statusTimeCode = 3;
            }else{
                this.statusTimeCode = 4;
            }
        }
    },
    created(){
        this.getGeoPermission();
    }
}