cube(`UserBandibullFacebookInsightAdVideoP75WatchedActions`, {
  sql: `SELECT * FROM vad.user_bandibull_facebook_insight_ad_video_p75_watched_actions`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [adVideoP75WatchedActionsActionType, adVideoP75WatchedActionsValue]
    }
  },
  
  dimensions: {
    adVideoP75WatchedActionsActionType: {
      sql: `${CUBE}.\`ad.video_p75_watched_actions.action_type\``,
      type: `string`,
      title: `Ad.video P75 Watched Actions.action Type`
    },
    
    adVideoP75WatchedActionsValue: {
      sql: `${CUBE}.\`ad.video_p75_watched_actions.value\``,
      type: `string`,
      title: `Ad.video P75 Watched Actions.value`
    }
  },
  
  dataSource: `default`
});
