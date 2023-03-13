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
        // totals: true,
      },

      accountReach: {
        type: `sum`,
        sql: `accountReach`,
      },

      totalCtr: {
        type: `sum`,
        sql: ctr,
      },

      dCtr: {
        type: `sum`,
        sql: `dCtr`,
      },

      // dCtr: {
      //   type: `sum`,
      //   sql: `${totalCtr}`,
      //   measure: true,
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
      _id: {
        sql: `_id`,
        type: `string`,
        primaryKey: true,
      },
      
      dsum: {
        sql: totalReach,
        type: `number`,
        subQuery: true,
      },
      
      // campaignName: {
      //   sql: `${UserBandibullFacebookCampaigninfo.campaigninfoName}`,
      //   type: `string`,
      //   title: `Campaigninfo.name`
      // },

      channel: {
        sql: `${CUBE}.\`name\``,
        type: `string`,
        // filters: [{ sql: `${CUBE}.row_type = 'facebook'` }],
      },

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
        type: `number`,
      },

      ctr: {
        sql: `${CUBE}.\`account.ctr\``,
        type: `string`,
      },
      
      createdAt: {
        sql: `${CUBE}.createdAt`,
        type: `time`,
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

    preAggregations: {
      orders_by_company: {
        type: `rollup`,
        measures: [CUBE.totalCtr],
        timeDimension: CUBE.createdAt,
        granularity: `day`,
      },
    },

    // queryType: `rollup`,
    // rollup: true,
    // rollup: {
    //   dCtr: {
    //     ctr: true,
    //     // country: true,
    //     // time: true
    //   }
    // }
    
    // dataSource: `default`
  });
  