cube(`UserVadminFacebookAdsetsTargetingCustomAudiences`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_adsets_targeting_custom_audiences\``,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [adsetsTargetingCustomAudiencesId, adsetsTargetingCustomAudiencesName]
    }
  },
  
  dimensions: {
    _id: {
      sql: `_id`,
      type: `string`,
      primaryKey: true,
    },
    adsetsTargetingCustomAudiencesId: {
      sql: `${CUBE}.\`adsets.targeting.custom_audiences.id\``,
      type: `string`,
      title: `Adsets.targeting.custom Audiences.id`
    },
    
    adsetsTargetingCustomAudiencesName: {
      sql: `${CUBE}.\`adsets.targeting.custom_audiences.name\``,
      type: `string`,
      title: `Adsets.targeting.custom Audiences.name`
    }
  },
  
  dataSource: `default`
});
