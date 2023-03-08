cube(`UserBandibullGoogleInsightAdsetVideoP75WatchedActions`, {
  sql: `SELECT * FROM vad.user_bandibull_google_insight_adset_video_p75_watched_actions`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [adsetVideoP75WatchedActionsActionType, adsetVideoP75WatchedActionsValue]
    }
  },
  
  dimensions: {
    adsetVideoP75WatchedActionsActionType: {
      sql: `${CUBE}.\`adset.video_p75_watched_actions.action_type\``,
      type: `string`,
      title: `Adset.video P75 Watched Actions.action Type`
    },
    
    adsetVideoP75WatchedActionsValue: {
      sql: `${CUBE}.\`adset.video_p75_watched_actions.value\``,
      type: `string`,
      title: `Adset.video P75 Watched Actions.value`
    }
  },
  
  dataSource: `default`
});
