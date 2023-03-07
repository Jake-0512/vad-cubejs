cube(`UserBandibullFacebookInsightAccountVideoP50WatchedActions`, {
  sql: `SELECT * FROM vad.user_bandibull_facebook_insight_account_video_p50_watched_actions`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [accountVideoP50WatchedActionsActionType, accountVideoP50WatchedActionsValue]
    }
  },
  
  dimensions: {
    accountVideoP50WatchedActionsActionType: {
      sql: `${CUBE}.\`account.video_p50_watched_actions.action_type\``,
      type: `string`,
      title: `Account.video P50 Watched Actions.action Type`
    },
    
    accountVideoP50WatchedActionsValue: {
      sql: `${CUBE}.\`account.video_p50_watched_actions.value\``,
      type: `string`,
      title: `Account.video P50 Watched Actions.value`
    }
  },
  
  dataSource: `default`
});
