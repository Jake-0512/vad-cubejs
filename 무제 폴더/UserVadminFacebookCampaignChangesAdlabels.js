cube(`UserVadminFacebookCampaignChangesAdlabels`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_campaign__changes_adlabels\``,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [campaignChangesAdlabelsId, campaignChangesAdlabelsName]
    }
  },
  
  dimensions: {
    _id: {
      sql: `_id`,
      type: `string`,
      primaryKey: true,
    },
    campaignChangesAdlabelsId: {
      sql: `${CUBE}.\`campaign._changes.adlabels.id\``,
      type: `string`,
      title: `Campaign. Changes.adlabels.id`
    },
    
    campaignChangesAdlabelsName: {
      sql: `${CUBE}.\`campaign._changes.adlabels.name\``,
      type: `string`,
      title: `Campaign. Changes.adlabels.name`
    }
  },
  
  dataSource: `default`
});
