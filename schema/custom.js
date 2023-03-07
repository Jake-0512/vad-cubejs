cube(`custom`, {
    sql: `
        SELECT 
            * 
        FROM 
            vad.user_bandibull_facebook_campaignInfo a
            join vad.user_bandibull_facebook_insight_campaign b
    `,
    
    preAggregations: {
      // Pre-Aggregations definitions go here
      // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
    },
    
    // joins: {
    //     UserBandibullFacebookInsight: {
    //         sql: `${CUBE.campaigninfoId} = ${UserBandibullFacebookInsight.campaignid}`,
    //         relationship: `hasMany`
    //     },
    //     UserBandibullFacebookInsightCampaign: {
    //         sql: `${CUBE.campaigninfoId} = ${UserBandibullFacebookInsightCampaign.campaignCampaignId}`,
    //         relationship: `hasMany`
    //     },
    //     UserBandibullFacebookInsightCampaignVideoPlayActions: {
    //         sql: `${UserBandibullFacebookInsightCampaign}._id = ${UserBandibullFacebookInsightCampaignVideoPlayActions}._id`,
    //         relationship: `hasMany`
    //     },
    // },
    
    measures: {
        Reach: {
            type: `sum`,
            sql: `a.campaignReach`,
            title: `도달`,
          },
    },
    
    dimensions: {

        


      
      campaigninfoId: {
        sql: `a.campaignInfo.id`,
        type: `string`,
        title: `Campaigninfo.id`
      },
      
      campaigninfoName: {
        sql: `a.campaignInfo.name`,
        type: `string`,
        title: `Campaigninfo.name`
      },
      
    },
    
    dataSource: `default`
  });
  