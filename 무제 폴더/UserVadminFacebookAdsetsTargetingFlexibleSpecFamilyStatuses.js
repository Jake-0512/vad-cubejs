cube(`UserVadminFacebookAdsetsTargetingFlexibleSpecFamilyStatuses`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_adsets_targeting_flexible_spec_family_statuses\``,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [adsetsTargetingFlexibleSpecFamilyStatusesId, adsetsTargetingFlexibleSpecFamilyStatusesName]
    }
  },
  
  dimensions: {
    _id: {
      sql: `_id`,
      type: `string`,
      primaryKey: true,
    },
    adsetsTargetingFlexibleSpecFamilyStatusesId: {
      sql: `${CUBE}.\`adsets.targeting.flexible_spec.family_statuses.id\``,
      type: `string`,
      title: `Adsets.targeting.flexible Spec.family Statuses.id`
    },
    
    adsetsTargetingFlexibleSpecFamilyStatusesName: {
      sql: `${CUBE}.\`adsets.targeting.flexible_spec.family_statuses.name\``,
      type: `string`,
      title: `Adsets.targeting.flexible Spec.family Statuses.name`
    }
  },
  
  dataSource: `default`
});
