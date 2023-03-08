cube(`UserBandibullGoogleInsightAdVideoP100WatchedActions`, {
  sql: `SELECT * FROM vad.user_bandibull_google_insight_ad_video_p100_watched_actions`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [adVideoP100WatchedActionsActionType, adVideoP100WatchedActionsValue]
    }
  },
  
  dimensions: {
    adVideoP100WatchedActionsActionType: {
      sql: `${CUBE}.\`ad.video_p100_watched_actions.action_type\``,
      type: `string`,
      title: `Ad.video P100 Watched Actions.action Type`
    },
    
    adVideoP100WatchedActionsValue: {
      sql: `${CUBE}.\`ad.video_p100_watched_actions.value\``,
      type: `string`,
      title: `Ad.video P100 Watched Actions.value`
    }
  },
  
  dataSource: `default`
});
