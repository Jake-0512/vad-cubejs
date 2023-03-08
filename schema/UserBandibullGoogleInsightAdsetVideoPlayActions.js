cube(`UserBandibullGoogleInsightAdsetVideoPlayActions`, {
  sql: `SELECT * FROM vad.user_bandibull_google_insight_adset_video_play_actions`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [adsetVideoPlayActionsActionType, adsetVideoPlayActionsValue]
    }
  },
  
  dimensions: {
    adsetVideoPlayActionsActionType: {
      sql: `${CUBE}.\`adset.video_play_actions.action_type\``,
      type: `string`,
      title: `Adset.video Play Actions.action Type`
    },
    
    adsetVideoPlayActionsValue: {
      sql: `${CUBE}.\`adset.video_play_actions.value\``,
      type: `string`,
      title: `Adset.video Play Actions.value`
    }
  },
  
  dataSource: `default`
});
