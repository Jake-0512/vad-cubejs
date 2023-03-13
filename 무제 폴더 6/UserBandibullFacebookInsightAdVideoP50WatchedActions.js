cube(`UserBandibullFacebookInsightAdVideoP50WatchedActions`, {
  sql: `SELECT * FROM vad.user_bandibull_facebook_insight_ad_video_p50_watched_actions`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [adVideoP50WatchedActionsActionType, adVideoP50WatchedActionsValue]
    }
  },
  
  dimensions: {
    adVideoP50WatchedActionsActionType: {
      sql: `${CUBE}.\`ad.video_p50_watched_actions.action_type\``,
      type: `string`,
      title: `Ad.video P50 Watched Actions.action Type`
    },
    
    adVideoP50WatchedActionsValue: {
      sql: `${CUBE}.\`ad.video_p50_watched_actions.value\``,
      type: `string`,
      title: `Ad.video P50 Watched Actions.value`
    }
  },
  
  dataSource: `default`
});
