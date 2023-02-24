cube(`UserVadminFacebookAdsConversionSpecs`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_ads_conversion_specs\``,
  
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
    adsConversionSpecs: {
      sql: `${CUBE}.\`ads.conversion_specs\``,
      type: `string`,
      title: `Ads.conversion Specs`
    }
  },
  
  dataSource: `default`
});
