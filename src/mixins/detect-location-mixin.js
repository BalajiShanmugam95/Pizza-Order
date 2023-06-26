import locationList from '../data/locationsList.json';
const timeZone=Intl.DateTimeFormat().resolvedOptions().timeZone;
const list_countries =["Afghanistan", "Australia", "Bangladesh", "Bhutan", "Burma", "Brunei", "Cambodia", "China", "Cook Islands", "Federated States of Micronesia", "Fiji", "India", "Indonesia", "Japan", "Kiribati", "Laos", "Malaysia", "Maldives", "Marshall Islands", "Mongolia", "Nepal", "New Caledonia", "New Zealand", "Niue", "North Korea", "Pakistan", "Palau", "Papua New Guinea", "Philippines", "Singapore", "Solomon Islands", "South Korea", "Sri Lanka", "Taiwan", "Thailand", "Timor-Leste", "Tonga", "Tuvalu", "Vanuatu", "Vietnam"];
const EU_Countries_Code_List=["AD","AL","AM","AT","AZ","BA","BE","BG","BY","CH","CY","DE","DK","EE","ES","FI","FR","GB","GE","GR","HR","HU","IE","IS","IT","LI","LT","LU","LV","MC","MD","ME","MT","NO","PL","PT","RO","RS","RU","SE","SI","SK","SM","TR","UA"];
const US_Contries_Code_List=["AG","AR","BB","BO","BR","BS","BZ","CA","CL","CO","CR","CU","DM","DO","EC","GD","GT","GY","HN","HT","JM","KN","LC","MX","NI","PA","PE","PY","SR","SV","TT","US","UY","VC","VE"];
const APAC_Contries_Code_List=["AF","AU","BD","BN","BT","CK","CN","FJ","ID","IN","JP","KH","KI","KP","KR","LA","LK","MH","MN","MV","MY","NC","NP","NU","NZ","PG","PH","PK","PW","SB","SG","TH","TL","TO","TV","TW","VN","VU"];
export default {
    data(){
        return {
            d_countryName:"",
            d_stateName:"",
            d_continentName:"",
        }
    },
    methods:{
        getCountryName(){
            try {
                if(timeZone){
                    const {countriesWithCode} =locationList;
                    const _countryCode = this.detectCountryCode();
                    const country = countriesWithCode[_countryCode];

                    return country
                }

                return null
            } catch (error) {
              console.log("locationError",error);
              return null 
            }
        },
        getStateName(){
            try {
                if(timeZone){
                    const state = timeZone.split("/")[1].replace("_", " ")
                    return state
                }

                return null
            } catch (error) {
              console.log("locationError",error);
              return null 
            }
        },
        findUserContinent(){
            try {
                const _countryCode = this.detectCountryCode();

                if(!_countryCode)
                    return null;
                
                if(EU_Countries_Code_List.includes(_countryCode))
                    return 'Europe';
                else if(US_Contries_Code_List.includes(_countryCode))  
                    return 'Americas';
                else if(APAC_Contries_Code_List.includes(_countryCode))  
                    return 'APAC';
                else
                    return 'Global';

            } catch (error) {
               console.log(error);
               return null
            }
        },
        detectCountryCode(){
            try {
                const {timeZonesList} =locationList;
                let locationDetails =timeZonesList[timeZone];
                const {c,a}=locationDetails;

                if(c){
                    return c[0];
                }else if(a){
                    if(timeZonesList[a] && timeZonesList[a]['c'])
                        return timeZonesList[a]['c'][0]

                    return null
                }
                return null
            } catch (error) {
                console.log(error)
                return null
            }
        },
        // detectCountyCodes(){
        //     const {countriesWithCode} =locationList;
        //     const eropList =[];
        //     const list_countyName=[];
        //     for (var cnty in countriesWithCode){
        //         if(list_countries.includes(countriesWithCode[cnty])){
        //             eropList.push(cnty);
        //             list_countyName.push(countriesWithCode[cnty])
        //         }
        //     }

        //     console.log(JSON.stringify(eropList))

        //     let notfilterdList=eu_countries.filter((cont)=> {
        //         return list_countyName.indexOf(cont) == -1
        //     })
        //     console.log(notfilterdList)
        // }
    },
    created(){
       this.d_countryName=this.getCountryName();
       this.d_stateName=this.getStateName();
       this.d_continentName=this.findUserContinent();
       
    //    console.log('Country :'+this.d_countryName+' ContinentName :'+this.d_continentName+ ' State :'+this.d_stateName);
    }
}