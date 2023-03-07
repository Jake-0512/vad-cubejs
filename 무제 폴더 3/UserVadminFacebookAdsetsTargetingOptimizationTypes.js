cube(`UserVadminFacebookAdsetsTargetingOptimizationTypes`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_adsets_targeting_optimization_types\``,
  
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
    
    adsetsTargetingOptimizationTypesValue: {
      sql: `${CUBE}.\`adsets.targeting_optimization_types.value\``,
      type: `sum`,
      title: `Adsets.targeting Optimization Types.value`
    }
  },
  
  dimensions: {
    _id: {
      sql: `_id`,
      type: `string`,
      primaryKey: true,
    },
    adsetsTargetingOptimizationTypesKey: {
      sql: `${CUBE}.\`adsets.targeting_optimization_types.key\``,
      type: `string`,
      title: `Adsets.targeting Optimization Types.key`
    }
  },
  
  dataSource: `default`
});
