cube(`UserBandibullFacebookAdsetinfoTargetingGeoLocationsLocationTypes`, {
  sql: `SELECT * FROM vad.\`user_bandibull_facebook_adsetInfo_targeting_geo_locations_location_types\``,
  
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
    adsetinfoTargetingGeoLocationsLocationTypes: {
      sql: `${CUBE}.\`adsetInfo.targeting.geo_locations.location_types\``,
      type: `string`,
      title: `Adsetinfo.targeting.geo Locations.location Types`
    }
  },
  
  dataSource: `default`
});
