cube(`UserVadminFacebookAdsetsChangesTargetingFlexibleSpecBehaviors`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_adsets__changes_targeting_flexible_spec_behaviors\``,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [adsetsChangesTargetingFlexibleSpecBehaviorsId, adsetsChangesTargetingFlexibleSpecBehaviorsName]
    }
  },
  
  dimensions: {
    _id: {
      sql: `_id`,
      type: `string`,
      primaryKey: true,
    },
    adsetsChangesTargetingFlexibleSpecBehaviorsId: {
      sql: `${CUBE}.\`adsets._changes.targeting.flexible_spec.behaviors.id\``,
      type: `string`,
      title: `Adsets. Changes.targeting.flexible Spec.behaviors.id`
    },
    
    adsetsChangesTargetingFlexibleSpecBehaviorsName: {
      sql: `${CUBE}.\`adsets._changes.targeting.flexible_spec.behaviors.name\``,
      type: `string`,
      title: `Adsets. Changes.targeting.flexible Spec.behaviors.name`
    }
  },
  
  dataSource: `default`
});
