<template>
    <div class="weather-container" v-if="weatherDetails.temperature">
        <div :class="setWetherBG()+' weather-overlay'">
            <span>{{(weatherDetails.temperature ||0).toFixed(0)}}°C</span>
        </div>
    </div>
</template>
<script>
import weatherMixin from '../mixins/WeatherMixin.js'
export default {
    name:"WeatherTray",
    mixins:[weatherMixin],
    data(){
        return{
        }
    },
    methods:{
        setWetherBG(){
            if(this.statusTimeCode == 1)
                return "morning-bg"
            else if(this.statusTimeCode == 2)
                return "noon-bg"
            else if(this.statusTimeCode == 3)
                return "evening-bg"
            else
                return "night-bg"
        }
    }
}
</script>
<style scoped>
    .weather-container{
        width:200px;
        height:75px;
        background-color:pink;
        border-radius:10px;
        overflow: hidden;
        flex: 0 1 auto;
        margin-left: auto;
    }
    .weather-overlay{
        height: 100%;
        width: 100%;
        display: flex;
        align-items: flex-end;
        font-size: 20pt;
        background-repeat: no-repeat;
        background-size: cover;
        padding: 0px 10px;
    }
    .morning-bg{
            background:url('../assets/morning.jpg') rgba(249, 251, 28, 0.5);
            background-blend-mode: multiply;
            background-position: center -25px;
            justify-content: flex-end;
            color: #fff;
    }
    .noon-bg{
            background:url('../assets/afternoon.jpg') rgba(255, 213, 79, 0.1);
            background-blend-mode: multiply;
            background-position: center;
            justify-content: flex-end;
            color: #3949AB;
    }
    .evening-bg{
            background:url('../assets/evening.jpg') rgba(253, 94, 83, 0.2);
            background-blend-mode: multiply;
            background-position: 278px -151px;
            justify-content: flex-end;
            color: #fff;
    }
    .night-bg{
            background: url(/img/night.a358fa98.jpg) rgba(133, 89, 136, 0.2);
            background-blend-mode: multiply;
            justify-content: flex-end;
            color: #fff;
            background-position: -327px -20px;
    }
</style>