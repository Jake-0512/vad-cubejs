cube(`facebook`, {
  sql: `SELECT * FROM vad2.user_facebook`,

  preAggregations: {},

  joins: {},

  measures: {
    ctr: {
      type: `number`,
      sql: `ROUND((${clicks}/${impressions})*100, 2)`,
      title: `CTR`,
    },
    cpc: {
      type: `number`,
      sql: `ROUND((${spend}/${clicks}), 2)`,
      title: `CPC`,
    },
    clicks: {
      type: `sum`,
      sql: `${CUBE}.\`data.clicks\``,
      title: `링크 클릭`,
    },
    totalSpend: {
      type: `sum`,
      sql: `${CUBE}.\`data.spend\``
    },
    spend: {
      type: `number`,
      sql: `ROUND(${totalSpend}, 2)`,
      title: `지출 금액`,
    },
    cpm: {
      type: `number`,
      sql: `ROUND((${spend}/${impressions})*1000, 2)`,
      title: `CPM`,
    },
    impressions: {
      type: `sum`,
      sql: `${CUBE}.\`data.impressions\``,
      title: `노출`,
    },
    reach: {
      type: `sum`,
      sql: `${CUBE}.\`data.reach\``,
      title: `도달`,
    },
    frequency: {
      type: `number`,
      sql: `ROUND((${impressions}/${reach}), 2)`,
      title: `빈도`,
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
      type: `string`,
      title: `광고소재`,
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
    imageUrl: {
      sql: `${CUBE}.\`imageUrl\``,
      type: `string`
    },
    thumbnailUrl: {
      sql: `${CUBE}.\`thumbnailUrl\``,
      type: `string`
    },
    createdAt: {
      sql: `createdAt`,
      type: `time`
    }
  },
  
  dataSource: `facebook`
});