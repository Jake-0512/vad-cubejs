cube(`UserBandibullGoogleInsightAdVideoPlayActions`, {
  sql: `SELECT * FROM vad.user_bandibull_google_insight_ad_video_play_actions`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [adVideoPlayActionsActionType, adVideoPlayActionsValue]
    }
  },
  
  dimensions: {
    adVideoPlayActionsActionType: {
      sql: `${CUBE}.\`ad.video_play_actions.action_type\``,
      type: `string`,
      title: `Ad.video Play Actions.action Type`
    },
    
    adVideoPlayActionsValue: {
      sql: `${CUBE}.\`ad.video_play_actions.value\``,
      type: `string`,
      title: `Ad.video Play Actions.value`
    }
  },
  
  dataSource: `default`
});
