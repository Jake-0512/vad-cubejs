cube(`bb`, {
  sql: `
    SELECT 
      *,
      'facebook' AS row_type 
    FROM 
      vad.user_bandibull_facebook_insight
    WHERE apiid = 'adAccounts'
    UNION ALL
    SELECT 
      *,
      'google' AS row_type 
    FROM 
      vad.user_bandibull_google_insight
    WHERE apiid = 'adAccounts'
  `,
    
  preAggregations: {
    // orderStatuses: {
    //     type: `rollup`,
    //     measures: [totalReach],
    //     dimensions: [reach],
    // },
  },
    
  // joins: {
    // UserBandibullGoogle: {
    //   sql: `SELECT * FROM vad.user_bandibull_google`,
    //   relationship: `hasMany`
    // },

    // UserBandibullFacebook: {
    //   sql: `SELECT * FROM vad.user_bandibull_facebook`,
    //   relationship: `hasMany`
    // },

    // UserBandibullFacebookInsight: {
    //   sql: `${UserBandibullFacebook.campaigninfoId} = ${UserBandibullFacebookInsight.campaignid}`,
    //   relationship: `belongsTo`
    // },

      // UserBandibullFacebookInsightCampaign: {
      //     sql: `${CUBE.campaigninfoId} = ${UserBandibullFacebookInsightCampaign.campaignCampaignId}`,
      //     relationship: `belongsTo`
      // },
      // UserBandibullFacebookInsightCampaignVideoPlayActions: {
      //     sql: `${UserBandibullFacebookInsightCampaign}._id = ${UserBandibullFacebookInsightCampaignVideoPlayActions}._id`,
      //     relationship: `hasMany`
      // },
      
  // },
    
    measures: {

      totalReach: {
        type: `sum`,
        sql: reach,
        // sql: `${facebookReach} + ${googleReach}`,
      },

      // accountReach: {
      //   type: `string`,
      //   sql: `accountReach`,
      //   filters: [{ sql: `${CUBE}.row_type = 'facebookInsight'` }],
      // },

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


      // facebookCampaignName: {
      //   sql: `campaigninfoName`,
      //   type: `string`,
      //   filters: [{ sql: `${CUBE}.row_type = 'facebookCampaigninfo'` }],
      // },

      facebookReach: {
        sql: `accountReach`,
        type: `string`,
        filters: [{ sql: `${CUBE}.row_type = 'facebook'` }],
      },

      googleReach: {
        sql: `accountReachs`,
        type: `string`,
        filters: [{ sql: `${CUBE}.row_type = 'google'` }],
      },
    },
    
    dimensions: {
      // _id: {
      //   sql: `_id`,
      //   type: `string`,
      //   primaryKey: true,
      // },
      
      // facebookAccountinfoId: {
      //   sql: `${Users.userId}`,
      //   type: `string`,
      //   filters: [{ sql: `${Users.userId} = 'bandibull'` }],
      // },
      
      // campaignName: {
      //   sql: `${UserBandibullFacebookCampaigninfo.campaigninfoName}`,
      //   type: `string`,
      //   title: `Campaigninfo.name`
      // },

      // channel: {
      //   sql: `${CUBE}.\`name\``,
      //   type: `string`,
      //   // filters: [{ sql: `${CUBE}.row_type = 'facebook'` }],
      // },

      type: {
        sql: `${CUBE}.row_type`,
        type: `string`,
        // filters: [{ sql: `${CUBE}.row_type = 'facebook'` }],
      },

      createdDay: {
        sql: `${CUBE}.createdDay`,
        type: `string`,
      },

      reach: {
        sql: `${CUBE}.\`account.reach\``,
        type: `string`,
      },

      ctr: {
        sql: `${CUBE}.\`account.ctr\``,
        type: `string`,
      },
      
      // reach: {
      //   sql: `${CUBE}.\`account.reach\``,
      //   type: `string`,
        // filters: [{ sql: `${CUBE}.row_type = 'facebook'` }],
      // },

      // accountReachs: {
      //   sql: `${CUBE.account.reachs_aaa}`,
      //   type: `string`,
      // },

      // reach: {
      //   sql: `
      //     case
      //       when ${CUBE}.\`row_type\` is 'facebook' then ${facebookReach}
      //       when ${CUBE}.\`row_type\` is 'google' then ${googleReach}
      //     end
      //   `,
      //   type: `string`,
      //   // filters: [{ sql: `${CUBE}.row_type = 'facebook'` }],
      // },

      // google: {
      //   sql: `${googleApiId}`,
      //   type: `string`,
      //   // filters: [{ sql: `${CUBE}.row_type = 'google'` }],
      // },

    },

    
    
    // dataSource: `default`
  });
  