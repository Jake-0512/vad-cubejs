cube(`UserBandibullFacebookInsightCampaign2VideoPlayActions`, {
  sql: `SELECT * FROM vad.user_bandibull_facebook_insight_campaign2_video_play_actions`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [campaign2VideoPlayActionsActionType, campaign2VideoPlayActionsValue]
    }
  },
  
  dimensions: {
    campaign2VideoPlayActionsActionType: {
      sql: `${CUBE}.\`campaign2.video_play_actions.action_type\``,
      type: `string`,
      title: `Campaign2.video Play Actions.action Type`
    },
    
    campaign2VideoPlayActionsValue: {
      sql: `${CUBE}.\`campaign2.video_play_actions.value\``,
      type: `string`,
      title: `Campaign2.video Play Actions.value`
    }
  },
  
  dataSource: `default`
});
