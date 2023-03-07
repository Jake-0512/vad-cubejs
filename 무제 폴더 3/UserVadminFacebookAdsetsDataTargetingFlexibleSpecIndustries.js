cube(`UserVadminFacebookAdsetsDataTargetingFlexibleSpecIndustries`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_adsets__data_targeting_flexible_spec_industries\``,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [adsetsDataTargetingFlexibleSpecIndustriesId, adsetsDataTargetingFlexibleSpecIndustriesName]
    }
  },
  
  dimensions: {
    _id: {
      sql: `_id`,
      type: `string`,
      primaryKey: true,
    },
    adsetsDataTargetingFlexibleSpecIndustriesId: {
      sql: `${CUBE}.\`adsets._data.targeting.flexible_spec.industries.id\``,
      type: `string`,
      title: `Adsets. Data.targeting.flexible Spec.industries.id`
    },
    
    adsetsDataTargetingFlexibleSpecIndustriesName: {
      sql: `${CUBE}.\`adsets._data.targeting.flexible_spec.industries.name\``,
      type: `string`,
      title: `Adsets. Data.targeting.flexible Spec.industries.name`
    }
  },
  
  dataSource: `default`
});
