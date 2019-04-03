var wms_layers = [];

        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_WorldMultipoints_1 = new ol.format.GeoJSON();
var features_WorldMultipoints_1 = format_WorldMultipoints_1.readFeatures(json_WorldMultipoints_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WorldMultipoints_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_WorldMultipoints_1.addFeatures(features_WorldMultipoints_1);var lyr_WorldMultipoints_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WorldMultipoints_1, 
                style: style_WorldMultipoints_1,
                title: '<img src="styles/legend/WorldMultipoints_1.png" /> World Multipoints'
            });var format_WorldPoints_2 = new ol.format.GeoJSON();
var features_WorldPoints_2 = format_WorldPoints_2.readFeatures(json_WorldPoints_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WorldPoints_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_WorldPoints_2.addFeatures(features_WorldPoints_2);var lyr_WorldPoints_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WorldPoints_2, 
                style: style_WorldPoints_2,
                title: '<img src="styles/legend/WorldPoints_2.png" /> World Points'
            });var format_USAMultipoints_3 = new ol.format.GeoJSON();
var features_USAMultipoints_3 = format_USAMultipoints_3.readFeatures(json_USAMultipoints_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_USAMultipoints_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_USAMultipoints_3.addFeatures(features_USAMultipoints_3);var lyr_USAMultipoints_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_USAMultipoints_3, 
                style: style_USAMultipoints_3,
                title: '<img src="styles/legend/USAMultipoints_3.png" /> USA Multipoints'
            });var format_USAPoints_4 = new ol.format.GeoJSON();
var features_USAPoints_4 = format_USAPoints_4.readFeatures(json_USAPoints_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_USAPoints_4 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_USAPoints_4.addFeatures(features_USAPoints_4);var lyr_USAPoints_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_USAPoints_4, 
                style: style_USAPoints_4,
                title: '<img src="styles/legend/USAPoints_4.png" /> USA Points'
            });

lyr_OSMStandard_0.setVisible(true);lyr_WorldMultipoints_1.setVisible(true);lyr_WorldPoints_2.setVisible(true);lyr_USAMultipoints_3.setVisible(true);lyr_USAPoints_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_WorldMultipoints_1,lyr_WorldPoints_2,lyr_USAMultipoints_3,lyr_USAPoints_4];
lyr_WorldMultipoints_1.set('fieldAliases', {'Key': 'Key', 'Year': 'Year', 'Author': 'Author', 'Title': 'Title', 'Geometry': 'Geometry', });
lyr_WorldPoints_2.set('fieldAliases', {'Key': 'Key', 'Year': 'Year', 'Author': 'Author', 'Title': 'Title', 'Geometry': 'Geometry', });
lyr_USAMultipoints_3.set('fieldAliases', {'Key': 'Key', 'Year': 'Year', 'Author': 'Author', 'Title': 'Title', 'Geometry': 'Geometry', });
lyr_USAPoints_4.set('fieldAliases', {'Key': 'Key', 'Year': 'Year', 'Author': 'Author', 'Title': 'Title', 'Geometry': 'Geometry', });
lyr_WorldMultipoints_1.set('fieldImages', {'Key': 'TextEdit', 'Year': 'TextEdit', 'Author': 'TextEdit', 'Title': 'TextEdit', 'Geometry': 'TextEdit', });
lyr_WorldPoints_2.set('fieldImages', {'Key': 'TextEdit', 'Year': 'TextEdit', 'Author': 'TextEdit', 'Title': 'TextEdit', 'Geometry': 'TextEdit', });
lyr_USAMultipoints_3.set('fieldImages', {'Key': 'TextEdit', 'Year': 'TextEdit', 'Author': 'TextEdit', 'Title': 'TextEdit', 'Geometry': 'TextEdit', });
lyr_USAPoints_4.set('fieldImages', {'Key': 'TextEdit', 'Year': 'TextEdit', 'Author': 'TextEdit', 'Title': 'TextEdit', 'Geometry': 'TextEdit', });
lyr_WorldMultipoints_1.set('fieldLabels', {'Key': 'inline label', 'Year': 'inline label', 'Author': 'inline label', 'Title': 'inline label', 'Geometry': 'inline label', });
lyr_WorldPoints_2.set('fieldLabels', {'Key': 'inline label', 'Year': 'inline label', 'Author': 'inline label', 'Title': 'inline label', 'Geometry': 'inline label', });
lyr_USAMultipoints_3.set('fieldLabels', {'Key': 'inline label', 'Year': 'inline label', 'Author': 'inline label', 'Title': 'inline label', 'Geometry': 'inline label', });
lyr_USAPoints_4.set('fieldLabels', {'Key': 'inline label', 'Year': 'inline label', 'Author': 'inline label', 'Title': 'inline label', 'Geometry': 'inline label', });
lyr_USAPoints_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});