cube(`UserBandibullFacebookAdsinfo`, {
  sql: `SELECT * FROM vad.\`user_bandibull_facebook_adsInfo\``,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [adsinfoAccountId, adsinfoAdsetId, adsinfoAdsetId, adsinfoCampaignId, adsinfoCampaignId, adsinfoCreatedTime, adsinfoCreativeId, adsinfoId, adsinfoLastUpdatedByAppId, adsinfoName, adsinfoSourceAdId, adsinfoSourceAdId]
    }
  },
  
  dimensions: {
    adsinfoAccountId: {
      sql: `${CUBE}.\`adsInfo.account_id\``,
      type: `string`,
      title: `Adsinfo.account Id`
    },
    
    adsinfoAdsetId: {
      sql: `${CUBE}.\`adsInfo.adset_id\``,
      type: `string`,
      title: `Adsinfo.adset Id`
    },
    
    adsinfoCampaignId: {
      sql: `${CUBE}.\`adsInfo.campaign_id\``,
      type: `string`,
      title: `Adsinfo.campaign Id`
    },
    
    adsinfoConfiguredStatus: {
      sql: `${CUBE}.\`adsInfo.configured_status\``,
      type: `string`,
      title: `Adsinfo.configured Status`
    },
    
    adsinfoCreatedTime: {
      sql: `${CUBE}.\`adsInfo.created_time\``,
      type: `string`,
      title: `Adsinfo.created Time`
    },
    
    adsinfoCreativeId: {
      sql: `${CUBE}.\`adsInfo.creative.id\``,
      type: `string`,
      title: `Adsinfo.creative.id`
    },
    
    adsinfoEffectiveStatus: {
      sql: `${CUBE}.\`adsInfo.effective_status\``,
      type: `string`,
      title: `Adsinfo.effective Status`
    },
    
    adsinfoId: {
      sql: `${CUBE}.\`adsInfo.id\``,
      type: `string`,
      title: `Adsinfo.id`
    },
    
    adsinfoLastUpdatedByAppId: {
      sql: `${CUBE}.\`adsInfo.last_updated_by_app_id\``,
      type: `string`,
      title: `Adsinfo.last Updated by App Id`
    },
    
    adsinfoName: {
      sql: `${CUBE}.\`adsInfo.name\``,
      type: `string`,
      title: `Adsinfo.name`
    },
    
    adsinfoSourceAdId: {
      sql: `${CUBE}.\`adsInfo.source_ad_id\``,
      type: `string`,
      title: `Adsinfo.source Ad Id`
    },
    
    adsinfoStatus: {
      sql: `${CUBE}.\`adsInfo.status\``,
      type: `string`,
      title: `Adsinfo.status`
    }
  },
  
  dataSource: `default`
});
