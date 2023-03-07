cube(`UserVadminFacebookAdsetsChangesTargetingAudienceNetworkPositions`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_adsets__changes_targeting_audience_network_positions\``,
  
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
    adsetsChangesTargetingAudienceNetworkPositions: {
      sql: `${CUBE}.\`adsets._changes.targeting.audience_network_positions\``,
      type: `string`,
      title: `Adsets. Changes.targeting.audience Network Positions`
    }
  },
  
  dataSource: `default`
});
