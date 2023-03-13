cube(`UserBandibullFacebookCampaigninfo`, {
  sql: `SELECT * FROM vad.\`user_bandibull_facebook_campaignInfo\``,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    UserBandibullFacebookInsightCampaign: {
      sql: `${CUBE.campaigninfoId} = ${UserBandibullFacebookInsightCampaign.campaignCampaignId}`,
      relationship: `hasMany`
    }
  },
  
  measures: {
    
  },
  
  dimensions: {
    _id: {
      sql: `_id`,
      type: `string`,
      primaryKey: true,
    },
    campaigninfoAccountId: {
      sql: `${CUBE}.\`campaignInfo.account_id\``,
      type: `string`,
      title: `Campaigninfo.account Id`
    },
    
    campaigninfoBudgetRemaining: {
      sql: `${CUBE}.\`campaignInfo.budget_remaining\``,
      type: `string`,
      title: `Campaigninfo.budget Remaining`
    },
    
    campaigninfoBuyingType: {
      sql: `${CUBE}.\`campaignInfo.buying_type\``,
      type: `string`,
      title: `Campaigninfo.buying Type`
    },
    
    campaigninfoConfiguredStatus: {
      sql: `${CUBE}.\`campaignInfo.configured_status\``,
      type: `string`,
      title: `Campaigninfo.configured Status`
    },
    
    campaigninfoCreatedTime: {
      sql: `${CUBE}.\`campaignInfo.created_time\``,
      type: `string`,
      title: `Campaigninfo.created Time`
    },
    
    campaigninfoEffectiveStatus: {
      sql: `${CUBE}.\`campaignInfo.effective_status\``,
      type: `string`,
      title: `Campaigninfo.effective Status`
    },
    
    campaigninfoId: {
      sql: `${CUBE}.\`campaignInfo.id\``,
      type: `string`,
      title: `Campaigninfo.id`
    },
    
    campaigninfoName: {
      sql: `${CUBE}.\`campaignInfo.name\``,
      type: `string`,
      title: `Campaigninfo.name`
    },
    
    campaigninfoObjective: {
      sql: `${CUBE}.\`campaignInfo.objective\``,
      type: `string`,
      title: `Campaigninfo.objective`
    },
    
    campaigninfoPrimaryAttribution: {
      sql: `${CUBE}.\`campaignInfo.primary_attribution\``,
      type: `string`,
      title: `Campaigninfo.primary Attribution`
    },
    
    campaigninfoSmartPromotionType: {
      sql: `${CUBE}.\`campaignInfo.smart_promotion_type\``,
      type: `string`,
      title: `Campaigninfo.smart Promotion Type`
    },
    
    campaigninfoSourceCampaignId: {
      sql: `${CUBE}.\`campaignInfo.source_campaign_id\``,
      type: `string`,
      title: `Campaigninfo.source Campaign Id`
    },
    
    campaigninfoSpecialAdCategory: {
      sql: `${CUBE}.\`campaignInfo.special_ad_category\``,
      type: `string`,
      title: `Campaigninfo.special Ad Category`
    },
    
    campaigninfoStartTime: {
      sql: `${CUBE}.\`campaignInfo.start_time\``,
      type: `string`,
      title: `Campaigninfo.start Time`
    },
    
    campaigninfoStatus: {
      sql: `${CUBE}.\`campaignInfo.status\``,
      type: `string`,
      title: `Campaigninfo.status`
    },
    
    campaigninfoStopTime: {
      sql: `${CUBE}.\`campaignInfo.stop_time\``,
      type: `string`,
      title: `Campaigninfo.stop Time`
    },
    
    campaigninfoToplineId: {
      sql: `${CUBE}.\`campaignInfo.topline_id\``,
      type: `string`,
      title: `Campaigninfo.topline Id`
    },
    
    campaigninfoUpdatedTime: {
      sql: `${CUBE}.\`campaignInfo.updated_time\``,
      type: `string`,
      title: `Campaigninfo.updated Time`
    }
  },
  
  dataSource: `default`
});
