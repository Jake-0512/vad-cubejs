cube(`UserVadminFacebookAdsetsDataTargetingFlexibleSpecLifeEvents`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_adsets__data_targeting_flexible_spec_life_events\``,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [adsetsDataTargetingFlexibleSpecLifeEventsId, adsetsDataTargetingFlexibleSpecLifeEventsName]
    }
  },
  
  dimensions: {
    _id: {
      sql: `_id`,
      type: `string`,
      primaryKey: true,
    },
    adsetsDataTargetingFlexibleSpecLifeEventsId: {
      sql: `${CUBE}.\`adsets._data.targeting.flexible_spec.life_events.id\``,
      type: `string`,
      title: `Adsets. Data.targeting.flexible Spec.life Events.id`
    },
    
    adsetsDataTargetingFlexibleSpecLifeEventsName: {
      sql: `${CUBE}.\`adsets._data.targeting.flexible_spec.life_events.name\``,
      type: `string`,
      title: `Adsets. Data.targeting.flexible Spec.life Events.name`
    }
  },
  
  dataSource: `default`
});
