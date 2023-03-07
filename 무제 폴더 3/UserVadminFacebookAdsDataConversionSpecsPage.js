cube(`UserVadminFacebookAdsDataConversionSpecsPage`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_ads__data_conversion_specs_page\``,
  
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
    adsDataConversionSpecsPage: {
      sql: `${CUBE}.\`ads._data.conversion_specs.page\``,
      type: `string`,
      title: `Ads. Data.conversion Specs.page`
    }
  },
  
  dataSource: `default`
});
