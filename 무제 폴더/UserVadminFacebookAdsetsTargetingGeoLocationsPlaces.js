cube(`UserVadminFacebookAdsetsTargetingGeoLocationsPlaces`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_adsets_targeting_geo_locations_places\``,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [adsetsTargetingGeoLocationsPlacesCountry, adsetsTargetingGeoLocationsPlacesName]
    }
  },
  
  dimensions: {
    _id: {
      sql: `_id`,
      type: `string`,
      primaryKey: true,
    },
    adsetsTargetingGeoLocationsPlacesCountry: {
      sql: `${CUBE}.\`adsets.targeting.geo_locations.places.country\``,
      type: `string`,
      title: `Adsets.targeting.geo Locations.places.country`
    },
    
    adsetsTargetingGeoLocationsPlacesDistanceUnit: {
      sql: `${CUBE}.\`adsets.targeting.geo_locations.places.distance_unit\``,
      type: `string`,
      title: `Adsets.targeting.geo Locations.places.distance Unit`
    },
    
    adsetsTargetingGeoLocationsPlacesKey: {
      sql: `${CUBE}.\`adsets.targeting.geo_locations.places.key\``,
      type: `string`,
      title: `Adsets.targeting.geo Locations.places.key`
    },
    
    adsetsTargetingGeoLocationsPlacesName: {
      sql: `${CUBE}.\`adsets.targeting.geo_locations.places.name\``,
      type: `string`,
      title: `Adsets.targeting.geo Locations.places.name`
    }
  },
  
  dataSource: `default`
});
