const jsonData = {};
var priceData = {};
var deathRates ={}
var countryCodes = {}
$(function () {
    $(".mapcontainer").mapael({
        map: {
            name: "world_countries",
            
            zoom: {
                enabled: true,
                maxLevel: 10
            }

            // Set default plots and areas style
            , defaultPlot: {
                attrs: {
                    fill: "#004a9b"
                    , opacity: 0.6
                }
                , attrsHover: {
                    opacity: 1
                }
                , text: {
                    attrs: {
                        fill: "#505444"
                    }
                    , attrsHover: {
                        fill: "#000"
                    }
                }
            }
            , defaultArea: {
                attrs: {
                    fill: "#949494"
                    , stroke: "#ced8d0"
                }
                , attrsHover: {
                    fill: "#ffffff"
                }
                , text: {
                    attrs: {
                        fill: "#505444"
                    }
                    , attrsHover: {
                        fill: "#000"
                    }
                },
                eventHandlers: {
                    click: function (e, id) {
                        
                        var modal = document.getElementById("myModal");
                        modal.style.display = "block";  
                        if(jsonData.hasOwnProperty(id)){
                        $("#countryTitle").text(jsonData[id]["country_name"]);
                        var country_name=jsonData[id]["country_name"];
                        $("#countryTitle").css("font-weight", "bold");
                        var datanums = Object.values(jsonData[id]["data"]);
                        var datamale = [];
                        var datafemale = [];
                        for(var entry in datanums){
                            datamale.push(datanums[entry]["Male"]);
                            datafemale.push(datanums[entry]["Female"]);
                        }
                       
                        config["data"]["datasets"][0]["data"]=datamale;//.reverse();
                        config["data"]["datasets"][1]["data"]=datafemale;//.reverse();

                        //prices
                        var prices = priceData[country_name];
                        console.log("prices",prices)
                        priceDataset = [];
                        const years = ['2008','2010','2012','2014'];
                        for(var x in years){
                            var i = years[x];
                            console.log(i);
                            console.log(prices[i]);
                            if(prices[i]!=""){
                                priceDataset.push(prices[i]);
                            }else{
                                priceDataset.push(null);
                            }
                        }
                        config2["data"]["datasets"][0]["data"]=priceDataset;
                        console.log(priceDataset);
                        var max = Math.max.apply(null,priceDataset);
                        console.log(max);
                        config2["options"]["scales"]["yAxes"][0]["ticks"]["suggestedMax"]=max+0.5;
                        
                        
                        //death
                        y = ['2000','2005','2010','2012','2015'];
                        var ded = []// Object.values(deathRates[country_name]);
                        if(deathRates[country_name]){
                            for(var yer in y){
                                
                                ded.push(deathRates[country_name][y[yer]]);
                            }
                         }
                        console.log(ded);
                        config["data"]["datasets"][2]["data"] = ded;

                        }else{
                            $("#countryTitle").text("No data available");
                            config["data"]["datasets"][0]["data"] = [];
                            config["data"]["datasets"][1]["data"] = [];
                            config["data"]["datasets"][2]["data"] = [];
                            config2["data"]["datasets"][0]["data"] = [];
                        }
                        window.myLine.update();
                        window.myLine2.update();
                     
                                         
                    }
                }
            }
            
        },
        legend: {
            area: {
                title: "Percentage of population\n using Tobacco",
                display: true,
                hideElemsOnClick:false,
                slices: [
                    {
                        max: 10,
                        attrs: {
                            fill: "#32c12c"
                        },
                        label: "Less than 10%"
                    },
                    {   min:10,
                        max: 20,
                        attrs: {
                            fill: "#87c735"
                        },
                        label: "Between 10% and 20%"
                    },
                    {
                        min: 20,
                        max: 30,
                        attrs: {
                            fill: "#e5ff00"
                        },
                        label: "Between 20% and 30%"
                    },
                    {
                        min: 30,
                        max: 40,
                        attrs: {
                            fill: "#ffe400"
                        },
                        label: "Between 30% and 40%"
                    },
                    {
                        min: 40,
                        max: 50,
                        attrs: {
                            fill: "#ffaf00"
                        },
                        label: "Between 40% and 50%"
                    },
                    {
                        min: 50,
                        max: 60,
                        attrs: {
                            fill: "#ff6900"
                        },
                        label: "Between 50% and 60%"
                    },
                    {
                        min: 60,
                        max:70,
                        attrs: {
                            fill: "#ff0000"
                        },
                        label: "Between 60% and 70%"
                    },
                    {
                        min: 70,
                        attrs: {
                            fill: "#000000"
                        },
                        label: "More than 70%"
                    },
                    {
                        attrs: {
                            fill: "#949494"
                        },
                        label: "No data available"
                    },

                ]
            }
        },
        // Customize some areas of the map
        areas: buildMap()        
    });
});

