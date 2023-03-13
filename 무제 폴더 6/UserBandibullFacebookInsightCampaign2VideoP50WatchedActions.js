cube(`UserBandibullFacebookInsightCampaign2VideoP50WatchedActions`, {
  sql: `SELECT * FROM vad.user_bandibull_facebook_insight_campaign2_video_p50_watched_actions`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [campaign2VideoP50WatchedActionsActionType, campaign2VideoP50WatchedActionsValue]
    }
  },
  
  dimensions: {
    campaign2VideoP50WatchedActionsActionType: {
      sql: `${CUBE}.\`campaign2.video_p50_watched_actions.action_type\``,
      type: `string`,
      title: `Campaign2.video P50 Watched Actions.action Type`
    },
    
    campaign2VideoP50WatchedActionsValue: {
      sql: `${CUBE}.\`campaign2.video_p50_watched_actions.value\``,
      type: `string`,
      title: `Campaign2.video P50 Watched Actions.value`
    }
  },
  
  dataSource: `default`
});
