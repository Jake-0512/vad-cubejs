cube(`facebook`, {
  sql: `SELECT * FROM vad2.user_facebook`,
  preAggregations: {
  },
  joins: {},
  measures: {
    // ctr: {
    //   type: `avg`,
    //   sql: `${CUBE}.\`data.ctr\``
    // },
    ctr: {
      type: `number`,
      sql: `ROUND((${clicks}/${impressions})*100, 2)`,
    },
    // cpc: {
    //   type: `sum`,
    //   sql: `${CUBE}.\`data.cpc\``
    // },
    cpc: {
      type: `number`,
      sql: `ROUND((${spend}/${clicks}), 2)`,
    },
    clicks: {
      type: `sum`,
      sql: `${CUBE}.\`data.clicks\``
    },
    totalSpend: {
      type: `sum`,
      sql: `${CUBE}.\`data.spend\``
    },
    spend: {
      type: `number`,
      sql: `ROUND(${totalSpend}, 2)`,
    },
    // cpm: {
    //   type: `sum`,
    //   sql: `${CUBE}.\`data.cpm\``
    // },
    cpm: {
      type: `number`,
      sql: `ROUND((${spend}/${impressions})*1000, 2)`,
    },
    impressions: {
      type: `sum`,
      sql: `${CUBE}.\`data.impressions\``
    },
    reach: {
      type: `sum`,
      sql: `${CUBE}.\`data.reach\``
    },
    // frequency: {
    //   type: `sum`,
    //   sql: `${CUBE}.\`data.frequency\``
    // }
    frequency: {
      type: `number`,
      sql: `ROUND((${impressions}/${reach}), 2)`,
    },
  },
  dimensions: {
    _id: {
      sql: `_id`,
      type: `string`,
      primaryKey: true
    },
    title: {
      case: {
        when: [
          { sql: `${CUBE}.apiId = 'campaigns'`, label: { sql: `${CUBE}.\`data.campaign_name\`` } },
          { sql: `${CUBE}.apiId = 'adSets'`, label: { sql: `${CUBE}.\`data.adset_name\`` } },
          { sql: `${CUBE}.apiId = 'ads'`, label: { sql: `${CUBE}.\`data.ad_name\`` } },
        ],
        else: { label: `단계 미지정` },
      },
      type: `string`
    },
    userId: {
      sql: `userId`,
      type: `string`
    },
    apiId: {
      sql: `apiId`,
      type: `string`
    },
    campaignId: {
      sql: `${CUBE}.\`data.campaign_id\``,
      type: `string`
    },
    adsetId: {
      sql: `${CUBE}.\`data.adset_id\``,
      type: `string`
    },
    createdAt: {
      sql: `createdAt`,
      type: `time`
    }
  }
});
// console.log(`facebook schema defined with dimensions:`, JSON.stringify(facebook.dimensions));