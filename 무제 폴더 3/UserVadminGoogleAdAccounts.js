cube(`UserVadminGoogleAdAccounts`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_google_ad_accounts\``,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [adAccountsCustomerResourceName, adAccountsCustomerClientDescriptiveName, adAccountsCustomerClientResourceName]
    },
    
    adAccountsCustomerTestAccount: {
      sql: `${CUBE}.\`ad_accounts.customer.test_account\``,
      type: `sum`,
      title: `Ad Accounts.customer.test Account`
    },
    
    adAccountsCustomerClientTestAccount: {
      sql: `${CUBE}.\`ad_accounts.customer_client.test_account\``,
      type: `sum`,
      title: `Ad Accounts.customer Client.test Account`
    }
  },
  
  dimensions: {
    _id: {
      sql: `_id`,
      type: `string`,
      primaryKey: true,
    },
    adAccountsCustomerResourceName: {
      sql: `${CUBE}.\`ad_accounts.customer.resource_name\``,
      type: `string`,
      title: `Ad Accounts.customer.resource Name`
    },
    
    adAccountsCustomerClientClientCustomer: {
      sql: `${CUBE}.\`ad_accounts.customer_client.client_customer\``,
      type: `string`,
      title: `Ad Accounts.customer Client.client Customer`
    },
    
    adAccountsCustomerClientCurrencyCode: {
      sql: `${CUBE}.\`ad_accounts.customer_client.currency_code\``,
      type: `string`,
      title: `Ad Accounts.customer Client.currency Code`
    },
    
    adAccountsCustomerClientDescriptiveName: {
      sql: `${CUBE}.\`ad_accounts.customer_client.descriptive_name\``,
      type: `string`,
      title: `Ad Accounts.customer Client.descriptive Name`
    },
    
    adAccountsCustomerClientResourceName: {
      sql: `${CUBE}.\`ad_accounts.customer_client.resource_name\``,
      type: `string`,
      title: `Ad Accounts.customer Client.resource Name`
    },
    
    adAccountsCustomerClientTimeZone: {
      sql: `${CUBE}.\`ad_accounts.customer_client.time_zone\``,
      type: `string`,
      title: `Ad Accounts.customer Client.time Zone`
    }
  },
  
  dataSource: `default`
});
