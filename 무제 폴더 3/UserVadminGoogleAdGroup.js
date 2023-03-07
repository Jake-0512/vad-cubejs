cube(`UserVadminGoogleAdGroup`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_google_ad_group\``,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [adGroupAdGroupEffectiveCpcBidMicros, adGroupAdGroupName, adGroupAdGroupPercentCpcBidMicros, adGroupAdGroupResourceName, adGroupCampaignEndDate, adGroupCampaignName, adGroupCampaignResourceName, adGroupCampaignStartDate, adGroupCustomerDescriptiveName, adGroupCustomerResourceName, adGroupMetricsVideoQuartileP100Rate, adGroupMetricsVideoQuartileP25Rate, adGroupMetricsVideoQuartileP50Rate, adGroupMetricsVideoQuartileP75Rate, adGroupMetricsVideoViewRate, adGroupSegmentsDate]
    },
    
    adGroupMetricsAllConversionsValue: {
      sql: `${CUBE}.\`ad_group.metrics.all_conversions_value\``,
      type: `sum`,
      title: `Ad Group.metrics.all Conversions Value`
    },
    
    adGroupMetricsAverageCost: {
      sql: `${CUBE}.\`ad_group.metrics.average_cost\``,
      type: `sum`,
      title: `Ad Group.metrics.average Cost`
    },
    
    adGroupMetricsConversionsValue: {
      sql: `${CUBE}.\`ad_group.metrics.conversions_value\``,
      type: `sum`,
      title: `Ad Group.metrics.conversions Value`
    }
  },
  
  dimensions: {
    _id: {
      sql: `_id`,
      type: `string`,
      primaryKey: true,
    },
    adGroupAdGroupAudienceSetting: {
      sql: `${CUBE}.\`ad_group.ad_group.audience_setting\``,
      type: `string`,
      title: `Ad Group.ad Group.audience Setting`
    },
    
    adGroupAdGroupBaseAdGroup: {
      sql: `${CUBE}.\`ad_group.ad_group.base_ad_group\``,
      type: `string`,
      title: `Ad Group.ad Group.base Ad Group`
    },
    
    adGroupAdGroupCampaign: {
      sql: `${CUBE}.\`ad_group.ad_group.campaign\``,
      type: `string`,
      title: `Ad Group.ad Group.campaign`
    },
    
    adGroupAdGroupEffectiveCpcBidMicros: {
      sql: `${CUBE}.\`ad_group.ad_group.effective_cpc_bid_micros\``,
      type: `string`,
      title: `Ad Group.ad Group.effective Cpc Bid Micros`
    },
    
    adGroupAdGroupEffectiveTargetRoas: {
      sql: `${CUBE}.\`ad_group.ad_group.effective_target_roas\``,
      type: `string`,
      title: `Ad Group.ad Group.effective Target Roas`
    },
    
    adGroupAdGroupExplorerAutoOptimizerSetting: {
      sql: `${CUBE}.\`ad_group.ad_group.explorer_auto_optimizer_setting\``,
      type: `string`,
      title: `Ad Group.ad Group.explorer Auto Optimizer Setting`
    },
    
    adGroupAdGroupFinalUrlSuffix: {
      sql: `${CUBE}.\`ad_group.ad_group.final_url_suffix\``,
      type: `string`,
      title: `Ad Group.ad Group.final Url Suffix`
    },
    
    adGroupAdGroupName: {
      sql: `${CUBE}.\`ad_group.ad_group.name\``,
      type: `string`,
      title: `Ad Group.ad Group.name`
    },
    
    adGroupAdGroupPercentCpcBidMicros: {
      sql: `${CUBE}.\`ad_group.ad_group.percent_cpc_bid_micros\``,
      type: `string`,
      title: `Ad Group.ad Group.percent Cpc Bid Micros`
    },
    
    adGroupAdGroupResourceName: {
      sql: `${CUBE}.\`ad_group.ad_group.resource_name\``,
      type: `string`,
      title: `Ad Group.ad Group.resource Name`
    },
    
    adGroupAdGroupTargetRoas: {
      sql: `${CUBE}.\`ad_group.ad_group.target_roas\``,
      type: `string`,
      title: `Ad Group.ad Group.target Roas`
    },
    
    adGroupAdGroupTrackingUrlTemplate: {
      sql: `${CUBE}.\`ad_group.ad_group.tracking_url_template\``,
      type: `string`,
      title: `Ad Group.ad Group.tracking Url Template`
    },
    
    adGroupCampaignBaseCampaign: {
      sql: `${CUBE}.\`ad_group.campaign.base_campaign\``,
      type: `string`,
      title: `Ad Group.campaign.base Campaign`
    },
    
    adGroupCampaignCampaignBudget: {
      sql: `${CUBE}.\`ad_group.campaign.campaign_budget\``,
      type: `string`,
      title: `Ad Group.campaign.campaign Budget`
    },
    
    adGroupCampaignCampaignGroup: {
      sql: `${CUBE}.\`ad_group.campaign.campaign_group\``,
      type: `string`,
      title: `Ad Group.campaign.campaign Group`
    },
    
    adGroupCampaignEndDate: {
      sql: `${CUBE}.\`ad_group.campaign.end_date\``,
      type: `string`,
      title: `Ad Group.campaign.end Date`
    },
    
    adGroupCampaignFinalUrlSuffix: {
      sql: `${CUBE}.\`ad_group.campaign.final_url_suffix\``,
      type: `string`,
      title: `Ad Group.campaign.final Url Suffix`
    },
    
    adGroupCampaignManualCpa: {
      sql: `${CUBE}.\`ad_group.campaign.manual_cpa\``,
      type: `string`,
      title: `Ad Group.campaign.manual Cpa`
    },
    
    adGroupCampaignManualCpm: {
      sql: `${CUBE}.\`ad_group.campaign.manual_cpm\``,
      type: `string`,
      title: `Ad Group.campaign.manual Cpm`
    },
    
    adGroupCampaignManualCpv: {
      sql: `${CUBE}.\`ad_group.campaign.manual_cpv\``,
      type: `string`,
      title: `Ad Group.campaign.manual Cpv`
    },
    
    adGroupCampaignMaximizeConversionValue: {
      sql: `${CUBE}.\`ad_group.campaign.maximize_conversion_value\``,
      type: `string`,
      title: `Ad Group.campaign.maximize Conversion Value`
    },
    
    adGroupCampaignName: {
      sql: `${CUBE}.\`ad_group.campaign.name\``,
      type: `string`,
      title: `Ad Group.campaign.name`
    },
    
    adGroupCampaignResourceName: {
      sql: `${CUBE}.\`ad_group.campaign.resource_name\``,
      type: `string`,
      title: `Ad Group.campaign.resource Name`
    },
    
    adGroupCampaignStartDate: {
      sql: `${CUBE}.\`ad_group.campaign.start_date\``,
      type: `string`,
      title: `Ad Group.campaign.start Date`
    },
    
    adGroupCampaignTargetCpa: {
      sql: `${CUBE}.\`ad_group.campaign.target_cpa\``,
      type: `string`,
      title: `Ad Group.campaign.target Cpa`
    },
    
    adGroupCampaignTargetCpm: {
      sql: `${CUBE}.\`ad_group.campaign.target_cpm\``,
      type: `string`,
      title: `Ad Group.campaign.target Cpm`
    },
    
    adGroupCampaignTargetRoas: {
      sql: `${CUBE}.\`ad_group.campaign.target_roas\``,
      type: `string`,
      title: `Ad Group.campaign.target Roas`
    },
    
    adGroupCampaignTrackingUrlTemplate: {
      sql: `${CUBE}.\`ad_group.campaign.tracking_url_template\``,
      type: `string`,
      title: `Ad Group.campaign.tracking Url Template`
    },
    
    adGroupCustomerCurrencyCode: {
      sql: `${CUBE}.\`ad_group.customer.currency_code\``,
      type: `string`,
      title: `Ad Group.customer.currency Code`
    },
    
    adGroupCustomerDescriptiveName: {
      sql: `${CUBE}.\`ad_group.customer.descriptive_name\``,
      type: `string`,
      title: `Ad Group.customer.descriptive Name`
    },
    
    adGroupCustomerResourceName: {
      sql: `${CUBE}.\`ad_group.customer.resource_name\``,
      type: `string`,
      title: `Ad Group.customer.resource Name`
    },
    
    adGroupMetricsActiveViewCpm: {
      sql: `${CUBE}.\`ad_group.metrics.active_view_cpm\``,
      type: `string`,
      title: `Ad Group.metrics.active View Cpm`
    },
    
    adGroupMetricsActiveViewCtr: {
      sql: `${CUBE}.\`ad_group.metrics.active_view_ctr\``,
      type: `string`,
      title: `Ad Group.metrics.active View Ctr`
    },
    
    adGroupMetricsAverageCpe: {
      sql: `${CUBE}.\`ad_group.metrics.average_cpe\``,
      type: `string`,
      title: `Ad Group.metrics.average Cpe`
    },
    
    adGroupMetricsAverageCpv: {
      sql: `${CUBE}.\`ad_group.metrics.average_cpv\``,
      type: `string`,
      title: `Ad Group.metrics.average Cpv`
    },
    
    adGroupMetricsAveragePageViews: {
      sql: `${CUBE}.\`ad_group.metrics.average_page_views\``,
      type: `string`,
      title: `Ad Group.metrics.average Page Views`
    },
    
    adGroupMetricsBounceRate: {
      sql: `${CUBE}.\`ad_group.metrics.bounce_rate\``,
      type: `string`,
      title: `Ad Group.metrics.bounce Rate`
    },
    
    adGroupMetricsEngagementRate: {
      sql: `${CUBE}.\`ad_group.metrics.engagement_rate\``,
      type: `string`,
      title: `Ad Group.metrics.engagement Rate`
    },
    
    adGroupMetricsPhoneThroughRate: {
      sql: `${CUBE}.\`ad_group.metrics.phone_through_rate\``,
      type: `string`,
      title: `Ad Group.metrics.phone Through Rate`
    },
    
    adGroupMetricsRelativeCtr: {
      sql: `${CUBE}.\`ad_group.metrics.relative_ctr\``,
      type: `string`,
      title: `Ad Group.metrics.relative Ctr`
    },
    
    adGroupMetricsVideoQuartileP100Rate: {
      sql: `${CUBE}.\`ad_group.metrics.video_quartile_p100_rate\``,
      type: `string`,
      title: `Ad Group.metrics.video Quartile P100 Rate`
    },
    
    adGroupMetricsVideoQuartileP25Rate: {
      sql: `${CUBE}.\`ad_group.metrics.video_quartile_p25_rate\``,
      type: `string`,
      title: `Ad Group.metrics.video Quartile P25 Rate`
    },
    
    adGroupMetricsVideoQuartileP50Rate: {
      sql: `${CUBE}.\`ad_group.metrics.video_quartile_p50_rate\``,
      type: `string`,
      title: `Ad Group.metrics.video Quartile P50 Rate`
    },
    
    adGroupMetricsVideoQuartileP75Rate: {
      sql: `${CUBE}.\`ad_group.metrics.video_quartile_p75_rate\``,
      type: `string`,
      title: `Ad Group.metrics.video Quartile P75 Rate`
    },
    
    adGroupMetricsVideoViewRate: {
      sql: `${CUBE}.\`ad_group.metrics.video_view_rate\``,
      type: `string`,
      title: `Ad Group.metrics.video View Rate`
    },
    
    adGroupSegmentsDate: {
      sql: `${CUBE}.\`ad_group.segments.date\``,
      type: `string`,
      title: `Ad Group.segments.date`
    }
  },
  
  dataSource: `default`
});
