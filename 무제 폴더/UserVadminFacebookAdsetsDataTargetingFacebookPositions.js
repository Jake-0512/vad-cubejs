cube(`UserVadminFacebookAdsetsDataTargetingFacebookPositions`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_adsets__data_targeting_facebook_positions\``,
  
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
    adsetsDataTargetingFacebookPositions: {
      sql: `${CUBE}.\`adsets._data.targeting.facebook_positions\``,
      type: `string`,
      title: `Adsets. Data.targeting.facebook Positions`
    }
  },
  
  dataSource: `default`
});
