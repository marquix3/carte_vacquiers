ol.proj.proj4.register(proj4);
ol.proj.get("IGNF:RGF93LAMB93").setExtent([571310.590909, 6295727.194434, 585067.274384, 6303839.319442]);
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
var lyr_cadastre_napoleonien_detour_georef_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "cadastre_napoleonien_detour_georef",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/cadastre_napoleonien_detour_georef_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [161130.088583, 5427041.344249, 169726.742752, 5439082.803633]
                            })
                        });
var format_les_plateaux_gologique_2 = new ol.format.GeoJSON();
var features_les_plateaux_gologique_2 = format_les_plateaux_gologique_2.readFeatures(json_les_plateaux_gologique_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'IGNF:RGF93LAMB93'});
var jsonSource_les_plateaux_gologique_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_les_plateaux_gologique_2.addFeatures(features_les_plateaux_gologique_2);
var lyr_les_plateaux_gologique_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_les_plateaux_gologique_2, 
                style: style_les_plateaux_gologique_2,
                interactive: true,
    title: 'les_plateaux_géologique<br />\
    <img src="styles/legend/les_plateaux_gologique_2_0.png" /> 1<br />\
    <img src="styles/legend/les_plateaux_gologique_2_1.png" /> 2<br />\
    <img src="styles/legend/les_plateaux_gologique_2_2.png" /> 3<br />\
    <img src="styles/legend/les_plateaux_gologique_2_3.png" /> 4<br />\
    <img src="styles/legend/les_plateaux_gologique_2_4.png" /> <br />'
        });
var format_Coursdeau_3 = new ol.format.GeoJSON();
var features_Coursdeau_3 = format_Coursdeau_3.readFeatures(json_Coursdeau_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'IGNF:RGF93LAMB93'});
var jsonSource_Coursdeau_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Coursdeau_3.addFeatures(features_Coursdeau_3);
var lyr_Coursdeau_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Coursdeau_3, 
                style: style_Coursdeau_3,
                interactive: true,
                title: '<img src="styles/legend/Coursdeau_3.png" /> Cours d\'eau'
            });
var format_fort_4 = new ol.format.GeoJSON();
var features_fort_4 = format_fort_4.readFeatures(json_fort_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'IGNF:RGF93LAMB93'});
var jsonSource_fort_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fort_4.addFeatures(features_fort_4);
var lyr_fort_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_fort_4, 
                style: style_fort_4,
                interactive: true,
                title: '<img src="styles/legend/fort_4.png" /> forêt'
            });
var format_foss_5 = new ol.format.GeoJSON();
var features_foss_5 = format_foss_5.readFeatures(json_foss_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'IGNF:RGF93LAMB93'});
var jsonSource_foss_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_foss_5.addFeatures(features_foss_5);
var lyr_foss_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_foss_5, 
                style: style_foss_5,
                interactive: true,
                title: '<img src="styles/legend/foss_5.png" /> fossé'
            });
var format_fortification_revue_6 = new ol.format.GeoJSON();
var features_fortification_revue_6 = format_fortification_revue_6.readFeatures(json_fortification_revue_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'IGNF:RGF93LAMB93'});
var jsonSource_fortification_revue_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fortification_revue_6.addFeatures(features_fortification_revue_6);
var lyr_fortification_revue_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_fortification_revue_6, 
                style: style_fortification_revue_6,
                interactive: true,
                title: '<img src="styles/legend/fortification_revue_6.png" /> fortification_revue'
            });
var format_Commune_7 = new ol.format.GeoJSON();
var features_Commune_7 = format_Commune_7.readFeatures(json_Commune_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'IGNF:RGF93LAMB93'});
var jsonSource_Commune_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Commune_7.addFeatures(features_Commune_7);
var lyr_Commune_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Commune_7, 
                style: style_Commune_7,
                interactive: true,
                title: '<img src="styles/legend/Commune_7.png" /> Commune'
            });
