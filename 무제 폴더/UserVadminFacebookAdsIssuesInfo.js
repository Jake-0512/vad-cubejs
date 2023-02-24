cube(`UserVadminFacebookAdsIssuesInfo`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_ads_issues_info\``,
  
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
    adsIssuesInfo: {
      sql: `${CUBE}.\`ads.issues_info\``,
      type: `string`,
      title: `Ads.issues Info`
    },
    
    adsIssuesInfoErrorMessage: {
      sql: `${CUBE}.\`ads.issues_info.error_message\``,
      type: `string`,
      title: `Ads.issues Info.error Message`
    },
    
    adsIssuesInfoErrorSummary: {
      sql: `${CUBE}.\`ads.issues_info.error_summary\``,
      type: `string`,
      title: `Ads.issues Info.error Summary`
    },
    
    adsIssuesInfoErrorType: {
      sql: `${CUBE}.\`ads.issues_info.error_type\``,
      type: `string`,
      title: `Ads.issues Info.error Type`
    },
    
    adsIssuesInfoLevel: {
      sql: `${CUBE}.\`ads.issues_info.level\``,
      type: `string`,
      title: `Ads.issues Info.level`
    }
  },
  
  dataSource: `default`
});
