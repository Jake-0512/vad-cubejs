cube(`UserVadminFacebookAdsetsTargetingUserOs`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_adsets_targeting_user_os\``,
  
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
    adsetsTargetingUserOs: {
      sql: `${CUBE}.\`adsets.targeting.user_os\``,
      type: `string`,
      title: `Adsets.targeting.user Os`
    }
  },
  
  dataSource: `default`
});
