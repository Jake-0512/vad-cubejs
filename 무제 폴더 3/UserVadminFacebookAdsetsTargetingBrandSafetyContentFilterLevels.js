cube(`UserVadminFacebookAdsetsTargetingBrandSafetyContentFilterLevels`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_adsets_targeting_brand_safety_content_filter_levels\``,
  
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
    adsetsTargetingBrandSafetyContentFilterLevels: {
      sql: `${CUBE}.\`adsets.targeting.brand_safety_content_filter_levels\``,
      type: `string`,
      title: `Adsets.targeting.brand Safety Content Filter Levels`
    }
  },
  
  dataSource: `default`
});
