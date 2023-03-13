cube(`UserBandibullGoogleAdsetinfoTargetingOptimizationTypes`, {
  sql: `SELECT * FROM vad.\`user_bandibull_google_adsetInfo_targeting_optimization_types\``,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: []
    },
    
    adsetinfoTargetingOptimizationTypesValue: {
      sql: `${CUBE}.\`adsetInfo.targeting_optimization_types.value\``,
      type: `sum`,
      title: `Adsetinfo.targeting Optimization Types.value`
    }
  },
  
  dimensions: {
    adsetinfoTargetingOptimizationTypesKey: {
      sql: `${CUBE}.\`adsetInfo.targeting_optimization_types.key\``,
      type: `string`,
      title: `Adsetinfo.targeting Optimization Types.key`
    }
  },
  
  dataSource: `default`
});
