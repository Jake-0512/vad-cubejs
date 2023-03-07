cube(`UserVadminFacebookAdsetsTargetingFlexibleSpecIndustries`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_adsets_targeting_flexible_spec_industries\``,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [adsetsTargetingFlexibleSpecIndustriesId, adsetsTargetingFlexibleSpecIndustriesName]
    }
  },
  
  dimensions: {
    _id: {
      sql: `_id`,
      type: `string`,
      primaryKey: true,
    },
    adsetsTargetingFlexibleSpecIndustriesId: {
      sql: `${CUBE}.\`adsets.targeting.flexible_spec.industries.id\``,
      type: `string`,
      title: `Adsets.targeting.flexible Spec.industries.id`
    },
    
    adsetsTargetingFlexibleSpecIndustriesName: {
      sql: `${CUBE}.\`adsets.targeting.flexible_spec.industries.name\``,
      type: `string`,
      title: `Adsets.targeting.flexible Spec.industries.name`
    }
  },
  
  dataSource: `default`
});
