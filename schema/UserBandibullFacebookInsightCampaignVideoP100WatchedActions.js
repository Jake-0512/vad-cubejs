cube(`UserBandibullFacebookInsightCampaignVideoP100WatchedActions`, {
  sql: `SELECT * FROM vad.user_bandibull_facebook_insight_campaign_video_p100_watched_actions`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [campaignVideoP100WatchedActionsActionType, campaignVideoP100WatchedActionsValue]
    }
  },
  
  dimensions: {
    campaignVideoP100WatchedActionsActionType: {
      sql: `${CUBE}.\`campaign.video_p100_watched_actions.action_type\``,
      type: `string`,
      title: `Campaign.video P100 Watched Actions.action Type`
    },
    
    campaignVideoP100WatchedActionsValue: {
      sql: `${CUBE}.\`campaign.video_p100_watched_actions.value\``,
      type: `string`,
      title: `Campaign.video P100 Watched Actions.value`
    }
  },
  
  dataSource: `default`
});
