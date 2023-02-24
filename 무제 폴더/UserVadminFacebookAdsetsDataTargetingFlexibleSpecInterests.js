cube(`UserVadminFacebookAdsetsDataTargetingFlexibleSpecInterests`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_adsets__data_targeting_flexible_spec_interests\``,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [adsetsDataTargetingFlexibleSpecInterestsId, adsetsDataTargetingFlexibleSpecInterestsName]
    }
  },
  
  dimensions: {
    _id: {
      sql: `_id`,
      type: `string`,
      primaryKey: true,
    },
    adsetsDataTargetingFlexibleSpecInterestsId: {
      sql: `${CUBE}.\`adsets._data.targeting.flexible_spec.interests.id\``,
      type: `string`,
      title: `Adsets. Data.targeting.flexible Spec.interests.id`
    },
    
    adsetsDataTargetingFlexibleSpecInterestsName: {
      sql: `${CUBE}.\`adsets._data.targeting.flexible_spec.interests.name\``,
      type: `string`,
      title: `Adsets. Data.targeting.flexible Spec.interests.name`
    }
  },
  
  dataSource: `default`
});
