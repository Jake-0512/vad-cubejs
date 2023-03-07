cube(`UserVadminFacebookAdsetsChangesTargetingFlexibleSpecLifeEvents`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_adsets__changes_targeting_flexible_spec_life_events\``,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [adsetsChangesTargetingFlexibleSpecLifeEventsId, adsetsChangesTargetingFlexibleSpecLifeEventsName]
    }
  },
  
  dimensions: {
    _id: {
      sql: `_id`,
      type: `string`,
      primaryKey: true,
    },
    adsetsChangesTargetingFlexibleSpecLifeEventsId: {
      sql: `${CUBE}.\`adsets._changes.targeting.flexible_spec.life_events.id\``,
      type: `string`,
      title: `Adsets. Changes.targeting.flexible Spec.life Events.id`
    },
    
    adsetsChangesTargetingFlexibleSpecLifeEventsName: {
      sql: `${CUBE}.\`adsets._changes.targeting.flexible_spec.life_events.name\``,
      type: `string`,
      title: `Adsets. Changes.targeting.flexible Spec.life Events.name`
    }
  },
  
  dataSource: `default`
});
