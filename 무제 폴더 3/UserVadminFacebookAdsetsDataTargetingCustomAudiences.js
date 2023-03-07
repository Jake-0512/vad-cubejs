cube(`UserVadminFacebookAdsetsDataTargetingCustomAudiences`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_adsets__data_targeting_custom_audiences\``,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [adsetsDataTargetingCustomAudiencesId, adsetsDataTargetingCustomAudiencesName]
    }
  },
  
  dimensions: {
    _id: {
      sql: `_id`,
      type: `string`,
      primaryKey: true,
    },
    adsetsDataTargetingCustomAudiencesId: {
      sql: `${CUBE}.\`adsets._data.targeting.custom_audiences.id\``,
      type: `string`,
      title: `Adsets. Data.targeting.custom Audiences.id`
    },
    
    adsetsDataTargetingCustomAudiencesName: {
      sql: `${CUBE}.\`adsets._data.targeting.custom_audiences.name\``,
      type: `string`,
      title: `Adsets. Data.targeting.custom Audiences.name`
    }
  },
  
  dataSource: `default`
});
