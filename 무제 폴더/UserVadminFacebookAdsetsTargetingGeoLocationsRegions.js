cube(`UserVadminFacebookAdsetsTargetingGeoLocationsRegions`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_adsets_targeting_geo_locations_regions\``,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [adsetsTargetingGeoLocationsRegionsCountry, adsetsTargetingGeoLocationsRegionsName]
    }
  },
  
  dimensions: {
    _id: {
      sql: `_id`,
      type: `string`,
      primaryKey: true,
    },
    adsetsTargetingGeoLocationsRegionsCountry: {
      sql: `${CUBE}.\`adsets.targeting.geo_locations.regions.country\``,
      type: `string`,
      title: `Adsets.targeting.geo Locations.regions.country`
    },
    
    adsetsTargetingGeoLocationsRegionsKey: {
      sql: `${CUBE}.\`adsets.targeting.geo_locations.regions.key\``,
      type: `string`,
      title: `Adsets.targeting.geo Locations.regions.key`
    },
    
    adsetsTargetingGeoLocationsRegionsName: {
      sql: `${CUBE}.\`adsets.targeting.geo_locations.regions.name\``,
      type: `string`,
      title: `Adsets.targeting.geo Locations.regions.name`
    }
  },
  
  dataSource: `default`
});
