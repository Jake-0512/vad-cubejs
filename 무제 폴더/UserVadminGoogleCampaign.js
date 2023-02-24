cube(`UserVadminGoogleCampaign`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_google_campaign\``,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [campaignCampaignAccessibleBiddingStrategy, campaignCampaignBiddingStrategy, campaignCampaignEndDate, campaignCampaignName, campaignCampaignRealTimeBiddingSetting, campaignCampaignResourceName, campaignCampaignStartDate, campaignCampaignBudgetName, campaignCampaignBudgetResourceName, campaignCustomerDescriptiveName, campaignCustomerResourceName, campaignMetricsVideoQuartileP100Rate, campaignMetricsVideoQuartileP25Rate, campaignMetricsVideoQuartileP50Rate, campaignMetricsVideoQuartileP75Rate, campaignMetricsVideoViewRate, campaignSegmentsDate]
    },
    
    campaignCampaignBudgetReferenceCount: {
      sql: `${CUBE}.\`campaign.campaign_budget.reference_count\``,
      type: `sum`,
      title: `Campaign.campaign Budget.reference Count`
    },
    
    campaignCustomerTestAccount: {
      sql: `${CUBE}.\`campaign.customer.test_account\``,
      type: `sum`,
      title: `Campaign.customer.test Account`
    },
    
    campaignMetricsAllConversionsValue: {
      sql: `${CUBE}.\`campaign.metrics.all_conversions_value\``,
      type: `sum`,
      title: `Campaign.metrics.all Conversions Value`
    },
    
    campaignMetricsAverageCost: {
      sql: `${CUBE}.\`campaign.metrics.average_cost\``,
      type: `sum`,
      title: `Campaign.metrics.average Cost`
    },
    
    campaignMetricsConversionsValue: {
      sql: `${CUBE}.\`campaign.metrics.conversions_value\``,
      type: `sum`,
      title: `Campaign.metrics.conversions Value`
    },
    
    campaignMetricsCurrentModelAttributedConversionsValue: {
      sql: `${CUBE}.\`campaign.metrics.current_model_attributed_conversions_value\``,
      type: `sum`,
      title: `Campaign.metrics.current Model Attributed Conversions Value`
    },
    
    campaignMetricsCurrentModelAttributedConversionsValuePerCost: {
      sql: `${CUBE}.\`campaign.metrics.current_model_attributed_conversions_value_per_cost\``,
      type: `sum`,
      title: `Campaign.metrics.current Model Attributed Conversions Value Per Cost`
    }
  },
  
  dimensions: {
    _id: {
      sql: `_id`,
      type: `string`,
      primaryKey: true,
    },
    campaignCampaignAccessibleBiddingStrategy: {
      sql: `${CUBE}.\`campaign.campaign.accessible_bidding_strategy\``,
      type: `string`,
      title: `Campaign.campaign.accessible Bidding Strategy`
    },
    
    campaignCampaignAppCampaignSetting: {
      sql: `${CUBE}.\`campaign.campaign.app_campaign_setting\``,
      type: `string`,
      title: `Campaign.campaign.app Campaign Setting`
    },
    
    campaignCampaignAudienceSetting: {
      sql: `${CUBE}.\`campaign.campaign.audience_setting\``,
      type: `string`,
      title: `Campaign.campaign.audience Setting`
    },
    
    campaignCampaignBaseCampaign: {
      sql: `${CUBE}.\`campaign.campaign.base_campaign\``,
      type: `string`,
      title: `Campaign.campaign.base Campaign`
    },
    
    campaignCampaignBiddingStrategy: {
      sql: `${CUBE}.\`campaign.campaign.bidding_strategy\``,
      type: `string`,
      title: `Campaign.campaign.bidding Strategy`
    },
    
    campaignCampaignCampaignBudget: {
      sql: `${CUBE}.\`campaign.campaign.campaign_budget\``,
      type: `string`,
      title: `Campaign.campaign.campaign Budget`
    },
    
    campaignCampaignCampaignGroup: {
      sql: `${CUBE}.\`campaign.campaign.campaign_group\``,
      type: `string`,
      title: `Campaign.campaign.campaign Group`
    },
    
    campaignCampaignCommission: {
      sql: `${CUBE}.\`campaign.campaign.commission\``,
      type: `string`,
      title: `Campaign.campaign.commission`
    },
    
    campaignCampaignDynamicSearchAdsSetting: {
      sql: `${CUBE}.\`campaign.campaign.dynamic_search_ads_setting\``,
      type: `string`,
      title: `Campaign.campaign.dynamic Search Ads Setting`
    },
    
    campaignCampaignEndDate: {
      sql: `${CUBE}.\`campaign.campaign.end_date\``,
      type: `string`,
      title: `Campaign.campaign.end Date`
    },
    
    campaignCampaignFinalUrlSuffix: {
      sql: `${CUBE}.\`campaign.campaign.final_url_suffix\``,
      type: `string`,
      title: `Campaign.campaign.final Url Suffix`
    },
    
    campaignCampaignHotelSetting: {
      sql: `${CUBE}.\`campaign.campaign.hotel_setting\``,
      type: `string`,
      title: `Campaign.campaign.hotel Setting`
    },
    
    campaignCampaignLocalCampaignSetting: {
      sql: `${CUBE}.\`campaign.campaign.local_campaign_setting\``,
      type: `string`,
      title: `Campaign.campaign.local Campaign Setting`
    },
    
    campaignCampaignLocalServicesCampaignSettings: {
      sql: `${CUBE}.\`campaign.campaign.local_services_campaign_settings\``,
      type: `string`,
      title: `Campaign.campaign.local Services Campaign Settings`
    },
    
    campaignCampaignManualCpa: {
      sql: `${CUBE}.\`campaign.campaign.manual_cpa\``,
      type: `string`,
      title: `Campaign.campaign.manual Cpa`
    },
    
    campaignCampaignManualCpc: {
      sql: `${CUBE}.\`campaign.campaign.manual_cpc\``,
      type: `string`,
      title: `Campaign.campaign.manual Cpc`
    },
    
    campaignCampaignManualCpm: {
      sql: `${CUBE}.\`campaign.campaign.manual_cpm\``,
      type: `string`,
      title: `Campaign.campaign.manual Cpm`
    },
    
    campaignCampaignManualCpv: {
      sql: `${CUBE}.\`campaign.campaign.manual_cpv\``,
      type: `string`,
      title: `Campaign.campaign.manual Cpv`
    },
    
    campaignCampaignMaximizeConversionValue: {
      sql: `${CUBE}.\`campaign.campaign.maximize_conversion_value\``,
      type: `string`,
      title: `Campaign.campaign.maximize Conversion Value`
    },
    
    campaignCampaignMaximizeConversions: {
      sql: `${CUBE}.\`campaign.campaign.maximize_conversions\``,
      type: `string`,
      title: `Campaign.campaign.maximize Conversions`
    },
    
    campaignCampaignName: {
      sql: `${CUBE}.\`campaign.campaign.name\``,
      type: `string`,
      title: `Campaign.campaign.name`
    },
    
    campaignCampaignOptimizationGoalSetting: {
      sql: `${CUBE}.\`campaign.campaign.optimization_goal_setting\``,
      type: `string`,
      title: `Campaign.campaign.optimization Goal Setting`
    },
    
    campaignCampaignPercentCpc: {
      sql: `${CUBE}.\`campaign.campaign.percent_cpc\``,
      type: `string`,
      title: `Campaign.campaign.percent Cpc`
    },
    
    campaignCampaignPerformanceMaxUpgrade: {
      sql: `${CUBE}.\`campaign.campaign.performance_max_upgrade\``,
      type: `string`,
      title: `Campaign.campaign.performance Max Upgrade`
    },
    
    campaignCampaignRealTimeBiddingSetting: {
      sql: `${CUBE}.\`campaign.campaign.real_time_bidding_setting\``,
      type: `string`,
      title: `Campaign.campaign.real Time Bidding Setting`
    },
    
    campaignCampaignResourceName: {
      sql: `${CUBE}.\`campaign.campaign.resource_name\``,
      type: `string`,
      title: `Campaign.campaign.resource Name`
    },
    
    campaignCampaignSelectiveOptimization: {
      sql: `${CUBE}.\`campaign.campaign.selective_optimization\``,
      type: `string`,
      title: `Campaign.campaign.selective Optimization`
    },
    
    campaignCampaignShoppingSetting: {
      sql: `${CUBE}.\`campaign.campaign.shopping_setting\``,
      type: `string`,
      title: `Campaign.campaign.shopping Setting`
    },
    
    campaignCampaignStartDate: {
      sql: `${CUBE}.\`campaign.campaign.start_date\``,
      type: `string`,
      title: `Campaign.campaign.start Date`
    },
    
    campaignCampaignTargetCpa: {
      sql: `${CUBE}.\`campaign.campaign.target_cpa\``,
      type: `string`,
      title: `Campaign.campaign.target Cpa`
    },
    
    campaignCampaignTargetCpm: {
      sql: `${CUBE}.\`campaign.campaign.target_cpm\``,
      type: `string`,
      title: `Campaign.campaign.target Cpm`
    },
    
    campaignCampaignTargetImpressionShare: {
      sql: `${CUBE}.\`campaign.campaign.target_impression_share\``,
      type: `string`,
      title: `Campaign.campaign.target Impression Share`
    },
    
    campaignCampaignTargetRoas: {
      sql: `${CUBE}.\`campaign.campaign.target_roas\``,
      type: `string`,
      title: `Campaign.campaign.target Roas`
    },
    
    campaignCampaignTargetSpend: {
      sql: `${CUBE}.\`campaign.campaign.target_spend\``,
      type: `string`,
      title: `Campaign.campaign.target Spend`
    },
    
    campaignCampaignTrackingSetting: {
      sql: `${CUBE}.\`campaign.campaign.tracking_setting\``,
      type: `string`,
      title: `Campaign.campaign.tracking Setting`
    },
    
    campaignCampaignTrackingUrlTemplate: {
      sql: `${CUBE}.\`campaign.campaign.tracking_url_template\``,
      type: `string`,
      title: `Campaign.campaign.tracking Url Template`
    },
    
    campaignCampaignUrlExpansionOptOut: {
      sql: `${CUBE}.\`campaign.campaign.url_expansion_opt_out\``,
      type: `string`,
      title: `Campaign.campaign.url Expansion Opt out`
    },
    
    campaignCampaignVanityPharma: {
      sql: `${CUBE}.\`campaign.campaign.vanity_pharma\``,
      type: `string`,
      title: `Campaign.campaign.vanity Pharma`
    },
    
    campaignCampaignBudgetName: {
      sql: `${CUBE}.\`campaign.campaign_budget.name\``,
      type: `string`,
      title: `Campaign.campaign Budget.name`
    },
    
    campaignCampaignBudgetRecommendedBudgetEstimatedChangeWeeklyClicks: {
      sql: `${CUBE}.\`campaign.campaign_budget.recommended_budget_estimated_change_weekly_clicks\``,
      type: `string`,
      title: `Campaign.campaign Budget.recommended Budget Estimated Change Weekly Clicks`
    },
    
    campaignCampaignBudgetRecommendedBudgetEstimatedChangeWeeklyInteractions: {
      sql: `${CUBE}.\`campaign.campaign_budget.recommended_budget_estimated_change_weekly_interactions\``,
      type: `string`,
      title: `Campaign.campaign Budget.recommended Budget Estimated Change Weekly Interactions`
    },
    
    campaignCampaignBudgetRecommendedBudgetEstimatedChangeWeeklyViews: {
      sql: `${CUBE}.\`campaign.campaign_budget.recommended_budget_estimated_change_weekly_views\``,
      type: `string`,
      title: `Campaign.campaign Budget.recommended Budget Estimated Change Weekly Views`
    },
    
    campaignCampaignBudgetResourceName: {
      sql: `${CUBE}.\`campaign.campaign_budget.resource_name\``,
      type: `string`,
      title: `Campaign.campaign Budget.resource Name`
    },
    
    campaignCustomerDescriptiveName: {
      sql: `${CUBE}.\`campaign.customer.descriptive_name\``,
      type: `string`,
      title: `Campaign.customer.descriptive Name`
    },
    
    campaignCustomerResourceName: {
      sql: `${CUBE}.\`campaign.customer.resource_name\``,
      type: `string`,
      title: `Campaign.customer.resource Name`
    },
    
    campaignCustomerTimeZone: {
      sql: `${CUBE}.\`campaign.customer.time_zone\``,
      type: `string`,
      title: `Campaign.customer.time Zone`
    },
    
    campaignCustomerTrackingUrlTemplate: {
      sql: `${CUBE}.\`campaign.customer.tracking_url_template\``,
      type: `string`,
      title: `Campaign.customer.tracking Url Template`
    },
    
    campaignMetricsActiveViewCpm: {
      sql: `${CUBE}.\`campaign.metrics.active_view_cpm\``,
      type: `string`,
      title: `Campaign.metrics.active View Cpm`
    },
    
    campaignMetricsActiveViewCtr: {
      sql: `${CUBE}.\`campaign.metrics.active_view_ctr\``,
      type: `string`,
      title: `Campaign.metrics.active View Ctr`
    },
    
    campaignMetricsActiveViewViewability: {
      sql: `${CUBE}.\`campaign.metrics.active_view_viewability\``,
      type: `string`,
      title: `Campaign.metrics.active View Viewability`
    },
    
    campaignMetricsAverageCpe: {
      sql: `${CUBE}.\`campaign.metrics.average_cpe\``,
      type: `string`,
      title: `Campaign.metrics.average Cpe`
    },
    
    campaignMetricsAverageCpv: {
      sql: `${CUBE}.\`campaign.metrics.average_cpv\``,
      type: `string`,
      title: `Campaign.metrics.average Cpv`
    },
    
    campaignMetricsAveragePageViews: {
      sql: `${CUBE}.\`campaign.metrics.average_page_views\``,
      type: `string`,
      title: `Campaign.metrics.average Page Views`
    },
    
    campaignMetricsAverageTimeOnSite: {
      sql: `${CUBE}.\`campaign.metrics.average_time_on_site\``,
      type: `string`,
      title: `Campaign.metrics.average Time on Site`
    },
    
    campaignMetricsBounceRate: {
      sql: `${CUBE}.\`campaign.metrics.bounce_rate\``,
      type: `string`,
      title: `Campaign.metrics.bounce Rate`
    },
    
    campaignMetricsContentBudgetLostImpressionShare: {
      sql: `${CUBE}.\`campaign.metrics.content_budget_lost_impression_share\``,
      type: `string`,
      title: `Campaign.metrics.content Budget Lost Impression Share`
    },
    
    campaignMetricsContentImpressionShare: {
      sql: `${CUBE}.\`campaign.metrics.content_impression_share\``,
      type: `string`,
      title: `Campaign.metrics.content Impression Share`
    },
    
    campaignMetricsContentRankLostImpressionShare: {
      sql: `${CUBE}.\`campaign.metrics.content_rank_lost_impression_share\``,
      type: `string`,
      title: `Campaign.metrics.content Rank Lost Impression Share`
    },
    
    campaignMetricsEngagementRate: {
      sql: `${CUBE}.\`campaign.metrics.engagement_rate\``,
      type: `string`,
      title: `Campaign.metrics.engagement Rate`
    },
    
    campaignMetricsPercentNewVisitors: {
      sql: `${CUBE}.\`campaign.metrics.percent_new_visitors\``,
      type: `string`,
      title: `Campaign.metrics.percent New Visitors`
    },
    
    campaignMetricsPhoneThroughRate: {
      sql: `${CUBE}.\`campaign.metrics.phone_through_rate\``,
      type: `string`,
      title: `Campaign.metrics.phone Through Rate`
    },
    
    campaignMetricsRelativeCtr: {
      sql: `${CUBE}.\`campaign.metrics.relative_ctr\``,
      type: `string`,
      title: `Campaign.metrics.relative Ctr`
    },
    
    campaignMetricsSearchAbsoluteTopImpressionShare: {
      sql: `${CUBE}.\`campaign.metrics.search_absolute_top_impression_share\``,
      type: `string`,
      title: `Campaign.metrics.search Absolute Top Impression Share`
    },
    
    campaignMetricsSearchBudgetLostAbsoluteTopImpressionShare: {
      sql: `${CUBE}.\`campaign.metrics.search_budget_lost_absolute_top_impression_share\``,
      type: `string`,
      title: `Campaign.metrics.search Budget Lost Absolute Top Impression Share`
    },
    
    campaignMetricsSearchBudgetLostImpressionShare: {
      sql: `${CUBE}.\`campaign.metrics.search_budget_lost_impression_share\``,
      type: `string`,
      title: `Campaign.metrics.search Budget Lost Impression Share`
    },
    
    campaignMetricsSearchBudgetLostTopImpressionShare: {
      sql: `${CUBE}.\`campaign.metrics.search_budget_lost_top_impression_share\``,
      type: `string`,
      title: `Campaign.metrics.search Budget Lost Top Impression Share`
    },
    
    campaignMetricsSearchClickShare: {
      sql: `${CUBE}.\`campaign.metrics.search_click_share\``,
      type: `string`,
      title: `Campaign.metrics.search Click Share`
    },
    
    campaignMetricsSearchExactMatchImpressionShare: {
      sql: `${CUBE}.\`campaign.metrics.search_exact_match_impression_share\``,
      type: `string`,
      title: `Campaign.metrics.search Exact Match Impression Share`
    },
    
    campaignMetricsSearchImpressionShare: {
      sql: `${CUBE}.\`campaign.metrics.search_impression_share\``,
      type: `string`,
      title: `Campaign.metrics.search Impression Share`
    },
    
    campaignMetricsVideoQuartileP100Rate: {
      sql: `${CUBE}.\`campaign.metrics.video_quartile_p100_rate\``,
      type: `string`,
      title: `Campaign.metrics.video Quartile P100 Rate`
    },
    
    campaignMetricsVideoQuartileP25Rate: {
      sql: `${CUBE}.\`campaign.metrics.video_quartile_p25_rate\``,
      type: `string`,
      title: `Campaign.metrics.video Quartile P25 Rate`
    },
    
    campaignMetricsVideoQuartileP50Rate: {
      sql: `${CUBE}.\`campaign.metrics.video_quartile_p50_rate\``,
      type: `string`,
      title: `Campaign.metrics.video Quartile P50 Rate`
    },
    
    campaignMetricsVideoQuartileP75Rate: {
      sql: `${CUBE}.\`campaign.metrics.video_quartile_p75_rate\``,
      type: `string`,
      title: `Campaign.metrics.video Quartile P75 Rate`
    },
    
    campaignMetricsVideoViewRate: {
      sql: `${CUBE}.\`campaign.metrics.video_view_rate\``,
      type: `string`,
      title: `Campaign.metrics.video View Rate`
    },
    
    campaignSegmentsDate: {
      sql: `${CUBE}.\`campaign.segments.date\``,
      type: `string`,
      title: `Campaign.segments.date`
    }
  },
  
  dataSource: `default`
});
