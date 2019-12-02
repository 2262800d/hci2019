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
                    fill: "#f4f4e8"
                    , stroke: "#ced8d0"
                }
                , attrsHover: {
                    fill: "#a4e100"
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

        // Customize some areas of the map
        areas: {
            "AUS": {
                text: {content: "Morbihan", attrs: {"font-size": 10}},
                tooltip: {content: "<b>Morbihan</b> <br /> Bretagne"}
            },
            "AU":  buildMap()
            // {
            //     attrs: {
            //         fill: "#488402"
            //     }
            //     , attrsHover: {
            //         fill: "#a4e100"
            //     }
            // }
        },

       
        
    });
});

function buildMap(){
    // var request = new XMLHttpRequest();
    // request.open("GET", "data/parsed_data.json", false);
    // request.overrideMimeType("application/json");
    // request.send(null);
    // var jsonData = JSON.parse(request.responseText);
    // console.log(jsonData);
    
    // $.getJSON("data/parsed_data.json", function(json) {
    //     console.log("hop");
    //     console.log(json); // this will show the info it in firebug console
    // });
    var dataCountries = function getValues(){
        dataCountries = null;
    
        $.getJSON("https://raw.githubusercontent.com/2262800d/hci2019/master/data/parsed_data.json", function(data){
        //console.log(data);
        //return data;
        dataCountries=data;
        //console.log(dataCountries);
        //getValues(data);
        // return data;
        //   for(var country in dataCountries){
        //     console.log(country);
        // }
        });
        return dataCountries;
    }();


    console.log(dataCountries);
    for(var country in dataCountries){
        console.log(country);
    }
    
    var text = {
        attrs: {
            fill: "#488402"
        }
        , attrsHover: {
            fill: "#a4e100"
        }
    };
    return text;
}

// function hop(){
//     $.getJSON( "data/parsed_data.json", function( json ) {
//         console.log( "JSON Data received, name is " + json.name);
//         return JSON.parse(json);
//     });
// }