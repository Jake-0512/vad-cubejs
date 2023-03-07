cube(`UserVadminFacebookAdsetsTargetingExcludedCustomAudiences`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_adsets_targeting_excluded_custom_audiences\``,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [adsetsTargetingExcludedCustomAudiencesId, adsetsTargetingExcludedCustomAudiencesName]
    }
  },
  
  dimensions: {
    _id: {
      sql: `_id`,
      type: `string`,
      primaryKey: true,
    },
    adsetsTargetingExcludedCustomAudiencesId: {
      sql: `${CUBE}.\`adsets.targeting.excluded_custom_audiences.id\``,
      type: `string`,
      title: `Adsets.targeting.excluded Custom Audiences.id`
    },
    
    adsetsTargetingExcludedCustomAudiencesName: {
      sql: `${CUBE}.\`adsets.targeting.excluded_custom_audiences.name\``,
      type: `string`,
      title: `Adsets.targeting.excluded Custom Audiences.name`
    }
  },
  
  dataSource: `default`
});
