cube(`UserVadminGoogleCampaignMetricsInteractionEventTypes`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_google_campaign_metrics_interaction_event_types\``,
  
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
    _id: {
      sql: `_id`,
      type: `string`,
      primaryKey: true,
    },
    
  },
  
  dataSource: `default`
});
