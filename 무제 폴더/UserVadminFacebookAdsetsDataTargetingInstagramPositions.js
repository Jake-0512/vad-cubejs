cube(`UserVadminFacebookAdsetsDataTargetingInstagramPositions`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_adsets__data_targeting_instagram_positions\``,
  
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
    adsetsDataTargetingInstagramPositions: {
      sql: `${CUBE}.\`adsets._data.targeting.instagram_positions\``,
      type: `string`,
      title: `Adsets. Data.targeting.instagram Positions`
    }
  },
  
  dataSource: `default`
});
