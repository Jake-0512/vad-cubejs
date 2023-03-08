cube(`UserBandibullGoogleInsightAdVideoP25WatchedActions`, {
  sql: `SELECT * FROM vad.user_bandibull_google_insight_ad_video_p25_watched_actions`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [adVideoP25WatchedActionsActionType, adVideoP25WatchedActionsValue]
    }
  },
  
  dimensions: {
    adVideoP25WatchedActionsActionType: {
      sql: `${CUBE}.\`ad.video_p25_watched_actions.action_type\``,
      type: `string`,
      title: `Ad.video P25 Watched Actions.action Type`
    },
    
    adVideoP25WatchedActionsValue: {
      sql: `${CUBE}.\`ad.video_p25_watched_actions.value\``,
      type: `string`,
      title: `Ad.video P25 Watched Actions.value`
    }
  },
  
  dataSource: `default`
});
