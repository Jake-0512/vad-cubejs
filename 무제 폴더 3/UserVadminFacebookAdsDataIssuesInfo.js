cube(`UserVadminFacebookAdsDataIssuesInfo`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_ads__data_issues_info\``,
  
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
    adsDataIssuesInfoErrorMessage: {
      sql: `${CUBE}.\`ads._data.issues_info.error_message\``,
      type: `string`,
      title: `Ads. Data.issues Info.error Message`
    },
    
    adsDataIssuesInfoErrorSummary: {
      sql: `${CUBE}.\`ads._data.issues_info.error_summary\``,
      type: `string`,
      title: `Ads. Data.issues Info.error Summary`
    },
    
    adsDataIssuesInfoErrorType: {
      sql: `${CUBE}.\`ads._data.issues_info.error_type\``,
      type: `string`,
      title: `Ads. Data.issues Info.error Type`
    },
    
    adsDataIssuesInfoLevel: {
      sql: `${CUBE}.\`ads._data.issues_info.level\``,
      type: `string`,
      title: `Ads. Data.issues Info.level`
    }
  },
  
  dataSource: `default`
});
