cube(`UserVadminFacebookAdsetsTargetingUserDevice`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_adsets_targeting_user_device\``,
  
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
    adsetsTargetingUserDevice: {
      sql: `${CUBE}.\`adsets.targeting.user_device\``,
      type: `string`,
      title: `Adsets.targeting.user Device`
    }
  },
  
  dataSource: `default`
});
