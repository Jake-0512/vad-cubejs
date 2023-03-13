cube(`UserBandibullFacebookInsightAccountVideoPlayActions`, {
  sql: `SELECT * FROM vad.user_bandibull_facebook_insight_account_video_play_actions`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [accountVideoPlayActionsActionType, accountVideoPlayActionsValue]
    }
  },
  
  dimensions: {
    accountVideoPlayActionsActionType: {
      sql: `${CUBE}.\`account.video_play_actions.action_type\``,
      type: `string`,
      title: `Account.video Play Actions.action Type`
    },
    
    accountVideoPlayActionsValue: {
      sql: `${CUBE}.\`account.video_play_actions.value\``,
      type: `string`,
      title: `Account.video Play Actions.value`
    }
  },
  
  dataSource: `default`
});
