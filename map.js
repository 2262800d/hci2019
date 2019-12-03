const jsonData = {};
var priceData = {};
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
                    fill: "#808080"
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
                slices: [
                    {
                        max: 10,
                        attrs: {
                            fill: "#32c12c"
                        },
                        label: "Less than 10%"
                    },
                    {   min:10,
                        max: 40,
                        attrs: {
                            fill: "#87c735"
                        },
                        label: "Between 10% and 40%"
                    },
                    {
                        min: 40,
                        max: 60,
                        attrs: {
                            fill: "#ffff00"
                        },
                        label: "Between 40% and 60%"
                    },
                    {
                        min: 60,
                        max: 80,
                        attrs: {
                            fill: "#ff6600"
                        },
                        label: "Between 60% and 80%"
                    },
                    {
                        min: 80,
                        attrs: {
                            fill: "#cc0000"
                        },
                        label: "More than 80%"
                    },
                    {
                        attrs: {
                            fill: "#5d5d5d"
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
    var countryCodes = null;
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
    console.log(dataCountries);
    //var jsonData = {};
    for(var country in dataCountries){
        //console.log(country);
        if (dataCountries.hasOwnProperty(country)){
           // console.log(dataCountries[country]);
            var code = countryCodes[country][1];
            //console.log(code);
            //var val = dataCountries[country]["2015"];
            var val = dataCountries[country]["2015"]["value"];

            //console.log(val);
            jsonData[code] = {
                value: val,
                country_name: country,
                data: dataCountries[country]
            }
        }

    }
    //console.log(jsonData);

    return jsonData;
}
$(document).ready(function () { 
    $(".close").click(function () {

        $("#myModal").css("display", "none");
    });
});