var format_RouteNapolonienne_8 = new ol.format.GeoJSON();
var features_RouteNapolonienne_8 = format_RouteNapolonienne_8.readFeatures(json_RouteNapolonienne_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'IGNF:RGF93LAMB93'});
var jsonSource_RouteNapolonienne_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RouteNapolonienne_8.addFeatures(features_RouteNapolonienne_8);
var lyr_RouteNapolonienne_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RouteNapolonienne_8, 
                style: style_RouteNapolonienne_8,
                interactive: true,
                title: '<img src="styles/legend/RouteNapolonienne_8.png" /> Route Napoléonienne'
            });
var format_RoutePrincipaleNapolonienne_9 = new ol.format.GeoJSON();
var features_RoutePrincipaleNapolonienne_9 = format_RoutePrincipaleNapolonienne_9.readFeatures(json_RoutePrincipaleNapolonienne_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'IGNF:RGF93LAMB93'});
var jsonSource_RoutePrincipaleNapolonienne_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RoutePrincipaleNapolonienne_9.addFeatures(features_RoutePrincipaleNapolonienne_9);
var lyr_RoutePrincipaleNapolonienne_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RoutePrincipaleNapolonienne_9, 
                style: style_RoutePrincipaleNapolonienne_9,
                interactive: true,
                title: '<img src="styles/legend/RoutePrincipaleNapolonienne_9.png" /> Route Principale Napoléonienne'
            });
var format_BtimentcadastreNap_10 = new ol.format.GeoJSON();
var features_BtimentcadastreNap_10 = format_BtimentcadastreNap_10.readFeatures(json_BtimentcadastreNap_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'IGNF:RGF93LAMB93'});
var jsonSource_BtimentcadastreNap_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BtimentcadastreNap_10.addFeatures(features_BtimentcadastreNap_10);
var lyr_BtimentcadastreNap_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BtimentcadastreNap_10, 
                style: style_BtimentcadastreNap_10,
                interactive: true,
                title: '<img src="styles/legend/BtimentcadastreNap_10.png" /> Bâtiment cadastre Nap'
            });
var format_LieuditCadastreNapolonien_11 = new ol.format.GeoJSON();
var features_LieuditCadastreNapolonien_11 = format_LieuditCadastreNapolonien_11.readFeatures(json_LieuditCadastreNapolonien_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'IGNF:RGF93LAMB93'});
var jsonSource_LieuditCadastreNapolonien_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LieuditCadastreNapolonien_11.addFeatures(features_LieuditCadastreNapolonien_11);
var lyr_LieuditCadastreNapolonien_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LieuditCadastreNapolonien_11, 
                style: style_LieuditCadastreNapolonien_11,
                interactive: true,
                title: '<img src="styles/legend/LieuditCadastreNapolonien_11.png" /> Lieu dit Cadastre Napoléonien'
            });
var format_LieuditCassini_12 = new ol.format.GeoJSON();
var features_LieuditCassini_12 = format_LieuditCassini_12.readFeatures(json_LieuditCassini_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'IGNF:RGF93LAMB93'});
var jsonSource_LieuditCassini_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LieuditCassini_12.addFeatures(features_LieuditCassini_12);
var lyr_LieuditCassini_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LieuditCassini_12, 
                style: style_LieuditCassini_12,
                interactive: true,
                title: '<img src="styles/legend/LieuditCassini_12.png" /> Lieu dit Cassini'
            });
var format_1688biendelacommunautdeVacquiers_13 = new ol.format.GeoJSON();
var features_1688biendelacommunautdeVacquiers_13 = format_1688biendelacommunautdeVacquiers_13.readFeatures(json_1688biendelacommunautdeVacquiers_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'IGNF:RGF93LAMB93'});
var jsonSource_1688biendelacommunautdeVacquiers_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1688biendelacommunautdeVacquiers_13.addFeatures(features_1688biendelacommunautdeVacquiers_13);
var lyr_1688biendelacommunautdeVacquiers_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_1688biendelacommunautdeVacquiers_13, 
                style: style_1688biendelacommunautdeVacquiers_13,
                interactive: true,
                title: '<img src="styles/legend/1688biendelacommunautdeVacquiers_13.png" /> 1688-bien de la communauté de Vacquiers'
            });
