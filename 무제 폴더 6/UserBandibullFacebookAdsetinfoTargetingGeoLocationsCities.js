cube(`UserBandibullFacebookAdsetinfoTargetingGeoLocationsCities`, {
  sql: `SELECT * FROM vad.\`user_bandibull_facebook_adsetInfo_targeting_geo_locations_cities\``,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [adsetinfoTargetingGeoLocationsCitiesCountry, adsetinfoTargetingGeoLocationsCitiesName, adsetinfoTargetingGeoLocationsCitiesRegionId]
    }
  },
  
  dimensions: {
    adsetinfoTargetingGeoLocationsCitiesCountry: {
      sql: `${CUBE}.\`adsetInfo.targeting.geo_locations.cities.country\``,
      type: `string`,
      title: `Adsetinfo.targeting.geo Locations.cities.country`
    },
    
    adsetinfoTargetingGeoLocationsCitiesDistanceUnit: {
      sql: `${CUBE}.\`adsetInfo.targeting.geo_locations.cities.distance_unit\``,
      type: `string`,
      title: `Adsetinfo.targeting.geo Locations.cities.distance Unit`
    },
    
    adsetinfoTargetingGeoLocationsCitiesKey: {
      sql: `${CUBE}.\`adsetInfo.targeting.geo_locations.cities.key\``,
      type: `string`,
      title: `Adsetinfo.targeting.geo Locations.cities.key`
    },
    
    adsetinfoTargetingGeoLocationsCitiesName: {
      sql: `${CUBE}.\`adsetInfo.targeting.geo_locations.cities.name\``,
      type: `string`,
      title: `Adsetinfo.targeting.geo Locations.cities.name`
    },
    
    adsetinfoTargetingGeoLocationsCitiesRegion: {
      sql: `${CUBE}.\`adsetInfo.targeting.geo_locations.cities.region\``,
      type: `string`,
      title: `Adsetinfo.targeting.geo Locations.cities.region`
    },
    
    adsetinfoTargetingGeoLocationsCitiesRegionId: {
      sql: `${CUBE}.\`adsetInfo.targeting.geo_locations.cities.region_id\``,
      type: `string`,
      title: `Adsetinfo.targeting.geo Locations.cities.region Id`
    }
  },
  
  dataSource: `default`
});
