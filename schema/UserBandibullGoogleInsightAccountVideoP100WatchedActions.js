cube(`UserBandibullGoogleInsightAccountVideoP100WatchedActions`, {
  sql: `SELECT * FROM vad.user_bandibull_google_insight_account_video_p100_watched_actions`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [accountVideoP100WatchedActionsActionType, accountVideoP100WatchedActionsValue]
    }
  },
  
  dimensions: {
    accountVideoP100WatchedActionsActionType: {
      sql: `${CUBE}.\`account.video_p100_watched_actions.action_type\``,
      type: `string`,
      title: `Account.video P100 Watched Actions.action Type`
    },
    
    accountVideoP100WatchedActionsValue: {
      sql: `${CUBE}.\`account.video_p100_watched_actions.value\``,
      type: `string`,
      title: `Account.video P100 Watched Actions.value`
    }
  },
  
  dataSource: `default`
});
