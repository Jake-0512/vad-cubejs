cube(`UserVadminGoogleAdAccountCustomerPayPerConversionEligibilityFailureReasons`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_google_ad_account_customer_pay_per_conversion_eligibility_failure_reasons\``,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: []
    }
  },
  
  dimensions: {
    _id: {
      sql: `_id`,
      type: `string`,
      primaryKey: true,
    },
    
  },
  
  dataSource: `default`
});
