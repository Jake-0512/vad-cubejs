cube(`UserVadminFacebookAdsetsTargetingFlexibleSpecInterests`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_adsets_targeting_flexible_spec_interests\``,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [adsetsTargetingFlexibleSpecInterestsId, adsetsTargetingFlexibleSpecInterestsName]
    }
  },
  
  dimensions: {
    _id: {
      sql: `_id`,
      type: `string`,
      primaryKey: true,
    },
    adsetsTargetingFlexibleSpecInterestsId: {
      sql: `${CUBE}.\`adsets.targeting.flexible_spec.interests.id\``,
      type: `string`,
      title: `Adsets.targeting.flexible Spec.interests.id`
    },
    
    adsetsTargetingFlexibleSpecInterestsName: {
      sql: `${CUBE}.\`adsets.targeting.flexible_spec.interests.name\``,
      type: `string`,
      title: `Adsets.targeting.flexible Spec.interests.name`
    }
  },
  
  dataSource: `default`
});
