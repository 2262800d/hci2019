$(function () {
    $(".mapcontainer").mapael({
        map: {
            name: "world_countries"

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
                }
            }
        },
        legend: {
            area: {
                title: "Population of France by department",
                slices: [
                    {
                        max: 10,
                        attrs: {
                            fill: "#32c12c"
                        },
                        label: "Less than de 300 000 inhabitants"
                    },
                    {   min:10,
                        max: 40,
                        attrs: {
                            fill: "#87c735"
                        },
                        label: "Less than de 300 000 inhabitants"
                    },
                    {
                        min: 40,
                        max: 60,
                        attrs: {
                            fill: "#ffff00"
                        },
                        label: "Between 100 000 and 500 000 inhabitants"
                    },
                    {
                        min: 60,
                        max: 80,
                        attrs: {
                            fill: "#ff6600"
                        },
                        label: "Between 500 000 and 1 000 000 inhabitants"
                    },
                    {
                        min: 80,
                        attrs: {
                            fill: "#cc0000"
                        },
                        label: "More than 1 million inhabitants"
                    }
                ]
            }
        },
        // Customize some areas of the map
        areas: buildMap()
        // {
        //     "AU": {
        //         //text: {content: "Morbihan", attrs: {"font-size": 10}},
        //         tooltip: {content: "<b>Morbihan</b> <br /> Bretagne"}
        //     },
        //     "AU":  buildMap()
        //     // {
        //     //     attrs: {
        //     //         fill: "#488402"
        //     //     }
        //     //     , attrsHover: {
        //     //         fill: "#a4e100"
        //     //     }
        //     // }
        // },

       
        
    });
});

function buildMap(){
    var dataCountries = null;
    var countryCodes = null;
    $.ajax({ 
        url: "https://raw.githubusercontent.com/2262800d/hci2019/master/data/parsed_data.json", 
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
    //console.log(dataCountries);
    var jsonData = {};
    for(var country in dataCountries){
        //console.log(country);
        if (dataCountries.hasOwnProperty(country)){
           // console.log(dataCountries[country]);
            var code = countryCodes[country][1];
            //console.log(code);
            var val = dataCountries[country]["2015"];
            //console.log(val);
            jsonData[code] = {
                value: val
            }
        }

    }
    console.log(jsonData);

    return jsonData;
}

