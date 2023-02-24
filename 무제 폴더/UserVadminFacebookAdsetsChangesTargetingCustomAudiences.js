cube(`UserVadminFacebookAdsetsChangesTargetingCustomAudiences`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_adsets__changes_targeting_custom_audiences\``,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [adsetsChangesTargetingCustomAudiencesId, adsetsChangesTargetingCustomAudiencesName]
    }
  },
  
  dimensions: {
    _id: {
      sql: `_id`,
      type: `string`,
      primaryKey: true,
    },
    adsetsChangesTargetingCustomAudiencesId: {
      sql: `${CUBE}.\`adsets._changes.targeting.custom_audiences.id\``,
      type: `string`,
      title: `Adsets. Changes.targeting.custom Audiences.id`
    },
    
    adsetsChangesTargetingCustomAudiencesName: {
      sql: `${CUBE}.\`adsets._changes.targeting.custom_audiences.name\``,
      type: `string`,
      title: `Adsets. Changes.targeting.custom Audiences.name`
    }
  },
  
  dataSource: `default`
});
