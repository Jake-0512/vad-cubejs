cube(`UserVadminFacebookAdsetsDataTargetingGeoLocationsCountries`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_adsets__data_targeting_geo_locations_countries\``,
  
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
    adsetsDataTargetingGeoLocationsCountries: {
      sql: `${CUBE}.\`adsets._data.targeting.geo_locations.countries\``,
      type: `string`,
      title: `Adsets. Data.targeting.geo Locations.countries`
    }
  },
  
  dataSource: `default`
});
