cube(`UserBandibullGoogleInsightCampaign2`, {
  sql: `SELECT * FROM vad.user_bandibull_google_insight_campaign2`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [campaign2AccountId, campaign2CampaignId, campaign2DateStart, campaign2DateStop]
    }
  },
  
  dimensions: {
    campaign2AccountId: {
      sql: `${CUBE}.\`campaign2.account_id\``,
      type: `string`,
      title: `Campaign2.account Id`
    },
    
    campaign2CampaignId: {
      sql: `${CUBE}.\`campaign2.campaign_id\``,
      type: `string`,
      title: `Campaign2.campaign Id`
    },
    
    campaign2Clicks: {
      sql: `${CUBE}.\`campaign2.clicks\``,
      type: `string`,
      title: `Campaign2.clicks`
    },
    
    campaign2Cpc: {
      sql: `${CUBE}.\`campaign2.cpc\``,
      type: `string`,
      title: `Campaign2.cpc`
    },
    
    campaign2Cpm: {
      sql: `${CUBE}.\`campaign2.cpm\``,
      type: `string`,
      title: `Campaign2.cpm`
    },
    
    campaign2Ctr: {
      sql: `${CUBE}.\`campaign2.ctr\``,
      type: `string`,
      title: `Campaign2.ctr`
    },
    
    campaign2DateStart: {
      sql: `${CUBE}.\`campaign2.date_start\``,
      type: `string`,
      title: `Campaign2.date Start`
    },
    
    campaign2DateStop: {
      sql: `${CUBE}.\`campaign2.date_stop\``,
      type: `string`,
      title: `Campaign2.date Stop`
    },
    
    campaign2Frequency: {
      sql: `${CUBE}.\`campaign2.frequency\``,
      type: `string`,
      title: `Campaign2.frequency`
    },
    
    campaign2Impressions: {
      sql: `${CUBE}.\`campaign2.impressions\``,
      type: `string`,
      title: `Campaign2.impressions`
    },
    
    campaign2Objective: {
      sql: `${CUBE}.\`campaign2.objective\``,
      type: `string`,
      title: `Campaign2.objective`
    },
    
    campaign2Reach: {
      sql: `${CUBE}.\`campaign2.reach\``,
      type: `string`,
      title: `Campaign2.reach`
    },
    
    campaign2Spend: {
      sql: `${CUBE}.\`campaign2.spend\``,
      type: `string`,
      title: `Campaign2.spend`
    }
  },
  
  dataSource: `default`
});