var format_Indicedesite_14 = new ol.format.GeoJSON();
var features_Indicedesite_14 = format_Indicedesite_14.readFeatures(json_Indicedesite_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'IGNF:RGF93LAMB93'});
var jsonSource_Indicedesite_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Indicedesite_14.addFeatures(features_Indicedesite_14);
var lyr_Indicedesite_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Indicedesite_14, 
                style: style_Indicedesite_14,
                interactive: true,
                title: '<img src="styles/legend/Indicedesite_14.png" /> Indice de site'
            });
var format_site_archologique_vacquiers_15 = new ol.format.GeoJSON();
var features_site_archologique_vacquiers_15 = format_site_archologique_vacquiers_15.readFeatures(json_site_archologique_vacquiers_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'IGNF:RGF93LAMB93'});
var jsonSource_site_archologique_vacquiers_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_site_archologique_vacquiers_15.addFeatures(features_site_archologique_vacquiers_15);
var lyr_site_archologique_vacquiers_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_site_archologique_vacquiers_15, 
                style: style_site_archologique_vacquiers_15,
                interactive: true,
                title: '<img src="styles/legend/site_archologique_vacquiers_15.png" /> site_archéologique_vacquiers'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_cadastre_napoleonien_detour_georef_1.setVisible(true);lyr_les_plateaux_gologique_2.setVisible(true);lyr_Coursdeau_3.setVisible(true);lyr_fort_4.setVisible(true);lyr_foss_5.setVisible(true);lyr_fortification_revue_6.setVisible(true);lyr_Commune_7.setVisible(true);lyr_RouteNapolonienne_8.setVisible(true);lyr_RoutePrincipaleNapolonienne_9.setVisible(true);lyr_BtimentcadastreNap_10.setVisible(true);lyr_LieuditCadastreNapolonien_11.setVisible(true);lyr_LieuditCassini_12.setVisible(true);lyr_1688biendelacommunautdeVacquiers_13.setVisible(true);lyr_Indicedesite_14.setVisible(true);lyr_site_archologique_vacquiers_15.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_cadastre_napoleonien_detour_georef_1,lyr_les_plateaux_gologique_2,lyr_Coursdeau_3,lyr_fort_4,lyr_foss_5,lyr_fortification_revue_6,lyr_Commune_7,lyr_RouteNapolonienne_8,lyr_RoutePrincipaleNapolonienne_9,lyr_BtimentcadastreNap_10,lyr_LieuditCadastreNapolonien_11,lyr_LieuditCassini_12,lyr_1688biendelacommunautdeVacquiers_13,lyr_Indicedesite_14,lyr_site_archologique_vacquiers_15];
