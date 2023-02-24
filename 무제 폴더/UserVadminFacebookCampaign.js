cube(`UserVadminFacebookCampaign`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_campaign\``,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [campaignChangesAccountId, campaignChangesBidStrategy, campaignChangesBoostedObjectId, campaignChangesCreatedTime, campaignChangesId, campaignChangesName, campaignChangesSourceCampaignId, campaignChangesSourceCampaignId, campaignChangesToplineId, campaignChangesUpdatedTime, campaignDataAccountId, campaignDataBidStrategy, campaignDataBoostedObjectId, campaignDataCreatedTime, campaignDataId, campaignDataName, campaignDataSourceCampaignId, campaignDataSourceCampaignId, campaignDataToplineId, campaignDataUpdatedTime, campaignParentid, campaignAccountId, campaignAdStrategyGroupId, campaignAdStrategyId, campaignBidStrategy, campaignBoostedObjectId, campaignCreatedTime, campaignId, campaignName, campaignSourceCampaignId, campaignSourceCampaignId, campaignSpecialAdCategoryCountry, campaignToplineId, campaignUpdatedTime]
    }
  },
  
  dimensions: {
    _id: {
      sql: `_id`,
      type: `string`,
      primaryKey: true,
    },
    campaignApiAccesstoken: {
      sql: `${CUBE}.\`campaign._api.accessToken\``,
      type: `string`,
      title: `Campaign. Api.accesstoken`
    },
    
    campaignApiLocale: {
      sql: `${CUBE}.\`campaign._api.locale\``,
      type: `string`,
      title: `Campaign. Api.locale`
    },
    
    campaignChangesAccountId: {
      sql: `${CUBE}.\`campaign._changes.account_id\``,
      type: `string`,
      title: `Campaign. Changes.account Id`
    },
    
    campaignChangesBidStrategy: {
      sql: `${CUBE}.\`campaign._changes.bid_strategy\``,
      type: `string`,
      title: `Campaign. Changes.bid Strategy`
    },
    
    campaignChangesBoostedObjectId: {
      sql: `${CUBE}.\`campaign._changes.boosted_object_id\``,
      type: `string`,
      title: `Campaign. Changes.boosted Object Id`
    },
    
    campaignChangesBudgetRemaining: {
      sql: `${CUBE}.\`campaign._changes.budget_remaining\``,
      type: `string`,
      title: `Campaign. Changes.budget Remaining`
    },
    
    campaignChangesBuyingType: {
      sql: `${CUBE}.\`campaign._changes.buying_type\``,
      type: `string`,
      title: `Campaign. Changes.buying Type`
    },
    
    campaignChangesConfiguredStatus: {
      sql: `${CUBE}.\`campaign._changes.configured_status\``,
      type: `string`,
      title: `Campaign. Changes.configured Status`
    },
    
    campaignChangesCreatedTime: {
      sql: `${CUBE}.\`campaign._changes.created_time\``,
      type: `string`,
      title: `Campaign. Changes.created Time`
    },
    
    campaignChangesDailyBudget: {
      sql: `${CUBE}.\`campaign._changes.daily_budget\``,
      type: `string`,
      title: `Campaign. Changes.daily Budget`
    },
    
    campaignChangesEffectiveStatus: {
      sql: `${CUBE}.\`campaign._changes.effective_status\``,
      type: `string`,
      title: `Campaign. Changes.effective Status`
    },
    
    campaignChangesId: {
      sql: `${CUBE}.\`campaign._changes.id\``,
      type: `string`,
      title: `Campaign. Changes.id`
    },
    
    campaignChangesLastBudgetTogglingTime: {
      sql: `${CUBE}.\`campaign._changes.last_budget_toggling_time\``,
      type: `string`,
      title: `Campaign. Changes.last Budget Toggling Time`
    },
    
    campaignChangesLifetimeBudget: {
      sql: `${CUBE}.\`campaign._changes.lifetime_budget\``,
      type: `string`,
      title: `Campaign. Changes.lifetime Budget`
    },
    
    campaignChangesName: {
      sql: `${CUBE}.\`campaign._changes.name\``,
      type: `string`,
      title: `Campaign. Changes.name`
    },
    
    campaignChangesObjective: {
      sql: `${CUBE}.\`campaign._changes.objective\``,
      type: `string`,
      title: `Campaign. Changes.objective`
    },
    
    campaignChangesPrimaryAttribution: {
      sql: `${CUBE}.\`campaign._changes.primary_attribution\``,
      type: `string`,
      title: `Campaign. Changes.primary Attribution`
    },
    
    campaignChangesSmartPromotionType: {
      sql: `${CUBE}.\`campaign._changes.smart_promotion_type\``,
      type: `string`,
      title: `Campaign. Changes.smart Promotion Type`
    },
    
    campaignChangesSourceCampaignId: {
      sql: `${CUBE}.\`campaign._changes.source_campaign_id\``,
      type: `string`,
      title: `Campaign. Changes.source Campaign Id`
    },
    
    campaignChangesSpecialAdCategory: {
      sql: `${CUBE}.\`campaign._changes.special_ad_category\``,
      type: `string`,
      title: `Campaign. Changes.special Ad Category`
    },
    
    campaignChangesSpendCap: {
      sql: `${CUBE}.\`campaign._changes.spend_cap\``,
      type: `string`,
      title: `Campaign. Changes.spend Cap`
    },
    
    campaignChangesStartTime: {
      sql: `${CUBE}.\`campaign._changes.start_time\``,
      type: `string`,
      title: `Campaign. Changes.start Time`
    },
    
    campaignChangesStatus: {
      sql: `${CUBE}.\`campaign._changes.status\``,
      type: `string`,
      title: `Campaign. Changes.status`
    },
    
    campaignChangesStopTime: {
      sql: `${CUBE}.\`campaign._changes.stop_time\``,
      type: `string`,
      title: `Campaign. Changes.stop Time`
    },
    
    campaignChangesToplineId: {
      sql: `${CUBE}.\`campaign._changes.topline_id\``,
      type: `string`,
      title: `Campaign. Changes.topline Id`
    },
    
    campaignChangesUpdatedTime: {
      sql: `${CUBE}.\`campaign._changes.updated_time\``,
      type: `string`,
      title: `Campaign. Changes.updated Time`
    },
    
    campaignDataAccountId: {
      sql: `${CUBE}.\`campaign._data.account_id\``,
      type: `string`,
      title: `Campaign. Data.account Id`
    },
    
    campaignDataBidStrategy: {
      sql: `${CUBE}.\`campaign._data.bid_strategy\``,
      type: `string`,
      title: `Campaign. Data.bid Strategy`
    },
    
    campaignDataBoostedObjectId: {
      sql: `${CUBE}.\`campaign._data.boosted_object_id\``,
      type: `string`,
      title: `Campaign. Data.boosted Object Id`
    },
    
    campaignDataBudgetRemaining: {
      sql: `${CUBE}.\`campaign._data.budget_remaining\``,
      type: `string`,
      title: `Campaign. Data.budget Remaining`
    },
    
    campaignDataBuyingType: {
      sql: `${CUBE}.\`campaign._data.buying_type\``,
      type: `string`,
      title: `Campaign. Data.buying Type`
    },
    
    campaignDataConfiguredStatus: {
      sql: `${CUBE}.\`campaign._data.configured_status\``,
      type: `string`,
      title: `Campaign. Data.configured Status`
    },
    
    campaignDataCreatedTime: {
      sql: `${CUBE}.\`campaign._data.created_time\``,
      type: `string`,
      title: `Campaign. Data.created Time`
    },
    
    campaignDataDailyBudget: {
      sql: `${CUBE}.\`campaign._data.daily_budget\``,
      type: `string`,
      title: `Campaign. Data.daily Budget`
    },
    
    campaignDataEffectiveStatus: {
      sql: `${CUBE}.\`campaign._data.effective_status\``,
      type: `string`,
      title: `Campaign. Data.effective Status`
    },
    
    campaignDataId: {
      sql: `${CUBE}.\`campaign._data.id\``,
      type: `string`,
      title: `Campaign. Data.id`
    },
    
    campaignDataLastBudgetTogglingTime: {
      sql: `${CUBE}.\`campaign._data.last_budget_toggling_time\``,
      type: `string`,
      title: `Campaign. Data.last Budget Toggling Time`
    },
    
    campaignDataLifetimeBudget: {
      sql: `${CUBE}.\`campaign._data.lifetime_budget\``,
      type: `string`,
      title: `Campaign. Data.lifetime Budget`
    },
    
    campaignDataName: {
      sql: `${CUBE}.\`campaign._data.name\``,
      type: `string`,
      title: `Campaign. Data.name`
    },
    
    campaignDataObjective: {
      sql: `${CUBE}.\`campaign._data.objective\``,
      type: `string`,
      title: `Campaign. Data.objective`
    },
    
    campaignDataPrimaryAttribution: {
      sql: `${CUBE}.\`campaign._data.primary_attribution\``,
      type: `string`,
      title: `Campaign. Data.primary Attribution`
    },
    
    campaignDataSmartPromotionType: {
      sql: `${CUBE}.\`campaign._data.smart_promotion_type\``,
      type: `string`,
      title: `Campaign. Data.smart Promotion Type`
    },
    
    campaignDataSourceCampaignId: {
      sql: `${CUBE}.\`campaign._data.source_campaign_id\``,
      type: `string`,
      title: `Campaign. Data.source Campaign Id`
    },
    
    campaignDataSpecialAdCategory: {
      sql: `${CUBE}.\`campaign._data.special_ad_category\``,
      type: `string`,
      title: `Campaign. Data.special Ad Category`
    },
    
    campaignDataSpendCap: {
      sql: `${CUBE}.\`campaign._data.spend_cap\``,
      type: `string`,
      title: `Campaign. Data.spend Cap`
    },
    
    campaignDataStartTime: {
      sql: `${CUBE}.\`campaign._data.start_time\``,
      type: `string`,
      title: `Campaign. Data.start Time`
    },
    
    campaignDataStatus: {
      sql: `${CUBE}.\`campaign._data.status\``,
      type: `string`,
      title: `Campaign. Data.status`
    },
    
    campaignDataStopTime: {
      sql: `${CUBE}.\`campaign._data.stop_time\``,
      type: `string`,
      title: `Campaign. Data.stop Time`
    },
    
    campaignDataToplineId: {
      sql: `${CUBE}.\`campaign._data.topline_id\``,
      type: `string`,
      title: `Campaign. Data.topline Id`
    },
    
    campaignDataUpdatedTime: {
      sql: `${CUBE}.\`campaign._data.updated_time\``,
      type: `string`,
      title: `Campaign. Data.updated Time`
    },
    
    campaignParentid: {
      sql: `${CUBE}.\`campaign._parentId\``,
      type: `string`,
      title: `Campaign. Parentid`
    },
    
    campaignAccountId: {
      sql: `${CUBE}.\`campaign.account_id\``,
      type: `string`,
      title: `Campaign.account Id`
    },
    
    campaignAdStrategyGroupId: {
      sql: `${CUBE}.\`campaign.ad_strategy_group_id\``,
      type: `string`,
      title: `Campaign.ad Strategy Group Id`
    },
    
    campaignAdStrategyId: {
      sql: `${CUBE}.\`campaign.ad_strategy_id\``,
      type: `string`,
      title: `Campaign.ad Strategy Id`
    },
    
    campaignBidStrategy: {
      sql: `${CUBE}.\`campaign.bid_strategy\``,
      type: `string`,
      title: `Campaign.bid Strategy`
    },
    
    campaignBoostedObjectId: {
      sql: `${CUBE}.\`campaign.boosted_object_id\``,
      type: `string`,
      title: `Campaign.boosted Object Id`
    },
    
    campaignBrandLiftStudies: {
      sql: `${CUBE}.\`campaign.brand_lift_studies\``,
      type: `string`,
      title: `Campaign.brand Lift Studies`
    },
    
    campaignBudgetRemaining: {
      sql: `${CUBE}.\`campaign.budget_remaining\``,
      type: `string`,
      title: `Campaign.budget Remaining`
    },
    
    campaignBuyingType: {
      sql: `${CUBE}.\`campaign.buying_type\``,
      type: `string`,
      title: `Campaign.buying Type`
    },
    
    campaignConfiguredStatus: {
      sql: `${CUBE}.\`campaign.configured_status\``,
      type: `string`,
      title: `Campaign.configured Status`
    },
    
    campaignCreatedTime: {
      sql: `${CUBE}.\`campaign.created_time\``,
      type: `string`,
      title: `Campaign.created Time`
    },
    
    campaignDailyBudget: {
      sql: `${CUBE}.\`campaign.daily_budget\``,
      type: `string`,
      title: `Campaign.daily Budget`
    },
    
    campaignEffectiveStatus: {
      sql: `${CUBE}.\`campaign.effective_status\``,
      type: `string`,
      title: `Campaign.effective Status`
    },
    
    campaignId: {
      sql: `${CUBE}.\`campaign.id\``,
      type: `string`,
      title: `Campaign.id`
    },
    
    campaignIssuesInfo: {
      sql: `${CUBE}.\`campaign.issues_info\``,
      type: `string`,
      title: `Campaign.issues Info`
    },
    
    campaignLastBudgetTogglingTime: {
      sql: `${CUBE}.\`campaign.last_budget_toggling_time\``,
      type: `string`,
      title: `Campaign.last Budget Toggling Time`
    },
    
    campaignLifetimeBudget: {
      sql: `${CUBE}.\`campaign.lifetime_budget\``,
      type: `string`,
      title: `Campaign.lifetime Budget`
    },
    
    campaignName: {
      sql: `${CUBE}.\`campaign.name\``,
      type: `string`,
      title: `Campaign.name`
    },
    
    campaignObjective: {
      sql: `${CUBE}.\`campaign.objective\``,
      type: `string`,
      title: `Campaign.objective`
    },
    
    campaignPrimaryAttribution: {
      sql: `${CUBE}.\`campaign.primary_attribution\``,
      type: `string`,
      title: `Campaign.primary Attribution`
    },
    
    campaignPromotedObject: {
      sql: `${CUBE}.\`campaign.promoted_object\``,
      type: `string`,
      title: `Campaign.promoted Object`
    },
    
    campaignRecommendations: {
      sql: `${CUBE}.\`campaign.recommendations\``,
      type: `string`,
      title: `Campaign.recommendations`
    },
    
    campaignSmartPromotionType: {
      sql: `${CUBE}.\`campaign.smart_promotion_type\``,
      type: `string`,
      title: `Campaign.smart Promotion Type`
    },
    
    campaignSourceCampaign: {
      sql: `${CUBE}.\`campaign.source_campaign\``,
      type: `string`,
      title: `Campaign.source Campaign`
    },
    
    campaignSourceCampaignId: {
      sql: `${CUBE}.\`campaign.source_campaign_id\``,
      type: `string`,
      title: `Campaign.source Campaign Id`
    },
    
    campaignSpecialAdCategory: {
      sql: `${CUBE}.\`campaign.special_ad_category\``,
      type: `string`,
      title: `Campaign.special Ad Category`
    },
    
    campaignSpecialAdCategoryCountry: {
      sql: `${CUBE}.\`campaign.special_ad_category_country\``,
      type: `string`,
      title: `Campaign.special Ad Category Country`
    },
    
    campaignSpendCap: {
      sql: `${CUBE}.\`campaign.spend_cap\``,
      type: `string`,
      title: `Campaign.spend Cap`
    },
    
    campaignStartTime: {
      sql: `${CUBE}.\`campaign.start_time\``,
      type: `string`,
      title: `Campaign.start Time`
    },
    
    campaignStatus: {
      sql: `${CUBE}.\`campaign.status\``,
      type: `string`,
      title: `Campaign.status`
    },
    
    campaignStopTime: {
      sql: `${CUBE}.\`campaign.stop_time\``,
      type: `string`,
      title: `Campaign.stop Time`
    },
    
    campaignToplineId: {
      sql: `${CUBE}.\`campaign.topline_id\``,
      type: `string`,
      title: `Campaign.topline Id`
    },
    
    campaignUpdatedTime: {
      sql: `${CUBE}.\`campaign.updated_time\``,
      type: `string`,
      title: `Campaign.updated Time`
    }
  },
  
  dataSource: `default`
});
