cube(`UserBandibullFacebookInsightCampaignVideoP50WatchedActions`, {
  sql: `SELECT * FROM vad.user_bandibull_facebook_insight_campaign_video_p50_watched_actions`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [campaignVideoP50WatchedActionsActionType, campaignVideoP50WatchedActionsValue]
    }
  },
  
  dimensions: {
    campaignVideoP50WatchedActionsActionType: {
      sql: `${CUBE}.\`campaign.video_p50_watched_actions.action_type\``,
      type: `string`,
      title: `Campaign.video P50 Watched Actions.action Type`
    },
    
    campaignVideoP50WatchedActionsValue: {
      sql: `${CUBE}.\`campaign.video_p50_watched_actions.value\``,
      type: `string`,
      title: `Campaign.video P50 Watched Actions.value`
    }
  },
  
  dataSource: `default`
});
