cube(`UserVadminFacebookAdsetsDataTargetingUserDevice`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_adsets__data_targeting_user_device\``,
  
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
    adsetsDataTargetingUserDevice: {
      sql: `${CUBE}.\`adsets._data.targeting.user_device\``,
      type: `string`,
      title: `Adsets. Data.targeting.user Device`
    }
  },
  
  dataSource: `default`
});