lyr_les_plateaux_gologique_2.set('fieldAliases', {'id': 'id', });
lyr_Coursdeau_3.set('fieldAliases', {'Nom': 'Nom', });
lyr_fort_4.set('fieldAliases', {'id': 'id', 'Nom': 'Nom', });
lyr_foss_5.set('fieldAliases', {});
lyr_fortification_revue_6.set('fieldAliases', {});
lyr_Commune_7.set('fieldAliases', {'Nom': 'Nom', 'Insee': 'Insee', 'Y': 'Y', 'X': 'X', 'Superficie': 'Superficie', 'Nom départ': 'Nom départ', });
lyr_RouteNapolonienne_8.set('fieldAliases', {});
lyr_RoutePrincipaleNapolonienne_9.set('fieldAliases', {});
lyr_BtimentcadastreNap_10.set('fieldAliases', {'Quartier': 'Quartier', 'Fonction': 'Fonction', });
lyr_LieuditCadastreNapolonien_11.set('fieldAliases', {'Nom': 'Nom', 'Type': 'Type', 'Nbr de bat': 'Nbr de bat', });
lyr_LieuditCassini_12.set('fieldAliases', {'Nom': 'Nom', 'Type': 'Type', });
lyr_1688biendelacommunautdeVacquiers_13.set('fieldAliases', {'Nom': 'Nom', 'Type': 'Type', 'Précision': 'Précision', 'descriptio': 'descriptio', });
lyr_Indicedesite_14.set('fieldAliases', {'id': 'id', 'Nom': 'Nom', 'Fonction': 'Fonction', 'Période': 'Période', });
lyr_site_archologique_vacquiers_15.set('fieldAliases', {'id': 'id', 'Nom': 'Nom', 'Chronologi': 'Chronologi', 'code': 'code', 'lieu-dit': 'lieu-dit', 'Parcelle': 'Parcelle', 'Datation': 'Datation', 'interventi': 'interventi', 'fonction': 'fonction', 'Fiabilité': 'Fiabilité', });
lyr_les_plateaux_gologique_2.set('fieldImages', {'id': 'TextEdit', });
lyr_Coursdeau_3.set('fieldImages', {'Nom': 'TextEdit', });
lyr_fort_4.set('fieldImages', {'id': 'TextEdit', 'Nom': 'TextEdit', });
lyr_foss_5.set('fieldImages', {});
lyr_fortification_revue_6.set('fieldImages', {});
lyr_Commune_7.set('fieldImages', {'Nom': 'TextEdit', 'Insee': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', 'Superficie': 'TextEdit', 'Nom départ': 'TextEdit', });
lyr_RouteNapolonienne_8.set('fieldImages', {});
lyr_RoutePrincipaleNapolonienne_9.set('fieldImages', {});
lyr_BtimentcadastreNap_10.set('fieldImages', {'Quartier': 'TextEdit', 'Fonction': 'TextEdit', });
lyr_LieuditCadastreNapolonien_11.set('fieldImages', {'Nom': 'TextEdit', 'Type': 'TextEdit', 'Nbr de bat': '', });
lyr_LieuditCassini_12.set('fieldImages', {'Nom': 'TextEdit', 'Type': '', });
lyr_1688biendelacommunautdeVacquiers_13.set('fieldImages', {'Nom': 'TextEdit', 'Type': '', 'Précision': 'TextEdit', 'descriptio': 'TextEdit', });
lyr_Indicedesite_14.set('fieldImages', {'id': 'TextEdit', 'Nom': 'TextEdit', 'Fonction': '', 'Période': '', });
lyr_site_archologique_vacquiers_15.set('fieldImages', {'id': 'TextEdit', 'Nom': 'TextEdit', 'Chronologi': 'TextEdit', 'code': 'TextEdit', 'lieu-dit': 'TextEdit', 'Parcelle': 'TextEdit', 'Datation': 'TextEdit', 'interventi': 'TextEdit', 'fonction': 'TextEdit', 'Fiabilité': 'TextEdit', });
lyr_les_plateaux_gologique_2.set('fieldLabels', {'id': 'header label', });
lyr_Coursdeau_3.set('fieldLabels', {'Nom': 'no label', });
lyr_fort_4.set('fieldLabels', {'id': 'no label', 'Nom': 'no label', });
lyr_foss_5.set('fieldLabels', {});
lyr_fortification_revue_6.set('fieldLabels', {});
lyr_Commune_7.set('fieldLabels', {'Nom': 'header label', 'Insee': 'header label', 'Y': 'header label', 'X': 'header label', 'Superficie': 'header label', 'Nom départ': 'header label', });
lyr_RouteNapolonienne_8.set('fieldLabels', {});
lyr_RoutePrincipaleNapolonienne_9.set('fieldLabels', {});
lyr_BtimentcadastreNap_10.set('fieldLabels', {'Quartier': 'header label', 'Fonction': 'header label', });
lyr_LieuditCadastreNapolonien_11.set('fieldLabels', {'Nom': 'header label', 'Type': 'header label', 'Nbr de bat': 'header label', });
lyr_LieuditCassini_12.set('fieldLabels', {'Nom': 'header label', 'Type': 'header label', });
lyr_1688biendelacommunautdeVacquiers_13.set('fieldLabels', {'Nom': 'header label', 'Type': 'header label', 'Précision': 'header label', 'descriptio': 'header label', });
lyr_Indicedesite_14.set('fieldLabels', {'id': 'header label', 'Nom': 'header label', 'Fonction': 'header label', 'Période': 'header label', });
lyr_site_archologique_vacquiers_15.set('fieldLabels', {'id': 'header label', 'Nom': 'header label', 'Chronologi': 'header label', 'code': 'header label', 'lieu-dit': 'header label', 'Parcelle': 'header label', 'Datation': 'header label', 'interventi': 'header label', 'fonction': 'header label', 'Fiabilité': 'header label', });
lyr_site_archologique_vacquiers_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});