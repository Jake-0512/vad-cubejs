cube(`UserVadminFacebookAdsetsDataTargetingMessengerPositions`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_adsets__data_targeting_messenger_positions\``,
  
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
    adsetsDataTargetingMessengerPositions: {
      sql: `${CUBE}.\`adsets._data.targeting.messenger_positions\``,
      type: `string`,
      title: `Adsets. Data.targeting.messenger Positions`
    }
  },
  
  dataSource: `default`
});
