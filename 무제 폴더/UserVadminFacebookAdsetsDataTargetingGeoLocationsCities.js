cube(`UserVadminFacebookAdsetsDataTargetingGeoLocationsCities`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_adsets__data_targeting_geo_locations_cities\``,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [adsetsDataTargetingGeoLocationsCitiesCountry, adsetsDataTargetingGeoLocationsCitiesName, adsetsDataTargetingGeoLocationsCitiesRegionId]
    }
  },
  
  dimensions: {
    _id: {
      sql: `_id`,
      type: `string`,
      primaryKey: true,
    },
    adsetsDataTargetingGeoLocationsCitiesCountry: {
      sql: `${CUBE}.\`adsets._data.targeting.geo_locations.cities.country\``,
      type: `string`,
      title: `Adsets. Data.targeting.geo Locations.cities.country`
    },
    
    adsetsDataTargetingGeoLocationsCitiesDistanceUnit: {
      sql: `${CUBE}.\`adsets._data.targeting.geo_locations.cities.distance_unit\``,
      type: `string`,
      title: `Adsets. Data.targeting.geo Locations.cities.distance Unit`
    },
    
    adsetsDataTargetingGeoLocationsCitiesKey: {
      sql: `${CUBE}.\`adsets._data.targeting.geo_locations.cities.key\``,
      type: `string`,
      title: `Adsets. Data.targeting.geo Locations.cities.key`
    },
    
    adsetsDataTargetingGeoLocationsCitiesName: {
      sql: `${CUBE}.\`adsets._data.targeting.geo_locations.cities.name\``,
      type: `string`,
      title: `Adsets. Data.targeting.geo Locations.cities.name`
    },
    
    adsetsDataTargetingGeoLocationsCitiesRegion: {
      sql: `${CUBE}.\`adsets._data.targeting.geo_locations.cities.region\``,
      type: `string`,
      title: `Adsets. Data.targeting.geo Locations.cities.region`
    },
    
    adsetsDataTargetingGeoLocationsCitiesRegionId: {
      sql: `${CUBE}.\`adsets._data.targeting.geo_locations.cities.region_id\``,
      type: `string`,
      title: `Adsets. Data.targeting.geo Locations.cities.region Id`
    }
  },
  
  dataSource: `default`
});
