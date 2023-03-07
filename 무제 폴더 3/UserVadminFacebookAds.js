cube(`UserVadminFacebookAds`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_ads\``,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [adsChangesAccountId, adsChangesAdsetId, adsChangesAdsetId, adsChangesCampaignId, adsChangesCampaignId, adsChangesCreatedTime, adsChangesCreativeId, adsChangesId, adsChangesLastUpdatedByAppId, adsChangesName, adsChangesSourceAdId, adsChangesSourceAdId, adsDataAccountId, adsDataAdsetId, adsDataAdsetId, adsDataCampaignId, adsDataCampaignId, adsDataCreatedTime, adsDataCreativeId, adsDataId, adsDataLastUpdatedByAppId, adsDataName, adsDataSourceAdId, adsDataSourceAdId, adsParentid, adsAccountId, adsAdsetId, adsAdsetId, adsBidAmount, adsBidInfo, adsBidType, adsCampaignId, adsCampaignId, adsCreatedTime, adsCreativeId, adsId, adsLastUpdatedByAppId, adsName, adsSourceAdId, adsSourceAdId, adsUpdatedTime]
    }
  },
  
  dimensions: {
    _id: {
      sql: `_id`,
      type: `string`,
      primaryKey: true,
    },
    adsApiAccesstoken: {
      sql: `${CUBE}.\`ads._api.accessToken\``,
      type: `string`,
      title: `Ads. Api.accesstoken`
    },
    
    adsApiLocale: {
      sql: `${CUBE}.\`ads._api.locale\``,
      type: `string`,
      title: `Ads. Api.locale`
    },
    
    adsChangesAccountId: {
      sql: `${CUBE}.\`ads._changes.account_id\``,
      type: `string`,
      title: `Ads. Changes.account Id`
    },
    
    adsChangesAdsetId: {
      sql: `${CUBE}.\`ads._changes.adset_id\``,
      type: `string`,
      title: `Ads. Changes.adset Id`
    },
    
    adsChangesCampaignId: {
      sql: `${CUBE}.\`ads._changes.campaign_id\``,
      type: `string`,
      title: `Ads. Changes.campaign Id`
    },
    
    adsChangesConfiguredStatus: {
      sql: `${CUBE}.\`ads._changes.configured_status\``,
      type: `string`,
      title: `Ads. Changes.configured Status`
    },
    
    adsChangesConversionDomain: {
      sql: `${CUBE}.\`ads._changes.conversion_domain\``,
      type: `string`,
      title: `Ads. Changes.conversion Domain`
    },
    
    adsChangesCreatedTime: {
      sql: `${CUBE}.\`ads._changes.created_time\``,
      type: `string`,
      title: `Ads. Changes.created Time`
    },
    
    adsChangesCreativeId: {
      sql: `${CUBE}.\`ads._changes.creative.id\``,
      type: `string`,
      title: `Ads. Changes.creative.id`
    },
    
    adsChangesEffectiveStatus: {
      sql: `${CUBE}.\`ads._changes.effective_status\``,
      type: `string`,
      title: `Ads. Changes.effective Status`
    },
    
    adsChangesId: {
      sql: `${CUBE}.\`ads._changes.id\``,
      type: `string`,
      title: `Ads. Changes.id`
    },
    
    adsChangesLastUpdatedByAppId: {
      sql: `${CUBE}.\`ads._changes.last_updated_by_app_id\``,
      type: `string`,
      title: `Ads. Changes.last Updated by App Id`
    },
    
    adsChangesName: {
      sql: `${CUBE}.\`ads._changes.name\``,
      type: `string`,
      title: `Ads. Changes.name`
    },
    
    adsChangesSourceAdId: {
      sql: `${CUBE}.\`ads._changes.source_ad_id\``,
      type: `string`,
      title: `Ads. Changes.source Ad Id`
    },
    
    adsChangesStatus: {
      sql: `${CUBE}.\`ads._changes.status\``,
      type: `string`,
      title: `Ads. Changes.status`
    },
    
    adsDataAccountId: {
      sql: `${CUBE}.\`ads._data.account_id\``,
      type: `string`,
      title: `Ads. Data.account Id`
    },
    
    adsDataAdsetId: {
      sql: `${CUBE}.\`ads._data.adset_id\``,
      type: `string`,
      title: `Ads. Data.adset Id`
    },
    
    adsDataCampaignId: {
      sql: `${CUBE}.\`ads._data.campaign_id\``,
      type: `string`,
      title: `Ads. Data.campaign Id`
    },
    
    adsDataConfiguredStatus: {
      sql: `${CUBE}.\`ads._data.configured_status\``,
      type: `string`,
      title: `Ads. Data.configured Status`
    },
    
    adsDataConversionDomain: {
      sql: `${CUBE}.\`ads._data.conversion_domain\``,
      type: `string`,
      title: `Ads. Data.conversion Domain`
    },
    
    adsDataCreatedTime: {
      sql: `${CUBE}.\`ads._data.created_time\``,
      type: `string`,
      title: `Ads. Data.created Time`
    },
    
    adsDataCreativeId: {
      sql: `${CUBE}.\`ads._data.creative.id\``,
      type: `string`,
      title: `Ads. Data.creative.id`
    },
    
    adsDataEffectiveStatus: {
      sql: `${CUBE}.\`ads._data.effective_status\``,
      type: `string`,
      title: `Ads. Data.effective Status`
    },
    
    adsDataId: {
      sql: `${CUBE}.\`ads._data.id\``,
      type: `string`,
      title: `Ads. Data.id`
    },
    
    adsDataLastUpdatedByAppId: {
      sql: `${CUBE}.\`ads._data.last_updated_by_app_id\``,
      type: `string`,
      title: `Ads. Data.last Updated by App Id`
    },
    
    adsDataName: {
      sql: `${CUBE}.\`ads._data.name\``,
      type: `string`,
      title: `Ads. Data.name`
    },
    
    adsDataSourceAdId: {
      sql: `${CUBE}.\`ads._data.source_ad_id\``,
      type: `string`,
      title: `Ads. Data.source Ad Id`
    },
    
    adsDataStatus: {
      sql: `${CUBE}.\`ads._data.status\``,
      type: `string`,
      title: `Ads. Data.status`
    },
    
    adsParentid: {
      sql: `${CUBE}.\`ads._parentId\``,
      type: `string`,
      title: `Ads. Parentid`
    },
    
    adsAccountId: {
      sql: `${CUBE}.\`ads.account_id\``,
      type: `string`,
      title: `Ads.account Id`
    },
    
    adsAdReviewFeedback: {
      sql: `${CUBE}.\`ads.ad_review_feedback\``,
      type: `string`,
      title: `Ads.ad Review Feedback`
    },
    
    adsAdlabels: {
      sql: `${CUBE}.\`ads.adlabels\``,
      type: `string`,
      title: `Ads.adlabels`
    },
    
    adsAdsetId: {
      sql: `${CUBE}.\`ads.adset_id\``,
      type: `string`,
      title: `Ads.adset Id`
    },
    
    adsBidAmount: {
      sql: `${CUBE}.\`ads.bid_amount\``,
      type: `string`,
      title: `Ads.bid Amount`
    },
    
    adsBidInfo: {
      sql: `${CUBE}.\`ads.bid_info\``,
      type: `string`,
      title: `Ads.bid Info`
    },
    
    adsBidType: {
      sql: `${CUBE}.\`ads.bid_type\``,
      type: `string`,
      title: `Ads.bid Type`
    },
    
    adsCampaignId: {
      sql: `${CUBE}.\`ads.campaign_id\``,
      type: `string`,
      title: `Ads.campaign Id`
    },
    
    adsConfiguredStatus: {
      sql: `${CUBE}.\`ads.configured_status\``,
      type: `string`,
      title: `Ads.configured Status`
    },
    
    adsConversionDomain: {
      sql: `${CUBE}.\`ads.conversion_domain\``,
      type: `string`,
      title: `Ads.conversion Domain`
    },
    
    adsCreatedTime: {
      sql: `${CUBE}.\`ads.created_time\``,
      type: `string`,
      title: `Ads.created Time`
    },
    
    adsCreativeId: {
      sql: `${CUBE}.\`ads.creative.id\``,
      type: `string`,
      title: `Ads.creative.id`
    },
    
    adsDemolinkHash: {
      sql: `${CUBE}.\`ads.demolink_hash\``,
      type: `string`,
      title: `Ads.demolink Hash`
    },
    
    adsDisplaySequence: {
      sql: `${CUBE}.\`ads.display_sequence\``,
      type: `string`,
      title: `Ads.display Sequence`
    },
    
    adsEffectiveStatus: {
      sql: `${CUBE}.\`ads.effective_status\``,
      type: `string`,
      title: `Ads.effective Status`
    },
    
    adsEngagementAudience: {
      sql: `${CUBE}.\`ads.engagement_audience\``,
      type: `string`,
      title: `Ads.engagement Audience`
    },
    
    adsFailedDeliveryChecks: {
      sql: `${CUBE}.\`ads.failed_delivery_checks\``,
      type: `string`,
      title: `Ads.failed Delivery Checks`
    },
    
    adsId: {
      sql: `${CUBE}.\`ads.id\``,
      type: `string`,
      title: `Ads.id`
    },
    
    adsLastUpdatedByAppId: {
      sql: `${CUBE}.\`ads.last_updated_by_app_id\``,
      type: `string`,
      title: `Ads.last Updated by App Id`
    },
    
    adsName: {
      sql: `${CUBE}.\`ads.name\``,
      type: `string`,
      title: `Ads.name`
    },
    
    adsPreviewShareableLink: {
      sql: `${CUBE}.\`ads.preview_shareable_link\``,
      type: `string`,
      title: `Ads.preview Shareable Link`
    },
    
    adsPriority: {
      sql: `${CUBE}.\`ads.priority\``,
      type: `string`,
      title: `Ads.priority`
    },
    
    adsRecommendations: {
      sql: `${CUBE}.\`ads.recommendations\``,
      type: `string`,
      title: `Ads.recommendations`
    },
    
    adsSourceAd: {
      sql: `${CUBE}.\`ads.source_ad\``,
      type: `string`,
      title: `Ads.source Ad`
    },
    
    adsSourceAdId: {
      sql: `${CUBE}.\`ads.source_ad_id\``,
      type: `string`,
      title: `Ads.source Ad Id`
    },
    
    adsStatus: {
      sql: `${CUBE}.\`ads.status\``,
      type: `string`,
      title: `Ads.status`
    },
    
    adsTargeting: {
      sql: `${CUBE}.\`ads.targeting\``,
      type: `string`,
      title: `Ads.targeting`
    },
    
    adsTrackingAndConversionWithDefaults: {
      sql: `${CUBE}.\`ads.tracking_and_conversion_with_defaults\``,
      type: `string`,
      title: `Ads.tracking and Conversion with Defaults`
    },
    
    adsTrackingSpecs: {
      sql: `${CUBE}.\`ads.tracking_specs\``,
      type: `string`,
      title: `Ads.tracking Specs`
    },
    
    adsUpdatedTime: {
      sql: `${CUBE}.\`ads.updated_time\``,
      type: `string`,
      title: `Ads.updated Time`
    }
  },
  
  dataSource: `default`
});
