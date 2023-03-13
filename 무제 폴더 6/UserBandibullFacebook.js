cube(`UserBandibullFacebook`, {
  sql: `SELECT * FROM vad.user_bandibull_facebook`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [accountinfoAccountId, accountinfoBusinessId, accountinfoBusinessName, accountinfoBusinessName, accountinfoCreatedTime, accountinfoFundingSourceDetailsId, accountinfoId, accountinfoName, apiid, campaignid, createdday, createdat]
    }
  },
  
  dimensions: {
    _id: {
      sql: `_id`,
      type: `string`,
      primaryKey: true,
    },
    
    accountinfoAccountId: {
      sql: `${CUBE}.\`accountInfo.account_id\``,
      type: `string`,
      title: `Accountinfo.account Id`
    },
    
    accountinfoAmountSpent: {
      sql: `${CUBE}.\`accountInfo.amount_spent\``,
      type: `string`,
      title: `Accountinfo.amount Spent`
    },
    
    accountinfoBalance: {
      sql: `${CUBE}.\`accountInfo.balance\``,
      type: `string`,
      title: `Accountinfo.balance`
    },
    
    accountinfoBusinessId: {
      sql: `${CUBE}.\`accountInfo.business.id\``,
      type: `string`,
      title: `Accountinfo.business.id`
    },
    
    accountinfoBusinessName: {
      sql: `${CUBE}.\`accountInfo.business_name\``,
      type: `string`,
      title: `Accountinfo.business Name`
    },
    
    accountinfoCreatedTime: {
      sql: `${CUBE}.\`accountInfo.created_time\``,
      type: `string`,
      title: `Accountinfo.created Time`
    },
    
    accountinfoFundingSource: {
      sql: `${CUBE}.\`accountInfo.funding_source\``,
      type: `string`,
      title: `Accountinfo.funding Source`
    },
    
    accountinfoFundingSourceDetailsDisplayString: {
      sql: `${CUBE}.\`accountInfo.funding_source_details.display_string\``,
      type: `string`,
      title: `Accountinfo.funding Source Details.display String`
    },
    
    accountinfoFundingSourceDetailsId: {
      sql: `${CUBE}.\`accountInfo.funding_source_details.id\``,
      type: `string`,
      title: `Accountinfo.funding Source Details.id`
    },
    
    accountinfoId: {
      sql: `${CUBE}.\`accountInfo.id\``,
      type: `string`,
      title: `Accountinfo.id`
    },
    
    accountinfoMinCampaignGroupSpendCap: {
      sql: `${CUBE}.\`accountInfo.min_campaign_group_spend_cap\``,
      type: `string`,
      title: `Accountinfo.min Campaign Group Spend Cap`
    },
    
    accountinfoName: {
      sql: `${CUBE}.\`accountInfo.name\``,
      type: `string`,
      title: `Accountinfo.name`
    },
    
    accountinfoOwner: {
      sql: `${CUBE}.\`accountInfo.owner\``,
      type: `string`,
      title: `Accountinfo.owner`
    },
    
    accountinfoSpendCap: {
      sql: `${CUBE}.\`accountInfo.spend_cap\``,
      type: `string`,
      title: `Accountinfo.spend Cap`
    },
    
    apiid: {
      sql: `${CUBE}.\`apiId\``,
      type: `string`
    },
    
    campaignid: {
      sql: `${CUBE}.\`campaignId\``,
      type: `string`
    },
    
    createdday: {
      sql: `${CUBE}.\`createdDay\``,
      type: `string`
    },
    
    createdat: {
      sql: `${CUBE}.\`createdAt\``,
      type: `time`
    }
  },
  
  dataSource: `default`
});
