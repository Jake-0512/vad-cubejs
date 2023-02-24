cube(`UserVadminFacebookAdsetsDataTargetingGeoLocationsLocationTypes`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_adsets__data_targeting_geo_locations_location_types\``,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: []
    }
  },
  
  dimensions: {
    _id: {
      sql: `_id`,
      type: `string`,
      primaryKey: true,
    },
    adsetsDataTargetingGeoLocationsLocationTypes: {
      sql: `${CUBE}.\`adsets._data.targeting.geo_locations.location_types\``,
      type: `string`,
      title: `Adsets. Data.targeting.geo Locations.location Types`
    }
  },
  
  dataSource: `default`
});
