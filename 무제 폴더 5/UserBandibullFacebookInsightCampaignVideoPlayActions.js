cube(`UserBandibullFacebookInsightCampaignVideoPlayActions`, {
  sql: `SELECT * FROM vad.user_bandibull_facebook_insight_campaign_video_play_actions`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [campaignVideoPlayActionsActionType, campaignVideoPlayActionsValue]
    },
    playTime: {
      type: `avg`,
      sql: campaignVideoPlayActionsValue,
    },
  },
  
  dimensions: {

    _id: {
      sql: `_id`,
      type: `string`,
      primaryKey: true,
    },
    
    campaignVideoPlayActionsActionType: {
      sql: `${CUBE}.\`campaign.video_play_actions.action_type\``,
      type: `string`,
      title: `Campaign.video Play Actions.action Type`
    },
    
    campaignVideoPlayActionsValue: {
      sql: `${CUBE}.\`campaign.video_play_actions.value\``,
      type: `string`,
      title: `Campaign.video Play Actions.value`
    }
  },
  
  dataSource: `default`
});
