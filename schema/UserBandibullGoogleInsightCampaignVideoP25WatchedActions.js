cube(`UserBandibullGoogleInsightCampaignVideoP25WatchedActions`, {
  sql: `SELECT * FROM vad.user_bandibull_google_insight_campaign_video_p25_watched_actions`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [campaignVideoP25WatchedActionsActionType, campaignVideoP25WatchedActionsValue]
    }
  },
  
  dimensions: {
    campaignVideoP25WatchedActionsActionType: {
      sql: `${CUBE}.\`campaign.video_p25_watched_actions.action_type\``,
      type: `string`,
      title: `Campaign.video P25 Watched Actions.action Type`
    },
    
    campaignVideoP25WatchedActionsValue: {
      sql: `${CUBE}.\`campaign.video_p25_watched_actions.value\``,
      type: `string`,
      title: `Campaign.video P25 Watched Actions.value`
    }
  },
  
  dataSource: `default`
});
