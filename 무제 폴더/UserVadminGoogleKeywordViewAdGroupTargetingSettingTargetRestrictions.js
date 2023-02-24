cube(`UserVadminGoogleKeywordViewAdGroupTargetingSettingTargetRestrictions`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_google_keyword_view_ad_group_targeting_setting_target_restrictions\``,
  
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
    
  },
  
  dataSource: `default`
});
