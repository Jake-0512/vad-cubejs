cube(`UserVadminFacebookAdsetsTargetingGeoLocationsCities`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_adsets_targeting_geo_locations_cities\``,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [adsetsTargetingGeoLocationsCitiesCountry, adsetsTargetingGeoLocationsCitiesName, adsetsTargetingGeoLocationsCitiesRegionId]
    }
  },
  
  dimensions: {
    _id: {
      sql: `_id`,
      type: `string`,
      primaryKey: true,
    },
    adsetsTargetingGeoLocationsCitiesCountry: {
      sql: `${CUBE}.\`adsets.targeting.geo_locations.cities.country\``,
      type: `string`,
      title: `Adsets.targeting.geo Locations.cities.country`
    },
    
    adsetsTargetingGeoLocationsCitiesDistanceUnit: {
      sql: `${CUBE}.\`adsets.targeting.geo_locations.cities.distance_unit\``,
      type: `string`,
      title: `Adsets.targeting.geo Locations.cities.distance Unit`
    },
    
    adsetsTargetingGeoLocationsCitiesKey: {
      sql: `${CUBE}.\`adsets.targeting.geo_locations.cities.key\``,
      type: `string`,
      title: `Adsets.targeting.geo Locations.cities.key`
    },
    
    adsetsTargetingGeoLocationsCitiesName: {
      sql: `${CUBE}.\`adsets.targeting.geo_locations.cities.name\``,
      type: `string`,
      title: `Adsets.targeting.geo Locations.cities.name`
    },
    
    adsetsTargetingGeoLocationsCitiesRegion: {
      sql: `${CUBE}.\`adsets.targeting.geo_locations.cities.region\``,
      type: `string`,
      title: `Adsets.targeting.geo Locations.cities.region`
    },
    
    adsetsTargetingGeoLocationsCitiesRegionId: {
      sql: `${CUBE}.\`adsets.targeting.geo_locations.cities.region_id\``,
      type: `string`,
      title: `Adsets.targeting.geo Locations.cities.region Id`
    }
  },
  
  dataSource: `default`
});
