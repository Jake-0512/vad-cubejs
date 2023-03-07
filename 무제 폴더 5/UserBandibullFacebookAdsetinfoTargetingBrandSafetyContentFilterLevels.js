cube(`UserBandibullFacebookAdsetinfoTargetingBrandSafetyContentFilterLevels`, {
  sql: `SELECT * FROM vad.\`user_bandibull_facebook_adsetInfo_targeting_brand_safety_content_filter_levels\``,
  
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
    adsetinfoTargetingBrandSafetyContentFilterLevels: {
      sql: `${CUBE}.\`adsetInfo.targeting.brand_safety_content_filter_levels\``,
      type: `string`,
      title: `Adsetinfo.targeting.brand Safety Content Filter Levels`
    }
  },
  
  dataSource: `default`
});
