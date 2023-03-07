cube(`UserVadminFacebookAdsetsTargetingMessengerPositions`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_adsets_targeting_messenger_positions\``,
  
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
    adsetsTargetingMessengerPositions: {
      sql: `${CUBE}.\`adsets.targeting.messenger_positions\``,
      type: `string`,
      title: `Adsets.targeting.messenger Positions`
    }
  },
  
  dataSource: `default`
});
