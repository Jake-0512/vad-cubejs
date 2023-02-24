cube(`UserVadminFacebookAdsChangesConversionSpecsConversionId`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_ads__changes_conversion_specs_conversion_id\``,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [adsChangesConversionSpecsConversionId]
    }
  },
  
  dimensions: {
    _id: {
      sql: `_id`,
      type: `string`,
      primaryKey: true,
    },
    adsChangesConversionSpecsConversionId: {
      sql: `${CUBE}.\`ads._changes.conversion_specs.conversion_id\``,
      type: `string`,
      title: `Ads. Changes.conversion Specs.conversion Id`
    }
  },
  
  dataSource: `default`
});
