cube(`UserBandibullFacebookInsightAccountVideoP75WatchedActions`, {
  sql: `SELECT * FROM vad.user_bandibull_facebook_insight_account_video_p75_watched_actions`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [accountVideoP75WatchedActionsActionType, accountVideoP75WatchedActionsValue]
    }
  },
  
  dimensions: {
    accountVideoP75WatchedActionsActionType: {
      sql: `${CUBE}.\`account.video_p75_watched_actions.action_type\``,
      type: `string`,
      title: `Account.video P75 Watched Actions.action Type`
    },
    
    accountVideoP75WatchedActionsValue: {
      sql: `${CUBE}.\`account.video_p75_watched_actions.value\``,
      type: `string`,
      title: `Account.video P75 Watched Actions.value`
    }
  },
  
  dataSource: `default`
});
