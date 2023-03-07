cube(`UserVadminFacebookAdsetsTargetingAudienceNetworkPositions`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_adsets_targeting_audience_network_positions\``,
  
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
    adsetsTargetingAudienceNetworkPositions: {
      sql: `${CUBE}.\`adsets.targeting.audience_network_positions\``,
      type: `string`,
      title: `Adsets.targeting.audience Network Positions`
    }
  },
  
  dataSource: `default`
});
