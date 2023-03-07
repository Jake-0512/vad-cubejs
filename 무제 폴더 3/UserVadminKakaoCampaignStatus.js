cube(`UserVadminKakaoCampaignStatus`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_kakao_campaign_status\``,
  
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
    campaignStatus: {
      sql: `${CUBE}.\`campaign.status\``,
      type: `string`,
      title: `Campaign.status`
    }
  },
  
  dataSource: `default`
});
