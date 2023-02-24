cube(`UserVadminFacebookAdsConversionSpecsConversionId`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_ads_conversion_specs_conversion_id\``,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [adsConversionSpecsConversionId]
    }
  },
  
  dimensions: {
    _id: {
      sql: `_id`,
      type: `string`,
      primaryKey: true,
    },
    adsConversionSpecsConversionId: {
      sql: `${CUBE}.\`ads.conversion_specs.conversion_id\``,
      type: `string`,
      title: `Ads.conversion Specs.conversion Id`
    }
  },
  
  dataSource: `default`
});
