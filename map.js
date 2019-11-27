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
            "AUS": {
                attrs: {
                    fill: "#488402"
                }
                , attrsHover: {
                    fill: "#a4e100"
                }
            }
        },

       
        
    });
});


