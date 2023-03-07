cube(`UserVadminFacebookCampaignPacingType`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_campaign_pacing_type\``,
  
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
    campaignPacingType: {
      sql: `${CUBE}.\`campaign.pacing_type\``,
      type: `string`,
      title: `Campaign.pacing Type`
    }
  },
  
  dataSource: `default`
});
