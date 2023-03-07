cube(`UserVadminFacebookAdsetsChangesPacingType`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_adsets__changes_pacing_type\``,
  
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
    adsetsChangesPacingType: {
      sql: `${CUBE}.\`adsets._changes.pacing_type\``,
      type: `string`,
      title: `Adsets. Changes.pacing Type`
    }
  },
  
  dataSource: `default`
});
