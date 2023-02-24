cube(`UserVadminFacebookAdsetsChangesTargetingFlexibleSpecInterests`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_adsets__changes_targeting_flexible_spec_interests\``,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [adsetsChangesTargetingFlexibleSpecInterestsId, adsetsChangesTargetingFlexibleSpecInterestsName]
    }
  },
  
  dimensions: {
    _id: {
      sql: `_id`,
      type: `string`,
      primaryKey: true,
    },
    adsetsChangesTargetingFlexibleSpecInterestsId: {
      sql: `${CUBE}.\`adsets._changes.targeting.flexible_spec.interests.id\``,
      type: `string`,
      title: `Adsets. Changes.targeting.flexible Spec.interests.id`
    },
    
    adsetsChangesTargetingFlexibleSpecInterestsName: {
      sql: `${CUBE}.\`adsets._changes.targeting.flexible_spec.interests.name\``,
      type: `string`,
      title: `Adsets. Changes.targeting.flexible Spec.interests.name`
    }
  },
  
  dataSource: `default`
});
