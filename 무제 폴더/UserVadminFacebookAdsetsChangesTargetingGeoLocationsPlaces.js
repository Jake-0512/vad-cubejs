cube(`UserVadminFacebookAdsetsChangesTargetingGeoLocationsPlaces`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_adsets__changes_targeting_geo_locations_places\``,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [adsetsChangesTargetingGeoLocationsPlacesCountry, adsetsChangesTargetingGeoLocationsPlacesName]
    }
  },
  
  dimensions: {
    _id: {
      sql: `_id`,
      type: `string`,
      primaryKey: true,
    },
    adsetsChangesTargetingGeoLocationsPlacesCountry: {
      sql: `${CUBE}.\`adsets._changes.targeting.geo_locations.places.country\``,
      type: `string`,
      title: `Adsets. Changes.targeting.geo Locations.places.country`
    },
    
    adsetsChangesTargetingGeoLocationsPlacesDistanceUnit: {
      sql: `${CUBE}.\`adsets._changes.targeting.geo_locations.places.distance_unit\``,
      type: `string`,
      title: `Adsets. Changes.targeting.geo Locations.places.distance Unit`
    },
    
    adsetsChangesTargetingGeoLocationsPlacesKey: {
      sql: `${CUBE}.\`adsets._changes.targeting.geo_locations.places.key\``,
      type: `string`,
      title: `Adsets. Changes.targeting.geo Locations.places.key`
    },
    
    adsetsChangesTargetingGeoLocationsPlacesName: {
      sql: `${CUBE}.\`adsets._changes.targeting.geo_locations.places.name\``,
      type: `string`,
      title: `Adsets. Changes.targeting.geo Locations.places.name`
    }
  },
  
  dataSource: `default`
});
