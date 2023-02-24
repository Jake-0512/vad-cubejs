cube(`UserVadminFacebook`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook\``,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [adAccountAccountId, adAccountBusinessId, adAccountBusinessName, adAccountBusinessName, adAccountCreatedTime, adAccountFundingSourceDetailsId, adAccountId, adAccountName, adaccountid, apiId, campaignid, createdDay]
    }
  },
  
  dimensions: {
    _id: {
      sql: `_id`,
      type: `string`,
      primaryKey: true,
    },
    adAccountAccountId: {
      sql: `${CUBE}.\`ad_account.account_id\``,
      type: `string`,
      title: `Ad Account.account Id`
    },
    
    adAccountAmountSpent: {
      sql: `${CUBE}.\`ad_account.amount_spent\``,
      type: `string`,
      title: `Ad Account.amount Spent`
    },
    
    adAccountBalance: {
      sql: `${CUBE}.\`ad_account.balance\``,
      type: `string`,
      title: `Ad Account.balance`
    },
    
    adAccountBusinessId: {
      sql: `${CUBE}.\`ad_account.business.id\``,
      type: `string`,
      title: `Ad Account.business.id`
    },
    
    adAccountBusinessName: {
      sql: `${CUBE}.\`ad_account.business_name\``,
      type: `string`,
      title: `Ad Account.business Name`
    },
    
    adAccountCreatedTime: {
      sql: `${CUBE}.\`ad_account.created_time\``,
      type: `string`,
      title: `Ad Account.created Time`
    },
    
    adAccountFundingSource: {
      sql: `${CUBE}.\`ad_account.funding_source\``,
      type: `string`,
      title: `Ad Account.funding Source`
    },
    
    adAccountFundingSourceDetailsDisplayString: {
      sql: `${CUBE}.\`ad_account.funding_source_details.display_string\``,
      type: `string`,
      title: `Ad Account.funding Source Details.display String`
    },
    
    adAccountFundingSourceDetailsId: {
      sql: `${CUBE}.\`ad_account.funding_source_details.id\``,
      type: `string`,
      title: `Ad Account.funding Source Details.id`
    },
    
    adAccountId: {
      sql: `${CUBE}.\`ad_account.id\``,
      type: `string`,
      title: `Ad Account.id`
    },
    
    adAccountMinCampaignGroupSpendCap: {
      sql: `${CUBE}.\`ad_account.min_campaign_group_spend_cap\``,
      type: `string`,
      title: `Ad Account.min Campaign Group Spend Cap`
    },
    
    adAccountName: {
      sql: `${CUBE}.\`ad_account.name\``,
      type: `string`,
      title: `Ad Account.name`
    },
    
    adAccountOwner: {
      sql: `${CUBE}.\`ad_account.owner\``,
      type: `string`,
      title: `Ad Account.owner`
    },
    
    adAccountSpendCap: {
      sql: `${CUBE}.\`ad_account.spend_cap\``,
      type: `string`,
      title: `Ad Account.spend Cap`
    },
    
    adaccountid: {
      sql: `${CUBE}.\`adAccountId\``,
      type: `string`
    },
    
    apiId: {
      sql: `api_id`,
      type: `string`
    },
    
    campaignid: {
      sql: `${CUBE}.\`campaignId\``,
      type: `string`
    },
    
    createdDay: {
      sql: `created_day`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
