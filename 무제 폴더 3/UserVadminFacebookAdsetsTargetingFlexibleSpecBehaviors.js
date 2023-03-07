cube(`UserVadminFacebookAdsetsTargetingFlexibleSpecBehaviors`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_adsets_targeting_flexible_spec_behaviors\``,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [adsetsTargetingFlexibleSpecBehaviorsId, adsetsTargetingFlexibleSpecBehaviorsName]
    }
  },
  
  dimensions: {
    _id: {
      sql: `_id`,
      type: `string`,
      primaryKey: true,
    },
    adsetsTargetingFlexibleSpecBehaviorsId: {
      sql: `${CUBE}.\`adsets.targeting.flexible_spec.behaviors.id\``,
      type: `string`,
      title: `Adsets.targeting.flexible Spec.behaviors.id`
    },
    
    adsetsTargetingFlexibleSpecBehaviorsName: {
      sql: `${CUBE}.\`adsets.targeting.flexible_spec.behaviors.name\``,
      type: `string`,
      title: `Adsets.targeting.flexible Spec.behaviors.name`
    }
  },
  
  dataSource: `default`
});
