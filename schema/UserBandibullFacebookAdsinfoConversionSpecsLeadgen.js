cube(`UserBandibullFacebookAdsinfoConversionSpecsLeadgen`, {
  sql: `SELECT * FROM vad.\`user_bandibull_facebook_adsInfo_conversion_specs_leadgen\``,
  
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
    adsinfoConversionSpecsLeadgen: {
      sql: `${CUBE}.\`adsInfo.conversion_specs.leadgen\``,
      type: `string`,
      title: `Adsinfo.conversion Specs.leadgen`
    }
  },
  
  dataSource: `default`
});
