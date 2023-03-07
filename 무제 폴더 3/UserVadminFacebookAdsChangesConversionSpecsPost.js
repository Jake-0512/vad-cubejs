cube(`UserVadminFacebookAdsChangesConversionSpecsPost`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_ads__changes_conversion_specs_post\``,
  
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
    adsChangesConversionSpecsPost: {
      sql: `${CUBE}.\`ads._changes.conversion_specs.post\``,
      type: `string`,
      title: `Ads. Changes.conversion Specs.post`
    }
  },
  
  dataSource: `default`
});