function buildMap(){
    var dataCountries = null;
   // var countryCodes = null;
    $.ajax({ 
        url: "https://raw.githubusercontent.com/2262800d/hci2019/master/data/parsed_data1.json", 
        dataType: 'json', 
        async: false, 
        success: function(json){ 
            dataCountries=json;
        } 
    });
    $.ajax({ 
        url: "https://raw.githubusercontent.com/2262800d/hci2019/master/data/country_codes23.json", 
        dataType: 'json', 
        async: false, 
        success: function(json){ 
            countryCodes=json;
        } 
    });
    $.ajax({ 
        url: "https://raw.githubusercontent.com/2262800d/hci2019/master/data/price_data.json", 
        dataType: 'json', 
        async: false, 
        success: function(json){ 
            priceData=json;
        } 
    });
    $.ajax({ 
        url: "https://raw.githubusercontent.com/2262800d/hci2019/master/data/death_percentage_smoke.json", 
        dataType: 'json', 
        async: false, 
        success: function(json){ 
            deathRates=json;
        } 
    });
    //console.log(dataCountries);
    //var jsonData = {};
    var female_values = {}
    var male_values = {}
    for(var country in dataCountries){
        //console.log(country);
        if (dataCountries.hasOwnProperty(country)){
           // console.log(dataCountries[country]);
            var code = countryCodes[country][1];
            //console.log(code);
            //var val = dataCountries[country]["2015"];
            var val = dataCountries[country]["2015"]["value"];
            
            female_values[code]={value:dataCountries[country]["2015"]["Female"]};
            male_values[code]={value:dataCountries[country]["2015"]["Male"]};
            
            //console.log(val);
            jsonData[code] = {
                value: val,
                country_name: country,
                data: dataCountries[country]
            }
        }

    }
    // console.log(female_values);
    // console.log(male_values);
    //console.log(jsonData);
    console.log("1",document.getElementById("radio1").checked);
    console.log("2",document.getElementById("radio2").checked);
    if($("#radio1").prop("checked")){
        console.log(female_values);
        return female_values;
    }else if($("#radio2").prop("checked")){
        console.log(male_values);
        return male_values;
    }

    //return jsonData;
}
$(document).ready(function () { 
    $(".close").click(function () {

        $("#myModal").css("display", "none");
    });

    $("#radio1").click(function(input){
        var updatedOptions = {'areas': {}};
        updatedOptions.areas = buildMap();
        //console.log(document.getElementById("radio1").checked);
        $(".mapcontainer").trigger('update', [{
            mapOptions: updatedOptions, 
            animDuration: 10
        }]);

    });

    $("#radio2").click(function(input){
        var updatedOptions = {'areas': {}};
        updatedOptions.areas = buildMap();
        $(".mapcontainer").trigger('update', [{
            mapOptions: updatedOptions, 
            animDuration: 10
        }]);

    });

    // $("#radio2+label").change(function(){
    //     var updatedOptions = {areas: buildMap()};
    //     console.log("click");
    //     $(".mapcontainer").trigger('update', [{
    //         mapOptions: updatedOptions, 
    //         animDuration: 10
    //     }]);

    // });
});

