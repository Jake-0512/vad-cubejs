cube(`UserVadminFacebookAdsetsChangesTargetingDevicePlatforms`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_adsets__changes_targeting_device_platforms\``,
  
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
    adsetsChangesTargetingDevicePlatforms: {
      sql: `${CUBE}.\`adsets._changes.targeting.device_platforms\``,
      type: `string`,
      title: `Adsets. Changes.targeting.device Platforms`
    }
  },
  
  dataSource: `default`
});
