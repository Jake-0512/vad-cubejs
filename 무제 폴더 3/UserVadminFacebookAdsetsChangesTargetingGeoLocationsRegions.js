cube(`UserVadminFacebookAdsetsChangesTargetingGeoLocationsRegions`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_adsets__changes_targeting_geo_locations_regions\``,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [adsetsChangesTargetingGeoLocationsRegionsCountry, adsetsChangesTargetingGeoLocationsRegionsName]
    }
  },
  
  dimensions: {
    _id: {
      sql: `_id`,
      type: `string`,
      primaryKey: true,
    },
    adsetsChangesTargetingGeoLocationsRegionsCountry: {
      sql: `${CUBE}.\`adsets._changes.targeting.geo_locations.regions.country\``,
      type: `string`,
      title: `Adsets. Changes.targeting.geo Locations.regions.country`
    },
    
    adsetsChangesTargetingGeoLocationsRegionsKey: {
      sql: `${CUBE}.\`adsets._changes.targeting.geo_locations.regions.key\``,
      type: `string`,
      title: `Adsets. Changes.targeting.geo Locations.regions.key`
    },
    
    adsetsChangesTargetingGeoLocationsRegionsName: {
      sql: `${CUBE}.\`adsets._changes.targeting.geo_locations.regions.name\``,
      type: `string`,
      title: `Adsets. Changes.targeting.geo Locations.regions.name`
    }
  },
  
  dataSource: `default`
});
