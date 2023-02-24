cube(`UserVadminKakaoData`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_kakao_data\``,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [dataDimensionsAdAccountId, dataDimensionsAdGroupId, dataDimensionsCampaignId, dataDimensionsCreativeId]
    },
    
    dataMetricsCost: {
      sql: `${CUBE}.\`data.metrics.cost\``,
      type: `sum`,
      title: `Data.metrics.cost`
    }
  },
  
  dimensions: {
    _id: {
      sql: `_id`,
      type: `string`,
      primaryKey: true,
    },
    dataDimensionsAdAccountId: {
      sql: `${CUBE}.\`data.dimensions.ad_account_id\``,
      type: `string`,
      title: `Data.dimensions.ad Account Id`
    },
    
    dataDimensionsAdGroupId: {
      sql: `${CUBE}.\`data.dimensions.ad_group_id\``,
      type: `string`,
      title: `Data.dimensions.ad Group Id`
    },
    
    dataDimensionsCampaignId: {
      sql: `${CUBE}.\`data.dimensions.campaign_id\``,
      type: `string`,
      title: `Data.dimensions.campaign Id`
    },
    
    dataDimensionsCreativeId: {
      sql: `${CUBE}.\`data.dimensions.creative_id\``,
      type: `string`,
      title: `Data.dimensions.creative Id`
    },
    
    dataDimensionsHour: {
      sql: `${CUBE}.\`data.dimensions.hour\``,
      type: `string`,
      title: `Data.dimensions.hour`
    },
    
    dataEnd: {
      sql: `${CUBE}.\`data.end\``,
      type: `string`,
      title: `Data.end`
    },
    
    dataStart: {
      sql: `${CUBE}.\`data.start\``,
      type: `string`,
      title: `Data.start`
    }
  },
  
  dataSource: `default`
});
