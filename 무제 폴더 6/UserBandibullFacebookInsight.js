cube(`UserBandibullFacebookInsight`, {
  sql: `SELECT * FROM vad.user_bandibull_facebook_insight`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    UserBandibullFacebookInsightAd: {
      sql: `${CUBE}._id = ${UserBandibullFacebookInsightAd}._id`,
      relationship: `hasMany`
    },
    UserBandibullFacebookInsightCampaign: {
      sql: `${CUBE}._id = ${UserBandibullFacebookInsightCampaign}._id`,
      relationship: `hasMany`
    },
    UserBandibullFacebookInsightCampaignVideoPlayActions: {
      sql: `${CUBE}._id = ${UserBandibullFacebookInsightCampaignVideoPlayActions}._id`,
      relationship: `hasMany`
    },
    UserBandibullFacebookCampaigninfo: {
      sql: `${CUBE.campaignid} = ${UserBandibullFacebookCampaigninfo.campaigninfoId}`,
      relationship: `hasMany`
    },
    // UserBandibullFacebookInsight: {
    //   sql: `${CUBE}._id = ${UserBandibullFacebookInsight}._id`,
    //   relationship: `hasMany`
    // },
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [accountAccountId, accountDateStart, accountDateStop, apiid, campaignid, createdday, createdat]
    }
  },
  
  dimensions: {
    _id: {
      sql: `_id`,
      type: `string`,
      primaryKey: true,
    },
    accountAccountId: {
      sql: `${CUBE}.\`account.account_id\``,
      type: `string`,
      title: `Account.account Id`
    },
    
    accountClicks: {
      sql: `${CUBE}.\`account.clicks\``,
      type: `string`,
      title: `Account.clicks`
    },
    
    accountCpc: {
      sql: `${CUBE}.\`account.cpc\``,
      type: `string`,
      title: `Account.cpc`
    },
    
    accountCpm: {
      sql: `${CUBE}.\`account.cpm\``,
      type: `string`,
      title: `Account.cpm`
    },
    
    accountCtr: {
      sql: `${CUBE}.\`account.ctr\``,
      type: `string`,
      title: `Account.ctr`
    },
    
    accountDateStart: {
      sql: `${CUBE}.\`account.date_start\``,
      type: `string`,
      title: `Account.date Start`
    },
    
    accountDateStop: {
      sql: `${CUBE}.\`account.date_stop\``,
      type: `string`,
      title: `Account.date Stop`
    },
    
    accountFrequency: {
      sql: `${CUBE}.\`account.frequency\``,
      type: `string`,
      title: `Account.frequency`
    },
    
    accountImpressions: {
      sql: `${CUBE}.\`account.impressions\``,
      type: `string`,
      title: `Account.impressions`
    },
    
    accountObjective: {
      sql: `${CUBE}.\`account.objective\``,
      type: `string`,
      title: `Account.objective`
    },
    
    accountReach: {
      sql: `${CUBE}.\`account.reach\``,
      type: `string`,
      title: `Account.reach`
    },
    
    accountSpend: {
      sql: `${CUBE}.\`account.spend\``,
      type: `string`,
      title: `Account.spend`
    },
    
    apiid: {
      sql: `${CUBE}.\`apiId\``,
      type: `string`
    },

    name: {
      sql: `${CUBE}.\`name\``,
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
