cube(`UserVadminGoogleAdGroupAd`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_google_ad_group_ad\``,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [adGroupAdAdGroupName, adGroupAdAdGroupResourceName, adGroupAdAdGroupAdAdName, adGroupAdAdGroupAdAdResourceName, adGroupAdAdGroupAdAdVideoAd, adGroupAdAdGroupAdResourceName, adGroupAdCampaignEndDate, adGroupAdCampaignName, adGroupAdCampaignResourceName, adGroupAdCampaignStartDate, adGroupAdCustomerResourceName, adGroupAdMetricsVideoQuartileP100Rate, adGroupAdMetricsVideoQuartileP25Rate, adGroupAdMetricsVideoQuartileP50Rate, adGroupAdMetricsVideoQuartileP75Rate, adGroupAdMetricsVideoViewRate, adGroupAdSegmentsDate]
    },
    
    adGroupAdMetricsAllConversionsValue: {
      sql: `${CUBE}.\`ad_group_ad.metrics.all_conversions_value\``,
      type: `sum`,
      title: `Ad Group Ad.metrics.all Conversions Value`
    },
    
    adGroupAdMetricsAverageCost: {
      sql: `${CUBE}.\`ad_group_ad.metrics.average_cost\``,
      type: `sum`,
      title: `Ad Group Ad.metrics.average Cost`
    },
    
    adGroupAdMetricsConversionsValue: {
      sql: `${CUBE}.\`ad_group_ad.metrics.conversions_value\``,
      type: `sum`,
      title: `Ad Group Ad.metrics.conversions Value`
    },
    
    adGroupAdMetricsCurrentModelAttributedConversionsValue: {
      sql: `${CUBE}.\`ad_group_ad.metrics.current_model_attributed_conversions_value\``,
      type: `sum`,
      title: `Ad Group Ad.metrics.current Model Attributed Conversions Value`
    }
  },
  
  dimensions: {
    _id: {
      sql: `_id`,
      type: `string`,
      primaryKey: true,
    },
    adGroupAdAdGroupBaseAdGroup: {
      sql: `${CUBE}.\`ad_group_ad.ad_group.base_ad_group\``,
      type: `string`,
      title: `Ad Group Ad.ad Group.base Ad Group`
    },
    
    adGroupAdAdGroupCampaign: {
      sql: `${CUBE}.\`ad_group_ad.ad_group.campaign\``,
      type: `string`,
      title: `Ad Group Ad.ad Group.campaign`
    },
    
    adGroupAdAdGroupEffectiveTargetRoas: {
      sql: `${CUBE}.\`ad_group_ad.ad_group.effective_target_roas\``,
      type: `string`,
      title: `Ad Group Ad.ad Group.effective Target Roas`
    },
    
    adGroupAdAdGroupFinalUrlSuffix: {
      sql: `${CUBE}.\`ad_group_ad.ad_group.final_url_suffix\``,
      type: `string`,
      title: `Ad Group Ad.ad Group.final Url Suffix`
    },
    
    adGroupAdAdGroupName: {
      sql: `${CUBE}.\`ad_group_ad.ad_group.name\``,
      type: `string`,
      title: `Ad Group Ad.ad Group.name`
    },
    
    adGroupAdAdGroupResourceName: {
      sql: `${CUBE}.\`ad_group_ad.ad_group.resource_name\``,
      type: `string`,
      title: `Ad Group Ad.ad Group.resource Name`
    },
    
    adGroupAdAdGroupTargetRoas: {
      sql: `${CUBE}.\`ad_group_ad.ad_group.target_roas\``,
      type: `string`,
      title: `Ad Group Ad.ad Group.target Roas`
    },
    
    adGroupAdAdGroupAdAdAppAd: {
      sql: `${CUBE}.\`ad_group_ad.ad_group_ad.ad.app_ad\``,
      type: `string`,
      title: `Ad Group Ad.ad Group Ad.ad.app Ad`
    },
    
    adGroupAdAdGroupAdAdAppEngagementAd: {
      sql: `${CUBE}.\`ad_group_ad.ad_group_ad.ad.app_engagement_ad\``,
      type: `string`,
      title: `Ad Group Ad.ad Group Ad.ad.app Engagement Ad`
    },
    
    adGroupAdAdGroupAdAdAppPreRegistrationAd: {
      sql: `${CUBE}.\`ad_group_ad.ad_group_ad.ad.app_pre_registration_ad\``,
      type: `string`,
      title: `Ad Group Ad.ad Group Ad.ad.app Pre Registration Ad`
    },
    
    adGroupAdAdGroupAdAdCallAd: {
      sql: `${CUBE}.\`ad_group_ad.ad_group_ad.ad.call_ad\``,
      type: `string`,
      title: `Ad Group Ad.ad Group Ad.ad.call Ad`
    },
    
    adGroupAdAdGroupAdAdDiscoveryCarouselAd: {
      sql: `${CUBE}.\`ad_group_ad.ad_group_ad.ad.discovery_carousel_ad\``,
      type: `string`,
      title: `Ad Group Ad.ad Group Ad.ad.discovery Carousel Ad`
    },
    
    adGroupAdAdGroupAdAdDiscoveryMultiAssetAd: {
      sql: `${CUBE}.\`ad_group_ad.ad_group_ad.ad.discovery_multi_asset_ad\``,
      type: `string`,
      title: `Ad Group Ad.ad Group Ad.ad.discovery Multi Asset Ad`
    },
    
    adGroupAdAdGroupAdAdDisplayUrl: {
      sql: `${CUBE}.\`ad_group_ad.ad_group_ad.ad.display_url\``,
      type: `string`,
      title: `Ad Group Ad.ad Group Ad.ad.display Url`
    },
    
    adGroupAdAdGroupAdAdExpandedDynamicSearchAd: {
      sql: `${CUBE}.\`ad_group_ad.ad_group_ad.ad.expanded_dynamic_search_ad\``,
      type: `string`,
      title: `Ad Group Ad.ad Group Ad.ad.expanded Dynamic Search Ad`
    },
    
    adGroupAdAdGroupAdAdExpandedTextAd: {
      sql: `${CUBE}.\`ad_group_ad.ad_group_ad.ad.expanded_text_ad\``,
      type: `string`,
      title: `Ad Group Ad.ad Group Ad.ad.expanded Text Ad`
    },
    
    adGroupAdAdGroupAdAdHotelAd: {
      sql: `${CUBE}.\`ad_group_ad.ad_group_ad.ad.hotel_ad\``,
      type: `string`,
      title: `Ad Group Ad.ad Group Ad.ad.hotel Ad`
    },
    
    adGroupAdAdGroupAdAdImageAd: {
      sql: `${CUBE}.\`ad_group_ad.ad_group_ad.ad.image_ad\``,
      type: `string`,
      title: `Ad Group Ad.ad Group Ad.ad.image Ad`
    },
    
    adGroupAdAdGroupAdAdLegacyResponsiveDisplayAd: {
      sql: `${CUBE}.\`ad_group_ad.ad_group_ad.ad.legacy_responsive_display_ad\``,
      type: `string`,
      title: `Ad Group Ad.ad Group Ad.ad.legacy Responsive Display Ad`
    },
    
    adGroupAdAdGroupAdAdLocalAd: {
      sql: `${CUBE}.\`ad_group_ad.ad_group_ad.ad.local_ad\``,
      type: `string`,
      title: `Ad Group Ad.ad Group Ad.ad.local Ad`
    },
    
    adGroupAdAdGroupAdAdName: {
      sql: `${CUBE}.\`ad_group_ad.ad_group_ad.ad.name\``,
      type: `string`,
      title: `Ad Group Ad.ad Group Ad.ad.name`
    },
    
    adGroupAdAdGroupAdAdResourceName: {
      sql: `${CUBE}.\`ad_group_ad.ad_group_ad.ad.resource_name\``,
      type: `string`,
      title: `Ad Group Ad.ad Group Ad.ad.resource Name`
    },
    
    adGroupAdAdGroupAdAdResponsiveDisplayAd: {
      sql: `${CUBE}.\`ad_group_ad.ad_group_ad.ad.responsive_display_ad\``,
      type: `string`,
      title: `Ad Group Ad.ad Group Ad.ad.responsive Display Ad`
    },
    
    adGroupAdAdGroupAdAdResponsiveSearchAdPath1: {
      sql: `${CUBE}.\`ad_group_ad.ad_group_ad.ad.responsive_search_ad.path1\``,
      type: `string`,
      title: `Ad Group Ad.ad Group Ad.ad.responsive Search Ad.path1`
    },
    
    adGroupAdAdGroupAdAdResponsiveSearchAdPath2: {
      sql: `${CUBE}.\`ad_group_ad.ad_group_ad.ad.responsive_search_ad.path2\``,
      type: `string`,
      title: `Ad Group Ad.ad Group Ad.ad.responsive Search Ad.path2`
    },
    
    adGroupAdAdGroupAdAdShoppingProductAd: {
      sql: `${CUBE}.\`ad_group_ad.ad_group_ad.ad.shopping_product_ad\``,
      type: `string`,
      title: `Ad Group Ad.ad Group Ad.ad.shopping Product Ad`
    },
    
    adGroupAdAdGroupAdAdShoppingSmartAd: {
      sql: `${CUBE}.\`ad_group_ad.ad_group_ad.ad.shopping_smart_ad\``,
      type: `string`,
      title: `Ad Group Ad.ad Group Ad.ad.shopping Smart Ad`
    },
    
    adGroupAdAdGroupAdAdSmartCampaignAd: {
      sql: `${CUBE}.\`ad_group_ad.ad_group_ad.ad.smart_campaign_ad\``,
      type: `string`,
      title: `Ad Group Ad.ad Group Ad.ad.smart Campaign Ad`
    },
    
    adGroupAdAdGroupAdAdTextAd: {
      sql: `${CUBE}.\`ad_group_ad.ad_group_ad.ad.text_ad\``,
      type: `string`,
      title: `Ad Group Ad.ad Group Ad.ad.text Ad`
    },
    
    adGroupAdAdGroupAdAdVideoAd: {
      sql: `${CUBE}.\`ad_group_ad.ad_group_ad.ad.video_ad\``,
      type: `string`,
      title: `Ad Group Ad.ad Group Ad.ad.video Ad`
    },
    
    adGroupAdAdGroupAdAdGroup: {
      sql: `${CUBE}.\`ad_group_ad.ad_group_ad.ad_group\``,
      type: `string`,
      title: `Ad Group Ad.ad Group Ad.ad Group`
    },
    
    adGroupAdAdGroupAdResourceName: {
      sql: `${CUBE}.\`ad_group_ad.ad_group_ad.resource_name\``,
      type: `string`,
      title: `Ad Group Ad.ad Group Ad.resource Name`
    },
    
    adGroupAdCampaignBaseCampaign: {
      sql: `${CUBE}.\`ad_group_ad.campaign.base_campaign\``,
      type: `string`,
      title: `Ad Group Ad.campaign.base Campaign`
    },
    
    adGroupAdCampaignCampaignGroup: {
      sql: `${CUBE}.\`ad_group_ad.campaign.campaign_group\``,
      type: `string`,
      title: `Ad Group Ad.campaign.campaign Group`
    },
    
    adGroupAdCampaignEndDate: {
      sql: `${CUBE}.\`ad_group_ad.campaign.end_date\``,
      type: `string`,
      title: `Ad Group Ad.campaign.end Date`
    },
    
    adGroupAdCampaignFinalUrlSuffix: {
      sql: `${CUBE}.\`ad_group_ad.campaign.final_url_suffix\``,
      type: `string`,
      title: `Ad Group Ad.campaign.final Url Suffix`
    },
    
    adGroupAdCampaignHotelSetting: {
      sql: `${CUBE}.\`ad_group_ad.campaign.hotel_setting\``,
      type: `string`,
      title: `Ad Group Ad.campaign.hotel Setting`
    },
    
    adGroupAdCampaignManualCpa: {
      sql: `${CUBE}.\`ad_group_ad.campaign.manual_cpa\``,
      type: `string`,
      title: `Ad Group Ad.campaign.manual Cpa`
    },
    
    adGroupAdCampaignManualCpc: {
      sql: `${CUBE}.\`ad_group_ad.campaign.manual_cpc\``,
      type: `string`,
      title: `Ad Group Ad.campaign.manual Cpc`
    },
    
    adGroupAdCampaignManualCpm: {
      sql: `${CUBE}.\`ad_group_ad.campaign.manual_cpm\``,
      type: `string`,
      title: `Ad Group Ad.campaign.manual Cpm`
    },
    
    adGroupAdCampaignManualCpv: {
      sql: `${CUBE}.\`ad_group_ad.campaign.manual_cpv\``,
      type: `string`,
      title: `Ad Group Ad.campaign.manual Cpv`
    },
    
    adGroupAdCampaignMaximizeConversionValue: {
      sql: `${CUBE}.\`ad_group_ad.campaign.maximize_conversion_value\``,
      type: `string`,
      title: `Ad Group Ad.campaign.maximize Conversion Value`
    },
    
    adGroupAdCampaignName: {
      sql: `${CUBE}.\`ad_group_ad.campaign.name\``,
      type: `string`,
      title: `Ad Group Ad.campaign.name`
    },
    
    adGroupAdCampaignResourceName: {
      sql: `${CUBE}.\`ad_group_ad.campaign.resource_name\``,
      type: `string`,
      title: `Ad Group Ad.campaign.resource Name`
    },
    
    adGroupAdCampaignStartDate: {
      sql: `${CUBE}.\`ad_group_ad.campaign.start_date\``,
      type: `string`,
      title: `Ad Group Ad.campaign.start Date`
    },
    
    adGroupAdCampaignTargetCpm: {
      sql: `${CUBE}.\`ad_group_ad.campaign.target_cpm\``,
      type: `string`,
      title: `Ad Group Ad.campaign.target Cpm`
    },
    
    adGroupAdCampaignTargetRoas: {
      sql: `${CUBE}.\`ad_group_ad.campaign.target_roas\``,
      type: `string`,
      title: `Ad Group Ad.campaign.target Roas`
    },
    
    adGroupAdCampaignTrackingSetting: {
      sql: `${CUBE}.\`ad_group_ad.campaign.tracking_setting\``,
      type: `string`,
      title: `Ad Group Ad.campaign.tracking Setting`
    },
    
    adGroupAdCampaignTrackingUrlTemplate: {
      sql: `${CUBE}.\`ad_group_ad.campaign.tracking_url_template\``,
      type: `string`,
      title: `Ad Group Ad.campaign.tracking Url Template`
    },
    
    adGroupAdCustomerResourceName: {
      sql: `${CUBE}.\`ad_group_ad.customer.resource_name\``,
      type: `string`,
      title: `Ad Group Ad.customer.resource Name`
    },
    
    adGroupAdMetricsActiveViewCpm: {
      sql: `${CUBE}.\`ad_group_ad.metrics.active_view_cpm\``,
      type: `string`,
      title: `Ad Group Ad.metrics.active View Cpm`
    },
    
    adGroupAdMetricsActiveViewCtr: {
      sql: `${CUBE}.\`ad_group_ad.metrics.active_view_ctr\``,
      type: `string`,
      title: `Ad Group Ad.metrics.active View Ctr`
    },
    
    adGroupAdMetricsAverageCpe: {
      sql: `${CUBE}.\`ad_group_ad.metrics.average_cpe\``,
      type: `string`,
      title: `Ad Group Ad.metrics.average Cpe`
    },
    
    adGroupAdMetricsAverageCpv: {
      sql: `${CUBE}.\`ad_group_ad.metrics.average_cpv\``,
      type: `string`,
      title: `Ad Group Ad.metrics.average Cpv`
    },
    
    adGroupAdMetricsAveragePageViews: {
      sql: `${CUBE}.\`ad_group_ad.metrics.average_page_views\``,
      type: `string`,
      title: `Ad Group Ad.metrics.average Page Views`
    },
    
    adGroupAdMetricsEngagementRate: {
      sql: `${CUBE}.\`ad_group_ad.metrics.engagement_rate\``,
      type: `string`,
      title: `Ad Group Ad.metrics.engagement Rate`
    },
    
    adGroupAdMetricsVideoQuartileP100Rate: {
      sql: `${CUBE}.\`ad_group_ad.metrics.video_quartile_p100_rate\``,
      type: `string`,
      title: `Ad Group Ad.metrics.video Quartile P100 Rate`
    },
    
    adGroupAdMetricsVideoQuartileP25Rate: {
      sql: `${CUBE}.\`ad_group_ad.metrics.video_quartile_p25_rate\``,
      type: `string`,
      title: `Ad Group Ad.metrics.video Quartile P25 Rate`
    },
    
    adGroupAdMetricsVideoQuartileP50Rate: {
      sql: `${CUBE}.\`ad_group_ad.metrics.video_quartile_p50_rate\``,
      type: `string`,
      title: `Ad Group Ad.metrics.video Quartile P50 Rate`
    },
    
    adGroupAdMetricsVideoQuartileP75Rate: {
      sql: `${CUBE}.\`ad_group_ad.metrics.video_quartile_p75_rate\``,
      type: `string`,
      title: `Ad Group Ad.metrics.video Quartile P75 Rate`
    },
    
    adGroupAdMetricsVideoViewRate: {
      sql: `${CUBE}.\`ad_group_ad.metrics.video_view_rate\``,
      type: `string`,
      title: `Ad Group Ad.metrics.video View Rate`
    },
    
    adGroupAdSegmentsDate: {
      sql: `${CUBE}.\`ad_group_ad.segments.date\``,
      type: `string`,
      title: `Ad Group Ad.segments.date`
    }
  },
  
  dataSource: `default`
});
