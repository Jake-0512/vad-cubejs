cube(`UserBandibullFacebookInsightCampaign`, {
  sql: `SELECT * FROM vad.user_bandibull_facebook_insight_campaign`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [campaignAccountId, campaignCampaignId, campaignDateStart, campaignDateStop]
    },
    Reach: {
      type: `sum`,
      sql: campaignReach,
      title: `도달`,
    },
    Impressions: {
      type: `sum`,
      sql: campaignImpressions,
      title: `Impressions`,
    },
    Spend: {
      type: `sum`,
      sql: campaignSpend,
      description: `지출금액`,
    },
    Cpc: {
      type: `sum`,
      sql: campaignCpc,
    },
    Clicks: {
      type: `sum`,
      sql: campaignClicks,
    },
    // clicks: {
    //   type: `sum`,
    //   sql: `${CUBE}.\`campaign.clicks\``,
    // },
    
  },
  
  dimensions: {
    _id: {
      sql: `_id`,
      type: `string`,
      primaryKey: true,
    },
    campaignAccountId: {
      sql: `${CUBE}.\`campaign.account_id\``,
      type: `string`,
      title: `Campaign.account Id`
    },
    
    campaignCampaignId: {
      sql: `${CUBE}.\`campaign.campaign_id\``,
      type: `string`,
      title: `Campaign.campaign Id`
    },
    
    campaignClicks: {
      sql: `${CUBE}.\`campaign.clicks\``,
      type: `string`,
      title: `Campaign.clicks`
    },
    
    campaignCpc: {
      sql: `${CUBE}.\`campaign.cpc\``,
      type: `string`,
      title: `Campaign.cpc`
    },
    
    campaignCpm: {
      sql: `${CUBE}.\`campaign.cpm\``,
      type: `string`,
      title: `Campaign.cpm`
    },
    
    campaignCtr: {
      sql: `${CUBE}.\`campaign.ctr\``,
      type: `string`,
      title: `Campaign.ctr`
    },
    
    campaignDateStart: {
      sql: `${CUBE}.\`campaign.date_start\``,
      type: `string`,
      title: `Campaign.date Start`
    },
    
    campaignDateStop: {
      sql: `${CUBE}.\`campaign.date_stop\``,
      type: `string`,
      title: `Campaign.date Stop`
    },
    
    campaignFrequency: {
      sql: `${CUBE}.\`campaign.frequency\``,
      type: `string`,
      title: `Campaign.frequency`
    },
    
    campaignImpressions: {
      sql: `${CUBE}.\`campaign.impressions\``,
      type: `string`,
      title: `Campaign.impressions`
    },
    
    campaignObjective: {
      sql: `${CUBE}.\`campaign.objective\``,
      type: `string`,
      title: `Campaign.objective`
    },
    
    campaignReach: {
      sql: `${CUBE}.\`campaign.reach\``,
      type: `string`,
      title: `Campaign.reach`
    },
    
    campaignSpend: {
      sql: `${CUBE}.\`campaign.spend\``,
      type: `string`,
      title: `Campaign.spend`
    }
  },
  
  dataSource: `default`
});
