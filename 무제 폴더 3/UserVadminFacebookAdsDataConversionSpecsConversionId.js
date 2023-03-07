cube(`UserVadminFacebookAdsDataConversionSpecsConversionId`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_ads__data_conversion_specs_conversion_id\``,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [adsDataConversionSpecsConversionId]
    }
  },
  
  dimensions: {
    _id: {
      sql: `_id`,
      type: `string`,
      primaryKey: true,
    },
    adsDataConversionSpecsConversionId: {
      sql: `${CUBE}.\`ads._data.conversion_specs.conversion_id\``,
      type: `string`,
      title: `Ads. Data.conversion Specs.conversion Id`
    }
  },
  
  dataSource: `default`
});
