cube(`UserBandibullFacebookInsightAdsetActions`, {
  sql: `SELECT * FROM vad.user_bandibull_facebook_insight_adset_actions`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: []
    }
  },
  
  dimensions: {
    adsetActionsActionType: {
      sql: `${CUBE}.\`adset.actions.action_type\``,
      type: `string`,
      title: `Adset.actions.action Type`
    },
    
    adsetActionsValue: {
      sql: `${CUBE}.\`adset.actions.value\``,
      type: `string`,
      title: `Adset.actions.value`
    }
  },
  
  dataSource: `default`
});
