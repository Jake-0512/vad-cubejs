cube(`UserVadminFacebookAdsetsTargetingDevicePlatforms`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_adsets_targeting_device_platforms\``,
  
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
    adsetsTargetingDevicePlatforms: {
      sql: `${CUBE}.\`adsets.targeting.device_platforms\``,
      type: `string`,
      title: `Adsets.targeting.device Platforms`
    }
  },
  
  dataSource: `default`
});
