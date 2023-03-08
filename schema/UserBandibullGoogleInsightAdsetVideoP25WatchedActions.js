cube(`UserBandibullGoogleInsightAdsetVideoP25WatchedActions`, {
  sql: `SELECT * FROM vad.user_bandibull_google_insight_adset_video_p25_watched_actions`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [adsetVideoP25WatchedActionsActionType, adsetVideoP25WatchedActionsValue]
    }
  },
  
  dimensions: {
    adsetVideoP25WatchedActionsActionType: {
      sql: `${CUBE}.\`adset.video_p25_watched_actions.action_type\``,
      type: `string`,
      title: `Adset.video P25 Watched Actions.action Type`
    },
    
    adsetVideoP25WatchedActionsValue: {
      sql: `${CUBE}.\`adset.video_p25_watched_actions.value\``,
      type: `string`,
      title: `Adset.video P25 Watched Actions.value`
    }
  },
  
  dataSource: `default`
});
