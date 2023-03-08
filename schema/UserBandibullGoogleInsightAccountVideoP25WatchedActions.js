cube(`UserBandibullGoogleInsightAccountVideoP25WatchedActions`, {
  sql: `SELECT * FROM vad.user_bandibull_google_insight_account_video_p25_watched_actions`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [accountVideoP25WatchedActionsActionType, accountVideoP25WatchedActionsValue]
    }
  },
  
  dimensions: {
    accountVideoP25WatchedActionsActionType: {
      sql: `${CUBE}.\`account.video_p25_watched_actions.action_type\``,
      type: `string`,
      title: `Account.video P25 Watched Actions.action Type`
    },
    
    accountVideoP25WatchedActionsValue: {
      sql: `${CUBE}.\`account.video_p25_watched_actions.value\``,
      type: `string`,
      title: `Account.video P25 Watched Actions.value`
    }
  },
  
  dataSource: `default`
});
