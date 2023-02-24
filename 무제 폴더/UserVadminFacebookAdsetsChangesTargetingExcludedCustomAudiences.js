cube(`UserVadminFacebookAdsetsChangesTargetingExcludedCustomAudiences`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_adsets__changes_targeting_excluded_custom_audiences\``,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [adsetsChangesTargetingExcludedCustomAudiencesId, adsetsChangesTargetingExcludedCustomAudiencesName]
    }
  },
  
  dimensions: {
    _id: {
      sql: `_id`,
      type: `string`,
      primaryKey: true,
    },
    adsetsChangesTargetingExcludedCustomAudiencesId: {
      sql: `${CUBE}.\`adsets._changes.targeting.excluded_custom_audiences.id\``,
      type: `string`,
      title: `Adsets. Changes.targeting.excluded Custom Audiences.id`
    },
    
    adsetsChangesTargetingExcludedCustomAudiencesName: {
      sql: `${CUBE}.\`adsets._changes.targeting.excluded_custom_audiences.name\``,
      type: `string`,
      title: `Adsets. Changes.targeting.excluded Custom Audiences.name`
    }
  },
  
  dataSource: `default`
});
