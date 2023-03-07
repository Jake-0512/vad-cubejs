cube(`UserVadminGoogleKeywordView`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_google_keyword_view\``,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [keywordViewAdGroupName, keywordViewAdGroupPercentCpcBidMicros, keywordViewAdGroupResourceName, keywordViewAdGroupCriterionDisplayName, keywordViewAdGroupCriterionResourceName, keywordViewAdGroupCriterionYoutubeVideo, keywordViewCampaignEndDate, keywordViewCampaignName, keywordViewCampaignResourceName, keywordViewKeywordViewResourceName, keywordViewMetricsVideoQuartileP100Rate, keywordViewMetricsVideoQuartileP25Rate, keywordViewMetricsVideoQuartileP50Rate, keywordViewMetricsVideoQuartileP75Rate, keywordViewMetricsVideoViewRate, keywordViewSegmentsDate]
    },
    
    keywordViewMetricsAllConversionsValue: {
      sql: `${CUBE}.\`keyword_view.metrics.all_conversions_value\``,
      type: `sum`,
      title: `Keyword View.metrics.all Conversions Value`
    },
    
    keywordViewMetricsAllConversionsValuePerCost: {
      sql: `${CUBE}.\`keyword_view.metrics.all_conversions_value_per_cost\``,
      type: `sum`,
      title: `Keyword View.metrics.all Conversions Value Per Cost`
    },
    
    keywordViewMetricsAverageCost: {
      sql: `${CUBE}.\`keyword_view.metrics.average_cost\``,
      type: `sum`,
      title: `Keyword View.metrics.average Cost`
    },
    
    keywordViewMetricsConversionsValue: {
      sql: `${CUBE}.\`keyword_view.metrics.conversions_value\``,
      type: `sum`,
      title: `Keyword View.metrics.conversions Value`
    },
    
    keywordViewMetricsConversionsValuePerCost: {
      sql: `${CUBE}.\`keyword_view.metrics.conversions_value_per_cost\``,
      type: `sum`,
      title: `Keyword View.metrics.conversions Value Per Cost`
    },
    
    keywordViewMetricsCurrentModelAttributedConversionsValue: {
      sql: `${CUBE}.\`keyword_view.metrics.current_model_attributed_conversions_value\``,
      type: `sum`,
      title: `Keyword View.metrics.current Model Attributed Conversions Value`
    }
  },
  
  dimensions: {
    _id: {
      sql: `_id`,
      type: `string`,
      primaryKey: true,
    },
    keywordViewAdGroupBaseAdGroup: {
      sql: `${CUBE}.\`keyword_view.ad_group.base_ad_group\``,
      type: `string`,
      title: `Keyword View.ad Group.base Ad Group`
    },
    
    keywordViewAdGroupCampaign: {
      sql: `${CUBE}.\`keyword_view.ad_group.campaign\``,
      type: `string`,
      title: `Keyword View.ad Group.campaign`
    },
    
    keywordViewAdGroupEffectiveTargetRoas: {
      sql: `${CUBE}.\`keyword_view.ad_group.effective_target_roas\``,
      type: `string`,
      title: `Keyword View.ad Group.effective Target Roas`
    },
    
    keywordViewAdGroupName: {
      sql: `${CUBE}.\`keyword_view.ad_group.name\``,
      type: `string`,
      title: `Keyword View.ad Group.name`
    },
    
    keywordViewAdGroupPercentCpcBidMicros: {
      sql: `${CUBE}.\`keyword_view.ad_group.percent_cpc_bid_micros\``,
      type: `string`,
      title: `Keyword View.ad Group.percent Cpc Bid Micros`
    },
    
    keywordViewAdGroupResourceName: {
      sql: `${CUBE}.\`keyword_view.ad_group.resource_name\``,
      type: `string`,
      title: `Keyword View.ad Group.resource Name`
    },
    
    keywordViewAdGroupTargetRoas: {
      sql: `${CUBE}.\`keyword_view.ad_group.target_roas\``,
      type: `string`,
      title: `Keyword View.ad Group.target Roas`
    },
    
    keywordViewAdGroupTrackingUrlTemplate: {
      sql: `${CUBE}.\`keyword_view.ad_group.tracking_url_template\``,
      type: `string`,
      title: `Keyword View.ad Group.tracking Url Template`
    },
    
    keywordViewAdGroupCriterionAdGroup: {
      sql: `${CUBE}.\`keyword_view.ad_group_criterion.ad_group\``,
      type: `string`,
      title: `Keyword View.ad Group Criterion.ad Group`
    },
    
    keywordViewAdGroupCriterionDisplayName: {
      sql: `${CUBE}.\`keyword_view.ad_group_criterion.display_name\``,
      type: `string`,
      title: `Keyword View.ad Group Criterion.display Name`
    },
    
    keywordViewAdGroupCriterionFinalUrlSuffix: {
      sql: `${CUBE}.\`keyword_view.ad_group_criterion.final_url_suffix\``,
      type: `string`,
      title: `Keyword View.ad Group Criterion.final Url Suffix`
    },
    
    keywordViewAdGroupCriterionGender: {
      sql: `${CUBE}.\`keyword_view.ad_group_criterion.gender\``,
      type: `string`,
      title: `Keyword View.ad Group Criterion.gender`
    },
    
    keywordViewAdGroupCriterionIncomeRange: {
      sql: `${CUBE}.\`keyword_view.ad_group_criterion.income_range\``,
      type: `string`,
      title: `Keyword View.ad Group Criterion.income Range`
    },
    
    keywordViewAdGroupCriterionKeywordText: {
      sql: `${CUBE}.\`keyword_view.ad_group_criterion.keyword.text\``,
      type: `string`,
      title: `Keyword View.ad Group Criterion.keyword.text`
    },
    
    keywordViewAdGroupCriterionListingGroup: {
      sql: `${CUBE}.\`keyword_view.ad_group_criterion.listing_group\``,
      type: `string`,
      title: `Keyword View.ad Group Criterion.listing Group`
    },
    
    keywordViewAdGroupCriterionMobileApplication: {
      sql: `${CUBE}.\`keyword_view.ad_group_criterion.mobile_application\``,
      type: `string`,
      title: `Keyword View.ad Group Criterion.mobile Application`
    },
    
    keywordViewAdGroupCriterionParentalStatus: {
      sql: `${CUBE}.\`keyword_view.ad_group_criterion.parental_status\``,
      type: `string`,
      title: `Keyword View.ad Group Criterion.parental Status`
    },
    
    keywordViewAdGroupCriterionPlacement: {
      sql: `${CUBE}.\`keyword_view.ad_group_criterion.placement\``,
      type: `string`,
      title: `Keyword View.ad Group Criterion.placement`
    },
    
    keywordViewAdGroupCriterionPositionEstimates: {
      sql: `${CUBE}.\`keyword_view.ad_group_criterion.position_estimates\``,
      type: `string`,
      title: `Keyword View.ad Group Criterion.position Estimates`
    },
    
    keywordViewAdGroupCriterionQualityInfo: {
      sql: `${CUBE}.\`keyword_view.ad_group_criterion.quality_info\``,
      type: `string`,
      title: `Keyword View.ad Group Criterion.quality Info`
    },
    
    keywordViewAdGroupCriterionResourceName: {
      sql: `${CUBE}.\`keyword_view.ad_group_criterion.resource_name\``,
      type: `string`,
      title: `Keyword View.ad Group Criterion.resource Name`
    },
    
    keywordViewAdGroupCriterionTopic: {
      sql: `${CUBE}.\`keyword_view.ad_group_criterion.topic\``,
      type: `string`,
      title: `Keyword View.ad Group Criterion.topic`
    },
    
    keywordViewAdGroupCriterionTrackingUrlTemplate: {
      sql: `${CUBE}.\`keyword_view.ad_group_criterion.tracking_url_template\``,
      type: `string`,
      title: `Keyword View.ad Group Criterion.tracking Url Template`
    },
    
    keywordViewAdGroupCriterionUserInterest: {
      sql: `${CUBE}.\`keyword_view.ad_group_criterion.user_interest\``,
      type: `string`,
      title: `Keyword View.ad Group Criterion.user Interest`
    },
    
    keywordViewAdGroupCriterionUserList: {
      sql: `${CUBE}.\`keyword_view.ad_group_criterion.user_list\``,
      type: `string`,
      title: `Keyword View.ad Group Criterion.user List`
    },
    
    keywordViewAdGroupCriterionWebpage: {
      sql: `${CUBE}.\`keyword_view.ad_group_criterion.webpage\``,
      type: `string`,
      title: `Keyword View.ad Group Criterion.webpage`
    },
    
    keywordViewAdGroupCriterionYoutubeChannel: {
      sql: `${CUBE}.\`keyword_view.ad_group_criterion.youtube_channel\``,
      type: `string`,
      title: `Keyword View.ad Group Criterion.youtube Channel`
    },
    
    keywordViewAdGroupCriterionYoutubeVideo: {
      sql: `${CUBE}.\`keyword_view.ad_group_criterion.youtube_video\``,
      type: `string`,
      title: `Keyword View.ad Group Criterion.youtube Video`
    },
    
    keywordViewCampaignAppCampaignSetting: {
      sql: `${CUBE}.\`keyword_view.campaign.app_campaign_setting\``,
      type: `string`,
      title: `Keyword View.campaign.app Campaign Setting`
    },
    
    keywordViewCampaignBaseCampaign: {
      sql: `${CUBE}.\`keyword_view.campaign.base_campaign\``,
      type: `string`,
      title: `Keyword View.campaign.base Campaign`
    },
    
    keywordViewCampaignEndDate: {
      sql: `${CUBE}.\`keyword_view.campaign.end_date\``,
      type: `string`,
      title: `Keyword View.campaign.end Date`
    },
    
    keywordViewCampaignHotelSetting: {
      sql: `${CUBE}.\`keyword_view.campaign.hotel_setting\``,
      type: `string`,
      title: `Keyword View.campaign.hotel Setting`
    },
    
    keywordViewCampaignManualCpa: {
      sql: `${CUBE}.\`keyword_view.campaign.manual_cpa\``,
      type: `string`,
      title: `Keyword View.campaign.manual Cpa`
    },
    
    keywordViewCampaignManualCpm: {
      sql: `${CUBE}.\`keyword_view.campaign.manual_cpm\``,
      type: `string`,
      title: `Keyword View.campaign.manual Cpm`
    },
    
    keywordViewCampaignManualCpv: {
      sql: `${CUBE}.\`keyword_view.campaign.manual_cpv\``,
      type: `string`,
      title: `Keyword View.campaign.manual Cpv`
    },
    
    keywordViewCampaignName: {
      sql: `${CUBE}.\`keyword_view.campaign.name\``,
      type: `string`,
      title: `Keyword View.campaign.name`
    },
    
    keywordViewCampaignResourceName: {
      sql: `${CUBE}.\`keyword_view.campaign.resource_name\``,
      type: `string`,
      title: `Keyword View.campaign.resource Name`
    },
    
    keywordViewKeywordViewResourceName: {
      sql: `${CUBE}.\`keyword_view.keyword_view.resource_name\``,
      type: `string`,
      title: `Keyword View.keyword View.resource Name`
    },
    
    keywordViewMetricsActiveViewCpm: {
      sql: `${CUBE}.\`keyword_view.metrics.active_view_cpm\``,
      type: `string`,
      title: `Keyword View.metrics.active View Cpm`
    },
    
    keywordViewMetricsActiveViewCtr: {
      sql: `${CUBE}.\`keyword_view.metrics.active_view_ctr\``,
      type: `string`,
      title: `Keyword View.metrics.active View Ctr`
    },
    
    keywordViewMetricsActiveViewViewability: {
      sql: `${CUBE}.\`keyword_view.metrics.active_view_viewability\``,
      type: `string`,
      title: `Keyword View.metrics.active View Viewability`
    },
    
    keywordViewMetricsAverageCpe: {
      sql: `${CUBE}.\`keyword_view.metrics.average_cpe\``,
      type: `string`,
      title: `Keyword View.metrics.average Cpe`
    },
    
    keywordViewMetricsAverageCpv: {
      sql: `${CUBE}.\`keyword_view.metrics.average_cpv\``,
      type: `string`,
      title: `Keyword View.metrics.average Cpv`
    },
    
    keywordViewMetricsAveragePageViews: {
      sql: `${CUBE}.\`keyword_view.metrics.average_page_views\``,
      type: `string`,
      title: `Keyword View.metrics.average Page Views`
    },
    
    keywordViewMetricsAverageTimeOnSite: {
      sql: `${CUBE}.\`keyword_view.metrics.average_time_on_site\``,
      type: `string`,
      title: `Keyword View.metrics.average Time on Site`
    },
    
    keywordViewMetricsBounceRate: {
      sql: `${CUBE}.\`keyword_view.metrics.bounce_rate\``,
      type: `string`,
      title: `Keyword View.metrics.bounce Rate`
    },
    
    keywordViewMetricsEngagementRate: {
      sql: `${CUBE}.\`keyword_view.metrics.engagement_rate\``,
      type: `string`,
      title: `Keyword View.metrics.engagement Rate`
    },
    
    keywordViewMetricsSearchClickShare: {
      sql: `${CUBE}.\`keyword_view.metrics.search_click_share\``,
      type: `string`,
      title: `Keyword View.metrics.search Click Share`
    },
    
    keywordViewMetricsVideoQuartileP100Rate: {
      sql: `${CUBE}.\`keyword_view.metrics.video_quartile_p100_rate\``,
      type: `string`,
      title: `Keyword View.metrics.video Quartile P100 Rate`
    },
    
    keywordViewMetricsVideoQuartileP25Rate: {
      sql: `${CUBE}.\`keyword_view.metrics.video_quartile_p25_rate\``,
      type: `string`,
      title: `Keyword View.metrics.video Quartile P25 Rate`
    },
    
    keywordViewMetricsVideoQuartileP50Rate: {
      sql: `${CUBE}.\`keyword_view.metrics.video_quartile_p50_rate\``,
      type: `string`,
      title: `Keyword View.metrics.video Quartile P50 Rate`
    },
    
    keywordViewMetricsVideoQuartileP75Rate: {
      sql: `${CUBE}.\`keyword_view.metrics.video_quartile_p75_rate\``,
      type: `string`,
      title: `Keyword View.metrics.video Quartile P75 Rate`
    },
    
    keywordViewMetricsVideoViewRate: {
      sql: `${CUBE}.\`keyword_view.metrics.video_view_rate\``,
      type: `string`,
      title: `Keyword View.metrics.video View Rate`
    },
    
    keywordViewSegmentsDate: {
      sql: `${CUBE}.\`keyword_view.segments.date\``,
      type: `string`,
      title: `Keyword View.segments.date`
    }
  },
  
  dataSource: `default`
});
