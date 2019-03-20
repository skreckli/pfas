var wms_layers = [];

        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_PFAS_US_1 = new ol.format.GeoJSON();
var features_PFAS_US_1 = format_PFAS_US_1.readFeatures(json_PFAS_US_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PFAS_US_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_PFAS_US_1.addFeatures(features_PFAS_US_1);var lyr_PFAS_US_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PFAS_US_1, 
                style: style_PFAS_US_1,
                title: '<img src="styles/legend/PFAS_US_1.png" /> PFAS_US'
            });var format_PFAS_world_2 = new ol.format.GeoJSON();
var features_PFAS_world_2 = format_PFAS_world_2.readFeatures(json_PFAS_world_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PFAS_world_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_PFAS_world_2.addFeatures(features_PFAS_world_2);var lyr_PFAS_world_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PFAS_world_2, 
                style: style_PFAS_world_2,
                title: '<img src="styles/legend/PFAS_world_2.png" /> PFAS_world'
            });

lyr_OSMStandard_0.setVisible(true);lyr_PFAS_US_1.setVisible(true);lyr_PFAS_world_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_PFAS_US_1,lyr_PFAS_world_2];
lyr_PFAS_US_1.set('fieldAliases', {'Year': 'Year', 'Author': 'Author', 'Title': 'Title', });
lyr_PFAS_world_2.set('fieldAliases', {'Year': 'Year', 'Author': 'Author', 'Title': 'Title', });
lyr_PFAS_US_1.set('fieldImages', {'Year': '', 'Author': '', 'Title': '', });
lyr_PFAS_world_2.set('fieldImages', {'Year': '', 'Author': '', 'Title': '', });
lyr_PFAS_US_1.set('fieldLabels', {'Year': 'inline label', 'Author': 'inline label', 'Title': 'inline label', });
lyr_PFAS_world_2.set('fieldLabels', {'Year': 'inline label', 'Author': 'inline label', 'Title': 'inline label', });
lyr_PFAS_world_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});