cube(`UserVadminFacebookCampaignDataPacingType`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_campaign__data_pacing_type\``,
  
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
    campaignDataPacingType: {
      sql: `${CUBE}.\`campaign._data.pacing_type\``,
      type: `string`,
      title: `Campaign. Data.pacing Type`
    }
  },
  
  dataSource: `default`
});
