cube(`UserVadminGoogleCampaignCampaignTargetingSettingTargetRestrictions`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_google_campaign_campaign_targeting_setting_target_restrictions\``,
  
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
