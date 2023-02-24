cube(`UserVadminFacebookAdsetsDataTargetingExcludedCustomAudiences`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_adsets__data_targeting_excluded_custom_audiences\``,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [adsetsDataTargetingExcludedCustomAudiencesId, adsetsDataTargetingExcludedCustomAudiencesName]
    }
  },
  
  dimensions: {
    _id: {
      sql: `_id`,
      type: `string`,
      primaryKey: true,
    },
    adsetsDataTargetingExcludedCustomAudiencesId: {
      sql: `${CUBE}.\`adsets._data.targeting.excluded_custom_audiences.id\``,
      type: `string`,
      title: `Adsets. Data.targeting.excluded Custom Audiences.id`
    },
    
    adsetsDataTargetingExcludedCustomAudiencesName: {
      sql: `${CUBE}.\`adsets._data.targeting.excluded_custom_audiences.name\``,
      type: `string`,
      title: `Adsets. Data.targeting.excluded Custom Audiences.name`
    }
  },
  
  dataSource: `default`
});
