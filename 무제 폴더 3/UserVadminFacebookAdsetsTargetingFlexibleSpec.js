cube(`UserVadminFacebookAdsetsTargetingFlexibleSpec`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_adsets_targeting_flexible_spec\``,
  
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
    
  },
  
  dataSource: `default`
});
