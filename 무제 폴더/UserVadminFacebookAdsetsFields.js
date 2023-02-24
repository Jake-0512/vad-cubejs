cube(`UserVadminFacebookAdsetsFields`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_adsets__fields\``,
  
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
    adsetsFields: {
      sql: `${CUBE}.\`adsets._fields\``,
      type: `string`,
      title: `Adsets. Fields`
    }
  },
  
  dataSource: `default`
});
