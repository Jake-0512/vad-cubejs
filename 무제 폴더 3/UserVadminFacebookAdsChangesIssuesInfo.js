cube(`UserVadminFacebookAdsChangesIssuesInfo`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_ads__changes_issues_info\``,
  
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
    adsChangesIssuesInfoErrorMessage: {
      sql: `${CUBE}.\`ads._changes.issues_info.error_message\``,
      type: `string`,
      title: `Ads. Changes.issues Info.error Message`
    },
    
    adsChangesIssuesInfoErrorSummary: {
      sql: `${CUBE}.\`ads._changes.issues_info.error_summary\``,
      type: `string`,
      title: `Ads. Changes.issues Info.error Summary`
    },
    
    adsChangesIssuesInfoErrorType: {
      sql: `${CUBE}.\`ads._changes.issues_info.error_type\``,
      type: `string`,
      title: `Ads. Changes.issues Info.error Type`
    },
    
    adsChangesIssuesInfoLevel: {
      sql: `${CUBE}.\`ads._changes.issues_info.level\``,
      type: `string`,
      title: `Ads. Changes.issues Info.level`
    }
  },
  
  dataSource: `default`
});
