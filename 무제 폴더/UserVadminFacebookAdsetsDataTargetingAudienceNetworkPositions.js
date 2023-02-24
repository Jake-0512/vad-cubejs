cube(`UserVadminFacebookAdsetsDataTargetingAudienceNetworkPositions`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_adsets__data_targeting_audience_network_positions\``,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: []
    }
  },
  
  dimensions: {
    _id: {
      sql: `_id`,
      type: `string`,
      primaryKey: true,
    },
    adsetsDataTargetingAudienceNetworkPositions: {
      sql: `${CUBE}.\`adsets._data.targeting.audience_network_positions\``,
      type: `string`,
      title: `Adsets. Data.targeting.audience Network Positions`
    }
  },
  
  dataSource: `default`
});
