cube(`UserVadminFacebookAdsetsTargetingFlexibleSpecLifeEvents`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_adsets_targeting_flexible_spec_life_events\``,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [adsetsTargetingFlexibleSpecLifeEventsId, adsetsTargetingFlexibleSpecLifeEventsName]
    }
  },
  
  dimensions: {
    _id: {
      sql: `_id`,
      type: `string`,
      primaryKey: true,
    },
    adsetsTargetingFlexibleSpecLifeEventsId: {
      sql: `${CUBE}.\`adsets.targeting.flexible_spec.life_events.id\``,
      type: `string`,
      title: `Adsets.targeting.flexible Spec.life Events.id`
    },
    
    adsetsTargetingFlexibleSpecLifeEventsName: {
      sql: `${CUBE}.\`adsets.targeting.flexible_spec.life_events.name\``,
      type: `string`,
      title: `Adsets.targeting.flexible Spec.life Events.name`
    }
  },
  
  dataSource: `default`
});
