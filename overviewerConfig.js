var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "image": {
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "3": "compass_lower-left.png",
                "2": "compass_lower-right.png"
            }
        },
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2
    },
    "worlds": [
        "stincc - overworld",
        "stincc - nether"
    ],
    "map": {
        "debug": false,
        "cacheTag": "1628918492",
        "north_direction": "lower-left",
        "controls": {
            "pan": true,
            "zoom": true,
            "spawn": true,
            "compass": true,
            "mapType": true,
            "overlays": true,
            "coordsBox": true
        }
    },
    "tilesets": [
        {
            "name": "North View",
            "zoomLevels": 10,
            "defaultZoom": 1,
            "maxZoom": 10,
            "path": "north",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "stincc - overworld",
            "last_rendertime": 1628799740,
            "imgextension": "jpg",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                172,
                256,
                4
            ],
            "minZoom": 0,
            "spawn": [
                172,
                256,
                4
            ],
            "north_direction": 0
        },
        {
            "name": "South View",
            "zoomLevels": 10,
            "defaultZoom": 1,
            "maxZoom": 10,
            "path": "south",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "stincc - overworld",
            "last_rendertime": 1628799740,
            "imgextension": "jpg",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                172,
                256,
                4
            ],
            "minZoom": 0,
            "spawn": [
                172,
                256,
                4
            ],
            "north_direction": 2
        },
        {
            "name": "Nether",
            "zoomLevels": 10,
            "defaultZoom": 1,
            "maxZoom": 10,
            "path": "nether",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "stincc - nether",
            "last_rendertime": 1628800012,
            "imgextension": "jpg",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                172,
                256,
                4
            ],
            "minZoom": 0,
            "spawn": false,
            "north_direction": 0
        }
    ]
};
