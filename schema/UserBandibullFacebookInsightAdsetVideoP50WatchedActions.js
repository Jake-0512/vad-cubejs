cube(`UserBandibullFacebookInsightAdsetVideoP50WatchedActions`, {
  sql: `SELECT * FROM vad.user_bandibull_facebook_insight_adset_video_p50_watched_actions`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [adsetVideoP50WatchedActionsActionType, adsetVideoP50WatchedActionsValue]
    }
  },
  
  dimensions: {
    adsetVideoP50WatchedActionsActionType: {
      sql: `${CUBE}.\`adset.video_p50_watched_actions.action_type\``,
      type: `string`,
      title: `Adset.video P50 Watched Actions.action Type`
    },
    
    adsetVideoP50WatchedActionsValue: {
      sql: `${CUBE}.\`adset.video_p50_watched_actions.value\``,
      type: `string`,
      title: `Adset.video P50 Watched Actions.value`
    }
  },
  
  dataSource: `default`
});
