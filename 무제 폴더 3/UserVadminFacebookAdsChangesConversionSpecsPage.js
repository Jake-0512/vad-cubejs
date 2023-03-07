cube(`UserVadminFacebookAdsChangesConversionSpecsPage`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_ads__changes_conversion_specs_page\``,
  
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
    adsChangesConversionSpecsPage: {
      sql: `${CUBE}.\`ads._changes.conversion_specs.page\``,
      type: `string`,
      title: `Ads. Changes.conversion Specs.page`
    }
  },
  
  dataSource: `default`
});
