cube(`UserVadminFacebookAdsetsChangesTargetingFlexibleSpecFamilyStatuses`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_adsets__changes_targeting_flexible_spec_family_statuses\``,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [adsetsChangesTargetingFlexibleSpecFamilyStatusesId, adsetsChangesTargetingFlexibleSpecFamilyStatusesName]
    }
  },
  
  dimensions: {
    _id: {
      sql: `_id`,
      type: `string`,
      primaryKey: true,
    },
    adsetsChangesTargetingFlexibleSpecFamilyStatusesId: {
      sql: `${CUBE}.\`adsets._changes.targeting.flexible_spec.family_statuses.id\``,
      type: `string`,
      title: `Adsets. Changes.targeting.flexible Spec.family Statuses.id`
    },
    
    adsetsChangesTargetingFlexibleSpecFamilyStatusesName: {
      sql: `${CUBE}.\`adsets._changes.targeting.flexible_spec.family_statuses.name\``,
      type: `string`,
      title: `Adsets. Changes.targeting.flexible Spec.family Statuses.name`
    }
  },
  
  dataSource: `default`
});
