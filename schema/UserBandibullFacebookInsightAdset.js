cube(`UserBandibullFacebookInsightAdset`, {
  sql: `SELECT * FROM vad.user_bandibull_facebook_insight_adset`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [adsetAccountId, adsetDateStart, adsetDateStop]
    }
  },
  
  dimensions: {
    adsetAccountId: {
      sql: `${CUBE}.\`adset.account_id\``,
      type: `string`,
      title: `Adset.account Id`
    },
    
    adsetClicks: {
      sql: `${CUBE}.\`adset.clicks\``,
      type: `string`,
      title: `Adset.clicks`
    },
    
    adsetCpc: {
      sql: `${CUBE}.\`adset.cpc\``,
      type: `string`,
      title: `Adset.cpc`
    },
    
    adsetCpm: {
      sql: `${CUBE}.\`adset.cpm\``,
      type: `string`,
      title: `Adset.cpm`
    },
    
    adsetCtr: {
      sql: `${CUBE}.\`adset.ctr\``,
      type: `string`,
      title: `Adset.ctr`
    },
    
    adsetDateStart: {
      sql: `${CUBE}.\`adset.date_start\``,
      type: `string`,
      title: `Adset.date Start`
    },
    
    adsetDateStop: {
      sql: `${CUBE}.\`adset.date_stop\``,
      type: `string`,
      title: `Adset.date Stop`
    },
    
    adsetFrequency: {
      sql: `${CUBE}.\`adset.frequency\``,
      type: `string`,
      title: `Adset.frequency`
    },
    
    adsetImpressions: {
      sql: `${CUBE}.\`adset.impressions\``,
      type: `string`,
      title: `Adset.impressions`
    },
    
    adsetObjective: {
      sql: `${CUBE}.\`adset.objective\``,
      type: `string`,
      title: `Adset.objective`
    },
    
    adsetSpend: {
      sql: `${CUBE}.\`adset.spend\``,
      type: `string`,
      title: `Adset.spend`
    }
  },
  
  dataSource: `default`
});
