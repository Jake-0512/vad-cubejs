cube(`UserVadminFacebookCampaignFields`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_campaign__fields\``,
  
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
    campaignFields: {
      sql: `${CUBE}.\`campaign._fields\``,
      type: `string`,
      title: `Campaign. Fields`
    }
  },
  
  dataSource: `default`
});
