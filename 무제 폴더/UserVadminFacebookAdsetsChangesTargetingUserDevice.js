cube(`UserVadminFacebookAdsetsChangesTargetingUserDevice`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_adsets__changes_targeting_user_device\``,
  
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
    adsetsChangesTargetingUserDevice: {
      sql: `${CUBE}.\`adsets._changes.targeting.user_device\``,
      type: `string`,
      title: `Adsets. Changes.targeting.user Device`
    }
  },
  
  dataSource: `default`
});
