cube(`UserVadminFacebookPixelsDataAutomaticMatchingFields`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_pixels__data_automatic_matching_fields\``,
  
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
    pixelsDataAutomaticMatchingFields: {
      sql: `${CUBE}.\`pixels._data.automatic_matching_fields\``,
      type: `string`,
      title: `Pixels. Data.automatic Matching Fields`
    }
  },
  
  dataSource: `default`
});
