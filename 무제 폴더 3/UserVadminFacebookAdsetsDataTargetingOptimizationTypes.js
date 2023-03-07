cube(`UserVadminFacebookAdsetsDataTargetingOptimizationTypes`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_adsets__data_targeting_optimization_types\``,
  
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
    
    adsetsDataTargetingOptimizationTypesValue: {
      sql: `${CUBE}.\`adsets._data.targeting_optimization_types.value\``,
      type: `sum`,
      title: `Adsets. Data.targeting Optimization Types.value`
    }
  },
  
  dimensions: {
    _id: {
      sql: `_id`,
      type: `string`,
      primaryKey: true,
    },
    adsetsDataTargetingOptimizationTypesKey: {
      sql: `${CUBE}.\`adsets._data.targeting_optimization_types.key\``,
      type: `string`,
      title: `Adsets. Data.targeting Optimization Types.key`
    }
  },
  
  dataSource: `default`
});
