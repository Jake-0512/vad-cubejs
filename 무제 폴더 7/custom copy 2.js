cube(`cc`, {
    sql: `SELECT * FROM vad2.insight`,
      
    preAggregations: {
      // orderStatuses: {
      //     type: `rollup`,
      //     measures: [totalReach],
      //     dimensions: [reach],
      // },
    },
      
    joins: {
        InsightFacebook: {
            sql: `${CUBE.userid} = ${InsightFacebook.userid}`,
            relationship: `hasMany`
        },
  
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
        
    },
      
      measures: {
  
        totalCtr: {
          type: `sum`,
          sql: ctr,
          // sql: `${facebookReach} + ${googleReach}`,
        },

        totalCpc: {
            type: `sum`,
            sql: cpc,
            // sql: `${facebookReach} + ${googleReach}`,
          },
  
        InsightFacebookCtr: {
          type: `string`,
          sql: `accountReach`,
          filters: [{ sql: `${CUBE}.row_type = 'facebookInsight'` }],
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
        
        userid: {
          sql: `${CUBE}.userId`,
          type: `string`,
        },
        
        facebookCtr: {
          sql: `${InsightFacebook.ctr}`,
          type: `string`,
        },
  
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
          sql: `${CUBE}.\`ctr\``,
          type: `number`,
        },

        cpc: {
            sql: `${CUBE}.\`cpc\``,
            type: `number`,
        },
  

        createdat: {
            sql: `${CUBE}.\`createdAt\``,
            type: `time`
        }
        
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
});