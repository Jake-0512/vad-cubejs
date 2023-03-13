cube(`UserBandibullFacebookPixelsAutomaticMatchingFields`, {
  sql: `SELECT * FROM vad.user_bandibull_facebook_pixels_automatic_matching_fields`,
  
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
    pixelsAutomaticMatchingFields: {
      sql: `${CUBE}.\`pixels.automatic_matching_fields\``,
      type: `string`,
      title: `Pixels.automatic Matching Fields`
    }
  },
  
  dataSource: `default`
});
