cube(`UserVadminFacebookCampaignDataAdlabels`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_campaign__data_adlabels\``,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [campaignDataAdlabelsId, campaignDataAdlabelsName]
    }
  },
  
  dimensions: {
    _id: {
      sql: `_id`,
      type: `string`,
      primaryKey: true,
    },
    campaignDataAdlabelsId: {
      sql: `${CUBE}.\`campaign._data.adlabels.id\``,
      type: `string`,
      title: `Campaign. Data.adlabels.id`
    },
    
    campaignDataAdlabelsName: {
      sql: `${CUBE}.\`campaign._data.adlabels.name\``,
      type: `string`,
      title: `Campaign. Data.adlabels.name`
    }
  },
  
  dataSource: `default`
});
