cube(`UserBandibullFacebookAdsetinfoTargetingGeoLocationsRegions`, {
  sql: `SELECT * FROM vad.\`user_bandibull_facebook_adsetInfo_targeting_geo_locations_regions\``,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [adsetinfoTargetingGeoLocationsRegionsCountry, adsetinfoTargetingGeoLocationsRegionsName]
    }
  },
  
  dimensions: {
    adsetinfoTargetingGeoLocationsRegionsCountry: {
      sql: `${CUBE}.\`adsetInfo.targeting.geo_locations.regions.country\``,
      type: `string`,
      title: `Adsetinfo.targeting.geo Locations.regions.country`
    },
    
    adsetinfoTargetingGeoLocationsRegionsKey: {
      sql: `${CUBE}.\`adsetInfo.targeting.geo_locations.regions.key\``,
      type: `string`,
      title: `Adsetinfo.targeting.geo Locations.regions.key`
    },
    
    adsetinfoTargetingGeoLocationsRegionsName: {
      sql: `${CUBE}.\`adsetInfo.targeting.geo_locations.regions.name\``,
      type: `string`,
      title: `Adsetinfo.targeting.geo Locations.regions.name`
    }
  },
  
  dataSource: `default`
});
