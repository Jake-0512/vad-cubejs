cube(`UserBandibullGoogleInsightAd`, {
  sql: `SELECT * FROM vad.user_bandibull_google_insight_ad`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [adAccountId, adAdId, adAdName, adDateStart, adDateStop]
    }
  },
  
  dimensions: {
    adAccountId: {
      sql: `${CUBE}.\`ad.account_id\``,
      type: `string`,
      title: `Ad.account Id`
    },
    
    adAdId: {
      sql: `${CUBE}.\`ad.ad_id\``,
      type: `string`,
      title: `Ad.ad Id`
    },
    
    adAdName: {
      sql: `${CUBE}.\`ad.ad_name\``,
      type: `string`,
      title: `Ad.ad Name`
    },
    
    adClicks: {
      sql: `${CUBE}.\`ad.clicks\``,
      type: `string`,
      title: `Ad.clicks`
    },
    
    adCpc: {
      sql: `${CUBE}.\`ad.cpc\``,
      type: `string`,
      title: `Ad.cpc`
    },
    
    adCpm: {
      sql: `${CUBE}.\`ad.cpm\``,
      type: `string`,
      title: `Ad.cpm`
    },
    
    adCtr: {
      sql: `${CUBE}.\`ad.ctr\``,
      type: `string`,
      title: `Ad.ctr`
    },
    
    adDateStart: {
      sql: `${CUBE}.\`ad.date_start\``,
      type: `string`,
      title: `Ad.date Start`
    },
    
    adDateStop: {
      sql: `${CUBE}.\`ad.date_stop\``,
      type: `string`,
      title: `Ad.date Stop`
    },
    
    adFrequency: {
      sql: `${CUBE}.\`ad.frequency\``,
      type: `string`,
      title: `Ad.frequency`
    },
    
    adImpressions: {
      sql: `${CUBE}.\`ad.impressions\``,
      type: `string`,
      title: `Ad.impressions`
    },
    
    adObjective: {
      sql: `${CUBE}.\`ad.objective\``,
      type: `string`,
      title: `Ad.objective`
    },
    
    adSpend: {
      sql: `${CUBE}.\`ad.spend\``,
      type: `string`,
      title: `Ad.spend`
    }
  },
  
  dataSource: `default`
});
