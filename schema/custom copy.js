cube(`bb`, {
  sql: `SELECT * FROM vad2.user_facebook`,
    
  preAggregations: {},
    
  joins: {},
    
    measures: {

      ctr_campaign: {
          type: `sum`,
          sql: `${CUBE}.\`campaignInsights.ctr\``,
      },

      cpc_campaign: {
          type: `sum`,
          sql: `${CUBE}.\`campaignInsights.cpc\``,
      },

      clicks: {
          type: `sum`,
          sql: `clicks`,
      },

      spend: {
        type: `sum`,
        sql: `spend`,
      },

      cpm: {
        type: `sum`,
        sql: `cpm`,
      },

      impressions: {
        type: `sum`,
        sql: `impressions`,
      },

      reach: {
          type: `sum`,
          sql: `reach`,
      },

      frequency: {
          type: `sum`,
          sql: `frequency`,
      },

    },
    
    dimensions: {

      _id: {
        sql: `_id`,
        type: `string`,
        primaryKey: true,
      },

      title: {
          sql: `${CUBE}.\`campaignInsights.campaign_name\``,
          type: `string`,
      },
      
      userId: {
        sql: `userId`,
        type: `string`,
      },

      apiId: {
        sql: `apiId`,
        type: `string`,
      },


      createdAt: {
          sql: `createdAt`,
          type: `time`
      }

    },
});