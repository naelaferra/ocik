var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_1_1 = new ol.layer.Tile({
            'title': '1',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_earth_2 = new ol.layer.Tile({
            'title': 'earth',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://ecn.t3.tiles.virtualearth.net/tiles/a{q}.jpeg?g=1'
            })
        });
var format_building_3 = new ol.format.GeoJSON();
var features_building_3 = format_building_3.readFeatures(json_building_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_3.addFeatures(features_building_3);
var lyr_building_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_3, 
                style: style_building_3,
                interactive: true,
                title: '<img src="styles/legend/building_3.png" /> building'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_1_1.setVisible(true);lyr_earth_2.setVisible(true);lyr_building_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_1_1,lyr_earth_2,lyr_building_3];
lyr_building_3.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'government': 'government', 'operator:wikipedia': 'operator:wikipedia', 'operator:wikidata': 'operator:wikidata', 'operator': 'operator', 'healthcare': 'healthcare', 'opening_hours': 'opening_hours', 'addr:province': 'addr:province', 'microbrewery': 'microbrewery', 'stars': 'stars', 'rooms': 'rooms', 'official_name:id': 'official_name:id', 'official_name:en': 'official_name:en', 'official_name': 'official_name', 'drive_through': 'drive_through', 'brand:wikipedia': 'brand:wikipedia', 'brand:wikidata': 'brand:wikidata', 'brand': 'brand', 'self_service': 'self_service', 'smoking': 'smoking', 'name:ja': 'name:ja', 'name:en': 'name:en', 'atm': 'atm', 'operator:type': 'operator:type', 'name:es': 'name:es', 'height': 'height', 'school:type_idn': 'school:type_idn', 'religion': 'religion', 'amenity': 'amenity', 'shop': 'shop', 'phone': 'phone', 'internet_access:ssid': 'internet_access:ssid', 'internet_access:fee': 'internet_access:fee', 'internet_access': 'internet_access', 'fax': 'fax', 'email': 'email', 'bar': 'bar', 'air_conditioning': 'air_conditioning', 'addr:housenumber': 'addr:housenumber', 'wikipedia': 'wikipedia', 'website': 'website', 'addr:street': 'addr:street', 'addr:housename': 'addr:housename', 'office': 'office', 'addr:postcode': 'addr:postcode', 'capacity:persons': 'capacity:persons', 'building:structure': 'building:structure', 'building:roof': 'building:roof', 'building:material': 'building:material', 'building:levels': 'building:levels', 'building:floor': 'building:floor', 'building:condition': 'building:condition', 'backup_generator': 'backup_generator', 'admin_level': 'admin_level', 'addr:full': 'addr:full', 'addr:city': 'addr:city', 'access:roof': 'access:roof', 'tourism': 'tourism', 'name': 'name', 'type': 'type', });
lyr_building_3.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'government': 'TextEdit', 'operator:wikipedia': 'TextEdit', 'operator:wikidata': 'TextEdit', 'operator': 'TextEdit', 'healthcare': 'TextEdit', 'opening_hours': 'TextEdit', 'addr:province': 'TextEdit', 'microbrewery': 'TextEdit', 'stars': 'TextEdit', 'rooms': 'TextEdit', 'official_name:id': 'TextEdit', 'official_name:en': 'TextEdit', 'official_name': 'TextEdit', 'drive_through': 'TextEdit', 'brand:wikipedia': 'TextEdit', 'brand:wikidata': 'TextEdit', 'brand': 'TextEdit', 'self_service': 'TextEdit', 'smoking': 'TextEdit', 'name:ja': 'TextEdit', 'name:en': 'TextEdit', 'atm': 'TextEdit', 'operator:type': 'TextEdit', 'name:es': 'TextEdit', 'height': 'TextEdit', 'school:type_idn': 'TextEdit', 'religion': 'TextEdit', 'amenity': 'TextEdit', 'shop': 'TextEdit', 'phone': 'TextEdit', 'internet_access:ssid': 'TextEdit', 'internet_access:fee': 'TextEdit', 'internet_access': 'TextEdit', 'fax': 'TextEdit', 'email': 'TextEdit', 'bar': 'TextEdit', 'air_conditioning': 'TextEdit', 'addr:housenumber': 'TextEdit', 'wikipedia': 'TextEdit', 'website': 'TextEdit', 'addr:street': 'TextEdit', 'addr:housename': 'TextEdit', 'office': 'TextEdit', 'addr:postcode': 'TextEdit', 'capacity:persons': 'TextEdit', 'building:structure': 'TextEdit', 'building:roof': 'TextEdit', 'building:material': 'TextEdit', 'building:levels': 'TextEdit', 'building:floor': 'TextEdit', 'building:condition': 'TextEdit', 'backup_generator': 'TextEdit', 'admin_level': 'TextEdit', 'addr:full': 'TextEdit', 'addr:city': 'TextEdit', 'access:roof': 'TextEdit', 'tourism': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', });
lyr_building_3.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'government': 'no label', 'operator:wikipedia': 'no label', 'operator:wikidata': 'no label', 'operator': 'no label', 'healthcare': 'no label', 'opening_hours': 'no label', 'addr:province': 'no label', 'microbrewery': 'no label', 'stars': 'no label', 'rooms': 'no label', 'official_name:id': 'no label', 'official_name:en': 'no label', 'official_name': 'no label', 'drive_through': 'no label', 'brand:wikipedia': 'no label', 'brand:wikidata': 'no label', 'brand': 'no label', 'self_service': 'no label', 'smoking': 'no label', 'name:ja': 'no label', 'name:en': 'no label', 'atm': 'no label', 'operator:type': 'no label', 'name:es': 'no label', 'height': 'no label', 'school:type_idn': 'no label', 'religion': 'no label', 'amenity': 'no label', 'shop': 'no label', 'phone': 'no label', 'internet_access:ssid': 'no label', 'internet_access:fee': 'no label', 'internet_access': 'no label', 'fax': 'no label', 'email': 'no label', 'bar': 'no label', 'air_conditioning': 'no label', 'addr:housenumber': 'no label', 'wikipedia': 'no label', 'website': 'no label', 'addr:street': 'no label', 'addr:housename': 'no label', 'office': 'no label', 'addr:postcode': 'no label', 'capacity:persons': 'no label', 'building:structure': 'no label', 'building:roof': 'no label', 'building:material': 'no label', 'building:levels': 'no label', 'building:floor': 'no label', 'building:condition': 'no label', 'backup_generator': 'no label', 'admin_level': 'no label', 'addr:full': 'no label', 'addr:city': 'no label', 'access:roof': 'no label', 'tourism': 'no label', 'name': 'no label', 'type': 'no label', });
lyr_building_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});