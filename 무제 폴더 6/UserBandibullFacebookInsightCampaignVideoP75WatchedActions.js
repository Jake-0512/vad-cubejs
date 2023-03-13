cube(`UserBandibullFacebookInsightCampaignVideoP75WatchedActions`, {
  sql: `SELECT * FROM vad.user_bandibull_facebook_insight_campaign_video_p75_watched_actions`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [campaignVideoP75WatchedActionsActionType, campaignVideoP75WatchedActionsValue]
    }
  },
  
  dimensions: {
    campaignVideoP75WatchedActionsActionType: {
      sql: `${CUBE}.\`campaign.video_p75_watched_actions.action_type\``,
      type: `string`,
      title: `Campaign.video P75 Watched Actions.action Type`
    },
    
    campaignVideoP75WatchedActionsValue: {
      sql: `${CUBE}.\`campaign.video_p75_watched_actions.value\``,
      type: `string`,
      title: `Campaign.video P75 Watched Actions.value`
    }
  },
  
  dataSource: `default`
});
