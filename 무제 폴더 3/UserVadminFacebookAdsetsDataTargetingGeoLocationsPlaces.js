cube(`UserVadminFacebookAdsetsDataTargetingGeoLocationsPlaces`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_adsets__data_targeting_geo_locations_places\``,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [adsetsDataTargetingGeoLocationsPlacesCountry, adsetsDataTargetingGeoLocationsPlacesName]
    }
  },
  
  dimensions: {
    _id: {
      sql: `_id`,
      type: `string`,
      primaryKey: true,
    },
    adsetsDataTargetingGeoLocationsPlacesCountry: {
      sql: `${CUBE}.\`adsets._data.targeting.geo_locations.places.country\``,
      type: `string`,
      title: `Adsets. Data.targeting.geo Locations.places.country`
    },
    
    adsetsDataTargetingGeoLocationsPlacesDistanceUnit: {
      sql: `${CUBE}.\`adsets._data.targeting.geo_locations.places.distance_unit\``,
      type: `string`,
      title: `Adsets. Data.targeting.geo Locations.places.distance Unit`
    },
    
    adsetsDataTargetingGeoLocationsPlacesKey: {
      sql: `${CUBE}.\`adsets._data.targeting.geo_locations.places.key\``,
      type: `string`,
      title: `Adsets. Data.targeting.geo Locations.places.key`
    },
    
    adsetsDataTargetingGeoLocationsPlacesName: {
      sql: `${CUBE}.\`adsets._data.targeting.geo_locations.places.name\``,
      type: `string`,
      title: `Adsets. Data.targeting.geo Locations.places.name`
    }
  },
  
  dataSource: `default`
});
