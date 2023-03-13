cube(`UserBandibullFacebookAdsetinfo`, {
  sql: `SELECT * FROM vad.\`user_bandibull_facebook_adsetInfo\``,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [adsetinfoAccountId, adsetinfoCampaignId, adsetinfoCampaignId, adsetinfoCreatedTime, adsetinfoId, adsetinfoName, adsetinfoPromotedObjectPageId, adsetinfoSourceAdsetId, adsetinfoSourceAdsetId, adsetinfoUpdatedTime]
    },
    sum: {
      type: `sum`,
      sql: `\`adsetInfo.lifetime_budget\``,
      drillMembers: [adsetinfoAccountId, adsetinfoCampaignId, adsetinfoCampaignId, adsetinfoCreatedTime, adsetinfoId, adsetinfoName, adsetinfoPromotedObjectPageId, adsetinfoSourceAdsetId, adsetinfoSourceAdsetId, adsetinfoUpdatedTime]
    }
  },
  
  dimensions: {
    adsetinfoAccountId: {
      sql: `${CUBE}.\`adsetInfo.account_id\``,
      type: `string`,
      title: `Adsetinfo.account Id`
    },
    
    adsetinfoBillingEvent: {
      sql: `${CUBE}.\`adsetInfo.billing_event\``,
      type: `string`,
      title: `Adsetinfo.billing Event`
    },
    
    adsetinfoCampaignId: {
      sql: `${CUBE}.\`adsetInfo.campaign_id\``,
      type: `string`,
      title: `Adsetinfo.campaign Id`
    },
    
    adsetinfoCreatedTime: {
      sql: `${CUBE}.\`adsetInfo.created_time\``,
      type: `string`,
      title: `Adsetinfo.created Time`
    },
    
    adsetinfoDailyBudget: {
      sql: `${CUBE}.\`adsetInfo.daily_budget\``,
      type: `string`,
      title: `Adsetinfo.daily Budget`
    },
    
    adsetinfoEndTime: {
      sql: `${CUBE}.\`adsetInfo.end_time\``,
      type: `string`,
      title: `Adsetinfo.end Time`
    },
    
    adsetinfoId: {
      sql: `${CUBE}.\`adsetInfo.id\``,
      type: `string`,
      title: `Adsetinfo.id`
    },
    
    adsetinfoLifetimeBudget: {
      sql: `${CUBE}.\`adsetInfo.lifetime_budget\``,
      type: `string`,
      title: `Adsetinfo.lifetime Budget`
    },
    
    adsetinfoName: {
      sql: `${CUBE}.\`adsetInfo.name\``,
      type: `string`,
      title: `Adsetinfo.name`
    },
    
    adsetinfoOptimizationGoal: {
      sql: `${CUBE}.\`adsetInfo.optimization_goal\``,
      type: `string`,
      title: `Adsetinfo.optimization Goal`
    },
    
    adsetinfoOptimizationSubEvent: {
      sql: `${CUBE}.\`adsetInfo.optimization_sub_event\``,
      type: `string`,
      title: `Adsetinfo.optimization Sub Event`
    },
    
    adsetinfoPromotedObjectPageId: {
      sql: `${CUBE}.\`adsetInfo.promoted_object.page_id\``,
      type: `string`,
      title: `Adsetinfo.promoted Object.page Id`
    },
    
    adsetinfoSourceAdsetId: {
      sql: `${CUBE}.\`adsetInfo.source_adset_id\``,
      type: `string`,
      title: `Adsetinfo.source Adset Id`
    },
    
    adsetinfoStartTime: {
      sql: `${CUBE}.\`adsetInfo.start_time\``,
      type: `string`,
      title: `Adsetinfo.start Time`
    },
    
    adsetinfoStatus: {
      sql: `${CUBE}.\`adsetInfo.status\``,
      type: `string`,
      title: `Adsetinfo.status`
    },
    
    adsetinfoTargetingTargetingOptimization: {
      sql: `${CUBE}.\`adsetInfo.targeting.targeting_optimization\``,
      type: `string`,
      title: `Adsetinfo.targeting.targeting Optimization`
    },
    
    adsetinfoUpdatedTime: {
      sql: `${CUBE}.\`adsetInfo.updated_time\``,
      type: `string`,
      title: `Adsetinfo.updated Time`
    }
  },
  
  dataSource: `default`
});
