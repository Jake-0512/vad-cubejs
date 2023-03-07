cube(`UserVadminFacebookAdsetsTargetingFacebookPositions`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_adsets_targeting_facebook_positions\``,
  
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
    adsetsTargetingFacebookPositions: {
      sql: `${CUBE}.\`adsets.targeting.facebook_positions\``,
      type: `string`,
      title: `Adsets.targeting.facebook Positions`
    }
  },
  
  dataSource: `default`
});
