cube(`UserVadminGoogleAccountBudget`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_google_account_budget\``,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [accountBudgetAccountBudgetApprovedEndDateTime, accountBudgetAccountBudgetApprovedStartDateTime, accountBudgetAccountBudgetName, accountBudgetAccountBudgetProposedEndDateTime, accountBudgetAccountBudgetProposedStartDateTime, accountBudgetAccountBudgetResourceName, accountBudgetCustomerConversionTrackingSettingCrossAccountConversionTrackingId, accountBudgetCustomerDescriptiveName, accountBudgetCustomerResourceName]
    },
    
    accountBudgetCustomerTestAccount: {
      sql: `${CUBE}.\`account_budget.customer.test_account\``,
      type: `sum`,
      title: `Account Budget.customer.test Account`
    }
  },
  
  dimensions: {
    _id: {
      sql: `_id`,
      type: `string`,
      primaryKey: true,
    },
    accountBudgetAccountBudgetAdjustedSpendingLimitMicros: {
      sql: `${CUBE}.\`account_budget.account_budget.adjusted_spending_limit_micros\``,
      type: `string`,
      title: `Account Budget.account Budget.adjusted Spending Limit Micros`
    },
    
    accountBudgetAccountBudgetApprovedEndDateTime: {
      sql: `${CUBE}.\`account_budget.account_budget.approved_end_date_time\``,
      type: `string`,
      title: `Account Budget.account Budget.approved End Date Time`
    },
    
    accountBudgetAccountBudgetApprovedSpendingLimitMicros: {
      sql: `${CUBE}.\`account_budget.account_budget.approved_spending_limit_micros\``,
      type: `string`,
      title: `Account Budget.account Budget.approved Spending Limit Micros`
    },
    
    accountBudgetAccountBudgetApprovedStartDateTime: {
      sql: `${CUBE}.\`account_budget.account_budget.approved_start_date_time\``,
      type: `string`,
      title: `Account Budget.account Budget.approved Start Date Time`
    },
    
    accountBudgetAccountBudgetBillingSetup: {
      sql: `${CUBE}.\`account_budget.account_budget.billing_setup\``,
      type: `string`,
      title: `Account Budget.account Budget.billing Setup`
    },
    
    accountBudgetAccountBudgetName: {
      sql: `${CUBE}.\`account_budget.account_budget.name\``,
      type: `string`,
      title: `Account Budget.account Budget.name`
    },
    
    accountBudgetAccountBudgetNotes: {
      sql: `${CUBE}.\`account_budget.account_budget.notes\``,
      type: `string`,
      title: `Account Budget.account Budget.notes`
    },
    
    accountBudgetAccountBudgetPendingProposal: {
      sql: `${CUBE}.\`account_budget.account_budget.pending_proposal\``,
      type: `string`,
      title: `Account Budget.account Budget.pending Proposal`
    },
    
    accountBudgetAccountBudgetProposedEndDateTime: {
      sql: `${CUBE}.\`account_budget.account_budget.proposed_end_date_time\``,
      type: `string`,
      title: `Account Budget.account Budget.proposed End Date Time`
    },
    
    accountBudgetAccountBudgetProposedSpendingLimitMicros: {
      sql: `${CUBE}.\`account_budget.account_budget.proposed_spending_limit_micros\``,
      type: `string`,
      title: `Account Budget.account Budget.proposed Spending Limit Micros`
    },
    
    accountBudgetAccountBudgetProposedStartDateTime: {
      sql: `${CUBE}.\`account_budget.account_budget.proposed_start_date_time\``,
      type: `string`,
      title: `Account Budget.account Budget.proposed Start Date Time`
    },
    
    accountBudgetAccountBudgetPurchaseOrderNumber: {
      sql: `${CUBE}.\`account_budget.account_budget.purchase_order_number\``,
      type: `string`,
      title: `Account Budget.account Budget.purchase Order Number`
    },
    
    accountBudgetAccountBudgetResourceName: {
      sql: `${CUBE}.\`account_budget.account_budget.resource_name\``,
      type: `string`,
      title: `Account Budget.account Budget.resource Name`
    },
    
    accountBudgetCustomerConversionTrackingSettingCrossAccountConversionTrackingId: {
      sql: `${CUBE}.\`account_budget.customer.conversion_tracking_setting.cross_account_conversion_tracking_id\``,
      type: `string`,
      title: `Account Budget.customer.conversion Tracking Setting.cross Account Conversion Tracking Id`
    },
    
    accountBudgetCustomerConversionTrackingSettingGoogleAdsConversionCustomer: {
      sql: `${CUBE}.\`account_budget.customer.conversion_tracking_setting.google_ads_conversion_customer\``,
      type: `string`,
      title: `Account Budget.customer.conversion Tracking Setting.google Ads Conversion Customer`
    },
    
    accountBudgetCustomerCurrencyCode: {
      sql: `${CUBE}.\`account_budget.customer.currency_code\``,
      type: `string`,
      title: `Account Budget.customer.currency Code`
    },
    
    accountBudgetCustomerDescriptiveName: {
      sql: `${CUBE}.\`account_budget.customer.descriptive_name\``,
      type: `string`,
      title: `Account Budget.customer.descriptive Name`
    },
    
    accountBudgetCustomerResourceName: {
      sql: `${CUBE}.\`account_budget.customer.resource_name\``,
      type: `string`,
      title: `Account Budget.customer.resource Name`
    },
    
    accountBudgetCustomerTimeZone: {
      sql: `${CUBE}.\`account_budget.customer.time_zone\``,
      type: `string`,
      title: `Account Budget.customer.time Zone`
    },
    
    accountBudgetCustomerTrackingUrlTemplate: {
      sql: `${CUBE}.\`account_budget.customer.tracking_url_template\``,
      type: `string`,
      title: `Account Budget.customer.tracking Url Template`
    }
  },
  
  dataSource: `default`
});
