cube(`UserVadminGoogleAdAccount`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_google_ad_account\``,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [adAccountCustomerConversionTrackingSettingCrossAccountConversionTrackingId, adAccountCustomerDescriptiveName, adAccountCustomerResourceName, adAccountMetricsVideoViewRate]
    },
    
    adAccountCustomerTestAccount: {
      sql: `${CUBE}.\`ad_account.customer.test_account\``,
      type: `sum`,
      title: `Ad Account.customer.test Account`
    },
    
    adAccountMetricsAllConversionsValue: {
      sql: `${CUBE}.\`ad_account.metrics.all_conversions_value\``,
      type: `sum`,
      title: `Ad Account.metrics.all Conversions Value`
    },
    
    adAccountMetricsAverageCost: {
      sql: `${CUBE}.\`ad_account.metrics.average_cost\``,
      type: `sum`,
      title: `Ad Account.metrics.average Cost`
    },
    
    adAccountMetricsConversionsValue: {
      sql: `${CUBE}.\`ad_account.metrics.conversions_value\``,
      type: `sum`,
      title: `Ad Account.metrics.conversions Value`
    }
  },
  
  dimensions: {
    _id: {
      sql: `_id`,
      type: `string`,
      primaryKey: true,
    },
    adAccountCustomerConversionTrackingSettingCrossAccountConversionTrackingId: {
      sql: `${CUBE}.\`ad_account.customer.conversion_tracking_setting.cross_account_conversion_tracking_id\``,
      type: `string`,
      title: `Ad Account.customer.conversion Tracking Setting.cross Account Conversion Tracking Id`
    },
    
    adAccountCustomerConversionTrackingSettingGoogleAdsConversionCustomer: {
      sql: `${CUBE}.\`ad_account.customer.conversion_tracking_setting.google_ads_conversion_customer\``,
      type: `string`,
      title: `Ad Account.customer.conversion Tracking Setting.google Ads Conversion Customer`
    },
    
    adAccountCustomerDescriptiveName: {
      sql: `${CUBE}.\`ad_account.customer.descriptive_name\``,
      type: `string`,
      title: `Ad Account.customer.descriptive Name`
    },
    
    adAccountCustomerRemarketingSettingGoogleGlobalSiteTag: {
      sql: `${CUBE}.\`ad_account.customer.remarketing_setting.google_global_site_tag\``,
      type: `string`,
      title: `Ad Account.customer.remarketing Setting.google Global Site Tag`
    },
    
    adAccountCustomerResourceName: {
      sql: `${CUBE}.\`ad_account.customer.resource_name\``,
      type: `string`,
      title: `Ad Account.customer.resource Name`
    },
    
    adAccountCustomerTimeZone: {
      sql: `${CUBE}.\`ad_account.customer.time_zone\``,
      type: `string`,
      title: `Ad Account.customer.time Zone`
    },
    
    adAccountCustomerTrackingUrlTemplate: {
      sql: `${CUBE}.\`ad_account.customer.tracking_url_template\``,
      type: `string`,
      title: `Ad Account.customer.tracking Url Template`
    },
    
    adAccountMetricsAverageCpe: {
      sql: `${CUBE}.\`ad_account.metrics.average_cpe\``,
      type: `string`,
      title: `Ad Account.metrics.average Cpe`
    },
    
    adAccountMetricsAverageCpv: {
      sql: `${CUBE}.\`ad_account.metrics.average_cpv\``,
      type: `string`,
      title: `Ad Account.metrics.average Cpv`
    },
    
    adAccountMetricsVideoViewRate: {
      sql: `${CUBE}.\`ad_account.metrics.video_view_rate\``,
      type: `string`,
      title: `Ad Account.metrics.video View Rate`
    }
  },
  
  dataSource: `default`
});
