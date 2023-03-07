cube(`UserVadminFacebookAdsetsChangesTargetingMessengerPositions`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_adsets__changes_targeting_messenger_positions\``,
  
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
    adsetsChangesTargetingMessengerPositions: {
      sql: `${CUBE}.\`adsets._changes.targeting.messenger_positions\``,
      type: `string`,
      title: `Adsets. Changes.targeting.messenger Positions`
    }
  },
  
  dataSource: `default`
});
