cube(`UserVadminFacebookAdsetsDataTargetingFlexibleSpecBehaviors`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_adsets__data_targeting_flexible_spec_behaviors\``,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [adsetsDataTargetingFlexibleSpecBehaviorsId, adsetsDataTargetingFlexibleSpecBehaviorsName]
    }
  },
  
  dimensions: {
    _id: {
      sql: `_id`,
      type: `string`,
      primaryKey: true,
    },
    adsetsDataTargetingFlexibleSpecBehaviorsId: {
      sql: `${CUBE}.\`adsets._data.targeting.flexible_spec.behaviors.id\``,
      type: `string`,
      title: `Adsets. Data.targeting.flexible Spec.behaviors.id`
    },
    
    adsetsDataTargetingFlexibleSpecBehaviorsName: {
      sql: `${CUBE}.\`adsets._data.targeting.flexible_spec.behaviors.name\``,
      type: `string`,
      title: `Adsets. Data.targeting.flexible Spec.behaviors.name`
    }
  },
  
  dataSource: `default`
});
