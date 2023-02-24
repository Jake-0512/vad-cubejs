cube(`UserVadminFacebookAdsetsChangesTargetingGeoLocationsCities`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_adsets__changes_targeting_geo_locations_cities\``,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [adsetsChangesTargetingGeoLocationsCitiesCountry, adsetsChangesTargetingGeoLocationsCitiesName, adsetsChangesTargetingGeoLocationsCitiesRegionId]
    }
  },
  
  dimensions: {
    _id: {
      sql: `_id`,
      type: `string`,
      primaryKey: true,
    },
    adsetsChangesTargetingGeoLocationsCitiesCountry: {
      sql: `${CUBE}.\`adsets._changes.targeting.geo_locations.cities.country\``,
      type: `string`,
      title: `Adsets. Changes.targeting.geo Locations.cities.country`
    },
    
    adsetsChangesTargetingGeoLocationsCitiesDistanceUnit: {
      sql: `${CUBE}.\`adsets._changes.targeting.geo_locations.cities.distance_unit\``,
      type: `string`,
      title: `Adsets. Changes.targeting.geo Locations.cities.distance Unit`
    },
    
    adsetsChangesTargetingGeoLocationsCitiesKey: {
      sql: `${CUBE}.\`adsets._changes.targeting.geo_locations.cities.key\``,
      type: `string`,
      title: `Adsets. Changes.targeting.geo Locations.cities.key`
    },
    
    adsetsChangesTargetingGeoLocationsCitiesName: {
      sql: `${CUBE}.\`adsets._changes.targeting.geo_locations.cities.name\``,
      type: `string`,
      title: `Adsets. Changes.targeting.geo Locations.cities.name`
    },
    
    adsetsChangesTargetingGeoLocationsCitiesRegion: {
      sql: `${CUBE}.\`adsets._changes.targeting.geo_locations.cities.region\``,
      type: `string`,
      title: `Adsets. Changes.targeting.geo Locations.cities.region`
    },
    
    adsetsChangesTargetingGeoLocationsCitiesRegionId: {
      sql: `${CUBE}.\`adsets._changes.targeting.geo_locations.cities.region_id\``,
      type: `string`,
      title: `Adsets. Changes.targeting.geo Locations.cities.region Id`
    }
  },
  
  dataSource: `default`
});
