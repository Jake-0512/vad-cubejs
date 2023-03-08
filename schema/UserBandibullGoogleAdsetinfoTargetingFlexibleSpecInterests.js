cube(`UserBandibullGoogleAdsetinfoTargetingFlexibleSpecInterests`, {
  sql: `SELECT * FROM vad.\`user_bandibull_google_adsetInfo_targeting_flexible_spec_interests\``,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [adsetinfoTargetingFlexibleSpecInterestsId, adsetinfoTargetingFlexibleSpecInterestsName]
    }
  },
  
  dimensions: {
    adsetinfoTargetingFlexibleSpecInterestsId: {
      sql: `${CUBE}.\`adsetInfo.targeting.flexible_spec.interests.id\``,
      type: `string`,
      title: `Adsetinfo.targeting.flexible Spec.interests.id`
    },
    
    adsetinfoTargetingFlexibleSpecInterestsName: {
      sql: `${CUBE}.\`adsetInfo.targeting.flexible_spec.interests.name\``,
      type: `string`,
      title: `Adsetinfo.targeting.flexible Spec.interests.name`
    }
  },
  
  dataSource: `default`
});
