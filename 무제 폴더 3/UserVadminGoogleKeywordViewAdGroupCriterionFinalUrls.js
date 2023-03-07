cube(`UserVadminGoogleKeywordViewAdGroupCriterionFinalUrls`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_google_keyword_view_ad_group_criterion_final_urls\``,
  
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
    keywordViewAdGroupCriterionFinalUrls: {
      sql: `${CUBE}.\`keyword_view.ad_group_criterion.final_urls\``,
      type: `string`,
      title: `Keyword View.ad Group Criterion.final Urls`
    }
  },
  
  dataSource: `default`
});
