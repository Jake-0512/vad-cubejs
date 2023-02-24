cube(`UserVadminFacebookAdsets`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_adsets\``,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [adsetsChangesAccountId, adsetsChangesCampaignId, adsetsChangesCampaignId, adsetsChangesCreatedTime, adsetsChangesId, adsetsChangesInstagramActorId, adsetsChangesName, adsetsChangesPromotedObjectApplicationId, adsetsChangesPromotedObjectPageId, adsetsChangesPromotedObjectPixelId, adsetsChangesSourceAdsetId, adsetsChangesSourceAdsetId, adsetsChangesUpdatedTime, adsetsDataAccountId, adsetsDataCampaignId, adsetsDataCampaignId, adsetsDataCreatedTime, adsetsDataId, adsetsDataInstagramActorId, adsetsDataName, adsetsDataPromotedObjectApplicationId, adsetsDataPromotedObjectPageId, adsetsDataPromotedObjectPixelId, adsetsDataSourceAdsetId, adsetsDataSourceAdsetId, adsetsDataUpdatedTime, adsetsParentid, adsetsAccountId, adsetsAssetFeedId, adsetsBidAdjustments, adsetsBidAmount, adsetsBidConstraints, adsetsBidInfo, adsetsBidStrategy, adsetsCampaignId, adsetsCampaignId, adsetsCreatedTime, adsetsId, adsetsInstagramActorId, adsetsName, adsetsPromotedObjectApplicationId, adsetsPromotedObjectPageId, adsetsPromotedObjectPixelId, adsetsRfPredictionId, adsetsSourceAdsetId, adsetsSourceAdsetId, adsetsTimeBasedAdRotationIdBlocks, adsetsUpdatedTime]
    }
  },
  
  dimensions: {
    _id: {
      sql: `_id`,
      type: `string`,
      primaryKey: true,
    },
    adsetsApiAccesstoken: {
      sql: `${CUBE}.\`adsets._api.accessToken\``,
      type: `string`,
      title: `Adsets. Api.accesstoken`
    },
    
    adsetsApiLocale: {
      sql: `${CUBE}.\`adsets._api.locale\``,
      type: `string`,
      title: `Adsets. Api.locale`
    },
    
    adsetsChangesAccountId: {
      sql: `${CUBE}.\`adsets._changes.account_id\``,
      type: `string`,
      title: `Adsets. Changes.account Id`
    },
    
    adsetsChangesBillingEvent: {
      sql: `${CUBE}.\`adsets._changes.billing_event\``,
      type: `string`,
      title: `Adsets. Changes.billing Event`
    },
    
    adsetsChangesCampaignId: {
      sql: `${CUBE}.\`adsets._changes.campaign_id\``,
      type: `string`,
      title: `Adsets. Changes.campaign Id`
    },
    
    adsetsChangesCreatedTime: {
      sql: `${CUBE}.\`adsets._changes.created_time\``,
      type: `string`,
      title: `Adsets. Changes.created Time`
    },
    
    adsetsChangesDailyBudget: {
      sql: `${CUBE}.\`adsets._changes.daily_budget\``,
      type: `string`,
      title: `Adsets. Changes.daily Budget`
    },
    
    adsetsChangesEndTime: {
      sql: `${CUBE}.\`adsets._changes.end_time\``,
      type: `string`,
      title: `Adsets. Changes.end Time`
    },
    
    adsetsChangesId: {
      sql: `${CUBE}.\`adsets._changes.id\``,
      type: `string`,
      title: `Adsets. Changes.id`
    },
    
    adsetsChangesInstagramActorId: {
      sql: `${CUBE}.\`adsets._changes.instagram_actor_id\``,
      type: `string`,
      title: `Adsets. Changes.instagram Actor Id`
    },
    
    adsetsChangesLifetimeBudget: {
      sql: `${CUBE}.\`adsets._changes.lifetime_budget\``,
      type: `string`,
      title: `Adsets. Changes.lifetime Budget`
    },
    
    adsetsChangesName: {
      sql: `${CUBE}.\`adsets._changes.name\``,
      type: `string`,
      title: `Adsets. Changes.name`
    },
    
    adsetsChangesOptimizationGoal: {
      sql: `${CUBE}.\`adsets._changes.optimization_goal\``,
      type: `string`,
      title: `Adsets. Changes.optimization Goal`
    },
    
    adsetsChangesOptimizationSubEvent: {
      sql: `${CUBE}.\`adsets._changes.optimization_sub_event\``,
      type: `string`,
      title: `Adsets. Changes.optimization Sub Event`
    },
    
    adsetsChangesPromotedObjectApplicationId: {
      sql: `${CUBE}.\`adsets._changes.promoted_object.application_id\``,
      type: `string`,
      title: `Adsets. Changes.promoted Object.application Id`
    },
    
    adsetsChangesPromotedObjectCustomEventType: {
      sql: `${CUBE}.\`adsets._changes.promoted_object.custom_event_type\``,
      type: `string`,
      title: `Adsets. Changes.promoted Object.custom Event Type`
    },
    
    adsetsChangesPromotedObjectObjectStoreUrl: {
      sql: `${CUBE}.\`adsets._changes.promoted_object.object_store_url\``,
      type: `string`,
      title: `Adsets. Changes.promoted Object.object Store Url`
    },
    
    adsetsChangesPromotedObjectPageId: {
      sql: `${CUBE}.\`adsets._changes.promoted_object.page_id\``,
      type: `string`,
      title: `Adsets. Changes.promoted Object.page Id`
    },
    
    adsetsChangesPromotedObjectPixelId: {
      sql: `${CUBE}.\`adsets._changes.promoted_object.pixel_id\``,
      type: `string`,
      title: `Adsets. Changes.promoted Object.pixel Id`
    },
    
    adsetsChangesSourceAdsetId: {
      sql: `${CUBE}.\`adsets._changes.source_adset_id\``,
      type: `string`,
      title: `Adsets. Changes.source Adset Id`
    },
    
    adsetsChangesStartTime: {
      sql: `${CUBE}.\`adsets._changes.start_time\``,
      type: `string`,
      title: `Adsets. Changes.start Time`
    },
    
    adsetsChangesStatus: {
      sql: `${CUBE}.\`adsets._changes.status\``,
      type: `string`,
      title: `Adsets. Changes.status`
    },
    
    adsetsChangesTargetingAppInstallState: {
      sql: `${CUBE}.\`adsets._changes.targeting.app_install_state\``,
      type: `string`,
      title: `Adsets. Changes.targeting.app Install State`
    },
    
    adsetsChangesTargetingTargetingOptimization: {
      sql: `${CUBE}.\`adsets._changes.targeting.targeting_optimization\``,
      type: `string`,
      title: `Adsets. Changes.targeting.targeting Optimization`
    },
    
    adsetsChangesUpdatedTime: {
      sql: `${CUBE}.\`adsets._changes.updated_time\``,
      type: `string`,
      title: `Adsets. Changes.updated Time`
    },
    
    adsetsDataAccountId: {
      sql: `${CUBE}.\`adsets._data.account_id\``,
      type: `string`,
      title: `Adsets. Data.account Id`
    },
    
    adsetsDataBillingEvent: {
      sql: `${CUBE}.\`adsets._data.billing_event\``,
      type: `string`,
      title: `Adsets. Data.billing Event`
    },
    
    adsetsDataCampaignId: {
      sql: `${CUBE}.\`adsets._data.campaign_id\``,
      type: `string`,
      title: `Adsets. Data.campaign Id`
    },
    
    adsetsDataCreatedTime: {
      sql: `${CUBE}.\`adsets._data.created_time\``,
      type: `string`,
      title: `Adsets. Data.created Time`
    },
    
    adsetsDataDailyBudget: {
      sql: `${CUBE}.\`adsets._data.daily_budget\``,
      type: `string`,
      title: `Adsets. Data.daily Budget`
    },
    
    adsetsDataEndTime: {
      sql: `${CUBE}.\`adsets._data.end_time\``,
      type: `string`,
      title: `Adsets. Data.end Time`
    },
    
    adsetsDataId: {
      sql: `${CUBE}.\`adsets._data.id\``,
      type: `string`,
      title: `Adsets. Data.id`
    },
    
    adsetsDataInstagramActorId: {
      sql: `${CUBE}.\`adsets._data.instagram_actor_id\``,
      type: `string`,
      title: `Adsets. Data.instagram Actor Id`
    },
    
    adsetsDataLifetimeBudget: {
      sql: `${CUBE}.\`adsets._data.lifetime_budget\``,
      type: `string`,
      title: `Adsets. Data.lifetime Budget`
    },
    
    adsetsDataName: {
      sql: `${CUBE}.\`adsets._data.name\``,
      type: `string`,
      title: `Adsets. Data.name`
    },
    
    adsetsDataOptimizationGoal: {
      sql: `${CUBE}.\`adsets._data.optimization_goal\``,
      type: `string`,
      title: `Adsets. Data.optimization Goal`
    },
    
    adsetsDataOptimizationSubEvent: {
      sql: `${CUBE}.\`adsets._data.optimization_sub_event\``,
      type: `string`,
      title: `Adsets. Data.optimization Sub Event`
    },
    
    adsetsDataPromotedObjectApplicationId: {
      sql: `${CUBE}.\`adsets._data.promoted_object.application_id\``,
      type: `string`,
      title: `Adsets. Data.promoted Object.application Id`
    },
    
    adsetsDataPromotedObjectCustomEventType: {
      sql: `${CUBE}.\`adsets._data.promoted_object.custom_event_type\``,
      type: `string`,
      title: `Adsets. Data.promoted Object.custom Event Type`
    },
    
    adsetsDataPromotedObjectObjectStoreUrl: {
      sql: `${CUBE}.\`adsets._data.promoted_object.object_store_url\``,
      type: `string`,
      title: `Adsets. Data.promoted Object.object Store Url`
    },
    
    adsetsDataPromotedObjectPageId: {
      sql: `${CUBE}.\`adsets._data.promoted_object.page_id\``,
      type: `string`,
      title: `Adsets. Data.promoted Object.page Id`
    },
    
    adsetsDataPromotedObjectPixelId: {
      sql: `${CUBE}.\`adsets._data.promoted_object.pixel_id\``,
      type: `string`,
      title: `Adsets. Data.promoted Object.pixel Id`
    },
    
    adsetsDataSourceAdsetId: {
      sql: `${CUBE}.\`adsets._data.source_adset_id\``,
      type: `string`,
      title: `Adsets. Data.source Adset Id`
    },
    
    adsetsDataStartTime: {
      sql: `${CUBE}.\`adsets._data.start_time\``,
      type: `string`,
      title: `Adsets. Data.start Time`
    },
    
    adsetsDataStatus: {
      sql: `${CUBE}.\`adsets._data.status\``,
      type: `string`,
      title: `Adsets. Data.status`
    },
    
    adsetsDataTargetingAppInstallState: {
      sql: `${CUBE}.\`adsets._data.targeting.app_install_state\``,
      type: `string`,
      title: `Adsets. Data.targeting.app Install State`
    },
    
    adsetsDataTargetingTargetingOptimization: {
      sql: `${CUBE}.\`adsets._data.targeting.targeting_optimization\``,
      type: `string`,
      title: `Adsets. Data.targeting.targeting Optimization`
    },
    
    adsetsDataUpdatedTime: {
      sql: `${CUBE}.\`adsets._data.updated_time\``,
      type: `string`,
      title: `Adsets. Data.updated Time`
    },
    
    adsetsParentid: {
      sql: `${CUBE}.\`adsets._parentId\``,
      type: `string`,
      title: `Adsets. Parentid`
    },
    
    adsetsAccountId: {
      sql: `${CUBE}.\`adsets.account_id\``,
      type: `string`,
      title: `Adsets.account Id`
    },
    
    adsetsAdlabels: {
      sql: `${CUBE}.\`adsets.adlabels\``,
      type: `string`,
      title: `Adsets.adlabels`
    },
    
    adsetsAdsetSchedule: {
      sql: `${CUBE}.\`adsets.adset_schedule\``,
      type: `string`,
      title: `Adsets.adset Schedule`
    },
    
    adsetsAssetFeedId: {
      sql: `${CUBE}.\`adsets.asset_feed_id\``,
      type: `string`,
      title: `Adsets.asset Feed Id`
    },
    
    adsetsAttributionSpec: {
      sql: `${CUBE}.\`adsets.attribution_spec\``,
      type: `string`,
      title: `Adsets.attribution Spec`
    },
    
    adsetsBidAdjustments: {
      sql: `${CUBE}.\`adsets.bid_adjustments\``,
      type: `string`,
      title: `Adsets.bid Adjustments`
    },
    
    adsetsBidAmount: {
      sql: `${CUBE}.\`adsets.bid_amount\``,
      type: `string`,
      title: `Adsets.bid Amount`
    },
    
    adsetsBidConstraints: {
      sql: `${CUBE}.\`adsets.bid_constraints\``,
      type: `string`,
      title: `Adsets.bid Constraints`
    },
    
    adsetsBidInfo: {
      sql: `${CUBE}.\`adsets.bid_info\``,
      type: `string`,
      title: `Adsets.bid Info`
    },
    
    adsetsBidStrategy: {
      sql: `${CUBE}.\`adsets.bid_strategy\``,
      type: `string`,
      title: `Adsets.bid Strategy`
    },
    
    adsetsBillingEvent: {
      sql: `${CUBE}.\`adsets.billing_event\``,
      type: `string`,
      title: `Adsets.billing Event`
    },
    
    adsetsBudgetRemaining: {
      sql: `${CUBE}.\`adsets.budget_remaining\``,
      type: `string`,
      title: `Adsets.budget Remaining`
    },
    
    adsetsCampaignId: {
      sql: `${CUBE}.\`adsets.campaign_id\``,
      type: `string`,
      title: `Adsets.campaign Id`
    },
    
    adsetsCampaignAttribution: {
      sql: `${CUBE}.\`adsets.campaign_attribution\``,
      type: `string`,
      title: `Adsets.campaign Attribution`
    },
    
    adsetsConfiguredStatus: {
      sql: `${CUBE}.\`adsets.configured_status\``,
      type: `string`,
      title: `Adsets.configured Status`
    },
    
    adsetsCreatedTime: {
      sql: `${CUBE}.\`adsets.created_time\``,
      type: `string`,
      title: `Adsets.created Time`
    },
    
    adsetsCreativeSequence: {
      sql: `${CUBE}.\`adsets.creative_sequence\``,
      type: `string`,
      title: `Adsets.creative Sequence`
    },
    
    adsetsDailyBudget: {
      sql: `${CUBE}.\`adsets.daily_budget\``,
      type: `string`,
      title: `Adsets.daily Budget`
    },
    
    adsetsDailyMinSpendTarget: {
      sql: `${CUBE}.\`adsets.daily_min_spend_target\``,
      type: `string`,
      title: `Adsets.daily Min Spend Target`
    },
    
    adsetsDailySpendCap: {
      sql: `${CUBE}.\`adsets.daily_spend_cap\``,
      type: `string`,
      title: `Adsets.daily Spend Cap`
    },
    
    adsetsDestinationType: {
      sql: `${CUBE}.\`adsets.destination_type\``,
      type: `string`,
      title: `Adsets.destination Type`
    },
    
    adsetsEffectiveStatus: {
      sql: `${CUBE}.\`adsets.effective_status\``,
      type: `string`,
      title: `Adsets.effective Status`
    },
    
    adsetsEndTime: {
      sql: `${CUBE}.\`adsets.end_time\``,
      type: `string`,
      title: `Adsets.end Time`
    },
    
    adsetsExistingCustomerBudgetPercentage: {
      sql: `${CUBE}.\`adsets.existing_customer_budget_percentage\``,
      type: `string`,
      title: `Adsets.existing Customer Budget Percentage`
    },
    
    adsetsFrequencyControlSpecs: {
      sql: `${CUBE}.\`adsets.frequency_control_specs\``,
      type: `string`,
      title: `Adsets.frequency Control Specs`
    },
    
    adsetsFullFunnelExplorationMode: {
      sql: `${CUBE}.\`adsets.full_funnel_exploration_mode\``,
      type: `string`,
      title: `Adsets.full Funnel Exploration Mode`
    },
    
    adsetsId: {
      sql: `${CUBE}.\`adsets.id\``,
      type: `string`,
      title: `Adsets.id`
    },
    
    adsetsInstagramActorId: {
      sql: `${CUBE}.\`adsets.instagram_actor_id\``,
      type: `string`,
      title: `Adsets.instagram Actor Id`
    },
    
    adsetsIsDynamicCreative: {
      sql: `${CUBE}.\`adsets.is_dynamic_creative\``,
      type: `string`,
      title: `Adsets.is Dynamic Creative`
    },
    
    adsetsIssuesInfo: {
      sql: `${CUBE}.\`adsets.issues_info\``,
      type: `string`,
      title: `Adsets.issues Info`
    },
    
    adsetsLearningStageInfo: {
      sql: `${CUBE}.\`adsets.learning_stage_info\``,
      type: `string`,
      title: `Adsets.learning Stage Info`
    },
    
    adsetsLifetimeBudget: {
      sql: `${CUBE}.\`adsets.lifetime_budget\``,
      type: `string`,
      title: `Adsets.lifetime Budget`
    },
    
    adsetsLifetimeMinSpendTarget: {
      sql: `${CUBE}.\`adsets.lifetime_min_spend_target\``,
      type: `string`,
      title: `Adsets.lifetime Min Spend Target`
    },
    
    adsetsLifetimeSpendCap: {
      sql: `${CUBE}.\`adsets.lifetime_spend_cap\``,
      type: `string`,
      title: `Adsets.lifetime Spend Cap`
    },
    
    adsetsMultiOptimizationGoalWeight: {
      sql: `${CUBE}.\`adsets.multi_optimization_goal_weight\``,
      type: `string`,
      title: `Adsets.multi Optimization Goal Weight`
    },
    
    adsetsName: {
      sql: `${CUBE}.\`adsets.name\``,
      type: `string`,
      title: `Adsets.name`
    },
    
    adsetsOptimizationGoal: {
      sql: `${CUBE}.\`adsets.optimization_goal\``,
      type: `string`,
      title: `Adsets.optimization Goal`
    },
    
    adsetsOptimizationSubEvent: {
      sql: `${CUBE}.\`adsets.optimization_sub_event\``,
      type: `string`,
      title: `Adsets.optimization Sub Event`
    },
    
    adsetsPromotedObject: {
      sql: `${CUBE}.\`adsets.promoted_object\``,
      type: `string`,
      title: `Adsets.promoted Object`
    },
    
    adsetsPromotedObjectApplicationId: {
      sql: `${CUBE}.\`adsets.promoted_object.application_id\``,
      type: `string`,
      title: `Adsets.promoted Object.application Id`
    },
    
    adsetsPromotedObjectCustomEventType: {
      sql: `${CUBE}.\`adsets.promoted_object.custom_event_type\``,
      type: `string`,
      title: `Adsets.promoted Object.custom Event Type`
    },
    
    adsetsPromotedObjectObjectStoreUrl: {
      sql: `${CUBE}.\`adsets.promoted_object.object_store_url\``,
      type: `string`,
      title: `Adsets.promoted Object.object Store Url`
    },
    
    adsetsPromotedObjectPageId: {
      sql: `${CUBE}.\`adsets.promoted_object.page_id\``,
      type: `string`,
      title: `Adsets.promoted Object.page Id`
    },
    
    adsetsPromotedObjectPixelId: {
      sql: `${CUBE}.\`adsets.promoted_object.pixel_id\``,
      type: `string`,
      title: `Adsets.promoted Object.pixel Id`
    },
    
    adsetsRecommendations: {
      sql: `${CUBE}.\`adsets.recommendations\``,
      type: `string`,
      title: `Adsets.recommendations`
    },
    
    adsetsRecurringBudgetSemantics: {
      sql: `${CUBE}.\`adsets.recurring_budget_semantics\``,
      type: `string`,
      title: `Adsets.recurring Budget Semantics`
    },
    
    adsetsReviewFeedback: {
      sql: `${CUBE}.\`adsets.review_feedback\``,
      type: `string`,
      title: `Adsets.review Feedback`
    },
    
    adsetsRfPredictionId: {
      sql: `${CUBE}.\`adsets.rf_prediction_id\``,
      type: `string`,
      title: `Adsets.rf Prediction Id`
    },
    
    adsetsSourceAdset: {
      sql: `${CUBE}.\`adsets.source_adset\``,
      type: `string`,
      title: `Adsets.source Adset`
    },
    
    adsetsSourceAdsetId: {
      sql: `${CUBE}.\`adsets.source_adset_id\``,
      type: `string`,
      title: `Adsets.source Adset Id`
    },
    
    adsetsStartTime: {
      sql: `${CUBE}.\`adsets.start_time\``,
      type: `string`,
      title: `Adsets.start Time`
    },
    
    adsetsStatus: {
      sql: `${CUBE}.\`adsets.status\``,
      type: `string`,
      title: `Adsets.status`
    },
    
    adsetsTargetingAppInstallState: {
      sql: `${CUBE}.\`adsets.targeting.app_install_state\``,
      type: `string`,
      title: `Adsets.targeting.app Install State`
    },
    
    adsetsTargetingTargetingOptimization: {
      sql: `${CUBE}.\`adsets.targeting.targeting_optimization\``,
      type: `string`,
      title: `Adsets.targeting.targeting Optimization`
    },
    
    adsetsTimeBasedAdRotationIdBlocks: {
      sql: `${CUBE}.\`adsets.time_based_ad_rotation_id_blocks\``,
      type: `string`,
      title: `Adsets.time Based Ad Rotation Id Blocks`
    },
    
    adsetsTimeBasedAdRotationIntervals: {
      sql: `${CUBE}.\`adsets.time_based_ad_rotation_intervals\``,
      type: `string`,
      title: `Adsets.time Based Ad Rotation Intervals`
    },
    
    adsetsUpdatedTime: {
      sql: `${CUBE}.\`adsets.updated_time\``,
      type: `string`,
      title: `Adsets.updated Time`
    }
  },
  
  dataSource: `default`
});
