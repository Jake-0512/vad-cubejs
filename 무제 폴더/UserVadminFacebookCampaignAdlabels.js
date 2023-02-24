cube(`UserVadminFacebookCampaignAdlabels`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_campaign_adlabels\``,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [campaignAdlabelsId, campaignAdlabelsName]
    }
  },
  
  dimensions: {
    _id: {
      sql: `_id`,
      type: `string`,
      primaryKey: true,
    },
    campaignAdlabels: {
      sql: `${CUBE}.\`campaign.adlabels\``,
      type: `string`,
      title: `Campaign.adlabels`
    },
    
    campaignAdlabelsId: {
      sql: `${CUBE}.\`campaign.adlabels.id\``,
      type: `string`,
      title: `Campaign.adlabels.id`
    },
    
    campaignAdlabelsName: {
      sql: `${CUBE}.\`campaign.adlabels.name\``,
      type: `string`,
      title: `Campaign.adlabels.name`
    }
  },
  
  dataSource: `default`
});
