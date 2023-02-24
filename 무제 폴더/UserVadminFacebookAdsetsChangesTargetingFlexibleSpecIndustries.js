cube(`UserVadminFacebookAdsetsChangesTargetingFlexibleSpecIndustries`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_adsets__changes_targeting_flexible_spec_industries\``,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [adsetsChangesTargetingFlexibleSpecIndustriesId, adsetsChangesTargetingFlexibleSpecIndustriesName]
    }
  },
  
  dimensions: {
    _id: {
      sql: `_id`,
      type: `string`,
      primaryKey: true,
    },
    adsetsChangesTargetingFlexibleSpecIndustriesId: {
      sql: `${CUBE}.\`adsets._changes.targeting.flexible_spec.industries.id\``,
      type: `string`,
      title: `Adsets. Changes.targeting.flexible Spec.industries.id`
    },
    
    adsetsChangesTargetingFlexibleSpecIndustriesName: {
      sql: `${CUBE}.\`adsets._changes.targeting.flexible_spec.industries.name\``,
      type: `string`,
      title: `Adsets. Changes.targeting.flexible Spec.industries.name`
    }
  },
  
  dataSource: `default`
});
