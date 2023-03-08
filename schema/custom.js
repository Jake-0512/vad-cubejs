cube(`aaa`, {
    sql: `
        SELECT 
            *
        FROM 
            vad.user_bandibull_facebook_campaignInfo
    `,
    
    preAggregations: {
      // Pre-Aggregations definitions go here
      // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
    },
    
    joins: {
        UserBandibullFacebookInsight: {
            sql: `${CUBE.campaigninfoId} = ${UserBandibullFacebookInsight.campaignid}`,
            relationship: `belongsTo`
        },
        UserBandibullFacebookInsightCampaign: {
            sql: `${CUBE.campaigninfoId} = ${UserBandibullFacebookInsightCampaign.campaignCampaignId}`,
            relationship: `belongsTo`
        },
        // UserBandibullFacebookInsightCampaignVideoPlayActions: {
        //     sql: `${UserBandibullFacebookInsightCampaign}._id = ${UserBandibullFacebookInsightCampaignVideoPlayActions}._id`,
        //     relationship: `hasMany`
        // },
        
    },
    
    measures: {
      Reach: {
        type: `sum`,
        sql: `${UserBandibullFacebookInsightCampaign.campaignReach}`,
        title: `도달`,
      },
      // Impressions: {
      //   type: `sum`,
      //   sql: campaignImpressions,
      //   title: `Impressions`,
      // },
      // Spend: {
      //   type: `sum`,
      //   sql: campaignSpend,
      //   description: `지출금액`,
      // },
      // Cpc: {
      //   type: `sum`,
      //   sql: campaignCpc,
      // },
      // Clicks: {
      //   type: `sum`,
      //   sql: campaignClicks,
      // },
    },
    
    dimensions: {
      _id: {
        sql: `_id`,
        type: `string`,
        primaryKey: true,
      },
      
      campaigninfoId: {
        sql: `${CUBE}.\`campaignInfo.id\``,
        type: `string`,
        title: `Campaigninfo.id`
      },
      
      campaigninfoName: {
        sql: `${CUBE}.\`campaignInfo.name\``,
        type: `string`,
        title: `Campaigninfo.name`
      },
      
      campaignid: {
        sql: `${UserBandibullFacebookInsight.campaignid}`,
        type: `string`
      },
    },
    
    dataSource: `default`
  });
  