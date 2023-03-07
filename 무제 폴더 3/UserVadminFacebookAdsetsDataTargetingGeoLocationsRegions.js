cube(`UserVadminFacebookAdsetsDataTargetingGeoLocationsRegions`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_adsets__data_targeting_geo_locations_regions\``,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [adsetsDataTargetingGeoLocationsRegionsCountry, adsetsDataTargetingGeoLocationsRegionsName]
    }
  },
  
  dimensions: {
    _id: {
      sql: `_id`,
      type: `string`,
      primaryKey: true,
    },
    adsetsDataTargetingGeoLocationsRegionsCountry: {
      sql: `${CUBE}.\`adsets._data.targeting.geo_locations.regions.country\``,
      type: `string`,
      title: `Adsets. Data.targeting.geo Locations.regions.country`
    },
    
    adsetsDataTargetingGeoLocationsRegionsKey: {
      sql: `${CUBE}.\`adsets._data.targeting.geo_locations.regions.key\``,
      type: `string`,
      title: `Adsets. Data.targeting.geo Locations.regions.key`
    },
    
    adsetsDataTargetingGeoLocationsRegionsName: {
      sql: `${CUBE}.\`adsets._data.targeting.geo_locations.regions.name\``,
      type: `string`,
      title: `Adsets. Data.targeting.geo Locations.regions.name`
    }
  },
  
  dataSource: `default`
});
