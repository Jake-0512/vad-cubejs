cube(`UserVadminFacebookAdsFields`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_ads__fields\``,
  
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
    adsFields: {
      sql: `${CUBE}.\`ads._fields\``,
      type: `string`,
      title: `Ads. Fields`
    }
  },
  
  dataSource: `default`
});
