cube(`UserVadminFacebookAdsetsTargetingInstagramPositions`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_adsets_targeting_instagram_positions\``,
  
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
    adsetsTargetingInstagramPositions: {
      sql: `${CUBE}.\`adsets.targeting.instagram_positions\``,
      type: `string`,
      title: `Adsets.targeting.instagram Positions`
    }
  },
  
  dataSource: `default`
});
