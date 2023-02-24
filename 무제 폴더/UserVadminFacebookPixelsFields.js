cube(`UserVadminFacebookPixelsFields`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_pixels__fields\``,
  
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
    pixelsFields: {
      sql: `${CUBE}.\`pixels._fields\``,
      type: `string`,
      title: `Pixels. Fields`
    }
  },
  
  dataSource: `default`
});
