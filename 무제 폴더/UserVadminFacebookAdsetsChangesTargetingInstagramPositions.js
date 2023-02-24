cube(`UserVadminFacebookAdsetsChangesTargetingInstagramPositions`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_adsets__changes_targeting_instagram_positions\``,
  
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
    adsetsChangesTargetingInstagramPositions: {
      sql: `${CUBE}.\`adsets._changes.targeting.instagram_positions\``,
      type: `string`,
      title: `Adsets. Changes.targeting.instagram Positions`
    }
  },
  
  dataSource: `default`
});
