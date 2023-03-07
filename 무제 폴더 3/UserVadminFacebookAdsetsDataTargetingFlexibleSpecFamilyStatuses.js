cube(`UserVadminFacebookAdsetsDataTargetingFlexibleSpecFamilyStatuses`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_adsets__data_targeting_flexible_spec_family_statuses\``,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [adsetsDataTargetingFlexibleSpecFamilyStatusesId, adsetsDataTargetingFlexibleSpecFamilyStatusesName]
    }
  },
  
  dimensions: {
    _id: {
      sql: `_id`,
      type: `string`,
      primaryKey: true,
    },
    adsetsDataTargetingFlexibleSpecFamilyStatusesId: {
      sql: `${CUBE}.\`adsets._data.targeting.flexible_spec.family_statuses.id\``,
      type: `string`,
      title: `Adsets. Data.targeting.flexible Spec.family Statuses.id`
    },
    
    adsetsDataTargetingFlexibleSpecFamilyStatusesName: {
      sql: `${CUBE}.\`adsets._data.targeting.flexible_spec.family_statuses.name\``,
      type: `string`,
      title: `Adsets. Data.targeting.flexible Spec.family Statuses.name`
    }
  },
  
  dataSource: `default`
});
