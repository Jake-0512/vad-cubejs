cube(`UserBandibullGoogleInsightAdActions`, {
  sql: `SELECT * FROM vad.user_bandibull_google_insight_ad_actions`,
  
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
    adActionsActionType: {
      sql: `${CUBE}.\`ad.actions.action_type\``,
      type: `string`,
      title: `Ad.actions.action Type`
    },
    
    adActionsValue: {
      sql: `${CUBE}.\`ad.actions.value\``,
      type: `string`,
      title: `Ad.actions.value`
    }
  },
  
  dataSource: `default`
});
